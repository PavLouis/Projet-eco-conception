import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
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
})
