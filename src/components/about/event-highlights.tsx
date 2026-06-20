export function EventHighlights() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#b11226]">
          Event Highlights
        </p>

        <h2 className="max-w-3xl font-serif text-6xl font-medium leading-none tracking-[-0.045em]">
          Moments from the IDEA community.
        </h2>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="aspect-[4/3] border border-[#d8d1c5] bg-[#e8ddd4]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}