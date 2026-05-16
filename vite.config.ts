import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

/**
 * kordoc Node.js 전용 모듈을 브라우저 스텁으로 교체하는 플러그인.
 * com-fallback.ts는 child_process/os를 사용하여 브라우저 빌드 불가.
 */
function kordocBrowserPlugin(): Plugin {
  const stubPath = path.resolve(__dirname, 'src/lib/kordoc/com-fallback-stub.ts')
  return {
    name: 'kordoc-browser-shim',
    enforce: 'pre',
    resolveId(source, importer) {
      // kordoc hwpx/parser.ts에서 ./com-fallback.js 임포트를 스텁으로 교체
      if (source.includes('com-fallback') && importer?.includes('kordoc')) {
        return stubPath
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [kordocBrowserPlugin(), react(), wasm(), topLevelAwait()],
  base: '/',
  resolve: {
    alias: {
      '@kordoc': path.resolve(__dirname, '../kordoc/src'),
      'zlib': path.resolve(__dirname, 'src/lib/kordoc/zlib-shim.ts'),
    },
    dedupe: ['jszip', '@xmldom/xmldom', 'fflate'],
  },
  define: {
    global: 'globalThis',
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    target: 'esnext',
  },
  server: {
    host: true,
    port: 5174
  },
  optimizeDeps: {
    exclude: ['@rhwp/core'],
    include: ['jszip', '@xmldom/xmldom', 'fflate', 'buffer'],
  }
})
