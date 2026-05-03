/**
 * useCellEditing.ts — Phase 2: Cell editing system hook
 *
 * Encapsulates ALL cell-level editing operations: text insertion/deletion,
 * paragraph splitting/merging, character/paragraph formatting, cell property
 * queries and mutations, in-cell selection management, and cursor tracking.
 *
 * 17 New APIs:
 *   applyCharFormatInCell, applyParaFormatInCell, applyCellStyle,
 *   getCellCharPropertiesAt, getCellParaPropertiesAt, getCellStyleAt,
 *   getCellProperties, setCellProperties, getCellInfo,
 *   getCellParagraphCount, getCellParagraphLength, getCellTextDirection,
 *   getSelectionRectsInCell, deleteRangeInCell, getCursorRectInCell,
 *   getLineInfoInCell, getTextInCell
 *
 * Migrated from HwpEditor.tsx:
 *   insertTextInCell, deleteTextInCell, splitParagraphInCell, mergeParagraphInCell
 */

import { useCallback, useState } from 'react';

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

export interface CellContext {
  secIdx: number;
  parentParaIdx: number;
  controlIdx: number;
  cellIdx: number;
  cellParaIdx: number;
  charOffset: number;
}

export interface CellProperties {
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  verticalAlign: string;
  textDirection: string;
  isHeader: boolean;
  borderLeft: string;
  borderRight: string;
  borderTop: string;
  borderBottom: string;
  backgroundColor: number;
}

export interface CellSelectionRect {
  pageIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface CellSelectionState {
  anchor: { cellParaIdx: number; charOffset: number } | null;
  rects: CellSelectionRect[];
}

export interface CursorRectState {
  pageIndex: number;
  x: number;
  y: number;
  height: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook Parameters
// ─────────────────────────────────────────────────────────────────────────────

export interface UseCellEditingParams {
  getDoc: () => any | null;
  getCellCtx: () => CellContext | null;
  updateCellCtx: (updates: Partial<CellContext>) => void;
  saveSnapshot: () => void;
  rerender: () => void;
  rerenderCurrentPage: () => void;
  setCursorRect: (rect: CursorRectState | null) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook Return Type
// ─────────────────────────────────────────────────────────────────────────────

export interface UseCellEditingReturn {
  // Cell formatting
  applyCharFormatInCell: (props: Record<string, unknown>) => void;
  applyParaFormatInCell: (props: Record<string, unknown>) => void;
  applyCellStyle: (styleId: number) => void;

  // Cell properties — query
  getCellCharProps: () => Record<string, unknown> | null;
  getCellParaProps: () => Record<string, unknown> | null;
  getCellStyleAt: () => Record<string, unknown> | null;
  getCellProperties: () => CellProperties | null;
  getCellInfo: () => Record<string, unknown> | null;
  getCellParagraphCount: () => number;
  getCellParagraphLength: (cellParaIdx: number) => number;
  getCellTextDirection: () => string;
  getTextInCell: () => string;

  // Cell properties — mutation
  setCellProperties: (props: Partial<CellProperties>) => void;

  // Selection in cell
  cellSelection: CellSelectionState;
  startCellSelection: (cellParaIdx: number, charOffset: number) => void;
  updateCellSelection: (cellParaIdx: number, charOffset: number) => void;
  clearCellSelection: () => void;
  deleteRangeInCell: () => { cellParaIdx: number; charOffset: number } | null;

  // Cursor in cell
  updateCellCursorRect: () => void;
  getLineInfoInCell: () => Record<string, unknown> | null;

