"use client";

import React from "react";
import useSWR from "swr";
import ExhibitionBox from "./ExhibitionBox";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  url: string;
}

interface WhitneyItem {
  id: string;
  attributes: {
    start_time: string;
    end_time?: string;
    title: string;
    url: string;
  };
}

type SortableExhibition = Exhibition & {
  originalStartTime: string;
  originalEndTime: string | null;
};

function formatDayLabel(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
}

function formatDateLabel(date: Date) {
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  return `${month} ${date.getDate()}`;
}

function formatDateRange(startTime: string, endTime?: string) {
  const startDate = new Date(startTime);
  const startFormatted = `${startDate.toLocaleDateString("en-US", { month: "short" })} ${startDate.getDate()}`;

  if (!endTime) return startFormatted;

  const endDate = new Date(endTime);
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "Ongoing";

  const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
  if (startDateOnly.getTime() === endDateOnly.getTime()) return startFormatted;

  const endFormatted = `${endDate.toLocaleDateString("en-US", { month: "short" })} ${endDate.getDate()}`;
  return `${startFormatted} - ${endFormatted}`;
}

function toDateOnly(value: string) {
  const d = new Date(value);
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

// Pure transform: raw Whitney API payload -> the (max 5) exhibitions we display.
function formatExhibitions(items: WhitneyItem[]): Exhibition[] {
  const formatted: SortableExhibition[] = items.map((item) => {
    const startDate = new Date(item.attributes.start_time);
    return {
      id: item.id,
      title: item.attributes.title,
      location: "Whitney Museum of American Art",
      dayOfWeek: formatDayLabel(startDate),
      date: formatDateLabel(startDate),
      startTime: formatDateRange(item.attributes.start_time, item.attributes.end_time),
      url: `https://whitney.org${item.attributes.url}`,
      originalStartTime: item.attributes.start_time,
      originalEndTime: item.attributes.end_time || null,
    };
  });

  const nowDateOnly = toDateOnly(new Date().toISOString());

  const upcoming = formatted
    .filter((item) => {
      const end = item.originalEndTime ? toDateOnly(item.originalEndTime) : toDateOnly(item.originalStartTime);
      return end >= nowDateOnly;
    })
    .sort((a, b) => {
      const endA = new Date(a.originalEndTime ?? a.originalStartTime).getTime();
      const endB = new Date(b.originalEndTime ?? b.originalStartTime).getTime();
      return endA - endB;
    });

  const toShow =
    upcoming.length > 0
      ? upcoming
      : [...formatted].sort((a, b) => {
          const endA = new Date(a.originalEndTime ?? a.originalStartTime).getTime();
          const endB = new Date(b.originalEndTime ?? b.originalStartTime).getTime();
          return endB - endA;
        });

  return toShow.slice(0, 5).map(({ originalStartTime: _s, originalEndTime: _e, ...rest }) => rest);
}

async function exhibitionsFetcher(url: string): Promise<Exhibition[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch exhibitions");
  }
  const responseData = await response.json();
  return formatExhibitions(responseData.data ?? []);
}

export default function ExhibitionsSection() {
  const { data: exhibitions, error, isLoading, mutate } = useSWR<Exhibition[]>(
    "/api/whitney-exhibitions",
    exhibitionsFetcher,
    { revalidateOnFocus: false }
  );

  if (isLoading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading exhibitions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="text-center text-red-600">
          <p>Unable to load exhibitions at this time.</p>
          <button
            type="button"
            onClick={() => mutate()}
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!exhibitions || exhibitions.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <p className="text-gray-600">No exhibitions available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8 max-w-full">
      {exhibitions.map((exhibition) => (
        <ExhibitionBox key={exhibition.id} exhibition={exhibition} />
      ))}
    </div>
  );
}
