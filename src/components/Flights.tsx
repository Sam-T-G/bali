'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { IMAGES } from '@/data/images';
import { OUTBOUND, RETURN, FARES, FLIGHT_NOTES, TRIP, type Leg } from '@/data/trip';

function LegCard({ leg, i }: { leg: Leg; i: number }) {
  return (
    <Reveal i={i} className="relative">
      <article className="group relative rounded-2xl border border-line-soft bg-ink-2/50 p-6 transition-colors duration-500 hover:border-line sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-wider text-ember">{leg.flight}</span>
          <span className="text-xs text-bone-faint">{leg.aircraft}</span>
        </div>

        <div className="mt-6 flex items-start gap-4">
          <div className="min-w-0 flex-1">
            <p className="font-display text-2xl sm:text-3xl">{leg.depart.split(' · ')[1]}</p>
            <p className="mt-1 truncate text-xs text-bone-dim">{leg.from}</p>
            <p className="text-xs text-bone-faint">{leg.depart.split(' · ')[0]}</p>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-1.5 pt-2.5">
            <span className="text-[0.65rem] tabular-nums text-bone-faint">{leg.duration}</span>
            <span className="relative block h-px w-12 bg-line sm:w-20">
              <span className="absolute -top-[3px] right-0 text-[0.55rem] text-ember">▸</span>
            </span>
          </div>

          <div className="min-w-0 flex-1 text-right">
            <p className="font-display text-2xl sm:text-3xl">{leg.arrive.split(' · ')[1]}</p>
            <p className="mt-1 truncate text-xs text-bone-dim">{leg.to}</p>
            <p className="text-xs text-bone-faint">{leg.arrive.split(' · ')[0]}</p>
          </div>
        </div>

        {leg.note && (
          <p className="mt-6 border-t border-line-soft pt-4 text-xs leading-relaxed text-bone-faint">
            {leg.note}
          </p>
        )}
      </article>
    </Reveal>
  );
}

export function Flights() {
  const [tier, setTier] = useState(FARES[0].id);
  const active = FARES.find((f) => f.id === tier) ?? FARES[0];

  return (
    <section id="flights" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">Getting there</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                {TRIP.origin.code} to {TRIP.destination.code}, one airline, one ticket.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
              The times below are the Singapore Airlines routing — the comfort pick. A quality one-stop
              on EVA or China Airlines runs ~$200 less; the cabin switcher has all three tiers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-12">
          <div>
            <p className="label mb-5">Outbound · Sat Jun 19</p>
            <div className="grid gap-4 md:grid-cols-2">
              {OUTBOUND.map((leg, i) => <LegCard key={leg.flight} leg={leg} i={i} />)}
            </div>
          </div>

          <div>
            <p className="label mb-5">Return · Tue Jun 29</p>
            <div className="grid gap-4 md:grid-cols-2">
              {RETURN.map((leg, i) => <LegCard key={leg.flight} leg={leg} i={i} />)}
            </div>
          </div>
        </div>

        {/* Fare tiers */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <Reveal className="relative overflow-hidden rounded-2xl">
            <Photo img={IMAGES.plane} className="aspect-[4/3] w-full" sizes="(min-width:1024px) 40vw, 100vw">
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl">17h 50m, nonstop to Singapore</p>
                <p className="mt-1.5 text-xs text-bone-dim">
                  One of the longest flights in the world. Then a 2h 40m hop to Bali.
                </p>
              </div>
            </Photo>
          </Reveal>

          <div>
            <Reveal><p className="label mb-5">Pick a cabin</p></Reveal>

            <Reveal i={1}>
              <div role="tablist" aria-label="Fare class" className="flex gap-1.5 rounded-full border border-line-soft bg-ink-2/60 p-1.5">
                {FARES.map((fare) => (
                  <button
                    key={fare.id}
                    role="tab"
                    aria-selected={tier === fare.id}
                    onClick={() => setTier(fare.id)}
                    className={`relative flex-1 rounded-full px-3 py-2.5 text-[0.78rem] font-medium transition-colors sm:text-sm ${
                      tier === fare.id ? 'text-ink' : 'text-bone-faint hover:text-bone-dim'
                    }`}
                  >
                    {tier === fare.id && (
                      <motion.span
                        layoutId="fare-pill"
                        className="absolute inset-0 rounded-full bg-bone"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative">{fare.name}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-7 rounded-2xl border border-line-soft bg-ink-2/50 p-7"
              >
                <div className="flex items-baseline gap-3">
                  <p className="font-display text-[clamp(2.75rem,8vw,4rem)] leading-none">
                    ${active.price.toLocaleString()}
                  </p>
                  {active.recommended && (
                    <span className="rounded-full bg-ember/15 px-2.5 py-1 text-[0.65rem] font-medium tracking-wide text-ember">
                      Our pick
                    </span>
                  )}
                </div>
                <p className="mt-2.5 text-xs text-bone-faint">
                  Round trip, per person · typical range {active.range}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
                  {active.perks.map((perk) => (
                    <li key={perk} className="flex gap-3 text-sm text-bone-dim">
                      <span aria-hidden className="mt-[0.45rem] block h-1 w-1 shrink-0 rounded-full bg-ember" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <Reveal i={1}>
          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {FLIGHT_NOTES.map((note) => (
              <li key={note} className="rounded-xl border border-line-soft/70 p-5 text-xs leading-relaxed text-bone-faint">
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
