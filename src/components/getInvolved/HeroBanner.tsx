"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import heroBannerData from "@/data/getInvolved/heroBannerData";

export default function HeroBanner() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, image, imageAlt } = heroBannerData;
  const buttonLink = "https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform";

  // Mobile
  if (isMobile) {
    return (
      <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-start py-[var(--spacing-3xl)] px-[var(--spacing-lg)] gap-[var(--spacing-2xl)]">
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-m)]">
        <h1 className="logo-mobile-heading-5xl w-full text-[var(--color-content-primary-inverse)] text-left">
          {title}
        </h1>
        <BorderlessButton
           variant="primary-inverse"
           size="small"
           href={buttonLink}
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up here
         </BorderlessButton>
        </div>
        <div className="w-full overflow-hidden">
          <Image 
            src={image} 
            alt={imageAlt} 
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
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-lg)]">
        <h1 className="logo-hero-xs w-full text-[var(--color-content-primary-inverse)] text-left">
          {title}
        </h1>
        <BorderlessButton
           variant="primary-inverse"
           size="large"
           href={buttonLink}
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up here
         </BorderlessButton>
        </div>
        <div className="w-full overflow-hidden">
          <Image 
            src={image} 
            alt={imageAlt} 
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
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-xl)]">
        <h1 className="logo-hero-m w-full text-[var(--color-content-primary-inverse)] text-left">
          {title}
        </h1>
        <BorderlessButton
           variant="primary-inverse"
           size="large"
           href={buttonLink}
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up here
         </BorderlessButton>
        </div>
        <div className="w-full overflow-hidden">
          <Image 
            src={image} 
            alt={imageAlt} 
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
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-2xl)]">
      <h1 className="logo-hero-2xl w-full text-[var(--color-content-primary-inverse)] text-left">
        {title}
      </h1>
      <BorderlessButton
           variant="primary-inverse"
           size="large"
           href={buttonLink}
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up here
         </BorderlessButton>
        </div>
      <div className="w-full overflow-hidden">
        <Image 
          src={image} 
          alt={imageAlt} 
          width={1400} 
          height={700} 
          className="w-full h-auto object-cover"
        />
      </div>
      </div>
    </div>
  );
}

