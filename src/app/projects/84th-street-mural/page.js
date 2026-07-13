"use client";

import React from "react";
import HeroBanner from "@/components/84thStreetMural/HeroBanner";
import ArtistInfo from "@/components/84thStreetMural/ArtistInfo";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

export default function EightyFourthStreetMural() {
  return (
    <div className="w-full min-h-screen">
      <HeroBanner />
      <MobileOnly>
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <h1 className="mobile-text-lg-medium text-[var(--color-content-primary)]">Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.</h1>
          <ArtistInfo />
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <h1 className="web-text-2xl-regular text-[var(--color-content-primary)]">Jackson Heights is a melting pot where 137+ languages and cultures are represented. We coexist peacefully together. We are a strong community because of this tolerance and we are a role model for the world in this regard.  We want to celebrate this! The mural reflects the heart of Jackson Heights– where diverse cultures, backgrounds and experiences intersect and support each other. It is a joyful piece that invites both residents and visitors to stop and admire it, photograph it, and feel hopeful.  This mural was planned with extensive input from members of the community who completed a survey.</h1>
          <ArtistInfo />
        </div>
      </DesktopOnly>
    </div>
  );
}
