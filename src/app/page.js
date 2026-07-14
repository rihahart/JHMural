"use client";

import React from "react";
import Image from "next/image";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useIsMobile from "@/app/_utilities/useIsMobile";
import useFontsReady from "@/app/_utilities/useFontsReady";
import MissionStatement from "@/components/home/MissionStatement";
import MissionStatementMobile from "@/components/home/MissionStatementMobile";
// import ExhibitionsSection from "@/components/exhibitions/ExhibitionsSection";
// import WelcomeToJacksonHeights from "@/components/home/WelcomeToJacksonHeights";
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
    return (
      <div
        className="w-full min-h-screen bg-[var(--color-background-brand)]"
        aria-hidden="true"
      />
    );
  }

  const ourValues = (
    <div className="flex flex-col gap-[var(--spacing-xl)] w-full min-w-0 xl:w-[560px] xl:h-[672px] xl:p-[24px] xl:gap-0 xl:justify-between">
      <div className="relative w-full h-[215px] md:h-[350px] lg:h-[440px] xl:h-auto xl:aspect-[4/3] min-h-0 overflow-hidden">
        <Image
          src="/Homepage/KidsJoyfullyDrawing.png"
          alt="Kids joyfully drawing together"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 560px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-[var(--spacing-m)]">
        <h2
          className="mobile-heading-5xl-bold md:web-heading-5xl-bold xl:hero-s text-[var(--color-content-primary)]"
          style={{ fontFamily: "var(--font-family-display)" }}
        >
          Our values
        </h2>
        <p className="mobile-text-2xl-semibold md:web-text-2xl-semibold xl:web-text-3xl-semibold text-[var(--color-content-primary)]">
          We believe art should be accessible to everyone. Through our murals,
          we bring art to communities where access is limited.
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full min-h-screen">
      {isMobile ? <HeroMobile /> : <Hero />}
      <MobileOnly>
        <div className="flex flex-col items-center px-[var(--spacing-xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col w-full gap-[var(--spacing-10xl)]">
            <div className="flex flex-col w-full gap-[var(--spacing-3xl)]">
              <DecorativeDivider />
              <MissionStatementMobile />
            </div>
            <DecorativeDivider />
          </div>
          {/* <WelcomeToJacksonHeights /> */}
          <div className="flex flex-col w-full gap-[var(--spacing-8xl)]">
            <WhatInspiresUs />
            {ourValues}
          </div>
          {/* <div className="flex flex-col gap-[var(--spacing-xl)] justify-center items-start w-full">
            <h1 className="hero-xs text-[var(--color-content-primary)]">
              What&apos;s On: NYC Art Exhibitions
            </h1>
            <ExhibitionsSection />
          </div> */}
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center px-[var(--spacing-2xl)] py-[var(--spacing-4xl)] lg:px-[var(--spacing-4xl)] lg:py-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
          <div className="flex flex-col w-full gap-[160px]">
            <div className="flex flex-col w-full gap-[var(--spacing-12xl)]">
              <DecorativeDivider />
              <MissionStatement />
            </div>
            <DecorativeDivider />
          </div>
          <div className="w-full flex flex-col xl:flex-row max-w-[1600px] mx-auto items-stretch xl:items-start justify-start gap-[var(--spacing-8xl)]">
            <div className="w-full xl:flex-1 flex flex-col gap-[var(--spacing-8xl)] min-w-0">
              {/* <WelcomeToJacksonHeights /> */}
              <WhatInspiresUs />
            </div>
            <div className="w-full xl:flex-1 min-w-0 xl:flex xl:justify-center xl:items-center">{ourValues}</div>
            {/* <div className="flex-1 flex flex-col gap-[var(--spacing-6xl)] justify-center items-center py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] min-w-0">
              <h1 className="hero-lg text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div> */}
          </div>
        </div>
      </DesktopOnly>
    </div>
  );
}
