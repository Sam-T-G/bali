'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

const LINKS = [
  { id: 'pitch', label: 'The pitch' },
  { id: 'flights', label: 'Getting there' },
  { id: 'basecamps', label: 'Basecamps' },
  { id: 'itinerary', label: 'Day by day' },
  { id: 'menu', label: 'The menu' },
  { id: 'money', label: 'The money' },
  { id: 'know', label: 'Know before' },
];

export function Nav() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('pitch');

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight whichever section currently owns the upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock the page while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-ember"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          lifted ? 'border-b border-line-soft bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between gap-6">
          <a href="#top" className="flex items-baseline gap-2.5 font-display text-xl tracking-tight">
            Bali
            <span className="font-sans text-[0.6rem] font-medium tracking-[0.2em] text-ember">2027</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-full px-3.5 py-1.5 text-[0.8rem] transition-colors ${
                    active === link.id ? 'text-bone' : 'text-bone-faint hover:text-bone-dim'
                  }`}
                >
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-ink-3"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#in"
              className="hidden rounded-full bg-bone px-4 py-2 text-[0.8rem] font-medium text-ink transition-transform duration-300 hover:scale-[1.03] sm:block"
            >
              I&rsquo;m in
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-line text-bone lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                    open ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-all duration-300 ${
                    open ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 bg-ink/97 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="shell flex h-full flex-col justify-center gap-1 pb-16">
              {LINKS.map((link, idx) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.045, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line-soft py-4 font-display text-3xl"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.a
                href="#in"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.45 }}
                className="mt-8 rounded-full bg-ember py-4 text-center font-medium text-ink"
              >
                I&rsquo;m in
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
