import { IMAGES, pageImg, type Img } from './images';

/* ─────────────────────────────  TRIP SHELL  ───────────────────────────── */

export const TRIP = {
  title: 'Bali',
  year: '2027',
  tagline: 'Nine days on the island. Three basecamps. Zero obligations.',
  dateLabel: 'Jun 19 – 29, 2027',
  groundLabel: 'Jun 21 – 29 · 8 nights on the island',
  partySize: 10,
  origin: { code: 'LAX', city: 'Los Angeles' },
  destination: { code: 'DPS', city: 'Denpasar, Bali' },
  carrier: 'Singapore Airlines',
  /** Everything on this page was priced in Aug 2026 for Jun 2027 travel. */
  pricedOn: 'August 2026',
} as const;

export const ALT_DATES = {
  label: 'Cheaper window',
  body:
    'Depart Mon Jun 21 instead: Monday fares consistently price under weekend ones on this route, and ' +
    'landing home Tue Jun 29 or Wed Jun 30 keeps the trip to 6–7 island nights — roughly $80–170 less ' +
    'per person all-in and one less PTO day. The vote between windows is on the table below the budget.',
} as const;

/* ─────────────────────────────  THE PITCH  ───────────────────────────── */

export const PITCH = {
  kicker: 'The proposal',
  heading: 'One island, three completely different weeks, stacked back to back.',
  body: [
    'Bali gets pitched as one place. It is not. The Bukit Peninsula is limestone cliffs and reef breaks. ' +
    'Ubud is river gorge and rice terrace, forty minutes inland and ten degrees cooler. Canggu is black sand ' +
    'and a sunset scene that runs until it does not.',
    'So we do all three. Three nights on the cliffs, three in the jungle, two on the coast — each basecamp a ' +
    'single villa the whole group shares, each move under two hours in a van.',
    'Priced against what these places actually list for on Agoda and Booking — not what travel blogs ' +
    'showcase. The real Bali market puts ten friends in private pool villas and beachfront hotels for ' +
    'about $27 a person a night, and the whole trip clears at roughly the cost of the flight plus $800.',
    'The part that actually matters: nobody has to do anything. Every day has one anchor — a dinner, a sunset, ' +
    'one thing we do together — and everything either side of it is opt-in. Sunrise volcano at 2am and a spa ' +
    'day are the same day. Show up for the anchor, do what you want with the rest.',
  ],
} as const;

export const STATS = [
  { value: '9', label: 'days on the island', sub: 'Jun 21 – 29' },
  { value: '3', label: 'basecamps', sub: 'Uluwatu · Ubud · Canggu' },
  { value: '10', label: 'of us', sub: 'private villas, split evenly' },
  { value: '$1.7k', label: 'all-in, per person', sub: 'lean tier — flights, beds, food, the lot' },
] as const;

/* ─────────────────────────────  FLIGHTS  ───────────────────────────── */

export type Leg = {
  flight: string;
  from: string;
  to: string;
  depart: string;
  arrive: string;
  duration: string;
  aircraft: string;
  note?: string;
};

export const OUTBOUND: Leg[] = [
  {
    flight: 'SQ 37',
    from: 'LAX · Los Angeles',
    to: 'SIN · Singapore',
    depart: 'Sat Jun 19 · 22:05',
    arrive: 'Mon Jun 21 · 07:55',
    duration: '17h 50m',
    aircraft: 'A350-900 · nonstop',
    note: 'You lose Sunday entirely to the date line. Sleep on this one.',
  },
  {
    flight: 'SQ 938',
    from: 'SIN · Singapore',
    to: 'DPS · Bali',
    depart: 'Mon Jun 21 · 09:15',
    arrive: 'Mon Jun 21 · 11:55',
    duration: '2h 40m',
    aircraft: 'Boeing 787',
    note: '80-minute connection at Changi — above SQ’s 50-minute minimum, same terminal-side transfer, bags checked through.',
  },
];

