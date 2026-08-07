"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import homeFeatureCardsData from "@/data/homeFeatureCardsData";

// 3-up feature row on the homepage 
export default function HomeFeatureCards() {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-[var(--spacing-2xl)] xl:gap-0 xl:divide-x-4 xl:divide-[var(--color-content-secondary)]">
      {homeFeatureCardsData.map((card) => (
        <div
          key={card.id}
          className="flex-1 min-w-0 flex flex-col gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] xl:px-[var(--spacing-2xl)] xl:first:pl-0 xl:last:pr-0"
        >
          <div className="relative w-full h-[240px] md:h-[340px] overflow-hidden">
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <h3 className="mobile-heading-4xl-bold md:web-heading-2xl-bold text-[var(--color-content-primary)]">
            {card.title}
          </h3>

          <p className="mobile-text-lg-semibold md:web-text-lg-regular text-[var(--color-content-primary)] flex-1">
            {card.description}
          </p>

          <BorderlessButton
            variant="primary"
            size="large"
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noopener noreferrer" : undefined}
            trailingIcon="/arrow-right.svg"
            className="font-base w-fit !font-semibold"
          >
            Learn more
          </BorderlessButton>
        </div>
      ))}
    </div>
  );
}
