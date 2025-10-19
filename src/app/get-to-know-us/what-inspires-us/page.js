"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import DecorativeDivider from "@/components/getToKnowUs/DecorativeDivider";

export default function WhatInspiresUs() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-4xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className= "hero-xs text-[var(--color-content-primary)]">What inspires us</h1>
            <p className="web-text-m-semibold text-[var(--color-content-primary)]">When longtime resident Suzanne Adler, walked past the graffiti-covered wall at 84th and Roosevelt, she didn&apos;t see blight, she saw possibility. Soon after, she met Riha Hart, a younger neighbor with deep local roots, who was dreaming of ways to bring more public art to our community. Together, they founded the Jackson Heights Mural Project.</p>
          </div>
          <div>
            <Image src="/SuzanneRiha.png" alt="Suzanne Riha" width={1600} height={1600} />
          </div>
           <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
            <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">Our mission and vision</h1>
            <p className="mobile-text-m-regular text-[var(--color-content-primary)]">We want to collaborate with local artists to transform spaces along the Roosevelt Avenue Corridor and throughout Jackson Heights. We want to revitalize public spaces, cultivate creativity, build social connections, and inspire the children of the community.</p>
          </div>
          <DecorativeDivider />
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center py-[var(--spacing-6xl)] px-[var(--spacing-4xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
            <h1 className="hero-s text-[var(--color-content-primary)]">What inspires us</h1>
            <p className="web-text-m-semibold text-[var(--color-content-primary)]">When longtime resident Suzanne Adler, walked past the graffiti-covered wall at 84th and Roosevelt, she didn&apos;t see blight, she saw possibility. Soon after, she met Riha Hart, a younger neighbor with deep local roots, who was dreaming of ways to bring more public art to our community. Together, they founded the Jackson Heights Mural Project.</p>
          </div>
          <div >
            <Image src="/SuzanneRiha.png" alt="Suzanne Riha" width={1024} height={1024} />
          </div>
           <div className="flex items-center align-stretch justify-center gap-[var(--spacing-6xl)]">
            <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)] w-1/2 ">Our mission and vision</h1>
            <p className="web-text-m-regular text-[var(--color-content-primary)] w-1/2">We want to collaborate with local artists to transform spaces along the Roosevelt Avenue Corridor and throughout Jackson Heights. We want to revitalize public spaces, cultivate creativity, build social connections, and inspire the children of the community.</p>
          </div>
          <DecorativeDivider />
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col mx-auto items-start justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
          <h1 className="hero-lg text-[var(--color-content-primary)]">What inspires us</h1>
          <p className="web-text-xl-semibold text-[var(--color-content-primary)]">When longtime resident Suzanne Adler, walked past the graffiti-covered wall at 84th and Roosevelt, she didn&apos;t see blight, she saw possibility. Soon after, she met Riha Hart, a younger neighbor with deep local roots, who was dreaming of ways to bring more public art to our community. Together, they founded the Jackson Heights Mural Project.</p>
          </div>
          <Image src="/SuzanneRiha.png" alt="Suzanne Riha" width={1200} height={1200} />
           <div className="flex items-center align-stretch justify-center max-w-[1400px] gap-[var(--spacing-8xl)]">
              <h1 className="hero-xs text-[var(--color-content-primary)] w-1/2">Our mission and vision</h1>
              <p className="web-text-xl-regular text-[var(--color-content-primary)] w-1/2">We want to collaborate with local artists to transform spaces along the Roosevelt Avenue Corridor and throughout Jackson Heights. We want to revitalize public spaces, cultivate creativity, build social connections, and inspire the children of the community. </p>
          </div>
          <DecorativeDivider />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col max-w-[1600px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
       <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
        <h1 className="hero-2xl text-[var(--color-content-primary)]">What inspires us</h1>
        <p className="web-text-2xl-semibold text-[var(--color-content-primary)]">When longtime resident Suzanne Adler, walked past the graffiti-covered wall at 84th and Roosevelt, she didn&apos;t see blight, she saw possibility. Soon after, she met Riha Hart, a younger neighbor with deep local roots, who was dreaming of ways to bring more public art to our community. Together, they founded the Jackson Heights Mural Project.</p>
       </div>
       <div>
        <Image src="/SuzanneRiha.png" alt="Suzanne Riha" width={1600} height={1600} />
       </div>
       <div className="flex justify-center align-stretch items-center max-w-[1600px] gap-[var(--spacing-8xl)]">
        <h1 className="hero-s text-[var(--color-content-primary)] w-1/2">Our mission and vision</h1>
        <p className="web-text-2xl-regular text-[var(--color-content-primary)] w-1/2">We want to collaborate with local artists to transform spaces along the Roosevelt Avenue Corridor and throughout Jackson Heights. We want to revitalize public spaces, cultivate creativity, build social connections, and inspire the children of the community.</p>
       </div>
       <DecorativeDivider />
       
      </div>
    </div>
  );
}
