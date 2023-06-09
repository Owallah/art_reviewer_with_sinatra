import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/art_reviewer_with_sinatra",
  plugins: [react()],
})
