// Post-build prerender: render the built SPA in a headless browser and write the
// fully rendered static HTML back into dist/index.html so crawlers and
// link-preview bots receive real content instead of an empty <div id="app">.
import { preview } from 'vite'
import puppeteer from 'puppeteer'
import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const indexPath = resolve(root, 'dist/index.html')

const server = await preview({ root, preview: { port: 4173 } })
const url = server.resolvedUrls.local[0]

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle2' })
// Wait until Vue has actually rendered content into the mount point.
await page.waitForSelector('#app > *', { timeout: 15000 })
const html = await page.content()
await browser.close()

writeFileSync(indexPath, html)
console.log(`Prerendered ${indexPath}`)

// Preview keep-alive connections can hold the process open; exit explicitly.
process.exit(0)
