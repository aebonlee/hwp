import React, { useRef, useState, useEffect, useCallback } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

export const KOREAN_FONTS = [
  '맑은 고딕', '함초롬바탕', '함초롬돋움', '나눔고딕', '나눔명조',
  '바탕', '돋움', '굴림', 'Arial', 'Times New Roman',
];

export const FONT_SIZES = [8, 9, 10, 10.5, 11, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 72];

export const LINE_SPACINGS = [
  { label: '100%', value: 100 }, { label: '115%', value: 115 },
  { label: '130%', value: 130 }, { label: '150%', value: 150 },
  { label: '160%', value: 160 }, { label: '200%', value: 200 },
  { label: '250%', value: 250 }, { label: '300%', value: 300 },
];

export const COLOR_PALETTE = [
  ['#000000', '#434343', '#666666', '#999999', '#B7B7B7', '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF'],
  ['#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00', '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF'],
  ['#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3', '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC'],
];

// ─────────────────────────────────────────────────────────────────────────────
// Props
// ─────────────────────────────────────────────────────────────────────────────

interface EditorToolbarProps {
  // Translation
  t: (key: string) => string;

  // File operations
  onNewDoc: () => void;
  onOpenFile: () => void;
  onExport: (format: 'hwp' | 'hwpx') => void;

  // Undo/Redo
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;

  // Font
  fontInput: string;
  sizeInput: string;
  onApplyFont: (font: string) => void;
  onApplySize: (pt: number) => void;

  // Text style
  charProps: { bold: boolean; italic: boolean; underline: boolean; strikethrough: boolean; textColor: number; highlight: number };
  onToggleBold: () => void;
  onToggleItalic: () => void;
  onToggleUnderline: () => void;
  onToggleStrikethrough: () => void;

  // Color
  textColorHex: string;
  highlightHex: string;
  onApplyTextColor: (hex: string) => void;
  onApplyHighlight: (hex: string) => void;

  // Paragraph
  paraProps: { alignment: string; lineSpacing: number; marginLeft: number };
  onApplyAlignment: (align: string) => void;
  onApplyLineSpacing: (val: number) => void;
  onApplyIndentChange: (delta: number) => void;
  onApplyBulletList: () => void;
  onApplyNumberedList: () => void;

  // Insert
  onInsertTable: () => void;
  tableRows: number;
  tableCols: number;
  onSetTableRows: (n: number) => void;
  onSetTableCols: (n: number) => void;
  onConfirmInsertTable: () => void;
  onInsertImage: () => void;
  onPageBreak: () => void;
  onInsertShape: () => void;
  onInsertFootnote: () => void;

  // Header/Footer
  onEnterHeader: () => void;
  onEnterFooter: () => void;

  // Find/Replace
  findBarOpen: boolean;
  onToggleFindBar: () => void;

  // Page setup
  onOpenPageSetup: () => void;

  // Style
  styleList: Array<{ id: number; name: string }>;
  onLoadStyles: () => void;
  onApplyStyle: (id: number) => void;

  // Bookmarks
  onOpenBookmarks: () => void;

  // Display options
  showParaMarks: boolean;
  showControlCodes: boolean;
  showTransparentBorders: boolean;
  onToggleParaMarks: () => void;
  onToggleControlCodes: () => void;
  onToggleTransparentBorders: () => void;

  // File info
  fileName: string;
  dirty: boolean;

  // NEW: Clipboard
  clipboardHasContent: boolean;
  onCopy: () => void;
  onCut: () => void;
  onPaste: () => void;

  // NEW: Sidebar toggle
  sidebarOpen: boolean;
  onToggleSidebar: () => void;

  // NEW: Additional dialogs
  onOpenTableProps: () => void;
  onOpenStyleDialog: () => void;
  onOpenHeaderFooterDialog: () => void;
  onOpenFieldDialog: () => void;
  onOpenColumnDialog: () => void;
  onOpenNumberingDialog: () => void;
  onOpenEquationDialog: () => void;
  onOpenFormDialog: () => void;

