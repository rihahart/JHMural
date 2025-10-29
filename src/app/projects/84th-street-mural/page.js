"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import HeroBanner from "@/components/84thStreetMural/HeroBanner";
import ArtistInfo from "@/components/84thStreetMural/ArtistInfo";

export default function EightyFourthStreetMural() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <ArtistInfo />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <ArtistInfo />
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col mx-auto items-start justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <ArtistInfo />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <HeroBanner />
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <ArtistInfo />
      </div>
    </div>
  );
}
