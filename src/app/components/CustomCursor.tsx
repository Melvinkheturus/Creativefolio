"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") !== null ||
        target.closest("a") !== null
      );
    };

    const showCursor = () => setIsVisible(true);
    const hideCursor = () => setIsVisible(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate="default"
      variants={{
        default: {
          x: position.x - (isPointer ? 32 : 6),
          y: position.y - (isPointer ? 32 : 6),
          scale: isPointer ? 2.5 : 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 800,
        damping: 50,
      }}
    >
      <div
        className={`
          rounded-full bg-white mix-blend-difference
          ${isPointer ? "w-4 h-4" : "w-3 h-3"}
        `}
      />
    </motion.div>
  );
} 