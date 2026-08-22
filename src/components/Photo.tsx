'use client';

import { useState } from 'react';
import type { Img } from '@/data/images';

type Props = {
  img: Img;
  className?: string;
  imgClassName?: string;
  /** Priority images skip lazy-loading — use for anything above the fold. */
  priority?: boolean;
  sizes?: string;
  children?: React.ReactNode;
};

/**
 * A photo that can never look broken.
 *
 * The bespoke gradient from the image manifest paints immediately and stays
 * put underneath. The photo fades in on top once decoded; if it fails to load
 * (404, hotlink block, offline), we simply never fade it in and the gradient
 * is the final state.
 */
export function Photo({ img, className = '', imgClassName = '', priority, sizes, children }: Props) {
  const [state, setState] = useState<'loading' | 'ready' | 'failed'>('loading');

  return (
    <div
      className={`relative overflow-hidden bg-ink-2 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${img.fallback[0]} 0%, ${img.fallback[1]} 100%)`,
      }}
    >
      {state !== 'failed' && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img.src}
          alt={img.alt}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          onLoad={() => setState('ready')}
          onError={() => setState('failed')}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            state === 'ready' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
      {children}
    </div>
  );
}
