# sosketchy.app

Landing page for So Sketchy. Static Astro site on GitHub Pages.

So Sketchy is an async iMessage game. No server, no accounts. Gameplay state
travels in iMessage URLs. The site must not leak it.

## Principles

- Static only. No SSR, no analytics, no third-party scripts. Inline client JS
  is allowed for runtime-dynamic values that would rot if baked at build time.
- Never render, log, or echo URL query params on any route.
- Brand tokens mirror the app's default UX pack; see `docs/brand.md`.
- `/g` is reserved for the iMessage fallback URL. When it ships it stays
  `noindex`, no-referrer, and must not reflect any query param.

## Conventions

- Vanilla CSS. Native nesting, `@layer`, logical properties.

## Architecture

- Single layout: `src/layouts/Base.astro`. Owns head, meta, OG, favicons.
- JSON-LD: `src/components/StructuredData.astro`. New schemas go here.
- `SITE_URL` env required. Build and dev fail without it.

## Deploy

Push `main`. GitHub Actions builds and deploys to Pages. Custom domain via
`public/CNAME`. DNS and repo settings live outside the codebase.

## Documentation

All writes to `CLAUDE.md`, `README.md`, `docs/**`, and `.claude/**/*.md` route
through `ssk-doc-reviewer`. No direct edits.
