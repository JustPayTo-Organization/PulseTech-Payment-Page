import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    tailwindcss()
],
=======
  plugins: [react(), tailwindcss()],
>>>>>>> 7bc08ca0bb4219182d20a8d60b7654c44f910c8b
})