export const RETURN: Leg[] = [
  {
    flight: 'SQ 939',
    from: 'DPS · Bali',
    to: 'SIN · Singapore',
    depart: 'Tue Jun 29 · 13:15',
    arrive: 'Tue Jun 29 · 15:55',
    duration: '2h 40m',
    aircraft: 'Boeing 787',
    note: 'Slow morning, late checkout, lunch at the villa. No 4am wake-up to end the trip.',
  },
  {
    flight: 'SQ 38',
    from: 'SIN · Singapore',
    to: 'LAX · Los Angeles',
    depart: 'Tue Jun 29 · 20:45',
    arrive: 'Tue Jun 29 · 21:50',
    duration: '16h 05m',
    aircraft: 'A350-900 · nonstop',
    note: 'Land the same calendar day you left. Roughly five hours in Changi — which is a genuinely good airport to be stuck in.',
  },
];

export type FareTier = {
  id: 'economy' | 'premium' | 'business';
  name: string;
  price: number;
  range: string;
  perks: string[];
  recommended?: boolean;
};

export const FARES: FareTier[] = [
  {
    id: 'economy',
    name: 'Saver · EVA / China Airlines',
    price: 1150,
    range: '$1,000 – $1,300',
    perks: ['One stop via Taipei or Seoul, ~20–22h', '2 × 23kg checked on both carriers', 'Airline-direct fares published at $1,094–1,098 — the book-early win'],
  },
  {
    id: 'premium',
    name: 'Singapore Airlines',
    price: 1350,
    range: '$1,150 – $1,550',
    perks: ['Nonstop LAX–SIN, then 2h40m to Bali', 'Matches the published June all-airline average for the route', 'Best long-haul economy in the sky, bags checked through'],
    recommended: true,
  },
  {
    id: 'business',
    name: 'SQ Premium Economy',
    price: 2300,
    range: '$1,850 – $2,600',
    perks: ['38" pitch on the 17h50m leg — where it actually matters', 'Individual upgrade, never part of the group budget', 'Book the Cook meal ordering + priority boarding'],
  },
];

export const FLIGHT_NOTES = [
  'Fares are round-trip per person for June 2027, anchored to published airline-direct fares and route averages, sampled ' + TRIP.pricedOn + '.',
  'Book Sep–Dec 2026 (6–9 months out). Split the ten of us into 2–3 separate bookings on the same itinerary rather than one group booking — group desks price above the lowest fare bucket.',
  'Monday departures consistently price below weekend ones on this route. Anything near $1,100 on a quality one-stop is a book-it-now number.',
];

/* ─────────────────────────────  BASECAMPS  ───────────────────────────── */

export type Stay = {
  name: string;
  bedrooms: string;
  rate: string;
  detail: string;
  /** Search link to the property's live listing — real photos and tonight's rate. */
  link?: string;
  /** Search-verified area/property photo; a gradient stands in when unverified. */
  image?: Img;
};

export type Basecamp = {
  id: string;
  name: string;
  region: string;
  nights: number;
  dates: string;
  image: Img;
  accent: string;
  pitch: string;
  vibe: string[];
  stays: Stay[];
  transferIn: string;
};

