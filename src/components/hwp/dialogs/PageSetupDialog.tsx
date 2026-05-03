import React, { useState, useEffect } from 'react';

/* ── Types ────────────────────────────────────────────────────────────── */

interface PageSetupDialogProps {
  onClose: () => void;
  pageDef: {
    width: number;
    height: number;
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
    landscape: boolean;
  };
  onApply: (def: Record<string, unknown>) => void;
  // Phase 9 extensions
  sectionDef: {
    startType: string;
    textDirection: string;
    columnCount: number;
  } | null;
  onApplySectionDef: (def: Record<string, unknown>) => void;
  pageHide: {
    hideHeader: boolean;
    hideFooter: boolean;
    hideMasterPage: boolean;
    hideBorder: boolean;
    hideFill: boolean;
    hidePageNumber: boolean;
  } | null;
  onApplyPageHide: (hide: Record<string, boolean>) => void;
}

/* ── Constants ── */

const PAPER_PRESETS = [
  { label: 'A4', width: 59528, height: 84188 },
  { label: 'B5', width: 51592, height: 72852 },
  { label: 'Letter', width: 61200, height: 79200 },
  { label: 'Legal', width: 61200, height: 100800 },
  { label: '사용자 지정 (Custom)', width: 0, height: 0 },
];

const START_TYPE_OPTIONS = [
  { value: 'new_page', label: '새 페이지 (new_page)' },
  { value: 'continuous', label: '연속 (continuous)' },
  { value: 'odd_page', label: '홀수 쪽 (odd_page)' },
  { value: 'even_page', label: '짝수 쪽 (even_page)' },
];

const TEXT_DIRECTION_OPTIONS = [
  { value: 'horizontal', label: '가로 (horizontal)' },
  { value: 'vertical', label: '세로 (vertical)' },
];

type TabKey = 'paper' | 'section' | 'hide';

/* ── Component ────────────────────────────────────────────────────────── */

