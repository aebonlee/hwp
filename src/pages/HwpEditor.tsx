import React, {
  useEffect,
  useCallback,
  type ChangeEvent,
  type DragEvent,
} from 'react';
import type { HwpDocument as RhwpDoc } from '@rhwp/core';
import { useRhwp } from '../hooks/useRhwp';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

// ── Extracted components ────────────────────────────────────────────────────
import EditorToolbar from '../components/hwp/EditorToolbar';
import EditorCanvas from '../components/hwp/EditorCanvas';
import FindReplaceBar from '../components/hwp/FindReplaceBar';
import ContextMenu from '../components/hwp/ContextMenu';
import EditorSidebar from '../components/hwp/EditorSidebar';

// ── Dialogs ─────────────────────────────────────────────────────────────────
import TablePropsDialog from '../components/hwp/dialogs/TablePropsDialog';
import CellPropsDialog from '../components/hwp/dialogs/CellPropsDialog';
import ShapeDialog from '../components/hwp/dialogs/ShapeDialog';
import PicturePropsDialog from '../components/hwp/dialogs/PicturePropsDialog';
import StyleDialog from '../components/hwp/dialogs/StyleDialog';
import HeaderFooterDialog from '../components/hwp/dialogs/HeaderFooterDialog';
import FieldDialog from '../components/hwp/dialogs/FieldDialog';
import BookmarkDialog from '../components/hwp/dialogs/BookmarkDialog';
import ColumnDialog from '../components/hwp/dialogs/ColumnDialog';
import FormDialog from '../components/hwp/dialogs/FormDialog';
import NumberingDialog from '../components/hwp/dialogs/NumberingDialog';
import EquationDialog from '../components/hwp/dialogs/EquationDialog';
import PageSetupDialog from '../components/hwp/dialogs/PageSetupDialog';

// ── Hooks ───────────────────────────────────────────────────────────────────
import {
  useEditorState,
  type CursorPos,
  type ContextMenuState,
  type StyleItem,
} from '../components/hwp/hooks/useEditorState';
import { useKeyboard } from '../components/hwp/hooks/useKeyboard';
import { useClipboard } from '../components/hwp/hooks/useClipboard';
import { useCellEditing } from '../components/hwp/hooks/useCellEditing';
import { useNavigation } from '../components/hwp/hooks/useNavigation';

// ── CSS ─────────────────────────────────────────────────────────────────────
import '../styles/hwp-dialogs.css';

// ─────────────────────────────────────────────────────────────────────────────
// Module-level helpers
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

const MAX_UNDO = 100;

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────

