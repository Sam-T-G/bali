import { IMAGES, type Img } from './images';

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
  label: 'Prefer the 21st?',
  body:
    'Shift everything +2 days: depart LAX Mon Jun 21, land Bali Wed Jun 23, fly home Thu Jul 1. ' +
    'Same 8 nights, same itinerary, same budget — but it costs two extra weekdays of PTO, because ' +
    'the Jun 19 version leans on a Saturday departure.',
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
    'The part that actually matters: nobody has to do anything. Every day has one anchor — a dinner, a sunset, ' +
    'one thing we do together — and everything either side of it is opt-in. Sunrise volcano at 2am and a spa ' +
    'day are the same day. Show up for the anchor, do what you want with the rest.',
  ],
} as const;

export const STATS = [
  { value: '9', label: 'days on the island', sub: 'Jun 21 – 29' },
  { value: '3', label: 'basecamps', sub: 'Uluwatu · Ubud · Canggu' },
  { value: '10', label: 'of us', sub: 'private villas, split evenly' },
  { value: '$3.3k', label: 'all-in, per person', sub: 'flights, villas, food, the lot' },
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
    name: 'Economy',
    price: 1595,
    range: '$1,350 – $1,850',
    perks: ['2 × 23kg checked', 'Seat selection at booking', 'The 17h50m is survivable — it is a very good economy cabin'],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium Economy',
    price: 2950,
    range: '$2,700 – $3,300',
    perks: ['38" pitch, 8" recline', 'Book the Cook meal ordering', 'Priority boarding + 2 × 23kg', 'Worth it on the LAX–SIN leg specifically'],
  },
  {
    id: 'business',
    name: 'Business',
    price: 6400,
    range: '$5,900 – $7,200',
    perks: ['Lie-flat, direct aisle access', 'SilverKris lounge at Changi', 'You will arrive genuinely functional'],
  },
];

export const FLIGHT_NOTES = [
  'Fares are round-trip per person, LAX–DPS via Singapore, sampled ' + TRIP.pricedOn + ' for June 2027 departures.',
  'June is Bali high season and SQ prices it that way. Booking 6–9 months out — i.e. Sept–Dec 2026 — is the sweet spot.',
  'Ten seats on one booking is a group fare. Call SQ Group Sales rather than booking ten times on the website: it usually holds the price and lets us deposit now and pay the balance later.',
];

/* ─────────────────────────────  BASECAMPS  ───────────────────────────── */

