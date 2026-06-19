"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "I have an idea",
    subtitle: "For founders with early ideas",
    text: "Validate your idea, shape the business model, find mentors, build the first version and prepare for launch.",
    includes: ["Idea validation", "Mentorship", "Founder guidance", "Launch support"],
  },
  {
    number: "02",
    title: "I have a team",
    subtitle: "For teams and organizations",
    text: "Bring structure, strategic thinking and innovation guidance to your existing team.",
    includes: ["Workshops", "Business strategy", "Brand thinking", "Team mentoring"],
  },
  {
    number: "03",
    title: "I want to support ideas",
    subtitle: "For mentors, investors and partners",
    text: "Explore ideas, meet founders, support ventures and become part of a serious entrepreneurial community.",
    includes: ["Deal discovery", "Founder access", "Community events", "Advisory roles"],
  },
];

export function StickyServices() {
  return (
    <section className="bg-[#f4f1eb] px-6 py-28 text-[#111]">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-border pt-16">
          {services.map((service) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-12 border-b border-border py-20 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                  {service.number} · Join IDEA
                </p>

                <h2 className="font-serif text-6xl font-medium leading-none tracking-[-0.04em] md:text-7xl">
                  {service.title}
                </h2>

                <p className="mt-5 font-serif text-2xl italic text-primary">
                  {service.subtitle}
                </p>
              </div>

              <div>
                <p className="max-w-2xl text-xl leading-9 text-muted-foreground">
                  {service.text}
                </p>

                <div className="mt-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em]">
                    What’s included
                  </p>

                  <div className="divide-y divide-border border-t border-border">
                    {service.includes.map((item) => (
                      <div key={item} className="flex gap-4 py-5 text-lg">
                        <span className="text-primary">/</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}