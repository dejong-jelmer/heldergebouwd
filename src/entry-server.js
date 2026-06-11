// SSR entry used only at build time by prerender.js. Renders the app to an HTML
// string in Node — no browser, no Chromium. onMounted hooks (e.g. the nav's
// IntersectionObserver) never run here, so client-only browser APIs are safe.
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import App from './App.vue'

export async function render() {
  const app = createSSRApp(App)
  return await renderToString(app)
}
