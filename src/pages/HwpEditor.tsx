import { useState, useRef, useCallback, useEffect, type ReactElement, type DragEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { useRhwp } from '../hooks/useRhwp';
import type { HwpDocument as RhwpDoc } from '@rhwp/core';

/* ── Types ── */
interface CursorPos {
  secIdx: number;
  paraIdx: number;
  charOffset: number;
}

interface SelectionRange {
  start: CursorPos;
  end: CursorPos;
}

interface CursorPixel {
  pageIndex: number;
  x: number;
  y: number;
  height: number;
}

interface SelectionRect {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

/* ── Helpers ── */
/** Parse SVG viewBox attribute */
function parseViewBox(svg: string): { x: number; y: number; w: number; h: number } | null {
  const m = svg.match(/viewBox=["']([^"']+)["']/);
  if (!m) return null;
  const p = m[1].split(/[\s,]+/).map(Number);
  if (p.length < 4) return null;
  return { x: p[0], y: p[1], w: p[2], h: p[3] };
}

/** Safely parse a JSON result string from rhwp API */
function parseResult(json: string): Record<string, unknown> | null {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

/** Compare two cursor positions: -1 if a < b, 0 if equal, 1 if a > b */
function compareCursor(a: CursorPos, b: CursorPos): number {
  if (a.secIdx !== b.secIdx) return a.secIdx < b.secIdx ? -1 : 1;
  if (a.paraIdx !== b.paraIdx) return a.paraIdx < b.paraIdx ? -1 : 1;
  if (a.charOffset !== b.charOffset) return a.charOffset < b.charOffset ? -1 : 1;
  return 0;
}

/** Return ordered [start, end] of a selection */
function orderSelection(sel: SelectionRange): [CursorPos, CursorPos] {
  return compareCursor(sel.start, sel.end) <= 0
    ? [sel.start, sel.end]
    : [sel.end, sel.start];
}

/* ── Component ── */
const HwpEditor = (): ReactElement => {
  const { t } = useLanguage();
  const { ready, loading: wasmLoading, error: wasmError } = useRhwp();

  /* document */
  const docRef = useRef<RhwpDoc | null>(null);
  const [svgPages, setSvgPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [fileName, setFileName] = useState('');
  const [dirty, setDirty] = useState(false);

  /* cursor / selection */
  const [cursor, setCursor] = useState<CursorPos | null>(null);
  const [cursorPx, setCursorPx] = useState<CursorPixel | null>(null);
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const [selectionRects, setSelectionRects] = useState<SelectionRect[]>([]);

  /* UI */
  const [showExport, setShowExport] = useState(false);
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [error, setError] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const composingRef = useRef(false);

  /* undo/redo */
  const undoStackRef = useRef<number[]>([]);
  const redoStackRef = useRef<number[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  /* refs */
  const canvasRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const tableDialogRef = useRef<HTMLDivElement>(null);

  /* ── Close dropdowns on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (showExport && exportRef.current && !exportRef.current.contains(e.target as Node))
        setShowExport(false);
      if (showTableDialog && tableDialogRef.current && !tableDialogRef.current.contains(e.target as Node))
        setShowTableDialog(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showExport, showTableDialog]);

  /* ══════════════════════════════════════════
     Render
     ══════════════════════════════════════════ */
  const renderAllPages = useCallback((doc: RhwpDoc) => {
    try {
      const count = doc.pageCount();
      const pages: string[] = [];
      for (let i = 0; i < count; i++) pages.push(doc.renderPageSvg(i));
      setSvgPages(pages);
      setCurrentPage(p => (p >= count ? Math.max(0, count - 1) : p));
    } catch (err) {
      console.error('renderAllPages error:', err);
    }
  }, []);

  const rerender = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    renderAllPages(doc);
  }, [renderAllPages]);

  /* ══════════════════════════════════════════
     Cursor display
     ══════════════════════════════════════════ */
  const updateCursorDisplay = useCallback((pos: CursorPos) => {
    const doc = docRef.current;
    if (!doc) { setCursorPx(null); return; }
    try {
      const r = parseResult(doc.getCursorRect(pos.secIdx, pos.paraIdx, pos.charOffset));
      if (r && r.x !== undefined) {
        const px: CursorPixel = {
          pageIndex: (r.pageIndex as number) ?? 0,
          x: r.x as number,
          y: r.y as number,
          height: r.height as number,
        };
        setCursorPx(px);
        // auto-navigate to cursor's page
        setCurrentPage(px.pageIndex);
      } else {
        setCursorPx(null);
      }
    } catch {
      setCursorPx(null);
    }
  }, []);

  const updateSelectionRects = useCallback((sel: SelectionRange | null) => {
    const doc = docRef.current;
    if (!doc || !sel) { setSelectionRects([]); return; }
    try {
      const [s, e] = orderSelection(sel);
      const json = doc.getSelectionRects(s.secIdx, s.paraIdx, s.charOffset, e.paraIdx, e.charOffset);
      const rects = JSON.parse(json) as SelectionRect[];
      setSelectionRects(Array.isArray(rects) ? rects : []);
    } catch {
      setSelectionRects([]);
    }
  }, []);

  /* ══════════════════════════════════════════
     Snapshot (undo)
     ══════════════════════════════════════════ */
  const pushSnapshot = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const id = doc.saveSnapshot();
    undoStackRef.current.push(id);
    // limit stack depth
    if (undoStackRef.current.length > 100) {
      const old = undoStackRef.current.shift()!;
      try { doc.discardSnapshot(old); } catch { /* ok */ }
    }
    redoStackRef.current = [];
    setCanUndo(true);
    setCanRedo(false);
    setDirty(true);
  }, []);

  /* ══════════════════════════════════════════
     Document lifecycle
     ══════════════════════════════════════════ */
  const initDoc = useCallback((doc: RhwpDoc, name: string) => {
    // try to make editable (for read-only distributed docs)
    try { doc.convertToEditable(); } catch { /* not critical */ }

    if (docRef.current && docRef.current !== doc) {
      try { docRef.current.free(); } catch { /* ok */ }
    }
    docRef.current = doc;
    undoStackRef.current = [];
    redoStackRef.current = [];
    setCanUndo(false);
    setCanRedo(false);
    setFileName(name);
    setDirty(false);
    setCursor(null);
    setCursorPx(null);
    setSelection(null);
    setSelectionRects([]);
    setCurrentPage(0);
    setError('');
    renderAllPages(doc);

    // try placing cursor at saved caret position
    try {
      const cp = parseResult(doc.getCaretPosition());
      if (cp && cp.paragraphIndex !== undefined) {
        const pos: CursorPos = {
          secIdx: (cp.sectionIndex as number) ?? 0,
          paraIdx: cp.paragraphIndex as number,
          charOffset: (cp.charOffset as number) ?? 0,
        };
        setCursor(pos);
        // Defer cursor display to next tick after SVG is rendered
        setTimeout(() => updateCursorDisplay(pos), 50);
      }
    } catch { /* ok */ }
  }, [renderAllPages, updateCursorDisplay]);

  const handleNewDoc = useCallback(async () => {
    if (!ready) return;
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const doc = HwpDocument.createEmpty();
      const result = parseResult(doc.createBlankDocument());
      if (result && result.ok === false) {
        setError(`새 문서 생성 실패: ${result.error || 'unknown'}`);
        return;
      }
      initDoc(doc, '');
    } catch (err) {
      setError(`새 문서 생성 실패: ${(err as Error).message}`);
    }
  }, [ready, initDoc]);

  const handleOpenFile = useCallback(async (file: File) => {
    if (!ready) return;
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (ext !== 'hwp' && ext !== 'hwpx') {
      setError('.hwp 또는 .hwpx 파일만 지원합니다.');
      return;
    }
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const buf = await file.arrayBuffer();
      const doc = new HwpDocument(new Uint8Array(buf));
      initDoc(doc, file.name);
    } catch (err) {
      setError(`파일 열기 실패: ${(err as Error).message}`);
    }
  }, [ready, initDoc]);

  const triggerFileOpen = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files && input.files.length > 0) handleOpenFile(input.files[0]);
    };
    input.click();
  }, [handleOpenFile]);

  /* ── Drag & drop ── */
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleOpenFile(e.dataTransfer.files[0]);
  };

  /* ══════════════════════════════════════════
     Click → hitTest
     ══════════════════════════════════════════ */
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const doc = docRef.current;
    if (!doc || !canvasRef.current) return;

    const svgEl = canvasRef.current.querySelector('svg');
    if (!svgEl) return;
    const vb = parseViewBox(svgPages[currentPage] || '');
    if (!vb) return;

    const svgRect = svgEl.getBoundingClientRect();
    // Map screen pixels → SVG viewBox coordinates
    const svgX = ((e.clientX - svgRect.left) / svgRect.width) * vb.w + vb.x;
    const svgY = ((e.clientY - svgRect.top) / svgRect.height) * vb.h + vb.y;

    try {
      const r = parseResult(doc.hitTest(currentPage, svgX, svgY));
      if (r && (r.paraIndex !== undefined || r.paragraphIndex !== undefined)) {
        const pos: CursorPos = {
          secIdx: (r.sectionIndex as number) ?? 0,
          paraIdx: ((r.paraIndex ?? r.paragraphIndex) as number),
          charOffset: (r.charOffset as number) ?? 0,
        };

        if (e.shiftKey && cursor) {
          // Extend selection
          const sel: SelectionRange = { start: cursor, end: pos };
          setSelection(sel);
          updateSelectionRects(sel);
        } else {
          setSelection(null);
          setSelectionRects([]);
        }

        setCursor(pos);
        updateCursorDisplay(pos);
      }
    } catch {
      // hitTest can fail on margins/empty areas
    }

    // Focus hidden textarea for keyboard input
    inputRef.current?.focus();
  }, [currentPage, svgPages, cursor, updateCursorDisplay, updateSelectionRects]);

  /* ══════════════════════════════════════════
     Delete selection helper
     ══════════════════════════════════════════ */
  const deleteSelection = useCallback((): CursorPos | null => {
    const doc = docRef.current;
    if (!doc || !selection) return null;
    const [s, e] = orderSelection(selection);
    try {
      const r = parseResult(doc.deleteRange(s.secIdx, s.paraIdx, s.charOffset, e.paraIdx, e.charOffset));
      setSelection(null);
      setSelectionRects([]);
      if (r && r.ok) {
        return {
          secIdx: s.secIdx,
          paraIdx: (r.paraIdx as number) ?? s.paraIdx,
          charOffset: (r.charOffset as number) ?? s.charOffset,
        };
      }
      return s;
    } catch {
      setSelection(null);
      setSelectionRects([]);
      return s;
    }
  }, [selection]);

  /* ══════════════════════════════════════════
     Text insertion (handles IME + normal input)
     ══════════════════════════════════════════ */
  const insertTextAt = useCallback((text: string) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;

    pushSnapshot();

    // If there's a selection, delete it first
    let pos = cursor;
    if (selection) {
      const newPos = deleteSelection();
      if (newPos) pos = newPos;
    }

    try {
      const r = parseResult(doc.insertText(pos.secIdx, pos.paraIdx, pos.charOffset, text));
      const newOffset = r && r.charOffset !== undefined
        ? (r.charOffset as number)
        : pos.charOffset + text.length;
      const newPos: CursorPos = { ...pos, charOffset: newOffset };
      setCursor(newPos);
      rerender();
      updateCursorDisplay(newPos);
    } catch (err) {
      console.error('insertText error:', err);
    }
  }, [cursor, selection, pushSnapshot, deleteSelection, rerender, updateCursorDisplay]);

  /* ══════════════════════════════════════════
     Hidden textarea events (IME-safe input)
     ══════════════════════════════════════════ */
  const handleCompositionStart = useCallback(() => {
    composingRef.current = true;
  }, []);

  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    composingRef.current = false;
    const text = e.data;
    if (text) insertTextAt(text);
    // Clear textarea
    if (inputRef.current) inputRef.current.value = '';
  }, [insertTextAt]);

  const handleInput = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => {
    if (composingRef.current) return; // let compositionEnd handle it
    const ta = e.target as HTMLTextAreaElement;
    const text = ta.value;
    if (text) {
      insertTextAt(text);
      ta.value = '';
    }
  }, [insertTextAt]);

  /* ══════════════════════════════════════════
     Keyboard (special keys only — text goes through textarea)
     ══════════════════════════════════════════ */
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    if (composingRef.current) return;

    const { secIdx, paraIdx, charOffset } = cursor;

    /* ── Ctrl shortcuts ── */
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'z': e.preventDefault(); handleUndo(); return;
        case 'y': e.preventDefault(); handleRedo(); return;
        case 'b': e.preventDefault(); handleBold(); return;
        case 'i': e.preventDefault(); handleItalic(); return;
        case 'u': e.preventDefault(); handleUnderline(); return;
        case 'a': {
          // Select all
          e.preventDefault();
          try {
            const paraCount = doc.getParagraphCount(secIdx);
            const lastLen = doc.getParagraphLength(secIdx, paraCount - 1);
            const sel: SelectionRange = {
              start: { secIdx, paraIdx: 0, charOffset: 0 },
              end: { secIdx, paraIdx: paraCount - 1, charOffset: lastLen },
            };
            setSelection(sel);
            updateSelectionRects(sel);
          } catch { /* ok */ }
          return;
        }
        case 'c': case 'x': {
          // Copy / Cut
          if (!selection) return;
          e.preventDefault();
          const [s, ed] = orderSelection(selection);
          try {
            const r = parseResult(doc.copySelection(s.secIdx, s.paraIdx, s.charOffset, ed.paraIdx, ed.charOffset));
            const text = r?.text as string || '';
            if (text) navigator.clipboard.writeText(text).catch(() => {});
            if (e.key === 'x') {
              pushSnapshot();
              const newPos = deleteSelection();
              if (newPos) {
                setCursor(newPos);
                rerender();
                updateCursorDisplay(newPos);
              }
            }
          } catch { /* ok */ }
          return;
        }
        case 'v': {
          // Paste
          e.preventDefault();
          navigator.clipboard.readText().then(text => {
            if (text) insertTextAt(text);
          }).catch(() => {});
          return;
        }
      }
      return;
    }

    /* ── Enter ── */
    if (e.key === 'Enter') {
      e.preventDefault();
      pushSnapshot();
      if (selection) {
        const newPos = deleteSelection();
        if (newPos) {
          try {
            doc.splitParagraph(newPos.secIdx, newPos.paraIdx, newPos.charOffset);
            const np = { secIdx: newPos.secIdx, paraIdx: newPos.paraIdx + 1, charOffset: 0 };
            setCursor(np);
            rerender();
            updateCursorDisplay(np);
          } catch { /* */ }
        }
        return;
      }
      try {
        doc.splitParagraph(secIdx, paraIdx, charOffset);
        const np = { secIdx, paraIdx: paraIdx + 1, charOffset: 0 };
        setCursor(np);
        rerender();
        updateCursorDisplay(np);
      } catch { /* */ }
      return;
    }

    /* ── Backspace ── */
    if (e.key === 'Backspace') {
      e.preventDefault();
      pushSnapshot();
      if (selection) {
        const newPos = deleteSelection();
        if (newPos) { setCursor(newPos); rerender(); updateCursorDisplay(newPos); }
        return;
      }
      try {
        if (charOffset > 0) {
          const r = parseResult(doc.deleteText(secIdx, paraIdx, charOffset - 1, 1));
          const newOff = r?.charOffset !== undefined ? (r.charOffset as number) : charOffset - 1;
          const np = { secIdx, paraIdx, charOffset: newOff };
          setCursor(np); rerender(); updateCursorDisplay(np);
        } else if (paraIdx > 0) {
          const prevLen = doc.getParagraphLength(secIdx, paraIdx - 1);
          doc.mergeParagraph(secIdx, paraIdx);
          const np = { secIdx, paraIdx: paraIdx - 1, charOffset: prevLen };
          setCursor(np); rerender(); updateCursorDisplay(np);
        }
      } catch { /* */ }
      return;
    }

    /* ── Delete ── */
    if (e.key === 'Delete') {
      e.preventDefault();
      pushSnapshot();
      if (selection) {
        const newPos = deleteSelection();
        if (newPos) { setCursor(newPos); rerender(); updateCursorDisplay(newPos); }
        return;
      }
      try {
        const paraLen = doc.getParagraphLength(secIdx, paraIdx);
        if (charOffset < paraLen) {
          doc.deleteText(secIdx, paraIdx, charOffset, 1);
          rerender(); updateCursorDisplay(cursor);
        } else {
          const paraCount = doc.getParagraphCount(secIdx);
          if (paraIdx < paraCount - 1) {
            doc.mergeParagraph(secIdx, paraIdx + 1);
            rerender(); updateCursorDisplay(cursor);
          }
        }
      } catch { /* */ }
      return;
    }

    /* ── Arrow keys ── */
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      let np: CursorPos;
      if (charOffset > 0) {
        np = { secIdx, paraIdx, charOffset: charOffset - 1 };
      } else if (paraIdx > 0) {
        const prevLen = doc.getParagraphLength(secIdx, paraIdx - 1);
        np = { secIdx, paraIdx: paraIdx - 1, charOffset: prevLen };
      } else return;

      if (e.shiftKey) {
        const sel: SelectionRange = { start: selection?.start ?? cursor, end: np };
        setSelection(compareCursor(sel.start, sel.end) === 0 ? null : sel);
        updateSelectionRects(compareCursor(sel.start, sel.end) === 0 ? null : sel);
      } else {
        setSelection(null); setSelectionRects([]);
      }
      setCursor(np); updateCursorDisplay(np);
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      let np: CursorPos;
      try {
        const paraLen = doc.getParagraphLength(secIdx, paraIdx);
        if (charOffset < paraLen) {
          np = { secIdx, paraIdx, charOffset: charOffset + 1 };
        } else {
          const paraCount = doc.getParagraphCount(secIdx);
          if (paraIdx < paraCount - 1) {
            np = { secIdx, paraIdx: paraIdx + 1, charOffset: 0 };
          } else return;
        }
      } catch { return; }

      if (e.shiftKey) {
        const sel: SelectionRange = { start: selection?.start ?? cursor, end: np };
        setSelection(compareCursor(sel.start, sel.end) === 0 ? null : sel);
        updateSelectionRects(compareCursor(sel.start, sel.end) === 0 ? null : sel);
      } else {
        setSelection(null); setSelectionRects([]);
      }
      setCursor(np); updateCursorDisplay(np);
      return;
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      try {
        // Use getLineInfo for line-based navigation
        const li = parseResult(doc.getLineInfo(secIdx, paraIdx, charOffset));
        if (li) {
          const lineIdx = li.lineIndex as number;
          const lineCount = li.lineCount as number;

          if (e.key === 'ArrowUp') {
            if (lineIdx > 0) {
              // Move to previous line in same paragraph
              const prevLineStart = li.charStart as number;
              // Get the char offset of the line above
              const target = Math.max(0, prevLineStart - 1);
              const np = { secIdx, paraIdx, charOffset: target };
              setCursor(np); updateCursorDisplay(np);
            } else if (paraIdx > 0) {
              // Move to last line of previous paragraph
              const prevLen = doc.getParagraphLength(secIdx, paraIdx - 1);
              const targetOff = Math.min(charOffset, prevLen);
              const np = { secIdx, paraIdx: paraIdx - 1, charOffset: targetOff };
              setCursor(np); updateCursorDisplay(np);
            }
          } else {
            if (lineIdx < lineCount - 1) {
              // Move to next line in same paragraph
              const lineEnd = li.charEnd as number;
              const np = { secIdx, paraIdx, charOffset: Math.min(lineEnd + 1 + (charOffset - (li.charStart as number)), doc.getParagraphLength(secIdx, paraIdx)) };
              setCursor(np); updateCursorDisplay(np);
            } else {
              // Move to first line of next paragraph
              const paraCount = doc.getParagraphCount(secIdx);
              if (paraIdx < paraCount - 1) {
                const nextLen = doc.getParagraphLength(secIdx, paraIdx + 1);
                const targetOff = Math.min(charOffset, nextLen);
                const np = { secIdx, paraIdx: paraIdx + 1, charOffset: targetOff };
                setCursor(np); updateCursorDisplay(np);
              }
            }
          }
        } else {
          // Fallback: simple paragraph-based navigation
          const delta = e.key === 'ArrowUp' ? -1 : 1;
          const newPara = paraIdx + delta;
          const paraCount = doc.getParagraphCount(secIdx);
          if (newPara >= 0 && newPara < paraCount) {
            const newLen = doc.getParagraphLength(secIdx, newPara);
            const np = { secIdx, paraIdx: newPara, charOffset: Math.min(charOffset, newLen) };
            setCursor(np); updateCursorDisplay(np);
          }
        }
        if (!e.shiftKey) { setSelection(null); setSelectionRects([]); }
      } catch { /* */ }
      return;
    }

    /* ── Home / End ── */
    if (e.key === 'Home') {
      e.preventDefault();
      try {
        const li = parseResult(doc.getLineInfo(secIdx, paraIdx, charOffset));
        const np = { secIdx, paraIdx, charOffset: li ? (li.charStart as number) : 0 };
        if (!e.shiftKey) { setSelection(null); setSelectionRects([]); }
        setCursor(np); updateCursorDisplay(np);
      } catch { /* */ }
      return;
    }

    if (e.key === 'End') {
      e.preventDefault();
      try {
        const li = parseResult(doc.getLineInfo(secIdx, paraIdx, charOffset));
        const paraLen = doc.getParagraphLength(secIdx, paraIdx);
        const np = { secIdx, paraIdx, charOffset: li ? Math.min(li.charEnd as number, paraLen) : paraLen };
        if (!e.shiftKey) { setSelection(null); setSelectionRects([]); }
        setCursor(np); updateCursorDisplay(np);
      } catch { /* */ }
      return;
    }

    /* ── Tab ── */
    if (e.key === 'Tab') {
      e.preventDefault();
      insertTextAt('\t');
      return;
    }

    // Let single-character keys pass through to the hidden textarea for IME handling
    // Don't prevent default for printable keys - they go through the textarea's input event
  }, [cursor, selection, pushSnapshot, deleteSelection, rerender, updateCursorDisplay,
      updateSelectionRects, insertTextAt]);

  /* eslint-disable react-hooks/exhaustive-deps -- stable refs below */
  /* ── Formatting ── */
  const applyFormatToSelection = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      if (selection) {
        const [s, e] = orderSelection(selection);
        doc.applyCharFormat(s.secIdx, s.paraIdx, s.charOffset, e.charOffset, JSON.stringify(props));
        // If selection spans multiple paragraphs, apply to each
        if (s.paraIdx !== e.paraIdx) {
          doc.beginBatch();
          // First para
          const firstLen = doc.getParagraphLength(s.secIdx, s.paraIdx);
          doc.applyCharFormat(s.secIdx, s.paraIdx, s.charOffset, firstLen, JSON.stringify(props));
          // Middle paras
          for (let p = s.paraIdx + 1; p < e.paraIdx; p++) {
            const pLen = doc.getParagraphLength(s.secIdx, p);
            doc.applyCharFormat(s.secIdx, p, 0, pLen, JSON.stringify(props));
          }
          // Last para
          doc.applyCharFormat(s.secIdx, e.paraIdx, 0, e.charOffset, JSON.stringify(props));
          doc.endBatch();
        }
      } else {
        // No selection: apply to next char typed (toggle state) – just apply to single char at cursor
        const paraLen = doc.getParagraphLength(cursor.secIdx, cursor.paraIdx);
        if (cursor.charOffset < paraLen) {
          doc.applyCharFormat(cursor.secIdx, cursor.paraIdx, cursor.charOffset, cursor.charOffset + 1, JSON.stringify(props));
        }
      }
      rerender();
    } catch (err) {
      console.error('applyCharFormat error:', err);
    }
  }, [cursor, selection, pushSnapshot, rerender]);

  const handleBold = useCallback(() => applyFormatToSelection({ bold: true }), [applyFormatToSelection]);
  const handleItalic = useCallback(() => applyFormatToSelection({ italic: true }), [applyFormatToSelection]);
  const handleUnderline = useCallback(() => applyFormatToSelection({ underline: true }), [applyFormatToSelection]);

  const applyAlign = useCallback((align: string) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      doc.applyParaFormat(cursor.secIdx, cursor.paraIdx, JSON.stringify({ alignment: align }));
      rerender();
    } catch { /* */ }
  }, [cursor, pushSnapshot, rerender]);

  /* ── Table insert ── */
  const handleInsertTable = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      doc.createTable(cursor.secIdx, cursor.paraIdx, cursor.charOffset, tableRows, tableCols);
      rerender();
      setShowTableDialog(false);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [cursor, tableRows, tableCols, pushSnapshot, rerender]);

  /* ── Undo / Redo ── */
  const handleUndo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || undoStackRef.current.length === 0) return;
    const snapId = undoStackRef.current.pop()!;
    const redoId = doc.saveSnapshot();
    redoStackRef.current.push(redoId);
    doc.restoreSnapshot(snapId);
    rerender();
    setCanUndo(undoStackRef.current.length > 0);
    setCanRedo(true);
  }, [rerender]);

  const handleRedo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || redoStackRef.current.length === 0) return;
    const snapId = redoStackRef.current.pop()!;
    const undoId = doc.saveSnapshot();
    undoStackRef.current.push(undoId);
    doc.restoreSnapshot(snapId);
    rerender();
    setCanUndo(true);
    setCanRedo(redoStackRef.current.length > 0);
  }, [rerender]);
  /* eslint-enable react-hooks/exhaustive-deps */

  /* ── Export ── */
  const handleExport = useCallback(async (format: 'hwp' | 'hwpx') => {
    const doc = docRef.current;
    if (!doc) return;
    setShowExport(false);
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
    } catch (err) {
      setError(`내보내기 실패: ${(err as Error).message}`);
    }
  }, [fileName]);

  /* ── Page navigation ── */
  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= svgPages.length) setCurrentPage(val - 1);
  };

  /* ── Cleanup ── */
  useEffect(() => {
    return () => {
      if (docRef.current) { try { docRef.current.free(); } catch { /* ok */ } docRef.current = null; }
    };
  }, []);

  /* ── Compute cursor/selection overlay positions ── */
  const vb = svgPages[currentPage] ? parseViewBox(svgPages[currentPage]) : null;
  const cursorStyle = (cursorPx && vb && cursorPx.pageIndex === currentPage) ? {
    left: `${((cursorPx.x - vb.x) / vb.w) * 100}%`,
    top: `${((cursorPx.y - vb.y) / vb.h) * 100}%`,
    height: `${(cursorPx.height / vb.h) * 100}%`,
  } : null;

  const currentSelRects = vb ? selectionRects.filter(r => r.pageIndex === currentPage) : [];

  const hasDoc = svgPages.length > 0;

  return (
    <>
      <SEOHead title={t('site.hwpEditor.title')} path="/hwp-editor" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.hwpEditor.title')}</h2>
          <p>{t('site.hwpEditor.subtitle')}</p>
        </div>
      </section>

      <section className="section hwp-editor-page">
        <div className="container">
          {wasmError && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
              {t('site.hwpEditor.wasmError')}: {wasmError}
            </div>
          )}
          {error && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>
              {error}
              <button onClick={() => setError('')} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '1.1rem' }}>&times;</button>
            </div>
          )}

          {wasmLoading && (
            <div className="hwp-editor-loading">
              <div className="loading-spinner"></div>
              <p>{t('site.hwpEditor.wasmLoading')}</p>
            </div>
          )}

          {/* ── Empty state ── */}
          {!wasmLoading && !hasDoc && (
            <div
              className={`hwp-editor-container ${dragOver ? 'drag-over' : ''}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
            >
              <div className="hwp-editor-empty">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                <h3>{t('site.hwpEditor.dropOrNew')}</h3>
                <p>{t('site.hwpEditor.clickToEdit')}</p>
                <div className="hwp-editor-empty-actions">
                  <button className="hwp-empty-btn primary" onClick={handleNewDoc} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                    {t('site.hwpEditor.newDoc')}
                  </button>
                  <button className="hwp-empty-btn" onClick={triggerFileOpen} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                    {t('site.hwpEditor.openFile')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Editor ── */}
          {hasDoc && (
            <>
              {/* Toolbar */}
              <div className="hwp-editor-toolbar">
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleNewDoc} title={t('site.hwpEditor.newDoc')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={triggerFileOpen} title={t('site.hwpEditor.openFile')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleBold} disabled={!cursor} title={`${t('site.hwpEditor.bold')} (Ctrl+B)`}><strong>B</strong></button>
                  <button className="hwp-toolbar-btn" onClick={handleItalic} disabled={!cursor} title={`${t('site.hwpEditor.italic')} (Ctrl+I)`}><em>I</em></button>
                  <button className="hwp-toolbar-btn" onClick={handleUnderline} disabled={!cursor} title={`${t('site.hwpEditor.underline')} (Ctrl+U)`}><span style={{ textDecoration: 'underline' }}>U</span></button>
                </div>

                <div className="hwp-toolbar-divider" />

                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('left')} disabled={!cursor} title={t('site.hwpEditor.alignLeft')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="17" y1="14" x2="3" y2="14" /><line x1="21" y1="18" x2="3" y2="18" /></svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('center')} disabled={!cursor} title={t('site.hwpEditor.alignCenter')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="10" x2="6" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="18" y1="14" x2="6" y2="14" /><line x1="21" y1="18" x2="3" y2="18" /></svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('right')} disabled={!cursor} title={t('site.hwpEditor.alignRight')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" /></svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                <div className="hwp-toolbar-group" style={{ position: 'relative' }} ref={tableDialogRef}>
                  <button className="hwp-toolbar-btn" onClick={() => setShowTableDialog(!showTableDialog)} disabled={!cursor} title={t('site.hwpEditor.insertTable')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="3" y1="15" x2="21" y2="15" /><line x1="9" y1="3" x2="9" y2="21" /><line x1="15" y1="3" x2="15" y2="21" /></svg>
                  </button>
                  {showTableDialog && (
                    <div className="hwp-table-dialog">
                      <div className="hwp-table-dialog-row">
                        <div><label>Rows</label><input type="number" min={1} max={20} value={tableRows} onChange={e => setTableRows(Number(e.target.value))} /></div>
                        <div><label>Cols</label><input type="number" min={1} max={10} value={tableCols} onChange={e => setTableCols(Number(e.target.value))} /></div>
                      </div>
                      <button onClick={handleInsertTable}>{t('site.hwpEditor.insertTable')}</button>
                    </div>
                  )}
                </div>

                <div className="hwp-toolbar-divider" />

                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleUndo} disabled={!canUndo} title={`${t('site.hwpEditor.undo')} (Ctrl+Z)`}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={handleRedo} disabled={!canRedo} title={`${t('site.hwpEditor.redo')} (Ctrl+Y)`}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" /></svg>
                  </button>
                </div>

                <div className="hwp-toolbar-spacer" />

                {fileName && (
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginRight: 8 }}>
                    {fileName}{dirty ? ' *' : ''}
                  </span>
                )}

                <div className="hwp-export-wrapper" ref={exportRef}>
                  <button className="hwp-toolbar-btn" onClick={() => setShowExport(!showExport)}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                    <span>{t('site.hwpEditor.export')} &#9662;</span>
                  </button>
                  {showExport && (
                    <div className="hwp-export-dropdown">
                      <button onClick={() => handleExport('hwp')}>{t('site.hwpEditor.exportHwp')}</button>
                      <button onClick={() => handleExport('hwpx')}>{t('site.hwpEditor.exportHwpx')}</button>
                    </div>
                  )}
                </div>
              </div>

              {/* Canvas */}
              <div className="hwp-editor-container">
                <div
                  className="hwp-canvas-wrapper"
                  onClick={() => inputRef.current?.focus()}
                >
                  <div
                    className="hwp-canvas"
                    ref={canvasRef}
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                    onClick={handleCanvasClick}
                  >
                    {/* SVG page */}
                    <div dangerouslySetInnerHTML={{ __html: svgPages[currentPage] || '' }} />

                    {/* Selection overlay */}
                    {vb && currentSelRects.map((r, i) => (
                      <div
                        key={i}
                        className="hwp-selection-overlay"
                        style={{
                          left: `${((r.x - vb.x) / vb.w) * 100}%`,
                          top: `${((r.y - vb.y) / vb.h) * 100}%`,
                          width: `${(r.width / vb.w) * 100}%`,
                          height: `${(r.height / vb.h) * 100}%`,
                        }}
                      />
                    ))}

                    {/* Cursor overlay */}
                    {cursorStyle && (
                      <div className="hwp-cursor" style={cursorStyle} />
                    )}
                  </div>

                  {/* Hidden textarea for IME-safe keyboard input */}
                  <textarea
                    ref={inputRef}
                    className="hwp-hidden-input"
                    onKeyDown={handleKeyDown}
                    onCompositionStart={handleCompositionStart}
                    onCompositionEnd={handleCompositionEnd}
                    onInput={handleInput}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    aria-label="HWP Editor input"
                  />
                </div>

                {/* Page bar */}
                <div className="hwp-page-bar">
                  <div className="hwp-page-nav">
                    <button className="hwp-page-btn" onClick={() => setCurrentPage(p => Math.max(0, p - 1))} disabled={currentPage === 0}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
                    </button>
                    <span className="hwp-page-info">
                      <input type="number" className="hwp-page-input" value={currentPage + 1} onChange={handlePageInput} min={1} max={svgPages.length} />
                      <span>/ {svgPages.length}</span>
                    </span>
                    <button className="hwp-page-btn" onClick={() => setCurrentPage(p => Math.min(svgPages.length - 1, p + 1))} disabled={currentPage === svgPages.length - 1}>
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </button>
                  </div>
                  <div className="hwp-zoom-controls">
                    <button className="hwp-zoom-btn" onClick={() => setZoom(z => Math.max(50, z - 25))}>-</button>
                    <span className="hwp-zoom-label">{zoom}%</span>
                    <button className="hwp-zoom-btn" onClick={() => setZoom(z => Math.min(200, z + 25))}>+</button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default HwpEditor;
