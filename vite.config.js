import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const { resolve } = path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/sass/_vars"
          @import "./src/sass/_functions"
          @import "./src/sass/_placeholders"
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@context': resolve(__dirname, './src/context'),
      '@img': resolve(__dirname, './src/assets/img'),
    },
  },
})
