import { useState, useCallback, useMemo, type ReactElement, type DragEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { formatFileSize, getFileExtension } from '../utils/fileUtils';
import getSupabase from '../utils/supabase';
import '../styles/humanize.css';

type HumanizeStep = 'upload' | 'preview' | 'processing' | 'done';
type Intensity = 'light' | 'moderate' | 'aggressive';
type Tone = 'formal' | 'casual' | 'academic';
type ParaStatus = 'same' | 'changed' | 'added' | 'removed';

interface ParaRow {
  left: string;
  right: string;
  status: ParaStatus;
}

function splitParagraphs(text: string): string[] {
  return text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
}

function buildParaRows(original: string, modified: string): ParaRow[] {
  const leftParas = splitParagraphs(original);
  const rightParas = splitParagraphs(modified);
  const rows: ParaRow[] = [];
  const max = Math.max(leftParas.length, rightParas.length);
  for (let i = 0; i < max; i++) {
    const l = leftParas[i] ?? '';
    const r = rightParas[i] ?? '';
    let status: ParaStatus;
    if (l && r) {
      status = l === r ? 'same' : 'changed';
    } else if (l) {
      status = 'removed';
    } else {
      status = 'added';
    }
    rows.push({ left: l, right: r, status });
  }
  return rows;
}

const Humanize = (): ReactElement => {
  const { t } = useLanguage();
  const [step, setStep] = useState<HumanizeStep>('upload');
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [originalMarkdown, setOriginalMarkdown] = useState('');
  const [humanizedMarkdown, setHumanizedMarkdown] = useState('');
  const [error, setError] = useState('');
  const [intensity, setIntensity] = useState<Intensity>('moderate');
  const [tone, setTone] = useState<Tone>('formal');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'result'>('side-by-side');

  const paraRows = useMemo(
    () => (step === 'done' ? buildParaRows(originalMarkdown, humanizedMarkdown) : []),
    [step, originalMarkdown, humanizedMarkdown]
  );

  const parseFile = useCallback(async (f: File): Promise<string> => {
    const ext = getFileExtension(f.name);
    const arrayBuf = await f.arrayBuffer();

    if (ext === 'md' || ext === 'txt') {
      return new TextDecoder('utf-8').decode(arrayBuf);
    }

    // kordoc 파서로 변환
    const { parseHwpxDocument, parseDocxDocument, blocksToMarkdown } = await import('../lib/kordoc/index');

    if (ext === 'hwpx') {
      const result = await parseHwpxDocument(arrayBuf);
      return result.markdown || blocksToMarkdown(result.blocks);
    } else if (ext === 'docx') {
      const result = await parseDocxDocument(arrayBuf);
      return result.markdown || blocksToMarkdown(result.blocks);
    } else if (ext === 'hwp') {
      const { parseHwp } = await import('../lib/hwp/parser');
      const doc = await parseHwp(arrayBuf);
      const { irToMarkdown } = await import('../lib/ir/toMarkdown');
      return irToMarkdown(doc);
    }

    throw new Error('지원하지 않는 파일 형식입니다.');
  }, []);

  const handleFile = useCallback(async (f: File) => {
    const ext = getFileExtension(f.name);
    const supported = ['hwp', 'hwpx', 'docx', 'md', 'txt'];
    if (!supported.includes(ext)) {
      setError('지원 포맷: .hwpx, .docx, .hwp, .md, .txt');
      return;
    }
    setFile(f);
    setError('');

    try {
      const md = await parseFile(f);
      setOriginalMarkdown(md);
      setStep('preview');
    } catch (err) {
      setError((err as Error).message || '파일 파싱 중 오류가 발생했습니다.');
    }
  }, [parseFile]);

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFile(files[0]);
  };

  const onFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwpx,.docx,.hwp,.md,.txt';
    input.onchange = () => {
      if (input.files && input.files.length > 0) handleFile(input.files[0]);
    };
    input.click();
  };

  const handleHumanize = async () => {
    setStep('processing');
    setError('');

    try {
      const client = getSupabase();
      if (!client) throw new Error('Supabase not configured');

      const { data, error: fnError } = await client.functions.invoke('humanize-document', {
        body: {
          markdown: originalMarkdown,
          intensity,
          tone,
          provider: 'openai',
        },
      });

      if (fnError) throw fnError;
      setHumanizedMarkdown(data?.humanized || data?.markdown || originalMarkdown);
      setStep('done');
    } catch {
      setError(t('site.humanize.serviceUnavailable'));
      setStep('preview');
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(humanizedMarkdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMd = () => {
    const blob = new Blob([humanizedMarkdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (file?.name.replace(/\.[^.]+$/, '') || 'humanized') + '.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadHwpx = async () => {
    try {
      const { markdownToHwpx } = await import('../lib/kordoc/index');
      const arrayBuffer = await markdownToHwpx(humanizedMarkdown);
      const blob = new Blob([arrayBuffer], { type: 'application/hwp+zip' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = (file?.name.replace(/\.[^.]+$/, '') || 'humanized') + '.hwpx';
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('HWPX export error:', err);
    }
  };

  const reset = () => {
    setStep('upload');
    setFile(null);
    setOriginalMarkdown('');
    setHumanizedMarkdown('');
    setError('');
  };

  return (
    <>
      <SEOHead title={t('site.humanize.title')} path="/humanize" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.humanize.title')}</h2>
          <p>{t('site.humanize.subtitle')}</p>
        </div>
      </section>

      <section className="section humanize-page">
        <div className="container">
          {error && (
            <div className="error-alert">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          {/* 1단계: 파일 업로드 */}
          {step === 'upload' && (
            <div
              className={`dropzone ${dragOver ? 'drag-over' : ''}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
              onClick={onFileSelect}
            >
              <svg className="dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <h3>{t('site.humanize.dropzone')}</h3>
              <p>.hwpx, .docx, .hwp, .md, .txt</p>
            </div>
          )}

          {/* 2단계: 미리보기 + 옵션 설정 */}
          {step === 'preview' && (
            <div className="humanize-preview">
              {file && (
                <div className="file-info">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div>
                    <div className="file-info-name">{file.name}</div>
                    <div className="file-info-size">{formatFileSize(file.size)}</div>
                  </div>
                </div>
              )}

              <div className="humanize-options">
                <div className="option-group">
                  <label>{t('site.humanize.intensity')}</label>
                  <div className="option-buttons">
                    <button className={intensity === 'light' ? 'active' : ''} onClick={() => setIntensity('light')}>
                      {t('site.humanize.intensityLight')}
                    </button>
                    <button className={intensity === 'moderate' ? 'active' : ''} onClick={() => setIntensity('moderate')}>
                      {t('site.humanize.intensityModerate')}
                    </button>
                    <button className={intensity === 'aggressive' ? 'active' : ''} onClick={() => setIntensity('aggressive')}>
                      {t('site.humanize.intensityAggressive')}
                    </button>
                  </div>
                </div>

                <div className="option-group">
                  <label>{t('site.humanize.tone')}</label>
                  <div className="option-buttons">
                    <button className={tone === 'formal' ? 'active' : ''} onClick={() => setTone('formal')}>
                      {t('site.humanize.toneFormal')}
                    </button>
                    <button className={tone === 'casual' ? 'active' : ''} onClick={() => setTone('casual')}>
                      {t('site.humanize.toneCasual')}
                    </button>
                    <button className={tone === 'academic' ? 'active' : ''} onClick={() => setTone('academic')}>
                      {t('site.humanize.toneAcademic')}
                    </button>
                  </div>
                </div>
              </div>

              <div className="humanize-source-preview">
                <div className="preview-header">
                  <span>{t('site.humanize.originalPreview')}</span>
                  <span className="preview-lines">{originalMarkdown.split('\n').length} lines</span>
                </div>
                <pre className="humanize-pre">{originalMarkdown.slice(0, 3000)}{originalMarkdown.length > 3000 ? '\n...' : ''}</pre>
              </div>

              <div className="humanize-actions">
                <button className="btn-secondary" onClick={reset}>{t('site.humanize.back')}</button>
                <button className="btn-primary" onClick={handleHumanize}>{t('site.humanize.startConvert')}</button>
              </div>
            </div>
          )}

          {/* 3단계: 처리 중 */}
          {step === 'processing' && (
            <div className="humanize-processing">
              <div className="loading-spinner"></div>
              <p>{t('site.humanize.processing')}</p>
            </div>
          )}

          {/* 4단계: 결과 */}
          {step === 'done' && (
            <div className="humanize-result">
              <div className="result-header">
                <div className="result-tabs">
                  <button
                    className={`result-tab ${viewMode === 'side-by-side' ? 'active' : ''}`}
                    onClick={() => setViewMode('side-by-side')}
                  >
                    {t('site.humanize.compare')}
                  </button>
                  <button
                    className={`result-tab ${viewMode === 'result' ? 'active' : ''}`}
                    onClick={() => setViewMode('result')}
                  >
                    {t('site.humanize.resultOnly')}
                  </button>
                </div>
                <div className="result-actions">
                  <button onClick={handleCopy}>
                    {copied ? t('site.convert.copied') : t('site.convert.copy')}
                  </button>
                  <button onClick={handleDownloadMd}>Markdown</button>
                  <button onClick={handleDownloadHwpx}>HWPX</button>
                  <button onClick={reset}>{t('site.humanize.newConversion')}</button>
                </div>
              </div>

              <div className={`humanize-result-content ${viewMode}`}>
                {viewMode === 'side-by-side' ? (
                  <div className="para-compare">
                    <div className="para-compare-legend">
                      <span className="legend-item legend-same">{t('site.humanize.paraSame')}</span>
                      <span className="legend-item legend-changed">{t('site.humanize.paraChanged')}</span>
                      <span className="legend-item legend-added">{t('site.humanize.paraAdded')}</span>
                      <span className="legend-item legend-removed">{t('site.humanize.paraRemoved')}</span>
                    </div>
                    {paraRows.map((row, i) => (
                      <div key={i} className={`para-row para-${row.status}`}>
                        <div className="para-index">
                          <span className="para-num">#{i + 1}</span>
                          <span className={`para-badge badge-${row.status}`}>
                            {row.status === 'same' ? t('site.humanize.paraSame')
                              : row.status === 'changed' ? t('site.humanize.paraChanged')
                              : row.status === 'added' ? t('site.humanize.paraAdded')
                              : t('site.humanize.paraRemoved')}
                          </span>
                        </div>
                        <div className="para-cols">
                          <div className="para-col para-left">
                            {row.left || <span className="para-empty">&mdash;</span>}
                          </div>
                          <div className="para-col para-right">
                            {row.right || <span className="para-empty">&mdash;</span>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <pre className="humanize-pre full">{humanizedMarkdown}</pre>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Humanize;
