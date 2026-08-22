'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { Reveal } from './Reveal';
import { PITCH, STATS, ALT_DATES, TRIP } from '@/data/trip';

/** Counts a numeric stat up once, the first time it scrolls into view. */
function Ticker({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -20% 0px' });
  const [shown, setShown] = useState(value);

  const numeric = Number(value.replace(/[^0-9.]/g, ''));
  const countable = Number.isFinite(numeric) && numeric > 0;

  useEffect(() => {
    if (!inView || !countable) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const duration = 1100;
    const start = performance.now();
    let frame = 0;

    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = numeric * eased;
      const rendered = value.includes('.')
        ? current.toFixed(1)
        : String(Math.round(current));
      setShown(value.replace(/[0-9.]+/, rendered));
      if (t < 1) frame = requestAnimationFrame(step);
    };

    setShown(value.replace(/[0-9.]+/, '0'));
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, countable, numeric, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown}
    </span>
  );
}

export function Pitch() {
  return (
    <section id="pitch" className="relative scroll-mt-16 py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <p className="label mb-10">{PITCH.kicker}</p>
        </Reveal>

        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4.25rem)]">
              {PITCH.heading}
            </h2>
          </Reveal>

          <div className="space-y-6 lg:pt-3">
            {PITCH.body.map((para, i) => (
              <Reveal key={i} i={i}>
                <p className="text-pretty text-[0.975rem] leading-[1.75] text-bone-dim sm:text-base">
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line-soft lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} i={i} className="bg-ink p-6 sm:p-8">
              <p className="font-display text-[clamp(2.5rem,6vw,3.75rem)] leading-none text-bone">
                <Ticker value={stat.value} />
              </p>
              <p className="mt-3 text-sm font-medium text-bone">{stat.label}</p>
              <p className="mt-1 text-xs text-bone-faint">{stat.sub}</p>
            </Reveal>
          ))}
        </div>

        <Reveal i={2}>
          <aside className="mt-10 flex flex-col gap-2 rounded-2xl border border-line-soft bg-ink-2/60 p-6 sm:flex-row sm:items-baseline sm:gap-6 sm:p-7">
            <p className="shrink-0 text-sm font-medium text-ember">{ALT_DATES.label}</p>
            <p className="text-sm leading-relaxed text-bone-dim">{ALT_DATES.body}</p>
          </aside>
        </Reveal>

        <Reveal i={3}>
          <p className="mt-6 text-xs leading-relaxed text-bone-faint">
            Every price on this page was researched in {TRIP.pricedOn} for June 2027 travel and is quoted per
            person in US dollars. Sources are listed at the bottom. Fares and villa rates move — treat these as
            well-researched estimates, not quotes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