  // Text operations (migrated from HwpEditor.tsx)
  insertTextInCell: (text: string) => void;
  deleteTextInCell: (forward: boolean) => void;
  splitParagraphInCell: () => void;
  mergeParagraphInCell: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Hook Implementation
// ─────────────────────────────────────────────────────────────────────────────

export function useCellEditing(params: UseCellEditingParams): UseCellEditingReturn {
  const {
    getDoc,
    getCellCtx,
    updateCellCtx,
    saveSnapshot,
    rerender,
    rerenderCurrentPage: _rerenderCurrentPage,
    setCursorRect,
  } = params;

  // ── In-cell selection state ──────────────────────────────────────────────
  const [cellSelection, setCellSelection] = useState<CellSelectionState>({
    anchor: null,
    rects: [],
  });

  // ── Helper: update cursor rect after position changes ────────────────────
  const refreshCursorRect = useCallback(
    (ctx: CellContext) => {
      const doc = getDoc();
      if (!doc) return;
      try {
        const cr = parseResult(
          doc.getCursorRectInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            ctx.cellParaIdx,
            ctx.charOffset,
          ),
        );
        if (cr && cr.x !== undefined) {
          setCursorRect({
            pageIndex: (cr.pageIndex as number) ?? 0,
            x: cr.x as number,
            y: cr.y as number,
            height: cr.height as number,
          });
        }
      } catch {
        /* ignore — cursor rect unavailable */
      }
    },
    [getDoc, setCursorRect],
  );

  // ── Helper: normalise selection range (ensure start <= end) ──────────────
  const normaliseRange = useCallback(
    (
      anchor: { cellParaIdx: number; charOffset: number },
      current: { cellParaIdx: number; charOffset: number },
    ) => {
      if (
        anchor.cellParaIdx < current.cellParaIdx ||
        (anchor.cellParaIdx === current.cellParaIdx && anchor.charOffset <= current.charOffset)
      ) {
        return {
          startPara: anchor.cellParaIdx,
          startOff: anchor.charOffset,
          endPara: current.cellParaIdx,
          endOff: current.charOffset,
        };
      }
      return {
        startPara: current.cellParaIdx,
        startOff: current.charOffset,
        endPara: anchor.cellParaIdx,
        endOff: anchor.charOffset,
      };
    },
    [],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 1. applyCharFormatInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const applyCharFormatInCell = useCallback(
    (props: Record<string, unknown>) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        // If there is an active selection, apply to the selection range;
        // otherwise apply at the single character at the cursor position.
        if (cellSelection.anchor) {
          const { startPara, startOff, endPara, endOff } = normaliseRange(
            cellSelection.anchor,
            { cellParaIdx: ctx.cellParaIdx, charOffset: ctx.charOffset },
          );
          doc.applyCharFormatInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            startPara,
            startOff,
            endOff,
            JSON.stringify(props),
          );
          // If range spans multiple paragraphs, apply to each paragraph segment
          if (startPara !== endPara) {
            for (let p = startPara; p <= endPara; p++) {
              const so = p === startPara ? startOff : 0;
              const eo =
                p === endPara
                  ? endOff
                  : (() => {
                      try {
                        return doc.getCellParagraphLength(
                          ctx.secIdx,
                          ctx.parentParaIdx,
                          ctx.controlIdx,
                          ctx.cellIdx,
                          p,
                        ) as number;
                      } catch {
                        return 0;
                      }
                    })();
              try {
                doc.applyCharFormatInCell(
                  ctx.secIdx,
                  ctx.parentParaIdx,
                  ctx.controlIdx,
                  ctx.cellIdx,
                  p,
                  so,
                  eo,
                  JSON.stringify(props),
                );
              } catch {
                /* ignore individual paragraph errors */
              }
            }
          }
        } else {
          doc.applyCharFormatInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            ctx.cellParaIdx,
            ctx.charOffset,
            ctx.charOffset + 1,
            JSON.stringify(props),
          );
        }
      } catch {
        /* ignore */
      }
      rerender();
    },
    [getDoc, getCellCtx, saveSnapshot, rerender, cellSelection.anchor, normaliseRange],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 2. applyParaFormatInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const applyParaFormatInCell = useCallback(
    (props: Record<string, unknown>) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        doc.applyParaFormatInCell(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          ctx.cellParaIdx,
          JSON.stringify(props),
        );
      } catch {
        /* ignore */
      }
      rerender();
    },
    [getDoc, getCellCtx, saveSnapshot, rerender],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 3. applyCellStyle
  // ═══════════════════════════════════════════════════════════════════════════