const PageSetupDialog: React.FC<PageSetupDialogProps> = ({
  onClose,
  pageDef,
  onApply,
  sectionDef,
  onApplySectionDef,
  pageHide,
  onApplyPageHide,
}) => {
  // ── Tab state ──
  const [activeTab, setActiveTab] = useState<TabKey>('paper');

  // ── Paper tab state ──
  const [width, setWidth] = useState(pageDef.width);
  const [height, setHeight] = useState(pageDef.height);
  const [landscape, setLandscape] = useState(pageDef.landscape);
  const [marginTop, setMarginTop] = useState(pageDef.marginTop);
  const [marginBottom, setMarginBottom] = useState(pageDef.marginBottom);
  const [marginLeft, setMarginLeft] = useState(pageDef.marginLeft);
  const [marginRight, setMarginRight] = useState(pageDef.marginRight);
  const [selectedPreset, setSelectedPreset] = useState('');

  // ── Section tab state ──
  const [startType, setStartType] = useState(sectionDef?.startType ?? 'new_page');
  const [textDirection, setTextDirection] = useState(sectionDef?.textDirection ?? 'horizontal');

  // ── Hide tab state ──
  const [hideHeader, setHideHeader] = useState(pageHide?.hideHeader ?? false);
  const [hideFooter, setHideFooter] = useState(pageHide?.hideFooter ?? false);
  const [hideMasterPage, setHideMasterPage] = useState(pageHide?.hideMasterPage ?? false);
  const [hideBorder, setHideBorder] = useState(pageHide?.hideBorder ?? false);
  const [hideFill, setHideFill] = useState(pageHide?.hideFill ?? false);
  const [hidePageNumber, setHidePageNumber] = useState(pageHide?.hidePageNumber ?? false);

  // ── Detect matching preset on mount ──
  useEffect(() => {
    const match = PAPER_PRESETS.find(
      (p) => p.width === pageDef.width && p.height === pageDef.height
    );
    setSelectedPreset(match ? match.label : '사용자 지정 (Custom)');
  }, [pageDef.width, pageDef.height]);

  // ── Sync section/hide state if props change ──
  useEffect(() => {
    if (sectionDef) {
      setStartType(sectionDef.startType);
      setTextDirection(sectionDef.textDirection);
    }
  }, [sectionDef]);

  useEffect(() => {
    if (pageHide) {
      setHideHeader(pageHide.hideHeader);
      setHideFooter(pageHide.hideFooter);
      setHideMasterPage(pageHide.hideMasterPage);
      setHideBorder(pageHide.hideBorder);
      setHideFill(pageHide.hideFill);
      setHidePageNumber(pageHide.hidePageNumber);
    }
  }, [pageHide]);

  // ── Handlers ──
  const handlePresetChange = (label: string) => {
    setSelectedPreset(label);
    const preset = PAPER_PRESETS.find((p) => p.label === label);
    if (preset && preset.width > 0) {
      setWidth(preset.width);
      setHeight(preset.height);
    }
  };

  const handleLandscapeToggle = () => {
    setLandscape((prev) => {
      const next = !prev;
      if (next) {
        // Swap width/height for landscape
        const w = width;
        setWidth(height);
        setHeight(w);
      } else {
        const w = width;
        setWidth(height);
        setHeight(w);
      }
      return next;
    });
  };

  const handleApplyPaper = () => {
    onApply({
      width,
      height,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      landscape,
    });
  };

  const handleApplySection = () => {
    onApplySectionDef({
      startType,
      textDirection,
    });
  };

  const handleApplyHide = () => {
    onApplyPageHide({
      hideHeader,
      hideFooter,
      hideMasterPage,
      hideBorder,
      hideFill,
      hidePageNumber,
    });
  };

  // ── Tab definitions ──
  const tabs: { key: TabKey; label: string }[] = [
    { key: 'paper', label: '용지 (Paper)' },
    { key: 'section', label: '구역 (Section)' },
    { key: 'hide', label: '감추기 (Hide)' },
  ];

  // ── Render ──
  return (
    <div className="hwp-dialog-overlay" onClick={onClose}>
      <div
        className="hwp-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{ width: 520, maxWidth: '90vw' }}
      >
        <h3>페이지 설정</h3>

        {/* ── Tabs ── */}
        <div className="hwp-dialog-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`hwp-dialog-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ━━ Paper Tab ━━ */}
        {activeTab === 'paper' && (
          <>
            <div className="hwp-dialog-grid">
              {/* Paper size preset */}
              <label>용지 크기</label>
              <select
                value={selectedPreset}
                onChange={(e) => handlePresetChange(e.target.value)}
              >
                {PAPER_PRESETS.map((p) => (
                  <option key={p.label} value={p.label}>
                    {p.label}
                  </option>
                ))}
              </select>

              {/* Width */}
              <label>너비 (HWPUNIT)</label>
              <input
                type="number"
                min={0}
                value={width}
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                  setSelectedPreset('사용자 지정 (Custom)');
                }}
              />

              {/* Height */}
              <label>높이 (HWPUNIT)</label>
              <input
                type="number"
                min={0}
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                  setSelectedPreset('사용자 지정 (Custom)');
                }}
              />

              {/* Landscape */}
              <label>가로 (Landscape)</label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <input
                  type="checkbox"
                  checked={landscape}
                  onChange={handleLandscapeToggle}
                />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {landscape ? '가로 방향' : '세로 방향'}
                </span>
              </label>
            </div>

            {/* Margins */}
            <h4
              style={{
                fontSize: '0.9rem',
                margin: '12px 0 8px',
                color: 'var(--text-primary)',
              }}
            >
              여백 (Margins)
            </h4>
            <div className="hwp-dialog-grid">
              <label>위 (Top)</label>
              <input
                type="number"
                min={0}
                value={marginTop}
                onChange={(e) => setMarginTop(Number(e.target.value))}
              />

              <label>아래 (Bottom)</label>
              <input
                type="number"
                min={0}
                value={marginBottom}
                onChange={(e) => setMarginBottom(Number(e.target.value))}
              />

              <label>왼쪽 (Left)</label>
              <input
                type="number"
                min={0}
                value={marginLeft}
                onChange={(e) => setMarginLeft(Number(e.target.value))}
              />

              <label>오른쪽 (Right)</label>
              <input
                type="number"
                min={0}
                value={marginRight}
                onChange={(e) => setMarginRight(Number(e.target.value))}
              />
            </div>

            {/* Actions */}
            <div className="hwp-dialog-actions">
              <button onClick={onClose}>취소</button>
              <button className="primary" onClick={handleApplyPaper}>
                적용
              </button>
            </div>
          </>
        )}

        {/* ━━ Section Tab ━━ */}
        {activeTab === 'section' && (
          <>
            {sectionDef === null ? (
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                구역 정의를 불러올 수 없습니다.
              </div>
            ) : (
              <>
                <div className="hwp-dialog-grid">
                  {/* Start type */}
                  <label>구역 시작</label>
                  <select
                    value={startType}
                    onChange={(e) => setStartType(e.target.value)}
                  >
                    {START_TYPE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  {/* Text direction */}
                  <label>텍스트 방향</label>
                  <select
                    value={textDirection}
                    onChange={(e) => setTextDirection(e.target.value)}
                  >
                    {TEXT_DIRECTION_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  {/* Column count (read-only) */}
                  <label>다단 수</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="number"
                      value={sectionDef.columnCount}
                      readOnly
                      style={{ width: 80, opacity: 0.7, cursor: 'not-allowed' }}
                    />
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      다단 설정에서 변경
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="hwp-dialog-actions">
                  <button onClick={onClose}>취소</button>
                  <button className="primary" onClick={handleApplySection}>
                    적용
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* ━━ Hide Tab ━━ */}
        {activeTab === 'hide' && (
          <>
            {pageHide === null ? (
              <div
                style={{
                  padding: 24,
                  textAlign: 'center',
                  fontSize: '0.85rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                감추기 설정을 불러올 수 없습니다.
              </div>
            ) : (
              <>
                <div className="hwp-dialog-grid">
                  <label>머리말 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hideHeader}
                      onChange={(e) => setHideHeader(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hideHeader ? '감춤' : '표시'}
                    </span>
                  </label>

                  <label>꼬리말 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hideFooter}
                      onChange={(e) => setHideFooter(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hideFooter ? '감춤' : '표시'}
                    </span>
                  </label>

                  <label>마스터페이지 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hideMasterPage}
                      onChange={(e) => setHideMasterPage(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hideMasterPage ? '감춤' : '표시'}
                    </span>
                  </label>

                  <label>테두리 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hideBorder}
                      onChange={(e) => setHideBorder(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hideBorder ? '감춤' : '표시'}
                    </span>
                  </label>

                  <label>배경 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hideFill}
                      onChange={(e) => setHideFill(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hideFill ? '감춤' : '표시'}
                    </span>
                  </label>

                  <label>쪽 번호 감추기</label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={hidePageNumber}
                      onChange={(e) => setHidePageNumber(e.target.checked)}
                    />
                    <span style={{ fontSize: '0.82rem' }}>
                      {hidePageNumber ? '감춤' : '표시'}
                    </span>
                  </label>
                </div>

                {/* Actions */}
                <div className="hwp-dialog-actions">
                  <button onClick={onClose}>취소</button>
                  <button className="primary" onClick={handleApplyHide}>
                    적용
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default PageSetupDialog;
