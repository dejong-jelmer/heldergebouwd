import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { AUTHOR_FIRST_NAME, AUTHOR_FULL_NAME } from './config'

// Fill %AUTHOR_*% placeholders in index.html with the values from config.ts, so
// the static document head shares a single source of truth with the components.
// Runs in both dev and build (before prerender.js processes dist/index.html).
function htmlAuthorVars() {
  return {
    name: 'html-author-vars',
    transformIndexHtml(html) {
      return html
        .replaceAll('%AUTHOR_FULL_NAME%', AUTHOR_FULL_NAME)
        .replaceAll('%AUTHOR_FIRST_NAME%', AUTHOR_FIRST_NAME)
    },
  }
}

export default defineConfig({
  plugins: [vue(), htmlAuthorVars()],
})
