import { MissionVision } from "@/components/about/mission-vision";
import { FounderStory } from "@/components/about/founder-story";
import { HistoryTimeline } from "@/components/about/history-timeline";
import { EventHighlights } from "@/components/about/event-highlights";

export default function AboutPage() {
  return (
    <main className="bg-[#f4f1eb] text-[#111111]">
      <section className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-7xl border-b border-[#d8d1c5] pb-20">
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-[#b11226]">
            About IDEA
          </p>

          <h1 className="max-w-5xl font-serif text-7xl font-medium leading-[0.9] tracking-[-0.055em] md:text-8xl">
            A platform for ideas, people and possibility.
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-[#5f5f5f]">
            IDEA brings together founders, mentors, investors, creators and
            business leaders through curated events, meaningful conversations
            and shared opportunities.
          </p>
        </div>
      </section>

      <MissionVision />
      <FounderStory />
      <HistoryTimeline />
      <EventHighlights />
    </main>
  );
}