'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { BASECAMPS, type Basecamp } from '@/data/trip';

function Camp({ camp, index }: { camp: Basecamp; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [still ? '0%' : '-8%', still ? '0%' : '8%']);

  const flipped = index % 2 === 1;

  return (
    <article ref={ref} className="relative">
      <div
        className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
          flipped ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div style={{ y }} className="scale-110">
              <Photo
                img={camp.image}
                className="aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[4/5]"
                sizes="(min-width:1024px) 45vw, 100vw"
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
              <div>
                <p className="label !text-[0.6rem]" style={{ color: camp.accent }}>
                  {camp.region}
                </p>
                <p className="mt-1 font-display text-4xl sm:text-5xl">{camp.name}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-display text-3xl leading-none">{camp.nights}</p>
                <p className="text-[0.65rem] uppercase tracking-widest text-bone-faint">nights</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className={flipped ? 'lg:pr-4' : 'lg:pl-4'}>
          <Reveal i={1}>
            <p className="font-mono text-xs tracking-wide" style={{ color: camp.accent }}>
              {camp.dates}
            </p>
          </Reveal>

          <Reveal i={2}>
            <p className="mt-5 text-pretty text-[0.975rem] leading-[1.75] text-bone-dim sm:text-base">
              {camp.pitch}
            </p>
          </Reveal>

          <Reveal i={3}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {camp.vibe.map((v) => (
                <li
                  key={v}
                  className="rounded-full border px-3.5 py-1.5 text-xs text-bone-dim"
                  style={{ borderColor: `${camp.accent}33` }}
                >
                  {v}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal i={4}>
            <p className="mt-7 flex items-center gap-2.5 text-xs text-bone-faint">
              <span aria-hidden style={{ color: camp.accent }}>⟶</span>
              {camp.transferIn}
            </p>
          </Reveal>

          <Reveal i={5}>
            <div className="mt-8 border-t border-line-soft pt-7">
              <p className="label mb-4">Where we&rsquo;d stay</p>
              <ul className="space-y-px overflow-hidden rounded-xl bg-line-soft">
                {camp.stays.map((stay) => (
                  <li key={stay.name} className="bg-ink px-5 py-4 transition-colors duration-300 hover:bg-ink-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <p className="text-sm font-medium text-bone">
                        {stay.name}
                        <span className="ml-2.5 font-normal text-bone-faint">{stay.bedrooms}</span>
                      </p>
                      <p className="font-mono text-xs" style={{ color: camp.accent }}>
                        {stay.rate}
                      </p>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-bone-faint">{stay.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export function Basecamps() {
  return (
    <section id="basecamps" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">Where we sleep</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                Three basecamps. Two moves. Everything else is a day trip.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
              One villa per stop, whole group under one roof, cost split ten ways. Villa rates below are
              nightly for the entire house — divide by ten for your share.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 sm:space-y-32">
          {BASECAMPS.map((camp, i) => (
            <Camp key={camp.id} camp={camp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
