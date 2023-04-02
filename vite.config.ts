import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Coordinates Converter',
        short_name: 'Coord convert',
        description: 'Convert between sexagesimal and decimal coordinates',
        theme_color: '#addbff',
        icons: [
          {
            src: 'android-chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'android-chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
