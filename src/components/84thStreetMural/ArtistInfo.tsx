"use client";

import React from "react";
import Image from "next/image";
import artistInfoData from "@/data/84thStreetMural/artistInfo";

export default function ArtistInfo() {
  const { title, subtitle, artistStatement, image } = artistInfoData;

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-start w-full max-w-[1600px] mx-auto gap-[var(--spacing-2xl)]">
        <div className="w-full md:w-1/2 flex flex-col items-center py-0 md:py-[var(--spacing-xl)] overflow-hidden">
          <Image
            src={image}
            alt="Noah Bassman, artist behind the Jackson Heights Mural"
            width={600}
            height={750}
            className="w-full h-[400px] md:h-auto object-cover"
            unoptimized
          />
        </div>
        <div className="w-full h-[4px] md:w-[4px] md:h-auto flex-shrink-0 bg-[var(--color-content-primary)]" style={{ alignSelf: 'stretch' }}></div>
        <div className="flex flex-col items-start w-full md:w-1/2 gap-[var(--spacing-2xl)] py-0 md:py-[var(--spacing-xl)] px-0 md:px-[var(--spacing-xl)]">
          <h2 className="mobile-heading-5xl-bold md:web-heading-4xl-bold text-[var(--color-content-primary)]">{title}</h2>
          <p className="mobile-text-lg-medium md:web-text-2xl-regular text-[var(--color-content-primary)]">{subtitle}</p>
          <p className="mobile-text-lg-black md:web-text-2xl-black text-[var(--color-content-primary)]">&ldquo;{artistStatement}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}

