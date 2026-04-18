# Brand

Tokens mirror the So Sketchy app's default UX pack (`DefaultUXPack.swift`).
Light-only on the site to match the app's default appearance.

## Palette

| Token | Hex | Role |
|---|---|---|
| Coral | `#C75B6A` | Accent (title, links, focus ring) |
| Coral deep | `#A9455A` | Hover/emphasis on coral |
| Paper | `#FAF9F7` | Page background |
| Stone | `#E6E2DE` | Subtle surfaces, separator |
| Ink | `#1C1917` | Body text |
| Ink soft | `#44403C` | Secondary text |
| Ink muted | `#8C827E` | Tertiary text |

## Contrast

| Foreground | Background | Ratio | Pass |
|---|---|---|---|
| Ink on Paper | `#1C1917` / `#FAF9F7` | ~18:1 | AAA |
| Coral on Paper | `#C75B6A` / `#FAF9F7` | ~4.6:1 | AA |
| White on Coral | `#FFFFFF` / `#C75B6A` | ~4.6:1 | AA |
| Ink muted on Paper | `#8C827E` / `#FAF9F7` | ~4.5:1 | AA |

## Where tokens live

CSS custom properties in `src/styles/global.css` under `@layer base > :root`.
