"use client";

import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import { dayOfMonth, formatEventDateRange } from "@/app/_utilities/eventDates";

interface EventExhibition {
  id: number;
  title: string;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  image_url: string | null;
  url: string | null;
}

interface EventCardProps {
  exhibition: EventExhibition;

  showDivider?: boolean;
}

export default function EventCard({ exhibition, showDivider = false }: EventCardProps) {
  const day = exhibition.start_date ? dayOfMonth(exhibition.start_date) : null;

  return (
    <div
      className={`flex flex-col w-full min-w-0 ${
        showDivider
          ? "border-l border-[var(--color-neutral-300)] pl-[var(--spacing-xl)]"
          : ""
      }`}
    >
      <span className="mobile-heading-4xl-bold text-[var(--color-content-primary)]">
        {day !== null ? day : "TBD"}
      </span>

      <div className="relative w-full h-[139px] mt-[var(--spacing-m)] overflow-hidden bg-[var(--color-neutral-300)]">
        {exhibition.image_url && (
          <Image
            src={exhibition.image_url}
            alt=""
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-[var(--spacing-m)] mt-[var(--spacing-xl)] flex-1">
        <h3
          className="web-heading-s-bold text-[var(--color-content-primary)] min-w-0"
          style={{ lineHeight: "30.847px" }}
        >
          {exhibition.title}
        </h3>

        <div className="flex flex-col gap-[var(--spacing-2xs)]">
          <p className="web-text-s-medium text-[var(--color-content-primary)] break-words">
            {formatEventDateRange(exhibition.start_date, exhibition.end_date)}
          </p>
          {exhibition.location && (
            <p className="web-text-s-medium text-[var(--color-content-primary)] break-words">
              {exhibition.location}
            </p>
          )}
        </div>

        {exhibition.url && (
          <BorderlessButton
            variant="primary"
            size="small"
            href={exhibition.url}
            target="_blank"
            rel="noopener noreferrer"
            trailingIcon="/arrow-right.svg"
            className="w-fit mt-auto"
          >
            Learn more
          </BorderlessButton>
        )}
      </div>
    </div>
  );
}
