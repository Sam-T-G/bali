# Bali 2027

A mobile-first pitch deck for a ten-person trip to Bali, **Jun 19 – 29, 2027**.
Built as a static site so it can be shared as a single link.

**Live:** https://sam-t-g.github.io/bali/ *(after the first deploy — see below)*

---

## What's in it

| Section | What it does |
| --- | --- |
| Hero | Cinematic parallax open |
| The pitch | Why three basecamps instead of one |
| Getting there | Real SQ routing, LAX↔DPS, with a fare-class switcher |
| Basecamps | Uluwatu / Ubud / Canggu, each with named villas and nightly rates |
| Day by day | Nine days, each with one group **anchor** plus a *Send it* and a *Take it easy* option |
| The menu | 17 à-la-carte activities, filterable by intensity, priced per person |
| The money | Interactive ledger — Lean / Comfort / Full send, itemised, live totals |
| Know before | Visa, levy, weather, money, the 21% rule, scooters |

Everything is priced **per person in USD**, with shared costs already divided by ten.

## Stack

- **Next.js 16** (App Router, static export) + **React 19** + **TypeScript**
- **Tailwind CSS v4** — theme tokens in `src/app/globals.css`
- **Motion** (Framer Motion 12) — scroll reveals, shared-layout pills, rolling numerals
- **Lenis** — momentum scroll on pointer devices only; phones keep native scrolling
- Deploys to **GitHub Pages** via Actions

Respects `prefers-reduced-motion` throughout, and every interactive control is
keyboard-reachable with a visible focus ring.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → ./out
```

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and publishes on every
push to `main`. One-time setup:

**Settings → Pages → Build and deployment → Source: GitHub Actions**

`basePath` is set from the repo name at build time, so the site works at
`/<repo>/` without any hardcoding. To serve from a custom domain or the root of
a `*.github.io` repo, drop the `NEXT_PUBLIC_BASE_PATH` env var from the workflow.

## Editing the content

All copy, prices, villas and itinerary live in **`src/data/trip.ts`**. No JSX to
touch — change the data and the layout follows. The budget totals are derived
from the `BUDGET` array, so editing a line item updates every total on the page.

## Photos — read this before sharing

Photos are hotlinked from Unsplash and centralised in **`src/data/images.ts`**
and **`src/data/menu.ts`**. Named-place photos use `unsplash.com/photos/<slug>/download`
URLs whose photo pages were found in live search results with the subject named
in the title — no guessed IDs. Subjects that couldn't be verified render a
gradient placeholder instead of a wrong photo, and lodging cards link out to
the property's live listing for real property photos.
Each entry pairs a URL with a bespoke gradient, and the `<Photo>` component
falls back to that gradient if the image fails — so the deck degrades to
something that still looks deliberate rather than showing broken-image icons.

**The image URLs in this repo have not been verified against a live network**
— the sandbox this was built in blocks all image CDNs. Before you send the link
to anyone, run:

```bash
npm run check:images
```

It HEADs every photo and prints exactly which ones failed. To replace one: find
a photo on unsplash.com, hit **Download**, and paste its `photo-…` id into the
matching entry in `src/data/images.ts`.

## Prices

Researched **August 2026** for June 2027 travel. Sources are linked in the site
footer. These are well-researched estimates, not quotes — airfares and villa
rates move, and June is Bali's peak season. Verify before anyone sends money.
