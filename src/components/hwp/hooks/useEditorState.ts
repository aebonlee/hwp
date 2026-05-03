/**
 * useEditorState.ts — Phase 0: Centralized editor state management hook
 *
 * This hook extracts ALL state, refs, and minimal state-helper callbacks
 * from HwpEditor.tsx into a single reusable hook. It contains NO business
 * logic (rendering, formatting, file I/O, etc.) — only state declarations
 * and trivial setter wrappers (setCursor, setEditMode).
 */

import { useRef, useState, useCallback } from 'react';
import type { HwpDocument as RhwpDoc } from '@rhwp/core';

// ─────────────────────────────────────────────────────────────────────────────
// Exported Types
// ─────────────────────────────────────────────────────────────────────────────

export interface CursorPos {
  secIdx: number;
  paraIdx: number;
  charOffset: number;
}

export interface CharProps {
  fontFamily: string;
  fontSize: number; // HWPUNIT (1pt = 100)
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  textColor: number; // COLORREF BGR
  highlight: number; // COLORREF BGR
}

export interface ParaProps {
  alignment: string;
  lineSpacing: number;
  marginLeft: number;
  marginRight: number;
  indent: number;
}

export interface SelectionRect {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export type EditMode = 'body' | 'cell' | 'header' | 'footer' | 'footnote';

export interface CellContext {
  secIdx: number;
  parentParaIdx: number;
  controlIdx: number;
  cellIdx: number;
  cellParaIdx: number;
  charOffset: number;
}

export interface HfContext {
  secIdx: number;
  isHeader: boolean;
  applyTo: number;
  hfParaIdx: number;
  charOffset: number;
}

export interface FnContext {
  secIdx: number;
  paraIdx: number;
  controlIdx: number;
  fnParaIdx: number;
  charOffset: number;
}

export interface ContextMenuState {
  x: number;
  y: number;
  type: 'body' | 'table' | 'image' | 'shape' | 'picture';
  tableInfo?: {
    secIdx: number;
    paraIdx: number;
    controlIdx: number;
    row: number;
    col: number;
    cellIdx: number;
  };
  shapeInfo?: {
    secIdx: number;
    paraIdx: number;
    controlIdx: number;
  };
  pictureInfo?: {
    secIdx: number;
    paraIdx: number;
    controlIdx: number;
  };
}

export interface PageDefState {
  width: number;
  height: number;
  marginTop: number;
  marginBottom: number;
  marginLeft: number;
  marginRight: number;
  landscape: boolean;
}

export interface StyleItem {
  id: number;
  name: string;
  type: string;
}

export interface BookmarkEntry {
  name: string;
  secIdx: number;
  paraIdx: number;
  charOffset: number;
}

export interface CursorRectState {
  pageIndex: number;
  x: number;
  y: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Default values (kept as module-level constants to avoid re-creation)
// ─────────────────────────────────────────────────────────────────────────────

const DEFAULT_CURSOR: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };

const DEFAULT_CHAR_PROPS: CharProps = {
  fontFamily: '\uB9D1\uC740 \uACE0\uB515', // 맑은 고딕
  fontSize: 1000,
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  textColor: 0,
  highlight: 0x00ffff, // yellow in BGR COLORREF
};

const DEFAULT_PARA_PROPS: ParaProps = {
  alignment: 'justify',
  lineSpacing: 160,
  marginLeft: 0,
  marginRight: 0,
  indent: 0,
};

const DEFAULT_PAGE_DEF: PageDefState = {
  width: 59528,
  height: 84188,
  marginTop: 5669,
  marginBottom: 4252,
  marginLeft: 4252,
  marginRight: 4252,
  landscape: false,
};

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useEditorState() {
  // ── Document ─────────────────────────────────────────────────────────────
  const docRef = useRef<RhwpDoc | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [renderVer, setRenderVer] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageInputVal, setPageInputVal] = useState('1');
  const [zoom, setZoom] = useState(100);
  const [fileName, setFileName] = useState('');
  const [dirty, setDirty] = useState(false);

