# sosketchy.app

Landing page for So Sketchy. Static Astro site on GitHub Pages.

## Principles

- Static only. No SSR, no analytics, no third-party scripts. Inline client JS
  is allowed for runtime-dynamic values that would rot if baked at build time.
- Never render, log, or echo URL query params on any route.
- Brand tokens mirror the app's default UX pack; see `docs/brand.md`.
  Light-only to match.
- `/g` is reserved for the iMessage fallback URL. When it ships it stays
  `noindex`, no-referrer, and must not reflect any query param.

## Conventions

- Vanilla CSS. Native nesting, `@layer`, logical properties. No preprocessors,
  no frameworks.
- Semantic HTML. One `<h1>`, proper landmarks, skip-to-content link.
- A11y: WCAG AA contrast, `:focus-visible`, `prefers-reduced-motion`.
- SEO: full OG + Twitter tags, JSON-LD, canonical URLs, sitemap, robots.

## Deploy

Push `main`. GitHub Actions builds and deploys to Pages. Custom domain via
`public/CNAME`. DNS and repo settings live outside the codebase.
