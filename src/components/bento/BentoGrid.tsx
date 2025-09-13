"use client";

import { ReactNode } from "react";

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
      {children}
    </div>
  );
}