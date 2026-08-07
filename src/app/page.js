"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useIsMobile from "@/app/_utilities/useIsMobile";
import useFontsReady from "@/app/_utilities/useFontsReady";
import OurMissionCard from "@/components/home/OurMissionCard";
import RooseveltAveProjectCard from "@/components/home/RooseveltAveProjectCard";
import HomeFeatureCards from "@/components/home/HomeFeatureCards";
import IndoorGalleryPicks from "@/components/exhibitions/IndoorGalleryPicks";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

// Mission row: "Our Mission" card (left) + "Roosevelt Ave Project" card (right).
// Static (no props/state), so it's defined once at module scope.
const missionRow = (
  <div className="w-full flex flex-col xl:flex-row items-stretch gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-10xl)] min-w-0">
    <div className="w-full xl:flex-1 min-w-0 flex">
      <OurMissionCard />
    </div>
    <div className="w-full xl:flex-1 min-w-0 flex">
      <RooseveltAveProjectCard />
    </div>
  </div>
);

export default function Home() {
  const { isMobile, isReady } = useIsMobile();
  const fontsReady = useFontsReady([
    "1em cubano",
    "1em cubano-sharp",
    "1em acumin-pro-condensed",
  ]);

  if (!isReady || !fontsReady) {
    return (
      <div
        className="w-full min-h-screen bg-[var(--color-background-brand)]"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="w-full min-h-screen">
      {isMobile ? <HeroMobile /> : <Hero />}

      <MobileOnly>
        <div className="flex flex-col items-center px-[var(--spacing-xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-6xl)] justify-center">
          <DecorativeDivider />
          {missionRow}
          <DecorativeDivider />
          <HomeFeatureCards />
          <DecorativeDivider />
          <IndoorGalleryPicks />
        </div>
      </MobileOnly>

      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center px-[var(--spacing-2xl)] py-[var(--spacing-4xl)] lg:px-[var(--spacing-6xl)] lg:py-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
          {missionRow}
          <DecorativeDivider />
          <HomeFeatureCards />
          <DecorativeDivider />
          <IndoorGalleryPicks />
        </div>
      </DesktopOnly>
    </div>
  );
}
