/**
 * Every photo used on the site lives here.
 *
 * Each entry pairs a real photo URL with a bespoke gradient fallback. If a URL
 * ever 404s or a host blocks hotlinking, <Photo> paints the gradient instead,
 * so the deck never shows a broken-image icon.
 *
 * To swap a photo: find it on unsplash.com, hit "Download", and paste the
 * `images.unsplash.com/photo-...` URL here (drop the query string — `q` adds it).
 * Then run `npm run check:images` to confirm every URL still resolves.
 */

export type Img = {
  /** Remote photo URL. */
  src: string;
  /** Alt text — always written, never decorative-empty. */
  alt: string;
  /** Two-stop gradient shown while loading and if the photo fails. */
  fallback: [string, string];
  /** Credit line, shown in the colophon. */
  credit?: string;
};

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/**
 * Build an <img> src from an Unsplash photo PAGE url (unsplash.com/photos/<slug>).
 * The /download endpoint 302s to the CDN file with sizing params — the supported
 * way to hotlink a specific photo when you found its page, not its CDN id.
 */
export const fromPage = (pageUrl: string, w = 1600) =>
  `${pageUrl.replace(/\/+$/, '')}/download?force=true&w=${w}`;

/** A gradient-only placeholder for subjects whose photo hunt found no verified match. */
export const ph = (alt: string, fallback: [string, string]): Img => ({ src: '', alt, fallback });

/** An Img built from a search-verified photo page; gradient still covers failure. */
export const pageImg = (pageUrl: string, alt: string, fallback: [string, string]): Img => ({
  src: fromPage(pageUrl),
  alt,
  fallback,
  credit: 'Unsplash',
});

export const IMAGES = {
  hero: {
    src: u('photo-1537996194471-e657df975ab4', 2000),
    alt: 'Palm-fringed Balinese coastline at golden hour',
    fallback: ['#0d2b2a', '#c2571a'],
    credit: 'Unsplash',
  },
  heroAlt: {
    src: u('photo-1552733407-5d5c46c3bb3b', 2000),
    alt: 'Aerial view of a Bali beach and headland',
    fallback: ['#08211f', '#a8451a'],
    credit: 'Unsplash',
  },

  uluwatu: {
    src: fromPage('https://unsplash.com/photos/MK7q_XxTfAM'),
    alt: 'Melasti Beach beneath its carved limestone cliffs, Ungasan, on the Bukit Peninsula',
    fallback: ['#0a2540', '#e0864a'],
    credit: 'Unsplash',
  },
  uluwatuTemple: {
    src: fromPage('https://unsplash.com/photos/large-crowd-watches-a-fiery-performance-at-night-uGJzm_cc8gk'),
    alt: 'The Kecak fire dance at Uluwatu — a crowd rings the fire as night falls',
    fallback: ['#1c1233', '#d4682e'],
    credit: 'Unsplash',
  },
  bingin: {
    src: fromPage('https://unsplash.com/photos/ShQzSZzD0CA'),
    alt: 'Sunset from a warung table above Bingin Beach',
    fallback: ['#062b33', '#5fb0a5'],
    credit: 'Unsplash',
  },

  ubud: {
    src: fromPage('https://unsplash.com/photos/VcqoaqKpNYw'),
    alt: 'The Campuhan Ridge Walk winding between two green river valleys, Ubud',
    fallback: ['#0c2b16', '#8bbf3f'],
    credit: 'Unsplash',
  },
  riceTerrace: {
    src: fromPage('https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc'),
    alt: 'Tegalalang rice terraces in morning light',
    fallback: ['#10331a', '#a7c957'],
    credit: 'Unsplash',
  },
  jungleVilla: {
    src: u('photo-1604999565976-8913ad2ddb7c'),
    alt: 'Infinity pool at a villa overlooking dense jungle canopy',
    fallback: ['#07261f', '#3f9c7a'],
    credit: 'Unsplash',
  },
  waterfall: {
    src: u('photo-1544644181-1484b3fdfc62'),
    alt: 'Jungle waterfall falling into a green plunge pool',
    fallback: ['#062421', '#4fa89b'],
    credit: 'Unsplash',
  },
  batur: {
    src: fromPage('https://unsplash.com/photos/clouds-and-mountains-in-the-sky-1Q7SAzNIcmA'),
    alt: 'Sunrise above the clouds from Mount Batur',
    fallback: ['#221033', '#f0913c'],
    credit: 'Unsplash',
  },

  canggu: {
    src: fromPage('https://unsplash.com/photos/people-at-the-beach-during-golden-hour-7An3SypqhPk'),
    alt: 'Golden hour on the sand at Canggu',
    fallback: ['#2a1020', '#ef7d3a'],
    credit: 'Unsplash',
  },
  beachClub: {
    src: fromPage('https://unsplash.com/photos/coconut-palms-and-swimming-pool-facing-ocean-bUvmhwQ-gsw'),
    alt: 'Coconut palms and a pool facing the ocean at a Bali beach club',
    fallback: ['#331528', '#f2a65a'],
    credit: 'Unsplash',
  },

  nusaPenida: {
    src: fromPage('https://unsplash.com/photos/rock-cliff-tsnJEq4744s'),
    alt: 'Kelingking Beach — the T-Rex headland on Nusa Penida',
    fallback: ['#062a3d', '#48c3d6'],
    credit: 'Unsplash',
  },

  offering: {
    src: u('photo-1583417319070-4a69db38a482'),
    alt: 'Canang sari flower offering on a temple step',
    fallback: ['#2b1020', '#dd6b4f'],
    credit: 'Unsplash',
  },
  food: {
    src: u('photo-1604999333679-b86d54738315'),
    alt: 'Indonesian dishes spread across a table',
    fallback: ['#301a0d', '#d9903f'],
    credit: 'Unsplash',
  },
  scooter: {
    src: u('photo-1608661414718-3aa7ffabee16'),
    alt: 'Scooter parked on a palm-lined lane',
    fallback: ['#12281c', '#8fbf5a'],
    credit: 'Unsplash',
  },
  plane: {
    src: u('photo-1436491865332-7a61a109cc05'),
    alt: 'Aircraft wing above a cloud layer at altitude',
    fallback: ['#0b1c33', '#5b8fc7'],
    credit: 'Unsplash',
  },
} satisfies Record<string, Img>;

export type ImageKey = keyof typeof IMAGES;
