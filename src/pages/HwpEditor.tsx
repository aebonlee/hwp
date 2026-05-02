import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  type ChangeEvent,
  type DragEvent,
  type KeyboardEvent,
  type MouseEvent,
} from 'react';
import type { HwpDocument as RhwpDoc } from '@rhwp/core';
import { useRhwp } from '../hooks/useRhwp';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function hexToHwpColor(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (b << 16) | (g << 8) | r; // Windows COLORREF BGR
}

function hwpColorToHex(c: number): string {
  const r = c & 0xff;
  const g = (c >> 8) & 0xff;
  const b = (c >> 16) & 0xff;
  return '#' + [r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('');
}

function parseResult(json: string): Record<string, unknown> | null {
  try {
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}


// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────

const KOREAN_FONTS = [
  '맑은 고딕',
  '함초롬바탕',
  '함초롬돋움',
  '나눔고딕',
  '나눔명조',
  '바탕',
  '돋움',
  '굴림',
  'Arial',
  'Times New Roman',
];

const FONT_SIZES = [8, 9, 10, 10.5, 11, 12, 14, 16, 18, 20, 22, 24, 28, 36, 48, 72];

const LINE_SPACINGS = [
  { label: '100%', value: 100 },
  { label: '115%', value: 115 },
  { label: '130%', value: 130 },
  { label: '150%', value: 150 },
  { label: '160%', value: 160 },
  { label: '200%', value: 200 },
  { label: '250%', value: 250 },
  { label: '300%', value: 300 },
];

const COLOR_PALETTE = [
  [
    '#000000', '#434343', '#666666', '#999999', '#B7B7B7',
    '#CCCCCC', '#D9D9D9', '#EFEFEF', '#F3F3F3', '#FFFFFF',
  ],
  [
    '#980000', '#FF0000', '#FF9900', '#FFFF00', '#00FF00',
    '#00FFFF', '#4A86E8', '#0000FF', '#9900FF', '#FF00FF',
  ],
  [
    '#E6B8AF', '#F4CCCC', '#FCE5CD', '#FFF2CC', '#D9EAD3',
    '#D0E0E3', '#C9DAF8', '#CFE2F3', '#D9D2E9', '#EAD1DC',
  ],
];

const MAX_UNDO = 100;

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface CursorPos {
  secIdx: number;
  paraIdx: number;
  charOffset: number;
}

interface CharProps {
  fontFamily: string;
  fontSize: number; // HWPUNIT (1pt = 100)
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  textColor: number;  // COLORREF BGR
  highlight: number;  // COLORREF BGR
}

interface ParaProps {
  alignment: string;
  lineSpacing: number;
  marginLeft: number;
  marginRight: number;
  indent: number;
}

interface SelectionRect {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

const HwpEditor: React.FC = () => {
  const { ready, loading: wasmLoading, error: wasmError } = useRhwp();
  const { t } = useLanguage();

  // Document
  const docRef = useRef<RhwpDoc | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [renderVer, setRenderVer] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageInputVal, setPageInputVal] = useState('1');
  const [zoom, setZoom] = useState(100);
  const [fileName, setFileName] = useState('');
  const [dirty, setDirty] = useState(false);

  // Cursor / Selection
  const cursorRef = useRef<CursorPos>({ secIdx: 0, paraIdx: 0, charOffset: 0 });
  const [cursor, setCursorState] = useState<CursorPos | null>(null);
  const [cursorRect, setCursorRect] = useState<{
    pageIndex: number; x: number; y: number; height: number;
  } | null>(null);
  const selAnchorRef = useRef<CursorPos | null>(null);
  const [, setHasSelection] = useState(false);
  const [selRects, setSelRects] = useState<SelectionRect[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Canvas refs per page (content + overlay)
  const pageCanvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const overlayCanvasRefs = useRef<Record<number, HTMLCanvasElement | null>>({});
  const renderScaleRef = useRef(window.devicePixelRatio || 1);
  const pageSizesRef = useRef<Record<number, { w: number; h: number }>>({});

  // Char / para display props
  const [charProps, setCharProps] = useState<CharProps>({
    fontFamily: '맑은 고딕',
    fontSize: 1000,
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    textColor: 0,
    highlight: hexToHwpColor('#FFFF00'),
  });
  const [paraProps, setParaProps] = useState<ParaProps>({
    alignment: 'justify',
    lineSpacing: 160,
    marginLeft: 0,
    marginRight: 0,
    indent: 0,
  });

  // Undo / Redo stacks
  const undoStack = useRef<number[]>([]);
  const redoStack = useRef<number[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  // Korean IME composing
  const composingRef = useRef(false);
  const hiddenInputRef = useRef<HTMLTextAreaElement>(null);

  // Canvas container refs (for hit-test querySelector)
  const canvasRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Drag-drop
  const [isDragging, setIsDragging] = useState(false);

  // Error
  const [editorError, setEditorError] = useState('');

  // Toolbar dropdowns
  const [fontOpen, setFontOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [colorOpen, setColorOpen] = useState(false);
  const [highlightOpen, setHighlightOpen] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [spacingOpen, setSpacingOpen] = useState(false);
  const [tableDialogOpen, setTableDialogOpen] = useState(false);

  // Table dialog state
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);

  // Custom color inputs
  const [customTextColor, setCustomTextColor] = useState('#000000');
  const [customHighlight, setCustomHighlight] = useState('#FFFF00');

  // Toolbar display strings
  const [fontInput, setFontInput] = useState('맑은 고딕');
  const [sizeInput, setSizeInput] = useState('10');

  // Find/Replace
  const [findBarOpen, setFindBarOpen] = useState(false);
  const [findQuery, setFindQuery] = useState('');
  const [replaceQuery, setReplaceQuery] = useState('');
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [findInfo, setFindInfo] = useState('');

  // Dropdown outside-click refs
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

  // ── Cursor setter ────────────────────────────────────────────────────────

  const setCursor = useCallback((pos: CursorPos) => {
    cursorRef.current = pos;
    setCursorState(pos);
  }, []);

  // ── Rerender ──────────────────────────────────────────────────────────────

  const rerender = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const count = doc.pageCount();
      setPageCount(count);
      setRenderVer((v) => v + 1);
    } catch (e) {
      setEditorError(String(e));
    }
  }, []);

  // ── Cursor display ────────────────────────────────────────────────────────

  const updateCursorDisplay = useCallback((pos: CursorPos) => {
    const doc = docRef.current;
    if (!doc) { setCursorRect(null); return; }
    try {
      const r = parseResult(doc.getCursorRect(pos.secIdx, pos.paraIdx, pos.charOffset));
      if (r && r.x !== undefined) {
        setCursorRect({
          pageIndex: (r.pageIndex as number) ?? 0,
          x: r.x as number,
          y: r.y as number,
          height: r.height as number,
        });
        setCurrentPage((r.pageIndex as number) ?? 0);
      } else {
        setCursorRect(null);
      }
    } catch {
      setCursorRect(null);
    }
  }, []);

  // ── Char/Para props update ────────────────────────────────────────────────

  const updateCharProps = useCallback((pos: CursorPos) => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const cj = doc.getCharPropertiesAt(pos.secIdx, pos.paraIdx, pos.charOffset);
      const cp = parseResult(cj);
      if (cp) {
        const ff = (cp.fontFamily as string) || '맑은 고딕';
        const fs = (cp.fontSize as number) || 1000;
        setFontInput(ff);
        setSizeInput(String(Math.round(fs / 100)));
        setCharProps({
          fontFamily: ff,
          fontSize: fs,
          bold: !!cp.bold,
          italic: !!cp.italic,
          underline: !!cp.underline,
          strikethrough: !!cp.strikethrough,
          textColor: (cp.textColor as number) ?? 0,
          highlight: (cp.highlight as number) ?? hexToHwpColor('#FFFF00'),
        });
      }
    } catch { /* ignore */ }
    try {
      const pj = doc.getParaPropertiesAt(pos.secIdx, pos.paraIdx);
      const pp = parseResult(pj);
      if (pp) {
        setParaProps({
          alignment: (pp.alignment as string) || 'justify',
          lineSpacing: (pp.lineSpacing as number) || 160,
          marginLeft: (pp.marginLeft as number) || 0,
          marginRight: (pp.marginRight as number) || 0,
          indent: (pp.indent as number) || 0,
        });
      }
    } catch { /* ignore */ }
  }, []);

  // ── Selection rects ────────────────────────────────────────────────────────

  const updateSelectionRects = useCallback((anchor: CursorPos, end: CursorPos) => {
    const doc = docRef.current;
    if (!doc) { setSelRects([]); return; }
    let sp = anchor.paraIdx; let so = anchor.charOffset;
    let ep = end.paraIdx; let eo = end.charOffset;
    if (sp > ep || (sp === ep && so > eo)) {
      [sp, ep] = [ep, sp]; [so, eo] = [eo, so];
    }
    try {
      const rj = doc.getSelectionRects(anchor.secIdx, sp, so, ep, eo);
      const rects = JSON.parse(rj) as SelectionRect[];
      setSelRects(Array.isArray(rects) ? rects : []);
    } catch {
      setSelRects([]);
    }
  }, []);

  // ── Move cursor (with optional selection) ────────────────────────────────

  const moveCursor = useCallback((pos: CursorPos, clearSel = true) => {
    setCursor(pos);
    if (clearSel) {
      selAnchorRef.current = null;
      setHasSelection(false);
      setSelRects([]);
    } else if (selAnchorRef.current) {
      updateSelectionRects(selAnchorRef.current, pos);
    }
    updateCursorDisplay(pos);
    updateCharProps(pos);
    setDirty(true);
    hiddenInputRef.current?.focus();
  }, [setCursor, updateCursorDisplay, updateCharProps, updateSelectionRects]);

  // ── Snapshot helpers ──────────────────────────────────────────────────────

  const saveSnapshot = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const id = doc.saveSnapshot();
      undoStack.current.push(id);
      if (undoStack.current.length > MAX_UNDO) {
        const old = undoStack.current.shift();
        if (old !== undefined) { try { doc.discardSnapshot(old); } catch { /* ignore */ } }
      }
      redoStack.current.forEach((sid) => { try { doc.discardSnapshot(sid); } catch { /* ignore */ } });
      redoStack.current = [];
      setCanUndo(true);
      setCanRedo(false);
    } catch { /* ignore */ }
  }, []);

  const handleUndo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || undoStack.current.length === 0) return;
    const id = undoStack.current.pop()!;
    try {
      const redoId = doc.saveSnapshot();
      redoStack.current.push(redoId);
      doc.restoreSnapshot(id);
      try { doc.discardSnapshot(id); } catch { /* ignore */ }
    } catch { /* ignore */ }
    rerender();
    setCanUndo(undoStack.current.length > 0);
    setCanRedo(true);
    const pos = cursorRef.current;
    updateCursorDisplay(pos);
    updateCharProps(pos);
  }, [rerender, updateCursorDisplay, updateCharProps]);

  const handleRedo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || redoStack.current.length === 0) return;
    const id = redoStack.current.pop()!;
    try {
      const undoId = doc.saveSnapshot();
      undoStack.current.push(undoId);
      doc.restoreSnapshot(id);
      try { doc.discardSnapshot(id); } catch { /* ignore */ }
    } catch { /* ignore */ }
    rerender();
    setCanUndo(true);
    setCanRedo(redoStack.current.length > 0);
    const pos = cursorRef.current;
    updateCursorDisplay(pos);
    updateCharProps(pos);
  }, [rerender, updateCursorDisplay, updateCharProps]);

  // ── Document lifecycle ────────────────────────────────────────────────────

  const initDoc = useCallback((doc: RhwpDoc, name: string) => {
    try { doc.convertToEditable(); } catch { /* ignore */ }
    if (docRef.current && docRef.current !== doc) {
      try { docRef.current.free(); } catch { /* ignore */ }
    }
    docRef.current = doc;
    undoStack.current = [];
    redoStack.current = [];
    setCanUndo(false);
    setCanRedo(false);
    setFileName(name);
    setDirty(false);
    setCursorState(null);
    setCursorRect(null);
    selAnchorRef.current = null;
    setHasSelection(false);
    setSelRects([]);
    setCurrentPage(0);
    setEditorError('');
    pageSizesRef.current = {};
    rerender();
    // Initial cursor from saved caret
    try {
      const cp = parseResult(doc.getCaretPosition());
      if (cp && cp.paragraphIndex !== undefined) {
        const pos: CursorPos = {
          secIdx: (cp.sectionIndex as number) ?? 0,
          paraIdx: cp.paragraphIndex as number,
          charOffset: (cp.charOffset as number) ?? 0,
        };
        setCursor(pos);
        setTimeout(() => updateCursorDisplay(pos), 80);
      } else {
        const initPos: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };
        setCursor(initPos);
        setTimeout(() => updateCursorDisplay(initPos), 80);
      }
    } catch {
      const initPos: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };
      setCursor(initPos);
      setTimeout(() => updateCursorDisplay(initPos), 80);
    }
  }, [rerender, setCursor, updateCursorDisplay]);

  const handleNewDoc = useCallback(async () => {
    if (!ready) return;
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const doc = HwpDocument.createEmpty();
      parseResult(doc.createBlankDocument());
      initDoc(doc, '새 문서.hwp');
    } catch (e) {
      setEditorError(`새 문서 생성 실패: ${(e as Error).message}`);
    }
  }, [ready, initDoc]);

  const openFile = useCallback(async (file: File) => {
    if (!ready) return;
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext !== 'hwp' && ext !== 'hwpx') {
      setEditorError('.hwp 또는 .hwpx 파일만 지원합니다.');
      return;
    }
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const bytes = new Uint8Array(await file.arrayBuffer());
      const doc = new HwpDocument(bytes);
      initDoc(doc, file.name);
    } catch (e) {
      setEditorError(`파일 열기 실패: ${(e as Error).message}`);
    }
  }, [ready, initDoc]);

  const triggerFileOpen = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files?.[0]) openFile(input.files[0]);
    };
    input.click();
  }, [openFile]);

  // ── Drag-drop ─────────────────────────────────────────────────────────────

  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => setIsDragging(false), []);

  const handleDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) openFile(file);
  }, [openFile]);

  // ── Canvas hit-test ───────────────────────────────────────────────────────

  const handleCanvasClick = useCallback((e: MouseEvent<HTMLDivElement>, pageIdx: number) => {
    const doc = docRef.current;
    if (!doc) return;
    const canvas = pageCanvasRefs.current[pageIdx];
    if (!canvas) return;

    // Convert screen click to page coordinates
    const scale = renderScaleRef.current;
    const rect = canvas.getBoundingClientRect();
    // Map client coords → canvas buffer coords → page coords
    const pageX = ((e.clientX - rect.left) / rect.width) * canvas.width / scale;
    const pageY = ((e.clientY - rect.top) / rect.height) * canvas.height / scale;

    try {
      const hj = doc.hitTest(pageIdx, pageX, pageY);
      const h = parseResult(hj);
      if (!h) return;
      const pi = ((h.paragraphIndex ?? h.paraIndex) as number) ?? 0;
      const pos: CursorPos = {
        secIdx: (h.sectionIndex as number) ?? 0,
        paraIdx: pi,
        charOffset: (h.charOffset as number) ?? 0,
      };
      if (e.shiftKey && selAnchorRef.current) {
        setCursor(pos);
        updateSelectionRects(selAnchorRef.current, pos);
        setHasSelection(true);
        updateCursorDisplay(pos);
        updateCharProps(pos);
      } else {
        selAnchorRef.current = { ...pos };
        moveCursor(pos, true);
      }
    } catch { /* hitTest can fail on margins */ }

    hiddenInputRef.current?.focus();
  }, [setCursor, moveCursor, updateSelectionRects, updateCursorDisplay, updateCharProps]);

  // ── Delete selection ──────────────────────────────────────────────────────

  const deleteSelection = useCallback((): CursorPos | null => {
    const doc = docRef.current;
    const anchor = selAnchorRef.current;
    const cur = cursorRef.current;
    if (!doc || !anchor) return null;
    let sp = anchor.paraIdx; let so = anchor.charOffset;
    let ep = cur.paraIdx; let eo = cur.charOffset;
    if (sp > ep || (sp === ep && so > eo)) {
      [sp, ep] = [ep, sp]; [so, eo] = [eo, so];
    }
    try {
      const rj = doc.deleteRange(cur.secIdx, sp, so, ep, eo);
      const r = parseResult(rj);
      selAnchorRef.current = null;
      setHasSelection(false);
      setSelRects([]);
      if (r?.ok) {
        return { secIdx: cur.secIdx, paraIdx: r.paraIdx as number, charOffset: r.charOffset as number };
      }
      return { ...anchor };
    } catch {
      selAnchorRef.current = null;
      setHasSelection(false);
      setSelRects([]);
      return { ...anchor };
    }
  }, []);

  // ── Insert text ───────────────────────────────────────────────────────────

  const insertText = useCallback((text: string) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    let pos = cursorRef.current;
    if (selAnchorRef.current) {
      const np = deleteSelection();
      if (np) pos = np;
    }
    try {
      const rj = doc.insertText(pos.secIdx, pos.paraIdx, pos.charOffset, text);
      const r = parseResult(rj);
      const newOff = (r?.charOffset as number) ?? pos.charOffset + text.length;
      const newPos: CursorPos = { ...pos, charOffset: newOff };
      rerender();
      moveCursor(newPos);
    } catch (e) { console.error('insertText failed:', e); }
  }, [saveSnapshot, deleteSelection, moveCursor, rerender]);

  // ── Delete before/after cursor ─────────────────────────────────────────────

  const deleteCharBefore = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    if (selAnchorRef.current) { saveSnapshot(); const np = deleteSelection(); if (np) moveCursor(np); rerender(); return; }
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      if (pos.charOffset > 0) {
        const rj = doc.deleteText(pos.secIdx, pos.paraIdx, pos.charOffset - 1, 1);
        const r = parseResult(rj);
        const newOff = (r?.charOffset as number) ?? pos.charOffset - 1;
        moveCursor({ ...pos, charOffset: newOff });
      } else if (pos.paraIdx > 0) {
        const prevLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx - 1);
        // mergeParagraph(sec, para): merges para into para-1, deletes para
        const rj = doc.mergeParagraph(pos.secIdx, pos.paraIdx);
        const r = parseResult(rj);
        moveCursor({
          secIdx: pos.secIdx,
          paraIdx: (r?.paraIdx as number) ?? pos.paraIdx - 1,
          charOffset: (r?.charOffset as number) ?? prevLen,
        });
      }
    } catch (e) { console.error('deleteCharBefore failed:', e); }
    rerender();
  }, [deleteSelection, saveSnapshot, moveCursor, rerender]);

  const deleteCharAfter = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    if (selAnchorRef.current) { saveSnapshot(); const np = deleteSelection(); if (np) moveCursor(np); rerender(); return; }
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
      if (pos.charOffset < pLen) {
        doc.deleteText(pos.secIdx, pos.paraIdx, pos.charOffset, 1);
        moveCursor({ ...pos }); // stay at same offset
      } else {
        const pCount = doc.getParagraphCount(pos.secIdx);
        if (pos.paraIdx < pCount - 1) {
          // mergeParagraph(sec, para): merges para into para-1, deletes para
          // For Delete at end: merge next paragraph into current
          const rj = doc.mergeParagraph(pos.secIdx, pos.paraIdx + 1);
          const r = parseResult(rj);
          moveCursor({
            secIdx: pos.secIdx,
            paraIdx: (r?.paraIdx as number) ?? pos.paraIdx,
            charOffset: (r?.charOffset as number) ?? pos.charOffset,
          });
        }
      }
    } catch (e) { console.error('deleteCharAfter failed:', e); }
    rerender();
  }, [deleteSelection, saveSnapshot, moveCursor, rerender]);

  // ── Formatting ─────────────────────────────────────────────────────────────

  const applyCharFormat = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    if (selAnchorRef.current) {
      const anchor = selAnchorRef.current;
      let sp = anchor.paraIdx; let so = anchor.charOffset;
      let ep = pos.paraIdx; let eo = pos.charOffset;
      if (sp > ep || (sp === ep && so > eo)) {
        [sp, ep] = [ep, sp]; [so, eo] = [eo, so];
      }
      try {
        doc.beginBatch();
        for (let pi = sp; pi <= ep; pi++) {
          const startO = pi === sp ? so : 0;
          const endO = pi === ep ? eo : doc.getParagraphLength(pos.secIdx, pi);
          doc.applyCharFormat(pos.secIdx, pi, startO, endO, JSON.stringify(props));
        }
        doc.endBatch();
      } catch {
        try { doc.endBatch(); } catch { /* ignore */ }
      }
    } else {
      // Apply at single char at cursor
      try {
        const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
        const endOff = Math.min(pos.charOffset + 1, pLen);
        if (pos.charOffset < endOff) {
          doc.applyCharFormat(pos.secIdx, pos.paraIdx, pos.charOffset, endOff, JSON.stringify(props));
        }
      } catch { /* ignore */ }
    }
    rerender();
    updateCharProps(pos);
  }, [saveSnapshot, rerender, updateCharProps]);

  const applyParaFormat = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify(props));
    } catch { /* ignore */ }
    rerender();
    updateCharProps(pos);
  }, [saveSnapshot, rerender, updateCharProps]);

  const toggleBold = useCallback(() => applyCharFormat({ bold: !charProps.bold }), [applyCharFormat, charProps.bold]);
  const toggleItalic = useCallback(() => applyCharFormat({ italic: !charProps.italic }), [applyCharFormat, charProps.italic]);
  const toggleUnderline = useCallback(() => applyCharFormat({ underline: !charProps.underline }), [applyCharFormat, charProps.underline]);
  const toggleStrikethrough = useCallback(() => applyCharFormat({ strikethrough: !charProps.strikethrough }), [applyCharFormat, charProps.strikethrough]);

  const applyFont = useCallback((fontName: string) => {
    applyCharFormat({ fontFamily: fontName });
    setFontInput(fontName);
    setFontOpen(false);
  }, [applyCharFormat]);

  const applySize = useCallback((pt: number) => {
    applyCharFormat({ fontSize: Math.round(pt * 100) });
    setSizeInput(String(pt));
    setSizeOpen(false);
  }, [applyCharFormat]);

  const applyAlignment = useCallback((alignment: string) => {
    applyParaFormat({ alignment });
  }, [applyParaFormat]);

  const applyLineSpacing = useCallback((spacing: number) => {
    applyParaFormat({ lineSpacing: spacing });
    setSpacingOpen(false);
  }, [applyParaFormat]);

  const applyIndentChange = useCallback((delta: number) => {
    const newMargin = Math.max(0, paraProps.marginLeft + delta * 800);
    applyParaFormat({ marginLeft: newMargin });
  }, [applyParaFormat, paraProps.marginLeft]);

  const applyBulletList = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const bulletId = doc.ensureDefaultBullet('●');
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numberingId: bulletId, numberingLevel: 0 }));
    } catch { /* ignore */ }
    rerender();
  }, [saveSnapshot, rerender]);

  const applyNumberedList = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const numbId = doc.ensureDefaultNumbering();
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numberingId: numbId, numberingLevel: 0 }));
    } catch { /* ignore */ }
    rerender();
  }, [saveSnapshot, rerender]);

  const applyTextColor = useCallback((hex: string) => {
    applyCharFormat({ textColor: hexToHwpColor(hex) });
    setColorOpen(false);
  }, [applyCharFormat]);

  const applyHighlight = useCallback((hex: string) => {
    applyCharFormat({ highlight: hexToHwpColor(hex) });
    setHighlightOpen(false);
  }, [applyCharFormat]);

  // ── Insert table ───────────────────────────────────────────────────────────

  const handleInsertTable = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const rj = doc.createTable(pos.secIdx, pos.paraIdx, pos.charOffset, tableRows, tableCols);
      const r = parseResult(rj);
      if (r?.ok) {
        moveCursor({ ...pos, paraIdx: (r.paraIdx as number) ?? pos.paraIdx, charOffset: 0 });
      }
    } catch (e) {
      setEditorError((e as Error).message);
    }
    rerender();
    setTableDialogOpen(false);
  }, [saveSnapshot, moveCursor, rerender, tableRows, tableCols]);

  // ── Insert image ───────────────────────────────────────────────────────────

  const handleInsertImage = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (ev) => {
      const file = (ev.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const doc = docRef.current;
      if (!doc) return;
      const pos = cursorRef.current;
      saveSnapshot();
      try {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
          URL.revokeObjectURL(url);
          const natW = img.naturalWidth;
          const natH = img.naturalHeight;
          const hwpW = Math.min(Math.round((natW / 96) * 7200), 48000);
          const hwpH = Math.round((natH / natW) * hwpW);
          const ext = (file.name.split('.').pop()?.toLowerCase()) || 'png';
          try {
            doc.insertPicture(pos.secIdx, pos.paraIdx, pos.charOffset, bytes, hwpW, hwpH, natW, natH, ext, file.name);
            moveCursor({ ...pos, charOffset: pos.charOffset + 1 });
          } catch (e2) {
            setEditorError((e2 as Error).message);
          }
          rerender();
        };
        img.src = url;
      } catch (e) {
        setEditorError((e as Error).message);
      }
    };
    input.click();
  }, [saveSnapshot, moveCursor, rerender]);

  // ── Page break ─────────────────────────────────────────────────────────────

  const handlePageBreak = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.insertPageBreak(pos.secIdx, pos.paraIdx, pos.charOffset);
    } catch { /* ignore */ }
    rerender();
  }, [saveSnapshot, rerender]);

  // ── Find / Replace ─────────────────────────────────────────────────────────

  const handleFindNext = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !findQuery) return;
    const pos = cursorRef.current;
    try {
      const rj = doc.searchText(findQuery, pos.secIdx, pos.paraIdx, pos.charOffset, true, caseSensitive);
      const r = parseResult(rj);
      if (r?.found) {
        const np: CursorPos = {
          secIdx: (r.sectionIndex as number) ?? pos.secIdx,
          paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
          charOffset: (r.charOffset as number) ?? 0,
        };
        moveCursor(np);
        setFindInfo('');
      } else {
        setFindInfo(t('site.hwpEditor.noResults'));
      }
    } catch { /* ignore */ }
  }, [findQuery, caseSensitive, moveCursor, t]);

  const handleReplaceOne = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !findQuery) return;
    saveSnapshot();
    try {
      const rj = doc.replaceOne(findQuery, replaceQuery, caseSensitive);
      const r = parseResult(rj);
      if (r?.ok) {
        rerender();
        setFindInfo(t('site.hwpEditor.replaced'));
      } else {
        setFindInfo(t('site.hwpEditor.noResults'));
      }
    } catch { /* ignore */ }
  }, [findQuery, replaceQuery, caseSensitive, saveSnapshot, rerender, t]);

  const handleReplaceAll = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !findQuery) return;
    saveSnapshot();
    try {
      const rj = doc.replaceAll(findQuery, replaceQuery, caseSensitive);
      const r = parseResult(rj);
      rerender();
      setFindInfo(`${t('site.hwpEditor.replaced')} ${r?.count ?? 0}`);
    } catch { /* ignore */ }
  }, [findQuery, replaceQuery, caseSensitive, saveSnapshot, rerender, t]);

  // ── Export ─────────────────────────────────────────────────────────────────

  const handleExport = useCallback((format: 'hwp' | 'hwpx') => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const bytes = format === 'hwp' ? doc.exportHwp() : doc.exportHwpx();
      const blob = new Blob([bytes], { type: 'application/octet-stream' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const baseName = fileName ? fileName.replace(/\.[^.]+$/, '') : 'document';
      a.download = `${baseName}.${format}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setEditorError(`내보내기 실패: ${(e as Error).message}`);
    }
    setExportOpen(false);
  }, [fileName]);

  // ── Keyboard handler ──────────────────────────────────────────────────────

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (composingRef.current) return;
    const doc = docRef.current;
    if (!doc || !cursorRef.current) return;
    const pos = cursorRef.current;
    const ctrl = e.ctrlKey || e.metaKey;

    if (ctrl) {
      switch (e.key.toLowerCase()) {
        case 'z': e.preventDefault(); handleUndo(); return;
        case 'y': e.preventDefault(); handleRedo(); return;
        case 'b': e.preventDefault(); toggleBold(); return;
        case 'i': e.preventDefault(); toggleItalic(); return;
        case 'u': e.preventDefault(); toggleUnderline(); return;
        case 'f': e.preventDefault(); setFindBarOpen(true); return;
        case 'a': {
          e.preventDefault();
          try {
            const sc = doc.getSectionCount();
            if (sc === 0) return;
            const lastSec = sc - 1;
            const lastPara = doc.getParagraphCount(lastSec) - 1;
            const lastChar = doc.getParagraphLength(lastSec, lastPara);
            const startPos: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };
            const endPos: CursorPos = { secIdx: lastSec, paraIdx: lastPara, charOffset: lastChar };
            selAnchorRef.current = startPos;
            setCursor(endPos);
            updateSelectionRects(startPos, endPos);
            setHasSelection(true);
            updateCursorDisplay(endPos);
          } catch { /* ignore */ }
          return;
        }
        case 'c': {
          e.preventDefault();
          const anchor = selAnchorRef.current;
          if (!anchor) return;
          let sp = anchor.paraIdx; let so = anchor.charOffset;
          let ep = pos.paraIdx; let eo = pos.charOffset;
          if (sp > ep || (sp === ep && so > eo)) { [sp, ep] = [ep, sp]; [so, eo] = [eo, so]; }
          try {
            const rj = doc.copySelection(pos.secIdx, sp, so, ep, eo);
            const r = parseResult(rj);
            if (r?.text) navigator.clipboard.writeText(r.text as string).catch(() => {});
          } catch { /* ignore */ }
          return;
        }
        case 'x': {
          e.preventDefault();
          const anchor2 = selAnchorRef.current;
          if (!anchor2) return;
          let sp2 = anchor2.paraIdx; let so2 = anchor2.charOffset;
          let ep2 = pos.paraIdx; let eo2 = pos.charOffset;
          if (sp2 > ep2 || (sp2 === ep2 && so2 > eo2)) { [sp2, ep2] = [ep2, sp2]; [so2, eo2] = [eo2, so2]; }
          try {
            const rj2 = doc.copySelection(pos.secIdx, sp2, so2, ep2, eo2);
            const r2 = parseResult(rj2);
            if (r2?.text) navigator.clipboard.writeText(r2.text as string).catch(() => {});
          } catch { /* ignore */ }
          deleteCharBefore(); // will handle selection because hasSelection=true
          return;
        }
        case 'v': {
          e.preventDefault();
          navigator.clipboard.readText().then((text) => { if (text) insertText(text); }).catch(() => {});
          return;
        }
      }
      return;
    }

    switch (e.key) {
      case 'Enter': {
        e.preventDefault();
        saveSnapshot();
        if (selAnchorRef.current) { const np = deleteSelection(); if (np) setCursor(np); }
        const curP = cursorRef.current;
        try {
          const rj = doc.splitParagraph(curP.secIdx, curP.paraIdx, curP.charOffset);
          const r = parseResult(rj);
          const np: CursorPos = {
            secIdx: curP.secIdx,
            paraIdx: (r?.paraIdx as number) ?? curP.paraIdx + 1,
            charOffset: 0,
          };
          moveCursor(np);
        } catch { /* ignore */ }
        rerender();
        break;
      }
      case 'Backspace': e.preventDefault(); deleteCharBefore(); break;
      case 'Delete': e.preventDefault(); deleteCharAfter(); break;
      case 'ArrowLeft': {
        e.preventDefault();
        const np = { ...pos };
        if (pos.charOffset > 0) {
          np.charOffset = pos.charOffset - 1;
        } else if (pos.paraIdx > 0) {
          np.paraIdx = pos.paraIdx - 1;
          try { np.charOffset = doc.getParagraphLength(pos.secIdx, np.paraIdx); } catch { np.charOffset = 0; }
        } else break;
        if (e.shiftKey) {
          if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
          setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
        } else {
          moveCursor(np);
        }
        break;
      }
      case 'ArrowRight': {
        e.preventDefault();
        const np = { ...pos };
        try {
          const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
          if (pos.charOffset < pLen) {
            np.charOffset = pos.charOffset + 1;
          } else {
            const pCount = doc.getParagraphCount(pos.secIdx);
            if (pos.paraIdx < pCount - 1) { np.paraIdx = pos.paraIdx + 1; np.charOffset = 0; }
            else break;
          }
        } catch { break; }
        if (e.shiftKey) {
          if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
          setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
        } else {
          moveCursor(np);
        }
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        const cx = cursorRect ? cursorRect.x : 0;
        try {
          const rj = doc.moveVertical(
            pos.secIdx, pos.paraIdx, pos.charOffset,
            -1, cx, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff
          );
          const r = parseResult(rj);
          if (r) {
            const np: CursorPos = {
              secIdx: (r.sectionIndex as number) ?? pos.secIdx,
              paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
              charOffset: (r.charOffset as number) ?? pos.charOffset,
            };
            if (e.shiftKey) {
              if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
              setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
            } else { moveCursor(np); }
          }
        } catch {
          // fallback: move to previous paragraph
          if (pos.paraIdx > 0) {
            const np: CursorPos = { ...pos, paraIdx: pos.paraIdx - 1 };
            try { np.charOffset = Math.min(pos.charOffset, doc.getParagraphLength(pos.secIdx, np.paraIdx)); } catch { np.charOffset = 0; }
            if (e.shiftKey) {
              if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
              setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
            } else { moveCursor(np); }
          }
        }
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        const cx2 = cursorRect ? cursorRect.x : 0;
        try {
          const rj = doc.moveVertical(
            pos.secIdx, pos.paraIdx, pos.charOffset,
            1, cx2, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff
          );
          const r = parseResult(rj);
          if (r) {
            const np: CursorPos = {
              secIdx: (r.sectionIndex as number) ?? pos.secIdx,
              paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
              charOffset: (r.charOffset as number) ?? pos.charOffset,
            };
            if (e.shiftKey) {
              if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
              setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
            } else { moveCursor(np); }
          }
        } catch {
          // fallback: move to next paragraph
          try {
            const pCount = doc.getParagraphCount(pos.secIdx);
            if (pos.paraIdx < pCount - 1) {
              const np: CursorPos = { ...pos, paraIdx: pos.paraIdx + 1 };
              np.charOffset = Math.min(pos.charOffset, doc.getParagraphLength(pos.secIdx, np.paraIdx));
              if (e.shiftKey) {
                if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
                setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
              } else { moveCursor(np); }
            }
          } catch { /* ignore */ }
        }
        break;
      }
      case 'Home': {
        e.preventDefault();
        try {
          const li = parseResult(doc.getLineInfo(pos.secIdx, pos.paraIdx, pos.charOffset));
          const np: CursorPos = { ...pos, charOffset: li ? (li.charStart as number) : 0 };
          if (e.shiftKey) {
            if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
            setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
          } else { moveCursor(np); }
        } catch { /* ignore */ }
        break;
      }
      case 'End': {
        e.preventDefault();
        try {
          const li = parseResult(doc.getLineInfo(pos.secIdx, pos.paraIdx, pos.charOffset));
          const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
          const np: CursorPos = { ...pos, charOffset: li ? Math.min(li.charEnd as number, pLen) : pLen };
          if (e.shiftKey) {
            if (!selAnchorRef.current) selAnchorRef.current = { ...pos };
            setCursor(np); updateSelectionRects(selAnchorRef.current, np); setHasSelection(true); updateCursorDisplay(np);
          } else { moveCursor(np); }
        } catch { /* ignore */ }
        break;
      }
      case 'Tab': e.preventDefault(); insertText('\t'); break;
      case 'Escape':
        setFindBarOpen(false); setFontOpen(false); setSizeOpen(false);
        setColorOpen(false); setHighlightOpen(false); setExportOpen(false);
        setSpacingOpen(false); setTableDialogOpen(false);
        break;
    }
  }, [
    cursor, cursorRect,
    handleUndo, handleRedo,
    toggleBold, toggleItalic, toggleUnderline,
    insertText, deleteSelection, deleteCharBefore, deleteCharAfter,
    saveSnapshot, moveCursor, rerender,
    updateSelectionRects, updateCursorDisplay,
    setCursor,
  ]);

  // ── IME handlers ──────────────────────────────────────────────────────────

  const handleIMECompositionStart = useCallback(() => {
    composingRef.current = true;
  }, []);

  const handleIMECompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    composingRef.current = false;
    const text = e.data;
    if (text) insertText(text);
    if (hiddenInputRef.current) hiddenInputRef.current.value = '';
  }, [insertText]);

  const handleIMEInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    if (composingRef.current) return;
    const target = e.target as HTMLTextAreaElement;
    const val = target.value;
    if (val) { insertText(val); target.value = ''; }
  }, [insertText]);

  // ── Page navigation ────────────────────────────────────────────────────────

  const handlePageInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPageInputVal(e.target.value);
  }, []);

  const handlePageInputCommit = useCallback(() => {
    const n = parseInt(pageInputVal, 10);
    if (!isNaN(n) && n >= 1 && n <= pageCount) {
      setCurrentPage(n - 1);
    } else {
      setPageInputVal(String(currentPage + 1));
    }
  }, [pageInputVal, pageCount, currentPage]);

  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 10, 200)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 10, 30)), []);

  // ── Sync page input with current page ─────────────────────────────────────

  useEffect(() => {
    setPageInputVal(String(currentPage + 1));
  }, [currentPage]);

  // ── Outside-click to close dropdowns ──────────────────────────────────────

  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      const target = e.target as Node;
      const outside = (btn: React.RefObject<HTMLElement | null>, drop: React.RefObject<HTMLElement | null>) =>
        (!btn.current?.contains(target)) && (!drop.current?.contains(target));

      if (fontOpen && outside(fontBtnRef, fontDropRef)) setFontOpen(false);
      if (sizeOpen && outside(sizeBtnRef, sizeDropRef)) setSizeOpen(false);
      if (colorOpen && outside(colorBtnRef, colorDropRef)) setColorOpen(false);
      if (highlightOpen && outside(hlBtnRef, hlDropRef)) setHighlightOpen(false);
      if (exportOpen && outside(exportBtnRef, exportDropRef)) setExportOpen(false);
      if (spacingOpen && outside(spacingBtnRef, spacingDropRef)) setSpacingOpen(false);
      if (tableDialogOpen && outside(tableBtnRef, tableDialogRef)) setTableDialogOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [fontOpen, sizeOpen, colorOpen, highlightOpen, exportOpen, spacingOpen, tableDialogOpen]);

  // ── Cleanup on unmount ─────────────────────────────────────────────────────

  useEffect(() => {
    return () => {
      if (docRef.current) {
        try { docRef.current.free(); } catch { /* ignore */ }
        docRef.current = null;
      }
    };
  }, []);

  // ── Canvas rendering effect ─────────────────────────────────────────────────
  // When renderVer changes (document modified), re-draw all page canvases.

  useEffect(() => {
    const doc = docRef.current;
    if (!doc || pageCount === 0) return;
    const scale = renderScaleRef.current;

    for (let i = 0; i < pageCount; i++) {
      const canvas = pageCanvasRefs.current[i];
      if (!canvas) continue;
      try {
        doc.renderPageToCanvas(i, canvas, scale);
        // renderPageToCanvas sets canvas.width/height = page_size * scale
        // Set CSS display size = page_size in CSS pixels
        const cssW = canvas.width / scale;
        const cssH = canvas.height / scale;
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        pageSizesRef.current[i] = { w: cssW, h: cssH };

        // Setup overlay canvas with matching buffer size
        const overlay = overlayCanvasRefs.current[i];
        if (overlay) {
          overlay.width = canvas.width;
          overlay.height = canvas.height;
          overlay.style.width = cssW + 'px';
          overlay.style.height = cssH + 'px';
        }
      } catch (e) {
        console.error('renderPageToCanvas failed for page', i, e);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderVer, pageCount]);

  // ── Overlay drawing effect ──────────────────────────────────────────────────
  // Draws cursor and selection rects on overlay canvases.

  useEffect(() => {
    const scale = renderScaleRef.current;
    for (let i = 0; i < pageCount; i++) {
      const overlay = overlayCanvasRefs.current[i];
      if (!overlay) continue;
      const ctx = overlay.getContext('2d');
      if (!ctx) continue;
      ctx.clearRect(0, 0, overlay.width, overlay.height);

      // Selection rects for this page
      const pageRects = selRects.filter((r) => r.pageIndex === i);
      if (pageRects.length > 0) {
        ctx.fillStyle = 'rgba(0, 70, 200, 0.25)';
        for (const sr of pageRects) {
          ctx.fillRect(sr.x * scale, sr.y * scale, sr.width * scale, sr.height * scale);
        }
      }

      // Cursor line for this page
      if (cursorRect && cursorRect.pageIndex === i && cursorVisible) {
        ctx.strokeStyle = '#0046C8';
        ctx.lineWidth = Math.max(1.5, 2 * scale);
        ctx.beginPath();
        ctx.moveTo(cursorRect.x * scale, cursorRect.y * scale);
        ctx.lineTo(cursorRect.x * scale, (cursorRect.y + cursorRect.height) * scale);
        ctx.stroke();
      }
    }
  }, [pageCount, cursorRect, selRects, cursorVisible, renderVer]);

  // ── Cursor blink ────────────────────────────────────────────────────────────

  useEffect(() => {
    if (!cursorRect) {
      setCursorVisible(true);
      return;
    }
    setCursorVisible(true);
    const interval = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [cursorRect]);

  // ── Derived values ─────────────────────────────────────────────────────────

  const hasDoc = pageCount > 0;
  const textColorHex = hwpColorToHex(charProps.textColor);
  const highlightHex = hwpColorToHex(charProps.highlight);


  // ── Color picker renderer ─────────────────────────────────────────────────

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

  // ─────────────────────────────────────────────────────────────────────────
  // Render
  // ─────────────────────────────────────────────────────────────────────────

  return (
    <>
      <SEOHead
        title={t('site.hwpEditor.title')}
        description={t('site.hwpEditor.subtitle')}
      />

      {/* Page header */}
      <section className="page-header">
        <div className="container">
          <h2>{t('site.hwpEditor.title')}</h2>
          <p>{t('site.hwpEditor.subtitle')}</p>
        </div>
      </section>

      {/* Main editor section */}
      <section className="section hwp-editor-page">
        <div className="container">

          {/* Error banner */}
          {editorError && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{editorError}</span>
              <button
                onClick={() => setEditorError('')}
                style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '1.1rem' }}
              >
                &times;
              </button>
            </div>
          )}

          {/* WASM error */}
          {wasmError && !wasmLoading && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{t('site.hwpEditor.wasmError')}: {wasmError}</span>
            </div>
          )}

          {/* WASM loading */}
          {wasmLoading && (
            <div className="hwp-editor-loading">
              <div className="loading-spinner" />
              <p>{t('site.hwpEditor.wasmLoading')}</p>
            </div>
          )}

          {/* Empty / drop zone */}
          {ready && !hasDoc && !wasmLoading && (
            <div
              className={`hwp-editor-container${isDragging ? ' drag-over' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="hwp-editor-empty">
                <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
                <h3>{t('site.hwpEditor.dropOrNew')}</h3>
                <p>{t('site.hwpEditor.clickToEdit')}</p>
                <div className="hwp-editor-empty-actions">
                  <button className="hwp-empty-btn primary" onClick={handleNewDoc} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    {t('site.hwpEditor.newDoc')}
                  </button>
                  <button className="hwp-empty-btn" onClick={triggerFileOpen} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    {t('site.hwpEditor.openFile')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Editor with document loaded */}
          {hasDoc && (
            <div className="hwp-editor-container">

              {/* ── TOOLBAR ──────────────────────────────────────────────── */}
              <div className="hwp-editor-toolbar">

                {/* File group */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.newDoc')} onClick={handleNewDoc}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.openFile')} onClick={triggerFileOpen}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
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
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      <span style={{ fontSize: '10px' }}>&#9662;</span>
                    </button>
                    {exportOpen && (
                      <div ref={exportDropRef} className="hwp-export-dropdown">
                        <button onClick={() => handleExport('hwp')}>{t('site.hwpEditor.exportHwp')}</button>
                        <button onClick={() => handleExport('hwpx')}>{t('site.hwpEditor.exportHwpx')}</button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Undo / Redo */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" title={`${t('site.hwpEditor.undo')} (Ctrl+Z)`} onClick={handleUndo} disabled={!canUndo}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" title={`${t('site.hwpEditor.redo')} (Ctrl+Y)`} onClick={handleRedo} disabled={!canRedo}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Font family */}
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
                            onClick={() => applyFont(f)}
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
                            onClick={() => applySize(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Text styles */}
                <div className="hwp-toolbar-group">
                  <button
                    className={`hwp-toolbar-btn${charProps.bold ? ' active' : ''}`}
                    title={`${t('site.hwpEditor.bold')} (Ctrl+B)`}
                    onClick={toggleBold}
                    style={{ fontWeight: 'bold' }}
                  >B</button>
                  <button
                    className={`hwp-toolbar-btn${charProps.italic ? ' active' : ''}`}
                    title={`${t('site.hwpEditor.italic')} (Ctrl+I)`}
                    onClick={toggleItalic}
                    style={{ fontStyle: 'italic' }}
                  >I</button>
                  <button
                    className={`hwp-toolbar-btn${charProps.underline ? ' active' : ''}`}
                    title={`${t('site.hwpEditor.underline')} (Ctrl+U)`}
                    onClick={toggleUnderline}
                    style={{ textDecoration: 'underline' }}
                  >U</button>
                  <button
                    className={`hwp-toolbar-btn${charProps.strikethrough ? ' active' : ''}`}
                    title={t('site.hwpEditor.strikethrough')}
                    onClick={toggleStrikethrough}
                    style={{ textDecoration: 'line-through' }}
                  >S</button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Text color */}
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
                        {renderColorPicker(textColorHex, customTextColor, setCustomTextColor, applyTextColor)}
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
                        {renderColorPicker(highlightHex, customHighlight, setCustomHighlight, applyHighlight)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Alignment */}
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
                          <rect x="0" y="1" width="16" height="2" rx="1"/>
                          <rect x="0" y="5" width="11" height="2" rx="1"/>
                          <rect x="0" y="9" width="16" height="2" rx="1"/>
                          <rect x="0" y="13" width="9" height="1.5" rx="0.75"/>
                        </svg>
                      ),
                      center: (
                        <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                          <rect x="0" y="1" width="16" height="2" rx="1"/>
                          <rect x="2.5" y="5" width="11" height="2" rx="1"/>
                          <rect x="0" y="9" width="16" height="2" rx="1"/>
                          <rect x="3.5" y="13" width="9" height="1.5" rx="0.75"/>
                        </svg>
                      ),
                      right: (
                        <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                          <rect x="0" y="1" width="16" height="2" rx="1"/>
                          <rect x="5" y="5" width="11" height="2" rx="1"/>
                          <rect x="0" y="9" width="16" height="2" rx="1"/>
                          <rect x="7" y="13" width="9" height="1.5" rx="0.75"/>
                        </svg>
                      ),
                      justify: (
                        <svg viewBox="0 0 16 16" width="15" height="15" fill="currentColor">
                          <rect x="0" y="1" width="16" height="2" rx="1"/>
                          <rect x="0" y="5" width="16" height="2" rx="1"/>
                          <rect x="0" y="9" width="16" height="2" rx="1"/>
                          <rect x="0" y="13" width="16" height="1.5" rx="0.75"/>
                        </svg>
                      ),
                    };
                    return (
                      <button
                        key={align}
                        className={`hwp-toolbar-btn${paraProps.alignment === align ? ' active' : ''}`}
                        title={titleMap[align]}
                        onClick={() => applyAlignment(align)}
                      >
                        {iconMap[align]}
                      </button>
                    );
                  })}
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Line spacing */}
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
                            onClick={() => applyLineSpacing(sp.value)}
                          >
                            {sp.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Indent */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.outdent')} onClick={() => applyIndentChange(-1)}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" />
                      <line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
                      <polyline points="11 8 7 10 11 12" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.indent')} onClick={() => applyIndentChange(1)}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" />
                      <line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
                      <polyline points="3 8 7 10 3 12" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Lists */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.bulletList')} onClick={applyBulletList}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="9" y1="6" x2="20" y2="6" /><line x1="9" y1="12" x2="20" y2="12" /><line x1="9" y1="18" x2="20" y2="18" />
                      <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
                      <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.numberedList')} onClick={applyNumberedList}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="10" y1="6" x2="21" y2="6" /><line x1="10" y1="12" x2="21" y2="12" /><line x1="10" y1="18" x2="21" y2="18" />
                      <text x="1" y="8" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">1</text>
                      <text x="1" y="14" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">2</text>
                      <text x="1" y="20" fill="currentColor" stroke="none" fontSize="8" fontFamily="sans-serif">3</text>
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Insert */}
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
                            onChange={(e) => setTableRows(Number(e.target.value))}
                          />
                        </div>
                        <div className="hwp-table-dialog-row">
                          <label>열 (Cols)</label>
                          <input
                            type="number" min={1} max={20} value={tableCols}
                            onChange={(e) => setTableCols(Number(e.target.value))}
                          />
                        </div>
                        <button className="hwp-toolbar-btn" style={{ width: '100%', justifyContent: 'center' }} onClick={handleInsertTable}>
                          {t('site.hwpEditor.insertTable')}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.insertImage')} onClick={handleInsertImage}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                  </button>

                  {/* Page break */}
                  <button className="hwp-toolbar-btn" title={t('site.hwpEditor.pageBreak')} onClick={handlePageBreak}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="4 2" />
                      <path d="M9 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Find/Replace toggle */}
                <div className="hwp-toolbar-group">
                  <button
                    className={`hwp-toolbar-btn${findBarOpen ? ' active' : ''}`}
                    title={`${t('site.hwpEditor.findReplace')} (Ctrl+F)`}
                    onClick={() => setFindBarOpen((o) => !o)}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-spacer" />

                {/* Filename indicator */}
                {fileName && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginRight: 8, maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {fileName}{dirty ? ' *' : ''}
                  </span>
                )}
              </div>

              {/* ── FIND/REPLACE BAR ──────────────────────────────────────── */}
              {findBarOpen && (
                <div className="hwp-find-bar">
                  <input
                    type="text"
                    placeholder={t('site.hwpEditor.find')}
                    value={findQuery}
                    onChange={(e) => { setFindQuery(e.target.value); setFindInfo(''); }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleFindNext(); }}
                    autoFocus
                  />
                  <input
                    type="text"
                    placeholder={t('site.hwpEditor.replace')}
                    value={replaceQuery}
                    onChange={(e) => setReplaceQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleReplaceOne(); }}
                  />
                  <button className="hwp-toolbar-btn" onClick={handleFindNext}>{t('site.hwpEditor.findNext')}</button>
                  <button className="hwp-toolbar-btn" onClick={handleReplaceOne}>{t('site.hwpEditor.replaceOne')}</button>
                  <button className="hwp-toolbar-btn" onClick={handleReplaceAll}>{t('site.hwpEditor.replaceAllBtn')}</button>
                  <label style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '13px', whiteSpace: 'nowrap' }}>
                    <input
                      type="checkbox"
                      checked={caseSensitive}
                      onChange={(e) => setCaseSensitive(e.target.checked)}
                    />
                    {t('site.hwpEditor.caseSensitive')}
                  </label>
                  {findInfo && <span className="hwp-find-info">{findInfo}</span>}
                  <button
                    className="hwp-find-close"
                    onClick={() => { setFindBarOpen(false); setFindInfo(''); }}
                  >&#10005;</button>
                </div>
              )}

              {/* ── CANVAS AREA ───────────────────────────────────────────── */}
              <div
                className="hwp-canvas-wrapper"
                onClick={() => hiddenInputRef.current?.focus()}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {Array.from({ length: pageCount }, (_, pageIdx) => (
                  <div
                    key={pageIdx}
                    ref={(el) => { canvasRefs.current[pageIdx] = el; }}
                    className="hwp-canvas"
                    style={{
                      transform: `scale(${zoom / 100})`,
                      transformOrigin: 'top center',
                    }}
                    onClick={(e) => handleCanvasClick(e, pageIdx)}
                  >
                    {/* Content canvas — rendered by WASM via renderPageToCanvas */}
                    <canvas
                      ref={(el) => { pageCanvasRefs.current[pageIdx] = el; }}
                      className="hwp-page-canvas"
                    />
                    {/* Overlay canvas — cursor & selection drawn via 2D context */}
                    <canvas
                      ref={(el) => { overlayCanvasRefs.current[pageIdx] = el; }}
                      className="hwp-overlay-canvas"
                    />
                  </div>
                ))}
              </div>

              {/* Hidden textarea for IME-safe keyboard input */}
              <textarea
                ref={hiddenInputRef}
                className="hwp-hidden-input"
                aria-label="HWP Editor input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                onCompositionStart={handleIMECompositionStart}
                onCompositionEnd={handleIMECompositionEnd}
                onInput={handleIMEInput}
                onKeyDown={handleKeyDown}
                style={{
                  position: 'fixed',
                  left: '-9999px',
                  top: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                  pointerEvents: 'none',
                  resize: 'none',
                }}
              />

              {/* ── PAGE BAR ─────────────────────────────────────────────── */}
              <div className="hwp-page-bar">
                <div className="hwp-page-nav">
                  <button
                    className="hwp-page-btn"
                    disabled={currentPage <= 0}
                    onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="hwp-page-info">
                    {t('site.hwpEditor.page')}
                    &nbsp;
                    <input
                      className="hwp-page-input"
                      type="text"
                      value={pageInputVal}
                      onChange={handlePageInput}
                      onBlur={handlePageInputCommit}
                      onKeyDown={(e) => { if (e.key === 'Enter') handlePageInputCommit(); }}
                    />
                    &nbsp;/ {pageCount}
                  </span>
                  <button
                    className="hwp-page-btn"
                    disabled={currentPage >= pageCount - 1}
                    onClick={() => setCurrentPage((p) => Math.min(pageCount - 1, p + 1))}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-zoom-controls">
                  <button className="hwp-zoom-btn" onClick={handleZoomOut} disabled={zoom <= 30}>&#8722;</button>
                  <span className="hwp-zoom-label">{zoom}%</span>
                  <button className="hwp-zoom-btn" onClick={handleZoomIn} disabled={zoom >= 200}>&#43;</button>
                </div>
              </div>

            </div> /* .hwp-editor-container */
          )}

        </div>
      </section>
    </>
  );
};

export default HwpEditor;
