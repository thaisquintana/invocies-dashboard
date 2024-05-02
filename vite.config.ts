/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      '~@': path.resolve(__dirname, './')
    }
  }
})
