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
              }
            }
          }
        ]
      }
    }),

  ],
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer console.log en production
        drop_debugger: true
      }
    },
  }
})
