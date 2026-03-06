import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { screenshotsPlugin } from './vite-plugins/screenshots'

// https://vite.dev/config/
export default defineConfig({
  plugins: [screenshotsPlugin(), react()],
  // Change to '/' if using username.github.io repo; or '/repo-name/' for project site
  base: '/subsens-landing/',
})
