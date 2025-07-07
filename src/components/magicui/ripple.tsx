"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Ripple({ className, ...props }: RippleProps) {
  const [ripples, setRipples] = useState<
    Array<{
      key: string;
      x: number;
      y: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    // Center all ripples
    const centerX = 50;
    const centerY = 50;
    
    let interval = setInterval(() => {
      if (ripples.length >= 8) return;

      // Instead of random positions, use concentric circles
      // All ripples start from center with varying sizes
      const size = 5 + ripples.length * 2; // Progressive size increase

      setRipples((ripples) => [
        ...ripples,
        {
          key: `${centerX}-${centerY}-${size}-${Date.now()}`,
          x: centerX,
          y: centerY,
          size,
        },
      ]);
    }, 700);
    return () => clearInterval(interval);
  }, [ripples.length]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (ripples.length) {
      timeout = setTimeout(() => {
        setRipples((ripples) => ripples.slice(1));
      }, 2000);
    }
    return () => clearTimeout(timeout);
  }, [ripples.length]);

  return (
    <div
      className={cn("absolute inset-0 h-full w-full", className)}
      {...props}
    >
      {/* Dark background gradient with subtle tint */}
      <div className="bg-gradient-radial from-[#0a0912] to-[#080810] absolute inset-0" />
      
      {/* Ripple circles with subtle gradient */}
      {ripples.map(({ key, x, y, size }) => (
        <span
          key={key}
          className="bg-gradient-to-br from-purple-900/10 to-indigo-900/10 border border-purple-500/5 rounded-full absolute animate-ripple-concentric"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.08 + ((8 - size) * 0.01),
            boxShadow: '0 0 20px rgba(147, 51, 234, 0.05)'
          }}
        />
      ))}
    </div>
  );
} 