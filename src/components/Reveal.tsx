'use client';

import { motion, useReducedMotion, type Variants } from 'motion/react';

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Stagger index — each step adds 60ms. */
  i?: number;
  y?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'span';
};

export function Reveal({ children, className, i = 0, y = 22, as = 'div' }: Props) {
  const still = useReducedMotion();
  const M = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: still ? 0 : y },
    shown: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
    >
      {children}
    </M>
  );
}

/**
 * Splits a line into words that rise into place one after another.
 *
 * The scroll observer goes on the outer wrapper, never on the translated word
 * itself: a word starting at y:110% sits outside its own overflow-hidden
 * parent, and IntersectionObserver clips a target against its ancestors before
 * testing the viewport — so observing the word directly means it never reports
 * as visible and the animation never starts. Variants propagate down instead.
 */
export function RevealWords({ text, className = '' }: { text: string; className?: string }) {
  const still = useReducedMotion();
  const words = text.split(' ');

  const line: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
  };

  const word: Variants = {
    hidden: { y: still ? 0 : '110%', opacity: still ? 1 : 0 },
    shown: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.span
      className={className}
      variants={line}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
    >
      {words.map((w, idx) => (
        <span key={`${w}-${idx}`}>
          {/* Word sits in its own clipping box so it can slide up from beneath. */}
          <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
          {/* Space lives outside the clip — inline-block trims trailing whitespace. */}
          {idx < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </motion.span>
  );
}
