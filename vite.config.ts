import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change to '/' if using username.github.io repo; or '/repo-name/' for project site
  base: '/subsens-landing/',
})
