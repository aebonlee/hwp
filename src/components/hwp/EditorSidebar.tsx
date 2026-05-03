import React, { useCallback, useEffect, useState } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────

interface CursorPos {
  secIdx: number;
  paraIdx: number;
  charOffset: number;
}

interface EditorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;

  // Current context
  editMode: 'body' | 'cell' | 'header' | 'footer' | 'footnote';
  cursor: CursorPos | null;

  // Character properties
  charProps: {
    fontFamily: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    textColor: number;
    highlight: number;
  };

  // Paragraph properties
  paraProps: {
    alignment: string;
    lineSpacing: number;
    marginLeft: number;
    marginRight: number;
    indent: number;
  };

  // Page info
  currentPage: number;
  pageCount: number;

  // Style info
  currentStyleName: string;
  styleList: Array<{ id: number; name: string; type: string }>;
  onApplyStyle: (id: number) => void;

  // Cell properties (when in cell mode)
  cellProps: {
    paddingLeft: number;
    paddingRight: number;
    paddingTop: number;
    paddingBottom: number;
    verticalAlign: string;
    isHeader: boolean;
  } | null;
  onUpdateCellProps: (props: Record<string, unknown>) => void;

  // Document info
  documentInfo: {
    sectionCount: number;
    totalParagraphs: number;
    totalChars: number;
  } | null;

  // Field info (when cursor is on a field)
  fieldInfo: {
    type: string;
    name: string;
    value: string;
  } | null;
}

// ── Helpers ────────────────────────────────────────────────────────────────

/** Convert HWP BGR COLORREF integer to CSS hex string */
function hwpColorToHex(c: number): string {
  const r = c & 0xff;
  const g = (c >> 8) & 0xff;
  const b = (c >> 16) & 0xff;
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2, '0')).join('');
}

/** Alignment label map */
const ALIGNMENT_LABELS: Record<string, string> = {
  left: 'Left',
  center: 'Center',
  right: 'Right',
  justify: 'Justify',
  distribute: 'Distribute',
};

/** Vertical-align label map */
const VALIGN_LABELS: Record<string, string> = {
  top: 'Top',
  middle: 'Middle',
  bottom: 'Bottom',
};

// ── Section wrapper ────────────────────────────────────────────────────────

interface SidebarSectionProps {
  title: string;
  defaultExpanded?: boolean;
  children: React.ReactNode;
}

