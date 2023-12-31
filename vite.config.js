import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { env } from 'node:process';

const isDev = env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: isDev
        ? '[name]_[local]__[hash:base64:5]'
        : '[hash:base64:4]',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
