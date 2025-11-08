"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import HeroBanner from "@/components/84thStreetMural/HeroBanner";
import ArtistInfo from "@/components/84thStreetMural/ArtistInfo";

export default function EightyFourthStreetMural() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <h1 className="mobile-text-lg-medium text-[var(--color-content-primary)]">Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.</h1>
          <ArtistInfo />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <h1 className="web-text-lg-regular text-[var(--color-content-primary)]">
          Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.
          </h1>
          <ArtistInfo />
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <HeroBanner />
        <div className="flex flex-col mx-auto items-start justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <h1 className="web-text-lg-regular text-[var(--color-content-primary)]">Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.</h1>
          <ArtistInfo />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <HeroBanner />
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <h1 className="web-text-2xl-regular text-[var(--color-content-primary)]">Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.</h1>
        <ArtistInfo />
      </div>
    </div>
  );
}
