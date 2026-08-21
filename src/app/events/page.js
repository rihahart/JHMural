"use client";

import EventsSection from "@/components/events/EventsSection";

export default function EventsPage() {
  return (
    <div className="w-full min-h-dvh">
      <div className="flex flex-col mx-auto max-w-[1600px] items-stretch justify-center px-[var(--spacing-xl)] py-[var(--spacing-6xl)] gap-[var(--spacing-6xl)]">
        <EventsSection />
      </div>
    </div>
  );
}
