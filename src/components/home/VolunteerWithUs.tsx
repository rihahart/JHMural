"use client";

import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import heroBannerData from "@/data/getInvolved/heroBannerData";

export default function VolunteerWithUs() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();
  const { title, image, imageAlt } = heroBannerData;

  if (isMobile) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-blue-600)]">
        <div className="flex flex-col items-start px-[var(--spacing-xl)] py-[var(--spacing-xl)] gap-[var(--spacing-lg)]">
          <h1 className="logo-mobile-heading-5xl text-[var(--color-content-primary-inverse)]">
            {title}
          </h1>
          <BorderlessButton
            variant="primary-inverse"
            size="small"
            href="/get-involved"
            trailingIcon="/arrow-right.svg"
            className="font-base">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[245px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        </div>
      
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-blue-600)]">
        <div className="flex flex-col items-start px-[var(--spacing-2xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
          <h1 className="logo-hero-xs text-[var(--color-content-primary-inverse)]">
            {title}
          </h1>
          <BorderlessButton
            variant="primary-inverse"
            size="large"
            href="/get-involved"
            trailingIcon="/arrow-right.svg"
            className="font-base">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        </div>
      
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="w-full flex flex-col bg-[var(--color-blue-600)]">
        <div className="flex flex-col items-start px-[var(--spacing-2xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
          <h1 className="logo-web-heading-3xl text-[var(--color-content-primary-inverse)]">
            {title}
          </h1>
          <BorderlessButton
            variant="primary-inverse"
            size="large"
            href="/get-involved"
            trailingIcon="/arrow-right.svg"
            className="font-base">
            Learn more
          </BorderlessButton>
          <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        </div>
      
      </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full flex flex-col bg-[var(--color-blue-600)]">
      <div className="flex flex-col items-start px-[var(--spacing-3xl)] py-[var(--spacing-3xl)] gap-[var(--spacing-2xl)]">
        <h1 className="logo-hero-xs text-[var(--color-content-primary-inverse)]">
          {title}
        </h1>
        <BorderlessButton
          variant="primary-inverse"
          size="large"
          href="/get-involved"
          trailingIcon="/arrow-right.svg"
          className="font-base">
          Learn more
        </BorderlessButton>
        <div className="relative w-full h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
      </div>
     
    </div>
  );
}


