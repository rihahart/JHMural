"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import ourVisionData from "@/data/whatInspiresUs/ourVisionData";

export default function OurVision() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, description, subtitle } = ourVisionData;

  if (isMobile) {
    return (
      <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
        <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">{title}</h1>
        <p className="mobile-text-m-medium text-[var(--color-content-primary)]">{description}</p>
        <p className="mobile-text-m-black text-[var(--color-content-primary)]">{subtitle}</p>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex items-center align-stretch justify-center gap-[var(--spacing-6xl)]">
        <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)] w-1/2 ">{title}</h1>
        <div className="flex flex-col gap-[var(--spacing-m)] w-1/2">
          <p className="web-text-m-medium text-[var(--color-content-primary)]">{description}</p>
          <p className="web-text-m-black text-[var(--color-content-primary)]">{subtitle}</p>
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="flex items-center align-stretch justify-center max-w-[1400px] gap-[var(--spacing-8xl)]">
        <h1 className="hero-xs text-[var(--color-content-primary)] w-1/2">{title}</h1>
        <div className="flex flex-col gap-[var(--spacing-m)] w-1/2">
          <p className="web-text-xl-medium text-[var(--color-content-primary)]">{description}</p>
          <p className="web-text-xl-black text-[var(--color-content-primary)]">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center align-stretch items-center max-w-[1600px] gap-[var(--spacing-8xl)]">
      <h1 className="hero-s text-[var(--color-content-primary)] w-1/2">{title}</h1>
      <div className="flex flex-col gap-[var(--spacing-m)] w-1/2">
        <p className="web-text-2xl-medium text-[var(--color-content-primary)]">{description}</p>
        <p className="web-text-2xl-black text-[var(--color-content-primary)]">{subtitle}</p>
      </div>
    </div>
  );
}

