import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Root deployment at dermalight-hamburg.de
  base: '/', 
  plugins: [react()],
})