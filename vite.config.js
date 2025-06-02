import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'TestPWA',
        short_name: 'PWA',
        description: 'Une PWA simple avec Vue.js + Vite',
        theme_color: '#4DBA87',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'screenshot1.png',
            sizes: '640x480',
            type: 'image/png',
            platform: 'narrow'
          },
          {
            src: 'screenshot2.png',
            sizes: '1280x720',
            type: 'image/png',
            platform: 'wide'
          }
        ],
        categories: ['business', 'productivity'],
        orientation: 'portrait-primary',
        related_applications: [],
        prefer_related_applications: false,
        // screens: ['narrow', 'wide', 'medium'], // optionnel, selon besoins
      },
    }),
  ],
})
