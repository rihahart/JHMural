"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import heroBannerData from "@/data/getInvolved/heroBannerData";

export default function HeroBanner() {
  const { title, image, imageAlt } = heroBannerData;
  const buttonLink = "https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform";

  return (
    <div className="w-full bg-[var(--color-blue-600)] flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center max-w-[1600px] mx-auto py-[var(--spacing-3xl)] md:py-[var(--spacing-8xl)] px-[var(--spacing-lg)] md:px-[var(--spacing-6xl)] gap-[var(--spacing-2xl)] md:gap-[var(--spacing-5xl)]">
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-m)] md:gap-[var(--spacing-2xl)]">
      <h1 className="logo-mobile-heading-5xl md:logo-hero-2xl w-full text-[var(--color-content-primary-inverse)] text-left">
        {title}
      </h1>
      <div className="md:hidden">
        <BorderlessButton
          variant="primary-inverse"
          size="small"
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon="/arrow-right.svg"
          className="font-base"
        >
          Sign up here
        </BorderlessButton>
      </div>
      <div className="hidden md:block">
      <BorderlessButton
        variant="primary-inverse"
        size="large"
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
        trailingIcon="/arrow-right.svg"
        className="font-base"
      >
        Sign up here
      </BorderlessButton>
      </div>
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

