'use client';

import { Reveal } from './Reveal';
import { BUDGET, TRIP } from '@/data/trip';

const money = (n: number) => `$${n.toLocaleString('en-US')}`;

/** The base price, flight-first, right under the hero — before any storytelling. */
export function TheNumber() {
  const total = BUDGET.reduce((sum, l) => sum + l.lean, 0);
  const flights = BUDGET[0];
  const rest = BUDGET.slice(1);

  return (
    <section id="number" aria-label="Base price" className="scroll-mt-16 border-b border-line-soft bg-ink-2/40">
      <div className="shell grid gap-8 py-12 sm:py-14 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
        <Reveal>
          <div>
            <p className="label">The number</p>
            <p className="mt-2 font-display text-[clamp(3.5rem,9vw,5.5rem)] leading-none">
              {money(total)}
            </p>
            <p className="mt-2 text-xs text-bone-faint">
              all-in per person · {TRIP.dateLabel} · {TRIP.partySize} of us
            </p>
          </div>
        </Reveal>

        <Reveal i={1}>
          <div>
            <dl className="flex flex-wrap gap-x-7 gap-y-3">
              <div className="basis-full sm:basis-auto">
                <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-bone-faint">{flights.label}</dt>
                <dd className="mt-0.5 font-mono text-lg text-bone">{money(flights.lean)}</dd>
              </div>
              {rest.map((line) => (
                <div key={line.label}>
                  <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-bone-faint">{line.label}</dt>
                  <dd className="mt-0.5 font-mono text-lg text-bone-dim">{money(line.lean)}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-bone-faint">
              Lean tier at real June listing rates, tax included. Comfort upgrades land at $2,155.{' '}
              <a href="#money" className="text-bone-dim underline decoration-line underline-offset-4 hover:text-bone">
                Full breakdown ↓
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