const HwpEditor: React.FC = () => {
  // ── External hooks ──────────────────────────────────────────────────────
  const { ready, loading: wasmLoading, error: wasmError } = useRhwp();
  const { t } = useLanguage();

  // ── Centralized state ───────────────────────────────────────────────────
  const st = useEditorState();
  const {
    docRef, cursorRef, selAnchorRef, cellCtxRef, hfCtxRef, fnCtxRef,
    pageCanvasRefs, overlayCanvasRefs, renderScaleRef, pageSizesRef,
    undoStack, redoStack, dragStartPos,
  } = st;

  // ═══════════════════════════════════════════════════════════════════════════
  // CORE CALLBACKS
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Hit-test -> CursorPos ─────────────────────────────────────────────
  const hitTestToPos = useCallback(
    (e: React.MouseEvent, pageIdx: number): CursorPos | null => {
      const doc = docRef.current;
      if (!doc) return null;
      const canvas = pageCanvasRefs.current[pageIdx];
      if (!canvas) return null;
      const scale = renderScaleRef.current;
      const rect = canvas.getBoundingClientRect();
      const pageX = ((e.clientX - rect.left) / rect.width) * canvas.width / scale;
      const pageY = ((e.clientY - rect.top) / rect.height) * canvas.height / scale;
      try {
        const hj = doc.hitTest(pageIdx, pageX, pageY);
        const h = parseResult(hj);
        if (!h) return null;
        return {
          secIdx: (h.sectionIndex as number) ?? 0,
          paraIdx: ((h.paragraphIndex ?? h.paraIndex) as number) ?? 0,
          charOffset: (h.charOffset as number) ?? 0,
        };
      } catch {
        return null;
      }
    },
    [docRef, pageCanvasRefs, renderScaleRef],
  );

  // ── Rerender ──────────────────────────────────────────────────────────
  const rerender = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const count = doc.pageCount();
      st.setPageCount(count);
      st.setRenderVer((v) => v + 1);
    } catch (e) {
      st.setEditorError(String(e));
    }
  }, [docRef, st]);

  const rerenderPage = useCallback(
    (pageIdx: number) => {
      const doc = docRef.current;
      if (!doc) return;
      const canvas = pageCanvasRefs.current[pageIdx];
      if (!canvas) return;
      const scale = renderScaleRef.current;
      try {
        doc.renderPageToCanvas(pageIdx, canvas, scale);
        const cssW = canvas.width / scale;
        const cssH = canvas.height / scale;
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        pageSizesRef.current[pageIdx] = { w: cssW, h: cssH };
        const overlay = overlayCanvasRefs.current[pageIdx];
        if (overlay) {
          overlay.width = canvas.width;
          overlay.height = canvas.height;
          overlay.style.width = cssW + 'px';
          overlay.style.height = cssH + 'px';
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, pageCanvasRefs, overlayCanvasRefs, renderScaleRef, pageSizesRef],
  );

  const rerenderCurrentPage = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const count = doc.pageCount();
      if (count !== st.pageCount) {
        st.setPageCount(count);
        st.setRenderVer((v) => v + 1);
      } else {
        const cur = st.currentPage;
        rerenderPage(cur);
        if (cur > 0) rerenderPage(cur - 1);
        if (cur < count - 1) rerenderPage(cur + 1);
        st.setRenderVer((v) => v + 1);
      }
    } catch (e) {
      st.setEditorError(String(e));
    }
  }, [docRef, st, rerenderPage]);

  // ── Cursor display ────────────────────────────────────────────────────
  const updateCursorDisplay = useCallback(
    (pos: CursorPos) => {
      const doc = docRef.current;
      if (!doc) {
        st.setCursorRect(null);
        return;
      }
      try {
        const r = parseResult(
          doc.getCursorRect(pos.secIdx, pos.paraIdx, pos.charOffset),
        );
        if (r && r.x !== undefined) {
          st.setCursorRect({
            pageIndex: (r.pageIndex as number) ?? 0,
            x: r.x as number,
            y: r.y as number,
            height: r.height as number,
          });
          st.setCurrentPage((r.pageIndex as number) ?? 0);
        } else {
          st.setCursorRect(null);
        }
      } catch {
        st.setCursorRect(null);
      }
    },
    [docRef, st],
  );

  // ── Char/Para props update ────────────────────────────────────────────
  const updateCharProps = useCallback(
    (pos: CursorPos) => {
      const doc = docRef.current;
      if (!doc) return;
      try {
        const cj = doc.getCharPropertiesAt(pos.secIdx, pos.paraIdx, pos.charOffset);
        const cp = parseResult(cj);
        if (cp) {
          const ff = (cp.fontFamily as string) || '\uB9D1\uC740 \uACE0\uB515';
          const fs = (cp.fontSize as number) || 1000;
          st.setFontInput(ff);
          st.setSizeInput(String(Math.round(fs / 100)));
          st.setCharProps({
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
      } catch {
        /* ignore */
      }
      try {
        const pj = doc.getParaPropertiesAt(pos.secIdx, pos.paraIdx);
        const pp = parseResult(pj);
        if (pp) {
          st.setParaProps({
            alignment: (pp.alignment as string) || 'justify',
            lineSpacing: (pp.lineSpacing as number) || 160,
            marginLeft: (pp.marginLeft as number) || 0,
            marginRight: (pp.marginRight as number) || 0,
            indent: (pp.indent as number) || 0,
          });
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, st],
  );

  // ── Selection rects ───────────────────────────────────────────────────
  const updateSelectionRects = useCallback(
    (anchor: CursorPos, end: CursorPos) => {
      const doc = docRef.current;
      if (!doc) {
        st.setSelRects([]);
        return;
      }
      let sp = anchor.paraIdx;
      let so = anchor.charOffset;
      let ep = end.paraIdx;
      let eo = end.charOffset;
      if (sp > ep || (sp === ep && so > eo)) {
        [sp, ep] = [ep, sp];
        [so, eo] = [eo, so];
      }
      try {
        const rj = doc.getSelectionRects(anchor.secIdx, sp, so, ep, eo);
        const rects = JSON.parse(rj);
        st.setSelRects(Array.isArray(rects) ? rects : []);
      } catch {
        st.setSelRects([]);
      }
    },
    [docRef, st],
  );

  // ── Move cursor ───────────────────────────────────────────────────────
  const moveCursor = useCallback(
    (pos: CursorPos, clearSel = true) => {
      st.setCursor(pos);
      if (clearSel) {
        selAnchorRef.current = null;
        st.setHasSelection(false);
        st.setSelRects([]);
      } else if (selAnchorRef.current) {
        updateSelectionRects(selAnchorRef.current, pos);
      }
      updateCursorDisplay(pos);
      updateCharProps(pos);
      st.setDirty(true);
      st.hiddenInputRef.current?.focus();
    },
    [st, selAnchorRef, updateCursorDisplay, updateCharProps, updateSelectionRects],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // UNDO / REDO
  // ═══════════════════════════════════════════════════════════════════════════

  const saveSnapshot = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const id = doc.saveSnapshot();
      undoStack.current.push(id);
      if (undoStack.current.length > MAX_UNDO) {
        const old = undoStack.current.shift();
        if (old !== undefined) {
          try {
            doc.discardSnapshot(old);
          } catch {
            /* ignore */
          }
        }
      }
      redoStack.current.forEach((sid) => {
        try {
          doc.discardSnapshot(sid);
        } catch {
          /* ignore */
        }
      });
      redoStack.current = [];
      st.setCanUndo(true);
      st.setCanRedo(false);
    } catch {
      /* ignore */
    }
  }, [docRef, undoStack, redoStack, st]);

  const handleUndo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || undoStack.current.length === 0) return;
    const id = undoStack.current.pop()!;
    try {
      const redoId = doc.saveSnapshot();
      redoStack.current.push(redoId);
      doc.restoreSnapshot(id);
      try {
        doc.discardSnapshot(id);
      } catch {
        /* ignore */
      }
    } catch {
      /* ignore */
    }
    rerender();
    st.setCanUndo(undoStack.current.length > 0);
    st.setCanRedo(true);
    const pos = cursorRef.current;
    updateCursorDisplay(pos);
    updateCharProps(pos);
  }, [docRef, undoStack, redoStack, st, rerender, cursorRef, updateCursorDisplay, updateCharProps]);

  const handleRedo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || redoStack.current.length === 0) return;
    const id = redoStack.current.pop()!;
    try {
      const undoId = doc.saveSnapshot();
      undoStack.current.push(undoId);
      doc.restoreSnapshot(id);
      try {
        doc.discardSnapshot(id);
      } catch {
        /* ignore */
      }
    } catch {
      /* ignore */
    }
    rerender();
    st.setCanUndo(true);
    st.setCanRedo(redoStack.current.length > 0);
    const pos = cursorRef.current;
    updateCursorDisplay(pos);
    updateCharProps(pos);
  }, [docRef, undoStack, redoStack, st, rerender, cursorRef, updateCursorDisplay, updateCharProps]);

  // ═══════════════════════════════════════════════════════════════════════════
  // DOCUMENT LIFECYCLE
  // ═══════════════════════════════════════════════════════════════════════════

  const initDoc = useCallback(
    (doc: RhwpDoc, name: string) => {
      try {
        doc.convertToEditable();
      } catch {
        /* ignore */
      }
      if (docRef.current && docRef.current !== doc) {
        try {
          docRef.current.free();
        } catch {
          /* ignore */
        }
      }
      docRef.current = doc;
      undoStack.current = [];
      redoStack.current = [];
      st.setCanUndo(false);
      st.setCanRedo(false);
      st.setFileName(name);
      st.setDirty(false);
      st.setCursor({ secIdx: 0, paraIdx: 0, charOffset: 0 });
      st.setCursorRect(null);
      selAnchorRef.current = null;
      st.setHasSelection(false);
      st.setSelRects([]);
      st.setCurrentPage(0);
      st.setEditorError('');
      pageSizesRef.current = {};
      st.setEditMode('body');
      cellCtxRef.current = null;
      hfCtxRef.current = null;
      fnCtxRef.current = null;
      st.setContextMenu(null);
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
          st.setCursor(pos);
          setTimeout(() => updateCursorDisplay(pos), 80);
        } else {
          const initPos: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };
          st.setCursor(initPos);
          setTimeout(() => updateCursorDisplay(initPos), 80);
        }
      } catch {
        const initPos: CursorPos = { secIdx: 0, paraIdx: 0, charOffset: 0 };
        st.setCursor(initPos);
        setTimeout(() => updateCursorDisplay(initPos), 80);
      }
    },
    [docRef, undoStack, redoStack, selAnchorRef, cellCtxRef, hfCtxRef, fnCtxRef, pageSizesRef, st, rerender, updateCursorDisplay],
  );

  const handleNewDoc = useCallback(async () => {
    if (!ready) return;
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const doc = HwpDocument.createEmpty();
      parseResult(doc.createBlankDocument());
      initDoc(doc, '\uC0C8 \uBB38\uC11C.hwp');
    } catch (e) {
      st.setEditorError(`\uC0C8 \uBB38\uC11C \uC0DD\uC131 \uC2E4\uD328: ${(e as Error).message}`);
    }
  }, [ready, initDoc, st]);

  const openFile = useCallback(
    async (file: File) => {
      if (!ready) return;
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (ext !== 'hwp' && ext !== 'hwpx') {
        st.setEditorError('.hwp \uB610\uB294 .hwpx \uD30C\uC77C\uB9CC \uC9C0\uC6D0\uD569\uB2C8\uB2E4.');
        return;
      }
      try {
        const { HwpDocument } = await import('@rhwp/core');
        const bytes = new Uint8Array(await file.arrayBuffer());
        const doc = new HwpDocument(bytes);
        initDoc(doc, file.name);
      } catch (e) {
        st.setEditorError(`\uD30C\uC77C \uC5F4\uAE30 \uC2E4\uD328: ${(e as Error).message}`);
      }
    },
    [ready, initDoc, st],
  );

  const triggerFileOpen = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files?.[0]) openFile(input.files[0]);
    };
    input.click();
  }, [openFile]);

  // ── Drag-drop ─────────────────────────────────────────────────────────
  const handleDragOver = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    st.setIsDragging(true);
  }, [st]);

  const handleDragLeave = useCallback(() => st.setIsDragging(false), [st]);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      st.setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) openFile(file);
    },
    [st, openFile],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // TEXT OPERATIONS (body mode)
  // ═══════════════════════════════════════════════════════════════════════════

  const deleteSelection = useCallback((): CursorPos | null => {
    const doc = docRef.current;
    const anchor = selAnchorRef.current;
    const cur = cursorRef.current;
    if (!doc || !anchor) return null;
    let sp = anchor.paraIdx;
    let so = anchor.charOffset;
    let ep = cur.paraIdx;
    let eo = cur.charOffset;
    if (sp > ep || (sp === ep && so > eo)) {
      [sp, ep] = [ep, sp];
      [so, eo] = [eo, so];
    }
    try {
      const rj = doc.deleteRange(cur.secIdx, sp, so, ep, eo);
      const r = parseResult(rj);
      selAnchorRef.current = null;
      st.setHasSelection(false);
      st.setSelRects([]);
      if (r?.ok) {
        return {
          secIdx: cur.secIdx,
          paraIdx: r.paraIdx as number,
          charOffset: r.charOffset as number,
        };
      }
      return { ...anchor };
    } catch {
      selAnchorRef.current = null;
      st.setHasSelection(false);
      st.setSelRects([]);
      return { ...anchor };
    }
  }, [docRef, selAnchorRef, cursorRef, st]);

  const insertText = useCallback(
    (text: string) => {
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
        rerenderCurrentPage();
        moveCursor(newPos);
      } catch (e) {
        console.error('insertText failed:', e);
      }
    },
    [docRef, cursorRef, selAnchorRef, saveSnapshot, deleteSelection, moveCursor, rerenderCurrentPage],
  );

  const deleteCharBefore = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    if (selAnchorRef.current) {
      saveSnapshot();
      const np = deleteSelection();
      if (np) moveCursor(np);
      rerenderCurrentPage();
      return;
    }
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
        const rj = doc.mergeParagraph(pos.secIdx, pos.paraIdx);
        const r = parseResult(rj);
        moveCursor({
          secIdx: pos.secIdx,
          paraIdx: (r?.paraIdx as number) ?? pos.paraIdx - 1,
          charOffset: (r?.charOffset as number) ?? prevLen,
        });
      }
    } catch (e) {
      console.error('deleteCharBefore failed:', e);
    }
    rerenderCurrentPage();
  }, [docRef, cursorRef, selAnchorRef, deleteSelection, saveSnapshot, moveCursor, rerenderCurrentPage]);

  const deleteCharAfter = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    if (selAnchorRef.current) {
      saveSnapshot();
      const np = deleteSelection();
      if (np) moveCursor(np);
      rerenderCurrentPage();
      return;
    }
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
      if (pos.charOffset < pLen) {
        doc.deleteText(pos.secIdx, pos.paraIdx, pos.charOffset, 1);
        moveCursor({ ...pos });
      } else {
        const pCount = doc.getParagraphCount(pos.secIdx);
        if (pos.paraIdx < pCount - 1) {
          const rj = doc.mergeParagraph(pos.secIdx, pos.paraIdx + 1);
          const r = parseResult(rj);
          moveCursor({
            secIdx: pos.secIdx,
            paraIdx: (r?.paraIdx as number) ?? pos.paraIdx,
            charOffset: (r?.charOffset as number) ?? pos.charOffset,
          });
        }
      }
    } catch (e) {
      console.error('deleteCharAfter failed:', e);
    }
    rerenderCurrentPage();
  }, [docRef, cursorRef, selAnchorRef, deleteSelection, saveSnapshot, moveCursor, rerenderCurrentPage]);

  // ═══════════════════════════════════════════════════════════════════════════
  // FORMATTING (body mode)
  // ═══════════════════════════════════════════════════════════════════════════

  const applyCharFormat = useCallback(
    (props: Record<string, unknown>) => {
      const doc = docRef.current;
      if (!doc) return;
      const pos = cursorRef.current;
      saveSnapshot();
      if (selAnchorRef.current) {
        const anchor = selAnchorRef.current;
        let sp = anchor.paraIdx;
        let so = anchor.charOffset;
        let ep = pos.paraIdx;
        let eo = pos.charOffset;
        if (sp > ep || (sp === ep && so > eo)) {
          [sp, ep] = [ep, sp];
          [so, eo] = [eo, so];
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
          try {
            doc.endBatch();
          } catch {
            /* ignore */
          }
        }
      } else {
        try {
          const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
          let startO = pos.charOffset;
          let endO = pos.charOffset + 1;
          if (pos.charOffset >= pLen && pos.charOffset > 0) {
            startO = pos.charOffset - 1;
            endO = pos.charOffset;
          }
          if (startO < endO) {
            doc.applyCharFormat(pos.secIdx, pos.paraIdx, startO, endO, JSON.stringify(props));
          }
        } catch {
          /* ignore */
        }
      }
      rerenderCurrentPage();
      updateCharProps(pos);
    },
    [docRef, cursorRef, selAnchorRef, saveSnapshot, rerenderCurrentPage, updateCharProps],
  );

  const applyParaFormat = useCallback(
    (props: Record<string, unknown>) => {
      const doc = docRef.current;
      if (!doc) return;
      const pos = cursorRef.current;
      saveSnapshot();
      try {
        doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify(props));
      } catch {
        /* ignore */
      }
      rerender();
      updateCharProps(pos);
    },
    [docRef, cursorRef, saveSnapshot, rerender, updateCharProps],
  );

  const toggleBold = useCallback(
    () => applyCharFormat({ bold: !st.charProps.bold }),
    [applyCharFormat, st.charProps.bold],
  );
  const toggleItalic = useCallback(
    () => applyCharFormat({ italic: !st.charProps.italic }),
    [applyCharFormat, st.charProps.italic],
  );
  const toggleUnderline = useCallback(
    () => applyCharFormat({ underline: !st.charProps.underline }),
    [applyCharFormat, st.charProps.underline],
  );
  const toggleStrikethrough = useCallback(
    () => applyCharFormat({ strikethrough: !st.charProps.strikethrough }),
    [applyCharFormat, st.charProps.strikethrough],
  );

  const applyFont = useCallback(
    (fontName: string) => {
      applyCharFormat({ fontFamily: fontName });
      st.setFontInput(fontName);
      st.setFontOpen(false);
    },
    [applyCharFormat, st],
  );

  const applySize = useCallback(
    (pt: number) => {
      applyCharFormat({ fontSize: Math.round(pt * 100) });
      st.setSizeInput(String(pt));
      st.setSizeOpen(false);
    },
    [applyCharFormat, st],
  );

  const applyAlignment = useCallback(
    (alignment: string) => applyParaFormat({ alignment }),
    [applyParaFormat],
  );

  const applyLineSpacing = useCallback(
    (spacing: number) => {
      applyParaFormat({ lineSpacing: spacing });
      st.setSpacingOpen(false);
    },
    [applyParaFormat, st],
  );

  const applyIndentChange = useCallback(
    (delta: number) => {
      const newMargin = Math.max(0, st.paraProps.marginLeft + delta * 800);
      applyParaFormat({ marginLeft: newMargin });
    },
    [applyParaFormat, st.paraProps.marginLeft],
  );

  const applyBulletList = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const bulletId = doc.ensureDefaultBullet('\u25CF');
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numberingId: bulletId, numberingLevel: 0 }));
    } catch {
      /* ignore */
    }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const applyNumberedList = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const numbId = doc.ensureDefaultNumbering();
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numberingId: numbId, numberingLevel: 0 }));
    } catch {
      /* ignore */
    }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const applyTextColor = useCallback(
    (hex: string) => {
      applyCharFormat({ textColor: hexToHwpColor(hex) });
      st.setColorOpen(false);
    },
    [applyCharFormat, st],
  );

  const applyHighlight = useCallback(
    (hex: string) => {
      applyCharFormat({ highlight: hexToHwpColor(hex) });
      st.setHighlightOpen(false);
    },
    [applyCharFormat, st],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // INSERT OPERATIONS
  // ═══════════════════════════════════════════════════════════════════════════

  const handleInsertTable = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const rj = doc.createTable(pos.secIdx, pos.paraIdx, pos.charOffset, st.tableRows, st.tableCols);
      const r = parseResult(rj);
      if (r?.ok) {
        moveCursor({ ...pos, paraIdx: (r.paraIdx as number) ?? pos.paraIdx, charOffset: 0 });
      }
    } catch (e) {
      st.setEditorError((e as Error).message);
    }
    rerender();
    st.setTableDialogOpen(false);
  }, [docRef, cursorRef, saveSnapshot, moveCursor, rerender, st]);

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
          const ext = file.name.split('.').pop()?.toLowerCase() || 'png';
          try {
            doc.insertPicture(pos.secIdx, pos.paraIdx, pos.charOffset, bytes, hwpW, hwpH, natW, natH, ext, file.name);
            moveCursor({ ...pos, charOffset: pos.charOffset + 1 });
          } catch (e2) {
            st.setEditorError((e2 as Error).message);
          }
          rerender();
        };
        img.src = url;
      } catch (e) {
        st.setEditorError((e as Error).message);
      }
    };
    input.click();
  }, [docRef, cursorRef, saveSnapshot, moveCursor, rerender, st]);

  const handlePageBreak = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.insertPageBreak(pos.secIdx, pos.paraIdx, pos.charOffset);
    } catch {
      /* ignore */
    }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleInsertShape = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.createShapeControl(
        JSON.stringify({
          sectionIdx: pos.secIdx,
          paraIdx: pos.paraIdx,
          charOffset: pos.charOffset,
          width: 14400,
          height: 7200,
        }),
      );
    } catch {
      /* ignore */
    }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // CELL EDITING
  // ═══════════════════════════════════════════════════════════════════════════

  const enterCellMode = useCallback(
    (secIdx: number, paraIdx: number, controlIdx: number, cellIdx: number) => {
      st.setEditMode('cell');
      cellCtxRef.current = {
        secIdx,
        parentParaIdx: paraIdx,
        controlIdx,
        cellIdx,
        cellParaIdx: 0,
        charOffset: 0,
      };
      try {
        const doc = docRef.current;
        if (doc) {
          const cr = parseResult(
            doc.getCursorRectInCell(secIdx, paraIdx, controlIdx, cellIdx, 0, 0),
          );
          if (cr && cr.x !== undefined)
            st.setCursorRect({
              pageIndex: (cr.pageIndex as number) ?? 0,
              x: cr.x as number,
              y: cr.y as number,
              height: cr.height as number,
            });
        }
      } catch {
        /* ignore */
      }
    },
    [st, cellCtxRef, docRef],
  );

  // ── Wire useCellEditing hook ──────────────────────────────────────────
  const cellEditing = useCellEditing({
    getDoc: () => docRef.current,
    getCellCtx: () => cellCtxRef.current,
    updateCellCtx: (updates) => {
      const ctx = cellCtxRef.current;
      if (ctx) Object.assign(ctx, updates);
    },
    saveSnapshot,
    rerender,
    rerenderCurrentPage,
    setCursorRect: st.setCursorRect,
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // HEADER / FOOTER EDITING
  // ═══════════════════════════════════════════════════════════════════════════

  const enterHeaderFooterMode = useCallback(
    (secIdx: number, isHeader: boolean) => {
      const doc = docRef.current;
      if (!doc) return;
      try {
        doc.createHeaderFooter(secIdx, isHeader, 0);
      } catch {
        /* may already exist */
      }
      st.setEditMode(isHeader ? 'header' : 'footer');
      hfCtxRef.current = { secIdx, isHeader, applyTo: 0, hfParaIdx: 0, charOffset: 0 };
      try {
        const cr = parseResult(
          doc.getCursorRectInHeaderFooter(secIdx, isHeader, 0, 0, 0, 0),
        );
        if (cr && cr.x !== undefined)
          st.setCursorRect({
            pageIndex: (cr.pageIndex as number) ?? 0,
            x: cr.x as number,
            y: cr.y as number,
            height: cr.height as number,
          });
      } catch {
        /* ignore */
      }
    },
    [docRef, st, hfCtxRef],
  );

  const insertTextInHf = useCallback(
    (text: string) => {
      const doc = docRef.current;
      const ctx = hfCtxRef.current;
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        const rj = doc.insertTextInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset, text);
        const r = parseResult(rj);
        ctx.charOffset = (r?.charOffset as number) ?? ctx.charOffset + text.length;
        rerender();
        try {
          const cr = parseResult(
            doc.getCursorRectInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset, 0),
          );
          if (cr && cr.x !== undefined)
            st.setCursorRect({
              pageIndex: (cr.pageIndex as number) ?? 0,
              x: cr.x as number,
              y: cr.y as number,
              height: cr.height as number,
            });
        } catch {
          /* ignore */
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, hfCtxRef, saveSnapshot, rerender, st],
  );

  const deleteTextInHf = useCallback(
    (forward: boolean) => {
      const doc = docRef.current;
      const ctx = hfCtxRef.current;
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        if (!forward && ctx.charOffset > 0) {
          doc.deleteTextInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset - 1, 1);
          ctx.charOffset--;
        } else if (!forward && ctx.charOffset === 0 && ctx.hfParaIdx > 0) {
          const rj = doc.mergeParagraphInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx);
          const r = parseResult(rj);
          ctx.hfParaIdx = (r?.paraIdx as number) ?? ctx.hfParaIdx - 1;
          ctx.charOffset = (r?.charOffset as number) ?? 0;
        } else if (forward) {
          doc.deleteTextInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset, 1);
        }
        rerenderCurrentPage();
        try {
          const cr = parseResult(
            doc.getCursorRectInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset, 0),
          );
          if (cr && cr.x !== undefined)
            st.setCursorRect({
              pageIndex: (cr.pageIndex as number) ?? 0,
              x: cr.x as number,
              y: cr.y as number,
              height: cr.height as number,
            });
        } catch {
          /* ignore */
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, hfCtxRef, saveSnapshot, rerenderCurrentPage, st],
  );

  const splitParagraphInHf = useCallback(() => {
    const doc = docRef.current;
    const ctx = hfCtxRef.current;
    if (!doc || !ctx) return;
    saveSnapshot();
    try {
      const rj = doc.splitParagraphInHeaderFooter(ctx.secIdx, ctx.isHeader, ctx.applyTo, ctx.hfParaIdx, ctx.charOffset);
      const r = parseResult(rj);
      ctx.hfParaIdx = (r?.paraIdx as number) ?? ctx.hfParaIdx + 1;
      ctx.charOffset = 0;
      rerenderCurrentPage();
    } catch {
      /* ignore */
    }
  }, [docRef, hfCtxRef, saveSnapshot, rerenderCurrentPage]);

  // ═══════════════════════════════════════════════════════════════════════════
  // FOOTNOTE EDITING
  // ═══════════════════════════════════════════════════════════════════════════

  const handleInsertFootnote = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      const rj = doc.insertFootnote(pos.secIdx, pos.paraIdx, pos.charOffset);
      const r = parseResult(rj);
      if (r?.ok) {
        st.setEditMode('footnote');
        fnCtxRef.current = {
          secIdx: pos.secIdx,
          paraIdx: pos.paraIdx,
          controlIdx: (r.controlIdx as number) ?? 0,
          fnParaIdx: 0,
          charOffset: 0,
        };
      }
    } catch {
      /* ignore */
    }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender, st, fnCtxRef]);

  const insertTextInFn = useCallback(
    (text: string) => {
      const doc = docRef.current;
      const ctx = fnCtxRef.current;
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        const rj = doc.insertTextInFootnote(ctx.secIdx, ctx.paraIdx, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset, text);
        const r = parseResult(rj);
        ctx.charOffset = (r?.charOffset as number) ?? ctx.charOffset + text.length;
        rerender();
        try {
          const cr = parseResult(
            doc.getCursorRectInFootnote(0, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset),
          );
          if (cr && cr.x !== undefined)
            st.setCursorRect({
              pageIndex: (cr.pageIndex as number) ?? 0,
              x: cr.x as number,
              y: cr.y as number,
              height: cr.height as number,
            });
        } catch {
          /* ignore */
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, fnCtxRef, saveSnapshot, rerender, st],
  );

  const deleteTextInFn = useCallback(
    (forward: boolean) => {
      const doc = docRef.current;
      const ctx = fnCtxRef.current;
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        if (!forward && ctx.charOffset > 0) {
          doc.deleteTextInFootnote(ctx.secIdx, ctx.paraIdx, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset - 1, 1);
          ctx.charOffset--;
        } else if (forward) {
          doc.deleteTextInFootnote(ctx.secIdx, ctx.paraIdx, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset, 1);
        }
        rerenderCurrentPage();
        try {
          const cr = parseResult(
            doc.getCursorRectInFootnote(0, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset),
          );
          if (cr && cr.x !== undefined)
            st.setCursorRect({
              pageIndex: (cr.pageIndex as number) ?? 0,
              x: cr.x as number,
              y: cr.y as number,
              height: cr.height as number,
            });
        } catch {
          /* ignore */
        }
      } catch {
        /* ignore */
      }
    },
    [docRef, fnCtxRef, saveSnapshot, rerenderCurrentPage, st],
  );

  const splitParagraphInFn = useCallback(() => {
    const doc = docRef.current;
    const ctx = fnCtxRef.current;
    if (!doc || !ctx) return;
    saveSnapshot();
    try {
      const rj = doc.splitParagraphInFootnote(ctx.secIdx, ctx.paraIdx, ctx.controlIdx, ctx.fnParaIdx, ctx.charOffset);
      const r = parseResult(rj);
      ctx.fnParaIdx = (r?.paraIdx as number) ?? ctx.fnParaIdx + 1;
      ctx.charOffset = 0;
      rerenderCurrentPage();
    } catch {
      /* ignore */
    }
  }, [docRef, fnCtxRef, saveSnapshot, rerenderCurrentPage]);

  // ═══════════════════════════════════════════════════════════════════════════
  // TABLE STRUCTURE OPERATIONS (from context menu)
  // ════════════════════════════════════════════════════════════════════��══════

  const handleInsertTableRow = useCallback(
    (after: boolean) => {
      const info = st.contextMenu?.tableInfo;
      const doc = docRef.current;
      if (!doc || !info) return;
      saveSnapshot();
      try {
        doc.insertTableRow(info.secIdx, info.paraIdx, info.controlIdx, info.row, after);
      } catch {
        /* ignore */
      }
      rerender();
      st.setContextMenu(null);
    },
    [st, docRef, saveSnapshot, rerender],
  );

  const handleDeleteTableRow = useCallback(() => {
    const info = st.contextMenu?.tableInfo;
    const doc = docRef.current;
    if (!doc || !info) return;
    saveSnapshot();
    try {
      doc.deleteTableRow(info.secIdx, info.paraIdx, info.controlIdx, info.row);
    } catch {
      /* ignore */
    }
    rerender();
    st.setContextMenu(null);
  }, [st, docRef, saveSnapshot, rerender]);

  const handleInsertTableColumn = useCallback(
    (after: boolean) => {
      const info = st.contextMenu?.tableInfo;
      const doc = docRef.current;
      if (!doc || !info) return;
      saveSnapshot();
      try {
        doc.insertTableColumn(info.secIdx, info.paraIdx, info.controlIdx, info.col, after);
      } catch {
        /* ignore */
      }
      rerender();
      st.setContextMenu(null);
    },
    [st, docRef, saveSnapshot, rerender],
  );

  const handleDeleteTableColumn = useCallback(() => {
    const info = st.contextMenu?.tableInfo;
    const doc = docRef.current;
    if (!doc || !info) return;
    saveSnapshot();
    try {
      doc.deleteTableColumn(info.secIdx, info.paraIdx, info.controlIdx, info.col);
    } catch {
      /* ignore */
    }
    rerender();
    st.setContextMenu(null);
  }, [st, docRef, saveSnapshot, rerender]);

  const handleMergeTableCells = useCallback(() => {
    const info = st.contextMenu?.tableInfo;
    const doc = docRef.current;
    if (!doc || !info) return;
    saveSnapshot();
    try {
      doc.mergeTableCells(info.secIdx, info.paraIdx, info.controlIdx, info.row, info.col, info.row, info.col + 1);
    } catch {
      /* ignore */
    }
    rerender();
    st.setContextMenu(null);
  }, [st, docRef, saveSnapshot, rerender]);

  const handleSplitTableCell = useCallback(() => {
    const info = st.contextMenu?.tableInfo;
    const doc = docRef.current;
    if (!doc || !info) return;
    saveSnapshot();
    try {
      doc.splitTableCell(info.secIdx, info.paraIdx, info.controlIdx, info.row, info.col);
    } catch {
      /* ignore */
    }
    rerender();
    st.setContextMenu(null);
  }, [st, docRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // CLIPBOARD (wire useClipboard hook)
  // ═══════════════════════════════════════════════════════════════════════════

  const clipboard = useClipboard({
    getDoc: () => docRef.current,
    getCursor: () => cursorRef.current,
    getSelAnchor: () => selAnchorRef.current,
    getCellCtx: () => cellCtxRef.current,
    editMode: st.editMode,
    saveSnapshot,
    deleteSelection,
    setCursor: st.setCursor,
    moveCursor,
    rerender,
    rerenderCurrentPage,
    insertText,
    setHasSelection: st.setHasSelection,
    setSelRects: st.setSelRects,
    setSelAnchor: (pos) => {
      selAnchorRef.current = pos;
    },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // NAVIGATION (wire useNavigation hook)
  // ═══════════════════════════════════════════════════════════════════════════

  const navigation = useNavigation({
    getDoc: () => docRef.current,
    getCursor: () => cursorRef.current,
    moveCursor,
    editMode: st.editMode,
    setEditMode: st.setEditMode,
    enterCellMode,
    rerender,
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // KEYBOARD (wire useKeyboard hook)
  // ═══════════════════════════════════════════════════════════════════════════

  const keyboard = useKeyboard({
    editMode: st.editMode,
    getDoc: () => docRef.current,
    getCursor: () => cursorRef.current,
    getCursorRect: () => st.cursorRect,
    setCursor: st.setCursor,
    setCursorRect: st.setCursorRect,
    moveCursor,
    updateCursorDisplay,
    updateCharProps,
    updateSelectionRects,
    getSelAnchor: () => selAnchorRef.current,
    setSelAnchor: (pos) => {
      selAnchorRef.current = pos;
    },
    setHasSelection: st.setHasSelection,
    saveSnapshot,
    handleUndo,
    handleRedo,
    deleteSelection,
    insertText,
    deleteCharBefore,
    deleteCharAfter,
    toggleBold,
    toggleItalic,
    toggleUnderline,
    insertTextInCell: cellEditing.insertTextInCell,
    deleteTextInCell: cellEditing.deleteTextInCell,
    splitParagraphInCell: cellEditing.splitParagraphInCell,
    applyCharFormatInCell: cellEditing.applyCharFormatInCell,
    getCellCtx: () => cellCtxRef.current,
    enterCellMode,
    insertTextInHf,
    deleteTextInHf,
    splitParagraphInHf,
    insertTextInFn,
    deleteTextInFn,
    splitParagraphInFn,
    setEditMode: st.setEditMode,
    clearCellCtx: () => {
      cellCtxRef.current = null;
    },
    clearHfCtx: () => {
      hfCtxRef.current = null;
    },
    clearFnCtx: () => {
      fnCtxRef.current = null;
    },
    rerenderCurrentPage,
    rerender,
    handleHtmlPaste: clipboard.handlePasteHtml,
    handleCopy: clipboard.handleCopy,
    handleCut: clipboard.handleCut,
    setFindBarOpen: st.setFindBarOpen,
    closeAllDropdowns: () => {
      st.setFindBarOpen(false);
      st.setContextMenu(null);
    },
    findNextControl: navigation.findNextControl,
    findPrevControl: navigation.findPrevControl,
    navigateNextEditable: navigation.navigateNextEditable,
    composingRef: st.composingRef,
    editModeRef: st.editModeRef,
    hiddenInputRef: st.hiddenInputRef,
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // MOUSE HANDLERS
  // ═══════════════════════════════════════════════════════════════════════════

  const handleCanvasMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => {
      if (e.button !== 0) return;
      const pos = hitTestToPos(e, pageIdx);
      if (!pos) return;
      st.setIsDragSelecting(true);
      dragStartPos.current = { ...pos };
      selAnchorRef.current = { ...pos };
      st.setCursor(pos);
      updateCursorDisplay(pos);
      updateCharProps(pos);
      st.hiddenInputRef.current?.focus();
    },
    [hitTestToPos, st, dragStartPos, selAnchorRef, updateCursorDisplay, updateCharProps],
  );

  const handleCanvasMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => {
      if (!st.isDragSelecting) return;
      const pos = hitTestToPos(e, pageIdx);
      if (!pos || !selAnchorRef.current) return;
      st.setCursor(pos);
      updateSelectionRects(selAnchorRef.current, pos);
      st.setHasSelection(true);
      updateCursorDisplay(pos);
    },
    [st, hitTestToPos, selAnchorRef, updateSelectionRects, updateCursorDisplay],
  );

  const handleCanvasMouseUp = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => {
      if (!st.isDragSelecting) return;
      st.setIsDragSelecting(false);
      const endPos = hitTestToPos(e, pageIdx);
      const start = dragStartPos.current;

      if (
        start &&
        endPos &&
        start.secIdx === endPos.secIdx &&
        start.paraIdx === endPos.paraIdx &&
        start.charOffset === endPos.charOffset
      ) {
        // Single click (no drag)
        if (e.shiftKey && selAnchorRef.current) {
          st.setCursor(endPos);
          updateSelectionRects(selAnchorRef.current, endPos);
          st.setHasSelection(true);
          updateCursorDisplay(endPos);
          updateCharProps(endPos);
        } else {
          moveCursor(endPos, true);
        }
      } else if (endPos) {
        // Drag completed: keep selection
        st.setCursor(endPos);
        updateCursorDisplay(endPos);
        updateCharProps(endPos);
      }
    },
    [st, hitTestToPos, dragStartPos, selAnchorRef, moveCursor, updateSelectionRects, updateCursorDisplay, updateCharProps],
  );

  // ── Context menu ──────────────────────────────────────────────────────
  const handleContextMenu = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => {
      e.preventDefault();
      const doc = docRef.current;
      if (!doc) return;
      const pos = hitTestToPos(e, pageIdx);
      if (!pos) return;
      let menuType: ContextMenuState['type'] = 'body';
      let tableInfo: ContextMenuState['tableInfo'] = undefined;
      try {
        const cpj = doc.getControlTextPositions(pos.secIdx, pos.paraIdx);
        const controls = JSON.parse(cpj) as Array<{
          type: string;
          controlIdx: number;
          charOffset: number;
        }>;
        const tableCtrl = controls?.find(
          (c) => c.type === 'table' && c.charOffset <= pos.charOffset,
        );
        if (tableCtrl) {
          menuType = 'table';
          try {
            const bboxJ = doc.getTableCellBboxes(pos.secIdx, pos.paraIdx, tableCtrl.controlIdx);
            const bboxes = JSON.parse(bboxJ) as Array<{
              cellIdx: number;
              row: number;
              col: number;
              x: number;
              y: number;
              w: number;
              h: number;
            }>;
            const canvas = pageCanvasRefs.current[pageIdx];
            if (canvas) {
              const scale = renderScaleRef.current;
              const rect = canvas.getBoundingClientRect();
              const px = ((e.clientX - rect.left) / rect.width) * canvas.width / scale;
              const py = ((e.clientY - rect.top) / rect.height) * canvas.height / scale;
              const cell = bboxes.find(
                (b) => px >= b.x && px <= b.x + b.w && py >= b.y && py <= b.y + b.h,
              );
              if (cell) {
                tableInfo = {
                  secIdx: pos.secIdx,
                  paraIdx: pos.paraIdx,
                  controlIdx: tableCtrl.controlIdx,
                  row: cell.row,
                  col: cell.col,
                  cellIdx: cell.cellIdx,
                };
              }
            }
          } catch {
            /* ignore */
          }
        }
      } catch {
        /* ignore */
      }
      st.setContextMenu({ x: e.clientX, y: e.clientY, type: menuType, tableInfo });
    },
    [docRef, hitTestToPos, st, pageCanvasRefs, renderScaleRef],
  );

  // ── Double-click (word selection / header-footer enter) ───────────────
  const handleDoubleClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => {
      const doc = docRef.current;
      if (!doc || st.editMode !== 'body') return;
      const canvas = pageCanvasRefs.current[pageIdx];
      if (!canvas) return;
      const scale = renderScaleRef.current;
      const rect = canvas.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * canvas.width / scale;
      const py = ((e.clientY - rect.top) / rect.height) * canvas.height / scale;

      // Check header/footer hit
      try {
        const hfResult = parseResult(doc.hitTestHeaderFooter(pageIdx, px, py));
        if (hfResult?.hit) {
          enterHeaderFooterMode(
            (hfResult.sectionIndex as number) ?? 0,
            !!hfResult.isHeader,
          );
          return;
        }
      } catch {
        /* ignore */
      }

      // Body double-click: word selection
      const pos = cursorRef.current;
      if (pos) {
        try {
          const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
          if (pLen > 0) {
            const textJson = doc.getTextRange(pos.secIdx, pos.paraIdx, 0, pLen);
            const textResult = parseResult(textJson);
            const text = (textResult?.text as string) ?? '';
            if (text) {
              const off = Math.min(pos.charOffset, text.length);
              const isWordChar = (c: string) => /[\w\u3131-\uD79D]/.test(c);
              let wStart = off;
              let wEnd = off;
              while (wStart > 0 && isWordChar(text[wStart - 1])) wStart--;
              while (wEnd < text.length && isWordChar(text[wEnd])) wEnd++;
              if (wStart < wEnd) {
                const startPos = { ...pos, charOffset: wStart };
                const endPos = { ...pos, charOffset: wEnd };
                selAnchorRef.current = startPos;
                st.setCursor(endPos);
                updateSelectionRects(startPos, endPos);
                st.setHasSelection(true);
                updateCursorDisplay(endPos);
              }
            }
          }
        } catch {
          /* ignore */
        }
      }
    },
    [docRef, st, cursorRef, selAnchorRef, pageCanvasRefs, renderScaleRef, enterHeaderFooterMode, updateSelectionRects, updateCursorDisplay],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // FIND / REPLACE
  // ═══════════════════════════════════════════════════════════════════════════

  const handleFindNext = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !st.findQuery) return;
    const pos = cursorRef.current;
    try {
      const rj = doc.searchText(st.findQuery, pos.secIdx, pos.paraIdx, pos.charOffset, true, st.caseSensitive);
      const r = parseResult(rj);
      if (r?.found) {
        const np: CursorPos = {
          secIdx: (r.sectionIndex as number) ?? pos.secIdx,
          paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
          charOffset: (r.charOffset as number) ?? 0,
        };
        moveCursor(np);
        st.setFindInfo('');
      } else {
        st.setFindInfo(t('site.hwpEditor.noResults'));
      }
    } catch {
      /* ignore */
    }
  }, [docRef, st, cursorRef, moveCursor, t]);

  const handleReplaceOne = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !st.findQuery) return;
    saveSnapshot();
    try {
      const rj = doc.replaceOne(st.findQuery, st.replaceQuery, st.caseSensitive);
      const r = parseResult(rj);
      if (r?.ok) {
        rerender();
        st.setFindInfo(t('site.hwpEditor.replaced'));
      } else {
        st.setFindInfo(t('site.hwpEditor.noResults'));
      }
    } catch {
      /* ignore */
    }
  }, [docRef, st, saveSnapshot, rerender, t]);

  const handleReplaceAll = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !st.findQuery) return;
    saveSnapshot();
    try {
      const rj = doc.replaceAll(st.findQuery, st.replaceQuery, st.caseSensitive);
      const r = parseResult(rj);
      rerender();
      st.setFindInfo(`${t('site.hwpEditor.replaced')} ${r?.count ?? 0}`);
    } catch {
      /* ignore */
    }
  }, [docRef, st, saveSnapshot, rerender, t]);

  // ═══════════════════════════════════════════════════════════════════════════
  // EXPORT
  // ═══════════════════════════════════════════════════════════════════════════

  const handleExport = useCallback(
    (format: 'hwp' | 'hwpx') => {
      const doc = docRef.current;
      if (!doc) return;
      try {
        const bytes = format === 'hwp' ? doc.exportHwp() : doc.exportHwpx();
        const blob = new Blob([bytes], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const baseName = st.fileName ? st.fileName.replace(/\.[^.]+$/, '') : 'document';
        a.download = `${baseName}.${format}`;
        a.click();
        URL.revokeObjectURL(url);
      } catch (e) {
        st.setEditorError(`\uB0B4\uBCF4\uB0B4\uAE30 \uC2E4\uD328: ${(e as Error).message}`);
      }
      st.setExportOpen(false);
    },
    [docRef, st],
  );

  // ══════════════════════════════════════════════════════════════════���════════
  // PAGE SETUP
  // ═══════════════════════════════════════════════════════════════════════════

  const loadPageDef = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const rj = doc.getPageDef(0);
      const r = parseResult(rj);
      if (r)
        st.setPageDef({
          width: (r.width as number) ?? 59528,
          height: (r.height as number) ?? 84188,
          marginTop: (r.marginTop as number) ?? 5669,
          marginBottom: (r.marginBottom as number) ?? 4252,
          marginLeft: (r.marginLeft as number) ?? 4252,
          marginRight: (r.marginRight as number) ?? 4252,
          landscape: !!r.landscape,
        });
    } catch {
      /* ignore */
    }
  }, [docRef, st]);

  const applyPageDef = useCallback(
    (def: Record<string, unknown>) => {
      const doc = docRef.current;
      if (!doc) return;
      saveSnapshot();
      try {
        doc.setPageDef(0, JSON.stringify(def));
      } catch {
        /* ignore */
      }
      rerender();
      st.setPageDefOpen(false);
    },
    [docRef, saveSnapshot, rerender, st],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // STYLES
  // ═══════════════════════════════════════════════════════════════════════════

  const loadStyles = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const rj = doc.getStyleList();
      const list = JSON.parse(rj) as StyleItem[];
      st.setStyleList(Array.isArray(list) ? list : []);
    } catch {
      st.setStyleList([]);
    }
  }, [docRef, st]);

  const applyStyle = useCallback(
    (styleId: number) => {
      const doc = docRef.current;
      if (!doc) return;
      const pos = cursorRef.current;
      saveSnapshot();
      try {
        doc.applyStyle(pos.secIdx, pos.paraIdx, styleId);
      } catch {
        /* ignore */
      }
      rerender();
      updateCharProps(pos);
      st.setStyleOpen(false);
    },
    [docRef, cursorRef, saveSnapshot, rerender, updateCharProps, st],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // BOOKMARKS
  // ═══════════════════════════════════════════════════════════════════════════

  const loadBookmarks = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const rj = doc.getBookmarks();
      const list = JSON.parse(rj) as Array<{
        name: string;
        secIdx: number;
        paraIdx: number;
        charOffset: number;
        controlIdx?: number;
      }>;
      st.setBookmarkList(Array.isArray(list) ? list : []);
    } catch {
      st.setBookmarkList([]);
    }
  }, [docRef, st]);

  const handleAddBookmark = useCallback(
    (name: string) => {
      const doc = docRef.current;
      if (!doc || !name.trim()) return;
      const pos = cursorRef.current;
      try {
        doc.addBookmark(pos.secIdx, pos.paraIdx, pos.charOffset, name.trim());
      } catch {
        /* ignore */
      }
      loadBookmarks();
    },
    [docRef, cursorRef, loadBookmarks],
  );

  const handleDeleteBookmark = useCallback(
    (bm: { secIdx: number; paraIdx: number; controlIdx?: number }) => {
      const doc = docRef.current;
      if (!doc) return;
      try {
        doc.deleteBookmark(bm.secIdx, bm.paraIdx, bm.controlIdx ?? 0);
      } catch {
        /* ignore */
      }
      loadBookmarks();
    },
    [docRef, loadBookmarks],
  );

  const handleGotoBookmark = useCallback(
    (bm: { secIdx: number; paraIdx: number; charOffset: number }) => {
      moveCursor({ secIdx: bm.secIdx, paraIdx: bm.paraIdx, charOffset: bm.charOffset });
      st.setBookmarkDialogOpen(false);
    },
    [moveCursor, st],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // DISPLAY TOGGLES
  // ═══════════════════════════════════════════════════════════════════════════

  const toggleControlCodes = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const newVal = !st.showControlCodes;
    try {
      doc.setShowControlCodes(newVal);
    } catch {
      /* ignore */
    }
    st.setShowControlCodes(newVal);
    rerender();
  }, [docRef, st, rerender]);

  const toggleParaMarks = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const newVal = !st.showParaMarks;
    try {
      doc.setShowParagraphMarks(newVal);
    } catch {
      /* ignore */
    }
    st.setShowParaMarks(newVal);
    rerender();
  }, [docRef, st, rerender]);

  const toggleTransparentBorders = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const newVal = !st.showTransparentBorders;
    try {
      doc.setShowTransparentBorders(newVal);
    } catch {
      /* ignore */
    }
    st.setShowTransparentBorders(newVal);
    rerender();
  }, [docRef, st, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PAGE NAVIGATION
  // ═══════════════════════════════════════════════════════════════════════════

  const handlePageInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      st.setPageInputVal(e.target.value);
    },
    [st],
  );

  const handlePageInputCommit = useCallback(() => {
    const n = parseInt(st.pageInputVal, 10);
    if (!isNaN(n) && n >= 1 && n <= st.pageCount) {
      st.setCurrentPage(n - 1);
    } else {
      st.setPageInputVal(String(st.currentPage + 1));
    }
  }, [st]);

  const handleZoomIn = useCallback(() => st.setZoom((z) => Math.min(z + 10, 200)), [st]);
  const handleZoomOut = useCallback(() => st.setZoom((z) => Math.max(z - 10, 30)), [st]);

  // ═══════════════════════════════════════════════════════════════════════════
  // EFFECTS
  // ═══════════════════════════════════════════════════════════════════════════

  // ── Page input sync ───────────────────────────────────────────────────
  useEffect(() => {
    st.setPageInputVal(String(st.currentPage + 1));
  }, [st.currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Canvas rendering effect ───────────────────────────────────────────
  useEffect(() => {
    const doc = docRef.current;
    if (!doc || st.pageCount === 0) return;
    const scale = renderScaleRef.current;

    for (let i = 0; i < st.pageCount; i++) {
      const canvas = pageCanvasRefs.current[i];
      if (!canvas) continue;
      try {
        doc.renderPageToCanvas(i, canvas, scale);
        const cssW = canvas.width / scale;
        const cssH = canvas.height / scale;
        canvas.style.width = cssW + 'px';
        canvas.style.height = cssH + 'px';
        pageSizesRef.current[i] = { w: cssW, h: cssH };

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
  }, [st.renderVer, st.pageCount]);

  // ── Overlay drawing effect (cursor + selection) ───────────────────────
  useEffect(() => {
    const scale = renderScaleRef.current;
    for (let i = 0; i < st.pageCount; i++) {
      const overlay = overlayCanvasRefs.current[i];
      if (!overlay) continue;
      const ctx = overlay.getContext('2d');
      if (!ctx) continue;
      ctx.clearRect(0, 0, overlay.width, overlay.height);

      // Selection rects for this page
      const pageRects = st.selRects.filter((r) => r.pageIndex === i);
      if (pageRects.length > 0) {
        ctx.fillStyle = 'rgba(0, 70, 200, 0.25)';
        for (const sr of pageRects) {
          ctx.fillRect(sr.x * scale, sr.y * scale, sr.width * scale, sr.height * scale);
        }
      }

      // Cursor line for this page
      if (st.cursorRect && st.cursorRect.pageIndex === i && st.cursorVisible) {
        ctx.strokeStyle = '#0046C8';
        ctx.lineWidth = Math.max(1.5, 2 * scale);
        ctx.beginPath();
        ctx.moveTo(st.cursorRect.x * scale, st.cursorRect.y * scale);
        ctx.lineTo(st.cursorRect.x * scale, (st.cursorRect.y + st.cursorRect.height) * scale);
        ctx.stroke();
      }
    }
  }, [st.pageCount, st.cursorRect, st.selRects, st.cursorVisible, st.renderVer]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Cursor blink ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!st.cursorRect) {
      st.setCursorVisible(true);
      return;
    }
    st.setCursorVisible(true);
    const interval = setInterval(() => st.setCursorVisible((v) => !v), 530);
    return () => clearInterval(interval);
  }, [st.cursorRect]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Global mouseup for drag selection ─────────────────────────────────
  useEffect(() => {
    if (!st.isDragSelecting) return;
    const handleGlobalMouseUp = () => st.setIsDragSelecting(false);
    document.addEventListener('mouseup', handleGlobalMouseUp);
    return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
  }, [st.isDragSelecting]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Context menu outside-click close ──────────────────────────────────
  useEffect(() => {
    if (!st.contextMenu) return;
    const handler = (e: globalThis.MouseEvent) => {
      const target = e.target as Node;
      if (!st.contextMenuRef.current?.contains(target)) {
        st.setContextMenu(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [st.contextMenu]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Cleanup on unmount ────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (docRef.current) {
        try {
          docRef.current.free();
        } catch {
          /* ignore */
        }
        docRef.current = null;
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ═══════════════════════════════════════════════════════════════════════════
  // DERIVED VALUES
  // ═══════════════════════════════════════════════════════════════════════════

  const hasDoc = st.pageCount > 0;
  const textColorHex = hwpColorToHex(st.charProps.textColor);
  const highlightHex = hwpColorToHex(st.charProps.highlight);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 3: TABLE EXTENSION
  // ═══════════════════════════════════════════════════════════════════════════

  const loadTableProps = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return null;
    const pos = cursorRef.current;
    try {
      const rj = doc.getTableProperties(pos.secIdx, pos.paraIdx, 0);
      return parseResult(rj);
    } catch { return null; }
  }, [docRef, cursorRef]);

  const handleApplyTableProps = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.setTableProperties(pos.secIdx, pos.paraIdx, 0, JSON.stringify(props)); } catch { /* */ }
    rerender();
    st.setTablePropsOpen(false);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleTableFormula = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !st.contextMenu?.tableInfo) return;
    const ti = st.contextMenu.tableInfo;
    const formula = prompt('\uC218\uC2DD \uC785\uB825 (\uC608: SUM(A1:A5))');
    if (!formula) { st.setContextMenu(null); return; }
    saveSnapshot();
    try { doc.evaluateTableFormula(ti.secIdx, ti.paraIdx, ti.controlIdx, ti.row, ti.col, formula, true); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, st, saveSnapshot, rerender]);

  const handleDeleteTable = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !st.contextMenu?.tableInfo) return;
    const ti = st.contextMenu.tableInfo;
    saveSnapshot();
    try { doc.deleteTableControl(ti.secIdx, ti.paraIdx, ti.controlIdx); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, st, saveSnapshot, rerender]);

  const loadCellProps = useCallback(() => {
    const ctx = cellCtxRef.current;
    const doc = docRef.current;
    if (!doc || !ctx) return null;
    try {
      const rj = doc.getCellProperties(ctx.secIdx, ctx.parentParaIdx, ctx.controlIdx, ctx.cellIdx);
      return parseResult(rj);
    } catch { return null; }
  }, [docRef, cellCtxRef]);

  const handleApplyCellProps = useCallback((props: Record<string, unknown>) => {
    const ctx = cellCtxRef.current;
    const doc = docRef.current;
    if (!doc || !ctx) return;
    saveSnapshot();
    try { doc.setCellProperties(ctx.secIdx, ctx.parentParaIdx, ctx.controlIdx, ctx.cellIdx, JSON.stringify(props)); } catch { /* */ }
    rerender();
    st.setCellPropsOpen(false);
  }, [docRef, cellCtxRef, saveSnapshot, rerender, st]);

  const handleUpdateSidebarCellProps = useCallback((props: Record<string, unknown>) => {
    const ctx = cellCtxRef.current;
    const doc = docRef.current;
    if (!doc || !ctx) return;
    saveSnapshot();
    try { doc.setCellProperties(ctx.secIdx, ctx.parentParaIdx, ctx.controlIdx, ctx.cellIdx, JSON.stringify(props)); } catch { /* */ }
    rerender();
  }, [docRef, cellCtxRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 4: SHAPE / PICTURE
  // ═══════════════════════════════════════════════════════════════════════════

  const handleApplyShapeProps = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.setShapeProperties(pos.secIdx, pos.paraIdx, 0, JSON.stringify(props)); } catch { /* */ }
    rerender();
    st.setShapeDialogOpen(false);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleDeleteShape = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.deleteShapeControl(pos.secIdx, pos.paraIdx, 0); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleApplyPictureProps = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.setPictureProperties(pos.secIdx, pos.paraIdx, 0, JSON.stringify(props)); } catch { /* */ }
    rerender();
    st.setPicturePropsOpen(false);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleDeletePicture = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.deletePictureControl(pos.secIdx, pos.paraIdx, 0); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleDownloadImage = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    try {
      const data = doc.getControlImageData(pos.secIdx, pos.paraIdx, 0);
      const mime = doc.getControlImageMime(pos.secIdx, pos.paraIdx, 0);
      const ext = mime.includes('png') ? 'png' : mime.includes('jpeg') ? 'jpg' : 'bin';
      const blob = new Blob([data], { type: mime });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `image.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
    } catch { /* */ }
    st.setContextMenu(null);
  }, [docRef, cursorRef, st]);

  const makeZOrderHandler = useCallback((order: string) => () => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.changeShapeZOrder(pos.secIdx, pos.paraIdx, 0, order); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleZOrderFront = makeZOrderHandler('front');
  const handleZOrderBack = makeZOrderHandler('back');
  const handleZOrderForward = makeZOrderHandler('forward');
  const handleZOrderBackward = makeZOrderHandler('backward');

  const handleGroupShapes = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.groupShapes(JSON.stringify({ sectionIdx: pos.secIdx, controls: [{ paraIdx: pos.paraIdx, controlIdx: 0 }] })); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleUngroupShape = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.ungroupShape(pos.secIdx, pos.paraIdx, 0); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 5: FIELD / FORM
  // ═══════════════════════════════════════════════════════════════════════════

  const handleRefreshFieldList = useCallback(() => {
    // FieldDialog manages its own list; this is a placeholder for refresh trigger
  }, []);

  const handleGetFieldValue = useCallback((name: string): string => {
    const doc = docRef.current;
    if (!doc) return '';
    try { return doc.getFieldValueByName(name) ?? ''; } catch { return ''; }
  }, [docRef]);

  const handleSetFieldValue = useCallback((name: string, value: string) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.setFieldValueByName(name, value); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleSetActiveField = useCallback((index: number) => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      // Look up field position from list, then activate
      const listJson = doc.getFieldList();
      const list = JSON.parse(listJson) as Array<{ secIdx?: number; paraIdx?: number; charOffset?: number }>;
      const f = list[index];
      if (f) doc.setActiveField(f.secIdx ?? 0, f.paraIdx ?? 0, f.charOffset ?? 0);
    } catch { /* */ }
    rerender();
  }, [docRef, rerender]);

  const handleClearActiveField = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try { doc.clearActiveField(); } catch { /* */ }
    rerender();
  }, [docRef, rerender]);

  const handleRemoveFieldCtxMenu = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.removeFieldAt(pos.secIdx, pos.paraIdx, pos.charOffset); } catch { /* */ }
    rerender();
    st.setContextMenu(null);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleRemoveFieldDialog = useCallback((secIdx: number, paraIdx: number) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.removeFieldAt(secIdx, paraIdx, 0); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleUpdateClickHere = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try {
      doc.updateClickHereProps(
        (props.fieldId as number) ?? 0,
        (props.guide as string) ?? '',
        (props.memo as string) ?? '',
        (props.name as string) ?? '',
        (props.editable as boolean) ?? true,
      );
    } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleGotoField = useCallback((index: number) => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      // Look up field position from list
      const listJson = doc.getFieldList();
      const list = JSON.parse(listJson) as Array<{ secIdx?: number; paraIdx?: number; charOffset?: number }>;
      const f = list[index];
      if (f) {
        const pos: CursorPos = {
          secIdx: f.secIdx ?? 0,
          paraIdx: f.paraIdx ?? 0,
          charOffset: f.charOffset ?? 0,
        };
        moveCursor(pos);
      }
    } catch { /* */ }
    st.setFieldDialogOpen(false);
  }, [docRef, moveCursor, st]);

  const handleRefreshForms = useCallback(() => {
    // FormDialog manages its own list
  }, []);

  const handleSetFormValue = useCallback((index: number, value: string) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.setFormValue(pos.secIdx, pos.paraIdx, index, JSON.stringify({ value })); } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleSetFormValueInCell = useCallback((index: number, value: string) => {
    const doc = docRef.current;
    if (!doc) return;
    const ctx = cellCtxRef.current;
    if (!ctx) return;
    saveSnapshot();
    try { doc.setFormValueInCell(ctx.secIdx, ctx.parentParaIdx, ctx.controlIdx, ctx.cellIdx, ctx.cellParaIdx, index, JSON.stringify({ value })); } catch { /* */ }
    rerender();
  }, [docRef, cellCtxRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 6: HEADER/FOOTER EXTENSION
  // ═══════════════════════════════════════════════════════════════════════════

  const handleRefreshHfList = useCallback(() => {
    // HF dialog manages its own list
  }, []);

  const handleDeleteHf = useCallback((secIdx: number, isHeader: boolean, applyTo: number) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.deleteHeaderFooter(secIdx, isHeader, applyTo); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleToggleHideHf = useCallback((_secIdx: number, isHeader: boolean, _applyTo: number) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.toggleHideHeaderFooter(st.currentPage, isHeader); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender, st]);

  const handleNavigateHfByPage = useCallback((_secIdx: number, isHeader: boolean, pageNum: number) => {
    const doc = docRef.current;
    if (!doc) return;
    // direction: +1 forward, -1 backward; use pageNum as target
    try { doc.navigateHeaderFooterByPage(pageNum, isHeader, 1); } catch { /* */ }
    rerender();
  }, [docRef, rerender]);

  const handleApplyHfTemplate = useCallback((secIdx: number, isHeader: boolean, applyTo: number, templateId: number) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.applyHfTemplate(secIdx, isHeader, applyTo, templateId); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleInsertFieldInHf = useCallback((secIdx: number, isHeader: boolean, applyTo: number, fieldType: string) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    // WASM signature: (section_idx, is_header, apply_to, hf_para_idx, char_offset, field_type_num)
    const fieldTypeNum = ['page_number', 'total_pages', 'date', 'time', 'filename'].indexOf(fieldType);
    try { doc.insertFieldInHf(secIdx, isHeader, applyTo, 0, 0, fieldTypeNum >= 0 ? fieldTypeNum : 0); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 7: STYLE SYSTEM
  // ═══════════════════════════════════════════════════════════════════════════

  const handleCreateStyle = useCallback((opts: { name: string; engName: string; type: string; nextStyleId: number }) => {
    const doc = docRef.current;
    if (!doc) return;
    try { doc.createStyle(JSON.stringify(opts)); } catch { /* */ }
    loadStyles();
  }, [docRef, loadStyles]);

  const handleUpdateStyle = useCallback((id: number, props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try {
      doc.updateStyle(id, JSON.stringify(props));
      if (props.charShape || props.paraShape) {
        doc.updateStyleShapes(id, JSON.stringify(props.charShape ?? {}), JSON.stringify(props.paraShape ?? {}));
      }
    } catch { /* */ }
    loadStyles();
    rerender();
  }, [docRef, saveSnapshot, loadStyles, rerender]);

  const handleDeleteStyle = useCallback((id: number) => {
    const doc = docRef.current;
    if (!doc) return;
    try { doc.deleteStyle(id); } catch { /* */ }
    loadStyles();
  }, [docRef, loadStyles]);

  const handleGetStyleDetail = useCallback((id: number): Record<string, unknown> | null => {
    const doc = docRef.current;
    if (!doc) return null;
    try {
      const rj = doc.getStyleDetail(id);
      return parseResult(rj);
    } catch { return null; }
  }, [docRef]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 9: DOCUMENT STRUCTURE
  // ═══════════════════════════════════════════════════════════════════════════

  const handleApplySectionDef = useCallback((def: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try { doc.setSectionDef(0, JSON.stringify(def)); } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleApplyPageHide = useCallback((hide: Record<string, boolean>) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    try {
      doc.setPageHide(
        0, 0,
        !!hide.hideHeader, !!hide.hideFooter, !!hide.hideMasterPage,
        !!hide.hideBorder, !!hide.hideFill, !!hide.hidePageNumber,
      );
    } catch { /* */ }
    rerender();
  }, [docRef, saveSnapshot, rerender]);

  const handleRenameBookmark = useCallback((bm: { secIdx: number; paraIdx: number; controlIdx?: number }, newName: string) => {
    const doc = docRef.current;
    if (!doc) return;
    try { doc.renameBookmark(bm.secIdx, bm.paraIdx, bm.controlIdx ?? 0, newName); } catch { /* */ }
    loadBookmarks();
  }, [docRef, loadBookmarks]);

  const handleApplyColumnDef = useCallback((def: { count: number; type: string; gap: number; widths?: number[]; separatorType: string }) => {
    const doc = docRef.current;
    if (!doc) return;
    saveSnapshot();
    const colType = def.type === 'equal' ? 0 : 1;
    const sameWidth = def.type === 'equal' ? 1 : 0;
    try { doc.setColumnDef(cursorRef.current.secIdx, def.count, colType, sameWidth, def.gap); } catch { /* */ }
    rerender();
    st.setColumnDialogOpen(false);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleInsertColumnBreak = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try { doc.insertColumnBreak(pos.secIdx, pos.paraIdx, pos.charOffset); } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleRefreshNumberingLists = useCallback(() => {
    // NumberingDialog manages its own lists
  }, []);

  const handleCreateNumbering = useCallback((opts: { format: string; startNumber: number }) => {
    const doc = docRef.current;
    if (!doc) return;
    try { doc.createNumbering(JSON.stringify(opts)); } catch { /* */ }
  }, [docRef]);

  const handleApplyNumbering = useCallback((id: number, level: number) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numbering: { id, level } }));
    } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleApplyBullet = useCallback((id: number, level: number) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ bullet: { id, level } }));
    } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleRestartNumbering = useCallback((id: number, startNumber: number) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    // WASM: setNumberingRestart(section_idx, para_idx, mode, start_num)
    try { doc.setNumberingRestart(pos.secIdx, pos.paraIdx, id, startNumber); } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  const handleRemoveNumbering = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      doc.applyParaFormat(pos.secIdx, pos.paraIdx, JSON.stringify({ numbering: null, bullet: null }));
    } catch { /* */ }
    rerender();
  }, [docRef, cursorRef, saveSnapshot, rerender]);

  // ═══════════════════════════════════════════════════════════════════════════
  // PHASE 10: EXPORT / EQUATION
  // ═══════════════════════════════════════════════════════════════════════════

  const handleExportSelectionHtml = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const anchor = selAnchorRef.current;
      const end = cursorRef.current;
      if (!anchor) return;
      const html = st.editMode === 'cell' && cellCtxRef.current
        ? doc.exportSelectionInCellHtml(
            cellCtxRef.current.secIdx, cellCtxRef.current.parentParaIdx,
            cellCtxRef.current.controlIdx, cellCtxRef.current.cellIdx,
            anchor.paraIdx, anchor.charOffset, end.paraIdx, end.charOffset,
          )
        : doc.exportSelectionHtml(
            anchor.secIdx, anchor.paraIdx, anchor.charOffset,
            end.paraIdx, end.charOffset,
          );
      navigator.clipboard.writeText(html).catch(() => { /* */ });
    } catch { /* */ }
  }, [docRef, selAnchorRef, cursorRef, st, cellCtxRef]);

  const handleExportVerify = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const rj = doc.exportHwpVerify();
      const r = parseResult(rj);
      if (r) {
        const msg = r.ok
          ? `\uAC80\uC99D \uC131\uACF5 (${r.pageCount}\uD398\uC774\uC9C0)`
          : `\uAC80\uC99D \uC2E4\uD328: ${r.message}`;
        st.setEditorError(msg);
      }
    } catch (e) { st.setEditorError(`\uAC80\uC99D \uC624\uB958: ${(e as Error).message}`); }
  }, [docRef, st]);

  const handleInsertEquation = useCallback((script: string, fontSize: number) => {
    const doc = docRef.current;
    if (!doc) return;
    const pos = cursorRef.current;
    saveSnapshot();
    try {
      // Insert equation as a shape control with equation data
      doc.createShapeControl(JSON.stringify({
        sectionIdx: pos.secIdx,
        paraIdx: pos.paraIdx,
        charOffset: pos.charOffset,
        type: 'equation',
        script,
        fontSize,
      }));
    } catch { /* */ }
    rerender();
    st.setEquationDialogOpen(false);
  }, [docRef, cursorRef, saveSnapshot, rerender, st]);

  const handleRenderEquationPreview = useCallback((script: string): string | null => {
    const doc = docRef.current;
    if (!doc) return null;
    try { return doc.renderEquationPreview(script, 1000, 0); } catch { return null; }
  }, [docRef]);

  // ═══════════════════════════════════════════════════════════════════════════
  // RENDER
  // ═══════════════════════════════════════════════════════════════════════════

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
          {/* Error banners */}
          {st.editorError && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{st.editorError}</span>
              <button
                onClick={() => st.setEditorError('')}
                style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', fontSize: '1.1rem' }}
              >
                &times;
              </button>
            </div>
          )}

          {wasmError && !wasmLoading && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{t('site.hwpEditor.wasmError')}: {wasmError}</span>
            </div>
          )}

          {wasmLoading && (
            <div className="hwp-editor-loading">
              <div className="loading-spinner" />
              <p>{t('site.hwpEditor.wasmLoading')}</p>
            </div>
          )}

          {/* Empty / drop zone (when no document loaded) */}
          {ready && !hasDoc && !wasmLoading && (
            <div
              className={`hwp-editor-container${st.isDragging ? ' drag-over' : ''}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="hwp-editor-empty">
                <svg viewBox="0 0 24 24" width="56" height="56" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(74,143,231,0.15)" stroke="var(--primary, #0046C8)" />
                  <polyline points="14 2 14 8 20 8" fill="rgba(74,143,231,0.25)" stroke="var(--primary, #0046C8)" />
                  <line x1="12" y1="18" x2="12" y2="12" stroke="var(--primary, #0046C8)" />
                  <line x1="9" y1="15" x2="15" y2="15" stroke="var(--primary, #0046C8)" />
                </svg>
                <h3>{t('site.hwpEditor.dropOrNew')}</h3>
                <p>{t('site.hwpEditor.clickToEdit')}</p>
                <div className="hwp-editor-empty-actions">
                  <button className="hwp-empty-btn primary" onClick={handleNewDoc} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="18" height="18" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(255,255,255,0.25)" stroke="white" />
                      <polyline points="14 2 14 8 20 8" fill="rgba(255,255,255,0.15)" stroke="white" />
                      <line x1="12" y1="18" x2="12" y2="11" stroke="white" strokeWidth="1.5" />
                      <line x1="9" y1="14.5" x2="15" y2="14.5" stroke="white" strokeWidth="1.5" />
                    </svg>
                    {t('site.hwpEditor.newDoc')}
                  </button>
                  <button className="hwp-empty-btn" onClick={triggerFileOpen} disabled={!ready}>
                    <svg viewBox="0 0 24 24" width="18" height="18" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" fill="rgba(234,179,8,0.25)" stroke="currentColor" />
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
              {/* ── TOOLBAR ─────────────────────────────────────────── */}
              <EditorToolbar
                t={t}
                onNewDoc={handleNewDoc}
                onOpenFile={triggerFileOpen}
                onExport={handleExport}
                canUndo={st.canUndo}
                canRedo={st.canRedo}
                onUndo={handleUndo}
                onRedo={handleRedo}
                fontInput={st.fontInput}
                sizeInput={st.sizeInput}
                onApplyFont={applyFont}
                onApplySize={applySize}
                charProps={st.charProps}
                onToggleBold={toggleBold}
                onToggleItalic={toggleItalic}
                onToggleUnderline={toggleUnderline}
                onToggleStrikethrough={toggleStrikethrough}
                textColorHex={textColorHex}
                highlightHex={highlightHex}
                onApplyTextColor={applyTextColor}
                onApplyHighlight={applyHighlight}
                paraProps={st.paraProps}
                onApplyAlignment={applyAlignment}
                onApplyLineSpacing={applyLineSpacing}
                onApplyIndentChange={applyIndentChange}
                onApplyBulletList={applyBulletList}
                onApplyNumberedList={applyNumberedList}
                onInsertTable={() => st.setTableDialogOpen((o) => !o)}
                tableRows={st.tableRows}
                tableCols={st.tableCols}
                onSetTableRows={st.setTableRows}
                onSetTableCols={st.setTableCols}
                onConfirmInsertTable={handleInsertTable}
                onInsertImage={handleInsertImage}
                onPageBreak={handlePageBreak}
                onInsertShape={handleInsertShape}
                onInsertFootnote={handleInsertFootnote}
                onEnterHeader={() => enterHeaderFooterMode(cursorRef.current.secIdx, true)}
                onEnterFooter={() => enterHeaderFooterMode(cursorRef.current.secIdx, false)}
                findBarOpen={st.findBarOpen}
                onToggleFindBar={() => st.setFindBarOpen((o) => !o)}
                onOpenPageSetup={() => {
                  loadPageDef();
                  st.setPageDefOpen(true);
                }}
                styleList={st.styleList}
                onLoadStyles={loadStyles}
                onApplyStyle={applyStyle}
                onOpenBookmarks={() => {
                  loadBookmarks();
                  st.setBookmarkDialogOpen(true);
                }}
                showParaMarks={st.showParaMarks}
                showControlCodes={st.showControlCodes}
                showTransparentBorders={st.showTransparentBorders}
                onToggleParaMarks={toggleParaMarks}
                onToggleControlCodes={toggleControlCodes}
                onToggleTransparentBorders={toggleTransparentBorders}
                fileName={st.fileName}
                dirty={st.dirty}
                clipboardHasContent={clipboard.clipboardHasContent}
                onCopy={clipboard.handleCopy}
                onCut={clipboard.handleCut}
                onPaste={clipboard.handlePaste}
                sidebarOpen={st.sidebarOpen}
                onToggleSidebar={() => st.setSidebarOpen((o) => !o)}
                onOpenTableProps={() => st.setTablePropsOpen(true)}
                onOpenStyleDialog={() => {
                  loadStyles();
                  st.setStyleDialogOpen(true);
                }}
                onOpenHeaderFooterDialog={() => st.setHeaderFooterDialogOpen(true)}
                onOpenFieldDialog={() => st.setFieldDialogOpen(true)}
                onOpenColumnDialog={() => st.setColumnDialogOpen(true)}
                onOpenNumberingDialog={() => st.setNumberingDialogOpen(true)}
                onOpenEquationDialog={() => st.setEquationDialogOpen(true)}
                onOpenFormDialog={() => st.setFormDialogOpen(true)}
                onExportSelectionHtml={handleExportSelectionHtml}
                onExportVerify={handleExportVerify}
              />

              {/* ── FIND/REPLACE BAR ────────────────────────────────── */}
              {st.findBarOpen && (
                <FindReplaceBar
                  t={t}
                  findQuery={st.findQuery}
                  replaceQuery={st.replaceQuery}
                  caseSensitive={st.caseSensitive}
                  findInfo={st.findInfo}
                  onFindQueryChange={(val) => {
                    st.setFindQuery(val);
                    st.setFindInfo('');
                  }}
                  onReplaceQueryChange={st.setReplaceQuery}
                  onCaseSensitiveChange={st.setCaseSensitive}
                  onFindNext={handleFindNext}
                  onReplaceOne={handleReplaceOne}
                  onReplaceAll={handleReplaceAll}
                  onClose={() => {
                    st.setFindBarOpen(false);
                    st.setFindInfo('');
                  }}
                />
              )}

              {/* ── EDIT MODE INDICATOR ──────────────────────────────── */}
              {st.editMode !== 'body' && (
                <div className="hwp-edit-mode-bar">
                  <span>
                    {st.editMode === 'cell'
                      ? '\uD45C \uC140 \uD3B8\uC9D1'
                      : st.editMode === 'header'
                        ? '\uBA38\uB9AC\uB9D0 \uD3B8\uC9D1'
                        : st.editMode === 'footer'
                          ? '\uAF2C\uB9AC\uB9D0 \uD3B8\uC9D1'
                          : '\uAC01\uC8FC \uD3B8\uC9D1'}
                  </span>
                  <button
                    onClick={() => {
                      st.setEditMode('body');
                      cellCtxRef.current = null;
                      hfCtxRef.current = null;
                      fnCtxRef.current = null;
                    }}
                  >
                    ESC \uB098\uAC00\uAE30
                  </button>
                </div>
              )}

              {/* ── MAIN LAYOUT ─────────────────────────────────────── */}
              <div className="hwp-editor-main-layout">
                <div className="hwp-editor-main-content">
                  <EditorCanvas
                    pageCount={st.pageCount}
                    currentPage={st.currentPage}
                    zoom={st.zoom}
                    renderVer={st.renderVer}
                    pageCanvasRefs={pageCanvasRefs}
                    overlayCanvasRefs={overlayCanvasRefs}
                    canvasRefs={st.canvasRefs}
                    cursorRect={st.cursorRect}
                    cursorVisible={st.cursorVisible}
                    selRects={st.selRects}
                    renderScaleRef={renderScaleRef}
                    onCanvasMouseDown={handleCanvasMouseDown}
                    onCanvasMouseMove={handleCanvasMouseMove}
                    onCanvasMouseUp={handleCanvasMouseUp}
                    onContextMenu={handleContextMenu}
                    onDoubleClick={handleDoubleClick}
                    isDragging={st.isDragging}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onFocusInput={() => st.hiddenInputRef.current?.focus()}
                  />
                </div>
                <EditorSidebar
                  isOpen={st.sidebarOpen}
                  onClose={() => st.setSidebarOpen(false)}
                  t={t}
                  editMode={st.editMode}
                  cursor={st.cursor}
                  charProps={st.charProps}
                  paraProps={st.paraProps}
                  currentPage={st.currentPage}
                  pageCount={st.pageCount}
                  currentStyleName=""
                  styleList={st.styleList}
                  onApplyStyle={applyStyle}
                  cellProps={null}
                  onUpdateCellProps={handleUpdateSidebarCellProps}
                  documentInfo={null}
                  fieldInfo={null}
                />
              </div>

              {/* ── CONTEXT MENU ────────────────────────────────────── */}
              {st.contextMenu && (
                <ContextMenu
                  menu={st.contextMenu}
                  onClose={() => st.setContextMenu(null)}
                  onUndo={() => {
                    handleUndo();
                    st.setContextMenu(null);
                  }}
                  onRedo={() => {
                    handleRedo();
                    st.setContextMenu(null);
                  }}
                  onCopy={() => {
                    clipboard.handleCopy();
                    st.setContextMenu(null);
                  }}
                  onCut={() => {
                    clipboard.handleCut();
                    st.setContextMenu(null);
                  }}
                  onPaste={() => {
                    clipboard.handlePasteHtml();
                    st.setContextMenu(null);
                  }}
                  onEnterCell={() => {
                    if (st.contextMenu?.tableInfo) {
                      const ti = st.contextMenu.tableInfo;
                      enterCellMode(ti.secIdx, ti.paraIdx, ti.controlIdx, ti.cellIdx);
                    }
                    st.setContextMenu(null);
                  }}
                  onInsertRowBefore={() => handleInsertTableRow(false)}
                  onInsertRowAfter={() => handleInsertTableRow(true)}
                  onDeleteRow={handleDeleteTableRow}
                  onInsertColBefore={() => handleInsertTableColumn(false)}
                  onInsertColAfter={() => handleInsertTableColumn(true)}
                  onDeleteCol={handleDeleteTableColumn}
                  onMergeCells={handleMergeTableCells}
                  onSplitCell={handleSplitTableCell}
                  onTableProps={() => {
                    st.setTablePropsOpen(true);
                    st.setContextMenu(null);
                  }}
                  onTableFormula={handleTableFormula}
                  onDeleteTable={handleDeleteTable}
                  onShapeProps={() => {
                    st.setShapeDialogOpen(true);
                    st.setContextMenu(null);
                  }}
                  onDeleteShape={handleDeleteShape}
                  onPictureProps={() => {
                    st.setPicturePropsOpen(true);
                    st.setContextMenu(null);
                  }}
                  onDeletePicture={handleDeletePicture}
                  onDownloadImage={handleDownloadImage}
                  onZOrderFront={handleZOrderFront}
                  onZOrderBack={handleZOrderBack}
                  onZOrderForward={handleZOrderForward}
                  onZOrderBackward={handleZOrderBackward}
                  onGroupShapes={handleGroupShapes}
                  onUngroupShape={handleUngroupShape}
                  onFieldProps={() => {
                    st.setFieldDialogOpen(true);
                    st.setContextMenu(null);
                  }}
                  onRemoveField={handleRemoveFieldCtxMenu}
                  onFindNextControl={navigation.findNextControl}
                  onFindPrevControl={navigation.findPrevControl}
                />
              )}

              {/* ── DIALOGS ─────────────────────────────────────────── */}
              {st.pageDefOpen && (
                <PageSetupDialog
                  onClose={() => st.setPageDefOpen(false)}
                  pageDef={st.pageDef}
                  onApply={applyPageDef}
                  sectionDef={null}
                  onApplySectionDef={handleApplySectionDef}
                  pageHide={null}
                  onApplyPageHide={handleApplyPageHide}
                />
              )}

              {st.bookmarkDialogOpen && (
                <BookmarkDialog
                  onClose={() => st.setBookmarkDialogOpen(false)}
                  bookmarkList={st.bookmarkList}
                  onRefresh={loadBookmarks}
                  onAdd={handleAddBookmark}
                  onDelete={handleDeleteBookmark}
                  onRename={handleRenameBookmark}
                  onGoto={handleGotoBookmark}
                />
              )}

              {st.tablePropsOpen && (
                <TablePropsDialog
                  t={t}
                  onClose={() => st.setTablePropsOpen(false)}
                  tableProps={loadTableProps() as any}
                  onApply={handleApplyTableProps}
                />
              )}

              {st.cellPropsOpen && (
                <CellPropsDialog
                  t={t}
                  onClose={() => st.setCellPropsOpen(false)}
                  cellProps={loadCellProps() as any}
                  onApply={handleApplyCellProps}
                />
              )}

              {st.shapeDialogOpen && (
                <ShapeDialog
                  mode="insert"
                  onClose={() => st.setShapeDialogOpen(false)}
                  onInsert={(opts) => {
                    const doc = docRef.current;
                    if (!doc) return;
                    const pos = cursorRef.current;
                    saveSnapshot();
                    try {
                      doc.createShapeControl(
                        JSON.stringify({
                          sectionIdx: pos.secIdx,
                          paraIdx: pos.paraIdx,
                          charOffset: pos.charOffset,
                          ...opts,
                        }),
                      );
                    } catch {
                      /* ignore */
                    }
                    rerender();
                    st.setShapeDialogOpen(false);
                  }}
                  onApply={handleApplyShapeProps}
                />
              )}

              {st.picturePropsOpen && (
                <PicturePropsDialog
                  onClose={() => st.setPicturePropsOpen(false)}
                  pictureProps={null}
                  onApply={handleApplyPictureProps}
                  onDownloadImage={handleDownloadImage}
                />
              )}

              {st.styleDialogOpen && (
                <StyleDialog
                  onClose={() => st.setStyleDialogOpen(false)}
                  styleList={st.styleList}
                  onCreateStyle={handleCreateStyle}
                  onUpdateStyle={handleUpdateStyle}
                  onDeleteStyle={handleDeleteStyle}
                  onGetStyleDetail={handleGetStyleDetail}
                  onApplyStyle={applyStyle}
                />
              )}

              {st.headerFooterDialogOpen && (
                <HeaderFooterDialog
                  onClose={() => st.setHeaderFooterDialogOpen(false)}
                  headerFooterList={[]}
                  onRefreshList={handleRefreshHfList}
                  onCreateHeaderFooter={(secIdx, isHeader) => enterHeaderFooterMode(secIdx, isHeader)}
                  onDeleteHeaderFooter={handleDeleteHf}
                  onToggleHide={handleToggleHideHf}
                  onNavigateByPage={handleNavigateHfByPage}
                  onApplyTemplate={handleApplyHfTemplate}
                  onInsertField={handleInsertFieldInHf}
                  onEnterEditMode={(secIdx, isHeader) => enterHeaderFooterMode(secIdx, isHeader)}
                  sectionCount={1}
                  currentPage={st.currentPage}
                  pageCount={st.pageCount}
                />
              )}

              {st.fieldDialogOpen && (
                <FieldDialog
                  onClose={() => st.setFieldDialogOpen(false)}
                  fieldList={[]}
                  onRefreshFieldList={handleRefreshFieldList}
                  onGetFieldValue={handleGetFieldValue}
                  onSetFieldValue={handleSetFieldValue}
                  onSetActiveField={handleSetActiveField}
                  onClearActiveField={handleClearActiveField}
                  onRemoveField={handleRemoveFieldDialog}
                  clickHereProps={null}
                  onUpdateClickHere={handleUpdateClickHere}
                  onGotoField={handleGotoField}
                />
              )}

              {st.columnDialogOpen && (
                <ColumnDialog
                  onClose={() => st.setColumnDialogOpen(false)}
                  currentDef={null}
                  onApply={handleApplyColumnDef}
                  onInsertBreak={handleInsertColumnBreak}
                />
              )}

              {st.formDialogOpen && (
                <FormDialog
                  onClose={() => st.setFormDialogOpen(false)}
                  formObjects={[]}
                  onRefresh={handleRefreshForms}
                  onSetValue={handleSetFormValue}
                  onSetValueInCell={handleSetFormValueInCell}
                  editMode={st.editMode}
                />
              )}

              {st.numberingDialogOpen && (
                <NumberingDialog
                  onClose={() => st.setNumberingDialogOpen(false)}
                  numberingList={[]}
                  bulletList={[]}
                  onRefreshLists={handleRefreshNumberingLists}
                  onCreateNumbering={handleCreateNumbering}
                  onApplyNumbering={handleApplyNumbering}
                  onApplyBullet={handleApplyBullet}
                  onRestartNumbering={handleRestartNumbering}
                  onRemoveNumbering={handleRemoveNumbering}
                />
              )}

              {st.equationDialogOpen && (
                <EquationDialog
                  mode="insert"
                  onClose={() => st.setEquationDialogOpen(false)}
                  onInsert={handleInsertEquation}
                  onRenderPreview={handleRenderEquationPreview}
                />
              )}

              {/* ── Hidden textarea for IME input ───────────────────── */}
              <textarea
                ref={st.hiddenInputRef}
                className="hwp-hidden-input"
                aria-label="HWP Editor input"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                onCompositionStart={keyboard.handleIMECompositionStart}
                onCompositionEnd={keyboard.handleIMECompositionEnd}
                onInput={keyboard.handleIMEInput}
                onKeyDown={keyboard.handleKeyDown}
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

              {/* ── PAGE BAR ────────────────────────────────────────── */}
              <div className="hwp-page-bar">
                <div className="hwp-page-nav">
                  <button
                    className="hwp-page-btn"
                    disabled={st.currentPage <= 0}
                    onClick={() => st.setCurrentPage((p) => Math.max(0, p - 1))}
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
                      value={st.pageInputVal}
                      onChange={handlePageInput}
                      onBlur={handlePageInputCommit}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handlePageInputCommit();
                      }}
                    />
                    &nbsp;/ {st.pageCount}
                  </span>
                  <button
                    className="hwp-page-btn"
                    disabled={st.currentPage >= st.pageCount - 1}
                    onClick={() => st.setCurrentPage((p) => Math.min(st.pageCount - 1, p + 1))}
                  >
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-zoom-controls">
                  <button className="hwp-zoom-btn" onClick={handleZoomOut} disabled={st.zoom <= 30}>
                    &#8722;
                  </button>
                  <span className="hwp-zoom-label">{st.zoom}%</span>
                  <button className="hwp-zoom-btn" onClick={handleZoomIn} disabled={st.zoom >= 200}>
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default HwpEditor;
