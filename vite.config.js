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
        quality: 60,
        mozjpeg: true,
      },
      png: {
        quality: 80,
      },
      webp: {
        lossless: false,
        quality: 1,
      }

    }),
    VitePWA({ 
      registerType: 'autoUpdate',
      includeAssets: ['**/*.{svg,png,jpg,jpeg}'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,webp}'],
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

    sourcemap: process.env.NODE_ENV === 'development' ? 'inline' : false
  },

})
