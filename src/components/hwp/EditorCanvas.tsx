import React, { useEffect } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

interface EditorCanvasProps {
  // Page state
  pageCount: number;
  currentPage: number;
  zoom: number;
  renderVer: number;

  // Canvas refs (passed from parent for WASM rendering)
  pageCanvasRefs: React.MutableRefObject<Record<number, HTMLCanvasElement | null>>;
  overlayCanvasRefs: React.MutableRefObject<Record<number, HTMLCanvasElement | null>>;
  canvasRefs: React.MutableRefObject<Record<number, HTMLDivElement | null>>;

  // Cursor / Selection display
  cursorRect: { pageIndex: number; x: number; y: number; height: number } | null;
  cursorVisible: boolean;
  selRects: Array<{ pageIndex: number; x: number; y: number; width: number; height: number }>;
  renderScaleRef: React.MutableRefObject<number>;

  // Mouse event handlers
  onCanvasMouseDown: (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => void;
  onCanvasMouseMove: (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => void;
  onCanvasMouseUp: (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => void;
  onContextMenu: (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => void;
  onDoubleClick: (e: React.MouseEvent<HTMLDivElement>, pageIdx: number) => void;

  // Drag-drop
  isDragging: boolean;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;

  // Focus hidden input
  onFocusInput: () => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────

const EditorCanvas: React.FC<EditorCanvasProps> = ({
  pageCount,
  currentPage: _currentPage,
  zoom,
  renderVer,
  pageCanvasRefs,
  overlayCanvasRefs,
  canvasRefs,
  cursorRect,
  cursorVisible,
  selRects,
  renderScaleRef,
  onCanvasMouseDown,
  onCanvasMouseMove,
  onCanvasMouseUp,
  onContextMenu,
  onDoubleClick,
  isDragging: _isDragging,
  onDragOver,
  onDragLeave,
  onDrop,
  onFocusInput,
}) => {
  // ── Overlay drawing effect ──────────────────────────────────────────────────
  // Draws cursor line and selection rectangles on overlay canvases.
  // Re-runs whenever page count, cursor, selection, or render version changes.

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
          ctx.fillRect(
            sr.x * scale,
            sr.y * scale,
            sr.width * scale,
            sr.height * scale,
          );
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

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div
      className="hwp-canvas-wrapper"
      onClick={onFocusInput}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
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
          onMouseDown={(e) => onCanvasMouseDown(e, pageIdx)}
          onMouseMove={(e) => onCanvasMouseMove(e, pageIdx)}
          onMouseUp={(e) => onCanvasMouseUp(e, pageIdx)}
          onContextMenu={(e) => onContextMenu(e, pageIdx)}
          onDoubleClick={(e) => onDoubleClick(e, pageIdx)}
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
  );
};

export default React.memo(EditorCanvas);
