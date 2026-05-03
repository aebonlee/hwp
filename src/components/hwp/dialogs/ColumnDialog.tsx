import React, { useState, useEffect } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface ColumnDialogProps {
  onClose: () => void;
  currentDef: {
    count: number;
    type: string;
    gap: number;
    widths: number[];
    separatorType: string;
  } | null;
  onApply: (def: {
    count: number;
    type: string;
    gap: number;
    widths?: number[];
    separatorType: string;
  }) => void;
  onInsertBreak: () => void;
}

const SEPARATOR_OPTIONS = [
  { value: 'none', label: '없음 (none)' },
  { value: 'solid', label: '실선 (solid)' },
  { value: 'dashed', label: '점선 (dashed)' },
  { value: 'double', label: '이중선 (double)' },
];

/* ── Component ────────────────────────────────────────────────────────── */

const ColumnDialog: React.FC<ColumnDialogProps> = ({
  onClose,
  currentDef,
  onApply,
  onInsertBreak,
}) => {
  // ── Form state ──
  const [count, setCount] = useState(1);
  const [type, setType] = useState<'equal' | 'custom'>('equal');
  const [gap, setGap] = useState(1134);
  const [customWidths, setCustomWidths] = useState<number[]>([]);
  const [separatorType, setSeparatorType] = useState('none');

  // ── Initialize from current definition ──
  useEffect(() => {
    if (currentDef) {
      setCount(currentDef.count);
      setType(currentDef.type === 'custom' ? 'custom' : 'equal');
      setGap(currentDef.gap);
      setSeparatorType(currentDef.separatorType);
      if (currentDef.widths.length > 0) {
        setCustomWidths([...currentDef.widths]);
      }
    }
  }, [currentDef]);

  // ── Keep custom widths array in sync with count ──
  useEffect(() => {
    setCustomWidths((prev) => {
      const next = Array.from({ length: count }, (_, i) =>
        i < prev.length ? prev[i] : 8504
      );
      return next;
    });
  }, [count]);

  // ── Helpers ──
  const clamp = (val: number, min: number, max: number) =>
    Math.max(min, Math.min(max, val));

  const handleCountChange = (val: number) => {
    setCount(clamp(val, 1, 5));
  };

  const handleWidthChange = (index: number, val: number) => {
    setCustomWidths((prev) => {
      const next = [...prev];
      next[index] = Math.max(0, val);
      return next;
    });
  };

  const handleApply = () => {
    const def: {
      count: number;
      type: string;
      gap: number;
      widths?: number[];
      separatorType: string;
    } = {
      count,
      type,
      gap,
      separatorType,
    };

    if (type === 'custom' && customWidths.length === count) {
      def.widths = [...customWidths];
    }

    onApply(def);
  };

  const handleInsertBreak = () => {
    onInsertBreak();
  };

  // ── Preview: compute column proportions ──
  const getPreviewWidths = (): number[] => {
    if (type === 'custom' && customWidths.length === count) {
      const total = customWidths.reduce((s, w) => s + w, 0);
      if (total > 0) {
        return customWidths.map((w) => (w / total) * 100);
      }
    }
    return Array.from({ length: count }, () => 100 / count);
  };

  const previewWidths = getPreviewWidths();

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>다단 설정</h3>

        <div className="hwp-dialog-grid">
          {/* Column count */}
          <label>단 수</label>
          <input
            type="number"
            min={1}
            max={5}
            value={count}
            onChange={(e) => handleCountChange(Number(e.target.value))}
          />

          {/* Type */}
          <label>유형</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                name="colType"
                checked={type === 'equal'}
                onChange={() => setType('equal')}
              />
              <span style={{ fontSize: '0.82rem' }}>균등 (equal)</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="radio"
                name="colType"
                checked={type === 'custom'}
                onChange={() => setType('custom')}
              />
              <span style={{ fontSize: '0.82rem' }}>사용자 지정 (custom)</span>
            </label>
          </div>

          {/* Gap */}
          <label>간격 (HWPUNIT)</label>
          <input
            type="number"
            min={0}
            value={gap}
            onChange={(e) => setGap(Math.max(0, Number(e.target.value)))}
          />

          {/* Separator type */}
          <label>구분선</label>
          <select
            value={separatorType}
            onChange={(e) => setSeparatorType(e.target.value)}
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
            {SEPARATOR_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Custom widths section */}
        {type === 'custom' && count > 1 && (
          <>
            <h4
              style={{
                fontSize: '0.9rem',
                margin: '12px 0 8px',
                color: 'var(--text-primary)',
              }}
            >
              개별 단 너비 (HWPUNIT)
            </h4>
            <div className="hwp-dialog-grid">
              {customWidths.map((w, i) => (
                <React.Fragment key={i}>
                  <label>단 {i + 1}</label>
                  <input
                    type="number"
                    min={0}
                    value={w}
                    onChange={(e) => handleWidthChange(i, Number(e.target.value))}
                  />
                </React.Fragment>
              ))}
            </div>
          </>
        )}

        {/* Preview */}
        <h4
          style={{
            fontSize: '0.9rem',
            margin: '12px 0 8px',
            color: 'var(--text-primary)',
          }}
        >
          미리보기
        </h4>
        <div
          style={{
            display: 'flex',
            gap: 2,
            height: 80,
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-sm)',
            padding: 8,
            background: 'var(--bg-secondary, #f5f5f5)',
            alignItems: 'stretch',
          }}
        >
          {previewWidths.map((pct, i) => (
            <React.Fragment key={i}>
              <div
                style={{
                  flex: `0 0 ${pct}%`,
                  background: 'var(--bg-primary, #fff)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {i + 1}
              </div>
              {i < previewWidths.length - 1 && separatorType !== 'none' && (
                <div
                  style={{
                    width: 1,
                    alignSelf: 'stretch',
                    borderLeft:
                      separatorType === 'dashed'
                        ? '1px dashed var(--text-secondary)'
                        : separatorType === 'double'
                          ? '3px double var(--text-secondary)'
                          : '1px solid var(--text-secondary)',
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Insert column break button */}
        <div style={{ margin: '12px 0 0', textAlign: 'center' }}>
          <button
            onClick={handleInsertBreak}
            style={{
              padding: '6px 16px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            단 나누기 삽입
          </button>
        </div>

        {/* Actions */}
        <div className="hwp-dialog-actions">
          <button onClick={onClose}>취소</button>
          <button className="primary" onClick={handleApply}>
            적용
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnDialog;
