import { IMAGES, type Img } from './images';

/**
 * The à la carte menu. Regenerated from the research cluster — every image is
 * either a search-verified Unsplash photo of the named subject or a gradient
 * placeholder (empty result), never a wrong-subject stand-in.
 */

export type MenuItem = {
  name: string;
  category: 'uluwatu' | 'ubud' | 'canggu' | 'islands' | 'nightlife' | 'food';
  where: string;
  price: string;
  usd: number;
  duration: string;
  intensity: 'easy' | 'moderate' | 'full send';
  note: string;
  image: Img;
};

export const MENU_CATEGORIES = [
  { id: 'uluwatu', label: 'Uluwatu & Bukit' },
  { id: 'ubud', label: 'Ubud & Central' },
  { id: 'canggu', label: 'Canggu & West' },
  { id: 'islands', label: 'Island trips' },
  { id: 'nightlife', label: 'Clubs & nights' },
  { id: 'food', label: 'Food' },
] as const;

/* Placeholder seed — replaced by cluster output. */
export const MENU: MenuItem[] = [
  {
    name: 'Kecak fire dance at Uluwatu',
    category: 'uluwatu',
    where: 'Pura Luhur Uluwatu',
    price: '$9 + $3',
    usd: 12,
    duration: '2h',
    intensity: 'easy',
    note: 'Sunset show on the cliff. Gate tickets, ocean-side seats.',
    image: IMAGES.uluwatuTemple,
  },
];