export type Stay = {
  name: string;
  bedrooms: string;
  rate: string;
  detail: string;
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
        name: 'Villa Bayu',
        bedrooms: '6 BR',
        rate: '≈ $850 – 1,100 / night',
        detail: 'Modern estate in the hills above Uluwatu. Two pools, big communal living, comfortably absorbs ten.',
      },
      {
        name: 'Summer Ulu',
        bedrooms: '5–6 BR',
        rate: '≈ $900 – 1,200 / night',
        detail: 'Design-forward, sleeps twelve. The one to book if the group cares what the photos look like.',
      },
      {
        name: 'Villa Anugrah',
        bedrooms: '5 suites',
        rate: '≈ $1,100 – 1,500 / night',
        detail: 'Clifftop estate on the south-western tip, set back ~45m from the drop. The splurge option.',
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
        name: 'Villa Omah Padi',
        bedrooms: '5 BR',
        rate: '$495 – 595 / night',
        detail: 'Lagoon pool, rice-paddy views, tropical build. The best value-per-photo on this list.',
      },
      {
        name: 'Amala Villas',
        bedrooms: '5 BR',
        rate: '≈ $600 – 850 / night',
        detail: 'Surrounded by working paddy in a traditional village, 15 minutes from central Ubud.',
      },
      {
        name: 'Villa Kanti Ubud',
        bedrooms: '5 BR',
        rate: '≈ $550 – 750 / night',
        detail: 'Tropical gardens bordered by rice terraces, ~15 min drive from the centre.',
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
        name: 'La Bohème Mansion',
        bedrooms: '8 BR',
        rate: '$1,430 – 1,596 / night',
        detail:
          '25m lap pool, gym, cinema room, wine cellar, ten staff. Five minutes from Pererenan beach. ' +
          'Split ten ways this is the single best night of the trip.',
      },
      {
        name: 'Villa Damar',
        bedrooms: '4 BR',
        rate: '≈ $400 – 550 / night',
        detail: 'Walking distance to Finns and Atlas. The lean option if we want to bank the money for elsewhere.',
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
        'Private chef dinner on the terrace — around $18 a head including groceries, which is the standard way ' +
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
          'You have been travelling for roughly 26 hours. The villa has two pools. This is a completely legitimate ' +
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
          'about $7 a day; an instructor for the never-evers runs $35–45 for two hours.',
        cost: '$7 – 45',
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
        cost: '$54 – 95',
      },
      {
        kind: 'cruise',
        title: 'Spa, then Thomas Beach',
        time: 'Whenever',
        body:
          'Two-hour Balinese massage for about $30 — a quarter of what it costs at home, and better. Then the ' +
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
        cost: '$50 – 75',
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
          'time — two-hour lesson with a board about $35. Then Finns or Atlas for the afternoon.',
        cost: '$35 – 90',
      },
      {
        kind: 'cruise',
        title: 'Café, market, massage',
        time: 'Whenever',
        body:
          'Canggu’s café strip is absurd, the Love Anchor market is where the souvenirs actually get bought, and ' +
          'a 90-minute massage is $20. A perfectly good way to spend a last day.',
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

/* ─────────────────────────────  THE MENU  ───────────────────────────── */

export type MenuItem = {
  name: string;
  where: string;
  price: string;
  usd: number;
  intensity: 'easy' | 'moderate' | 'full send';
  note: string;
};

export const MENU: MenuItem[] = [
  { name: 'Nusa Penida day trip', where: 'Ex-Sanur', price: '$54 – 95', usd: 75, intensity: 'full send', note: 'Fast boat, Kelingking, Broken Beach, snorkel. 12 hours door to door.' },
  { name: 'Mount Batur sunrise trek', where: 'Kintamani', price: '$50 – 75', usd: 62, intensity: 'full send', note: '2am pickup, 1,717m, breakfast on the crater rim.' },
  { name: 'Ayung River rafting', where: 'Ubud', price: '$40 – 50', usd: 45, intensity: 'moderate', note: 'Class II–III, 12km, jungle gorge, lunch included.' },
  { name: 'ATV through the paddies', where: 'Ubud', price: 'from $50', usd: 55, intensity: 'moderate', note: 'Guide, gear and insurance included. Extremely muddy.' },
  { name: 'Surf lesson + board', where: 'Batu Bolong / Padang', price: '$35 – 45', usd: 40, intensity: 'moderate', note: 'Two hours, instructor, soft-top. Beginners genuinely stand up.' },
  { name: 'Kecak fire dance', where: 'Uluwatu Temple', price: '$9 + $3 entry', usd: 12, intensity: 'easy', note: 'IDR 150,000. Sunset show, book the ocean-side seats.' },
  { name: 'Sacred Monkey Forest', where: 'Ubud', price: '$5 – 6', usd: 6, intensity: 'easy', note: 'IDR 80k weekday / 100k weekend. Do not make eye contact.' },
  { name: 'Tirta Empul purification', where: 'Tampaksiring', price: '$5', usd: 5, intensity: 'easy', note: 'IDR 75,000. Sarong provided. Go at 08:00.' },
  { name: 'Tegenungan Waterfall', where: 'En route to Ubud', price: '$1.30', usd: 2, intensity: 'easy', note: 'IDR 20,000. Best 8–10am before the buses.' },
  { name: 'Tegalalang rice terraces', where: 'Ubud', price: '$1.50 + swings', usd: 15, intensity: 'easy', note: 'Entry is pennies; the jungle swing is $10–35 on top.' },
  { name: 'Campuhan Ridge Walk', where: 'Ubud', price: 'Free', usd: 0, intensity: 'easy', note: '1.7km ridgeline between two gorges. Dawn or dusk only.' },
  { name: 'Balinese massage, 2h', where: 'Everywhere', price: '$20 – 30', usd: 25, intensity: 'easy', note: 'The single best value on the island. Do it more than once.' },
  { name: 'Cliffside day club', where: 'Ulu Cliffhouse / Savaya', price: '$15 – 60', usd: 40, intensity: 'easy', note: 'Entry ~IDR 250k, or split a daybed minimum spend.' },
  { name: 'Beach club daybed', where: 'Finns / Atlas / La Brisa', price: '$0 – 80', usd: 45, intensity: 'easy', note: 'La Brisa free before 4pm; Atlas daybeds come with F&B credit.' },
  { name: 'Balinese cooking class', where: 'Ubud', price: '$35 – 50', usd: 42, intensity: 'easy', note: 'Market run at dawn, then you cook lunch. Better than it sounds.' },
  { name: 'Yoga Barn drop-in', where: 'Ubud', price: '$12', usd: 12, intensity: 'easy', note: 'Book the day before — the good classes fill.' },
  { name: 'Scooter hire, per day', where: 'Anywhere', price: '$6 – 8', usd: 7, intensity: 'moderate', note: 'You need an international licence with a motorcycle endorsement. Police do check.' },
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
    detail: 'SQ round-trip LAX–DPS via Singapore',
    lean: 1395,
    comfort: 1595,
    send: 2950,
  },
  {
    label: 'Villas',
    detail: '8 nights across three basecamps, ÷ 10, incl. 21% tax & service',
    lean: 690,
    comfort: 870,
    send: 1180,
  },
  {
    label: 'Ground transport',
    detail: 'Airport transfers, two inter-region moves, 4 days of van hire, ÷ 10',
    lean: 75,
    comfort: 95,
    send: 130,
  },
  {
    label: 'Food & drink',
    detail: '9 days — warungs, villa chef nights, a few proper dinners',
    lean: 315,
    comfort: 450,
    send: 720,
  },
  {
    label: 'Activities',
    detail: 'Off the menu below — pick your own number',
    lean: 95,
    comfort: 200,
    send: 420,
  },
  {
    label: 'Entry & admin',
    detail: 'Visa on arrival $35 · Bali tourist levy $10 · travel insurance',
    lean: 85,
    comfort: 105,
    send: 145,
  },
];