  // ── Cursor / Selection ───────────────────────────────────────────────────
  const cursorRef = useRef<CursorPos>({ ...DEFAULT_CURSOR });
  const [cursor, setCursorState] = useState<CursorPos | null>(null);
  const [cursorRect, setCursorRect] = useState<CursorRectState | null>(null);
  const selAnchorRef = useRef<CursorPos | null>(null);
  const [hasSelection, setHasSelection] = useState(false);
  const [selRects, setSelRects] = useState<SelectionRect[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  /**
   * setCursor — updates both the mutable ref AND the React state so that
   * synchronous code can read cursorRef.current immediately while React
   * picks up the state change on the next render.
   */
  const setCursor = useCallback((pos: CursorPos) => {
    cursorRef.current = pos;
    setCursorState(pos);
  }, []);

  // ── Pending character format (applied to next typed text) ────────────────
  const pendingCharFormat = useRef<Record<string, unknown> | null>(null);

  // ── Canvas refs (per-page content + overlay) ─────────────────────────────
  const pageCanvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const overlayCanvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const renderScaleRef = useRef(
    typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1,
  );
  const pageSizesRef = useRef<Record<number, { w: number; h: number }>>({});
  const canvasRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // ── Char / Para display props ────────────────────────────────────────────
  const [charProps, setCharProps] = useState<CharProps>({ ...DEFAULT_CHAR_PROPS });
  const [paraProps, setParaProps] = useState<ParaProps>({ ...DEFAULT_PARA_PROPS });

  // ── Undo / Redo ──────────────────────────────────────────────────────────
  const undoStack = useRef<number[]>([]);
  const redoStack = useRef<number[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  // ── Korean IME ───────────────────────────────────────────────────────────
  const composingRef = useRef(false);
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null);

  // ── Drag state ───────────────────────────────────────────────────────────
  const [isDragging, setIsDragging] = useState(false);
  const [isDragSelecting, setIsDragSelecting] = useState(false);
  const dragStartPos = useRef<CursorPos | null>(null);

  // ── Error ────────────────────────────────────────────────────────────────
  const [editorError, setEditorError] = useState('');

  // ── Toolbar dropdowns ────────────────────────────────────────────────────
  const [fontOpen, setFontOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [highlightOpen, setHighlightOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [spacingOpen, setSpacingOpen] = useState(false);
  const [tableDialogOpen, setTableDialogOpen] = useState(false);

  // ── Table dialog state ───────────────────────────────────────────────────
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);

  // ── Custom color inputs ──────────────────────────────────────────────────
  const [customTextColor, setCustomTextColor] = useState('#000000');
  const [customHighlight, setCustomHighlight] = useState('#FFFF00');

  // ── Toolbar display strings ──────────────────────────────────────────────
  const [fontInput, setFontInput] = useState('\uB9D1\uC740 \uACE0\uB515'); // 맑은 고딕
  const [sizeInput, setSizeInput] = useState('10');

  // ── Find / Replace ───────────────────────────────────────────────────────
  const [findBarOpen, setFindBarOpen] = useState(false);
  const [findQuery, setFindQuery] = useState('');
  const [replaceQuery, setReplaceQuery] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [findInfo, setFindInfo] = useState('');

  // ── Edit context (cell / header-footer / footnote) ───────────────────────
  const [editMode, setEditModeState] = useState<EditMode>('body');
  const editModeRef = useRef<EditMode>('body');

  /**
   * setEditMode — updates both editModeRef and React state, mirroring the
   * pattern used by setCursor.
   */
  const setEditMode = useCallback((mode: EditMode) => {
    editModeRef.current = mode;
    setEditModeState(mode);
  }, []);

  const cellCtxRef = useRef<CellContext | null>(null);
  const hfCtxRef = useRef<HfContext | null>(null);
  const fnCtxRef = useRef<FnContext | null>(null);

  // ── Context menu (right-click) ───────────────────────────────────────────
  const [contextMenu, setContextMenu] = useState<ContextMenuState | null>(null);

  // ── Page setup dialog ────────────────────────────────────────────────────
  const [pageDefOpen, setPageDefOpen] = useState(false);
  const [pageDef, setPageDef] = useState<PageDefState>({ ...DEFAULT_PAGE_DEF });

  // ── Styles ───────────────────────────────────────────────────────────────
  const [styleList, setStyleList] = useState<StyleItem[]>([]);
  const [styleOpen, setStyleOpen] = useState(false);

  // ── Display options ──────────────────────────────────────────────────────
  const [showControlCodes, setShowControlCodes] = useState(false);
  const [showParaMarks, setShowParaMarks] = useState(false);

  // ── Bookmarks ────────────────────────────────────────────────────────────
  const [bookmarkOpen, setBookmarkOpen] = useState(false);
  const [bookmarkName, setBookmarkName] = useState('');
  const [bookmarkList, setBookmarkList] = useState<BookmarkEntry[]>([]);

  // ── Dropdown outside-click refs ──────────────────────────────────────────
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
  const tableDialogRef = useRef<HTMLDivElement>(null);
  const tableBtnRef = useRef<HTMLButtonElement>(null);
  const styleBtnRef = useRef<HTMLButtonElement>(null);
  const styleDropRef = useRef<HTMLDivElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  // ─────────────────────────────────────────────────────────────────────────
  // NEW state for upcoming phases
  // ─────────────────────────────────────────────────────────────────────────

  // ── Sidebar ──────────────────────────────────────────────────────────────
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ── Clipboard ────────────────────────────────────────────────────────────
  const [clipboardHasContent, setClipboardHasContent] = useState(false);
  const [clipboardHasControl, setClipboardHasControl] = useState(false);

  // ── Dialog states (new dialogs) ──────────────────────────────────────────
  const [tablePropsOpen, setTablePropsOpen] = useState(false);
  const [cellPropsOpen, setCellPropsOpen] = useState(false);
  const [shapeDialogOpen, setShapeDialogOpen] = useState(false);
  const [picturePropsOpen, setPicturePropsOpen] = useState(false);
  const [styleDialogOpen, setStyleDialogOpen] = useState(false);
  const [headerFooterDialogOpen, setHeaderFooterDialogOpen] = useState(false);
  const [fieldDialogOpen, setFieldDialogOpen] = useState(false);
  const [bookmarkDialogOpen, setBookmarkDialogOpen] = useState(false);
  const [columnDialogOpen, setColumnDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [numberingDialogOpen, setNumberingDialogOpen] = useState(false);
  const [equationDialogOpen, setEquationDialogOpen] = useState(false);

  // ── Display toggles ─────────────────────────────────────────────────────
  const [showTransparentBorders, setShowTransparentBorders] = useState(false);
  const [debugOverlay, setDebugOverlay] = useState(false);

  // ─────────────────────────────────────────────────────────────────────────
  // Return all state
  // ─────────────────────────────────────────────────────────────────────────

  return {
    // ── Document ─────────────────────────────────────────────────────────
    docRef,
    pageCount, setPageCount,
    renderVer, setRenderVer,
    currentPage, setCurrentPage,
    pageInputVal, setPageInputVal,
    zoom, setZoom,
    fileName, setFileName,
    dirty, setDirty,

    // ── Cursor / Selection ───────────────────────────────────────────────
    cursorRef,
    cursor, setCursor,
    cursorRect, setCursorRect,
    selAnchorRef,
    hasSelection, setHasSelection,
    selRects, setSelRects,
    cursorVisible, setCursorVisible,

    // ── Canvas refs ──────────────────────────────────────────────────────
    pageCanvasRefs,
    overlayCanvasRefs,
    renderScaleRef,
    pageSizesRef,
    canvasRefs,

    // ── Char / Para display props ────────────────────────────────────────
    charProps, setCharProps,
    paraProps, setParaProps,

    // ── Undo / Redo ──────────────────────────────────────────────────────
    undoStack,
    redoStack,
    canUndo, setCanUndo,
    canRedo, setCanRedo,

    // ── Korean IME ───────────────────────────────────────────────────────
    composingRef,
    hiddenInputRef,

    // ── Drag state ───────────────────────────────────────────────────────
    isDragging, setIsDragging,
    isDragSelecting, setIsDragSelecting,
    dragStartPos,

    // ── Error ────────────────────────────────────────────────────────────
    editorError, setEditorError,

    // ── Toolbar dropdowns ────────────────────────────────────────────────
    fontOpen, setFontOpen,
    sizeOpen, setSizeOpen,
    colorOpen, setColorOpen,
    highlightOpen, setHighlightOpen,
    exportOpen, setExportOpen,
    spacingOpen, setSpacingOpen,
    tableDialogOpen, setTableDialogOpen,

    // ── Table dialog state ───────────────────────────────────────────────
    tableRows, setTableRows,
    tableCols, setTableCols,

    // ── Custom color inputs ──────────────────────────────────────────────
    customTextColor, setCustomTextColor,
    customHighlight, setCustomHighlight,

    // ── Toolbar display strings ──────────────────────────────────────────
    fontInput, setFontInput,
    sizeInput, setSizeInput,

    // ── Find / Replace ───────────────────────────────────────────────────
    findBarOpen, setFindBarOpen,
    findQuery, setFindQuery,
    replaceQuery, setReplaceQuery,
    caseSensitive, setCaseSensitive,
    findInfo, setFindInfo,

    // ── Edit context ─────────────────────────────────────────────────────
    editMode, setEditMode,
    editModeRef,
    cellCtxRef,
    hfCtxRef,
    fnCtxRef,

    // ── Context menu ─────────────────────────────────────────────────────
    contextMenu, setContextMenu,

    // ── Page setup dialog ────────────────────────────────────────────────
    pageDefOpen, setPageDefOpen,
    pageDef, setPageDef,

    // ── Styles ───────────────────────────────────────────────────────────
    styleList, setStyleList,
    styleOpen, setStyleOpen,

    // ── Display options ──────────────────────────────────────────────────
    showControlCodes, setShowControlCodes,
    showParaMarks, setShowParaMarks,

    // ── Bookmarks ────────────────────────────────────────────────────────
    bookmarkOpen, setBookmarkOpen,
    bookmarkName, setBookmarkName,
    bookmarkList, setBookmarkList,

    // ── Dropdown outside-click refs ──────────────────────────────────────
    fontBtnRef, fontDropRef,
    sizeBtnRef, sizeDropRef,
    colorBtnRef, colorDropRef,
    hlBtnRef, hlDropRef,
    exportBtnRef, exportDropRef,
    spacingBtnRef, spacingDropRef,
    tableDialogRef, tableBtnRef,
    styleBtnRef, styleDropRef,
    contextMenuRef,

    // ── NEW: Sidebar ─────────────────────────────────────────────────────
    sidebarOpen, setSidebarOpen,

    // ── NEW: Clipboard ───────────────────────────────────────────────────
    clipboardHasContent, setClipboardHasContent,
    clipboardHasControl, setClipboardHasControl,

    // ── NEW: Dialog states ───────────────────────────────────────────────
    tablePropsOpen, setTablePropsOpen,
    cellPropsOpen, setCellPropsOpen,
    shapeDialogOpen, setShapeDialogOpen,
    picturePropsOpen, setPicturePropsOpen,
    styleDialogOpen, setStyleDialogOpen,
    headerFooterDialogOpen, setHeaderFooterDialogOpen,
    fieldDialogOpen, setFieldDialogOpen,
    bookmarkDialogOpen, setBookmarkDialogOpen,
    columnDialogOpen, setColumnDialogOpen,
    formDialogOpen, setFormDialogOpen,
    numberingDialogOpen, setNumberingDialogOpen,
    equationDialogOpen, setEquationDialogOpen,

    // ── NEW: Display toggles ─────────────────────────────────────────────
    showTransparentBorders, setShowTransparentBorders,
    debugOverlay, setDebugOverlay,

    // ── Pending char format (applied to next typed text) ────────────────
    pendingCharFormat,
  } as const;
}

/** Convenience type — the return value of useEditorState(). */
export type EditorState = ReturnType<typeof useEditorState>;
