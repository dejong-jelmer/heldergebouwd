// One-off: convert src/assets/me.webp -> public/og-image.jpg (stable, unhashed URL)
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const src = resolve(root, 'src/assets/me.webp')
const out = resolve(root, 'public/og-image.jpg')

const webpDataUrl = `data:image/webp;base64,${readFileSync(src).toString('base64')}`

const browser = await puppeteer.launch({ headless: true })
const page = await browser.newPage()

const jpegBase64 = await page.evaluate(async (dataUrl) => {
  const img = new Image()
  img.src = dataUrl
  await img.decode()
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(img, 0, 0)
  return canvas.toDataURL('image/jpeg', 0.9).split(',')[1]
}, webpDataUrl)

await browser.close()

mkdirSync(dirname(out), { recursive: true })
writeFileSync(out, Buffer.from(jpegBase64, 'base64'))
console.log(`Wrote ${out}`)
