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
        manualChunks: (id) => {
          // Core vendor chunks - split into smaller, more focused chunks
          if (id.includes('node_modules')) {
            // React core and routing
            if (id.includes('react/')) return 'vendor-react-core'
            if (id.includes('react-dom/')) return 'vendor-react-dom'
            if (id.includes('react-router-dom/')) return 'vendor-router'
            
            // UI Components
            if (id.includes('@radix-ui/')) {
              const component = id.match(/@radix-ui\/([^/]+)/)?.[1]
              return `ui-${component || 'radix'}`
            }

            // Animation libraries
            if (id.includes('framer-motion')) {
              if (id.includes('animation')) return 'vendor-framer-animation'
              if (id.includes('gestures')) return 'vendor-framer-gestures'
              return 'vendor-framer-core'
            }

            // Icons - split by category
            if (id.includes('lucide-react')) {
              if (id.includes('icons/fi')) return 'icons-feather'
              if (id.includes('icons/md')) return 'icons-material'
              return 'icons-core'
            }

            // Internationalization
            if (id.includes('i18next/')) return 'vendor-i18next-core'
            if (id.includes('react-i18next')) return 'vendor-i18next-react'

            // Utilities
            if (id.includes('clsx')) return 'utils-classnames'
            if (id.includes('tailwind-merge')) return 'utils-tailwind'

            // Group remaining dependencies by category
            if (id.includes('date-fns')) return 'vendor-date'
            if (id.includes('zod')) return 'vendor-validation'
            if (id.includes('query')) return 'vendor-data'
            if (id.includes('form')) return 'vendor-forms'
            
            // Split remaining node_modules by first letter to avoid large chunks
            const pkg = id.match(/node_modules\/([^/]+)/)?.[1] || ''
            return `vendor-${pkg.charAt(0).toLowerCase()}`
          }
          
          // Application code splitting
          if (id.includes('/src/')) {
            // Pages
            if (id.includes('/pages/')) {
              const page = id.match(/pages\/([^/]+)/)?.[1]
              return `page-${page?.toLowerCase()}`
            }

            // Components by feature
            if (id.includes('/components/')) {
              if (id.includes('/home/')) return 'feature-home'
              if (id.includes('/blog/')) return 'feature-blog'
              if (id.includes('/services/')) return 'feature-services'
              if (id.includes('/about/')) return 'feature-about'
              if (id.includes('/contact/')) return 'feature-contact'
              if (id.includes('/pricing/')) return 'feature-pricing'
              
              // UI components
              if (id.includes('/ui/')) {
                const component = id.match(/ui\/([^/]+)/)?.[1]
                return `ui-${component?.toLowerCase() || 'common'}`
              }

              // Section components
              if (id.includes('/sections/')) {
                const section = id.match(/sections\/([^/]+)/)?.[1]
                return `section-${section?.toLowerCase() || 'common'}`
              }
            }

            // Utils and helpers
            if (id.includes('/utils/')) return 'utils'
            if (id.includes('/hooks/')) return 'hooks'
            if (id.includes('/lib/')) return 'lib'
          }
        },
        // Optimize chunk naming and directory structure
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: (chunkInfo) => {
          const prefix = chunkInfo.name.startsWith('vendor') ? 'vendor' : 'app'
          return `assets/${prefix}/[name].[hash].js`
        },
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name?.split('.').pop()
          return `assets/${ext}/[name].[hash][extname]`
        }
      }
    },
    // Additional optimizations
    cssCodeSplit: true,
    cssMinify: true,
    assetsInlineLimit: 4096,
    modulePreload: {
      polyfill: true
    }
  },
  // Enable build-time optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      'lucide-react'
    ]
  }
});
