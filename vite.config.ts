import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    target: 'esnext',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-slot', '@radix-ui/react-avatar'],
          'animation-vendor': ['framer-motion'],
          'icons-vendor': ['lucide-react'],
          'utils-vendor': ['clsx', 'tailwind-merge']
        }
      }
    },
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true
  }
});