export const BASECAMPS: Basecamp[] = [
  {
    id: 'uluwatu',
    name: 'Uluwatu',
    region: 'Bukit Peninsula',
    nights: 3,
    dates: 'Mon Jun 21 → Thu Jun 24',
    image: IMAGES.uluwatu,
    accent: '#e0864a',
    pitch:
      'A limestone shelf on the southern tip of the island, seventy metres above the Indian Ocean. World-class ' +
      'reef breaks below, cliff bars above, and a sunset that the whole peninsula turns around to watch.',
    vibe: ['Cliffs + reef breaks', 'Sunset bars', 'Slowest mornings of the trip'],
    stays: [
      {
        name: 'Villa Anak · Ungasan',
        image: pageImg('https://unsplash.com/photos/MK7q_XxTfAM', 'Melasti Beach cliffs, Ungasan — the villa\'s neighbourhood', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Villa+Anak%22+Ungasan+Bali+agoda+OR+booking',
        bedrooms: '5 BR villa',
        rate: '$280 – 340 / night whole villa',
        detail: 'Real, bookable 5-bed/5-bath private-pool villa on Booking.com — whole-house privacy for ten at $30 a head a night. The best rebuttal to the $1,000-a-night villa myth.',
      },
      {
        name: 'Swiss-Belresort Pecatu',
        image: pageImg('https://unsplash.com/photos/ShQzSZzD0CA', 'Sunset over Bingin Beach, minutes from Pecatu', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Swiss-Belresort+Pecatu%22+Bali+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$45 – 60 / room / night',
        detail: 'Chain 4-star with a big pool on the Bukit, VAT included. The whole group sleeps well for ~$260 a night total — about $26 a head.',
      },
      {
        name: 'Padang-Padang Inn',
        image: pageImg('https://unsplash.com/photos/aerial-shot-of-seashore-EztqREO1cag', 'Padang Padang beach cove, a short walk from the inn', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Padang-Padang+Inn%22+Pecatu+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$35 – 50 / room / night',
        detail: 'Rated-8.2 pool inn a few minutes on foot from Padang Padang beach. The lean option at ~$21 a head.',
      },
    ],
    transferIn: 'DPS → Uluwatu · 45–60 min · two vans',
  },
  {
    id: 'ubud',
    name: 'Ubud',
    region: 'Central highlands',
    nights: 3,
    dates: 'Thu Jun 24 → Sun Jun 27',
    image: IMAGES.ubud,
    accent: '#8bbf3f',
    pitch:
      'Inland and uphill: river gorges, terraced paddies, and a town that has been the island’s cultural centre ' +
      'for a century. Cooler, greener, and where the trip stops being a beach holiday for three days.',
    vibe: ['Rice terrace + gorge', 'Volcano at sunrise', 'Best food on the island'],
    stays: [
      {
        name: 'Dupa Ubud Villa',
        image: pageImg('https://unsplash.com/photos/VcqoaqKpNYw', 'The Campuhan ridge valleys of Ubud', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Dupa+Ubud+Villa%22+Ubud+agoda+OR+booking',
        bedrooms: '5 pool-villa units',
        rate: '$38 – 48 / unit / night in June',
        detail: 'The arbitrage of the trip: every couple gets its own standalone private-pool villa for guesthouse money — the exact product agencies resell at $700+ a night. ~$24 a head.',
      },
      {
        name: 'Bhuwana Ubud Hotel',
        image: pageImg('https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc', 'Working rice terraces — the hotel\'s setting north of Ubud', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Bhuwana+Ubud+Hotel%22+farming+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$35 – 55 / room / night, breakfast incl.',
        detail: 'Rice-field pool hotel with its own farm just outside the centre, backed by actual-paid rates of $26–37 a room. Bulletproof value at ~$23 a head.',
      },
      {
        name: 'Element by Westin Bali Ubud',
        image: pageImg('https://unsplash.com/photos/VcqoaqKpNYw', 'Ubud jungle valley, the resort\'s terrain', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Element+Bali+Ubud%22+Westin+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$90 – 130 / room / night',
        detail: 'The one branded jungle-resort splurge, with verified $82 lows if we book the cheap bucket early. ~$55 a head and reads as a flex, not a shock.',
      },
    ],
    transferIn: 'Uluwatu → Ubud · ~2h · stop at Tegenungan Waterfall en route',
  },
  {
    id: 'canggu',
    name: 'Canggu',
    region: 'West coast · Pererenan',
    nights: 2,
    dates: 'Sun Jun 27 → Tue Jun 29',
    image: IMAGES.canggu,
    accent: '#ef7d3a',
    pitch:
      'Black sand, a beginner-friendly beach break, and the densest concentration of good food and loud sunsets ' +
      'on the island. Two nights is exactly right — long enough to enjoy it, short enough to leave wanting more.',
    vibe: ['Beach clubs', 'Learn-to-surf break', 'Last-night energy'],
    stays: [
      {
        name: 'FRii Bali Echo Beach',
        image: pageImg('https://unsplash.com/photos/people-at-the-beach-during-golden-hour-7An3SypqhPk', 'Golden hour on the Canggu sand the hotel sits on', ['#2a1020', '#ef7d3a']),
        link: 'https://www.google.com/search?q=%22FRii+Bali+Echo+Beach%22+Canggu+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$46 – 66 / room / night',
        detail: 'Pool hotel literally on Echo Beach with verified $37–46 baselines — the best location-per-dollar of the whole trip. ~$28 a head.',
      },
      {
        name: 'Aston Canggu Beach Resort',
        image: pageImg('https://unsplash.com/photos/people-on-a-beach-zYbIdDXTjgQ', 'Batu Bolong beach, a short walk from the hotel', ['#2a1020', '#ef7d3a']),
        link: 'https://www.google.com/search?q=%22Aston+Canggu+Beach+Resort%22++agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$56 – 80 / room / night, breakfast incl.',
        detail: 'Rooftop pool, short walk to Batu Bolong. $47–52 baselines from two independent aggregators; ~$34 a head in June.',
      },
      {
        name: 'Two adjacent 3BR pool villas',
        bedrooms: '2 × 3 BR',
        rate: '$155 – 250 / villa / night, tax incl.',
        detail: 'Agoda has deep 3BR inventory at IDR 2.5–4M a night — two units beat one big villa on price and cancellation flexibility for a two-night stop. ~$40 a head.',
      },
    ],
    transferIn: 'Ubud → Canggu · ~1h 30m · stop at Tirta Empul en route',
  },
];

/* ─────────────────────────────  ITINERARY  ───────────────────────────── */

export type Track = {
  kind: 'send' | 'cruise';
  title: string;
  time: string;
  body: string;
  cost: string;
};

export type Day = {
  n: number | null;
  date: string;
  weekday: string;
  basecamp: string;
  accent: string;
  headline: string;
  image?: Img;
  /** The one thing the whole group does. Everything else is optional. */
  anchor: { time: string; title: string; body: string } | null;
  tracks: Track[];
};

export const DAYS: Day[] = [
  {
    n: null,
    date: 'Jun 19',
    weekday: 'Saturday',
    basecamp: 'In transit',
    accent: '#5b8fc7',
    headline: 'LAX, 22:05. Wheels up.',
    image: IMAGES.plane,
    anchor: {
      time: '19:30',
      title: 'Meet at Tom Bradley, Terminal B',
      body:
        'Two and a half hours before push. Group check-in together so the bags tag through to Denpasar in one go. ' +
        'Sunday does not happen — we cross the date line and land Monday morning in Singapore.',
    },
    tracks: [],
  },
  {
    n: 1,
    date: 'Jun 21',
    weekday: 'Monday',
    basecamp: 'Uluwatu',
    accent: '#e0864a',
    headline: 'Land, shower, watch the sun go down off a cliff.',
    image: IMAGES.uluwatu,
    anchor: {
      time: '18:30',
      title: 'First night at the villa',
      body:
        'Villa cook dinner on the terrace — $10–14 a head including the grocery run, which is the standard way ' +
        'villa kitchens work here. Nobody is going anywhere on day one and nobody should.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Sundowners at Single Fin',
        time: '17:00 – 19:00',
        body:
          'Twelve minutes from the villa, cantilevered over the Uluwatu break. Beer runs about $3.50, cocktails $8. ' +
          'Push through the jet lag and you will sleep on local time tonight.',
        cost: '$20 – 35',
      },
      {
        kind: 'cruise',
        title: 'Pool, and nothing else',
        time: 'All afternoon',
        body:
          'You have been travelling for roughly 26 hours. The villa has a pool. This is a completely legitimate ' +
          'use of day one and no one will give you grief for it.',
        cost: 'Free',
      },
    ],
  },
  {
    n: 2,
    date: 'Jun 22',
    weekday: 'Tuesday',
    basecamp: 'Uluwatu',
    accent: '#e0864a',
    headline: 'Fire dance on a sea cliff at sunset.',
    image: IMAGES.uluwatuTemple,
    anchor: {
      time: '17:00',
      title: 'Pura Luhur Uluwatu + Kecak fire dance',
      body:
        'An 11th-century temple on a 70-metre cliff, and a hundred men chanting in a ring around a fire as the sun ' +
        'drops behind them. Temple entry ~$3, dance ticket IDR 150,000 (~$9). Go early for a seat on the ocean side, ' +
        'and hold onto your sunglasses — the macaques are professionals.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Dawn surf at Padang Padang',
        time: '06:00 – 09:00',
        body:
          'Down the staircase, through the gap in the rock, and into one of the best waves on the Bukit. Board hire ' +
          'about $7 a day; an instructor for the never-evers runs $25–35 for two hours.',
        cost: '$7 – 35',
      },
      {
        kind: 'cruise',
        title: 'Cliffside day club',
        time: '11:00 – 16:00',
        body:
          'Ulu Cliffhouse or Savaya — infinity pools cut into the cliff edge, DJs from midday, no obligation to ' +
          'move for five hours. Entry around $15, or a daybed on a minimum spend the group can split.',
        cost: '$15 – 60',
      },
    ],
  },
  {
    n: 3,
    date: 'Jun 23',
    weekday: 'Wednesday',
    basecamp: 'Uluwatu',
    accent: '#e0864a',
    headline: 'The big optional day: Nusa Penida.',
    image: IMAGES.nusaPenida,
    anchor: {
      time: '19:30',
      title: 'Seafood on the sand at Bingin',
      body:
        'Warungs built into the cliff face, tables on the beach, whole grilled fish for about $12. The Penida crew ' +
        'gets back around 18:30, so everyone lands at the same table regardless of how the day went.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Nusa Penida day trip',
        time: '06:15 – 18:30',
        body:
          'An hour to Sanur, forty minutes on a fast boat, then Kelingking Beach — the T-Rex headland you have ' +
          'seen a thousand times — plus Angel’s Billabong, Broken Beach and a snorkel stop. Long day, genuinely ' +
          'spectacular, and the single most photographed thing we will do.',
        cost: '$45 – 65',
      },
      {
        kind: 'cruise',
        title: 'Spa, then Thomas Beach',
        time: 'Whenever',
        body:
          'A long Balinese massage for $10–15 at a neighbourhood spa — a fraction of home prices, and better. Then the ' +
          'staircase down to Thomas Beach, which is the quiet one the tour buses never find.',
        cost: '$30',
      },
    ],
  },
  {
    n: 4,
    date: 'Jun 24',
    weekday: 'Thursday',
    basecamp: 'Uluwatu → Ubud',
    accent: '#8bbf3f',
    headline: 'Two hours inland. Everything changes.',
    image: IMAGES.waterfall,
    anchor: {
      time: '10:00',
      title: 'Convoy to Ubud, waterfall on the way',
      body:
        'Two vans, bags in, out by ten. We break the drive at Tegenungan Waterfall (entry ~$1.30) — a wall of ' +
        'water into a swimming pool fifteen minutes short of Ubud. Villa check-in mid-afternoon, then dinner in town.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Sidemen detour',
        time: 'Add ~2h',
        body:
          'The long way round, through the rice-terrace valley under Mount Agung. Almost no tourists, and the ' +
          'best drive on the island. Costs an extra two hours and is worth every minute.',
        cost: 'Included in van hire',
      },
      {
        kind: 'cruise',
        title: 'Straight there',
        time: '10:00 – 12:00',
        body: 'Direct run, at the villa by noon, in the pool by 12:15. Ubud is where the trip slows down anyway.',
        cost: 'Included',
      },
    ],
  },
  {
    n: 5,
    date: 'Jun 25',
    weekday: 'Friday',
    basecamp: 'Ubud',
    accent: '#8bbf3f',
    headline: 'Rice terraces, then whatever you want.',
    image: IMAGES.riceTerrace,
    anchor: {
      time: '07:30',
      title: 'Tegalalang before the crowds',
      body:
        'On site by half seven, an hour ahead of the buses, when the light is still low across the terraces and ' +
        'you can actually walk the paths. Entry ~$1.50 plus small donations at the ladder gates. Long breakfast in ' +
        'town after — and the rest of the day is yours.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Ayung River rafting',
        time: '10:00 – 15:00',
        body:
          'Twelve kilometres of class II–III through a jungle gorge, with carved stone reliefs in the canyon walls ' +
          'and a waterfall you paddle straight under. Lunch included.',
        cost: '$40 – 50',
      },
      {
        kind: 'cruise',
        title: 'Campuhan Ridge + café crawl',
        time: '06:30 – 12:00',
        body:
          'A 1.7km ridgeline walk between two river valleys, free, best at dawn. Then Ubud’s café scene, which is ' +
          'genuinely world-class and where half the group will end up spending the afternoon.',
        cost: '$0 – 25',
      },
    ],
  },
  {
    n: 6,
    date: 'Jun 26',
    weekday: 'Saturday',
    basecamp: 'Ubud',
    accent: '#8bbf3f',
    headline: 'Volcano at 2am, or absolutely not.',
    image: IMAGES.batur,
    anchor: {
      time: '19:00',
      title: 'Long group dinner',
      body:
        'The proper sit-down of the trip. Ubud has the island’s best kitchens — Locavore-tier tasting menus at the ' +
        'top end, extraordinary $6 plates at the bottom. Budget $25–60 depending on where we land.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Mount Batur sunrise trek',
        time: '02:00 – 11:00',
        body:
          'Pickup at 2am, two hours up a 1,717m active volcano in the dark, and sunrise from the crater rim over ' +
          'Lake Batur with breakfast eggs cooked in a steam vent. Not technical, but it is a real hike and you ' +
          'will need the head torch and a layer.',
        cost: '$30 – 45',
      },
      {
        kind: 'cruise',
        title: 'Yoga Barn, Monkey Forest, spa',
        time: '09:00 – 17:00',
        body:
          'A drop-in class at the Yoga Barn (~$12), then the Sacred Monkey Forest — 12.5 hectares, 1,200 macaques, ' +
          'four 14th-century temples, entry IDR 100,000 on weekends (~$6). Massage in the afternoon.',
        cost: '$18 – 50',
      },
    ],
  },
  {
    n: 7,
    date: 'Jun 27',
    weekday: 'Sunday',
    basecamp: 'Ubud → Canggu',
    accent: '#ef7d3a',
    headline: 'Holy spring in the morning, black sand by sunset.',
    image: IMAGES.offering,
    anchor: {
      time: '17:30',
      title: 'Sunday sunset on the west coast',
      body:
        'La Brisa at Pererenan — driftwood build, free entry before 4pm, live music into the evening. The west-facing ' +
        'coast means the sun goes down directly in front of you, which the Bukit cliffs never quite give you.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Melukat at Tirta Empul',
        time: '08:00 – 10:30',
        body:
          'A 10th-century water temple where Balinese Hindus have purified under the same spouts for a thousand ' +
          'years. You can take part — sarong provided, entry IDR 75,000 (~$5). Go at opening; by ten it is packed.',
        cost: '$5',
      },
      {
        kind: 'cruise',
        title: 'Slow checkout, straight to the coast',
        time: '11:00 – 12:30',
        body: 'Late breakfast at the villa, easy 90-minute run to Pererenan, in the pool before the sunset crowd builds.',
        cost: 'Included',
      },
    ],
  },
  {
    n: 8,
    date: 'Jun 28',
    weekday: 'Monday',
    basecamp: 'Canggu',
    accent: '#ef7d3a',
    headline: 'Last full day. Make it count or make it horizontal.',
    image: IMAGES.beachClub,
    anchor: {
      time: '19:30',
      title: 'The last supper',
      body:
        'Everyone, one table, Pererenan. Then whatever happens after that is between you and your flight home ' +
        'on Tuesday afternoon.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Surf lesson at Batu Bolong + beach club',
        time: '07:00 – 17:00',
        body:
          'Batu Bolong is a slow, forgiving beach break and the best place on the island to stand up for the first ' +
          'time — two-hour lesson with a board about $25–30. Then Finns or Atlas for the afternoon.',
        cost: '$35 – 90',
      },
      {
        kind: 'cruise',
        title: 'Café, market, massage',
        time: 'Whenever',
        body:
          'Canggu’s café strip is absurd, the Love Anchor market is where the souvenirs actually get bought, and ' +
          'a 90-minute massage is $12–18. A perfectly good way to spend a last day.',
        cost: '$30 – 60',
      },
    ],
  },
  {
    n: 9,
    date: 'Jun 29',
    weekday: 'Tuesday',
    basecamp: 'Canggu → LAX',
    accent: '#5b8fc7',
    headline: 'Home the same day you leave.',
    image: IMAGES.plane,
    anchor: {
      time: '10:30',
      title: 'Vans to DPS',
      body:
        'Late checkout, one last breakfast, 45 minutes to the airport for the 13:15. Five hours in Changi, then ' +
        'the nonstop lands at LAX at 21:50 — Tuesday evening, same date on the boarding pass.',
    },
    tracks: [],
  },
];

