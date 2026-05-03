import React, { useState, useEffect } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface TablePropsDialogProps {
  t: (key: string) => string;
  onClose: () => void;
  tableProps: {
    cellSpacing: number;
    cellPadding: number;
    pageBreak: boolean;
    repeatHeader: boolean;
    borderWidth: number;
    width: number;
    alignment: string;
  } | null;
  onApply: (props: Record<string, unknown>) => void;
}

/* ── Component ────────────────────────────────────────────────────────── */

const TablePropsDialog: React.FC<TablePropsDialogProps> = ({
  t,
  onClose,
  tableProps,
  onApply,
}) => {
  const [cellSpacing, setCellSpacing] = useState(0);
  const [cellPadding, setCellPadding] = useState(0);
  const [pageBreak, setPageBreak] = useState(false);
  const [repeatHeader, setRepeatHeader] = useState(false);
  const [borderWidth, setBorderWidth] = useState(0);
  const [width, setWidth] = useState(0);
  const [alignment, setAlignment] = useState('left');

  /* ── Sync from props ── */
  useEffect(() => {
    if (tableProps) {
      setCellSpacing(tableProps.cellSpacing);
      setCellPadding(tableProps.cellPadding);
      setPageBreak(tableProps.pageBreak);
      setRepeatHeader(tableProps.repeatHeader);
      setBorderWidth(tableProps.borderWidth);
      setWidth(tableProps.width);
      setAlignment(tableProps.alignment);
    }
  }, [tableProps]);

  /* ── Apply ── */
  const handleApply = () => {
    onApply({
      cellSpacing,
      cellPadding,
      pageBreak,
      repeatHeader,
      borderWidth,
      width,
      alignment,
    });
  };

  /* ── Render ── */

  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{t('표 속성')}</h3>

        <div className="hwp-dialog-grid">
          {/* Cell Spacing */}
          <label>{t('셀 간격 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={cellSpacing}
            onChange={(e) => setCellSpacing(Number(e.target.value))}
          />

          {/* Cell Padding */}
          <label>{t('셀 여백 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={cellPadding}
            onChange={(e) => setCellPadding(Number(e.target.value))}
          />

          {/* Page Break */}
          <label>{t('페이지 경계 분리')}</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={pageBreak}
              onChange={(e) => setPageBreak(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>
              {t('페이지 경계에서 표를 나눕니다')}
            </span>
          </label>

          {/* Repeat Header */}
          <label>{t('제목 행 반복')}</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={repeatHeader}
              onChange={(e) => setRepeatHeader(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>
              {t('각 페이지마다 제목 행을 반복합니다')}
            </span>
          </label>

          {/* Border Width */}
          <label>{t('테두리 두께')}</label>
          <input
            type="number"
            min={0}
            value={borderWidth}
            onChange={(e) => setBorderWidth(Number(e.target.value))}
          />

          {/* Table Width */}
          <label>{t('표 너비 (HWPUNIT)')}</label>
          <input
            type="number"
            min={0}
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />

          {/* Alignment */}
          <label>{t('정렬')}</label>
          <select
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
            style={{
              padding: '5px 10px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              width: '100%',
            }}
          >
            <option value="left">{t('왼쪽')}</option>
            <option value="center">{t('가운데')}</option>
            <option value="right">{t('오른쪽')}</option>
          </select>
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

export default TablePropsDialog;
