"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import HeroBanner from "@/components/getInvolved/HeroBanner";

export default function GetInvolved() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  // Mobile
  if (isMobile) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <HeroBanner />
        <div className="flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]">
          {/* Content coming soon */}
        </div>
      </div>
    );
  }

  // Tablet
  if (isTablet) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <HeroBanner />
        <div className="flex flex-col px-[var(--spacing-4xl)] py-[var(--spacing-6xl)] gap-[var(--spacing-6xl)]">
          {/* Content coming soon */}
        </div>
      </div>
    );
  }

  // Desktop 1440px
  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
        <HeroBanner />
        <div className="flex flex-col max-w-[1400px] mx-auto px-[var(--spacing-5xl)] py-[var(--spacing-7xl)] gap-[var(--spacing-7xl)]">
          {/* Content coming soon */}
        </div>
      </div>
    );
  }

  // Desktop 1440px+
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-primary)]">
      <HeroBanner />
      <div className="flex flex-col max-w-[1600px] mx-auto px-[var(--spacing-6xl)] py-[var(--spacing-8xl)] gap-[var(--spacing-8xl)]">
        {/* Content coming soon */}
      </div>
    </div>
  );
}
