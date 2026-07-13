"use client";

import React from "react";
import Image from "next/image";
import muralImpactData from "@/data/muralImpactData";

export default function MuralImpact() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col items-center py-[var(--spacing-xl)] gap-[var(--spacing-4xl)] md:gap-[var(--spacing-6xl)] justify-center">
        {muralImpactData.map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row items-center md:items-start gap-[var(--spacing-xl)] md:gap-[var(--spacing-8xl)] max-w-[1600px]">
            <div className="w-full md:w-[65%] order-2 md:order-1">
              <Image
                src={item.photo.src}
                alt={item.photo.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="flex justify-between w-full">
                <span className="mobile-text-s-regular md:web-text-lg-regular text-[var(--color-content-secondary)]">{item.photoCredit}</span>
                <span className="mobile-text-s-regular md:web-text-lg-regular text-[var(--color-content-secondary)]">{item.artistCredit}</span>
              </div>
            </div>
            <div className="w-full md:w-[35%] flex flex-col items-start align-stretch gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] md:py-[var(--spacing-lg)] md:px-[var(--spacing-lg)] order-1 md:order-2">
              <h2 className="mobile-heading-5xl-bold md:web-heading-4xl-bold text-[var(--color-content-primary)]">{item.title}</h2>
              <p className="mobile-text-lg-medium md:web-text-2xl-regular text-[var(--color-content-primary)]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
