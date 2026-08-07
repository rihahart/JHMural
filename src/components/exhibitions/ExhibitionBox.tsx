"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  startTime: string;
  url?: string;
  image?: string;
  recommended?: boolean;
}

interface ExhibitionBoxProps {
  exhibition: Exhibition;
  /** Position in the list — drives the rotating pastel background. */
  index?: number;
}

// Cards alternate through the brand pastels, matching the Figma design.
const BACKGROUNDS = [
  "var(--color-purple-300)",
  "var(--color-yellow-200)",
  "var(--color-red-100)",
];

export default function ExhibitionBox({ exhibition, index = 0 }: ExhibitionBoxProps) {
  return (
    // Vertical card (Figma "Card"): photo on top, colored text panel beneath.
    <div className="flex flex-col w-full min-w-0 h-full">
      {exhibition.image && (
        <div className="relative w-full h-[200px] md:h-[250px] shrink-0 overflow-hidden">
          <Image
            src={exhibition.image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <div
        className="flex flex-col flex-1 gap-[var(--spacing-lg)] p-[var(--spacing-lg)] md:p-[var(--spacing-xl)] min-w-0"
        style={{ backgroundColor: BACKGROUNDS[index % BACKGROUNDS.length] }}
      >
        <h3 className="mobile-heading-2xl-bold md:web-heading-lg-bold text-[var(--color-content-primary)] min-w-0">
          {exhibition.title}
        </h3>

        <div className="flex flex-col gap-[var(--spacing-2xs)]">
          <p className="mobile-text-m-medium md:web-text-m-medium text-[var(--color-content-primary)] break-words">
            {exhibition.startTime}
          </p>
          <p className="mobile-text-m-medium md:web-text-m-medium text-[var(--color-content-primary)] break-words">
            {exhibition.location}
          </p>
        </div>

        {exhibition.url && (
          <BorderlessButton
            variant="primary"
            size="small"
            href={exhibition.url}
            target="_blank"
            rel="noopener noreferrer"
            trailingIcon="/arrow-right.svg"
            className="font-base w-fit mt-auto"
          >
            Visit exhibition page
          </BorderlessButton>
        )}
      </div>
    </div>
  );
}
