import { useState, useCallback, type ReactElement, type DragEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { formatFileSize, getFileExtension } from '../utils/fileUtils';
import type { IRDocument } from '../types/hwpx';
import '../styles/convert.css';

type ConvertStep = 'upload' | 'converting' | 'done';

const Convert = (): ReactElement => {
  const { t } = useLanguage();
  const [step, setStep] = useState<ConvertStep>('upload');
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [markdown, setMarkdown] = useState('');
  const [_irDoc, setIrDoc] = useState<IRDocument | null>(null);
  const [tab, setTab] = useState<'source' | 'preview'>('source');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const handleFile = useCallback(async (f: File) => {
    const ext = getFileExtension(f.name);
    if (ext !== 'hwp' && ext !== 'hwpx') {
      setError('.hwp 또는 .hwpx 파일만 지원합니다.');
      return;
    }
    setFile(f);
    setError('');
    setStep('converting');

    try {
      if (ext === 'hwpx') {
        const { parseHwpx } = await import('../lib/hwpx/parser');
        const arrayBuf = await f.arrayBuffer();
        const doc = await parseHwpx(arrayBuf);
        setIrDoc(doc);
        const { irToMarkdown } = await import('../lib/ir/toMarkdown');
        const md = irToMarkdown(doc);
        setMarkdown(md);
      } else {
        const { parseHwp } = await import('../lib/hwp/parser');
        const arrayBuf = await f.arrayBuffer();
        const doc = await parseHwp(arrayBuf);
        setIrDoc(doc);
        const { irToMarkdown } = await import('../lib/ir/toMarkdown');
        const md = irToMarkdown(doc);
        setMarkdown(md);
      }
      setStep('done');
    } catch (err) {
      setError((err as Error).message || '변환 중 오류가 발생했습니다.');
      setStep('upload');
    }
  }, []);

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFile(files[0]);
  };

  const onFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files && input.files.length > 0) handleFile(input.files[0]);
    };
    input.click();
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (file?.name.replace(/\.(hwp|hwpx)$/i, '') || 'document') + '.md';
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setStep('upload');
    setFile(null);
    setMarkdown('');
    setIrDoc(null);
    setError('');
  };

  return (
    <>
      <SEOHead title={t('site.convert.title')} path="/convert" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.convert.title')}</h2>
          <p>{t('site.convert.subtitle')}</p>
        </div>
      </section>

      <section className="section convert-page">
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
              <h3>{t('site.convert.dropzone')}</h3>
              <p>{t('site.convert.dropzoneHint')}</p>
            </div>
          )}

          {step === 'converting' && (
            <div className="conversion-progress">
              <div className="progress-steps">
                <div className="progress-step active">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </div>
                  <span className="step-label">파일 읽기</span>
                </div>
                <div className="progress-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <span className="step-label">파싱</span>
                </div>
                <div className="progress-step">
                  <div className="step-icon">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </div>
                  <span className="step-label">변환</span>
                </div>
              </div>
              <p>{t('site.convert.converting')}</p>
            </div>
          )}

          {step === 'done' && (
            <div className="conversion-result">
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

              <div className="result-header">
                <div className="result-tabs">
                  <button className={`result-tab ${tab === 'source' ? 'active' : ''}`} onClick={() => setTab('source')}>
                    {t('site.convert.source')}
                  </button>
                  <button className={`result-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>
                    {t('site.convert.preview')}
                  </button>
                </div>
                <div className="result-actions">
                  <button onClick={handleCopy}>
                    {copied ? t('site.convert.copied') : t('site.convert.copy')}
                  </button>
                  <button onClick={handleDownload}>
                    {t('site.convert.download')}
                  </button>
                  <button onClick={reset}>
                    {t('site.convert.newConversion')}
                  </button>
                </div>
              </div>

              <div className="result-content">
                {tab === 'source' ? (
                  <pre>{markdown}</pre>
                ) : (
                  <div className="result-preview" dangerouslySetInnerHTML={{ __html: markdownToHtml(markdown) }} />
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

/** Simple markdown to HTML for preview (basic) */
function markdownToHtml(md: string): string {
  let html = md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^\d+\. (.+)$/gm, '<li>$1</li>');

  // Convert remaining newlines to paragraphs
  html = html.split('\n\n').map(p => {
    p = p.trim();
    if (!p) return '';
    if (p.startsWith('<h') || p.startsWith('<li') || p.startsWith('<table')) return p;
    return `<p>${p}</p>`;
  }).join('\n');

  return html;
}

export default Convert;
