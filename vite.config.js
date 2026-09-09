import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    // Ye lightningcss ki jagah purana tareeka use karega jo error nahi dega
    cssMinify: true 
  },
  // Agar phir bhi error aaye, toh ye add karein:
  css: {
    transformer: 'postcss',
    minify: 'esbuild' // Iske liye Solution 2 wala npm install zaroori hai
  }
})
