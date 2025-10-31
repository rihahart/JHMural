"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useMobileDetection from "./_utilities/useMobileDetection";
import MissionStatement from "@/components/home/MissionStatement";
import MissionStatementMobile from "@/components/home/MissionStatementMobile";
import ExhibitionsSection from "@/components/exhibitions/ExhibitionsSection";
import Image from "next/image";

export default function Home() {
  const { isMobile, isTablet } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <MissionStatementMobile />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <MissionStatementMobile />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <Hero />
      <div className="flex flex-col items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <MissionStatement />
        <hr></hr>
        <div className="w-full flex flex-col items-center gap-12">
          <h1 className="hero-lg text-[var(--color-content-primary)] py-8 px-4">
            What's On: NYC Art Exhibitions
          </h1>
          <ExhibitionsSection />
        </div>
      </div>
    </div>
  );
}
