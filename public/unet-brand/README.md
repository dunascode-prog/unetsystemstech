# Unet Systems brand kit (Modular Cube)

Everything Claude Code needs to add the Unet Systems logo, favicons and brand colours to a project.
The wordmark is already converted to outlines, so no font install is needed.

## What's in the folder

| Path | Use |
|---|---|
| `svg/unet-logo-horizontal-{light,dark,black,white}.svg` | Navbar and footer logo (symbol + "Unet Systems") |
| `svg/unet-logo-stacked-{light,dark,black,white}.svg` | Square-ish spaces, cover pages, login screens |
| `svg/unet-symbol-{light,dark,black,white}.svg` | Symbol alone (avatars, app icons, small spaces) |
| `favicon/favicon.svg` | Main favicon. Switches colour automatically in dark mode |
| `favicon/favicon.ico`, `favicon-16.png`, `favicon-32.png` | Fallbacks for older browsers (dark tile, readable on any tab colour) |
| `favicon/apple-touch-icon.png` | iOS home screen (180px) |
| `favicon/icon-192.png`, `icon-512.png` | PWA / manifest icons |
| `png/` | Transparent PNG logos and `og-image-1200x630.png` for social sharing |
| `tokens.css` | Brand colour variables |
| `BRAND.md` | Usage rules |

Variant naming: `light` = for light backgrounds, `dark` = for dark backgrounds, `black` / `white` = one colour.

## How to use with Claude Code

1. Put this folder in your project root (or unzip it there).
2. Start Claude Code in the project and paste:

> Read `unet-brand/README.md` and `unet-brand/BRAND.md`. Copy the files into the right public/static folders for this framework, add the favicon, apple-touch-icon and Open Graph tags to the document head, add the colour variables from `tokens.css` to the global stylesheet, and replace the current logo in the navbar and footer with the horizontal logo at 24px tall (light variant on light backgrounds, dark variant on dark backgrounds). Do not edit the SVGs.

If you only want to upload a few files, upload `README.md`, `BRAND.md`, `tokens.css`, the four `svg/unet-logo-horizontal-*.svg` files and the `favicon/` folder.

## Head tags (plain HTML; adapt for Next.js / Astro / etc.)

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:image" content="/og-image-1200x630.png">
<meta property="og:title" content="Unet Systems">
<meta property="og:description" content="Enterprise technology for modern business transformation.">
```

Manifest icons (if the site has a `manifest.webmanifest`):

```json
"icons": [
  { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
  { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
]
```

## Navbar example (light/dark switching with CSS)

```html
<a href="/" class="brand" aria-label="Unet Systems home">
  <img class="logo-on-light" src="/unet-logo-horizontal-light.svg" alt="Unet Systems" height="24">
  <img class="logo-on-dark"  src="/unet-logo-horizontal-dark.svg"  alt="Unet Systems" height="24">
</a>
```

```css
.logo-on-dark { display: none; }
@media (prefers-color-scheme: dark) {
  .logo-on-light { display: none; }
  .logo-on-dark  { display: block; }
}
/* If the site uses a theme class instead, swap the media query for [data-theme="dark"]. */
```
