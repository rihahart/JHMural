"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

// Right card of the homepage "mission" row (Figma "Roosevelt Ave Project").
// Brand-blue card: title + blurb + "Learn more" CTA, with a photo beneath.
export default function RooseveltAveProjectCard() {
  return (
    <div className="flex flex-col w-full h-full bg-blue-600 p-[var(--spacing-xl)] md:p-[var(--spacing-2xl)] gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] min-w-0">
      <div className="flex flex-col items-start gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)]">
        <h2 className="mobile-heading-5xl-bold md:web-heading-4xl-bold text-[var(--color-content-primary-inverse)]">
          Roosevelt Ave Project
        </h2>
        <p className="mobile-text-lg-semibold md:web-text-xl-semibold text-[var(--color-content-primary-inverse)]">
          We want to transform Roosevelt Avenue, Queens into an open-air gallery.
        </p>
        <BorderlessButton
          variant="primary-inverse"
          size="large"
          href="/RooseveltAveProject.png"
          trailingIcon="/arrow-right.svg"
          className="w-fit"
        >
          Learn more
        </BorderlessButton>
      </div>

      <div className="relative w-full h-[240px] md:h-[324px] xl:h-auto xl:flex-1 xl:min-h-[324px] overflow-hidden">
        <Image
          src="/MuralJH.JPG"
          alt="Mural along Roosevelt Avenue in Jackson Heights"
          fill
          sizes="(max-width: 1440px) 100vw, 600px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
