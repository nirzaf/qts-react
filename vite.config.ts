import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: 'react',
    plugins: [['@swc/plugin-emotion', {}]]
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    target: 'esnext',
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-avatar'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          'utils-vendor': ['clsx', 'tailwind-merge'],
          'i18n-vendor': ['i18next', 'react-i18next']
        },
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: 'entries/[name].[hash].js'
      }
    },
    cssMinify: true,
    cssCodeSplit: true
  }
});
