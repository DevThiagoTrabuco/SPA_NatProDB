import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  publicDir: 'src/public',
  server: {
    proxy: {
      '/molecules': {
        target: 'https://api-natprodb.onrender.com',
        changeOrigin: true,
        bypass: (req) => {
          if (req.url.endsWith('.csv')) {
            return req.url;
          }
        },
      },
    }
  }
})
