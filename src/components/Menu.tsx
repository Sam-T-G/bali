'use client';

import { useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { MENU, MENU_CATEGORIES, type MenuItem } from '@/data/menu';

const INTENSITIES = ['easy', 'moderate', 'full send'] as const;

const DOT: Record<MenuItem['intensity'], string> = {
  easy: 'bg-jade',
  moderate: 'bg-sand',
  'full send': 'bg-ember',
};

export function Menu() {
  const [cat, setCat] = useState<string>('all');
  const [level, setLevel] = useState<string>('all');
  const [expanded, setExpanded] = useState(false);

  const matches = useMemo(
    () =>
      MENU.filter(
        (m) => (cat === 'all' || m.category === cat) && (level === 'all' || m.intensity === level),
      ),
    [cat, level],
  );
  // Collapsed by default so the page stays scannable; filters and the button expand it.
  const shown = expanded || cat !== 'all' || level !== 'all' ? matches : matches.slice(0, 12);

  return (
    <section id="menu" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">À la carte</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                The menu. {MENU.length} things worth doing — pick yours.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
              Nothing pre-booked. Per-person prices at Klook / gate rates — never the hotel desk.
            </p>
          </Reveal>
        </div>

        {/* Category rail */}
        <Reveal i={1}>
          <div className="no-bar mt-12 flex gap-2 overflow-x-auto pb-1">
            <LayoutGroup id="menu-cat">
              {[{ id: 'all', label: 'Everything' }, ...MENU_CATEGORIES].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCat(c.id)}
                  aria-pressed={cat === c.id}
                  className={`relative shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    cat === c.id ? 'border-transparent text-ink' : 'border-line text-bone-faint hover:text-bone-dim'
                  }`}
                >
                  {cat === c.id && (
                    <motion.span
                      layoutId="menu-cat-pill"
                      className="absolute inset-0 rounded-full bg-bone"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{c.label}</span>
                </button>
              ))}
            </LayoutGroup>
          </div>
        </Reveal>

        {/* Intensity filter */}
        <Reveal i={2}>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <button
              onClick={() => setLevel('all')}
              className={`transition-colors ${level === 'all' ? 'text-bone' : 'text-bone-faint hover:text-bone-dim'}`}
            >
              any pace
            </button>
            {INTENSITIES.map((k) => (
              <button
                key={k}
                onClick={() => setLevel(level === k ? 'all' : k)}
                aria-pressed={level === k}
                className={`flex items-center gap-2 capitalize transition-colors ${
                  level === k ? 'text-bone' : 'text-bone-faint hover:text-bone-dim'
                }`}
              >
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${DOT[k]}`} />
                {k}
              </button>
            ))}
            <span className="ml-auto text-bone-faint">{shown.length} of {MENU.length}</span>
          </div>
        </Reveal>

        {/* Cards */}
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((item) => (
              <motion.li
                key={item.name}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-2xl border border-line-soft bg-ink-2/40"
              >
                <Photo
                  img={item.image}
                  className="aspect-[16/10] w-full"
                  imgClassName="transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw"
                >
                  <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-[0.62rem] font-medium capitalize text-bone backdrop-blur">
                    <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${DOT[item.intensity]}`} />
                    {item.intensity}
                  </span>
                </Photo>
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-[0.95rem] font-medium leading-snug text-bone">{item.name}</p>
                    <p className="shrink-0 font-mono text-sm text-ember">{item.price}</p>
                  </div>
                  <p className="mt-1 flex flex-wrap gap-x-2 text-[0.7rem] text-bone-faint">
                    <span>{item.where}</span>
                    <span aria-hidden>·</span>
                    <span>{item.duration}</span>
                  </p>
                  <p className="mt-2.5 text-[0.8rem] leading-relaxed text-bone-faint">{item.note}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {!expanded && cat === 'all' && level === 'all' && matches.length > 12 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-line px-6 py-3 text-sm text-bone-dim transition-colors hover:border-bone-faint hover:text-bone"
            >
              Show all {MENU.length} →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
