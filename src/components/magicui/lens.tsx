"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface LensProps {
  children: React.ReactNode;
  className?: string;
  lensColor?: string;
  lensSize?: number;
  zoomFactor?: number;
  isStatic?: boolean;
  ariaLabel?: string;
}

export const Lens = ({
  children,
  className = "",
  lensColor = "#000",
  lensSize = 200,
  zoomFactor = 2,
  isStatic = false,
  ariaLabel = "Zoom Image",
}: LensProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const translateX = useSpring(mouseX, springConfig);
  const translateY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x - lensSize / 2);
    mouseY.set(y - lensSize / 2);
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      role="group"
      aria-label={ariaLabel}
    >
      {children}

      {isHovered && !isStatic && (
        <motion.div
          className="pointer-events-none absolute"
          style={{
            width: lensSize,
            height: lensSize,
            x: translateX,
            y: translateY,
            backgroundColor: lensColor,
            borderRadius: "50%",
            zIndex: 10,
          }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              transform: `scale(${zoomFactor})`,
              backgroundImage: `url(${
                containerRef.current?.querySelector("img")?.src
              })`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </motion.div>
      )}
    </div>
  );
};
