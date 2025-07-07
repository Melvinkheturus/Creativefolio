'use client';
import { useRef } from 'react';

export default function GlowShimmerCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative group w-full rounded-xl overflow-hidden border border-transparent bg-black/20 backdrop-blur-sm transition-all duration-300"
      style={{
        backgroundImage: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.1), transparent 40%)`,
      }}
    >
      {/* Shimmer Border */}
      <div className="absolute inset-0 z-0 pointer-events-none rounded-xl border-2 border-transparent group-hover:animate-shimmer group-hover:bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 bg-[length:200%_200%] mask-border" />

      {/* Inner content */}
      <div className="relative z-10 p-6">{children}</div>
    </div>
  );
} 