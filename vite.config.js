import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', // Replace 'my-portfolio' with the name of your repository
  build: {
    outDir: 'dist',
  },
})