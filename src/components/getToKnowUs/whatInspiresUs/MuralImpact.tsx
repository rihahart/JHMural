"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/ButtonCollection/Button";
import muralImpactData from "@/data/muralImpactData";

export default function MuralImpact() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center py-[var(--spacing-xl)] lg:py-[var(--spacing-8xl)] gap-[var(--spacing-4xl)] md:gap-[var(--spacing-6xl)] xl:gap-[var(--spacing-8xl)] justify-center">
        {muralImpactData.map((item) => (
          <div
            key={item.title}
            className="flex flex-col xl:flex-row items-center xl:items-start gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-8xl)] max-w-[1600px] w-full"
          >
            <div className="w-full xl:w-[55%] order-2 xl:order-1">
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between w-full">
                <span className="mobile-text-s-regular md:web-text-m-regular xl:web-text-lg-regular text-[var(--color-content-secondary)]">
                  {item.photoCredit}
                </span>
                <span className="mobile-text-s-regular md:web-text-m-regular xl:web-text-lg-regular text-[var(--color-content-secondary)]">
                  {item.artistCredit}
                </span>
              </div>
            </div>
            <div className="w-full xl:w-[45%] flex flex-col items-start gap-[var(--spacing-xl)] md:gap-[var(--spacing-lg)] xl:gap-[var(--spacing-2xl)] md:py-[var(--spacing-2xl)] xl:py-[var(--spacing-lg)] md:px-[var(--spacing-lg)] order-1 xl:order-2">
              <h2 className="mobile-heading-5xl-bold md:web-heading-4xl-bold text-[var(--color-content-primary)]">
                {item.title}
              </h2>
              <p className="web-text-xl-semibold text-[var(--color-content-primary)]">
                {item.description}
              </p>
              {item.description2 && (
                <p className="web-text-xl-semibold text-[var(--color-content-primary)]">
                  {item.description2}
                </p>
              )}
              {item.cta && (
                <Button
                  variant="secondary"
                  size="small"
                  href={item.cta.href}
                  trailingIcon="/arrow-right.svg"
                  className="w-fit"
                >
                  {item.cta.label}
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
