'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Photo } from './Photo';
import { Reveal, RevealWords } from './Reveal';
import { IMAGES } from '@/data/images';
import { DEPOSIT, TRIP } from '@/data/trip';

export function Closing() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const y = useTransform(scrollYProgress, [0, 1], [still ? '0%' : '-12%', '0%']);

  return (
    <section id="in" ref={ref} className="grain relative scroll-mt-16 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Photo img={IMAGES.heroAlt} className="h-full w-full" sizes="100vw" />
      </motion.div>
      <div className="absolute inset-0 bg-ink/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-transparent to-ink" />

      <div className="shell relative py-32 text-center sm:py-40">
        <Reveal><p className="label mb-8">The ask</p></Reveal>

        <h2 className="mx-auto max-w-4xl text-balance font-display text-[clamp(2.5rem,8vw,6rem)]">
          <RevealWords text="So. Are you in?" />
        </h2>

        <Reveal i={2}>
          <p className="mx-auto mt-8 max-w-xl text-pretty text-base leading-relaxed text-bone-dim">
            Villas for ten in June book out roughly eight months ahead, and Singapore Airlines group fares
            get materially worse after the new year. If this is happening, it needs to be locked by{' '}
            <span className="text-bone">{DEPOSIT.by}</span>.
          </p>
        </Reveal>

        <Reveal i={3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#money"
              className="w-full rounded-full bg-bone px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03] sm:w-auto"
            >
              Put ${DEPOSIT.amount} down
            </a>
            <a
              href="#itinerary"
              className="w-full rounded-full border border-line px-8 py-4 text-sm text-bone-dim transition-colors duration-300 hover:border-bone-faint hover:text-bone sm:w-auto"
            >
              Read the plan again
            </a>
          </div>
        </Reveal>

        <Reveal i={4}>
          <p className="mx-auto mt-14 max-w-md text-xs leading-relaxed text-bone-faint">
            {TRIP.dateLabel} · {TRIP.origin.code} → {TRIP.destination.code} on {TRIP.carrier} ·{' '}
            {TRIP.groundLabel} · {TRIP.partySize} of us
          </p>
        </Reveal>
      </div>
    </section>
  );
}
