/**
 * useKeyboard.ts — Keyboard event handler hook extracted from HwpEditor.tsx
 *
 * Encapsulates ALL keyboard handling logic:
 *   - Body mode (main editing)
 *   - Cell mode (table cell editing)
 *   - Header/Footer mode
 *   - Footnote mode
 *   - IME composition handling (Korean / CJK input)
 */

import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import type { EditMode, CursorPos, CursorRectState } from './useEditorState';

// ─────────────────────────────────────────────────────────────────────────────
// Utility
// ─────────────────────────────────────────────────────────────────────────────

function parseResult(json: string): Record<string, unknown> | null {
  try {
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Param types
// ─────────────────────────────────────────────────────────────────────────────

interface UseKeyboardParams {
  // Edit mode
  editMode: EditMode;

  // Document ref
  getDoc: () => any | null;

  // Cursor
  getCursor: () => CursorPos;
  getCursorRect: () => CursorRectState | null;
  setCursor: (pos: CursorPos) => void;
  setCursorRect: (rect: CursorRectState) => void;
  moveCursor: (pos: CursorPos, clearSel?: boolean) => void;
  updateCursorDisplay: (pos: CursorPos) => void;
  updateCharProps: (pos: CursorPos) => void;
  updateSelectionRects: (anchor: CursorPos, end: CursorPos) => void;

  // Selection
  getSelAnchor: () => CursorPos | null;
  setSelAnchor: (pos: CursorPos | null) => void;
  setHasSelection: (val: boolean) => void;

  // Operations
  saveSnapshot: () => void;
  handleUndo: () => void;
  handleRedo: () => void;
  deleteSelection: () => CursorPos | null;
  insertText: (text: string) => void;
  deleteCharBefore: () => void;
  deleteCharAfter: () => void;

  // Formatting
  toggleBold: () => void;
  toggleItalic: () => void;
  toggleUnderline: () => void;

  // Cell mode
  insertTextInCell: (text: string) => void;
  deleteTextInCell: (forward: boolean) => void;
  splitParagraphInCell: () => void;
  applyCharFormatInCell: (props: Record<string, unknown>) => void;
  getCellCtx: () => {
    secIdx: number;
    parentParaIdx: number;
    controlIdx: number;
    cellIdx: number;
    cellParaIdx: number;
    charOffset: number;
  } | null;
  enterCellMode: (
    secIdx: number,
    paraIdx: number,
    controlIdx: number,
    cellIdx: number,
  ) => void;

  // Header/Footer mode
  insertTextInHf: (text: string) => void;
  deleteTextInHf: (forward: boolean) => void;
  splitParagraphInHf: () => void;

  // Footnote mode
  insertTextInFn: (text: string) => void;
  deleteTextInFn: (forward: boolean) => void;
  splitParagraphInFn: () => void;

  // Edit mode control
  setEditMode: (mode: EditMode) => void;
  clearCellCtx: () => void;
  clearHfCtx: () => void;
  clearFnCtx: () => void;

  // Rerender
  rerenderCurrentPage: () => void;
  rerender: () => void;

  // Paste
  handleHtmlPaste: () => void;

  // Clipboard
  handleCopy: () => void;
  handleCut: () => void;

  // UI
  setFindBarOpen: (open: boolean) => void;
  closeAllDropdowns: () => void;

  // Navigation
  findNextControl: () => void;
  findPrevControl: () => void;
  navigateNextEditable: () => void;

  // Composing ref
  composingRef: React.MutableRefObject<boolean>;
  editModeRef: React.MutableRefObject<EditMode>;
  hiddenInputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
}

interface UseKeyboardReturn {
  handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  handleIMECompositionStart: () => void;
  handleIMECompositionEnd: (e: React.CompositionEvent<HTMLTextAreaElement>) => void;
  handleIMEInput: (e: React.FormEvent<HTMLTextAreaElement>) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useKeyboard(params: UseKeyboardParams): UseKeyboardReturn {
  const {
    editMode,
    getDoc,
    getCursor,
    getCursorRect,
    setCursor,
    setCursorRect,
    moveCursor,
    updateCursorDisplay,
    updateSelectionRects,
    getSelAnchor,
    setSelAnchor,
    setHasSelection,
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
    insertTextInCell,
    deleteTextInCell,
    splitParagraphInCell,
    applyCharFormatInCell,
    getCellCtx,
    enterCellMode,
    insertTextInHf,
    deleteTextInHf,
    splitParagraphInHf,
    insertTextInFn,
    deleteTextInFn,
    splitParagraphInFn,
    setEditMode,
    clearCellCtx,
    clearHfCtx,
    clearFnCtx,
    rerenderCurrentPage,
    handleHtmlPaste,
    handleCopy,
    handleCut,
    setFindBarOpen,
    closeAllDropdowns,
    findNextControl,
    findPrevControl,
    navigateNextEditable,
    composingRef,
    editModeRef,
    hiddenInputRef,
  } = params;

  // ── Cell mode keyboard handler ──────────────────────────────────────────────

  const handleKeyDownCell = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      const ctx = getCellCtx();
      if (!ctx) {
        setEditMode('body');
        clearCellCtx();
        return;
      }
      const ctrl = e.ctrlKey || e.metaKey;

      if (ctrl) {
        switch (e.key.toLowerCase()) {
          case 'z': e.preventDefault(); handleUndo(); return;
          case 'y': e.preventDefault(); handleRedo(); return;
          case 'b': e.preventDefault(); applyCharFormatInCell({ bold: true }); return;
          case 'i': e.preventDefault(); applyCharFormatInCell({ italic: true }); return;
          case 'u': e.preventDefault(); applyCharFormatInCell({ underline: true }); return;
        }
        return;
      }

      switch (e.key) {
        case 'Enter':
          e.preventDefault();
          splitParagraphInCell();
          break;
        case 'Backspace':
          e.preventDefault();
          deleteTextInCell(false);
          break;
        case 'Delete':
          e.preventDefault();
          deleteTextInCell(true);
          break;
        case 'Escape':
          e.preventDefault();
          setEditMode('body');
          clearCellCtx();
          break;
        case 'Tab': {
          e.preventDefault();
          const doc = getDoc();
          if (!doc) break;
          try {
            const dims = parseResult(
              doc.getTableDimensions(ctx.secIdx, ctx.parentParaIdx, ctx.controlIdx),
            );
            if (dims) {
              const total = (dims.rows as number) * (dims.cols as number);
              if (e.shiftKey) {
                // Shift+Tab: move to previous cell
                if (ctx.cellIdx - 1 >= 0) {
                  enterCellMode(
                    ctx.secIdx,
                    ctx.parentParaIdx,
                    ctx.controlIdx,
                    ctx.cellIdx - 1,
                  );
                }
              } else {
                // Tab: move to next cell
                if (ctx.cellIdx + 1 < total) {
                  enterCellMode(
                    ctx.secIdx,
                    ctx.parentParaIdx,
                    ctx.controlIdx,
                    ctx.cellIdx + 1,
                  );
                }
              }
            }
          } catch {
            /* ignore */
          }
          break;
        }
      }
    },
    [
      getCellCtx, setEditMode, clearCellCtx,
      handleUndo, handleRedo,
      applyCharFormatInCell, splitParagraphInCell,
      deleteTextInCell, enterCellMode, getDoc,
    ],
  );

  // ── Header/Footer mode keyboard handler ─────────────────────────────────────

  const handleKeyDownHf = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      // If no HF context, exit to body
      if (editModeRef.current !== 'header' && editModeRef.current !== 'footer') {
        setEditMode('body');
        return;
      }
      const ctrl = e.ctrlKey || e.metaKey;

      if (ctrl) {
        switch (e.key.toLowerCase()) {
          case 'z': e.preventDefault(); handleUndo(); return;
          case 'y': e.preventDefault(); handleRedo(); return;
        }
        return;
      }

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setEditMode('body');
          clearHfCtx();
          break;
        case 'Enter':
          e.preventDefault();
          splitParagraphInHf();
          break;
        case 'Backspace':
          e.preventDefault();
          deleteTextInHf(false);
          break;
        case 'Delete':
          e.preventDefault();
          deleteTextInHf(true);
          break;
      }
    },
    [setEditMode, clearHfCtx, handleUndo, handleRedo, splitParagraphInHf, deleteTextInHf, editModeRef],
  );

  // ── Footnote mode keyboard handler ──────────────────────────────────────────

  const handleKeyDownFn = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (editModeRef.current !== 'footnote') {
        setEditMode('body');
        return;
      }
      const ctrl = e.ctrlKey || e.metaKey;

      if (ctrl) {
        switch (e.key.toLowerCase()) {
          case 'z': e.preventDefault(); handleUndo(); return;
          case 'y': e.preventDefault(); handleRedo(); return;
        }
        return;
      }

      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          setEditMode('body');
          clearFnCtx();
          break;
        case 'Enter':
          e.preventDefault();
          splitParagraphInFn();
          break;
        case 'Backspace':
          e.preventDefault();
          deleteTextInFn(false);
          break;
        case 'Delete':
          e.preventDefault();
          deleteTextInFn(true);
          break;
      }
    },
    [setEditMode, clearFnCtx, handleUndo, handleRedo, splitParagraphInFn, deleteTextInFn, editModeRef],
  );

  // ── Main keyboard handler ───────────────────────────────────────────────────

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (composingRef.current) return;
      const doc = getDoc();
      if (!doc) return;
      const pos = getCursor();
      if (!pos) return;

      // Dispatch to edit-mode-specific handlers
      if (editMode === 'cell') { handleKeyDownCell(e); return; }
      if (editMode === 'header' || editMode === 'footer') { handleKeyDownHf(e); return; }
      if (editMode === 'footnote') { handleKeyDownFn(e); return; }

      const ctrl = e.ctrlKey || e.metaKey;

      // ── Ctrl/Cmd shortcuts ──────────────────────────────────────────────────
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
              setSelAnchor(startPos);
              setCursor(endPos);
              updateSelectionRects(startPos, endPos);
              setHasSelection(true);
              updateCursorDisplay(endPos);
            } catch { /* ignore */ }
            return;
          }
          case 'c': {
            e.preventDefault();
            handleCopy();
            return;
          }
          case 'x': {
            e.preventDefault();
            handleCut();
            return;
          }
          case 'v': {
            e.preventDefault();
            handleHtmlPaste();
            return;
          }
          case 'g': {
            e.preventDefault();
            navigateNextEditable();
            return;
          }
        }
        return;
      }

      // ── Function keys ───────────────────────────────────────────────────────
      if (e.key === 'F11') {
        e.preventDefault();
        if (e.shiftKey) {
          findPrevControl();
        } else {
          findNextControl();
        }
        return;
      }

      // ── Non-modifier keys ───────────────────────────────────────────────────
      switch (e.key) {
        case 'Enter': {
          e.preventDefault();
          saveSnapshot();
          const anchor = getSelAnchor();
          if (anchor) {
            const np = deleteSelection();
            if (np) setCursor(np);
          }
          const curP = getCursor();
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
          rerenderCurrentPage();
          break;
        }

        case 'Backspace':
          e.preventDefault();
          deleteCharBefore();
          break;

        case 'Delete':
          e.preventDefault();
          deleteCharAfter();
          break;

        case 'ArrowLeft': {
          e.preventDefault();
          const np = { ...pos };
          if (pos.charOffset > 0) {
            np.charOffset = pos.charOffset - 1;
          } else if (pos.paraIdx > 0) {
            np.paraIdx = pos.paraIdx - 1;
            try {
              np.charOffset = doc.getParagraphLength(pos.secIdx, np.paraIdx);
            } catch {
              np.charOffset = 0;
            }
          } else {
            break;
          }
          if (e.shiftKey) {
            if (!getSelAnchor()) setSelAnchor({ ...pos });
            setCursor(np);
            updateSelectionRects(getSelAnchor()!, np);
            setHasSelection(true);
            updateCursorDisplay(np);
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
              if (pos.paraIdx < pCount - 1) {
                np.paraIdx = pos.paraIdx + 1;
                np.charOffset = 0;
              } else {
                break;
              }
            }
          } catch {
            break;
          }
          if (e.shiftKey) {
            if (!getSelAnchor()) setSelAnchor({ ...pos });
            setCursor(np);
            updateSelectionRects(getSelAnchor()!, np);
            setHasSelection(true);
            updateCursorDisplay(np);
          } else {
            moveCursor(np);
          }
          break;
        }

        case 'ArrowUp': {
          e.preventDefault();
          const cRect = getCursorRect();
          const cx = cRect ? cRect.x : 0;
          try {
            const rj = doc.moveVertical(
              pos.secIdx, pos.paraIdx, pos.charOffset,
              -1, cx, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
            );
            const r = parseResult(rj);
            if (r) {
              const np: CursorPos = {
                secIdx: (r.sectionIndex as number) ?? pos.secIdx,
                paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
                charOffset: (r.charOffset as number) ?? pos.charOffset,
              };
              if (e.shiftKey) {
                if (!getSelAnchor()) setSelAnchor({ ...pos });
                setCursor(np);
                updateSelectionRects(getSelAnchor()!, np);
                setHasSelection(true);
                updateCursorDisplay(np);
              } else {
                moveCursor(np);
              }
            }
          } catch {
            // fallback: move to previous paragraph
            if (pos.paraIdx > 0) {
              const np: CursorPos = { ...pos, paraIdx: pos.paraIdx - 1 };
              try {
                np.charOffset = Math.min(
                  pos.charOffset,
                  doc.getParagraphLength(pos.secIdx, np.paraIdx),
                );
              } catch {
                np.charOffset = 0;
              }
              if (e.shiftKey) {
                if (!getSelAnchor()) setSelAnchor({ ...pos });
                setCursor(np);
                updateSelectionRects(getSelAnchor()!, np);
                setHasSelection(true);
                updateCursorDisplay(np);
              } else {
                moveCursor(np);
              }
            }
          }
          break;
        }

        case 'ArrowDown': {
          e.preventDefault();
          const cRect2 = getCursorRect();
          const cx2 = cRect2 ? cRect2.x : 0;
          try {
            const rj = doc.moveVertical(
              pos.secIdx, pos.paraIdx, pos.charOffset,
              1, cx2, 0xffffffff, 0xffffffff, 0xffffffff, 0xffffffff,
            );
            const r = parseResult(rj);
            if (r) {
              const np: CursorPos = {
                secIdx: (r.sectionIndex as number) ?? pos.secIdx,
                paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? pos.paraIdx,
                charOffset: (r.charOffset as number) ?? pos.charOffset,
              };
              if (e.shiftKey) {
                if (!getSelAnchor()) setSelAnchor({ ...pos });
                setCursor(np);
                updateSelectionRects(getSelAnchor()!, np);
                setHasSelection(true);
                updateCursorDisplay(np);
              } else {
                moveCursor(np);
              }
            }
          } catch {
            // fallback: move to next paragraph
            try {
              const pCount = doc.getParagraphCount(pos.secIdx);
              if (pos.paraIdx < pCount - 1) {
                const np: CursorPos = { ...pos, paraIdx: pos.paraIdx + 1 };
                np.charOffset = Math.min(
                  pos.charOffset,
                  doc.getParagraphLength(pos.secIdx, np.paraIdx),
                );
                if (e.shiftKey) {
                  if (!getSelAnchor()) setSelAnchor({ ...pos });
                  setCursor(np);
                  updateSelectionRects(getSelAnchor()!, np);
                  setHasSelection(true);
                  updateCursorDisplay(np);
                } else {
                  moveCursor(np);
                }
              }
            } catch { /* ignore */ }
          }
          break;
        }

        case 'Home': {
          e.preventDefault();
          try {
            const li = parseResult(
              doc.getLineInfo(pos.secIdx, pos.paraIdx, pos.charOffset),
            );
            const np: CursorPos = {
              ...pos,
              charOffset: li ? (li.charStart as number) : 0,
            };
            if (e.shiftKey) {
              if (!getSelAnchor()) setSelAnchor({ ...pos });
              setCursor(np);
              updateSelectionRects(getSelAnchor()!, np);
              setHasSelection(true);
              updateCursorDisplay(np);
            } else {
              moveCursor(np);
            }
          } catch { /* ignore */ }
          break;
        }

        case 'End': {
          e.preventDefault();
          try {
            const li = parseResult(
              doc.getLineInfo(pos.secIdx, pos.paraIdx, pos.charOffset),
            );
            const pLen = doc.getParagraphLength(pos.secIdx, pos.paraIdx);
            const np: CursorPos = {
              ...pos,
              charOffset: li ? Math.min(li.charEnd as number, pLen) : pLen,
            };
            if (e.shiftKey) {
              if (!getSelAnchor()) setSelAnchor({ ...pos });
              setCursor(np);
              updateSelectionRects(getSelAnchor()!, np);
              setHasSelection(true);
              updateCursorDisplay(np);
            } else {
              moveCursor(np);
            }
          } catch { /* ignore */ }
          break;
        }

        case 'Tab':
          e.preventDefault();
          insertText('\t');
          break;

        case 'Escape':
          closeAllDropdowns();
          break;
      }
    },
    [
      editMode, composingRef,
      getDoc, getCursor, getCursorRect,
      handleKeyDownCell, handleKeyDownHf, handleKeyDownFn,
      handleUndo, handleRedo,
      toggleBold, toggleItalic, toggleUnderline,
      insertText, deleteSelection, deleteCharBefore, deleteCharAfter,
      saveSnapshot, moveCursor, rerenderCurrentPage,
      updateSelectionRects, updateCursorDisplay,
      setCursor, setCursorRect, setSelAnchor, setHasSelection,
      getSelAnchor, handleHtmlPaste, handleCopy, handleCut,
      setFindBarOpen, closeAllDropdowns,
      findNextControl, findPrevControl, navigateNextEditable,
    ],
  );

  // ── IME handlers ────────────────────────────────────────────────────────────

  const handleIMECompositionStart = useCallback(() => {
    composingRef.current = true;
  }, [composingRef]);

  const handleIMECompositionEnd = useCallback(
    (e: React.CompositionEvent<HTMLTextAreaElement>) => {
      composingRef.current = false;
      const text = e.data;
      if (text) {
        const mode = editModeRef.current;
        if (mode === 'cell') insertTextInCell(text);
        else if (mode === 'header' || mode === 'footer') insertTextInHf(text);
        else if (mode === 'footnote') insertTextInFn(text);
        else insertText(text);
      }
      if (hiddenInputRef.current) hiddenInputRef.current.value = '';
    },
    [composingRef, editModeRef, hiddenInputRef, insertText, insertTextInCell, insertTextInHf, insertTextInFn],
  );

  const handleIMEInput = useCallback(
    (e: React.FormEvent<HTMLTextAreaElement>) => {
      if (composingRef.current) return;
      const target = e.target as HTMLTextAreaElement;
      const val = target.value;
      if (val) {
        const mode = editModeRef.current;
        if (mode === 'cell') insertTextInCell(val);
        else if (mode === 'header' || mode === 'footer') insertTextInHf(val);
        else if (mode === 'footnote') insertTextInFn(val);
        else insertText(val);
        target.value = '';
      }
    },
    [composingRef, editModeRef, insertText, insertTextInCell, insertTextInHf, insertTextInFn],
  );

  return {
    handleKeyDown,
    handleIMECompositionStart,
    handleIMECompositionEnd,
    handleIMEInput,
  };
}
