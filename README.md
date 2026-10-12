# Unet Systems website

Marketing site for [Unet Systems](https://www.unetsystemtech.com/), an enterprise technology company in Lagos. Unet offers software engineering, system integration, database management, IT service desk, DevOps, security and AI integration.

Built with Next.js 15 (App Router), React 19, Tailwind CSS v4 and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | What it does                    |
| --------------- | ------------------------------- |
| `npm run dev`   | Start the dev server            |
| `npm run build` | Create a production build       |
| `npm run start` | Serve the production build      |
| `npm run lint`  | Run ESLint                      |

## Project layout

```
src/
  app/
    layout.tsx        fonts, metadata, script that applies the saved theme before first paint
    page.tsx          page section order
    globals.css       theme tokens (light by default, `.dark` override)
  components/
    Navbar.tsx, Footer.tsx, ThemeToggle.tsx
    sections/         one file per page section (see below)
    ui/               Button, Logo, SectionHeading, Reveal, Marquee, LightBars
  lib/content.ts      nav links and the client logo list
public/images/clients/  client logos
```

### Page sections (in order)

| Section             | File                    | Content                                                    |
| ------------------- | ----------------------- | ---------------------------------------------------------- |
| Hero                | `Hero.tsx`              | Headline, "Book Consultation" call to action               |
| Client strip        | `LogoCloud.tsx`         | Scrolling client logos                                     |
| Core services       | `CoreServices.tsx`      | The four core services                                     |
| Custom development  | `CustomDevelopment.tsx` | Four focus areas in a tabbed panel                         |
| Value-added layers  | `ValueLayers.tsx`       | Security, infrastructure, monitoring, AI, DevOps           |
| How we work         | `HowItWorks.tsx`        | Three-step process                                         |
| Our approach        | `Approach.tsx`          | Four-phase methodology and five engineering pillars        |
| Proprietary tools   | `ProprietaryTools.tsx`  | In-house tools carousel and headline stats                 |
| Who we work with    | `Clients.tsx`           | Scrolling client logo wall                                 |
| Contact             | `FinalCta.tsx`          | "Schedule a Consultation" (opens an email)                 |

## Theming

Light mode is the default. The sun/moon button in the navbar switches to dark mode and saves the choice in `localStorage` under the key `theme`. All colours come from CSS variables in `globals.css`. The `:root` block holds the light palette and `.dark` holds the dark one. Components use the Tailwind tokens `bg-base`, `bg-panel`, `text-fg`, `text-dim`, `border-line` and `text-cyan` rather than hard-coded colours.

## Client logos

Logos live in `public/images/clients/` and are listed in `src/lib/content.ts`. Each is a trimmed, single-colour mark: white on a transparent background, 240px tall. The page recolours them to match the theme. They come from official SVG or high-resolution sources where these were available (Wikimedia Commons, Wikipedia, the company's own site). The rest come from unetsystemtech.com.

To add a logo:

1. Add a white-on-transparent PNG, cropped tight and about 240px tall, to `public/images/clients/`.
2. Add an entry to `companies` in `src/lib/content.ts` with its pixel `width` and `height`.
3. Optionally set `scale`, for example `0.85`, if the logo looks too heavy or too light next to the others.

The page sizes logos by aspect ratio, so wide wordmarks sit shorter and square marks sit taller.

> Client names and logos are trademarks of their owners. Confirm permission before publishing.

## Content source

All copy is adapted from unetsystemtech.com: services, process, methodology, pillars, stats and contact details.
