import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          // entry: "src/main.ts",
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'Index',
            },
          },
        },
        {
          filename: 'about.html',
          template: 'about.html',
          injectOptions: {
            data: {
              title: 'About',
            },
          },
        },
        {
          filename: 'archives.html',
          template: 'archives.html',
          injectOptions: {
            data: {
              title: 'Archives',
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
