"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import HeroMobile from "@/components/home/HeroMobile";
import useMobileDetection from "./_utilities/useMobileDetection";
import MissionStatement from "@/components/home/MissionStatement";
import MissionStatementMobile from "@/components/home/MissionStatementMobile";

export default function Home() {
  const { isMobile, isTablet, isDesktop, screenSize } = useMobileDetection();
 
  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
     <div className="flex flex-col items-center py-[var(--spacing-4xl)] px-[var(--spacing-xl)] gap-[var(--spacing-4xl)] justify-center">
      <MissionStatementMobile />
     </div>
      </div>
    );
  }
  
  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <HeroMobile />
        <div className="flex flex-col items-center py-[var(--spacing-4xl)] px-[var(--spacing-xl)] gap-[var(--spacing-4xl)] justify-center">
          <MissionStatementMobile />
        </div>
        
    
      </div>
    );
  }
  
  return (
    <div className="w-full min-h-screen">
      <Hero />
    <div className="flex flex-col items-center justify-center py-[var(--spacing-7xl)] px-[var(--spacing-4xl)]">
      <MissionStatement />

    </div>

  
    </div>
  );
}

