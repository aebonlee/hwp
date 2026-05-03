import React, { useState, useEffect } from 'react';

interface ShapeDialogProps {
  mode: 'insert' | 'properties';
  onClose: () => void;
  /** For 'properties' mode -- existing shape data */
  shapeProps?: {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
    textWrap: string;
    zOrder: number;
    treatAsChar: boolean;
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
  } | null;
  onInsert?: (opts: { width: number; height: number; treatAsChar?: boolean }) => void;
  onApply?: (props: Record<string, unknown>) => void;
}

const TEXT_WRAP_OPTIONS = [
  { value: 'none', label: '없음 (none)' },
  { value: 'square', label: '자리차지 (square)' },
  { value: 'tight', label: '빈 공간 (tight)' },
  { value: 'through', label: '어울림 (through)' },
];

const ShapeDialog: React.FC<ShapeDialogProps> = ({
  mode,
  onClose,
  shapeProps,
  onInsert,
  onApply,
}) => {
  // ── Form state ──
  const [width, setWidth] = useState(14400);
  const [height, setHeight] = useState(7200);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [textWrap, setTextWrap] = useState('none');
  const [zOrder, setZOrder] = useState(0);
  const [treatAsChar, setTreatAsChar] = useState(false);
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);

  // ── Initialize from existing props (properties mode) ──
  useEffect(() => {
    if (mode === 'properties' && shapeProps) {
      setWidth(shapeProps.width);
      setHeight(shapeProps.height);
      setOffsetX(shapeProps.offsetX);
      setOffsetY(shapeProps.offsetY);
      setTextWrap(shapeProps.textWrap);
      setZOrder(shapeProps.zOrder);
      setTreatAsChar(shapeProps.treatAsChar);
      setMarginLeft(shapeProps.marginLeft);
      setMarginRight(shapeProps.marginRight);
      setMarginTop(shapeProps.marginTop);
      setMarginBottom(shapeProps.marginBottom);
    }
  }, [mode, shapeProps]);

  // ── Handlers ──
  const handleInsert = () => {
    onInsert?.({ width, height, treatAsChar: treatAsChar || undefined });
  };

  const handleApply = () => {
    onApply?.({
      width,
      height,
      offsetX,
      offsetY,
      textWrap,
      zOrder,
      treatAsChar,
      marginLeft,
      marginRight,
      marginTop,
      marginBottom,
    });
  };

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>{mode === 'insert' ? '글상자 삽입' : '글상자 속성'}</h3>

        {/* ── Size section ── */}
        <div className="hwp-dialog-grid">
          <label>폭 (HWPUNIT)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(Number(e.target.value))}
            min={0}
          />

          <label>높이 (HWPUNIT)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            min={0}
          />

          <label>문자처럼 취급</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={treatAsChar}
              onChange={(e) => setTreatAsChar(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>활성화</span>
          </label>
        </div>

        {/* ── Properties-only fields ── */}
        {mode === 'properties' && (
          <>
            {/* Position */}
            <h4 style={{ fontSize: '0.9rem', margin: '12px 0 8px', color: 'var(--text-primary)' }}>
              위치
            </h4>
            <div className="hwp-dialog-grid">
              <label>X 오프셋 (HWPUNIT)</label>
              <input
                type="number"
                value={offsetX}
                onChange={(e) => setOffsetX(Number(e.target.value))}
              />

              <label>Y 오프셋 (HWPUNIT)</label>
              <input
                type="number"
                value={offsetY}
                onChange={(e) => setOffsetY(Number(e.target.value))}
              />
            </div>

            {/* Text wrap */}
            <h4 style={{ fontSize: '0.9rem', margin: '12px 0 8px', color: 'var(--text-primary)' }}>
              텍스트 배치
            </h4>
            <div className="hwp-dialog-grid">
              <label>배치 방식</label>
              <select
                value={textWrap}
                onChange={(e) => setTextWrap(e.target.value)}
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
                {TEXT_WRAP_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              <label>Z 순서</label>
              <input
                type="number"
                value={zOrder}
                onChange={(e) => setZOrder(Number(e.target.value))}
              />
            </div>

            {/* Inner margins */}
            <h4 style={{ fontSize: '0.9rem', margin: '12px 0 8px', color: 'var(--text-primary)' }}>
              내부 여백 (HWPUNIT)
            </h4>
            <div className="hwp-dialog-grid">
              <label>왼쪽</label>
              <input
                type="number"
                value={marginLeft}
                onChange={(e) => setMarginLeft(Number(e.target.value))}
                min={0}
              />

              <label>오른쪽</label>
              <input
                type="number"
                value={marginRight}
                onChange={(e) => setMarginRight(Number(e.target.value))}
                min={0}
              />

              <label>위</label>
              <input
                type="number"
                value={marginTop}
                onChange={(e) => setMarginTop(Number(e.target.value))}
                min={0}
              />

              <label>아래</label>
              <input
                type="number"
                value={marginBottom}
                onChange={(e) => setMarginBottom(Number(e.target.value))}
                min={0}
              />
            </div>
          </>
        )}

        {/* ── Actions ── */}
        <div className="hwp-dialog-actions">
          <button onClick={onClose}>취소</button>
          {mode === 'insert' ? (
            <button className="primary" onClick={handleInsert}>
              삽입
            </button>
          ) : (
            <button className="primary" onClick={handleApply}>
              적용
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShapeDialog;
