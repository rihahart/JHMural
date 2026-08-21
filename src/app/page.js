"use client";

import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useFontsReady from "@/app/_utilities/useFontsReady";
import OurMissionCard from "@/components/home/OurMissionCard";
import RooseveltAveProjectCard from "@/components/home/RooseveltAveProjectCard";
import HomeFeatureCards from "@/components/home/HomeFeatureCards";
import IndoorGalleryPicks from "@/components/exhibitions/IndoorGalleryPicks";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import useWindowWidth from "@/app/_utilities/useWindowWidth";

export default function Home() {
  const width = useWindowWidth();
  const fontsReady = useFontsReady([
    "1em cubano",
    "1em cubano-sharp",
    "1em acumin-pro-condensed",
  ]);

  if (width === 0 || !fontsReady) {
    return (
      <div
        className="w-full min-h-dvh bg-[var(--color-background-brand)]"
        aria-hidden="true"
      />
    );
  }

  const missionRowStacked = (
    <div className="w-full flex flex-col items-stretch gap-[var(--spacing-10xl)] min-w-0">
      <div className="w-full min-w-0 flex">
        <OurMissionCard />
      </div>
      <div className="w-full min-w-0 flex">
        <RooseveltAveProjectCard />
      </div>
    </div>
  );

  const missionRowStackedRow = (
    <div className="w-full flex flex-col items-stretch gap-[var(--spacing-10xl)] min-w-0">
      <div className="w-full min-w-0 flex">
        <OurMissionCard />
      </div>
      <div className="w-full min-w-0 flex">
        <RooseveltAveProjectCard layout="row"/>
      </div>
    </div>
  );


  const missionRowSideBySide = (
    <div className="w-full flex flex-row items-stretch justify-center gap-[var(--spacing-10xl)] min-w-0">
      <div className="w-full flex-1 min-w-0 flex">
        <OurMissionCard />
      </div>
      <div className="w-full flex-1 min-w-0 flex">
        <RooseveltAveProjectCard />
      </div>
    </div>
  );

    const missionRowSideBySideLarge = (
    <div className="w-full flex flex-row items-stretch justify-center px-[var(--spacing-4xl)] gap-[var(--spacing-12xl)] min-w-0">
      <div className="w-[60%] min-w-0 flex">
        <OurMissionCard />
      </div>
      <div className="max-w-[1000px] min-w-0 flex">
        <RooseveltAveProjectCard />
      </div>
    </div>
  );

  if (width <= 768) {
    return (
      <div className="w-full min-h-dvh">
        <HeroMobile />
        <div className="flex flex-col gap-[var(--spacing-5xl)] items-center px-[var(--spacing-xl)] py-[var(--spacing-3xl)] justify-center">
          {missionRowStacked}
          <DecorativeDivider />
          <HomeFeatureCards />
          <DecorativeDivider />
          <IndoorGalleryPicks />
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-dvh">
        <Hero />
        <div className="flex flex-col gap-[var(--spacing-5xl)] items-center px-[var(--spacing-xl)] pt-[var(--spacing-5xl)] pb-[var(--spacing-12xl)] justify-center">
          {missionRowStackedRow}
          <DecorativeDivider />
          <HomeFeatureCards />
          <DecorativeDivider />
          <IndoorGalleryPicks />
        </div>
      </div>
    );
  }

  if (width <= 1400) {
    return (
      <div className="w-full min-h-dvh">
        <Hero />
        <div className="flex flex-col mx-auto items-center justify-center px-[var(--spacing-3xl)] py-[var(--spacing-10xl)] gap-[var(--spacing-12xl)]">
          {missionRowSideBySide}
          <DecorativeDivider />
          <HomeFeatureCards />
          <DecorativeDivider />
          <IndoorGalleryPicks />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-dvh">
      <Hero />
      <div className="flex flex-col max-w-[2500px] mx-auto items-center justify-center px-[var(--spacing-6xl)] py-[var(--spacing-12xl)] mb-[var(--spacing-12xl)] gap-[var(--spacing-12xl)]">
        {missionRowSideBySideLarge}
        <DecorativeDivider />
        <HomeFeatureCards />
        <DecorativeDivider />
        <IndoorGalleryPicks />
      </div>
    </div>
  );
}