  const applyCellStyle = useCallback(
    (styleId: number) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        doc.applyCellStyle(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          styleId,
        );
      } catch {
        /* ignore */
      }
      rerender();
    },
    [getDoc, getCellCtx, saveSnapshot, rerender],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 4. getCellCharProps
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellCharProps = useCallback((): Record<string, unknown> | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getCellCharPropertiesAt(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
        ctx.charOffset,
      );
      return parseResult(json);
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 5. getCellParaProps
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellParaProps = useCallback((): Record<string, unknown> | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getCellParaPropertiesAt(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
      );
      return parseResult(json);
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 6. getCellStyleAt
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellStyleAtFn = useCallback((): Record<string, unknown> | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getCellStyleAt(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
      );
      return parseResult(json);
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 7. getCellProperties
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellPropertiesFn = useCallback((): CellProperties | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getCellProperties(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
      );
      const raw = parseResult(json);
      if (!raw) return null;
      return {
        paddingLeft: (raw.paddingLeft as number) ?? 0,
        paddingRight: (raw.paddingRight as number) ?? 0,
        paddingTop: (raw.paddingTop as number) ?? 0,
        paddingBottom: (raw.paddingBottom as number) ?? 0,
        verticalAlign: (raw.verticalAlign as string) ?? 'top',
        textDirection: (raw.textDirection as string) ?? 'horizontal',
        isHeader: (raw.isHeader as boolean) ?? false,
        borderLeft: (raw.borderLeft as string) ?? 'none',
        borderRight: (raw.borderRight as string) ?? 'none',
        borderTop: (raw.borderTop as string) ?? 'none',
        borderBottom: (raw.borderBottom as string) ?? 'none',
        backgroundColor: (raw.backgroundColor as number) ?? 0xffffff,
      };
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 8. setCellProperties
  // ═══════════════════════════════════════════════════════════════════════════

  const setCellPropertiesFn = useCallback(
    (props: Partial<CellProperties>) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;
      saveSnapshot();
      try {
        doc.setCellProperties(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          JSON.stringify(props),
        );
      } catch {
        /* ignore */
      }
      rerender();
    },
    [getDoc, getCellCtx, saveSnapshot, rerender],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 9. getCellInfo
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellInfoFn = useCallback((): Record<string, unknown> | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getCellInfo(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
      );
      return parseResult(json);
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 10. getCellParagraphCount
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellParagraphCountFn = useCallback((): number => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return 0;
    try {
      return doc.getCellParagraphCount(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
      ) as number;
    } catch {
      return 0;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 11. getCellParagraphLength
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellParagraphLengthFn = useCallback(
    (cellParaIdx: number): number => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return 0;
      try {
        return doc.getCellParagraphLength(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          cellParaIdx,
        ) as number;
      } catch {
        return 0;
      }
    },
    [getDoc, getCellCtx],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // 12. getCellTextDirection
  // ═══════════════════════════════════════════════════════════════════════════

  const getCellTextDirectionFn = useCallback((): string => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return 'horizontal';
    try {
      return doc.getCellTextDirection(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
      ) as string;
    } catch {
      return 'horizontal';
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 13. getTextInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const getTextInCellFn = useCallback((): string => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return '';
    try {
      const length = doc.getCellParagraphLength(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
      ) as number;
      return doc.getTextInCell(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
        0,
        length,
      ) as string;
    } catch {
      return '';
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 14. Selection management: start / update / clear / getSelectionRectsInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const startCellSelection = useCallback(
    (cellParaIdx: number, charOffset: number) => {
      setCellSelection({
        anchor: { cellParaIdx, charOffset },
        rects: [],
      });
    },
    [],
  );

  const updateCellSelection = useCallback(
    (cellParaIdx: number, charOffset: number) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx || !cellSelection.anchor) return;

      const { startPara, startOff, endPara, endOff } = normaliseRange(
        cellSelection.anchor,
        { cellParaIdx, charOffset },
      );

      try {
        const json = doc.getSelectionRectsInCell(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          startPara,
          startOff,
          endPara,
          endOff,
        );
        const parsed = parseResult(json);
        const rects: CellSelectionRect[] = Array.isArray(parsed?.rects)
          ? (parsed.rects as CellSelectionRect[])
          : [];
        setCellSelection((prev) => ({ ...prev, rects }));
      } catch {
        /* ignore */
      }

      // Update cell context to reflect the current end of selection
      updateCellCtx({ cellParaIdx, charOffset });
    },
    [getDoc, getCellCtx, cellSelection.anchor, normaliseRange, updateCellCtx],
  );

  const clearCellSelection = useCallback(() => {
    setCellSelection({ anchor: null, rects: [] });
  }, []);

  // ═══════════════════════════════════════════════════════════════════════════
  // 15. deleteRangeInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const deleteRangeInCellFn = useCallback((): {
    cellParaIdx: number;
    charOffset: number;
  } | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx || !cellSelection.anchor) return null;

    const { startPara, startOff, endPara, endOff } = normaliseRange(
      cellSelection.anchor,
      { cellParaIdx: ctx.cellParaIdx, charOffset: ctx.charOffset },
    );

    // Nothing to delete if start equals end
    if (startPara === endPara && startOff === endOff) return null;

    saveSnapshot();
    try {
      const json = doc.deleteRangeInCell(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        startPara,
        startOff,
        endPara,
        endOff,
      );
      const r = parseResult(json);
      const newPos = {
        cellParaIdx: (r?.paraIdx as number) ?? startPara,
        charOffset: (r?.charOffset as number) ?? startOff,
      };

      // Update context to new cursor position
      updateCellCtx(newPos);

      // Clear selection
      setCellSelection({ anchor: null, rects: [] });

      rerender();
      refreshCursorRect({
        ...ctx,
        cellParaIdx: newPos.cellParaIdx,
        charOffset: newPos.charOffset,
      });

      return newPos;
    } catch {
      return null;
    }
  }, [
    getDoc,
    getCellCtx,
    cellSelection.anchor,
    normaliseRange,
    saveSnapshot,
    rerender,
    updateCellCtx,
    refreshCursorRect,
  ]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 16. updateCellCursorRect (getCursorRectInCell)
  // ═══════════════════════════════════════════════════════════════════════════

  const updateCellCursorRect = useCallback(() => {
    const ctx = getCellCtx();
    if (!ctx) return;
    refreshCursorRect(ctx);
  }, [getCellCtx, refreshCursorRect]);

  // ═══════════════════════════════════════════════════════════════════════════
  // 17. getLineInfoInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const getLineInfoInCellFn = useCallback((): Record<string, unknown> | null => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return null;
    try {
      const json = doc.getLineInfoInCell(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
        ctx.charOffset,
      );
      return parseResult(json);
    } catch {
      return null;
    }
  }, [getDoc, getCellCtx]);

  // ═══════════════════════════════════════════════════════════════════════════
  // Migrated: insertTextInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const insertTextInCell = useCallback(
    (text: string) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;

      // If there is an active selection, delete it first
      if (cellSelection.anchor) {
        const { startPara, startOff, endPara, endOff } = normaliseRange(
          cellSelection.anchor,
          { cellParaIdx: ctx.cellParaIdx, charOffset: ctx.charOffset },
        );
        if (startPara !== endPara || startOff !== endOff) {
          saveSnapshot();
          try {
            const dj = doc.deleteRangeInCell(
              ctx.secIdx,
              ctx.parentParaIdx,
              ctx.controlIdx,
              ctx.cellIdx,
              startPara,
              startOff,
              endPara,
              endOff,
            );
            const dr = parseResult(dj);
            updateCellCtx({
              cellParaIdx: (dr?.paraIdx as number) ?? startPara,
              charOffset: (dr?.charOffset as number) ?? startOff,
            });
          } catch {
            /* ignore */
          }
          setCellSelection({ anchor: null, rects: [] });
          // Re-read ctx after update
          const updatedCtx = getCellCtx();
          if (!updatedCtx) return;
          try {
            const rj = doc.insertTextInCell(
              updatedCtx.secIdx,
              updatedCtx.parentParaIdx,
              updatedCtx.controlIdx,
              updatedCtx.cellIdx,
              updatedCtx.cellParaIdx,
              updatedCtx.charOffset,
              text,
            );
            const r = parseResult(rj);
            updateCellCtx({
              charOffset: (r?.charOffset as number) ?? updatedCtx.charOffset + text.length,
            });
            rerender();
            const afterCtx = getCellCtx();
            if (afterCtx) refreshCursorRect(afterCtx);
          } catch {
            /* ignore */
          }
          return;
        }
      }

      saveSnapshot();
      try {
        const rj = doc.insertTextInCell(
          ctx.secIdx,
          ctx.parentParaIdx,
          ctx.controlIdx,
          ctx.cellIdx,
          ctx.cellParaIdx,
          ctx.charOffset,
          text,
        );
        const r = parseResult(rj);
        updateCellCtx({
          charOffset: (r?.charOffset as number) ?? ctx.charOffset + text.length,
        });
        rerender();
        const updatedCtx = getCellCtx();
        if (updatedCtx) refreshCursorRect(updatedCtx);
      } catch {
        /* ignore */
      }
    },
    [
      getDoc,
      getCellCtx,
      saveSnapshot,
      rerender,
      updateCellCtx,
      refreshCursorRect,
      cellSelection.anchor,
      normaliseRange,
    ],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // Migrated: deleteTextInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const deleteTextInCell = useCallback(
    (forward: boolean) => {
      const doc = getDoc();
      const ctx = getCellCtx();
      if (!doc || !ctx) return;

      // If there is an active selection, delete the range instead
      if (cellSelection.anchor) {
        const { startPara, startOff, endPara, endOff } = normaliseRange(
          cellSelection.anchor,
          { cellParaIdx: ctx.cellParaIdx, charOffset: ctx.charOffset },
        );
        if (startPara !== endPara || startOff !== endOff) {
          saveSnapshot();
          try {
            const json = doc.deleteRangeInCell(
              ctx.secIdx,
              ctx.parentParaIdx,
              ctx.controlIdx,
              ctx.cellIdx,
              startPara,
              startOff,
              endPara,
              endOff,
            );
            const r = parseResult(json);
            updateCellCtx({
              cellParaIdx: (r?.paraIdx as number) ?? startPara,
              charOffset: (r?.charOffset as number) ?? startOff,
            });
          } catch {
            /* ignore */
          }
          setCellSelection({ anchor: null, rects: [] });
          rerender();
          const updatedCtx = getCellCtx();
          if (updatedCtx) refreshCursorRect(updatedCtx);
          return;
        }
      }

      saveSnapshot();
      try {
        if (!forward && ctx.charOffset > 0) {
          // Backspace within paragraph
          doc.deleteTextInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            ctx.cellParaIdx,
            ctx.charOffset - 1,
            1,
          );
          updateCellCtx({ charOffset: ctx.charOffset - 1 });
        } else if (!forward && ctx.charOffset === 0 && ctx.cellParaIdx > 0) {
          // Backspace at start of paragraph — merge with previous
          const rj = doc.mergeParagraphInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            ctx.cellParaIdx,
          );
          const r = parseResult(rj);
          updateCellCtx({
            cellParaIdx: (r?.paraIdx as number) ?? ctx.cellParaIdx - 1,
            charOffset: (r?.charOffset as number) ?? 0,
          });
        } else if (forward) {
          // Delete forward
          doc.deleteTextInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            ctx.cellParaIdx,
            ctx.charOffset,
            1,
          );
        }
        rerender();
        const updatedCtx = getCellCtx();
        if (updatedCtx) refreshCursorRect(updatedCtx);
      } catch {
        /* ignore */
      }
    },
    [
      getDoc,
      getCellCtx,
      saveSnapshot,
      rerender,
      updateCellCtx,
      refreshCursorRect,
      cellSelection.anchor,
      normaliseRange,
    ],
  );

  // ═══════════════════════════════════════════════════════════════════════════
  // Migrated: splitParagraphInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const splitParagraphInCell = useCallback(() => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return;

    // Delete selection first if active
    if (cellSelection.anchor) {
      const { startPara, startOff, endPara, endOff } = normaliseRange(
        cellSelection.anchor,
        { cellParaIdx: ctx.cellParaIdx, charOffset: ctx.charOffset },
      );
      if (startPara !== endPara || startOff !== endOff) {
        try {
          const dj = doc.deleteRangeInCell(
            ctx.secIdx,
            ctx.parentParaIdx,
            ctx.controlIdx,
            ctx.cellIdx,
            startPara,
            startOff,
            endPara,
            endOff,
          );
          const dr = parseResult(dj);
          updateCellCtx({
            cellParaIdx: (dr?.paraIdx as number) ?? startPara,
            charOffset: (dr?.charOffset as number) ?? startOff,
          });
        } catch {
          /* ignore */
        }
        setCellSelection({ anchor: null, rects: [] });
      }
    }

    // Re-read context after potential deletion
    const currentCtx = getCellCtx();
    if (!currentCtx) return;

    saveSnapshot();
    try {
      const rj = doc.splitParagraphInCell(
        currentCtx.secIdx,
        currentCtx.parentParaIdx,
        currentCtx.controlIdx,
        currentCtx.cellIdx,
        currentCtx.cellParaIdx,
        currentCtx.charOffset,
      );
      const r = parseResult(rj);
      updateCellCtx({
        cellParaIdx: (r?.paraIdx as number) ?? currentCtx.cellParaIdx + 1,
        charOffset: 0,
      });
      rerender();
      const updatedCtx = getCellCtx();
      if (updatedCtx) refreshCursorRect(updatedCtx);
    } catch {
      /* ignore */
    }
  }, [
    getDoc,
    getCellCtx,
    saveSnapshot,
    rerender,
    updateCellCtx,
    refreshCursorRect,
    cellSelection.anchor,
    normaliseRange,
  ]);

  // ═══════════════════════════════════════════════════════════════════════════
  // Migrated: mergeParagraphInCell
  // ═══════════════════════════════════════════════════════════════════════════

  const mergeParagraphInCell = useCallback(() => {
    const doc = getDoc();
    const ctx = getCellCtx();
    if (!doc || !ctx) return;
    if (ctx.cellParaIdx <= 0) return;
    saveSnapshot();
    try {
      const rj = doc.mergeParagraphInCell(
        ctx.secIdx,
        ctx.parentParaIdx,
        ctx.controlIdx,
        ctx.cellIdx,
        ctx.cellParaIdx,
      );
      const r = parseResult(rj);
      updateCellCtx({
        cellParaIdx: (r?.paraIdx as number) ?? ctx.cellParaIdx - 1,
        charOffset: (r?.charOffset as number) ?? 0,
      });
      rerender();
      const updatedCtx = getCellCtx();
      if (updatedCtx) refreshCursorRect(updatedCtx);
    } catch {
      /* ignore */
    }
  }, [getDoc, getCellCtx, saveSnapshot, rerender, updateCellCtx, refreshCursorRect]);

  // ─────────────────────────────────────────────────────────────────────────
  // Return
  // ─────────────────────────────────────────────────────────────────────────

  return {
    // Cell formatting
    applyCharFormatInCell,
    applyParaFormatInCell,
    applyCellStyle,

    // Cell properties — query
    getCellCharProps,
    getCellParaProps,
    getCellStyleAt: getCellStyleAtFn,
    getCellProperties: getCellPropertiesFn,
    getCellInfo: getCellInfoFn,
    getCellParagraphCount: getCellParagraphCountFn,
    getCellParagraphLength: getCellParagraphLengthFn,
    getCellTextDirection: getCellTextDirectionFn,
    getTextInCell: getTextInCellFn,

    // Cell properties — mutation
    setCellProperties: setCellPropertiesFn,

    // Selection in cell
    cellSelection,
    startCellSelection,
    updateCellSelection,
    clearCellSelection,
    deleteRangeInCell: deleteRangeInCellFn,

    // Cursor in cell
    updateCellCursorRect,
    getLineInfoInCell: getLineInfoInCellFn,

    // Text operations (migrated)
    insertTextInCell,
    deleteTextInCell,
    splitParagraphInCell,
    mergeParagraphInCell,
  };
}
