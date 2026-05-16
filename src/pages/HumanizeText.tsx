import { useState, useCallback, useMemo, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import getSupabase from '../utils/supabase';
import '../styles/humanize-text.css';

type HumanizeTextStep = 'input' | 'processing' | 'done';
type Intensity = 'light' | 'moderate' | 'aggressive';
type Tone = 'formal' | 'casual' | 'academic';
type LineStatus = 'same' | 'changed' | 'added' | 'removed';

interface LineRow {
  left: string;
  right: string;
  status: LineStatus;
}

function splitLines(text: string): string[] {
  return text.split('\n').filter(line => line.trim() !== '');
}

function buildLineRows(original: string, modified: string): LineRow[] {
  const leftLines = splitLines(original);
  const rightLines = splitLines(modified);
  const rows: LineRow[] = [];
  const max = Math.max(leftLines.length, rightLines.length);
  for (let i = 0; i < max; i++) {
    const l = leftLines[i] ?? '';
    const r = rightLines[i] ?? '';
    let status: LineStatus;
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

const HumanizeText = (): ReactElement => {
  const { t } = useLanguage();
  const [step, setStep] = useState<HumanizeTextStep>('input');
  const [text, setText] = useState('');
  const [originalText, setOriginalText] = useState('');
  const [humanizedText, setHumanizedText] = useState('');
  const [error, setError] = useState('');
  const [intensity, setIntensity] = useState<Intensity>('moderate');
  const [tone, setTone] = useState<Tone>('formal');
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'result'>('side-by-side');

  const lineRows = useMemo(
    () => (step === 'done' ? buildLineRows(originalText, humanizedText) : []),
    [step, originalText, humanizedText]
  );

  const handleHumanize = useCallback(async () => {
    if (!text.trim()) return;
    setOriginalText(text);
    setStep('processing');
    setError('');

    try {
      const client = getSupabase();
      if (!client) throw new Error('Supabase not configured');

      const { data, error: fnError } = await client.functions.invoke('humanize-document', {
        body: {
          markdown: text,
          intensity,
          tone,
          provider: 'openai',
        },
      });

      if (fnError) throw fnError;
      setHumanizedText(data?.humanized || data?.markdown || text);
      setStep('done');
    } catch {
      setError(t('site.humanize.serviceUnavailable'));
      setStep('input');
    }
  }, [text, intensity, tone, t]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(humanizedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([humanizedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'humanized.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setStep('input');
    setText('');
    setOriginalText('');
    setHumanizedText('');
    setError('');
  };

  return (
    <>
      <SEOHead title={t('site.humanizeText.title')} path="/humanize-text" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.humanizeText.title')}</h2>
          <p>{t('site.humanizeText.subtitle')}</p>
        </div>
      </section>

      <section className="section humanize-text-page">
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

          {/* 1단계: 텍스트 입력 + 옵션 */}
          {step === 'input' && (
            <div className="humanize-text-input-area">
              <div className="humanize-text-input">
                <textarea
                  value={text}
                  onChange={e => setText(e.target.value)}
                  placeholder={t('site.humanizeText.placeholder')}
                />
                <div className="humanize-text-info">
                  <span>{text.length.toLocaleString()} {t('site.humanizeText.charCount')}</span>
                </div>
              </div>

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

              <div className="humanize-actions">
                <button
                  className="btn-primary"
                  onClick={handleHumanize}
                  disabled={!text.trim()}
                >
                  {t('site.humanizeText.startConvert')}
                </button>
              </div>
            </div>
          )}

          {/* 2단계: 처리 중 */}
          {step === 'processing' && (
            <div className="humanize-processing">
              <div className="loading-spinner"></div>
              <p>{t('site.humanizeText.processing')}</p>
            </div>
          )}

          {/* 3단계: 결과 */}
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
                  <button onClick={handleDownload}>
                    {t('site.convert.download')}
                  </button>
                  <button onClick={reset}>
                    {t('site.humanizeText.reset')}
                  </button>
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
                    {lineRows.map((row, i) => (
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
                  <pre className="humanize-pre full">{humanizedText}</pre>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HumanizeText;
