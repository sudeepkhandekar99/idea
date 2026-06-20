const timeline = [
  {
    year: "2024",
    title: "The idea begins",
    text: "The early vision for a community-led platform begins to take shape.",
  },
  {
    year: "2025",
    title: "First conversations",
    text: "Founders, mentors and business leaders begin gathering around the mission.",
  },
  {
    year: "2026",
    title: "IDEA grows",
    text: "Events, partnerships and community programs expand the platform.",
  },
];

export function HistoryTimeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl border-t border-[#d8d1c5]">
        {timeline.map((item) => (
          <div
            key={item.year}
            className="grid gap-8 border-b border-[#d8d1c5] py-14 md:grid-cols-[180px_1fr]"
          >
            <p className="font-serif text-5xl text-[#b11226]">{item.year}</p>

            <div>
              <h2 className="font-serif text-4xl font-medium">
                {item.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#5f5f5f]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}