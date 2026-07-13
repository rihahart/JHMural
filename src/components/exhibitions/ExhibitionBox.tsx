"use client";

import React from "react";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  url: string;
}

interface ExhibitionBoxProps {
  exhibition: Exhibition;
}

export default function ExhibitionBox({ exhibition }: ExhibitionBoxProps) {
  return (
    <div className="w-full flex flex-col md:flex-row border items-center border-[var(--color-border-primary)] min-w-0">
      <div className="flex flex-col px-[var(--spacing-m)] md:px-[var(--spacing-xl)] py-[var(--spacing-m)] gap-[var(--spacing-m)] md:gap-[var(--spacing-lg)] justify-center w-full min-w-0">
          <h3 className="mobile-heading-2xl-bold md:web-heading-lg-bold text-[var(--color-content-primary)] truncate w-full">
            {exhibition.title}
          </h3>
        <div className="flex flex-col gap-[var(--spacing-xs)]">
        <p className="mobile-text-m-medium md:web-text-lg-medium text-[var(--color-content-primary)] break-words">
          {exhibition.startTime}
        </p>
        <p className="mobile-text-m-medium md:web-text-lg-medium text-[var(--color-content-primary)] break-words">
          {exhibition.location}
          </p>
        </div>
      </div>
    </div>
  );
}