  // NEW: Export extensions
  onExportSelectionHtml: () => void;
  onExportVerify: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const EditorToolbar: React.FC<EditorToolbarProps> = ({
  t,
  onNewDoc,
  onOpenFile,
  onExport,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  fontInput,
  sizeInput,
  onApplyFont,
  onApplySize,
  charProps,
  onToggleBold,
  onToggleItalic,
  onToggleUnderline,
  onToggleStrikethrough,
  textColorHex,
  highlightHex,
  onApplyTextColor,
  onApplyHighlight,
  paraProps,
  onApplyAlignment,
  onApplyLineSpacing,
  onApplyIndentChange,
  onApplyBulletList,
  onApplyNumberedList,
  onInsertTable: _onInsertTable,
  tableRows,
  tableCols,
  onSetTableRows,
  onSetTableCols,
  onConfirmInsertTable,
  onInsertImage,
  onPageBreak,
  onInsertShape,
  onInsertFootnote,
  onEnterHeader,
  onEnterFooter,
  findBarOpen,
  onToggleFindBar,
  onOpenPageSetup,
  styleList,
  onLoadStyles,
  onApplyStyle,
  onOpenBookmarks,
  showParaMarks,
  showControlCodes,
  showTransparentBorders,
  onToggleParaMarks,
  onToggleControlCodes,
  onToggleTransparentBorders,
  fileName,
  dirty,
  clipboardHasContent,
  onCopy,
  onCut,
  onPaste,
  sidebarOpen,
  onToggleSidebar,
  onOpenTableProps,
  onOpenStyleDialog,
  onOpenHeaderFooterDialog,
  onOpenFieldDialog,
  onOpenColumnDialog,
  onOpenNumberingDialog,
  onOpenEquationDialog,
  onOpenFormDialog,
  onExportSelectionHtml,
  onExportVerify,
}) => {
  // ── Dropdown open states ─────────────────────────────────────────────────
  const [fontOpen, setFontOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [highlightOpen, setHighlightOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [spacingOpen, setSpacingOpen] = useState(false);
  const [tableDialogOpen, setTableDialogOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // Custom color inputs
  const [customTextColor, setCustomTextColor] = useState('#000000');
  const [customHighlight, setCustomHighlight] = useState('#FFFF00');

  // ── Refs for outside-click detection ─────────────────────────────────────
  const fontBtnRef = useRef<HTMLButtonElement>(null);
  const fontDropRef = useRef<HTMLDivElement>(null);
  const sizeBtnRef = useRef<HTMLButtonElement>(null);
  const sizeDropRef = useRef<HTMLDivElement>(null);
  const colorBtnRef = useRef<HTMLButtonElement>(null);
  const colorDropRef = useRef<HTMLDivElement>(null);
  const hlBtnRef = useRef<HTMLButtonElement>(null);
  const hlDropRef = useRef<HTMLDivElement>(null);
  const exportBtnRef = useRef<HTMLButtonElement>(null);
  const exportDropRef = useRef<HTMLDivElement>(null);
  const spacingBtnRef = useRef<HTMLButtonElement>(null);
  const spacingDropRef = useRef<HTMLDivElement>(null);
  const tableBtnRef = useRef<HTMLButtonElement>(null);
  const tableDialogRef = useRef<HTMLDivElement>(null);
  const styleBtnRef = useRef<HTMLButtonElement>(null);
  const styleDropRef = useRef<HTMLDivElement>(null);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const moreDropRef = useRef<HTMLDivElement>(null);

  // ── Outside-click handler ────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      const target = e.target as Node;
      const outside = (
        btn: React.RefObject<HTMLElement | null>,
        drop: React.RefObject<HTMLElement | null>,
      ) => !btn.current?.contains(target) && !drop.current?.contains(target);

      if (fontOpen && outside(fontBtnRef, fontDropRef)) setFontOpen(false);
      if (sizeOpen && outside(sizeBtnRef, sizeDropRef)) setSizeOpen(false);
      if (colorOpen && outside(colorBtnRef, colorDropRef)) setColorOpen(false);
      if (highlightOpen && outside(hlBtnRef, hlDropRef)) setHighlightOpen(false);
      if (exportOpen && outside(exportBtnRef, exportDropRef)) setExportOpen(false);
      if (spacingOpen && outside(spacingBtnRef, spacingDropRef)) setSpacingOpen(false);
      if (tableDialogOpen && outside(tableBtnRef, tableDialogRef)) setTableDialogOpen(false);
      if (styleOpen && outside(styleBtnRef, styleDropRef)) setStyleOpen(false);
      if (moreOpen && outside(moreBtnRef, moreDropRef)) setMoreOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [fontOpen, sizeOpen, colorOpen, highlightOpen, exportOpen, spacingOpen, tableDialogOpen, styleOpen, moreOpen]);

  // ── Handlers that close dropdowns after action ───────────────────────────
  const handleApplyFont = useCallback((font: string) => {
    onApplyFont(font);
    setFontOpen(false);
  }, [onApplyFont]);

  const handleApplySize = useCallback((pt: number) => {
    onApplySize(pt);
    setSizeOpen(false);
  }, [onApplySize]);

  const handleApplyTextColor = useCallback((hex: string) => {
    onApplyTextColor(hex);
    setColorOpen(false);
  }, [onApplyTextColor]);

  const handleApplyHighlight = useCallback((hex: string) => {
    onApplyHighlight(hex);
    setHighlightOpen(false);
  }, [onApplyHighlight]);

  const handleApplyLineSpacing = useCallback((val: number) => {
    onApplyLineSpacing(val);
    setSpacingOpen(false);
  }, [onApplyLineSpacing]);

  const handleExport = useCallback((format: 'hwp' | 'hwpx') => {
    onExport(format);
    setExportOpen(false);
  }, [onExport]);

  const handleApplyStyle = useCallback((id: number) => {
    onApplyStyle(id);
    setStyleOpen(false);
  }, [onApplyStyle]);

  const handleConfirmInsertTable = useCallback(() => {
    onConfirmInsertTable();
    setTableDialogOpen(false);
  }, [onConfirmInsertTable]);

  // ── Color picker helper ──────────────────────────────────────────────────
  const renderColorPicker = (
    currentHex: string,
    customVal: string,
    setCustomVal: (v: string) => void,
    onApply: (hex: string) => void,
  ) => (
    <div className="hwp-color-picker">
      <div className="hwp-color-grid">
        {COLOR_PALETTE.map((row, ri) => (
          <div key={ri} style={{ display: 'flex' }}>
            {row.map((hex) => (
              <div
                key={hex}
                className={`hwp-color-swatch${currentHex.toUpperCase() === hex.toUpperCase() ? ' active' : ''}`}
                style={{ backgroundColor: hex }}
                title={hex}
                onClick={() => onApply(hex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="hwp-color-custom">
        <input
          type="color"
          value={customVal}
          onChange={(e) => setCustomVal(e.target.value)}
        />
        <button onClick={() => onApply(customVal)}>OK</button>
      </div>
    </div>
  );

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="hwp-editor-toolbar">

      {/* ── File group ──────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.newDoc')} onClick={onNewDoc}>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(74,143,231,0.15)" />
            <polyline points="14 2 14 8 20 8" fill="rgba(74,143,231,0.25)" />
            <line x1="9" y1="13" x2="15" y2="13" strokeWidth="1.5" />
            <line x1="12" y1="10" x2="12" y2="16" strokeWidth="1.5" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.openFile')} onClick={onOpenFile}>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="rgba(234,179,8,0.2)" />
          </svg>
        </button>
        {/* Export dropdown */}
        <div className="hwp-export-wrapper">
          <button
            ref={exportBtnRef}
            className="hwp-toolbar-btn"
            title={t('site.hwpEditor.export')}
            onClick={() => setExportOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" />
              <polyline points="7 10 12 15 17 10" fill="none" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span style={{ fontSize: '10px' }}>&#9662;</span>
          </button>
          {exportOpen && (
            <div ref={exportDropRef} className="hwp-export-dropdown">
              <button onClick={() => handleExport('hwp')}>{t('site.hwpEditor.exportHwp')}</button>
              <button onClick={() => handleExport('hwpx')}>{t('site.hwpEditor.exportHwpx')}</button>
              <div className="hwp-dropdown-divider" />
              <button onClick={() => { onExportSelectionHtml(); setExportOpen(false); }}>
                HTML (선택 영역)
              </button>
              <button onClick={() => { onExportVerify(); setExportOpen(false); }}>
                문서 검증
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Undo / Redo ─────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title={`${t('site.hwpEditor.undo')} (Ctrl+Z)`} onClick={onUndo} disabled={!canUndo}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title={`${t('site.hwpEditor.redo')} (Ctrl+Y)`} onClick={onRedo} disabled={!canRedo}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── NEW: Clipboard group ────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="복사 (Ctrl+C)" onClick={onCopy}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title="잘라내기 (Ctrl+X)" onClick={onCut}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title="붙여넣기 (Ctrl+V)" onClick={onPaste} disabled={!clipboardHasContent}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Font family ─────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <div style={{ position: 'relative' }}>
          <button
            ref={fontBtnRef}
            className="hwp-font-btn hwp-toolbar-btn"
            title={t('site.hwpEditor.font')}
            onClick={() => setFontOpen((o) => !o)}
          >
            <span style={{ fontFamily: fontInput, maxWidth: 96, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block' }}>
              {fontInput}
            </span>
            <span style={{ fontSize: '10px', marginLeft: 2 }}>&#9662;</span>
          </button>
          {fontOpen && (
            <div ref={fontDropRef} className="hwp-toolbar-dropdown hwp-font-dropdown">
              {KOREAN_FONTS.map((f) => (
                <button
                  key={f}
                  style={{ fontFamily: f }}
                  className={fontInput === f ? 'active' : ''}
                  onClick={() => handleApplyFont(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Font size */}
        <div style={{ position: 'relative' }}>
          <button
            ref={sizeBtnRef}
            className="hwp-size-btn hwp-toolbar-btn"
            title={t('site.hwpEditor.fontSize')}
            onClick={() => setSizeOpen((o) => !o)}
          >
            <span>{sizeInput}</span>
            <span style={{ fontSize: '10px', marginLeft: 2 }}>&#9662;</span>
          </button>
          {sizeOpen && (
            <div ref={sizeDropRef} className="hwp-toolbar-dropdown hwp-size-dropdown">
              {FONT_SIZES.map((s) => (
                <button
                  key={s}
                  className={parseFloat(sizeInput) === s ? 'active' : ''}
                  onClick={() => handleApplySize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Text styles ─────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button
          className={`hwp-toolbar-btn${charProps.bold ? ' active' : ''}`}
          title={`${t('site.hwpEditor.bold')} (Ctrl+B)`}
          onClick={onToggleBold}
          style={{ fontWeight: 'bold' }}
        >B</button>
        <button
          className={`hwp-toolbar-btn${charProps.italic ? ' active' : ''}`}
          title={`${t('site.hwpEditor.italic')} (Ctrl+I)`}
          onClick={onToggleItalic}
          style={{ fontStyle: 'italic' }}
        >I</button>
        <button
          className={`hwp-toolbar-btn${charProps.underline ? ' active' : ''}`}
          title={`${t('site.hwpEditor.underline')} (Ctrl+U)`}
          onClick={onToggleUnderline}
          style={{ textDecoration: 'underline' }}
        >U</button>
        <button
          className={`hwp-toolbar-btn${charProps.strikethrough ? ' active' : ''}`}
          title={t('site.hwpEditor.strikethrough')}
          onClick={onToggleStrikethrough}
          style={{ textDecoration: 'line-through' }}
        >S</button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Text color ──────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <div style={{ position: 'relative' }}>
          <button
            ref={colorBtnRef}
            className="hwp-toolbar-btn"
            title={t('site.hwpEditor.textColor')}
            onClick={() => setColorOpen((o) => !o)}
          >
            <span style={{ fontWeight: 'bold', color: textColorHex, fontSize: '14px', lineHeight: 1 }}>A</span>
            <div className="hwp-color-indicator" style={{ backgroundColor: textColorHex }} />
            <span style={{ fontSize: '10px', marginLeft: 1 }}>&#9662;</span>
          </button>
          {colorOpen && (
            <div ref={colorDropRef} style={{ position: 'absolute', zIndex: 1000, top: '100%', left: 0 }}>
              {renderColorPicker(textColorHex, customTextColor, setCustomTextColor, handleApplyTextColor)}
            </div>
          )}
        </div>

        {/* Highlight */}
        <div style={{ position: 'relative' }}>
          <button
            ref={hlBtnRef}
            className="hwp-toolbar-btn"
            title={t('site.hwpEditor.highlight')}
            onClick={() => setHighlightOpen((o) => !o)}
          >
            <span style={{ fontWeight: 'bold', backgroundColor: highlightHex, padding: '0 2px', fontSize: '13px', lineHeight: 1 }}>H</span>
            <div className="hwp-color-indicator" style={{ backgroundColor: highlightHex }} />
            <span style={{ fontSize: '10px', marginLeft: 1 }}>&#9662;</span>
          </button>
          {highlightOpen && (
            <div ref={hlDropRef} style={{ position: 'absolute', zIndex: 1000, top: '100%', left: 0 }}>
              {renderColorPicker(highlightHex, customHighlight, setCustomHighlight, handleApplyHighlight)}
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Alignment ───────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        {(['left', 'center', 'right', 'justify'] as const).map((align) => {
          const titleMap: Record<string, string> = {
            left: t('site.hwpEditor.alignLeft'),
            center: t('site.hwpEditor.alignCenter'),
            right: t('site.hwpEditor.alignRight'),
            justify: t('site.hwpEditor.alignJustify'),
          };
          const iconMap: Record<string, React.ReactNode> = {
            left: (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                <rect x="0" y="1" width="16" height="2" rx="1" />
                <rect x="0" y="5" width="11" height="2" rx="1" />
                <rect x="0" y="9" width="16" height="2" rx="1" />
                <rect x="0" y="13" width="9" height="1.5" rx="0.75" />
              </svg>
            ),
            center: (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                <rect x="0" y="1" width="16" height="2" rx="1" />
                <rect x="2.5" y="5" width="11" height="2" rx="1" />
                <rect x="0" y="9" width="16" height="2" rx="1" />
                <rect x="3.5" y="13" width="9" height="1.5" rx="0.75" />
              </svg>
            ),
            right: (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                <rect x="0" y="1" width="16" height="2" rx="1" />
                <rect x="5" y="5" width="11" height="2" rx="1" />
                <rect x="0" y="9" width="16" height="2" rx="1" />
                <rect x="7" y="13" width="9" height="1.5" rx="0.75" />
              </svg>
            ),
            justify: (
              <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                <rect x="0" y="1" width="16" height="2" rx="1" />
                <rect x="0" y="5" width="16" height="2" rx="1" />
                <rect x="0" y="9" width="16" height="2" rx="1" />
                <rect x="0" y="13" width="16" height="1.5" rx="0.75" />
              </svg>
            ),
          };
          return (
            <button
              key={align}
              className={`hwp-toolbar-btn${paraProps.alignment === align ? ' active' : ''}`}
              title={titleMap[align]}
              onClick={() => onApplyAlignment(align)}
            >
              {iconMap[align]}
            </button>
          );
        })}
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Line spacing ────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <div style={{ position: 'relative' }}>
          <button
            ref={spacingBtnRef}
            className="hwp-toolbar-btn"
            title={t('site.hwpEditor.lineSpacing')}
            onClick={() => setSpacingOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <polyline points="3 8 3 3 3 8" />
              <polyline points="3 3 1 5 3 3 5 5" />
              <polyline points="3 16 3 21 3 16" />
              <polyline points="3 21 1 19 3 21 5 19" />
            </svg>
            <span style={{ fontSize: '10px', marginLeft: 2 }}>&#9662;</span>
          </button>
          {spacingOpen && (
            <div ref={spacingDropRef} className="hwp-toolbar-dropdown hwp-spacing-dropdown">
              {LINE_SPACINGS.map((sp) => (
                <button
                  key={sp.value}
                  className={paraProps.lineSpacing === sp.value ? 'active' : ''}
                  onClick={() => handleApplyLineSpacing(sp.value)}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Indent ──────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.outdent')} onClick={() => onApplyIndentChange(-1)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
            <polyline points="11 8 7 10 11 12" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.indent')} onClick={() => onApplyIndentChange(1)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" />
            <line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
            <polyline points="3 8 7 10 3 12" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Lists ───────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.bulletList')} onClick={onApplyBulletList}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
            <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
            <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.numberedList')} onClick={onApplyNumberedList}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
            <text x="1" y="8" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">1</text>
            <text x="1" y="14" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">2</text>
            <text x="1" y="20" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">3</text>
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Insert ──────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        {/* Table */}
        <div style={{ position: 'relative' }}>
          <button
            ref={tableBtnRef}
            className="hwp-toolbar-btn"
            title={t('site.hwpEditor.insertTable')}
            onClick={() => setTableDialogOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" />
              <line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" />
            </svg>
          </button>
          {tableDialogOpen && (
            <div ref={tableDialogRef} className="hwp-table-dialog">
              <div className="hwp-table-dialog-row">
                <label>행 (Rows)</label>
                <input
                  type="number" min={1} max={50} value={tableRows}
                  onChange={(e) => onSetTableRows(Number(e.target.value))}
                />
              </div>
              <div className="hwp-table-dialog-row">
                <label>열 (Cols)</label>
                <input
                  type="number" min={1} max={20} value={tableCols}
                  onChange={(e) => onSetTableCols(Number(e.target.value))}
                />
              </div>
              <button className="hwp-toolbar-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={handleConfirmInsertTable}>
                {t('site.hwpEditor.insertTable')}
              </button>
            </div>
          )}
        </div>

        {/* Image */}
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.insertImage')} onClick={onInsertImage}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        </button>

        {/* Page break */}
        <button className="hwp-toolbar-btn" title={t('site.hwpEditor.pageBreak')} onClick={onPageBreak}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="4 2" />
            <path d="M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Find/Replace toggle ─────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button
          className={`hwp-toolbar-btn${findBarOpen ? ' active' : ''}`}
          title={`${t('site.hwpEditor.findReplace')} (Ctrl+F)`}
          onClick={onToggleFindBar}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Page setup ──────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="페이지 설정" onClick={onOpenPageSetup}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="1" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="18" x2="16" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Style dropdown ──────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <div style={{ position: 'relative' }}>
          <button
            ref={styleBtnRef}
            className="hwp-toolbar-btn"
            title="스타일"
            onClick={() => { onLoadStyles(); setStyleOpen((o) => !o); }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h10M4 17h14" />
            </svg>
            <span style={{ fontSize: '0.7rem' }}>스타일</span>
            <span style={{ fontSize: '10px', marginLeft: 1 }}>&#9662;</span>
          </button>
          {styleOpen && (
            <div ref={styleDropRef} className="hwp-toolbar-dropdown hwp-style-dropdown">
              {styleList.length === 0 && <div style={{ padding: 10, fontSize: '0.82rem', color: 'var(--text-secondary)' }}>스타일 없음</div>}
              {styleList.map((s) => (
                <button key={s.id} onClick={() => handleApplyStyle(s.id)}>{s.name}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Header/Footer ───────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="머리말" onClick={onEnterHeader}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="8" y1="6" x2="16" y2="6" />
          </svg>
        </button>
        <button className="hwp-toolbar-btn" title="꼬리말" onClick={onEnterFooter}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="8" y1="18" x2="16" y2="18" />
          </svg>
        </button>
      </div>

      {/* ── Footnote ────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="각주 삽입" onClick={onInsertFootnote}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 20h16M12 4v12" /><text x="14" y="10" fontSize="8" fill="currentColor" stroke="none" fontWeight="bold">1</text>
          </svg>
        </button>
      </div>

      {/* ── Shape ───────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="글상자 삽입" onClick={onInsertShape}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" /><text x="8" y="16" fontSize="10" fill="currentColor" stroke="none">T</text>
          </svg>
        </button>
      </div>

      {/* ── Bookmark ────────────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className="hwp-toolbar-btn" title="북마크" onClick={onOpenBookmarks}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── Display options ─────────────────────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <button className={`hwp-toolbar-btn${showParaMarks ? ' active' : ''}`} title="조판부호 표시" onClick={onToggleParaMarks}>
          <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold' }}>&#182;</span>
        </button>
        <button className={`hwp-toolbar-btn${showControlCodes ? ' active' : ''}`} title="제어코드 표시" onClick={onToggleControlCodes}>
          <span style={{ fontFamily: 'monospace', fontSize: '12px', fontWeight: 'bold' }}>&#167;</span>
        </button>
        <button className={`hwp-toolbar-btn${showTransparentBorders ? ' active' : ''}`} title="투명 테두리 표시" onClick={onToggleTransparentBorders}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2">
            <rect x="3" y="3" width="18" height="18" rx="1" />
          </svg>
        </button>
      </div>

      <div className="hwp-toolbar-divider" />

      {/* ── NEW: More dropdown (추가 기능) ──────────────────────────────── */}
      <div className="hwp-toolbar-group">
        <div style={{ position: 'relative' }}>
          <button
            ref={moreBtnRef}
            className={`hwp-toolbar-btn${moreOpen ? ' active' : ''}`}
            title="더 보기"
            onClick={() => setMoreOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="none">
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
            </svg>
            <span style={{ fontSize: '0.7rem', marginLeft: 2 }}>더 보기</span>
            <span style={{ fontSize: '10px', marginLeft: 1 }}>&#9662;</span>
          </button>
          {moreOpen && (
            <div ref={moreDropRef} className="hwp-toolbar-dropdown hwp-more-dropdown">
              <button onClick={() => { onOpenTableProps(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="3" x2="9" y2="21" />
                </svg>
                <span>표 속성</span>
              </button>
              <button onClick={() => { onOpenColumnDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="12" y1="3" x2="12" y2="21" />
                </svg>
                <span>다단 설정</span>
              </button>
              <button onClick={() => { onOpenNumberingDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
                  <text x="2" y="8" fontSize="7" fill="currentColor" stroke="none">1.</text>
                  <text x="2" y="14" fontSize="7" fill="currentColor" stroke="none">2.</text>
                  <text x="2" y="20" fontSize="7" fill="currentColor" stroke="none">3.</text>
                </svg>
                <span>문단 번호</span>
              </button>
              <button onClick={() => { onOpenEquationDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <text x="2" y="17" fontSize="14" fill="currentColor" stroke="none" fontStyle="italic" fontFamily="serif">f</text>
                  <text x="10" y="14" fontSize="10" fill="currentColor" stroke="none">(x)</text>
                </svg>
                <span>수식</span>
              </button>
              <button onClick={() => { onOpenFieldDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 8l-4 4 4 4" /><path d="M17 8l4 4-4 4" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                <span>필드</span>
              </button>
              <button onClick={() => { onOpenFormDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="7" y1="8" x2="17" y2="8" />
                  <line x1="7" y1="12" x2="17" y2="12" />
                  <line x1="7" y1="16" x2="13" y2="16" />
                </svg>
                <span>양식</span>
              </button>
              <div className="hwp-dropdown-divider" />
              <button onClick={() => { onOpenHeaderFooterDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </svg>
                <span>머리말/꼬리말 관리</span>
              </button>
              <button onClick={() => { onOpenStyleDialog(); setMoreOpen(false); }}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h10M4 17h14" />
                </svg>
                <span>스타일 관리</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="hwp-toolbar-spacer" />

      {/* ── Filename indicator ──────────────────────────────────────────── */}
      {fileName && (
        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginRight: 8, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {fileName}{dirty ? ' *' : ''}
        </span>
      )}

      {/* ── NEW: Sidebar toggle ─────────────────────────────────────────── */}
      <button
        className={`hwp-toolbar-btn${sidebarOpen ? ' active' : ''}`}
        title={sidebarOpen ? '사이드바 닫기' : '사이드바 열기'}
        onClick={onToggleSidebar}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="17" y1="8" x2="20" y2="8" />
          <line x1="17" y1="12" x2="20" y2="12" />
          <line x1="17" y1="16" x2="20" y2="16" />
        </svg>
      </button>
    </div>
  );
};

export default React.memo(EditorToolbar);
