import { defineConfig } from 'vitest/config'

import path from 'path'
const BASE = '/qr-code-generator-lib/'
export default defineConfig({
  base: BASE,
  build: {
    target: 'esnext',
    /* rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },*/
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'qrcode',
      fileName: (format) => `qr-code-generator-lib.${format}.js`,
      formats: ['es', 'umd', 'cjs', 'iife'],
    },

    minify: 'terser',
    terserOptions: {
      mangle: {
        properties: {
          reserved: ['getMatrix', 'render', 'renderPath'],
        },
      },
      compress: {
        passes: 10,
        inline: true,
        unsafe: true,
        hoist_vars: true,
      },
    },
  },
  test: {},
})
