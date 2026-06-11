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
public/_redirects           SPA-fallback voor Netlify e.d.
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

`npm run build` genereert een volledig statische site in `dist/`. Te hosten op elke statische host (Netlify, Vercel, Cloudflare Pages); `public/_redirects` zorgt voor de SPA-fallback op Cloudfare.
