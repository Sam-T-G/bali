'use client';

import { Reveal } from './Reveal';
import { Photo } from './Photo';
import { DAYS, type Day, type Track } from '@/data/trip';

const TRACK_META = {
  send: { label: 'Send it', glyph: '▲', tone: 'text-ember', ring: 'border-ember/25' },
  cruise: { label: 'Take it easy', glyph: '◦', tone: 'text-jade', ring: 'border-jade/25' },
} as const;

function TrackCard({ track }: { track: Track }) {
  const meta = TRACK_META[track.kind];
  return (
    <div className={`rounded-xl border ${meta.ring} bg-ink-2/40 p-5 transition-colors duration-500 hover:bg-ink-2/80`}>
      <div className="flex items-center justify-between gap-3">
        <span className={`flex items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.16em] ${meta.tone}`}>
          <span aria-hidden className="text-[0.6em]">{meta.glyph}</span>
          {meta.label}
        </span>
        <span className="font-mono text-[0.65rem] text-bone-faint">{track.time}</span>
      </div>

      <p className="mt-3.5 text-[0.95rem] font-medium text-bone">{track.title}</p>
      <p className="mt-2 text-[0.82rem] leading-relaxed text-bone-faint">{track.body}</p>

      <p className="mt-4 border-t border-line-soft pt-3.5 font-mono text-xs text-bone-dim">
        {track.cost}
      </p>
    </div>
  );
}

function DayBlock({ day }: { day: Day }) {
  return (
    <article className="relative grid gap-7 border-t border-line-soft pt-10 lg:grid-cols-[10rem_1fr] lg:gap-12">
      {/* Sticky date rail */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="flex items-baseline gap-3 lg:block">
          <p className="font-display text-5xl leading-none" style={{ color: day.accent }}>
            {day.n === null ? '00' : String(day.n).padStart(2, '0')}
          </p>
          <div className="lg:mt-3">
            <p className="text-sm font-medium text-bone">{day.date}</p>
            <p className="text-xs text-bone-faint">{day.weekday}</p>
          </div>
        </div>
        <p
          className="mt-3 inline-block rounded-full border px-3 py-1 text-[0.65rem] text-bone-dim lg:mt-4"
          style={{ borderColor: `${day.accent}33` }}
        >
          {day.basecamp}
        </p>
      </div>

      <div className="min-w-0">
        <Reveal>
          <h3 className="text-balance font-display text-[clamp(1.7rem,3.6vw,2.6rem)]">{day.headline}</h3>
        </Reveal>

        {day.anchor && (
          <Reveal i={1}>
            <div
              className="mt-7 rounded-xl border-l-2 bg-ink-2/60 p-6"
              style={{ borderColor: day.accent }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="label !text-[0.6rem] !text-bone-dim">
                  The anchor · everyone
                </span>
                <span className="font-mono text-xs" style={{ color: day.accent }}>
                  {day.anchor.time}
                </span>
              </div>
              <p className="mt-3 text-lg font-medium text-bone">{day.anchor.title}</p>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-bone-dim">{day.anchor.body}</p>
            </div>
          </Reveal>
        )}

        {day.tracks.length > 0 && (
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {day.tracks.map((track, i) => (
              <Reveal key={track.title} i={i + 2}>
                <TrackCard track={track} />
              </Reveal>
            ))}
          </div>
        )}

        {day.image && (
          <Reveal i={4}>
            <Photo
              img={day.image}
              className="mt-4 aspect-[21/9] w-full rounded-xl"
              sizes="(min-width:1024px) 60vw, 100vw"
            />
          </Reveal>
        )}
      </div>
    </article>
  );
}

export function Itinerary() {
  return (
    <section id="itinerary" className="relative scroll-mt-16 border-t border-line-soft py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal><p className="label mb-6">Day by day</p></Reveal>
            <Reveal i={1}>
              <h2 className="text-balance font-display text-[clamp(2.25rem,5.5vw,4rem)]">
                One anchor a day. Everything either side of it is your call.
              </h2>
            </Reveal>
          </div>
          <Reveal i={2}>
            <div className="max-w-sm space-y-3 text-sm leading-relaxed text-bone-dim">
              <p>
                The <span className="text-bone">anchor</span> is the one thing the group does together —
                usually a dinner or a sunset. Turn up for that and you have held up your end.
              </p>
              <p className="text-xs text-bone-faint">
                Around it, every day offers a hard option and a soft one. Nobody tracks which you pick,
                and you can switch mid-trip.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-14">
          {DAYS.map((day) => (
            <DayBlock key={`${day.date}-${day.n}`} day={day} />
          ))}
        </div>
      </div>
    </section>
  );
}
