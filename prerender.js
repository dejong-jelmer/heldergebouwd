// Post-build prerender: render the app to static HTML in pure Node and inject it
// into dist/index.html, so crawlers and link-preview bots receive real content
// instead of an empty <div id="app">.
//
// This uses Vue's server renderer through a Vite SSR module loader. It launches
// NO browser (no puppeteer/Chromium), so it runs inside restricted build
// containers such as Cloudflare Pages.
import { createServer } from 'vite'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const indexPath = resolve(root, 'dist/index.html')

// A Vite dev server in middleware mode gives us its transform pipeline (so .vue,
// .webp and .css imports resolve) without ever opening an HTTP port or a browser.
const vite = await createServer({
  root,
  logLevel: 'warn',
  server: { middlewareMode: true },
  appType: 'custom',
})

try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.js')
  const appHtml = await render()

  const template = readFileSync(indexPath, 'utf-8')
  const html = template.replace(
    '<div id="app"></div>',
    `<div id="app">${appHtml}</div>`
  )
  writeFileSync(indexPath, html)
  console.log(`Prerendered ${indexPath}`)
} finally {
  await vite.close()
}
