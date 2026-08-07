"use client";

import React from "react";
import useSWR from "swr";
import { apiUrl } from "@/app/_utilities/api";
import ExhibitionBox from "./ExhibitionBox";

interface RecommendedExhibition {
  id: number;
  title: string;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  image_url: string | null;
  url: string | null;
  recommended: boolean;
}

interface Exhibition {
  id: number;
  title: string;
  location: string;
  startTime: string;
  url?: string;
  image?: string;
  recommended: boolean;
}

function parseDate(value: string): Date {
  return new Date(`${value}T00:00:00`);
}

function formatDate(value: string): string {
  return parseDate(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateRange(startDate: string | null, endDate: string | null): string {
  if (startDate && endDate) {
    if (startDate === endDate) return formatDate(startDate);
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
  if (startDate) return `From ${formatDate(startDate)}`;
  if (endDate) return `Through ${formatDate(endDate)}`;
  return "Dates to be announced";
}

async function recommendationsFetcher(url: string): Promise<Exhibition[]> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch recommendations");

  const recommendations: RecommendedExhibition[] = await response.json();
  return recommendations.map((item) => ({
    id: item.id,
    title: item.title,
    location: item.location ?? "Location to be announced",
    startTime: formatDateRange(item.start_date, item.end_date),
    url: item.url ?? undefined,
    image: item.image_url ?? undefined,
    recommended: item.recommended,
  }));
}

interface ExhibitionsSectionProps {
  limit?: number;
}

export default function ExhibitionsSection({ limit }: ExhibitionsSectionProps = {}) {
  const { data: exhibitions, error, isLoading, mutate } = useSWR<Exhibition[]>(
    apiUrl("/recommendations"),
    recommendationsFetcher,
    { revalidateOnFocus: false },
  );

  if (isLoading) {
    return (
      <div className="flex w-full items-center justify-center py-12">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900" />
          <p className="text-gray-600">Loading gallery picks...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full items-center justify-center py-12">
        <div className="text-center text-red-600">
          <p>Unable to load gallery picks at this time.</p>
          <button
            type="button"
            onClick={() => mutate()}
            className="mt-4 rounded bg-gray-900 px-4 py-2 text-white transition hover:bg-gray-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!exhibitions?.length) {
    return (
      <div className="flex w-full items-center justify-center py-12">
        <p className="text-gray-600">No gallery picks are available right now.</p>
      </div>
    );
  }

  const visible = typeof limit === "number" ? exhibitions.slice(0, limit) : exhibitions;

  return (
    <div className="grid w-full max-w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)]">
      {visible.map((exhibition, index) => (
        <ExhibitionBox key={exhibition.id} exhibition={exhibition} index={index} />
      ))}
    </div>
  );
}