/* ─────────────────────────────  THE MONEY  ───────────────────────────── */

export type BudgetLine = {
  label: string;
  detail: string;
  lean: number;
  comfort: number;
  send: number;
};

/** Per person, US dollars, assuming the cost is split ten ways where shared. */
export const BUDGET: BudgetLine[] = [
  {
    label: 'Flights',
    detail: 'Round trip LAX–DPS · lean = EVA/China Airlines, comfort = Singapore Airlines, send = SQ Premium Economy',
    lean: 1200,
    comfort: 1350,
    send: 2300,
  },
  {
    label: 'Beds',
    detail: '8 nights ÷ 10 — private pool villa in Uluwatu, own-pool-villa-per-couple in Ubud, beachfront hotel in Canggu. June rates, tax in.',
    lean: 145,
    comfort: 220,
    send: 390,
  },
  {
    label: 'Ground transport',
    detail: 'One 10-seat HiAce + driver at the published operator rate (~$80/day incl. fuel), transfers, tips — all ÷ 10',
    lean: 40,
    comfort: 70,
    send: 90,
  },
  {
    label: 'Food & drink',
    detail: '9 days — warungs at $2–3 a plate, cafés at $5–8, and 3–4 proper group dinners at $15–20 a head',
    lean: 135,
    comfort: 200,
    send: 280,
  },
  {
    label: 'Activities',
    detail: 'The full menu at Klook / gate prices, never hotel-desk prices: Penida, Batur, Kecak, massages, a surf lesson',
    lean: 120,
    comfort: 190,
    send: 250,
  },
  {
    label: 'Entry & admin',
    detail: 'e-VOA $31 · Bali levy $9 · insurance with scooter + trek cover · eSIM bought online, not at the airport counter',
    lean: 75,
    comfort: 125,
    send: 150,
  },
];

