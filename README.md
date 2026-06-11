# heldergebouwd.nl

Personal portfolio van Jelmer de Jong — freelance Laravel & Vue developer.

Single-page site gebouwd met Vue 3 (`<script setup>`), Vite en Tailwind CSS v3. Geen router; alle secties staan op één scrollbare pagina met smooth scroll en actieve nav-highlighting via IntersectionObserver.

## Development

```bash
npm install
npm run dev      # dev-server met hot reload
npm run build    # statische build naar dist/
npm run preview  # lokaal de productie-build bekijken
```

## Structuur

```
index.html                  entry, Google Fonts (Inter)
wrangler.jsonc              Cloudflare-config (assets + SPA-fallback)
src/
  main.js                   app entry
  style.css                 Tailwind directives + smooth scroll
  App.vue                   layout, compositie van alle secties
  assets/me.webp            profielfoto
  components/
    SiteNav.vue             sticky nav met scroll-spy
    HeroSection.vue
    AboutSection.vue
    SkillsSection.vue
    ProjectsSection.vue
    ContactSection.vue
    SiteFooter.vue
```

## Deploy

`npm run build` genereert een volledig statische site in `dist/`. De site draait op Cloudflare (Workers static assets); `wrangler.jsonc` regelt de SPA-fallback via `not_found_handling: "single-page-application"`. Let op: Cloudflare accepteert géén `/* /index.html 200`-regel in een `_redirects`-bestand — dat geeft een infinite-loop-fout bij de deploy.
