/// <reference types="vitest" />
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './')
    }
  }
})
