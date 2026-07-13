"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import heroBannerData from "@/data/getInvolved/heroBannerData";

export default function WhatInspiresUs() {
  const { title, image, imageAlt } = heroBannerData;

  return (
    <div className="w-full flex flex-col bg-[var(--color-blue-600)]">
      <div className="flex flex-col items-start px-[var(--spacing-xl)] md:px-[var(--spacing-3xl)] py-[var(--spacing-xl)] md:py-[var(--spacing-3xl)] gap-[var(--spacing-lg)] md:gap-[var(--spacing-2xl)]">
        <h1 className="logo-mobile-heading-5xl md:logo-hero-xs text-[var(--color-content-primary-inverse)]">
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
        <div className="relative w-full h-[245px] md:h-[400px] overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </div>
      </div>
     
    </div>
  );
}

