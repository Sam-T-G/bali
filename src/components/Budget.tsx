'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from './Reveal';
import { BUDGET, BUDGET_TIERS, DEPOSIT, TRIP, type BudgetTier } from '@/data/trip';

const money = (n: number) => `$${n.toLocaleString('en-US')}`;

/** Rolls each digit of a total when the tier changes. */
function RollingTotal({ value }: { value: number }) {
  const chars = money(value).split('');
  return (
    <span className="flex tabular-nums" aria-label={money(value)}>
      {chars.map((char, i) => (
        <span key={`${i}-${char}`} className="relative inline-block overflow-hidden" aria-hidden>
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={char}
              className="inline-block"
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.32, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
            >
              {char}
            </motion.span>
          </AnimatePresence>
        </span>
      ))}
    </span>
  );
}

export function Budget() {
  const [tier, setTier] = useState<BudgetTier>('lean');

  const total = BUDGET.reduce((sum, line) => sum + line[tier], 0);
  const flights = BUDGET[0][tier];
  const onIsland = total - flights;
  const max = Math.max(...BUDGET.map((l) => Math.max(l.lean, l.comfort, l.send)));
  const activeTier = BUDGET_TIERS.find((t) => t.id === tier)!;
  const groupTotal = total * TRIP.partySize;

  return (
    <section id="money" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">The money</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                Every dollar, itemised. No asterisks at the bottom.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <p className="max-w-sm text-sm leading-relaxed text-bone-dim">
              Per person, in US dollars, with shared costs already divided by {TRIP.partySize}. Villa tax and
              service, the 21% restaurant markup, visa and levy — all in.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_22rem] lg:items-start">
          {/* Ledger */}
          <div>
            <Reveal>
              <div role="tablist" aria-label="Budget tier" className="flex flex-col gap-1.5 rounded-2xl border border-line-soft bg-ink-2/50 p-1.5 sm:flex-row">
                {BUDGET_TIERS.map((t) => (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={tier === t.id}
                    onClick={() => setTier(t.id)}
                    className={`relative flex-1 rounded-xl px-4 py-3 text-left transition-colors ${
                      tier === t.id ? 'text-ink' : 'text-bone-faint hover:text-bone-dim'
                    }`}
                  >
                    {tier === t.id && (
                      <motion.span
                        layoutId="budget-pill"
                        className="absolute inset-0 rounded-xl bg-bone"
                        transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                      />
                    )}
                    <span className="relative block text-sm font-medium">{t.name}</span>
                    <span className={`relative mt-0.5 block text-[0.68rem] leading-snug ${tier === t.id ? 'text-ink/60' : ''}`}>
                      {money(BUDGET.reduce((s, l) => s + l[t.id], 0))}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal i={1}>
              <p className="mt-4 text-xs leading-relaxed text-bone-faint">{activeTier.blurb}</p>
            </Reveal>

            <ul className="mt-8 space-y-px overflow-hidden rounded-2xl bg-line-soft">
              {BUDGET.map((line, i) => {
                const amount = line[tier];
                return (
                  <Reveal as="li" key={line.label} i={i} className="relative bg-ink px-5 py-5 sm:px-7">
                    {/* Proportion bar sits behind the row. */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-y-0 left-0 bg-ember/[0.06]"
                      animate={{ width: `${(amount / max) * 100}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <div className="min-w-0">
                        <p className="text-[0.95rem] font-medium text-bone">{line.label}</p>
                        <p className="mt-1 text-xs leading-relaxed text-bone-faint">{line.detail}</p>
                      </div>
                      <p className="shrink-0 font-mono text-base tabular-nums text-bone">
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={amount}
                            className="inline-block"
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.25 }}
                          >
                            {money(amount)}
                          </motion.span>
                        </AnimatePresence>
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* Total card */}
          <Reveal i={1} className="lg:sticky lg:top-24">
            <div className="grain relative overflow-hidden rounded-2xl border border-line bg-ink-2 p-7">
              <p className="label !text-[0.6rem]">Total, per person</p>
              <p className="mt-4 font-display text-[clamp(3rem,11vw,4.5rem)] leading-none text-bone">
                <RollingTotal value={total} />
              </p>
              <p className="mt-3 text-xs leading-relaxed text-bone-faint">
                {activeTier.name} tier · 8 nights on the island · flights, villas, transport, food,
                activities and entry fees included.
              </p>

              <dl className="mt-7 space-y-3 border-t border-line-soft pt-6 text-sm">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-bone-faint">Per day, on the ground</dt>
                  <dd className="font-mono text-bone-dim">{money(Math.round(onIsland / 9))}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-bone-faint">Group total × {TRIP.partySize}</dt>
                  <dd className="font-mono text-bone-dim">{money(groupTotal)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="text-bone-faint">Everything but the flights</dt>
                  <dd className="font-mono text-bone-dim">{money(onIsland)}</dd>
                </div>
              </dl>

              <div className="mt-7 rounded-xl border border-ember/25 bg-ember/[0.06] p-5">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-ember">Deposit to hold your spot</p>
                  <p className="font-mono text-lg text-ember">{money(DEPOSIT.amount)}</p>
                </div>
                <p className="mt-2 text-xs text-bone-dim">
                  Due {DEPOSIT.by}. {DEPOSIT.covers}
                </p>
                <p className="mt-2 text-[0.7rem] leading-relaxed text-bone-faint">{DEPOSIT.note}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
