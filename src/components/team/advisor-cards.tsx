const advisors = [
  "Startup Strategy",
  "Investment",
  "Branding",
  "Technology",
  "Operations",
  "Community",
];

export function AdvisorCards() {
  return (
    <section className="bg-[#12100d] px-6 py-28 text-[#f4f1eb]">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#b11226]">
          Advisors
        </p>

        <h2 className="max-w-3xl font-serif text-6xl font-medium leading-none tracking-[-0.045em]">
          Guidance from people who have built before.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {advisors.map((advisor) => (
            <div
              key={advisor}
              className="border border-[#b11226]/30 bg-[#1b1814] p-8"
            >
              <h3 className="font-serif text-4xl font-medium">{advisor}</h3>
              <p className="mt-4 text-[#c8c0b6]">
                Advisory support for founders and teams in this area.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}