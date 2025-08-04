import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/', // important for GitHub Pages with a custom domain
  build: {
    outDir: 'docs', // output folder for GitHub Pages
  },
});
