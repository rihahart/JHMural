"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import OurStory from "@/components/getToKnowUs/whatInsipresUS/OurStory";

export default function WhatInspiresUs() {
  const { isMobile, isTablet } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 
          className="font-bold"
          style={{
            fontSize: 'clamp(48px, calc(48px + 56px * ((100vw - 768px) / 512px)), 104px)',
            fontFamily: 'var(--font-family-base)',
            lineHeight: 'var(--line-height-hero-heading)'
          }}
        >
          Our Story
        </h1>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col align-center self-stretch max-w-[1600px] mx-auto py-[var(--spacing-7xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-7xl)]">
        <h1 
          className="font-bold self-stretch"
          style={{
            fontSize: 'clamp(48px, calc(48px + 56px * ((100vw - 768px) / 512px)), 104px)',
            fontFamily: 'var(--font-family-base)',
            lineHeight: 'var(--line-height-hero-heading)'
          }}
        >
          Our Story
        </h1>
      </div>
    );
  }

  return (
    <div  className="flex flex-col align-center self-stretch max-w-[1600px] mx-auto py-[var(--spacing-7xl)] px-[var(--spacing-4xl)]">
     <OurStory />
    </div>
  );
}
