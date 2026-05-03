import React, { useState } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface TableDialogProps {
  t: (key: string) => string;
  onClose: () => void;
  onInsert: (
    rows: number,
    cols: number,
    options: { treatAsChar?: boolean; colWidths?: number[] }
  ) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const TableDialog: React.FC<TableDialogProps> = ({ t, onClose, onInsert }) => {
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [treatAsChar, setTreatAsChar] = useState(false);
  const [widthMode, setWidthMode] = useState<'equal' | 'custom'>('equal');
  const [customWidths, setCustomWidths] = useState('');

  /* ── Handlers ── */

  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  const handleInsert = () => {
    const r = clamp(rows, 1, 50);
    const c = clamp(cols, 1, 20);

    const options: { treatAsChar?: boolean; colWidths?: number[] } = {};

    if (treatAsChar) {
      options.treatAsChar = true;
    }

    if (widthMode === 'custom' && customWidths.trim()) {
      const parsed = customWidths
        .split(',')
        .map((s) => Number(s.trim()))
        .filter((n) => !isNaN(n) && n > 0);

      if (parsed.length === c) {
        options.colWidths = parsed;
      }
      // If count mismatch, fall back to equal widths (no colWidths)
    }

    onInsert(r, c, options);
  };

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{t('표 삽입')}</h3>

        <div className="hwp-dialog-grid">
          {/* Rows */}
          <label>{t('행 수')}</label>
          <input
            type="number"
            min={1}
            max={50}
            value={rows}
            onChange={(e) => setRows(clamp(Number(e.target.value), 1, 50))}
          />

          {/* Cols */}
          <label>{t('열 수')}</label>
          <input
            type="number"
            min={1}
            max={20}
            value={cols}
            onChange={(e) => setCols(clamp(Number(e.target.value), 1, 20))}
          />

          {/* Treat as character */}
          <label>{t('문자처럼 취급')}</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={treatAsChar}
              onChange={(e) => setTreatAsChar(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>
              {t('표를 문자처럼 취급합니다')}
            </span>
          </label>

          {/* Column width mode */}
          <label>{t('열 너비')}</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                name="widthMode"
                checked={widthMode === 'equal'}
                onChange={() => setWidthMode('equal')}
              />
              <span style={{ fontSize: '0.82rem' }}>{t('균등 배분')}</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                name="widthMode"
                checked={widthMode === 'custom'}
                onChange={() => setWidthMode('custom')}
              />
              <span style={{ fontSize: '0.82rem' }}>{t('사용자 지정')}</span>
            </label>

            {widthMode === 'custom' && (
              <input
                type="text"
                placeholder={t(`HWPUNIT, 쉼표 구분 (예: 4000,4000,4000)`)}
                value={customWidths}
                onChange={(e) => setCustomWidths(e.target.value)}
                style={{ marginTop: 4 }}
              />
            )}
          </div>
        </div>

        <div className="hwp-dialog-actions">
          <button onClick={onClose}>{t('취소')}</button>
          <button className="primary" onClick={handleInsert}>
            {t('삽입')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableDialog;
