const team = [
  {
    name: "Founder Name",
    role: "Founder",
    bio: "Leads the vision, community and strategic direction of IDEA.",
  },
  {
    name: "Team Member",
    role: "Operations",
    bio: "Supports events, partnerships and community programming.",
  },
  {
    name: "Team Member",
    role: "Community",
    bio: "Builds relationships with founders, mentors and partners.",
  },
];

export function TeamGrid() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {team.map((person) => (
          <div
            key={person.name}
            className="border border-[#d8d1c5] bg-[#f7f4ee] p-8 transition hover:-translate-y-2"
          >
            <div className="mb-8 aspect-square bg-[#e8ddd4]" />
            <p className="text-xs uppercase tracking-[0.35em] text-[#b11226]">
              {person.role}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium">
              {person.name}
            </h2>
            <p className="mt-4 leading-7 text-[#5f5f5f]">{person.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}