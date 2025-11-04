"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function WelcomeToJacksonHeights() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-start px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-lg)]">
          <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
            Welcome to Jackson Heights
          </h1>
          <BorderlessButton
            variant="primary"
            size="small"
            href="/projects/84th-street-mural"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[245px] overflow-hidden">
          <Image
            src="/84thStreetMural/Hero Image.jpg"
            alt="84th Street Mural"
            fill
            className="object-cover"
            priority
          />
        </div>

        </div>
      
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-start px-[var(--spacing-2xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
          <h1 className="hero-s text-[var(--color-content-primary)]">
            Welcome to Jackson Heights
          </h1>
          <BorderlessButton
            variant="primary"
            size="large"
            href="/projects/84th-street-mural"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src="/84thStreetMural/Hero Image.jpg"
            alt="84th Street Mural"
            fill
            className="object-cover"
            priority
          />
        </div>
        </div>
      
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-yellow-500)]">
        <div className="flex flex-col items-start px-[var(--spacing-2xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
          <h1 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
            Welcome to Jackson Heights
          </h1>
          <BorderlessButton
            variant="primary"
            size="large"
            href="/projects/84th-street-mural"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src="/84thStreetMural/Hero Image.jpg"
            alt="84th Street Mural"
            fill
            className="object-cover"
            priority
          />
        </div>
        </div>
      
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full flex flex-col bg-[var(--color-yellow-500)]">
      <div className="flex flex-col items-start px-[var(--spacing-3xl)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]">
        <h1 className="hero-s text-[var(--color-content-primary)]">
          Welcome to Jackson Heights
        </h1>
        <BorderlessButton
          variant="primary"
          size="large"
          href="/projects/84th-street-mural"
          trailingIcon="/arrow-right.svg"
          className="font-base translate-y-[-2px]">
          Learn more
        </BorderlessButton>
        <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/84thStreetMural/Hero Image.jpg"
          alt="84th Street Mural"
          fill
          className="object-cover"
          priority
        />
      </div>
      </div>
     
    </div>
  );
}

