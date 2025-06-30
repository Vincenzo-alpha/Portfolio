import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your GitHub username and repo name:
const repoName = 'Portfolio-vite'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})