export const BUDGET_TIERS = [
  { id: 'lean', name: 'Lean', blurb: 'The default pitch: EVA/China Airlines booked early, pool guesthouses (not hostels), mostly warungs, the essential activities.' },
  { id: 'comfort', name: 'Comfort', blurb: 'The upgrade most will pick per-line: SQ economy, private pool villas and beachfront hotels, the full menu.' },
  { id: 'send', name: 'Full send', blurb: 'Premium Economy on the long leg, the Westin in Ubud, 4-star everywhere, every activity.' },
] as const;

export type BudgetTier = (typeof BUDGET_TIERS)[number]['id'];

export const DEPOSIT = {
  amount: 300,
  by: 'Nov 1, 2026',
  covers: 'Your share of the flight bookings — the one thing that genuinely gets worse with time.',
  note:
    'Most of the rooms and villas above are free-cancellation on Agoda/Booking, so beds carry almost no ' +
    'commitment risk. Flights are the deadline: fares are at their best Sep–Dec 2026 and only climb from there.',
};

/* ─────────────────────────────  LOGISTICS  ───────────────────────────── */

export const KNOW = [
  {
    title: 'Visa',
    body:
      'Visa on Arrival, IDR 500,000 (≈$35), 30 days, extendable once. Do the e-VOA online before you fly and you ' +
      'skip a queue at Ngurah Rai. US, UK, EU, AU, CA passports all qualify.',
  },
  {
    title: 'Tourist levy',
    body:
      'IDR 150,000 (≈$10) per person, once per visit. Pay it on the official Love Bali portal before you leave and ' +
      'save the QR code — there is a checkpoint after baggage claim, and no QR means a 10–20 minute detour to a kiosk.',
  },
  {
    title: 'Weather',
    body:
      'June is dry season and the best month of the year to be there. High around 30°C, low 24°C, humidity manageable, ' +
      'rain unlikely. It is also peak season, which is why we book early.',
  },
  {
    title: 'Money',
    body:
      'Indonesian rupiah, roughly IDR 16,000 to the dollar. Cards work in Canggu and Ubud, cash is king everywhere ' +
      'else. Use bank ATMs (BCA, Mandiri) and decline the machine’s conversion offer every time.',
  },
  {
    title: 'The 21% rule',
    body:
      'Mid-range and up adds 10% service plus 11% tax to the menu price. Villa quotes are usually "++" for the same ' +
      'reason. Every number on this page already has it baked in.',
  },
  {
    title: 'Getting around',
    body:
      'Grab and Gojek work in Canggu and Ubud but are blocked in parts of Uluwatu by local driver associations. ' +
      'A 10-seat van with driver runs ~$80 for a full 11-hour day at published operator rates, fuel included — $8 a head, and it is how we move. Book operators directly, never through hotel desks (1.5–2× markup).',
  },
  {
    title: 'Health',
    body:
      'No mandatory vaccinations. Bottled water only, including for teeth. Bring rehydration sachets and something ' +
      'for a stomach. Reef-safe sunscreen — it is much more expensive to buy there than to pack.',
  },
  {
    title: 'Scooters',
    body:
      'Cheap, fun, and the single most likely thing to ruin the trip. If you ride, you need an international ' +
      'permit with a motorcycle endorsement, a real helmet, and travel insurance that does not void on two wheels.',
  },
];

