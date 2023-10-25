import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/music-player/',
  build: {
    outDir: 'dist', // Output directory for the production build (default: 'dist')
  },
});
