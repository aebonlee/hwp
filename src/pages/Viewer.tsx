import { useState, useCallback, useRef, type ReactElement, type DragEvent } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { useRhwp } from '../hooks/useRhwp';
import '../styles/viewer.css';

const Viewer = (): ReactElement => {
  const { t } = useLanguage();
  const { ready, loading: wasmLoading, error: wasmError } = useRhwp();

  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [rendering, setRendering] = useState(false);

  const [svgPages, setSvgPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(100);

  const viewerRef = useRef<HTMLDivElement>(null);

  const handleFile = useCallback(async (f: File) => {
    const ext = f.name.split('.').pop()?.toLowerCase();
    if (ext !== 'hwp' && ext !== 'hwpx') {
      setError('.hwp 또는 .hwpx 파일만 지원합니다.');
      return;
    }
    setFile(f);
    setError('');
    setRendering(true);
    setSvgPages([]);
    setCurrentPage(0);

    try {
      const { HwpDocument } = await import('@rhwp/core');
      const arrayBuf = await f.arrayBuffer();
      const doc = new HwpDocument(new Uint8Array(arrayBuf));
      const pageCount = doc.pageCount();
      const pages: string[] = [];
      for (let i = 0; i < pageCount; i++) {
        pages.push(doc.renderPageSvg(i));
      }
      doc.free();
      setSvgPages(pages);
      setRendering(false);
    } catch (err) {
      setError((err as Error).message || t('site.viewer.error'));
      setRendering(false);
    }
  }, [t]);

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFile(files[0]);
  };

  const onFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.hwp,.hwpx';
    input.onchange = () => {
      if (input.files && input.files.length > 0) handleFile(input.files[0]);
    };
    input.click();
  };

  const handleDownloadSvg = () => {
    if (!svgPages[currentPage]) return;
    const blob = new Blob([svgPages[currentPage]], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${file?.name?.replace(/\.[^.]+$/, '') || 'page'}_p${currentPage + 1}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const reset = () => {
    setFile(null);
    setSvgPages([]);
    setCurrentPage(0);
    setZoom(100);
    setError('');
  };

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val) && val >= 1 && val <= svgPages.length) {
      setCurrentPage(val - 1);
    }
  };

  return (
    <>
      <SEOHead title={t('site.viewer.title')} path="/viewer" />

      <section className="page-header">
        <div className="container">
          <h2>{t('site.viewer.title')}</h2>
          <p>{t('site.viewer.subtitle')}</p>
        </div>
      </section>

      <section className="section viewer-page">
        <div className="container">
          {wasmError && (
            <div className="error-alert">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {t('site.viewer.wasmError')}: {wasmError}
            </div>
          )}

          {error && (
            <div className="error-alert">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              {error}
            </div>
          )}

          {/* Upload / WASM loading */}
          {svgPages.length === 0 && !rendering && (
            <>
              {wasmLoading ? (
                <div className="viewer-loading">
                  <div className="loading-spinner"></div>
                  <p>{t('site.viewer.loading')}</p>
                </div>
              ) : (
                <div
                  className={`dropzone ${dragOver ? 'drag-over' : ''}`}
                  onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={onDrop}
                  onClick={ready ? onFileSelect : undefined}
                  style={{ cursor: ready ? 'pointer' : 'not-allowed', opacity: ready ? 1 : 0.5 }}
                >
                  <svg className="dropzone-icon" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" fill="rgba(74,143,231,0.12)" stroke="var(--primary, #0046C8)" />
                    <polyline points="14 2 14 8 20 8" fill="rgba(74,143,231,0.2)" stroke="var(--primary, #0046C8)" />
                    <line x1="9" y1="13" x2="15" y2="13" stroke="var(--primary, #0046C8)" />
                    <polyline points="12 10 12 16" stroke="var(--primary, #0046C8)" />
                  </svg>
                  <h3>{t('site.viewer.upload')}</h3>
                  <p>{t('site.viewer.uploadHint')}</p>
                </div>
              )}
            </>
          )}

          {/* Rendering spinner */}
          {rendering && (
            <div className="viewer-loading">
              <div className="loading-spinner"></div>
              <p>{t('site.viewer.rendering')}</p>
            </div>
          )}

          {/* Viewer */}
          {svgPages.length > 0 && (
            <div className="viewer-container">
              {/* Toolbar */}
              <div className="viewer-toolbar">
                <div className="viewer-toolbar-left">
                  <span className="viewer-filename">{file?.name}</span>
                </div>
                <div className="viewer-toolbar-center">
                  <button
                    className="viewer-nav-btn"
                    onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                    disabled={currentPage === 0}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <span className="viewer-page-info">
                    <input
                      type="number"
                      className="viewer-page-input"
                      value={currentPage + 1}
                      onChange={handlePageInput}
                      min={1}
                      max={svgPages.length}
                    />
                    <span>{t('site.viewer.of')} {svgPages.length}</span>
                  </span>
                  <button
                    className="viewer-nav-btn"
                    onClick={() => setCurrentPage(p => Math.min(svgPages.length - 1, p + 1))}
                    disabled={currentPage === svgPages.length - 1}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
                <div className="viewer-toolbar-right">
                  <button className="viewer-zoom-btn" onClick={() => setZoom(z => Math.max(50, z - 25))}>-</button>
                  <span className="viewer-zoom-label">{zoom}%</span>
                  <button className="viewer-zoom-btn" onClick={() => setZoom(z => Math.min(200, z + 25))}>+</button>
                  <button className="viewer-action-btn" onClick={handleDownloadSvg} title={t('site.viewer.downloadSvg')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                  <button className="viewer-action-btn" onClick={reset} title={t('site.viewer.newFile')}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* SVG canvas */}
              <div className="viewer-canvas-wrapper" ref={viewerRef}>
                <div
                  className="viewer-canvas"
                  style={{ transform: `scale(${zoom / 100})`, transformOrigin: 'top center' }}
                  dangerouslySetInnerHTML={{ __html: svgPages[currentPage] || '' }}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Viewer;
