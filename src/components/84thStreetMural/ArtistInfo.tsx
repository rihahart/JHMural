"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import artistInfoData from "@/data/84thStreetMural/artistInfo";


function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

export default function ArtistInfo() {
  const width = useWindowWidth();
  const { title, subtitle, artistStatement, image } = artistInfoData;
  const alt = "Noah Bassman, artist behind the Jackson Heights Mural";

  if (width <= 768) {
    return (
      <div className="flex flex-col w-full gap-[var(--spacing-xl)] min-w-0">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={750}
          className="w-full h-[350px] object-cover"
          priority
          unoptimized
        />
        <div className="w-full h-[4px] bg-[var(--color-content-primary)]" />
        <div className="flex flex-col items-start gap-[var(--spacing-lg)]">
          <h2 className="mobile-heading-4xl-bold text-[var(--color-content-primary)]">
            {title}
          </h2>
          <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
            {subtitle}
          </p>
          <p className="mobile-text-m-semibold text-[var(--color-content-primary)]">
            &ldquo;{artistStatement}&rdquo;
          </p>
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="flex flex-col max-w-[800px] mx-auto gap-[var(--spacing-2xl)] min-w-0">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={750}
          className="w-full h-[600px] object-cover"
          priority
          unoptimized
        />
        <div className="w-full h-[4px] bg-[var(--color-content-primary)]" />
        <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
          <h2 className="web-heading-xl-bold text-[var(--color-content-primary)]">
            {title}
          </h2>
          <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {subtitle}
          </p>
          <p className="web-text-m-semibold text-[var(--color-content-primary)]">
            &ldquo;{artistStatement}&rdquo;
          </p>
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="flex flex-row items-center justify-center w-full gap-[var(--spacing-3xl)] min-w-0">
        <div className="w-[45%] flex-shrink-0">
          <Image
            src={image}
            alt={alt}
            width={600}
            height={750}
            className="w-full h-auto object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="w-[4px] flex-shrink-0 self-stretch bg-[var(--color-content-secondary)]" />
        <div className="flex flex-col max-w-[500px] justify-center gap-[var(--spacing-2xl)]">
          <h2 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
            {title}
          </h2>
          <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {subtitle}
          </p>
          <p className="web-text-m-semibold text-[var(--color-content-primary)]">
            &ldquo;{artistStatement}&rdquo;
          </p>
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="flex flex-row items-center justify-center w-full p-[var(--spacing-4xl)] gap-[var(--spacing-4xl)] min-w-0">
      <div className="w-[40%] flex-shrink-0">
        <Image
          src={image}
          alt={alt}
          width={600}
          height={750}
          className="w-full h-auto object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="w-[4px] flex-shrink-0 self-stretch bg-[var(--color-content-secondary)]" />
      <div className="flex flex-col items-start max-w-[600px] justify-center gap-[var(--spacing-2xl)]">
        <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
          {title}
        </h2>
        <p className="web-text-lg-medium text-[var(--color-content-primary)]">
          {subtitle}
        </p>
        <p className="web-text-lg-semibold text-[var(--color-content-primary)]">
          &ldquo;{artistStatement}&rdquo;
        </p>
      </div>
    </div>
  );
}
