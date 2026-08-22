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
    src: u('photo-1531778272849-d1dd22444c06'),
    alt: 'Limestone cliffs dropping into turquoise water on the Bukit Peninsula',
    fallback: ['#0a2540', '#e0864a'],
    credit: 'Unsplash',
  },
  uluwatuTemple: {
    src: u('photo-1596422846543-75c6fc197f07'),
    alt: 'Pura Luhur Uluwatu perched on a sea cliff at dusk',
    fallback: ['#1c1233', '#d4682e'],
    credit: 'Unsplash',
  },
  bingin: {
    src: u('photo-1512100356356-de1b84283e18'),
    alt: 'Surfers paddling out at a reef break below cliffside warungs',
    fallback: ['#062b33', '#5fb0a5'],
    credit: 'Unsplash',
  },

  ubud: {
    src: u('photo-1518548419970-58e3b4079ab2'),
    alt: 'Terraced rice paddies stepping down a green valley near Ubud',
    fallback: ['#0c2b16', '#8bbf3f'],
    credit: 'Unsplash',
  },
  riceTerrace: {
    src: u('photo-1573790387438-4da905039392'),
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
    src: u('photo-1570789210967-2cac24afeb00'),
    alt: 'Sunrise above the clouds from a volcano summit',
    fallback: ['#221033', '#f0913c'],
    credit: 'Unsplash',
  },

  canggu: {
    src: u('photo-1546484475-7f7bd55792da'),
    alt: 'Black-sand beach and sunset crowd on Bali’s west coast',
    fallback: ['#2a1020', '#ef7d3a'],
    credit: 'Unsplash',
  },
  beachClub: {
    src: u('photo-1559628233-100c798642d4'),
    alt: 'Poolside beach club loungers facing the ocean at sunset',
    fallback: ['#331528', '#f2a65a'],
    credit: 'Unsplash',
  },

  nusaPenida: {
    src: u('photo-1555400038-63f5ba517a47'),
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
