import { useState, useRef, useCallback, useEffect, type ReactElement, type DragEvent, type KeyboardEvent } from 'react';
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

interface CursorRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

/* ── Component ── */
const HwpEditor = (): ReactElement => {
  const { t } = useLanguage();
  const { ready, loading: wasmLoading, error: wasmError } = useRhwp();

  /* document state */
  const docRef = useRef<RhwpDoc | null>(null);
  const [svgPages, setSvgPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);
  const [fileName, setFileName] = useState('');
  const [dirty, setDirty] = useState(false);

  /* cursor / selection */
  const [cursor, setCursor] = useState<CursorPos | null>(null);
  const [cursorRect, setCursorRect] = useState<CursorRect | null>(null);

  /* UI state */
  const [showExport, setShowExport] = useState(false);
  const [showTableDialog, setShowTableDialog] = useState(false);
  const [tableRows, setTableRows] = useState(3);
  const [tableCols, setTableCols] = useState(3);
  const [error, setError] = useState('');

  /* undo/redo stacks */
  const undoStackRef = useRef<number[]>([]);
  const redoStackRef = useRef<number[]>([]);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const canvasRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const tableDialogRef = useRef<HTMLDivElement>(null);

  /* ── Close dropdowns on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (showExport && exportRef.current && !exportRef.current.contains(e.target as Node)) {
        setShowExport(false);
      }
      if (showTableDialog && tableDialogRef.current && !tableDialogRef.current.contains(e.target as Node)) {
        setShowTableDialog(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [showExport, showTableDialog]);

  /* ── Render helpers ── */
  const renderAllPages = useCallback((doc: RhwpDoc) => {
    const count = doc.pageCount();
    const pages: string[] = [];
    for (let i = 0; i < count; i++) {
      pages.push(doc.renderPageSvg(i));
    }
    setSvgPages(pages);
    if (currentPage >= count) setCurrentPage(Math.max(0, count - 1));
  }, [currentPage]);

  const rerenderCurrentPage = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const count = doc.pageCount();
    const pages: string[] = [];
    for (let i = 0; i < count; i++) {
      pages.push(doc.renderPageSvg(i));
    }
    setSvgPages(pages);
  }, []);

  const updateCursorDisplay = useCallback((pos: CursorPos) => {
    const doc = docRef.current;
    if (!doc) return;
    try {
      const json = doc.getCursorRect(pos.secIdx, pos.paraIdx, pos.charOffset);
      const result = JSON.parse(json);
      if (result.x !== undefined) {
        setCursorRect({ x: result.x, y: result.y, width: result.width || 2, height: result.height });
      }
    } catch {
      // cursor rect not available
    }
  }, []);

  /* ── Snapshot helper (undo) ── */
  const pushSnapshot = useCallback(() => {
    const doc = docRef.current;
    if (!doc) return;
    const id = doc.saveSnapshot();
    undoStackRef.current.push(id);
    redoStackRef.current = [];
    setCanUndo(true);
    setCanRedo(false);
    setDirty(true);
  }, []);

  /* ── Create blank document ── */
  const handleNewDoc = useCallback(async () => {
    if (!ready) return;
    try {
      const { HwpDocument } = await import('@rhwp/core');
      const doc = HwpDocument.createEmpty();
      doc.createBlankDocument();

      // free previous
      if (docRef.current) docRef.current.free();
      docRef.current = doc;
      undoStackRef.current = [];
      redoStackRef.current = [];
      setCanUndo(false);
      setCanRedo(false);
      setFileName('');
      setDirty(false);
      setCursor(null);
      setCursorRect(null);
      setCurrentPage(0);
      setError('');
      renderAllPages(doc);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [ready, renderAllPages]);

  /* ── Open file ── */
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

      if (docRef.current) docRef.current.free();
      docRef.current = doc;
      undoStackRef.current = [];
      redoStackRef.current = [];
      setCanUndo(false);
      setCanRedo(false);
      setFileName(file.name);
      setDirty(false);
      setCursor(null);
      setCursorRect(null);
      setCurrentPage(0);
      setError('');
      renderAllPages(doc);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [ready, renderAllPages]);

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
  const [dragOver, setDragOver] = useState(false);
  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) handleOpenFile(e.dataTransfer.files[0]);
  };

  /* ── Click on canvas → hitTest ── */
  const handleCanvasClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const doc = docRef.current;
    if (!doc || !canvasRef.current) return;

    const svgEl = canvasRef.current.querySelector('svg');
    if (!svgEl) return;

    const rect = svgEl.getBoundingClientRect();
    const scaleX = zoom / 100;
    const scaleY = zoom / 100;
    const x = (e.clientX - rect.left) / scaleX;
    const y = (e.clientY - rect.top) / scaleY;

    try {
      const json = doc.hitTest(currentPage, x, y);
      const result = JSON.parse(json);
      if (result.paraIndex !== undefined) {
        const pos: CursorPos = {
          secIdx: result.sectionIndex ?? 0,
          paraIdx: result.paraIndex,
          charOffset: result.charOffset ?? 0,
        };
        setCursor(pos);
        updateCursorDisplay(pos);
      }
    } catch {
      // hitTest might fail on empty areas
    }

    // Focus wrapper for keyboard input
    wrapperRef.current?.focus();
  }, [currentPage, zoom, updateCursorDisplay]);

  /* ── Keyboard input ── */
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;

    // Ctrl shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'z':
          e.preventDefault();
          handleUndo();
          return;
        case 'y':
          e.preventDefault();
          handleRedo();
          return;
        case 'b':
          e.preventDefault();
          handleBold();
          return;
        case 'i':
          e.preventDefault();
          handleItalic();
          return;
        case 'u':
          e.preventDefault();
          handleUnderline();
          return;
      }
      return;
    }

    const { secIdx, paraIdx, charOffset } = cursor;

    if (e.key === 'Enter') {
      e.preventDefault();
      pushSnapshot();
      try {
        doc.splitParagraph(secIdx, paraIdx, charOffset);
        const newPos = { secIdx, paraIdx: paraIdx + 1, charOffset: 0 };
        setCursor(newPos);
        rerenderCurrentPage();
        updateCursorDisplay(newPos);
      } catch { /* ignore */ }
      return;
    }

    if (e.key === 'Backspace') {
      e.preventDefault();
      pushSnapshot();
      try {
        if (charOffset > 0) {
          doc.deleteText(secIdx, paraIdx, charOffset - 1, 1);
          const newPos = { secIdx, paraIdx, charOffset: charOffset - 1 };
          setCursor(newPos);
          rerenderCurrentPage();
          updateCursorDisplay(newPos);
        } else if (paraIdx > 0) {
          const prevLen = doc.getParagraphLength(secIdx, paraIdx - 1);
          doc.mergeParagraph(secIdx, paraIdx);
          const newPos = { secIdx, paraIdx: paraIdx - 1, charOffset: prevLen };
          setCursor(newPos);
          rerenderCurrentPage();
          updateCursorDisplay(newPos);
        }
      } catch { /* ignore */ }
      return;
    }

    if (e.key === 'Delete') {
      e.preventDefault();
      pushSnapshot();
      try {
        const paraLen = doc.getParagraphLength(secIdx, paraIdx);
        if (charOffset < paraLen) {
          doc.deleteText(secIdx, paraIdx, charOffset, 1);
          rerenderCurrentPage();
          updateCursorDisplay(cursor);
        } else {
          const paraCount = doc.getParagraphCount(secIdx);
          if (paraIdx < paraCount - 1) {
            doc.mergeParagraph(secIdx, paraIdx + 1);
            rerenderCurrentPage();
            updateCursorDisplay(cursor);
          }
        }
      } catch { /* ignore */ }
      return;
    }

    // Arrow keys
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (charOffset > 0) {
        const newPos = { secIdx, paraIdx, charOffset: charOffset - 1 };
        setCursor(newPos);
        updateCursorDisplay(newPos);
      } else if (paraIdx > 0) {
        const prevLen = doc.getParagraphLength(secIdx, paraIdx - 1);
        const newPos = { secIdx, paraIdx: paraIdx - 1, charOffset: prevLen };
        setCursor(newPos);
        updateCursorDisplay(newPos);
      }
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      try {
        const paraLen = doc.getParagraphLength(secIdx, paraIdx);
        if (charOffset < paraLen) {
          const newPos = { secIdx, paraIdx, charOffset: charOffset + 1 };
          setCursor(newPos);
          updateCursorDisplay(newPos);
        } else {
          const paraCount = doc.getParagraphCount(secIdx);
          if (paraIdx < paraCount - 1) {
            const newPos = { secIdx, paraIdx: paraIdx + 1, charOffset: 0 };
            setCursor(newPos);
            updateCursorDisplay(newPos);
          }
        }
      } catch { /* ignore */ }
      return;
    }

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      const delta = e.key === 'ArrowUp' ? -1 : 1;
      const newPara = paraIdx + delta;
      try {
        const paraCount = doc.getParagraphCount(secIdx);
        if (newPara >= 0 && newPara < paraCount) {
          const newLen = doc.getParagraphLength(secIdx, newPara);
          const newOffset = Math.min(charOffset, newLen);
          const newPos = { secIdx, paraIdx: newPara, charOffset: newOffset };
          setCursor(newPos);
          updateCursorDisplay(newPos);
        }
      } catch { /* ignore */ }
      return;
    }

    // Regular character input
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      pushSnapshot();
      try {
        doc.insertText(secIdx, paraIdx, charOffset, e.key);
        const newPos = { secIdx, paraIdx, charOffset: charOffset + 1 };
        setCursor(newPos);
        rerenderCurrentPage();
        updateCursorDisplay(newPos);
      } catch { /* ignore */ }
    }
  }, [cursor, pushSnapshot, rerenderCurrentPage, updateCursorDisplay]);

  /* ── Formatting ── */
  const applyFormat = useCallback((props: Record<string, unknown>) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      // Apply to current character (1 char range)
      const { secIdx, paraIdx, charOffset } = cursor;
      const paraLen = doc.getParagraphLength(secIdx, paraIdx);
      if (charOffset < paraLen) {
        doc.applyCharFormat(secIdx, paraIdx, charOffset, charOffset + 1, JSON.stringify(props));
        rerenderCurrentPage();
      }
    } catch { /* ignore */ }
  }, [cursor, pushSnapshot, rerenderCurrentPage]);

  const handleBold = useCallback(() => applyFormat({ bold: true }), [applyFormat]);
  const handleItalic = useCallback(() => applyFormat({ italic: true }), [applyFormat]);
  const handleUnderline = useCallback(() => applyFormat({ underline: true }), [applyFormat]);

  /* ── Paragraph alignment ── */
  const applyAlign = useCallback((align: string) => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      doc.applyParaFormat(cursor.secIdx, cursor.paraIdx, JSON.stringify({ alignment: align }));
      rerenderCurrentPage();
    } catch { /* ignore */ }
  }, [cursor, pushSnapshot, rerenderCurrentPage]);

  /* ── Table insert ── */
  const handleInsertTable = useCallback(() => {
    const doc = docRef.current;
    if (!doc || !cursor) return;
    pushSnapshot();
    try {
      doc.createTable(cursor.secIdx, cursor.paraIdx, cursor.charOffset, tableRows, tableCols);
      rerenderCurrentPage();
      setShowTableDialog(false);
    } catch (err) {
      setError((err as Error).message);
    }
  }, [cursor, tableRows, tableCols, pushSnapshot, rerenderCurrentPage]);

  /* ── Undo / Redo ── */
  const handleUndo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || undoStackRef.current.length === 0) return;
    const snapId = undoStackRef.current.pop()!;
    // Save current state for redo
    const redoId = doc.saveSnapshot();
    redoStackRef.current.push(redoId);
    doc.restoreSnapshot(snapId);
    rerenderCurrentPage();
    setCanUndo(undoStackRef.current.length > 0);
    setCanRedo(true);
  }, [rerenderCurrentPage]);

  const handleRedo = useCallback(() => {
    const doc = docRef.current;
    if (!doc || redoStackRef.current.length === 0) return;
    const snapId = redoStackRef.current.pop()!;
    const undoId = doc.saveSnapshot();
    undoStackRef.current.push(undoId);
    doc.restoreSnapshot(snapId);
    rerenderCurrentPage();
    setCanUndo(true);
    setCanRedo(redoStackRef.current.length > 0);
  }, [rerenderCurrentPage]);

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
      setError((err as Error).message);
    }
  }, [fileName]);

  /* ── Page navigation ── */
  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= svgPages.length) {
      setCurrentPage(val - 1);
    }
  };

  /* ── Cleanup ── */
  useEffect(() => {
    return () => {
      if (docRef.current) {
        docRef.current.free();
        docRef.current = null;
      }
    };
  }, []);

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
          {/* WASM error */}
          {wasmError && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {t('site.hwpEditor.wasmError')}: {wasmError}
            </div>
          )}

          {error && (
            <div className="hwp-editor-error">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          {/* WASM loading */}
          {wasmLoading && (
            <div className="hwp-editor-loading">
              <div className="loading-spinner"></div>
              <p>{t('site.hwpEditor.wasmLoading')}</p>
            </div>
          )}

          {/* Empty state */}
          {!wasmLoading && !hasDoc && (
            <div
              className={`hwp-editor-container ${dragOver ? 'drag-over' : ''}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
            >
              <div className="hwp-editor-empty">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            <>
              {/* Toolbar */}
              <div className="hwp-editor-toolbar">
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleNewDoc} title={t('site.hwpEditor.newDoc')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={triggerFileOpen} title={t('site.hwpEditor.openFile')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Formatting */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleBold} disabled={!cursor} title={t('site.hwpEditor.bold')}>
                    <strong>B</strong>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={handleItalic} disabled={!cursor} title={t('site.hwpEditor.italic')}>
                    <em>I</em>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={handleUnderline} disabled={!cursor} title={t('site.hwpEditor.underline')}>
                    <span style={{ textDecoration: 'underline' }}>U</span>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Alignment */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('left')} disabled={!cursor} title={t('site.hwpEditor.alignLeft')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="17" y1="14" x2="3" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('center')} disabled={!cursor} title={t('site.hwpEditor.alignCenter')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="10" x2="6" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="18" y1="14" x2="6" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={() => applyAlign('right')} disabled={!cursor} title={t('site.hwpEditor.alignRight')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="21" y1="10" x2="7" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="7" y2="14" /><line x1="21" y1="18" x2="3" y2="18" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Table */}
                <div className="hwp-toolbar-group" style={{ position: 'relative' }} ref={tableDialogRef}>
                  <button
                    className="hwp-toolbar-btn"
                    onClick={() => setShowTableDialog(!showTableDialog)}
                    disabled={!cursor}
                    title={t('site.hwpEditor.insertTable')}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="3" y1="15" x2="21" y2="15" />
                      <line x1="9" y1="3" x2="9" y2="21" />
                      <line x1="15" y1="3" x2="15" y2="21" />
                    </svg>
                  </button>
                  {showTableDialog && (
                    <div className="hwp-table-dialog">
                      <div className="hwp-table-dialog-row">
                        <div>
                          <label>Rows</label>
                          <input type="number" min={1} max={20} value={tableRows} onChange={e => setTableRows(Number(e.target.value))} />
                        </div>
                        <div>
                          <label>Cols</label>
                          <input type="number" min={1} max={10} value={tableCols} onChange={e => setTableCols(Number(e.target.value))} />
                        </div>
                      </div>
                      <button onClick={handleInsertTable}>{t('site.hwpEditor.insertTable')}</button>
                    </div>
                  )}
                </div>

                <div className="hwp-toolbar-divider" />

                {/* Undo / Redo */}
                <div className="hwp-toolbar-group">
                  <button className="hwp-toolbar-btn" onClick={handleUndo} disabled={!canUndo} title={t('site.hwpEditor.undo')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="1 4 1 10 7 10" />
                      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                    </svg>
                  </button>
                  <button className="hwp-toolbar-btn" onClick={handleRedo} disabled={!canRedo} title={t('site.hwpEditor.redo')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="23 4 23 10 17 10" />
                      <path d="M20.49 15a9 9 0 1 1-2.13-9.36L23 10" />
                    </svg>
                  </button>
                </div>

                <div className="hwp-toolbar-spacer" />

                {/* Filename indicator */}
                {fileName && (
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginRight: 8 }}>
                    {fileName}{dirty ? ' *' : ''}
                  </span>
                )}

                {/* Export */}
                <div className="hwp-export-wrapper" ref={exportRef}>
                  <button className="hwp-toolbar-btn" onClick={() => setShowExport(!showExport)}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
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
                  ref={wrapperRef}
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                  style={{ outline: 'none' }}
                >
                  <div
                    className="hwp-canvas"
                    ref={canvasRef}
                    style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                    onClick={handleCanvasClick}
                  >
                    <div dangerouslySetInnerHTML={{ __html: svgPages[currentPage] || '' }} />
                    {/* Cursor overlay */}
                    {cursorRect && (
                      <div
                        className="hwp-cursor"
                        style={{
                          left: cursorRect.x,
                          top: cursorRect.y,
                          height: cursorRect.height,
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Page bar */}
                <div className="hwp-page-bar">
                  <div className="hwp-page-nav">
                    <button
                      className="hwp-page-btn"
                      onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                      disabled={currentPage === 0}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <span className="hwp-page-info">
                      <input
                        type="number"
                        className="hwp-page-input"
                        value={currentPage + 1}
                        onChange={handlePageInput}
                        min={1}
                        max={svgPages.length}
                      />
                      <span>/ {svgPages.length}</span>
                    </span>
                    <button
                      className="hwp-page-btn"
                      onClick={() => setCurrentPage(p => Math.min(svgPages.length - 1, p + 1))}
                      disabled={currentPage === svgPages.length - 1}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
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
