"use client";

import React from "react";
import Image from "next/image";
import eightyFourthStreetMuralHeroData from "@/data/eightyFourthStreetMuralHeroData";

export default function HeroBanner() {
  const { title, subtitle, image } = eightyFourthStreetMuralHeroData;

  return (
    <div className="w-full bg-[var(--color-yellow-500)]">
      <div className="flex flex-col md:flex-row items-stretch w-full max-w-[1600px] mx-auto gap-[var(--spacing-3xl)] md:gap-[var(--spacing-6xl)] py-[var(--spacing-3xl)] md:py-[var(--spacing-10xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-6xl)]">
        <div className="flex flex-col items-start w-full md:w-1/2 gap-[var(--spacing-lg)] md:gap-[var(--spacing-4xl)]">
          <h1 className="web-heading-3xl-bold md:hero-lg text-[var(--color-content-primary)]">{title}</h1>
          <h2 className="mobile-heading-2xl-semibold md:web-heading-lg-semibold text-[var(--color-content-primary)]">{subtitle}</h2>
        </div>
        <div className="w-full md:w-1/2 self-stretch overflow-hidden">
          <Image
            src={image}
            alt="Jackson Heights Mural at 84th Street and Roosevelt Avenue"
            width={600}
            height={750}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

