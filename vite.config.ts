import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import path from 'path'

export default defineConfig({
  plugins: [react(), wasm(), topLevelAwait()],
  base: '/',
  resolve: {
    alias: {
      '@kordoc': path.resolve(__dirname, '../kordoc/src'),
      'zlib': path.resolve(__dirname, 'src/lib/kordoc/zlib-shim.ts'),
    },
    // kordoc 소스에서 import하는 패키지를 hwp의 node_modules에서 해결
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
    rollupOptions: {
      // kordoc의 내부 import가 hwp의 node_modules에서 해결되도록 설정
      onwarn(warning, warn) {
        // 사용하지 않는 external 경고 무시
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
        warn(warning);
      },
    },
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
