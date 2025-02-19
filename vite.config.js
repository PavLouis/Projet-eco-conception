import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      exclude: ['**/*.svg'],
      test: /\.(jpe?g|png|webp)$/i,
      jpg: {
        quality: 80,
        mozjpeg: true,
      },
      png: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 80,
      }

    }),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['**/*.{svg,png,jpg,jpeg}'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /\.(jpg|jpeg|png|svg|webp)$/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }        
            }
          }
        ]
      }
    }),

  ],
  build: {
    target: 'es2020',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          main: ['./src/main.jsx']
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/css/i.test(extType)) {
            return 'assets/styles/[name]-[hash][extname]';
          }
          if (/png|jpe?g|svg/i.test(extType)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false
  },

})
