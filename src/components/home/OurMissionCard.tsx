"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "../ButtonCollection/Button";

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

// Left card of the homepage "mission" row (Figma "Mission Card").
// Title + short blurb + "Get to know us" CTA, with a photo beneath.
export default function OurMissionCard() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="flex flex-col w-full h-full gap-[var(--spacing-2xl)] min-w-0">
        <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
          <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
            About Us
          </h2>

          <div className="relative w-full h-[150px] overflow-hidden">
            <Image
              src="/WhatInspiresUs.jpg"
              alt="Community mural that inspires the JH Mural Project"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          </div>
      
      
          <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">
            JH Mural Project is a non-profit based in Jackson Heights, Queens that
            partners with local artists to paint murals and turn neighborhoods into
            open air galleries.
          </p>
          <Button
            variant="secondary"
            size="small"
            href="/about-us/get-to-know-us"
            className="w-full"
          >
            Get to know us
          </Button>
        
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="flex flex-col w-full h-full gap-[var(--spacing-4xl)] min-w-0">
        <div className="flex flex-col items-start gap-[var(--spacing-3xl)]">
          <div className="flex flex-col w-full gap-[var(--spacing-xl)]">
              <h2 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
                About Us
              </h2>
              <div className="relative w-full h-[250px] overflow-hidden">
                  <Image
                  src="/WhatInspiresUs.jpg"
                  alt="Community mural that inspires the JH Mural Project"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  />
              </div>
          </div>
            <div className="flex flex-col w-full gap-[var(--spacing-xl)]">
              <p className="web-text-lg-medium text-[var(--color-content-primary)]">
                JH Mural Project is a non-profit based in Jackson Heights, Queens that
                partners with local artists to paint murals and turn neighborhoods into
                open air galleries.
              </p>
              <Button
                variant="secondary"
                size="small"
                href="/about-us/get-to-know-us"
                className="w-fit"
              >
                Get to know us
              </Button>
            </div>
        </div>

   
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="flex flex-col w-full h-[600px] justify-between min-w-0">
        <div className="flex flex-col p-[var(--spacing-m)] items-start gap-[var(--spacing-3xl)]">
           <div className="flex flex-col items-start max-w-[650px] gap-[var(--spacing-xl)]">
              <h2 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
                About Us
              </h2>
              <p className="web-text-m-medium text-[var(--color-content-primary)]">
                JH Mural Project is a non-profit based in Jackson Heights, Queens that
                partners with local artists to paint murals and turn neighborhoods into
                open air galleries.
              </p>
            </div>
          <Button
            variant="secondary"
            size="large"
            href="/about-us/get-to-know-us"
            className="w-fit"
          >
            Get to know us
          </Button>
        </div>

        <div className="relative w-full h-[275px] overflow-hidden">
          <Image
            src="/WhatInspiresUs.jpg"
            alt="Community mural that inspires the JH Mural Project"
            fill
            sizes="(max-width: 1600px) 100vw, 780px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="flex flex-col w-full h-[700px] justify-between min-w-0">
      <div className="flex flex-col items-start p-[var(--spacing-lg)] max-w-[750px] gap-[var(--spacing-4xl)]">
         <div className="flex flex-col items-start  gap-[var(--spacing-2xl)]">
            <h2 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
              About us
            </h2>
            <p className="web-text-lg-medium text-[var(--color-content-primary)]">
              JH Mural Project is a non-profit based in Jackson Heights, Queens that
              partners with local artists to paint murals and turn neighborhoods into
              open air galleries.
            </p>
          </div>
        <Button
          variant="secondary"
          size="large"
          href="/about-us/get-to-know-us"
          className="w-fit"
        >
          Get to know us
        </Button>
      </div>

      <div className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/WhatInspiresUs.jpg"
          alt="Community mural that inspires the JH Mural Project"
          fill
          sizes="780px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
