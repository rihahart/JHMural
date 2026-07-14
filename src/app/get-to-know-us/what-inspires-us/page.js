"use client";

import React from "react";
import Image from "next/image";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import MuralImpact from "@/components/getToKnowUs/whatInspiresUs/MuralImpact";
import OurVision from "@/components/getToKnowUs/whatInspiresUs/OurVision";
import { DesktopOnly, MobileOnly } from "@/components/responsive/Breakpoint";

export default function WhatInspiresUs() {
  return (
    <div className="w-full min-h-screen">
      <MobileOnly>
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-xs text-[var(--color-content-primary)]">
              What inspires us
            </h1>
            <p className="mobile-text-xl-semibold text-[var(--color-content-primary)]">
              JH Mural Project was born out of Jackson Heights, the most diverse
              community on earth. Here, every blank wall is an opportunity to
              change the world. That's why we picked up our brushes. This is our
              chance to add color to the concrete. To turn blight into beauty.
              Apathy into pride. And turn walls into windows that show the world
              what unity looks like. We paint because we believe in this place.
              Because our children deserve a more colorful future. Because art
              reminds us who we are and who we can be. We want to carry this
              diversity, unity, and love far beyond these walls, to all of
              Queens, and all of New York.
            </p>
          </div>
          <div className="relative w-full overflow-hidden h-[250px]">
            <Image
              src="/WhatInspiresUs.jpg"
              alt="MuralOpeningPic"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </MobileOnly>
      <DesktopOnly>
        <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="hero-2xl text-[var(--color-content-primary)]">
              What inspires us
            </h1>
            <p className="web-text-2xl-semibold text-[var(--color-content-primary)]">
              Founded in Jackson Heights, Queens — the most culturally diverse
              neighborhood in the world — JH Mural Project is a nonprofit that
              partners with artists to bring murals to neighborhoods that have
              been overlooked. We support artists, bring communities together,
              and create murals that celebrate the people and places they
              represent.
            </p>
          </div>
          <div className="relative w-full overflow-hidden h-[600px]">
            <Image
              src="/WhatInspiresUs.jpg"
              alt="MuralOpeningPic"
              fill
              sizes="(max-width: 1600px) 100vw, 1600px"
              className="object-cover object-center"
            />
          </div>
          <OurVision />
          <DecorativeDivider />
          <MuralImpact />
        </div>
      </DesktopOnly>
    </div>
  );
}
