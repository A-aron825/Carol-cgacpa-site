import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use relative base path so the site works on GitHub Pages subfolders or Vercel roots
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});