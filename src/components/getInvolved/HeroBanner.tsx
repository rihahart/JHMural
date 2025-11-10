"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

export default function HeroBanner() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  // Mobile
  if (isMobile) {
    return (
      <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
        <h1 className="logo-mobile-heading-5xl w-full text-[var(--color-content-primary-inverse)] text-left">
          Volunteer with us
        </h1>
        <div className="w-full overflow-hidden">
          <Image 
            src="/GetInvovled/VolunteerWithUs.jpg" 
            alt="Volunteer with us" 
            width={768} 
            height={400} 
            className="w-full h-auto object-cover"
          />
        </div>
        </div>
      </div>
    );
  }

  // Tablet
  if (isTablet) {
    return (
      <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1024px] mx-auto py-[var(--spacing-6xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-3xl)]">
        <h1 className="logo-hero-xs w-full text-[var(--color-content-primary-inverse)] text-left">
          Volunteer with us
        </h1>
        <div className="w-full overflow-hidden">
          <Image 
            src="/GetInvovled/VolunteerWithUs.jpg" 
            alt="Volunteer with us" 
            width={1024} 
            height={500} 
            className="w-full h-auto object-cover"
          />
        </div>
        </div>
      </div>
    );
  }

  // Desktop 1440px
  if (isDesktop1440px) {
    return (
      <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center max-w-[1400px] mx-auto py-[var(--spacing-7xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-4xl)]">
        <h1 className="logo-hero-m w-full text-[var(--color-content-primary-inverse)] text-left">
          Volunteer with us
        </h1>
        <div className="w-full overflow-hidden">
          <Image 
            src="/GetInvovled/VolunteerWithUs.jpg" 
            alt="Volunteer with us" 
            width={1200} 
            height={600} 
            className="w-full h-auto object-cover"
          />
        </div>
        </div>
      </div>
    );
  }

  // Desktop 1440px+
  return (
    <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center max-w-[1600px] mx-auto py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-5xl)]">
      <h1 className="logo-hero-2xl w-full text-[var(--color-content-primary-inverse)] text-left">
        Volunteer with us
      </h1>
      <div className="w-full overflow-hidden">
        <Image 
          src="/GetInvovled/VolunteerWithUs.jpg" 
          alt="Volunteer with us" 
          width={1400} 
          height={700} 
          className="w-full h-auto object-cover"
        />
      </div>
      </div>
    </div>
  );
}

