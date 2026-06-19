import { StickyServices } from "@/components/site/sticky-services";

const events = [
  {
    date: "July 2026",
    title: "Founder Circle Evening",
    text: "A curated evening for founders, mentors and operators to exchange ideas.",
  },
  {
    date: "August 2026",
    title: "Idea Showcase",
    text: "Selected founders present early ideas and receive feedback from experienced advisors.",
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
      "The value is not just the event. It is the people, the guidance and the momentum after it.",
    name: "Founder",
  },
  {
    quote:
      "A thoughtful space for entrepreneurs who are serious about building.",
    name: "Mentor",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#f4f1eb] text-[#111111]">
      {/* HERO */}
      <section className="min-h-screen px-6 py-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="font-serif text-2xl italic">idea</div>

          <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.35em] md:flex">
            <a href="#">About</a>
            <a href="#">Team</a>
            <a href="#">History</a>
            <a href="#">Join</a>
            <a href="#">Events</a>
          </div>

          <button className="rounded-full border border-[#b11226] px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#b11226]">
            Contact
          </button>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-16 pt-32 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#b11226]">
              <span className="h-px w-10 bg-[#b11226]" />
              Powered by BOLD
            </p>

            <h1 className="font-serif text-7xl font-medium leading-[0.9] tracking-[-0.05em] md:text-8xl lg:text-9xl">
              Ideas deserve
              <br />
              a serious room.
            </h1>
          </div>

          <div className="flex flex-col justify-end pb-4">
            <p className="font-serif text-3xl italic text-[#b11226]">
              A community for founders, mentors, investors and builders.
            </p>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5f5f]">
              IDEA brings people together through events, mentorship and
              opportunity. A place where early thoughts become conversations,
              and conversations become ventures.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-[#b11226] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-1">
                Join IDEA
              </button>

              <button className="rounded-full border border-[#d8d1c5] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition hover:-translate-y-1 hover:border-[#b11226]">
                View Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STICKY SCROLL */}
      <StickyServices />

      {/* DARK EVENTS */}
      <section className="bg-[#12100d] px-6 py-28 text-[#f4f1eb]">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-t border-[#b11226]/30 pt-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#b11226]">
                <span className="h-px w-10 bg-[#b11226]" />
                Events
              </p>

              <h2 className="font-serif text-6xl font-medium leading-none tracking-[-0.04em] md:text-7xl">
                Where the right people meet.
              </h2>
            </div>

            <div className="space-y-5">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="group border border-[#b11226]/30 bg-[#1b1814] p-8 transition hover:-translate-y-1 hover:border-[#b11226]"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#b11226]">
                    {event.date}
                  </p>

                  <h3 className="mt-4 font-serif text-4xl font-medium">
                    {event.title}
                  </h3>

                  <p className="mt-4 max-w-2xl leading-7 text-[#c8c0b6]">
                    {event.text}
                  </p>

                  <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#b11226]">
                    Register →
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-6 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-[#b11226]">
              <span className="h-px w-10 bg-[#b11226]" />
              Testimonials
            </p>

            <h2 className="font-serif text-6xl font-medium leading-none tracking-[-0.04em]">
              Built through trust.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="border border-[#d8d1c5] bg-[#f7f4ee] p-8"
              >
                <p className="font-serif text-3xl italic leading-tight">
                  “{item.quote}”
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#b11226]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-[#12100d] px-6 py-24 text-[#f4f1eb]">
        <div className="mx-auto max-w-7xl border border-[#b11226]/30 p-10 md:p-16">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#b11226]">
                Newsletter
              </p>

              <h2 className="font-serif text-6xl font-medium leading-none tracking-[-0.04em]">
                Stay close to the next idea.
              </h2>
            </div>

            <form className="flex gap-4">
              <input
                placeholder="Your email"
                className="w-full border border-[#b11226]/30 bg-transparent px-5 py-4 text-[#f4f1eb] outline-none placeholder:text-[#8c8378]"
              />

              <button className="bg-[#b11226] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}