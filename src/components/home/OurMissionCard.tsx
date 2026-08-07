"use client";

import React from "react";
import Image from "next/image";
import Button from "../ButtonCollection/Button";

// Left card of the homepage "mission" row (Figma "Mission Card").
// Title + short blurb + "Get to know us" CTA, with a photo beneath.
export default function OurMissionCard() {
  return (
    <div className="flex flex-col w-full h-full gap-[var(--spacing-2xl)] md:gap-[var(--spacing-4xl)] min-w-0">
      <div className="flex flex-col items-start gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
        <h2 className="mobile-heading-5xl-bold md:web-heading-5xl-bold text-[var(--color-content-primary)]">
          About us
        </h2>
        <p className="mobile-text-lg-semibold md:web-text-2xl-semibold text-[var(--color-content-primary)]">
          JH Mural Project is a non-profit based in Jackson Heights, Queens that
          partners with local artists to paint murals and turn neighborhoods into
          open air galleries.
        </p>
        <Button
          variant="primary"
          size="large"
          href="/get-to-know-us/what-inspires-us"
          trailingIcon="/arrow-right.svg"
          className="w-fit"
        >
          Get to know us
        </Button>
      </div>

      <div className="relative w-full h-[240px] md:h-[350px] xl:h-auto xl:flex-1 xl:min-h-[350px] overflow-hidden">
        <Image
          src="/WhatInspiresUs.jpg"
          alt="Community mural that inspires the JH Mural Project"
          fill
          sizes="(max-width: 1440px) 100vw, 780px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
