"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useMobileDetection from "./_utilities/useMobileDetection";
import MissionStatement from "@/components/home/MissionStatement";
import MissionStatementMobile from "@/components/home/MissionStatementMobile";
import ExhibitionsSection from "@/components/exhibitions/ExhibitionsSection";
import WelcomeToJacksonHeights from "@/components/home/WelcomeToJacksonHeights";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import VolunteerWithUs from "@/components/home/VolunteerWithUs";

export default function Home() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-6xl)] justify-center">
          <MissionStatementMobile />
          <DecorativeDivider />
          <WelcomeToJacksonHeights />
          <VolunteerWithUs />
        <div className="flex flex-col gap-[var(--spacing-xl)] justify-center items-start w-full">
              <h1 className="hero-xs text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div>   
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
       
        <div className="flex flex-col items-center py-[var(--spacing-xl)] px-[var(--spacing-xl)] gap-[var(--spacing-8xl)] justify-center">
          <MissionStatementMobile />
          <DecorativeDivider />
          <WelcomeToJacksonHeights />
          <VolunteerWithUs />
            <div className="flex flex-col gap-[var(--spacing-4xl)] justify-center items-center py-[var(--spacing-xl)] px-[var(--spacing-xl)] w-fit">
              <h1 className="hero-xs text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div>
          </div>
        </div>
    
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <Hero />
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-10xl)]">
          <MissionStatement />
          <DecorativeDivider />
          <div className="w-full flex max-w-[1600px] mx-auto items-start justify-start gap-[var(--spacing-8xl)]">
  
            <div className="flex-1 flex flex-col gap-[var(--spacing-6xl)] min-w-0">
              <WelcomeToJacksonHeights />
              <VolunteerWithUs />
            </div>
            
            <div className="flex-1 flex flex-col gap-[var(--spacing-4xl)] justify-center items-center py-[var(--spacing-xl)] px-[var(--spacing-xl)] min-w-0">
              <h1 className="hero-s text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <Hero />
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
        <MissionStatement />
        <DecorativeDivider />
          <div className="w-full flex max-w-[1600px] mx-auto items-start justify-start gap-[var(--spacing-8xl)]">
            {/* Left side: Empty for now */}
            <div className="flex-1 flex flex-col gap-[var(--spacing-8xl)] min-w-0">
              <WelcomeToJacksonHeights />
              <VolunteerWithUs />
            </div>
            {/* Right side: Exhibitions Section */}
            <div className="flex-1 flex flex-col gap-[var(--spacing-6xl)] justify-center items-center py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] min-w-0">
              <h1 className="hero-lg text-[var(--color-content-primary)]">
                What&apos;s On: NYC Art Exhibitions
              </h1>
              <ExhibitionsSection />
            </div>
          </div>
      </div>
    </div>
  );
}
