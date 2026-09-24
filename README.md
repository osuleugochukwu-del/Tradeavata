# Trade Avata

Trade Avata is a flexible company platform for products, technology, tools, applications, resources and education that make trading simpler.

> **TRADE SIMPLE.**

Trading doesn't have to be complicated when you have the right tools.

## Stack
- Astro frontend
- Firebase-ready authentication/database/storage boundary
- Vimeo/YouTube-ready video references
- GitHub-ready source and CI

## Product marketplace
The Store is designed as a searchable product marketplace. Products can belong to multiple platforms, including MT4, MT5, cTrader, TradingView, Web, Windows, macOS, Android and iOS. Product types include indicators, applications, tools, courses and digital resources.

The current catalogue in `src/data/site.js` is seed data. Production product management should move these records into Firebase so administrators can create, edit, publish, schedule and retire products without changing source code.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Firebase environment variables are documented in `.env.example`. No credentials are included in this repository.

## GitHub Pages

This project is configured to deploy from the `main` branch with GitHub Actions. For a GitHub Free repository, keep the repository public, then go to **Settings → Pages → Build and deployment → Source → GitHub Actions**. GitHub will run `.github/workflows/deploy-pages.yml` on pushes to `main`.

If the repository name is `trade-avata`, the Astro base path is already set to `/trade-avata`. If you use a different repository name, update `base` in `astro.config.mjs` before publishing.
