'use client';

import { useEffect } from 'react';

/**
 * Momentum scrolling via Lenis, loaded only on pointer-fine devices that have
 * not asked for reduced motion. Touch devices keep native scrolling, which is
 * both faster and what people expect on a phone.
 */
export function SmoothScroll() {
  useEffect(() => {
    const wantsStillness = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (wantsStillness || isTouch) return;

    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let cancelled = false;

    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.05, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
      const loop = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return null;
}
