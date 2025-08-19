# Omaha Electrician (Astro)

Astro site with pages: Home, Services, Locations, About, Contact. Pre-configured for Vercel static deploy.

## Requirements
- Node 18+
- Git
- GitHub + Vercel accounts

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build` (output in `dist`)

## Deploy to Vercel (Git Integration)
1) Push to GitHub.
2) In Vercel, import the repo.
3) Framework: Astro; Build: `astro build`; Output: `dist`.

## Update Business Info
- Title/meta/nav: `src/layouts/BaseLayout.astro`
- Homepage copy: `src/pages/index.astro`
- Services/Areas: `src/pages/services.astro`, `src/pages/locations.astro`
- Contact details/form: `src/pages/contact.astro`
