"use client";

import { GlowCard } from "../../components/nurui/spotlight-card";

export function SpotLightCardDemo() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 custom-cursor py-20">
      <GlowCard glowColor="purple">
        <div className="h-full flex items-center justify-center text-white">
          <h3 className="text-lg font-medium">Purple Glow</h3>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="blue">
        <div className="h-full flex items-center justify-center text-white">
          <h3 className="text-lg font-medium">Blue Glow</h3>
        </div>
      </GlowCard>
      
      <GlowCard glowColor="green">
        <div className="h-full flex items-center justify-center text-white">
          <h3 className="text-lg font-medium">Green Glow</h3>
        </div>
      </GlowCard>
    </div>
  );
} 