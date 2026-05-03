/**
 * useNavigation.ts — Phase 8: Navigation system hook
 *
 * Implements 5 new WASM-backed navigation APIs for traversing controls,
 * editable areas, and nested table structures within an HWP document.
 *
 * APIs:
 *   - findNearestControlForward   (F11)
 *   - findNearestControlBackward  (Shift+F11)
 *   - findNextEditableControl     (Tab / Shift+Tab in form/table)
 *   - navigateNextEditable        (DFS: body → cell → shape → footnote)
 *   - moveVerticalByPath          (vertical nav in nested tables)
 */

import { useCallback } from 'react';
import type { CursorPos, EditMode } from './useEditorState';

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Safely parse a JSON string returned from WASM into a plain object.
 * Returns null on any parse error so callers can bail out gracefully.
 */
function parseResult(json: string): Record<string, unknown> | null {
  try {
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Param / Return types
// ─────────────────────────────────────────────────────────────────────────────

export interface UseNavigationParams {
  /** Return the current WASM HwpDocument instance (or null if not loaded). */
  getDoc: () => any | null;
  /** Return the current cursor position (ref-based, synchronous). */
  getCursor: () => CursorPos;
  /** Move the cursor to a new position, optionally clearing the selection. */
  moveCursor: (pos: CursorPos, clearSel?: boolean) => void;
  /** Current edit mode (body, cell, header, footer, footnote). */
  editMode: EditMode;
  /** Switch the editor into a different edit mode. */
  setEditMode: (mode: EditMode) => void;
  /** Enter cell editing mode for a specific table cell. */
  enterCellMode: (
    secIdx: number,
    paraIdx: number,
    controlIdx: number,
    cellIdx: number,
  ) => void;
  /** Trigger a React re-render (e.g. bump renderVer). */
  rerender: () => void;
}

export interface UseNavigationReturn {
  /** F11: Find the next control forward from the current cursor position. */
  findNextControl: () => void;
  /** Shift+F11: Find the previous control backward from the current cursor. */
  findPrevControl: () => void;
  /** Tab in form/table: Jump to the next editable control (forward). */
  findNextEditable: () => void;
  /** Shift+Tab in form/table: Jump to the previous editable control. */
  findPrevEditable: () => void;
  /** DFS traversal through all editable areas: body -> cells -> shapes -> footnotes. */
  navigateNextEditable: () => void;
  /** Navigate vertically in nested tables using a cell path array. */
  moveVerticalByPath: (path: number[], direction: number, xHint: number) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook
// ─────────────────────────────────────────────────────────────────────────────

export function useNavigation({
  getDoc,
  getCursor,
  moveCursor,
  editMode: _editMode,
  setEditMode,
  enterCellMode,
  rerender,
}: UseNavigationParams): UseNavigationReturn {

  // ── Resolve edit-mode from a WASM result object ─────────────────────────
  const resolveEditMode = useCallback(
    (r: Record<string, unknown>) => {
      const mode = r.editMode as string | undefined;
      if (mode === 'cell' || mode === 'header' || mode === 'footer' || mode === 'footnote') {
        setEditMode(mode);
      } else if (mode === 'body') {
        setEditMode('body');
      }
    },
    [setEditMode],
  );

  // ── Extract a CursorPos from a WASM result, falling back to current ─────
  const extractCursorPos = useCallback(
    (r: Record<string, unknown>, fallback: CursorPos): CursorPos => {
      return {
        secIdx: (r.sectionIndex as number) ?? fallback.secIdx,
        paraIdx: ((r.paragraphIndex ?? r.paraIdx) as number) ?? fallback.paraIdx,
        charOffset: (r.charOffset as number) ?? fallback.charOffset,
      };
    },
    [],
  );

  // ─────────────────────────────────────────────────────────────────────────
  // 1. findNextControl  (F11)
  //    Calls doc.findNearestControlForward(secIdx, paraIdx, charOffset)
  // ─────────────────────────────────────────────────────────────────────────

  const findNextControl = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const pos = getCursor();

    try {
      const rj: string = doc.findNearestControlForward(
        pos.secIdx,
        pos.paraIdx,
        pos.charOffset,
      );
      const r = parseResult(rj);
      if (!r || !r.found) return;

      const np = extractCursorPos(r, pos);
      moveCursor(np);

      // If the found control is a table, enter cell mode on the first cell
      if (r.controlType === 'table') {
        enterCellMode(
          np.secIdx,
          np.paraIdx,
          (r.controlIdx as number) ?? 0,
          0,
        );
      }

      rerender();
    } catch {
      /* WASM call failed — silently ignore */
    }
  }, [getDoc, getCursor, moveCursor, enterCellMode, extractCursorPos, rerender]);

  // ─────────────────────────────────────────────────────────────────────────
  // 2. findPrevControl  (Shift+F11)
  //    Calls doc.findNearestControlBackward(secIdx, paraIdx, charOffset)
  // ─────────────────────────────────────────────────────────────────────────

  const findPrevControl = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const pos = getCursor();

    try {
      const rj: string = doc.findNearestControlBackward(
        pos.secIdx,
        pos.paraIdx,
        pos.charOffset,
      );
      const r = parseResult(rj);
      if (!r || !r.found) return;

      const np = extractCursorPos(r, pos);
      moveCursor(np);

      // If the found control is a table, enter cell mode on the first cell
      if (r.controlType === 'table') {
        enterCellMode(
          np.secIdx,
          np.paraIdx,
          (r.controlIdx as number) ?? 0,
          0,
        );
      }

      rerender();
    } catch {
      /* WASM call failed — silently ignore */
    }
  }, [getDoc, getCursor, moveCursor, enterCellMode, extractCursorPos, rerender]);

  // ─────────────────────────────────────────────────────────────────────────
  // 3. findNextEditable  (Tab in form/table)
  //    Calls doc.findNextEditableControl(secIdx, paraIdx, charOffset, true)
  // ─────────────────────────────────────────────────────────────────────────

  const findNextEditable = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const pos = getCursor();

    try {
      const rj: string = doc.findNextEditableControl(
        pos.secIdx,
        pos.paraIdx,
        pos.charOffset,
        true, // forward
      );
      const r = parseResult(rj);
      if (!r || !r.found) return;

      const np = extractCursorPos(r, pos);
      moveCursor(np, true);

      // Resolve edit mode if the editable control lives in a sub-context
      resolveEditMode(r);

      // If we landed in a table cell, enter cell editing
      if (r.controlType === 'table' || r.editMode === 'cell') {
        enterCellMode(
          np.secIdx,
          (r.parentParaIdx as number) ?? np.paraIdx,
          (r.controlIdx as number) ?? 0,
          (r.cellIdx as number) ?? 0,
        );
      }

      rerender();
    } catch {
      /* WASM call failed — silently ignore */
    }
  }, [getDoc, getCursor, moveCursor, enterCellMode, resolveEditMode, extractCursorPos, rerender]);

  // ─────────────────────────────────────────────────────────────────────────
  // 4. findPrevEditable  (Shift+Tab in form/table)
  //    Calls doc.findNextEditableControl(secIdx, paraIdx, charOffset, false)
  // ─────────────────────────────────────────────────────────────────────────

  const findPrevEditable = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const pos = getCursor();

    try {
      const rj: string = doc.findNextEditableControl(
        pos.secIdx,
        pos.paraIdx,
        pos.charOffset,
        false, // backward
      );
      const r = parseResult(rj);
      if (!r || !r.found) return;

      const np = extractCursorPos(r, pos);
      moveCursor(np, true);

      // Resolve edit mode if the editable control lives in a sub-context
      resolveEditMode(r);

      // If we landed in a table cell, enter cell editing
      if (r.controlType === 'table' || r.editMode === 'cell') {
        enterCellMode(
          np.secIdx,
          (r.parentParaIdx as number) ?? np.paraIdx,
          (r.controlIdx as number) ?? 0,
          (r.cellIdx as number) ?? 0,
        );
      }

      rerender();
    } catch {
      /* WASM call failed — silently ignore */
    }
  }, [getDoc, getCursor, moveCursor, enterCellMode, resolveEditMode, extractCursorPos, rerender]);

  // ─────────────────────────────────────────────────────────────────────────
  // 5. navigateNextEditable
  //    DFS traversal: body -> cells -> shapes -> footnotes
  //    Calls doc.navigateNextEditable(secIdx, paraIdx, charOffset)
  // ─────────────────────────────────────────────────────────────────────────

  const navigateNextEditable = useCallback(() => {
    const doc = getDoc();
    if (!doc) return;

    const pos = getCursor();

    try {
      const rj: string = doc.navigateNextEditable(
        pos.secIdx,
        pos.paraIdx,
        pos.charOffset,
      );
      const r = parseResult(rj);
      if (!r || !r.found) return;

      const np = extractCursorPos(r, pos);
      moveCursor(np, true);

      // Determine which edit mode to enter based on the WASM result
      const targetMode = r.editMode as string | undefined;

      switch (targetMode) {
        case 'cell':
          setEditMode('cell');
          enterCellMode(
            np.secIdx,
            (r.parentParaIdx as number) ?? np.paraIdx,
            (r.controlIdx as number) ?? 0,
            (r.cellIdx as number) ?? 0,
          );
          break;

        case 'header':
          setEditMode('header');
          break;

        case 'footer':
          setEditMode('footer');
          break;

        case 'footnote':
          setEditMode('footnote');
          break;

        case 'body':
        default:
          setEditMode('body');
          break;
      }

      rerender();
    } catch {
      /* WASM call failed — silently ignore */
    }
  }, [getDoc, getCursor, moveCursor, setEditMode, enterCellMode, extractCursorPos, rerender]);

  // ─────────────────────────────────────────────────────────────────────────
  // 6. moveVerticalByPath
  //    Vertical navigation in nested tables using a cell path array.
  //    Calls doc.moveVerticalByPath(JSON.stringify(path), direction, xHint)
  //
  //    @param path      - Array of cell indices describing the nesting path
  //    @param direction - Positive = down, negative = up
  //    @param xHint     - Horizontal pixel coordinate hint for column affinity
  // ─────────────────────────────────────────────────────────────────────────

  const moveVerticalByPath = useCallback(
    (path: number[], direction: number, xHint: number) => {
      const doc = getDoc();
      if (!doc) return;

      const pos = getCursor();

      try {
        const rj: string = doc.moveVerticalByPath(
          JSON.stringify(path),
          direction,
          xHint,
        );
        const r = parseResult(rj);
        if (!r || !r.found) return;

        const np = extractCursorPos(r, pos);
        moveCursor(np, true);

        // If a new path was returned, the caller may need it for subsequent
        // vertical movements. We handle re-entering cell mode here if needed.
        if (r.editMode === 'cell') {
          setEditMode('cell');
          enterCellMode(
            np.secIdx,
            (r.parentParaIdx as number) ?? np.paraIdx,
            (r.controlIdx as number) ?? 0,
            (r.cellIdx as number) ?? 0,
          );
        } else if (r.editMode === 'body') {
          setEditMode('body');
        }

        rerender();
      } catch {
        /* WASM call failed — silently ignore */
      }
    },
    [getDoc, getCursor, moveCursor, setEditMode, enterCellMode, extractCursorPos, rerender],
  );

  // ─────────────────────────────────────────────────────────────────────────
  // Public API
  // ─────────────────────────────────────────────────────────────────────────

  return {
    findNextControl,
    findPrevControl,
    findNextEditable,
    findPrevEditable,
    navigateNextEditable,
    moveVerticalByPath,
  };
}
