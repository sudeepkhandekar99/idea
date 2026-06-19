"use client";

import { motion } from "framer-motion";

export function AnimatedCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`
        rounded-[2rem]
        border
        border-border
        bg-card
        p-8
        shadow-[0_24px_80px_rgba(31,26,23,0.08)]
        transition
        hover:border-primary/30
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}