import EventsSection from "@/components/events/EventsSection";

export const metadata = {
  title: "Events | JH Mural",
  description: "Explore exhibitions and events by month with JH Mural.",
};

export default function EventsPage() {
  return (
    <div className="w-full min-h-dvh">
      <div className="flex flex-col mx-auto max-w-[1600px] items-stretch justify-center px-[var(--spacing-xl)] py-[var(--spacing-6xl)] gap-[var(--spacing-6xl)]">
        <h1 className="sr-only">Events</h1>
        <EventsSection />
      </div>
    </div>
  );
}
