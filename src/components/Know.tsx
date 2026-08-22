'use client';

import { Reveal } from './Reveal';
import { KNOW } from '@/data/trip';

export function Know() {
  return (
    <section id="know" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <Reveal><p className="label mb-6">Know before you go</p></Reveal>
        <Reveal i={1}>
          <h2 className="max-w-3xl text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
            The boring things that make the difference.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
          {KNOW.map((item, i) => (
            <Reveal key={item.title} i={i % 4} className="bg-ink p-6 sm:p-7">
              <p className="text-sm font-medium text-bone">{item.title}</p>
              <p className="mt-3 text-[0.82rem] leading-relaxed text-bone-faint">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