export const BUDGET_TIERS = [
  { id: 'lean', name: 'Lean', blurb: 'Economy, warungs, the free stuff. Still an unbelievable trip.' },
  { id: 'comfort', name: 'Comfort', blurb: 'What we are actually pitching. Economy, good villas, most of the menu.' },
  { id: 'send', name: 'Full send', blurb: 'Premium Economy, the splurge villas, everything on the list.' },
] as const;

export type BudgetTier = (typeof BUDGET_TIERS)[number]['id'];

export const DEPOSIT = {
  amount: 400,
  by: 'Nov 1, 2026',
  covers: 'Villa deposits + the SQ group-fare hold.',
  note:
    'Non-refundable once villas are booked, so only put it in if you are actually coming. ' +
    'Balance is due 60 days out, around late April 2027.',
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
      'Private van with driver is $45–60 a day all in — split ten ways it is nothing, and it is how we move.',
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
  { label: 'Uluwatu villas for groups', url: 'https://thehoneycombers.com/bali/best-villas-in-uluwatu/' },
  { label: 'Ubud luxury villa rates 2026', url: 'https://travjoy.com/blog/bali-best-luxury-villas-in-ubud-jungle-retreats-for-2026' },
  { label: 'La Bohème Mansion, Pererenan', url: 'https://thetropicaldoor.com/villas/villa-la-boheme-mansion' },
  { label: 'Bali private driver cost 2026', url: 'https://balinusatransport.id/blog/private-driver-bali-guide.html' },
  { label: 'Mount Batur sunrise trek pricing', url: 'https://baliventur.com/mount-batur-sunrise-trekking-price/' },
  { label: 'Nusa Penida day trip pricing', url: 'https://nusapenida.org/nusa-penida-west-tour/' },
  { label: 'Monkey Forest entrance fee', url: 'https://www.baliholidaysecrets.com/ubud-monkey-forest/' },
  { label: 'Tirta Empul entrance fee', url: 'https://www.ubudcenter.com/tirta-empul-temple/' },
  { label: 'Bali tourist levy & entry requirements', url: 'https://shortstaybali.com/bali-tourist-levy-entry-requirements-2026-guide/' },
  { label: 'Bali food costs 2026', url: 'https://unfoldbali.com/cost-of-food-in-bali/' },
  { label: 'Uluwatu things to do & beach clubs', url: 'https://www.kelanabykayla.com/best-things-to-do-in-uluwatu/' },
  { label: 'Canggu beach club pricing', url: 'https://www.evarahcollection.com/post/best-beach-clubs-in-canggu-2026-an-honest-local-ranking' },
];
