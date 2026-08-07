"use client";

import React from "react";
import ExhibitionsSection from "./ExhibitionsSection";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function IndoorGalleryPicks() {
  return (
    <div className="flex flex-col w-full gap-[var(--spacing-2xl)] md:gap-[var(--spacing-4xl)] min-w-0">
      <div className="flex flex-col gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
        <h2 className="mobile-heading-5xl-bold md:hero-lg text-[var(--color-content-primary)]">
          Our Indoor Art Gallery Picks
        </h2>
        <p className="mobile-text-xl-semibold md:web-text-xl-regular text-[var(--color-content-primary)]">
          Go visit an indoor art exhibition. Roam the halls of museums, and train
          your imagination.
        </p>
      </div>

      <ExhibitionsSection limit={3} />

      <BorderlessButton
        variant="primary"
        size="large"
        href="https://whitney.org/exhibitions"
        target="_blank"
        rel="noopener noreferrer"
        trailingIcon="/arrow-right.svg"
        className="font-base w-fit self-end"
      >
        See all
      </BorderlessButton>
    </div>
  );
}
