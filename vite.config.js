import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Music-Player/', // Replace 'repository-name' with your actual repository name
  build: {
    outDir: 'dist', // Output directory for the production build (default: 'dist')
  },
});
