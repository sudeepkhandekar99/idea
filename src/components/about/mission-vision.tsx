"use client";

import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {[
          {
            label: "Mission",
            title: "Create the room where ideas move forward.",
            text: "Our mission is to connect ambitious people with the right community, guidance and opportunities to shape early ideas into real ventures.",
          },
          {
            label: "Vision",
            title: "Build an ecosystem where bold thinking becomes action.",
            text: "We imagine IDEA as a trusted platform for founders, mentors, investors and partners to collaborate across industries and generations.",
          },
        ].map((item) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="border border-[#d8d1c5] bg-[#f7f4ee] p-10"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#b11226]">
              {item.label}
            </p>
            <h2 className="mt-8 font-serif text-5xl font-medium leading-none tracking-[-0.04em]">
              {item.title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5f5f5f]">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}