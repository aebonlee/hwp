import React, { useState, useEffect } from 'react';

/* ── Color conversion helpers ─────────────────────────────────────────── */

/**
 * Convert a hex color string (#RRGGBB) to HWP BGR integer.
 */
function hexToHwpColor(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (b << 16) | (g << 8) | r;
}

/**
 * Convert an HWP BGR integer to hex color string (#RRGGBB).
 */
function hwpColorToHex(c: number): string {
  const r = c & 0xff;
  const g = (c >> 8) & 0xff;
  const b = (c >> 16) & 0xff;
  return (
    '#' +
    [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')
  );
}

/* ── Types ────────────────────────────────────────────────────────────── */

interface CellPropsDialogProps {
  t: (key: string) => string;
  onClose: () => void;
  cellProps: {
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    verticalAlign: string;
    textDirection: string;
    isHeader: boolean;
    backgroundColor: number;
  } | null;
  onApply: (props: Record<string, unknown>) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const CellPropsDialog: React.FC<CellPropsDialogProps> = ({
  t,
  onClose,
  cellProps,
  onApply,
}) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);
  const [verticalAlign, setVerticalAlign] = useState('top');
  const [textDirection, setTextDirection] = useState('horizontal');
  const [isHeader, setIsHeader] = useState(false);
  const [bgColorHex, setBgColorHex] = useState('#ffffff');

  /* ── Sync from props ── */
  useEffect(() => {
    if (cellProps) {
      setPaddingTop(cellProps.paddingTop);
      setPaddingBottom(cellProps.paddingBottom);
      setPaddingLeft(cellProps.paddingLeft);
      setPaddingRight(cellProps.paddingRight);
      setVerticalAlign(cellProps.verticalAlign);
      setTextDirection(cellProps.textDirection);
      setIsHeader(cellProps.isHeader);
      setBgColorHex(hwpColorToHex(cellProps.backgroundColor));
    }
  }, [cellProps]);

  /* ── Apply ── */
  const handleApply = () => {
    onApply({
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      verticalAlign,
      textDirection,
      isHeader,
      backgroundColor: hexToHwpColor(bgColorHex),
    });
  };

  /* ── Shared select style ── */
  const selectStyle: React.CSSProperties = {
    padding: '5px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.85rem',
    width: '100%',
  };

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{t('셀 속성')}</h3>

        <div className="hwp-dialog-grid">
          {/* Padding Top */}
          <label>{t('위 여백 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={paddingTop}
            onChange={(e) => setPaddingTop(Number(e.target.value))}
          />

          {/* Padding Bottom */}
          <label>{t('아래 여백 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={paddingBottom}
            onChange={(e) => setPaddingBottom(Number(e.target.value))}
          />

          {/* Padding Left */}
          <label>{t('왼쪽 여백 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={paddingLeft}
            onChange={(e) => setPaddingLeft(Number(e.target.value))}
          />

          {/* Padding Right */}
          <label>{t('오른쪽 여백 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={paddingRight}
            onChange={(e) => setPaddingRight(Number(e.target.value))}
          />

          {/* Vertical Align */}
          <label>{t('세로 정렬')}</label>
          <select
            value={verticalAlign}
            onChange={(e) => setVerticalAlign(e.target.value)}
            style={selectStyle}
          >
            <option value="top">{t('위')}</option>
            <option value="middle">{t('가운데')}</option>
            <option value="bottom">{t('아래')}</option>
          </select>

          {/* Text Direction */}
          <label>{t('글자 방향')}</label>
          <select
            value={textDirection}
            onChange={(e) => setTextDirection(e.target.value)}
            style={selectStyle}
          >
            <option value="horizontal">{t('가로')}</option>
            <option value="vertical">{t('세로')}</option>
          </select>

          {/* Header Cell */}
          <label>{t('머리글 셀')}</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={isHeader}
              onChange={(e) => setIsHeader(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>
              {t('이 셀을 머리글로 지정합니다')}
            </span>
          </label>

          {/* Background Color */}
          <label>{t('배경색')}</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
              type="color"
              value={bgColorHex}
              onChange={(e) => setBgColorHex(e.target.value)}
              style={{
                width: 36,
                height: 28,
                padding: 0,
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                cursor: 'pointer',
              }}
            />
            <input
              type="text"
              value={bgColorHex}
              onChange={(e) => {
                const v = e.target.value;
                if (/^#[0-9a-fA-F]{0,6}$/.test(v)) {
                  setBgColorHex(v);
                }
              }}
              style={{ flex: 1 }}
              maxLength={7}
              placeholder="#FFFFFF"
            />
          </div>
        </div>

        <div className="hwp-dialog-actions">
          <button onClick={onClose}>{t('취소')}</button>
          <button className="primary" onClick={handleApply}>
            {t('적용')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CellPropsDialog;