function SidebarSection({ title, defaultExpanded = true, children }: SidebarSectionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggle = useCallback(() => setExpanded(prev => !prev), []);

  return (
    <div className="hwp-sidebar-section">
      <button
        className="hwp-sidebar-section-header"
        onClick={toggle}
        type="button"
      >
        <span>{title}</span>
        <span>{expanded ? '\u25BE' : '\u25B8'}</span>
      </button>
      {expanded && <div className="hwp-sidebar-section-body">{children}</div>}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────

function EditorSidebar({
  isOpen,
  onClose,
  t,
  editMode,
  cursor,
  charProps,
  paraProps,
  currentPage,
  pageCount,
  currentStyleName,
  styleList,
  onApplyStyle,
  cellProps,
  onUpdateCellProps,
  documentInfo,
  fieldInfo,
}: EditorSidebarProps) {
  // ── Local cell-props editing state ─────────────────────────────────────
  const [localCellProps, setLocalCellProps] = useState(cellProps);

  useEffect(() => {
    setLocalCellProps(cellProps);
  }, [cellProps]);

  const handleCellPropChange = useCallback(
    (key: string, value: unknown) => {
      setLocalCellProps(prev => (prev ? { ...prev, [key]: value } : prev));
    },
    [],
  );

  const handleApplyCellProps = useCallback(() => {
    if (localCellProps) {
      onUpdateCellProps(localCellProps as unknown as Record<string, unknown>);
    }
  }, [localCellProps, onUpdateCellProps]);

  // ── Style dropdown handler ─────────────────────────────────────────────
  const handleStyleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const id = Number(e.target.value);
      if (!Number.isNaN(id)) {
        onApplyStyle(id);
      }
    },
    [onApplyStyle],
  );

  // ── Edit-mode label ────────────────────────────────────────────────────
  const editModeLabel = (): string => {
    switch (editMode) {
      case 'body':
        return t('editMode.body') || '본문';
      case 'cell':
        return t('editMode.cell') || '셀';
      case 'header':
        return t('editMode.header') || '머리말';
      case 'footer':
        return t('editMode.footer') || '꼬리말';
      case 'footnote':
        return t('editMode.footnote') || '각주';
      default:
        return editMode;
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────
  return (
    <div className={`hwp-editor-sidebar ${isOpen ? 'open' : ''}`}>
      {/* Header */}
      <div className="hwp-sidebar-header">
        <h4>{t('sidebar.title') || '속성'}</h4>
        <button className="hwp-sidebar-close" onClick={onClose} type="button">
          &times;
        </button>
      </div>

      <div className="hwp-sidebar-content">
        {/* ── 1. 문서 정보 (Document Info) ─────────────────────────────── */}
        <SidebarSection title={t('sidebar.documentInfo') || '문서 정보'}>
          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.page') || '페이지'}</span>
            <span className="hwp-sidebar-value">
              {currentPage} / {pageCount}
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.editMode') || '편집 모드'}</span>
            <span className="hwp-sidebar-value">{editModeLabel()}</span>
          </div>

          {cursor && (
            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.cursor') || '커서'}</span>
              <span className="hwp-sidebar-value">
                S{cursor.secIdx + 1} P{cursor.paraIdx + 1} C{cursor.charOffset}
              </span>
            </div>
          )}

          {documentInfo && (
            <>
              <div className="hwp-sidebar-row">
                <span className="hwp-sidebar-label">{t('sidebar.sections') || '구역 수'}</span>
                <span className="hwp-sidebar-value">{documentInfo.sectionCount}</span>
              </div>
              <div className="hwp-sidebar-row">
                <span className="hwp-sidebar-label">{t('sidebar.paragraphs') || '문단 수'}</span>
                <span className="hwp-sidebar-value">
                  {documentInfo.totalParagraphs.toLocaleString()}
                </span>
              </div>
              <div className="hwp-sidebar-row">
                <span className="hwp-sidebar-label">{t('sidebar.chars') || '글자 수'}</span>
                <span className="hwp-sidebar-value">
                  {documentInfo.totalChars.toLocaleString()}
                </span>
              </div>
            </>
          )}
        </SidebarSection>

        {/* ── 2. 글자 속성 (Character Properties) ─────────────────────── */}
        <SidebarSection title={t('sidebar.charProps') || '글자 속성'}>
          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.font') || '글꼴'}</span>
            <span className="hwp-sidebar-value hwp-sidebar-value--ellipsis">
              {charProps.fontFamily}
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.fontSize') || '크기'}</span>
            <span className="hwp-sidebar-value">
              {(charProps.fontSize / 100).toFixed(1)}pt
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.style') || '스타일'}</span>
            <span className="hwp-sidebar-value hwp-sidebar-char-styles">
              {charProps.bold && <span className="hwp-char-indicator hwp-char-bold" title="Bold">B</span>}
              {charProps.italic && <span className="hwp-char-indicator hwp-char-italic" title="Italic">I</span>}
              {charProps.underline && <span className="hwp-char-indicator hwp-char-underline" title="Underline">U</span>}
              {charProps.strikethrough && <span className="hwp-char-indicator hwp-char-strike" title="Strikethrough">S</span>}
              {!charProps.bold && !charProps.italic && !charProps.underline && !charProps.strikethrough && (
                <span className="hwp-char-indicator hwp-char-none">{t('sidebar.none') || '없음'}</span>
              )}
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.textColor') || '글자색'}</span>
            <span className="hwp-sidebar-value">
              <span
                className="hwp-sidebar-color-swatch"
                style={{ backgroundColor: hwpColorToHex(charProps.textColor) }}
                title={hwpColorToHex(charProps.textColor)}
              />
              <span className="hwp-sidebar-color-hex">{hwpColorToHex(charProps.textColor)}</span>
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.highlight') || '강조색'}</span>
            <span className="hwp-sidebar-value">
              <span
                className="hwp-sidebar-color-swatch"
                style={{ backgroundColor: hwpColorToHex(charProps.highlight) }}
                title={hwpColorToHex(charProps.highlight)}
              />
              <span className="hwp-sidebar-color-hex">{hwpColorToHex(charProps.highlight)}</span>
            </span>
          </div>
        </SidebarSection>

        {/* ── 3. 문단 속성 (Paragraph Properties) ─────────────────────── */}
        <SidebarSection title={t('sidebar.paraProps') || '문단 속성'}>
          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.alignment') || '정렬'}</span>
            <span className="hwp-sidebar-value">
              {ALIGNMENT_LABELS[paraProps.alignment] || paraProps.alignment}
            </span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.lineSpacing') || '줄 간격'}</span>
            <span className="hwp-sidebar-value">{paraProps.lineSpacing}%</span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.marginLeft') || '왼쪽 여백'}</span>
            <span className="hwp-sidebar-value">{paraProps.marginLeft} HWPUNIT</span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.marginRight') || '오른쪽 여백'}</span>
            <span className="hwp-sidebar-value">{paraProps.marginRight} HWPUNIT</span>
          </div>

          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.indent') || '들여쓰기'}</span>
            <span className="hwp-sidebar-value">{paraProps.indent} HWPUNIT</span>
          </div>
        </SidebarSection>

        {/* ── 4. 스타일 (Style) ───────────────────────────────────────── */}
        <SidebarSection title={t('sidebar.styleSection') || '스타일'}>
          <div className="hwp-sidebar-row">
            <span className="hwp-sidebar-label">{t('sidebar.currentStyle') || '현재'}</span>
            <span className="hwp-sidebar-value hwp-sidebar-value--ellipsis">
              {currentStyleName || t('sidebar.noStyle') || '(없음)'}
            </span>
          </div>

          {styleList.length > 0 && (
            <div className="hwp-sidebar-row hwp-sidebar-row--full">
              <select
                className="hwp-sidebar-select"
                value=""
                onChange={handleStyleChange}
                aria-label={t('sidebar.applyStyle') || '스타일 적용'}
              >
                <option value="" disabled>
                  {t('sidebar.selectStyle') || '스타일 선택...'}
                </option>
                {styleList.map(style => (
                  <option key={style.id} value={style.id}>
                    {style.name} ({style.type})
                  </option>
                ))}
              </select>
            </div>
          )}
        </SidebarSection>

        {/* ── 5. 셀 속성 (Cell Properties) ────────────────────────────── */}
        {editMode === 'cell' && localCellProps && (
          <SidebarSection title={t('sidebar.cellProps') || '셀 속성'}>
            {/* Padding inputs */}
            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.paddingTop') || '위 여백'}</span>
              <input
                type="number"
                className="hwp-sidebar-input"
                value={localCellProps.paddingTop}
                onChange={e => handleCellPropChange('paddingTop', Number(e.target.value))}
                min={0}
              />
            </div>

            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.paddingBottom') || '아래 여백'}</span>
              <input
                type="number"
                className="hwp-sidebar-input"
                value={localCellProps.paddingBottom}
                onChange={e => handleCellPropChange('paddingBottom', Number(e.target.value))}
                min={0}
              />
            </div>

            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.paddingLeft') || '왼쪽 여백'}</span>
              <input
                type="number"
                className="hwp-sidebar-input"
                value={localCellProps.paddingLeft}
                onChange={e => handleCellPropChange('paddingLeft', Number(e.target.value))}
                min={0}
              />
            </div>

            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.paddingRight') || '오른쪽 여백'}</span>
              <input
                type="number"
                className="hwp-sidebar-input"
                value={localCellProps.paddingRight}
                onChange={e => handleCellPropChange('paddingRight', Number(e.target.value))}
                min={0}
              />
            </div>

            {/* Vertical align dropdown */}
            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.verticalAlign') || '세로 정렬'}</span>
              <select
                className="hwp-sidebar-select"
                value={localCellProps.verticalAlign}
                onChange={e => handleCellPropChange('verticalAlign', e.target.value)}
              >
                {Object.entries(VALIGN_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Header cell toggle */}
            <div className="hwp-sidebar-row">
              <label className="hwp-sidebar-checkbox-label">
                <input
                  type="checkbox"
                  checked={localCellProps.isHeader}
                  onChange={e => handleCellPropChange('isHeader', e.target.checked)}
                />
                <span>{t('sidebar.headerCell') || '제목 셀'}</span>
              </label>
            </div>

            {/* Apply button */}
            <div className="hwp-sidebar-row hwp-sidebar-row--full">
              <button
                className="hwp-sidebar-apply-btn"
                onClick={handleApplyCellProps}
                type="button"
              >
                {t('sidebar.apply') || '적용'}
              </button>
            </div>
          </SidebarSection>
        )}

        {/* ── 6. 필드 정보 (Field Info) ───────────────────────────────── */}
        {fieldInfo && (
          <SidebarSection title={t('sidebar.fieldInfo') || '필드 정보'}>
            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.fieldType') || '유형'}</span>
              <span className="hwp-sidebar-value">{fieldInfo.type}</span>
            </div>

            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.fieldName') || '이름'}</span>
              <span className="hwp-sidebar-value hwp-sidebar-value--ellipsis">
                {fieldInfo.name}
              </span>
            </div>

            <div className="hwp-sidebar-row">
              <span className="hwp-sidebar-label">{t('sidebar.fieldValue') || '값'}</span>
              <span className="hwp-sidebar-value hwp-sidebar-value--ellipsis">
                {fieldInfo.value}
              </span>
            </div>
          </SidebarSection>
        )}
      </div>
    </div>
  );
}

export default React.memo(EditorSidebar);
