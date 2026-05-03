import React, { useState, useEffect } from 'react';

interface PicturePropsDialogProps {
  onClose: () => void;
  pictureProps: {
    width: number;
    height: number;
    originalWidth: number;
    originalHeight: number;
    offsetX: number;
    offsetY: number;
    treatAsChar: boolean;
    textWrap: string;
    brightness: number;
    contrast: number;
    transparency: number;
  } | null;
  onApply: (props: Record<string, unknown>) => void;
  onDownloadImage: () => void;
}

const TEXT_WRAP_OPTIONS = [
  { value: 'none', label: '없음 (none)' },
  { value: 'square', label: '자리차지 (square)' },
  { value: 'tight', label: '빈 공간 (tight)' },
  { value: 'through', label: '어울림 (through)' },
];

const PicturePropsDialog: React.FC<PicturePropsDialogProps> = ({
  onClose,
  pictureProps,
  onApply,
  onDownloadImage,
}) => {
  // ── Form state ──
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [originalWidth, setOriginalWidth] = useState(0);
  const [originalHeight, setOriginalHeight] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [treatAsChar, setTreatAsChar] = useState(false);
  const [textWrap, setTextWrap] = useState('none');
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(0);
  const [transparency, setTransparency] = useState(0);
  const [lockAspectRatio, setLockAspectRatio] = useState(true);

  // ── Initialize from props ──
  useEffect(() => {
    if (pictureProps) {
      setWidth(pictureProps.width);
      setHeight(pictureProps.height);
      setOriginalWidth(pictureProps.originalWidth);
      setOriginalHeight(pictureProps.originalHeight);
      setOffsetX(pictureProps.offsetX);
      setOffsetY(pictureProps.offsetY);
      setTreatAsChar(pictureProps.treatAsChar);
      setTextWrap(pictureProps.textWrap);
      setBrightness(pictureProps.brightness);
      setContrast(pictureProps.contrast);
      setTransparency(pictureProps.transparency);
    }
  }, [pictureProps]);

  // ── Aspect-ratio-locked size helpers ──
  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (lockAspectRatio && originalWidth > 0) {
      const ratio = originalHeight / originalWidth;
      setHeight(Math.round(newWidth * ratio));
    }
  };

  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (lockAspectRatio && originalHeight > 0) {
      const ratio = originalWidth / originalHeight;
      setWidth(Math.round(newHeight * ratio));
    }
  };

  const handleResetToOriginal = () => {
    setWidth(originalWidth);
    setHeight(originalHeight);
  };

  // ── Apply ──
  const handleApply = () => {
    onApply({
      width,
      height,
      offsetX,
      offsetY,
      treatAsChar,
      textWrap,
      brightness,
      contrast,
      transparency,
    });
  };

  // ── Shared inline styles for select / range (to match existing dialog grid) ──
  const selectStyle: React.CSSProperties = {
    padding: '5px 10px',
    border: '1px solid var(--border-color)',
    borderRadius: 'var(--radius-sm)',
    background: 'var(--bg-primary)',
    color: 'var(--text-primary)',
    fontSize: '0.85rem',
    width: '100%',
  };

  const rangeWrapStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  };

  const rangeValueStyle: React.CSSProperties = {
    minWidth: 36,
    textAlign: 'right',
    fontSize: '0.82rem',
    color: 'var(--text-secondary)',
  };

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div className="hwp-dialog" onClick={(e) => e.stopPropagation()}>
        <h3>그림 속성</h3>

        {/* ── Size section ── */}
        <h4 style={{ fontSize: '0.9rem', margin: '0 0 8px', color: 'var(--text-primary)' }}>
          크기
        </h4>
        <div className="hwp-dialog-grid">
          <label>폭 (HWPUNIT)</label>
          <input
            type="number"
            value={width}
            onChange={(e) => handleWidthChange(Number(e.target.value))}
            min={0}
          />

          <label>높이 (HWPUNIT)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => handleHeightChange(Number(e.target.value))}
            min={0}
          />

          <label>원본 크기</label>
          <span
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              alignSelf: 'center',
            }}
          >
            {originalWidth} x {originalHeight} HWPUNIT
          </span>

          <label>비율 고정</label>
          <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              checked={lockAspectRatio}
              onChange={(e) => setLockAspectRatio(e.target.checked)}
            />
            <span style={{ fontSize: '0.82rem' }}>활성화</span>
          </label>
        </div>

        <div style={{ marginBottom: 12 }}>
          <button
            onClick={handleResetToOriginal}
            style={{
              padding: '5px 14px',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-sm)',
              background: 'var(--bg-secondary, var(--bg-primary))',
              color: 'var(--text-primary)',
              fontSize: '0.82rem',
              cursor: 'pointer',
            }}
          >
            원래 크기로
          </button>
        </div>

        {/* ── Position section ── */}
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

          <label>배치 방식</label>
          <select
            value={textWrap}
            onChange={(e) => setTextWrap(e.target.value)}
            style={selectStyle}
          >
            {TEXT_WRAP_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

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

        {/* ── Image effects section ── */}
        <h4 style={{ fontSize: '0.9rem', margin: '12px 0 8px', color: 'var(--text-primary)' }}>
          이미지 효과
        </h4>
        <div className="hwp-dialog-grid">
          <label>밝기</label>
          <div style={rangeWrapStyle}>
            <input
              type="range"
              min={-100}
              max={100}
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              style={{ flex: 1 }}
            />
            <span style={rangeValueStyle}>{brightness}</span>
          </div>

          <label>대비</label>
          <div style={rangeWrapStyle}>
            <input
              type="range"
              min={-100}
              max={100}
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              style={{ flex: 1 }}
            />
            <span style={rangeValueStyle}>{contrast}</span>
          </div>

          <label>투명도</label>
          <div style={rangeWrapStyle}>
            <input
              type="range"
              min={0}
              max={100}
              value={transparency}
              onChange={(e) => setTransparency(Number(e.target.value))}
              style={{ flex: 1 }}
            />
            <span style={rangeValueStyle}>{transparency}</span>
          </div>
        </div>

        {/* ── Actions ── */}
        <div className="hwp-dialog-actions">
          <button onClick={onDownloadImage}>이미지 다운로드</button>
          <button onClick={onClose}>취소</button>
          <button className="primary" onClick={handleApply}>
            적용
          </button>
        </div>
      </div>
    </div>
  );
};

export default PicturePropsDialog;