/* ─────────────────────────────  SOURCES  ───────────────────────────── */

export const SOURCES = [
  { label: 'Singapore Airlines SQ37 / SQ38 schedules', url: 'https://info.flightmapper.net/flight/Singapore_Airlines_SQ_37' },
  { label: 'SIN–DPS schedule (SQ938 / 944 / 946)', url: 'https://info.flightmapper.net/route/Singapore_Airlines_SQ_SIN_DPS' },
  { label: 'LAX–DPS fare tracking (June averages)', url: 'https://www.kayak.com/flight-routes/Los-Angeles-LAX/Denpasar-Bali-DPS' },
  { label: 'EVA / China Airlines one-stop fares', url: 'https://www.china-airlines.com/en-us/flights-from-los-angeles-to-bali-denpasar' },
  { label: 'Uluwatu hotel & villa listing rates', url: 'https://www.agoda.com/city/uluwatu-id.html' },
  { label: 'Ubud hotel & villa listing rates', url: 'https://www.agoda.com/city/ubud-id.html' },
  { label: 'Canggu hotel listing rates', url: 'https://www.agoda.com/city/canggu-id.html' },
  { label: 'Activity pricing at gate/local rates', url: 'https://www.klook.com/coureg/108-bali-things-to-do/' },
  { label: 'Bali private van + driver published rates', url: 'https://balinusatransport.id/blog/private-driver-bali-guide.html' },
  { label: 'Mount Batur trek local pricing', url: 'https://baliventur.com/mount-batur-sunrise-trekking-price/' },
  { label: 'Nusa Penida group-tour pricing', url: 'https://nusapenida.org/nusa-penida-west-tour/' },
  { label: 'Bali tourist levy & entry requirements', url: 'https://shortstaybali.com/bali-tourist-levy-entry-requirements-2026-guide/' },
  { label: 'Bali food costs by eating style', url: 'https://unfoldbali.com/cost-of-food-in-bali/' },
];
