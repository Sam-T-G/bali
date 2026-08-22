'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Photo } from './Photo';
import { RevealWords } from './Reveal';
import { IMAGES } from '@/data/images';
import { TRIP } from '@/data/trip';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const still = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', still ? '0%' : '22%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, still ? 1 : 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', still ? '0%' : '-28%']);
  const contentFade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="grain relative h-[100svh] min-h-[38rem] overflow-hidden">
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0">
        <Photo img={IMAGES.hero} className="h-full w-full" priority sizes="100vw" />
      </motion.div>

      {/* Two stacked scrims: one for legibility, one to seat the section into the page. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

      <motion.div
        style={{ y: contentY, opacity: contentFade }}
        className="shell relative flex h-full flex-col justify-end pb-20 sm:pb-24"
      >
        <motion.p
          className="label mb-6 flex flex-wrap items-center gap-x-3 gap-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-ember">A proposal</span>
          <span aria-hidden className="text-line">/</span>
          <span>{TRIP.partySize} people</span>
          <span aria-hidden className="text-line">/</span>
          <span>{TRIP.dateLabel}</span>
        </motion.p>

        <h1 className="flex flex-wrap items-baseline gap-x-[0.14em] font-display text-[clamp(4rem,17vw,13rem)]">
          <RevealWords text="Bali" />
          <motion.span
            className="font-sans text-[0.11em] font-medium tracking-[0.24em] text-ember"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            2027
          </motion.span>
        </h1>

        <motion.p
          className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-bone-dim sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {TRIP.tagline}
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="#pitch"
            className="group flex items-center gap-2.5 rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03]"
          >
            See the plan
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#money"
            className="rounded-full border border-line px-6 py-3 text-sm text-bone-dim transition-colors duration-300 hover:border-bone-faint hover:text-bone"
          >
            Skip to the money
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 right-5 hidden items-center gap-3 sm:flex md:right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
      >
        <span className="label !text-[0.6rem]">Scroll</span>
        <motion.span
          className="block h-8 w-px bg-gradient-to-b from-ember to-transparent"
          animate={still ? {} : { scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
