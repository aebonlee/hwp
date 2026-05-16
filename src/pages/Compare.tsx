import { useState, type ReactElement } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

interface ParaRow {
  left: string;
  right: string;
  status: 'same' | 'changed' | 'added' | 'removed';
}

function splitParagraphs(text: string): string[] {
  return text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
}

function buildRows(leftParas: string[], rightParas: string[]): ParaRow[] {
  const rows: ParaRow[] = [];
  const max = Math.max(leftParas.length, rightParas.length);
  for (let i = 0; i < max; i++) {
    const l = leftParas[i] ?? '';
    const r = rightParas[i] ?? '';
    let status: ParaRow['status'];
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

const Compare = (): ReactElement => {
  const { t } = useLanguage();
  const [original, setOriginal] = useState('');
  const [modified, setModified] = useState('');
  const [rows, setRows] = useState<ParaRow[] | null>(null);

  const handleCompare = () => {
    const leftParas = splitParagraphs(original);
    const rightParas = splitParagraphs(modified);
    setRows(buildRows(leftParas, rightParas));
  };

  const handleReset = () => {
    setOriginal('');
    setModified('');
    setRows(null);
  };

  const statusLabel = (s: ParaRow['status']): string => {
    const map: Record<string, string> = {
      same: t('site.compare.same'),
      changed: t('site.compare.changed'),
      added: t('site.compare.added'),
      removed: t('site.compare.removed'),
    };
    return map[s] || s;
  };

  return (
    <>
      <SEOHead title={t('site.compare.title')} path="/compare" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.compare.title')}</h2>
          <p>{t('site.compare.subtitle')}</p>
        </div>
      </section>

      <section className="section compare-page">
        <div className="container">
          {/* Input area */}
          <div className="compare-input-area">
            <div className="compare-input-col">
              <label>{t('site.compare.original')}</label>
              <textarea
                value={original}
                onChange={e => setOriginal(e.target.value)}
                placeholder={t('site.compare.placeholder')}
                rows={12}
              />
            </div>
            <div className="compare-input-col">
              <label>{t('site.compare.modified')}</label>
              <textarea
                value={modified}
                onChange={e => setModified(e.target.value)}
                placeholder={t('site.compare.placeholder')}
                rows={12}
              />
            </div>
          </div>

          <div className="compare-actions">
            <button
              className="btn-primary"
              onClick={handleCompare}
              disabled={!original.trim() && !modified.trim()}
            >
              {t('site.compare.compare')}
            </button>
            <button className="btn-secondary" onClick={handleReset}>
              {t('site.compare.reset')}
            </button>
          </div>

          {/* Results */}
          {rows && (
            <div className="compare-result">
              <div className="compare-legend">
                <span className="legend-item legend-same">{t('site.compare.same')}</span>
                <span className="legend-item legend-changed">{t('site.compare.changed')}</span>
                <span className="legend-item legend-added">{t('site.compare.added')}</span>
                <span className="legend-item legend-removed">{t('site.compare.removed')}</span>
              </div>

              {rows.map((row, i) => (
                <div key={i} className={`para-row para-${row.status}`}>
                  <div className="para-index">
                    <span className="para-num">#{i + 1}</span>
                    <span className={`para-badge badge-${row.status}`}>{statusLabel(row.status)}</span>
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

              {rows.length === 0 && (
                <p className="compare-no-result">{t('site.compare.noResult')}</p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Compare;
