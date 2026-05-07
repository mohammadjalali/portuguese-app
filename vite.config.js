import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Replace with your actual repo name for GitHub Pages, e.g. '/portuguese-app/'
  // For a custom domain or user/org site (username.github.io), use '/'
  base: '/portuguese-app/',
})
