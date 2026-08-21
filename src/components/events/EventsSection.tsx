"use client";

import { useMemo, useState } from "react";
import useSWR from "swr";
import { apiUrl } from "@/app/_utilities/api";
import useWindowWidth from "@/app/_utilities/useWindowWidth";
import { getMonthOptions, exhibitionMonthKey } from "@/app/_utilities/eventDates";
import EventCard from "./EventCard";
import MonthFilter from "./MonthFilter";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

interface Exhibition {
  id: number;
  title: string;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  image_url: string | null;
  url: string | null;
}

async function exhibitionsFetcher(url: string): Promise<Exhibition[]> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch exhibitions");
  return response.json();
}

export default function EventsSection() {
  const width = useWindowWidth();
  const [monthIndex, setMonthIndex] = useState(0);

  const monthOptions = useMemo(() => getMonthOptions(), []);
  const selectedMonth = monthOptions[monthIndex];

  const { data: exhibitions, error, isLoading, mutate } = useSWR<Exhibition[]>(
    apiUrl("/exhibitions"),
    exhibitionsFetcher,
    { revalidateOnFocus: false },
  );

  const eventsForMonth = useMemo(() => {
    if (!exhibitions) return [];
    return exhibitions
      .filter((e) => exhibitionMonthKey(e) === selectedMonth.key)
      .sort((a, b) => (a.start_date ?? "").localeCompare(b.start_date ?? ""));
  }, [exhibitions, selectedMonth]);

  // Column count is computed in JS (not Tailwind responsive variants) to match
  // the rest of the site's breakpoint pattern — see DESIGN_REFERENCE.md.
  const columns = width === 0 ? 4 : width <= 768 ? 2 : width <= 1200 ? 3 : 4;
  const gridColsClass =
    columns === 2 ? "grid-cols-2" : columns === 3 ? "grid-cols-3" : "grid-cols-4";

  const isLastMonth = monthIndex === monthOptions.length - 1;

  return (
    <div className="flex flex-col w-full gap-[var(--spacing-2xl)] md:gap-[var(--spacing-4xl)] min-w-0">
      <MonthFilter
        options={monthOptions}
        selectedKey={selectedMonth.key}
        onSelect={(key) => {
          const index = monthOptions.findIndex((o) => o.key === key);
          if (index !== -1) setMonthIndex(index);
        }}
      />

      {isLoading && (
        <div className="flex w-full items-center justify-center py-12">
          <div className="text-center">
            <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900" />
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex w-full items-center justify-center py-12">
          <div className="text-center text-red-600">
            <p>Unable to load events at this time.</p>
            <button
              type="button"
              onClick={() => mutate()}
              className="mt-4 rounded bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {!isLoading && !error && eventsForMonth.length === 0 && (
        <div className="flex w-full items-center justify-center py-12">
          <p className="mobile-text-lg-semibold text-[var(--color-content-secondary)]">
            No events scheduled for {selectedMonth.label}.
          </p>
        </div>
      )}

      {!isLoading && !error && eventsForMonth.length > 0 && (
        <div className={`grid ${gridColsClass} gap-x-[var(--spacing-xl)] gap-y-[var(--spacing-8xl)]`}>
          {eventsForMonth.map((exhibition, index) => (
            <EventCard
              key={exhibition.id}
              exhibition={exhibition}
              showDivider={index % columns !== 0}
            />
          ))}
        </div>
      )}

      <div className="flex justify-end">
        <BorderlessButton
          variant="primary"
          size="small"
          disabled={isLastMonth}
          onClick={() => setMonthIndex((i) => Math.min(monthOptions.length - 1, i + 1))}
          trailingIcon="/arrow-right.svg"
          className="w-fit"
        >
          See next month
        </BorderlessButton>
      </div>
    </div>
  );
}
