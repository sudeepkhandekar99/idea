"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const joinRoles = [
  {
    title: "Founders",
    text: "Shape your early idea into a clearer venture with community, guidance and momentum.",
  },
  {
    title: "Mentors",
    text: "Support emerging founders with experience, practical advice and honest conversations.",
  },
  {
    title: "Investors",
    text: "Discover promising ideas and connect with people building what comes next.",
  },
];

const events = [
  {
    date: "12 July 2026",
    title: "Founder Circle Evening",
    text: "A curated networking evening for founders, mentors and business leaders.",
  },
  {
    date: "24 August 2026",
    title: "IDEA Showcase",
    text: "Selected founders present early ideas and receive feedback from advisors.",
  },
];

const testimonials = [
  {
    quote:
      "IDEA creates the kind of room where conversations turn into possibilities.",
    name: "Community Member",
  },
  {
    quote:
      "The value is not just the event. It is the people, guidance and momentum after it.",
    name: "Founder",
  },
  {
    quote: "A thoughtful space for entrepreneurs who are serious about building.",
    name: "Mentor",
  },
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.35], [0, 140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  const leftGradientY = useTransform(scrollYProgress, [0, 0.4], [0, 120]);
  const rightGradientY = useTransform(scrollYProgress, [0, 0.4], [0, -80]);

  return (
    <main className="bg-[#f4f1eb] text-[#111111]">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
        <div className="absolute inset-0 bg-[#f4f1eb]" />

        <motion.div
          style={{ y: leftGradientY }}
          animate={{
            x: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-180px] top-[60px] h-[700px] w-[700px] rounded-full bg-[#c94f60]/10 blur-[180px]"
        />

        <motion.div
          style={{ y: rightGradientY }}
          animate={{
            x: [0, -80, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-250px] top-[40px] h-[850px] w-[850px] rounded-full bg-[#b11226]/10 blur-[220px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[20%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#f2d7d9]/40 blur-[140px]"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-6xl text-center"
        >
          <p className="mb-8 text-xs uppercase tracking-[0.4em] text-[#b11226]">
            Powered by BOLD
          </p>

          <h1 className="font-serif text-7xl font-medium leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-9xl">
            Ideas deserve
            <br />
            a serious room.
          </h1>

          <p className="mx-auto mt-10 max-w-3xl font-serif text-3xl italic leading-tight text-[#b11226] md:text-4xl">
            A platform where founders, mentors, investors and builders come
            together to turn conversations into opportunities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/join"
              className="rounded-full bg-[#b11226] px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-white transition hover:-translate-y-1 hover:bg-[#941020]"
            >
              Join IDEA
            </a>

            <a
              href="/events"
              className="rounded-full border border-[#b11226]/30 bg-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#111111] backdrop-blur transition hover:-translate-y-1 hover:border-[#b11226]"
            >
              Explore Events
            </a>
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 border-y border-[#b11226]/20 text-xs uppercase tracking-[0.3em] text-[#6b5f58] md:grid-cols-4">
            {["Community", "Mentorship", "Events", "Partnerships"].map(
              (item) => (
                <div
                  key={item}
                  className="border-[#b11226]/20 py-6 md:border-r last:border-r-0"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>
      </section>

      {/* WHY IDEA EXISTS */}
      <ScrollSection className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 border-b border-[#d8d1c5] pb-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionLabel text="Why IDEA Exists" />
            <h2 className="mt-6 font-serif text-6xl font-medium leading-none tracking-[-0.045em] md:text-7xl">
              Every meaningful venture starts with a conversation.
            </h2>
          </div>

          <div className="space-y-8 text-xl leading-9 text-[#5f5f5f]">
            <p>
              Not every founder begins with funding. Not every idea starts with
              a business plan. Sometimes what people need first is a room.
            </p>

            <p>
              A place to ask questions, meet mentors, share experiences and find
              momentum. IDEA was built to create that room.
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* JOIN IDEA */}
      <ScrollSection className="bg-[#12100d] px-6 py-28 text-[#f4f1eb]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 border-t border-[#b11226]/30 pt-16 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionLabel text="Join IDEA" />
              <h2 className="mt-6 font-serif text-6xl font-medium leading-none tracking-[-0.045em] md:text-7xl">
                Choose how you want to be part of the room.
              </h2>
            </div>

            <div className="space-y-5">
              {joinRoles.map((role, index) => (
                <motion.a
                  key={role.title}
                  href="/join"
                  whileHover={{ x: 8 }}
                  className="block border border-[#b11226]/30 bg-[#1b1814] p-8 transition hover:border-[#b11226]"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#b11226]">
                    0{index + 1}
                  </p>

                  <h3 className="mt-4 font-serif text-4xl font-medium">
                    {role.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-[#c8c0b6]">
                    {role.text}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* EVENTS */}
      <ScrollSection className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex flex-col justify-between gap-8 border-b border-[#d8d1c5] pb-12 md:flex-row md:items-end">
            <div>
              <SectionLabel text="Upcoming Events" />
              <h2 className="mt-6 font-serif text-6xl font-medium leading-none tracking-[-0.045em]">
                Where ideas meet momentum.
              </h2>
            </div>

            <a
              href="/events"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b11226]"
            >
              Explore all events →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <motion.article
                key={event.title}
                whileHover={{ y: -8 }}
                className="border border-[#d8d1c5] bg-[#f7f4ee] p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)] transition"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#b11226]">
                  {event.date}
                </p>

                <div className="mt-20">
                  <h3 className="font-serif text-5xl font-medium leading-none tracking-[-0.04em]">
                    {event.title}
                  </h3>

                  <p className="mt-5 leading-7 text-[#5f5f5f]">{event.text}</p>

                  <a
                    href="/events"
                    className="mt-8 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-[#b11226]"
                  >
                    Register →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* TESTIMONIALS */}
      <ScrollSection className="bg-[#12100d] px-6 py-28 text-[#f4f1eb]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <SectionLabel text="Testimonials" />
            <h2 className="mt-6 font-serif text-6xl font-medium leading-none tracking-[-0.045em]">
              Built through trust and proximity.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -8 }}
                className="border border-[#b11226]/30 bg-[#1b1814] p-8"
              >
                <p className="font-serif text-3xl italic leading-tight">
                  “{item.quote}”
                </p>

                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#b11226]">
                  {item.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollSection>

      {/* NEWSLETTER + CONTACT */}
      <ScrollSection className="px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="border border-[#d8d1c5] bg-[#f7f4ee] p-10 md:p-14">
            <SectionLabel text="Contact" />
            <h2 className="mt-6 font-serif text-6xl font-medium leading-none tracking-[-0.045em]">
              Have an idea worth discussing?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5f5f]">
              Reach out to IDEA and start the first conversation.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-block rounded-full bg-[#b11226] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white"
            >
              Contact Us
            </a>
          </div>

          <div className="border border-[#d8d1c5] bg-white p-10 md:p-14">
            <SectionLabel text="Newsletter" />
            <h3 className="mt-6 font-serif text-5xl font-medium leading-none tracking-[-0.045em]">
              Stay close to the next idea.
            </h3>

            <form className="mt-10 space-y-4">
              <input
                placeholder="Your email"
                className="w-full border border-[#d8d1c5] bg-transparent px-5 py-4 outline-none placeholder:text-[#8c8378] focus:border-[#b11226]"
              />

              <button className="w-full bg-[#b11226] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#941020]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </ScrollSection>
    </main>
  );
}

function ScrollSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 36, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#b11226]">
      <span className="h-px w-10 bg-[#b11226]" />
      {text}
    </p>
  );
}