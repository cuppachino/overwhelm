import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './node_modules'),
    },
  },
  plugins: [react()],
  // workaround https://github.com/vitejs/vite/issues/8644
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
});
