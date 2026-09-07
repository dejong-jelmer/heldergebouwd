# heldergebouwd.nl

Personal portfolio van Jelmer de Jong, freelance Laravel & Vue developer.

Single-page, built with Vue.js, (`<script setup>`), Vite & Tailwind CSS. No router; all sections are on a single scrollable page with smooth scroll and active navigation highlighting via IntersectionObserver.

## Development

```bash
npm install
npm run dev      # dev-server with hot reload
npm run build    # static build to dist/
npm run preview  # run locally
```

## Structuur

```
index.html                  entry, Google Fonts (Inter)
wrangler.jsonc              Cloudflare-config (assets + SPA-fallback)
src/
  main.js                   app entry
  style.css                 Tailwind directives + smooth scroll
  App.vue                   layout, compositie of all sections
  assets/me.webp            profile picture
  components/
    SiteNav.vue             sticky nav with scroll-spy
    HeroSection.vue
    AboutSection.vue
    SkillsSection.vue
    ProjectsSection.vue
    ContactSection.vue
    SiteFooter.vue
```

## Deploy

`npm run build` generates a fully static site in `dist/`. The site runs on Cloudflare (Workers static assets); `wrangler.jsonc` handles the SPA fallback via `not_found_handling: "single-page-application"`.
