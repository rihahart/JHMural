"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useIsMobile from "@/app/_utilities/useIsMobile";
import useFontsReady from "@/app/_utilities/useFontsReady";
import MissionStatement from "@/components/home/MissionStatement";
import MissionStatementMobile from "@/components/home/MissionStatementMobile";
import ExhibitionsSection from "@/components/exhibitions/ExhibitionsSection";
import WelcomeToJacksonHeights from "@/components/home/WelcomeToJacksonHeights";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import WhatInspiresUs from "@/components/home/WhatInspiresUs";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

export default function Home() {
  const { isMobile, isReady } = useIsMobile();
  const fontsReady = useFontsReady([
    "1em cubano",
    "1em cubano-sharp",
    "1em acumin-pro-condensed",
  ]);

  if (!isReady || !fontsReady) {
    return <div className="w-full min-h-screen bg-[var(--color-background-brand)]" aria-hidden="true" />;
  }

  return (
    <div className="w-full min-h-screen">
      {isMobile ? <HeroMobile /> : <Hero />}
      <MobileOnly>
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col w-full gap-[var(--spacing-10xl)]">
            <div className="flex flex-col w-full gap-[var(--spacing-3xl)]">
              <DecorativeDivider />
              <MissionStatementMobile />
            </div>
            <DecorativeDivider />
          </div>
          <WelcomeToJacksonHeights />
          <WhatInspiresUs />
          <div className="flex flex-col gap-[var(--spacing-xl)] justify-center items-start w-full">
            <h1 className="hero-xs text-[var(--color-content-primary)]">
              What&apos;s On: NYC Art Exhibitions
            </h1>
            <ExhibitionsSection />
          </div>
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
          <div className="flex flex-col w-full gap-[160px]">
            <div className="flex flex-col w-full gap-[var(--spacing-12xl)]">
              <DecorativeDivider />
              <MissionStatement />
            </div>
            <DecorativeDivider />
          </div>
          <div className="w-full flex max-w-[1600px] mx-auto items-start justify-start gap-[var(--spacing-8xl)]">
            <div className="flex-1 flex flex-col gap-[var(--spacing-8xl)] min-w-0">
              <WelcomeToJacksonHeights />
              <WhatInspiresUs />
            </div>
            <div className="flex-1 flex flex-col gap-[var(--spacing-6xl)] justify-center items-center py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] min-w-0">
              <h1 className="hero-lg text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div>
          </div>
        </div>
      </DesktopOnly>
    </div>
  );
}
