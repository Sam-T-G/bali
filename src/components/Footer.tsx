import { SOURCES, TRIP } from '@/data/trip';

export function Footer() {
  return (
    <footer className="border-t border-line-soft py-16">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-display text-3xl">
              Bali <span className="font-sans text-xs tracking-[0.2em] text-ember align-super">2027</span>
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-bone-faint">
              Priced from Agoda, Booking.com, Kayak and Klook listing rates in {TRIP.pricedOn} for June 2027 travel — deliberately the conservative end of the market, not the showcase tier. Estimates in US dollars, not
              quotes — flight fares and villa rates move, and the rupiah moves with them. Verify before
              anyone sends money.
            </p>
          </div>

          <div>
            <p className="label mb-5">Where the numbers came from</p>
            <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {SOURCES.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline gap-1.5 text-xs text-bone-faint transition-colors hover:text-bone-dim"
                  >
                    <span className="underline decoration-line underline-offset-4 group-hover:decoration-bone-faint">
                      {source.label}
                    </span>
                    <span aria-hidden className="text-[0.6em] opacity-50">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="hairline mt-12 pt-6 text-[0.7rem] text-bone-faint">
          Photography via Unsplash. Built for a group of ten who have not agreed to anything yet.
        </p>
      </div>
    </footer>
  );
}
