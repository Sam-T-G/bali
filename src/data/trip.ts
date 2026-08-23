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
    'Departing Mon Jun 21 instead prices under the weekend fare and, landing home Jun 29–30, saves ' +
    'roughly $80–170 a head and a PTO day. Open for a vote.',
} as const;

/* ─────────────────────────────  THE PITCH  ───────────────────────────── */

export const PITCH = {
  kicker: 'The plan',
  heading: 'Three basecamps. One anchor a day. Everything else is optional.',
  body: [
    'Cliffs in Uluwatu, jungle in Ubud, black sand in Canggu — three nights, three nights, two nights, ' +
    'each move under two hours in our own van.',
    'Every day has one anchor the group does together — usually a dinner or a sunset. Everything either ' +
    'side of it is opt-in: the 2am volcano and the noon spa day are the same day, and nobody keeps score.',
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
      'Limestone cliffs seventy metres over the Indian Ocean — reef breaks below, cliff bars above, and the island’s best sunsets.',
    vibe: ['Cliffs + reef breaks', 'Sunset bars', 'Slowest mornings of the trip'],
    stays: [
      {
        name: 'Villa Anak · Ungasan',
        image: pageImg('https://unsplash.com/photos/MK7q_XxTfAM', 'Melasti Beach cliffs, Ungasan — the villa\'s neighbourhood', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Villa+Anak%22+Ungasan+Bali+agoda+OR+booking',
        bedrooms: '5 BR villa',
        rate: '$280 – 340 / night whole villa',
        detail: 'A real 5-bed private-pool villa — whole-house privacy for ten at $30 a head.',
      },
      {
        name: 'Swiss-Belresort Pecatu',
        image: pageImg('https://unsplash.com/photos/ShQzSZzD0CA', 'Sunset over Bingin Beach, minutes from Pecatu', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Swiss-Belresort+Pecatu%22+Bali+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$45 – 60 / room / night',
        detail: 'Chain 4-star with a big pool — ~$26 a head, tax in.',
      },
      {
        name: 'Padang-Padang Inn',
        image: pageImg('https://unsplash.com/photos/aerial-shot-of-seashore-EztqREO1cag', 'Padang Padang beach cove, a short walk from the inn', ['#0a2540', '#e0864a']),
        link: 'https://www.google.com/search?q=%22Padang-Padang+Inn%22+Pecatu+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$35 – 50 / room / night',
        detail: 'Pool inn a short walk from Padang Padang beach — the lean pick at ~$21 a head.',
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
      'River gorges, rice terraces, and the island’s cultural capital — cooler, greener, and a different trip entirely for three days.',
    vibe: ['Rice terrace + gorge', 'Volcano at sunrise', 'Best food on the island'],
    stays: [
      {
        name: 'Dupa Ubud Villa',
        image: pageImg('https://unsplash.com/photos/VcqoaqKpNYw', 'The Campuhan ridge valleys of Ubud', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Dupa+Ubud+Villa%22+Ubud+agoda+OR+booking',
        bedrooms: '5 pool-villa units',
        rate: '$38 – 48 / unit / night in June',
        detail: 'Every couple gets its own private-pool villa for guesthouse money — ~$24 a head.',
      },
      {
        name: 'Bhuwana Ubud Hotel',
        image: pageImg('https://unsplash.com/photos/rice-terraces-in-tegelalang-bali--2WlTWZLnRc', 'Working rice terraces — the hotel\'s setting north of Ubud', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Bhuwana+Ubud+Hotel%22+farming+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$35 – 55 / room / night, breakfast incl.',
        detail: 'Rice-field pool hotel with its own farm — ~$23 a head, breakfast in.',
      },
      {
        name: 'Element by Westin Bali Ubud',
        image: pageImg('https://unsplash.com/photos/VcqoaqKpNYw', 'Ubud jungle valley, the resort\'s terrain', ['#0c2b16', '#8bbf3f']),
        link: 'https://www.google.com/search?q=%22Element+Bali+Ubud%22+Westin+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$90 – 130 / room / night',
        detail: 'The one branded jungle-resort splurge — ~$55 a head if we book early.',
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
      'Black sand, a learn-to-surf break, and the island’s loudest sunsets. Two nights is exactly right.',
    vibe: ['Beach clubs', 'Learn-to-surf break', 'Last-night energy'],
    stays: [
      {
        name: 'FRii Bali Echo Beach',
        image: pageImg('https://unsplash.com/photos/people-at-the-beach-during-golden-hour-7An3SypqhPk', 'Golden hour on the Canggu sand the hotel sits on', ['#2a1020', '#ef7d3a']),
        link: 'https://www.google.com/search?q=%22FRii+Bali+Echo+Beach%22+Canggu+agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$46 – 66 / room / night',
        detail: 'Pool hotel directly on Echo Beach — the best location-per-dollar of the trip, ~$28 a head.',
      },
      {
        name: 'Aston Canggu Beach Resort',
        image: pageImg('https://unsplash.com/photos/people-on-a-beach-zYbIdDXTjgQ', 'Batu Bolong beach, a short walk from the hotel', ['#2a1020', '#ef7d3a']),
        link: 'https://www.google.com/search?q=%22Aston+Canggu+Beach+Resort%22++agoda+OR+booking',
        bedrooms: '5 rooms',
        rate: '$56 – 80 / room / night, breakfast incl.',
        detail: 'Rooftop pool, short walk to Batu Bolong — ~$34 a head in June.',
      },
      {
        name: 'Two adjacent 3BR pool villas',
        bedrooms: '2 × 3 BR',
        rate: '$155 – 250 / villa / night, tax incl.',
        detail: 'Two adjacent 3BR villas beat one big one on price and flexibility — ~$40 a head.',
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
        'Group check-in at 19:30 so bags tag through to Bali. We cross the date line — Sunday does not happen.',
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
        'Villa cook dinner on the terrace, $10–14 a head all-in. Nobody goes anywhere on day one.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Sundowners at Single Fin',
        time: '17:00 – 19:00',
        body:
          'Cantilevered over the Uluwatu break — $3.50 beers, and staying up kills the jet lag.',
        cost: '$20 – 35',
      },
      {
        kind: 'cruise',
        title: 'Pool, and nothing else',
        time: 'All afternoon',
        body:
          '26 hours of travel earns an afternoon in the pool. Fully legitimate.',
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
        'A cliff-top temple, a hundred men chanting around a fire, sunset behind. ~$13 all-in; ocean-side seats, and mind the monkeys.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Dawn surf at Padang Padang',
        time: '06:00 – 09:00',
        body:
          'Through the rock gap into one of the Bukit’s best waves. Boards $7, lessons $25–35.',
        cost: '$7 – 35',
      },
      {
        kind: 'cruise',
        title: 'Cliffside day club',
        time: '11:00 – 16:00',
        body:
          'Savaya or Ulu Cliffhouse — cliff-edge pools, DJs from midday, entry ~$15 or a split daybed.',
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
        'Grilled fish on the sand at the cliff warungs, ~$12. The Penida crew is back by 18:30 — one table for everyone.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Nusa Penida day trip',
        time: '06:15 – 18:30',
        body:
          'Fast boat to Kelingking, Broken Beach and a snorkel stop. Long day, most spectacular thing we will do.',
        cost: '$45 – 65',
      },
      {
        kind: 'cruise',
        title: 'Spa, then Thomas Beach',
        time: 'Whenever',
        body:
          'A $10–15 massage, then the staircase down to Thomas Beach — the quiet one.',
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
        'Out by ten, swim stop at Tegenungan Waterfall (~$1.30), check-in mid-afternoon, dinner in town.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Sidemen detour',
        time: 'Add ~2h',
        body:
          'The long way round through the Sidemen valley — the best drive on the island, +2 hours.',
        cost: 'Included in van hire',
      },
      {
        kind: 'cruise',
        title: 'Straight there',
        time: '10:00 – 12:00',
        body: 'Direct run — in the pool by 12:15.',
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
        'There by 7:30, an hour before the buses, ~$3. Long breakfast after; the rest of the day is yours.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Ayung River rafting',
        time: '10:00 – 15:00',
        body:
          '12km of class II–III through a jungle gorge, lunch included. Two rafts fits us exactly.',
        cost: '$40 – 50',
      },
      {
        kind: 'cruise',
        title: 'Campuhan Ridge + café crawl',
        time: '06:30 – 12:00',
        body:
          'The free ridgeline walk at dawn, then Ubud’s genuinely world-class café scene.',
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
        'The proper sit-down. Ubud has the island’s best kitchens — budget $25–60 depending where we land.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Mount Batur sunrise trek',
        time: '02:00 – 11:00',
        body:
          '2am pickup, two hours up in the dark, sunrise over Lake Batur with eggs cooked in volcanic steam. $30–40.',
        cost: '$30 – 45',
      },
      {
        kind: 'cruise',
        title: 'Yoga Barn, Monkey Forest, spa',
        time: '09:00 – 17:00',
        body:
          'Yoga Barn drop-in (~$12), the Monkey Forest (~$6), massage in the afternoon.',
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
        'La Brisa, Pererenan — free before 4pm, live music, and the sun sets straight in front of you.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Melukat at Tirta Empul',
        time: '08:00 – 10:30',
        body:
          'The melukat purification under thousand-year-old spouts — take part, sarong provided, ~$5. Go at opening.',
        cost: '$5',
      },
      {
        kind: 'cruise',
        title: 'Slow checkout, straight to the coast',
        time: '11:00 – 12:30',
        body: 'Late breakfast, 90 minutes to Pererenan, in the pool by early afternoon.',
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
        'Everyone, one table, Pererenan. What happens after is between you and Tuesday’s flight.',
    },
    tracks: [
      {
        kind: 'send',
        title: 'Surf lesson at Batu Bolong + beach club',
        time: '07:00 – 17:00',
        body:
          'The island’s most forgiving beach break — stand up on day one, $25–30 with a board. Beach club after.',
        cost: '$35 – 90',
      },
      {
        kind: 'cruise',
        title: 'Café, market, massage',
        time: 'Whenever',
        body:
          'Cafés, the Love Anchor market for souvenirs, a $12–18 massage. A perfectly good last day.',
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
        'Late checkout, 45 minutes to the airport for the 13:15. Land LAX 21:50 the same Tuesday.',
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
    detail: 'Round trip LAX–DPS. Lean = EVA/China Airlines · comfort = Singapore Airlines · send = SQ Premium Economy',
    lean: 1200,
    comfort: 1350,
    send: 2300,
  },
  {
    label: 'Beds',
    detail: '8 nights ÷ 10. June listing rates, tax in.',
    lean: 145,
    comfort: 220,
    send: 390,
  },
  {
    label: 'Ground transport',
    detail: 'One 10-seat van + driver (~$80/day incl. fuel), transfers, tips — ÷ 10',
    lean: 40,
    comfort: 70,
    send: 90,
  },
  {
    label: 'Food & drink',
    detail: '9 days — warungs, cafés, and a few proper group dinners',
    lean: 135,
    comfort: 200,
    send: 280,
  },
  {
    label: 'Activities',
    detail: 'At Klook / gate prices: Penida, Batur, Kecak, massages, a surf lesson',
    lean: 120,
    comfort: 190,
    send: 250,
  },
  {
    label: 'Entry & admin',
    detail: 'e-VOA $31 · levy $9 · insurance · eSIM',
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
  note: 'Beds are mostly free-cancellation — flights are the deadline. Fares are best Sep–Dec 2026 and only climb.',
};

/* ─────────────────────────────  LOGISTICS  ───────────────────────────── */

export const KNOW = [
  { title: 'Visa', body: 'Visa on Arrival, ~$31. Do the e-VOA online before flying and skip the queue. US/UK/EU/AU/CA all qualify.' },
  { title: 'Tourist levy', body: '~$10 once, on the Love Bali portal before you fly. Keep the QR — there is a checkpoint after baggage claim.' },
  { title: 'Weather', body: 'June is dry season and the best month of the year: ~30°C days, rain unlikely. Also peak season — hence booking early.' },
  { title: 'Money', body: '~IDR 16,000 to the dollar. Cards work in Canggu and Ubud, cash everywhere else. Bank ATMs only; always decline the conversion offer.' },
  { title: 'The 21% rule', body: 'Mid-range and up adds 10% service + 11% tax. Every number on this page already includes it.' },
  { title: 'Getting around', body: 'One 10-seat van + driver, ~$80 a full day, fuel included — $8 a head. Booked direct with operators, never hotel desks.' },
  { title: 'Health', body: 'Bottled water only. Pack rehydration sachets, something for a stomach, and reef-safe sunscreen.' },
  { title: 'Scooters', body: 'Fun, cheap, and the likeliest thing to ruin the trip. Ride only with an international motorcycle permit, a real helmet, and insurance that covers two wheels.' },
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
