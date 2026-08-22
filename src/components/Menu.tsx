'use client';

import { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Reveal } from './Reveal';
import { MENU, type MenuItem } from '@/data/trip';

const FILTERS = ['everything', 'easy', 'moderate', 'full send'] as const;
type Filter = (typeof FILTERS)[number];

const DOT: Record<MenuItem['intensity'], string> = {
  easy: 'bg-jade',
  moderate: 'bg-sand',
  'full send': 'bg-ember',
};

export function Menu() {
  const [filter, setFilter] = useState<Filter>('everything');
  const shown = filter === 'everything' ? MENU : MENU.filter((m) => m.intensity === filter);

  return (
    <section id="menu" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">À la carte</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                The menu. Take what you want, skip what you don&rsquo;t.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
              Nothing here is booked as a group unless enough people want it. Prices are per person and
              already include the bits that catch people out.
            </p>
          </Reveal>
        </div>

        <Reveal i={1}>
          <div className="mt-12 flex flex-wrap gap-2">
            <LayoutGroup id="menu-filter">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`relative rounded-full border px-4 py-2 text-xs font-medium capitalize transition-colors ${
                    filter === f ? 'border-transparent text-ink' : 'border-line text-bone-faint hover:text-bone-dim'
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="menu-pill"
                      className="absolute inset-0 rounded-full bg-bone"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </LayoutGroup>
          </div>
        </Reveal>

        <ul className="mt-8 overflow-hidden rounded-2xl border border-line-soft">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((item) => (
              <motion.li
                key={item.name}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="group border-b border-line-soft last:border-0"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 px-5 py-5 transition-colors duration-300 group-hover:bg-ink-2/60 sm:px-7">
                  <span
                    aria-hidden
                    className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${DOT[item.intensity]}`}
                  />
                  <div className="min-w-0 flex-1 basis-52">
                    <p className="text-[0.95rem] font-medium text-bone">{item.name}</p>
                    <p className="mt-1 text-xs text-bone-faint">{item.note}</p>
                  </div>
                  <p className="hidden w-40 shrink-0 text-xs text-bone-faint md:block">{item.where}</p>
                  <p className="ml-auto shrink-0 font-mono text-sm text-bone-dim">{item.price}</p>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-bone-faint">
            {(['easy', 'moderate', 'full send'] as const).map((k) => (
              <span key={k} className="flex items-center gap-2 capitalize">
                <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${DOT[k]}`} />
                {k}
              </span>
            ))}
            <span className="ml-auto">Showing {shown.length} of {MENU.length}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
