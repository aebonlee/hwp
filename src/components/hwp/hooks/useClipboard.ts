/**
 * useClipboard.ts — Phase 1: Clipboard system hook
 *
 * Implements 8 new document APIs for copy/paste operations in body and cell
 * edit modes, plus 4 helper APIs for clipboard state management.
 *
 * Document APIs used:
 *   copySelection, copySelectionInCell, copyControl,
 *   pasteInternal, pasteInternalInCell, pasteControl,
 *   pasteHtml, pasteHtmlInCell
 *
 * Helper APIs:
 *   hasInternalClipboard, clipboardHasControl, clearClipboard, getClipboardText
 */

import { useCallback, useState } from 'react';
import type { CursorPos, CellContext, EditMode } from './useEditorState';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

function parseResult(json: string): Record<string, unknown> | null {
  try {
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface UseClipboardParams {
  getDoc: () => any | null;
  getCursor: () => CursorPos;
  getSelAnchor: () => CursorPos | null;
  getCellCtx: () => CellContext | null;
  editMode: EditMode;
  saveSnapshot: () => void;
  deleteSelection: () => CursorPos | null;
  setCursor: (pos: CursorPos) => void;
  moveCursor: (pos: CursorPos, clearSel?: boolean) => void;
  rerender: () => void;
  rerenderCurrentPage: () => void;
  insertText: (text: string) => void;
  setHasSelection: (val: boolean) => void;
  setSelRects: (rects: any[]) => void;
  setSelAnchor: (pos: CursorPos | null) => void;
}

export interface UseClipboardReturn {
  clipboardHasContent: boolean;
  clipboardHasControl: boolean;

  // Copy operations
  handleCopy: () => void;         // Ctrl+C — copies selection (body or cell)
  handleCut: () => void;          // Ctrl+X — copy + delete selection
  handleCopyControl: () => void;  // Copy control (table/image) at cursor

  // Paste operations
  handlePaste: () => void;        // Ctrl+V — paste internal or HTML
  handlePasteControl: () => void; // Paste copied control
  handlePasteHtml: () => Promise<void>; // Paste from browser clipboard as HTML

  // Utility
  clearClipboard: () => void;
  getClipboardText: () => string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useClipboard(params: UseClipboardParams): UseClipboardReturn {
  const {
    getDoc,
    getCursor,
    getSelAnchor,
    getCellCtx,
    editMode,
    saveSnapshot,
    deleteSelection,
    setCursor,
    moveCursor,
    rerender,
    rerenderCurrentPage,
    insertText,
    setHasSelection: _setHasSelection,
    setSelRects: _setSelRects,
    setSelAnchor: _setSelAnchor,
  } = params;

  // ── State ───────────────────────────────────────────────────────────────
  const [clipboardHasContent, setClipboardHasContent] = useState(false);
  const [clipboardHasCtrl, setClipboardHasCtrl] = useState(false);

  // ── Copy (body or cell) ─────────────────────────────────────────────────

  const handleCopy = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const anchor = getSelAnchor();
    if (!anchor) return; // nothing selected

    try {
      if (editMode === 'cell') {
        // ── Cell copy ────────────────────────────────────────────────────
        const ctx = getCellCtx();
        if (!ctx) return;

        // Selection range within cell: anchor charOffset <-> ctx.charOffset
        let startOff = anchor.charOffset;
        let endOff = ctx.charOffset;
        if (startOff > endOff) {
          [startOff, endOff] = [endOff, startOff];
        }

        const rj = doc.copySelectionInCell(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          ctx.cellParaIdx,
          startOff,
          endOff,
        );
        const r = parseResult(rj);

        // Write plain-text to browser clipboard for cross-app paste
        if (r?.text) {
          navigator.clipboard.writeText(r.text as string).catch(() => {});
        }
      } else {
        // ── Body copy ────────────────────────────────────────────────────
        const cur = getCursor();
        let sp = anchor.paraIdx;
        let so = anchor.charOffset;
        let ep = cur.paraIdx;
        let eo = cur.charOffset;

        // Normalize range (start <= end)
        if (sp > ep || (sp === ep && so > eo)) {
          [sp, ep] = [ep, sp];
          [so, eo] = [eo, so];
        }

        const rj = doc.copySelection(cur.secIdx, sp, so, ep, eo);
        const r = parseResult(rj);

        if (r?.text) {
          navigator.clipboard.writeText(r.text as string).catch(() => {});
        }
      }

      setClipboardHasContent(true);
    } catch {
      /* ignore copy errors */
    }
  }, [getDoc, getCursor, getSelAnchor, getCellCtx, editMode]);

  // ── Cut (copy + delete) ─────────────────────────────────────────────────

  const handleCut = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;
    const anchor = getSelAnchor();
    if (!anchor) return;

    // Copy first
    handleCopy();

    // Then delete selection
    saveSnapshot();
    try {
      const newPos = deleteSelection();
      if (newPos) {
        setCursor(newPos);
        moveCursor(newPos);
      }
      rerenderCurrentPage();
    } catch {
      /* ignore */
    }
  }, [getDoc, getSelAnchor, handleCopy, saveSnapshot, deleteSelection, setCursor, moveCursor, rerenderCurrentPage]);

  // ── Copy control (table / image / shape) ───────────────────────────────

  const handleCopyControl = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const cur = getCursor();
    try {
      // controlIdx is determined from paragraph content at cursor position;
      // the document engine resolves it from (secIdx, paraIdx, charOffset).
      const rj = doc.copyControl(cur.secIdx, cur.paraIdx, cur.charOffset);
      const r = parseResult(rj);
      if (r?.ok) {
        setClipboardHasCtrl(true);
        setClipboardHasContent(true);
      }
    } catch {
      /* ignore */
    }
  }, [getDoc, getCursor]);

  // ── Paste HTML from browser clipboard ──────────────────────────────────

  const handlePasteHtml = useCallback(async () => {
    const doc = getDoc();
    if (!doc) return;

    saveSnapshot();

    // Delete selection first if present
    const anchor = getSelAnchor();
    if (anchor) {
      try {
        const np = deleteSelection();
        if (np) setCursor(np);
      } catch {
        /* ignore */
      }
    }

    try {
      const items = await navigator.clipboard.read();
      for (const item of items) {
        if (item.types.includes('text/html')) {
          const blob = await item.getType('text/html');
          const html = await blob.text();

          if (editMode === 'cell') {
            // ── Paste HTML in cell ─────────────────────────────────────
            const ctx = getCellCtx();
            if (!ctx) return;

            try {
              const rj = doc.pasteHtmlInCell(
                ctx.secIdx,
                ctx.parentParaIdx,
                ctx.controlIdx,
                ctx.cellIdx,
                ctx.cellParaIdx,
                ctx.charOffset,
                html,
              );
              const r = parseResult(rj);
              if (r?.ok) {
                ctx.cellParaIdx = (r.paraIdx as number) ?? ctx.cellParaIdx;
                ctx.charOffset = (r.charOffset as number) ?? ctx.charOffset;
              }
            } catch {
              /* fallback below */
            }
          } else {
            // ── Paste HTML in body ─────────────────────────────────────
            const cur = getCursor();
            try {
              const rj = doc.pasteHtml(cur.secIdx, cur.paraIdx, cur.charOffset, html);
              const r = parseResult(rj);
              if (r?.ok) {
                moveCursor({
                  secIdx: cur.secIdx,
                  paraIdx: (r.paraIdx as number) ?? cur.paraIdx,
                  charOffset: (r.charOffset as number) ?? 0,
                });
              }
            } catch {
              /* fallback below */
            }
          }

          rerender();
          return;
        }
      }
    } catch {
      /* clipboard.read() may fail — fall through to text fallback */
    }

    // Fallback: read plain text
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        insertText(text);
      }
    } catch {
      /* ignore */
    }
  }, [
    getDoc, getCursor, getSelAnchor, getCellCtx, editMode,
    saveSnapshot, deleteSelection, setCursor, moveCursor,
    rerender, insertText,
  ]);

  // ── Paste control ──────────────────────────────────────────────────────

  const handlePasteControl = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    saveSnapshot();

    // Delete selection first if present
    const anchor = getSelAnchor();
    if (anchor) {
      try {
        const np = deleteSelection();
        if (np) setCursor(np);
      } catch {
        /* ignore */
      }
    }

    const cur = getCursor();
    try {
      const rj = doc.pasteControl(cur.secIdx, cur.paraIdx, cur.charOffset);
      const r = parseResult(rj);
      if (r?.ok) {
        moveCursor({
          secIdx: cur.secIdx,
          paraIdx: (r.paraIdx as number) ?? cur.paraIdx,
          charOffset: (r.charOffset as number) ?? 0,
        });
      }
      rerender();
    } catch {
      /* ignore */
    }
  }, [getDoc, getCursor, getSelAnchor, saveSnapshot, deleteSelection, setCursor, moveCursor, rerender]);

  // ── Paste (unified — internal → control → HTML fallback) ──────────────

  const handlePaste = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    // 1. Try internal clipboard (text/paragraph data)
    try {
      if (doc.hasInternalClipboard()) {
        saveSnapshot();

        // Delete selection first if present
        const anchor = getSelAnchor();
        if (anchor) {
          try {
            const np = deleteSelection();
            if (np) setCursor(np);
          } catch {
            /* ignore */
          }
        }

        if (editMode === 'cell') {
          // ── Internal paste in cell ───────────────────────────────────
          const ctx = getCellCtx();
          if (!ctx) return;

          try {
            const rj = doc.pasteInternalInCell(
              ctx.secIdx,
              ctx.parentParaIdx,
              ctx.controlIdx,
              ctx.cellIdx,
              ctx.cellParaIdx,
              ctx.charOffset,
            );
            const r = parseResult(rj);
            if (r?.ok) {
              ctx.cellParaIdx = (r.paraIdx as number) ?? ctx.cellParaIdx;
              ctx.charOffset = (r.charOffset as number) ?? ctx.charOffset;
            }
          } catch {
            /* ignore */
          }
        } else {
          // ── Internal paste in body ───────────────────────────────────
          const cur = getCursor();
          try {
            const rj = doc.pasteInternal(cur.secIdx, cur.paraIdx, cur.charOffset);
            const r = parseResult(rj);
            if (r?.ok) {
              moveCursor({
                secIdx: cur.secIdx,
                paraIdx: (r.paraIdx as number) ?? cur.paraIdx,
                charOffset: (r.charOffset as number) ?? 0,
              });
            }
          } catch {
            /* ignore */
          }
        }

        rerender();
        return;
      }
    } catch {
      /* hasInternalClipboard may throw — fall through */
    }

    // 2. Try control clipboard (table/image copy)
    try {
      if (doc.clipboardHasControl()) {
        handlePasteControl();
        return;
      }
    } catch {
      /* clipboardHasControl may throw — fall through */
    }

    // 3. Fallback: paste from browser clipboard as HTML / text
    handlePasteHtml();
  }, [
    getDoc, getCursor, getSelAnchor, getCellCtx, editMode,
    saveSnapshot, deleteSelection, setCursor, moveCursor,
    rerender, handlePasteControl, handlePasteHtml,
  ]);

  // ── Clear clipboard ────────────────────────────────────────────────────

  const clearClipboardFn = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    try {
      doc.clearClipboard();
    } catch {
      /* ignore */
    }

    setClipboardHasContent(false);
    setClipboardHasCtrl(false);
  }, [getDoc]);

  // ── Get clipboard text ─────────────────────────────────────────────────

  const getClipboardTextFn = useCallback((): string => {
    const doc = getDoc();
    if (!doc) return '';

    try {
      return doc.getClipboardText() as string ?? '';
    } catch {
      return '';
    }
  }, [getDoc]);

  // ─────────────────────────────────────────────────────────────────────────
  // Return
  // ─────────────────────────────────────────────────────────────────────────

  return {
    clipboardHasContent,
    clipboardHasControl: clipboardHasCtrl,

    // Copy operations
    handleCopy,
    handleCut,
    handleCopyControl,

    // Paste operations
    handlePaste,
    handlePasteControl,
    handlePasteHtml,

    // Utility
    clearClipboard: clearClipboardFn,
    getClipboardText: getClipboardTextFn,
  };
}
