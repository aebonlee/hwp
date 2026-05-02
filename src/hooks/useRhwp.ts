import { useState, useEffect, useRef } from 'react';

interface RhwpState {
  ready: boolean;
  loading: boolean;
  error: string | null;
}

let initPromise: Promise<void> | null = null;
let initDone = false;

/** Set up the global measureTextWidth callback using Canvas 2D */
function setupMeasureCallback(): void {
  const g = globalThis as unknown as Record<string, unknown>;
  if (typeof g.measureTextWidth === 'function') return;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  g.measureTextWidth = (text: string, font: string): number => {
    if (!ctx) return text.length * 10;
    ctx.font = font || '16px sans-serif';
    return ctx.measureText(text).width;
  };
}

/** Initialize @rhwp/core WASM exactly once */
function doInit(): Promise<void> {
  if (initDone) return Promise.resolve();
  if (initPromise) return initPromise;

  initPromise = (async () => {
    setupMeasureCallback();
    const rhwp = await import('@rhwp/core');
    // default export is the __wbg_init function — must be called FIRST to load WASM
    if (typeof rhwp.default === 'function') {
      await rhwp.default();
    }
    // init_panic_hook requires WASM to be loaded, so call AFTER default()
    try {
      if (typeof rhwp.init_panic_hook === 'function') {
        rhwp.init_panic_hook();
      }
    } catch {
      // non-critical — ignore if panic hook fails
    }
    initDone = true;
  })();

  return initPromise;
}

export function useRhwp(): RhwpState {
  const [state, setState] = useState<RhwpState>({
    ready: initDone,
    loading: !initDone,
    error: null,
  });
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if (initDone) {
      setState({ ready: true, loading: false, error: null });
      return;
    }

    doInit()
      .then(() => {
        if (mounted.current) setState({ ready: true, loading: false, error: null });
      })
      .catch((err: unknown) => {
        if (mounted.current) {
          setState({ ready: false, loading: false, error: (err as Error).message || 'WASM init failed' });
        }
      });

    return () => { mounted.current = false; };
  }, []);

  return state;
}
