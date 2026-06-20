import { AdvisorCards } from "@/components/team/advisor-cards";
import { TeamGrid } from "@/components/team/team-grid";

export default function TeamPage() {
  return (
    <main className="bg-[#f4f1eb] text-[#111111]">
      <section className="px-6 pb-20 pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#b11226]">
            Team
          </p>

          <h1 className="max-w-5xl font-serif text-7xl font-medium leading-[0.9] tracking-[-0.055em] md:text-8xl">
            The people behind the room.
          </h1>
        </div>
      </section>

      <TeamGrid />
      <AdvisorCards />
    </main>
  );
}