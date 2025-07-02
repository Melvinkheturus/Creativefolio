"use client";

import FastMarquee from 'react-fast-marquee';
import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  gradient?: boolean;
  className?: string;
  direction?: 'left' | 'right';
}

export default function Marquee({
  children,
  speed = 50,
  pauseOnHover = true,
  gradient = false,
  className = '',
  direction = 'left'
}: MarqueeProps) {
  return (
    <FastMarquee
      speed={speed}
      pauseOnHover={pauseOnHover}
      gradient={gradient}
      className={className}
      direction={direction}
    >
      {children}
    </FastMarquee>
  );
} 