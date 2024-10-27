import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/projectplex/',  // Add this line to set the base path
  //   build: {
  //       outDir: 'dist'
  //   },
    
  plugins: [react()],
  
})
