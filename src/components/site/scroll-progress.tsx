"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleY }}
      className="fixed right-5 top-1/2 z-50 h-40 w-[2px] origin-top -translate-y-1/2 bg-primary"
    />
  );
}