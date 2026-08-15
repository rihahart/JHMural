"use client";

import { useEffect, useState } from "react";
import ArtistInfo from "@/components/84thStreetMural/ArtistInfo";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import RooseveltAveProjectCard from "@/components/home/RooseveltAveProjectCard";
import BorderlessButton from "@/components/ButtonCollection/BorderlessButton";
import PhotoCarousel from "@/components/84thStreetMural/PhotoCarousel";
import Image from "next/image";

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

const ABOUT_US_TITLE = "Jackson Heights in Blooms";
const ABOUT_US_DESCRIPTION =
  "Located at 84th Street and Roosevelt Avenue, this inaugural mural reflects the heart of Jackson Heights—a neighborhood where diverse cultures, backgrounds, and experiences come together and support one another. It is a joyful work of art that invites residents and visitors to stop, admire it, take photos, and leave feeling hopeful. The mural was planned input from community members. It is the first mural in our larger Roosevelt Avenue Project, an initiative to transform Roosevelt Avenue, Queens into an open-air gallery.";

export default function EightyFourthStreetMural() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center pt-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] px-[var(--spacing-lg)] gap-[var(--spacing-5xl)] justify-center">
           <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
                          <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
                            {ABOUT_US_TITLE}
                          </h1>
                          <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                          {ABOUT_US_DESCRIPTION}
                          </p>
                          <BorderlessButton
                          variant="primary"
                          size="small"
                          href="/projects/jackson-heights-in-bloom"
                          trailingIcon="/arrow-right.svg"
                          className="w-fit"
                        >
                          Roosevelt Avenue Project
                         </BorderlessButton>           
            </div>
          <PhotoCarousel />
          <DecorativeDivider />
          <ArtistInfo />
          <DecorativeDivider />
          <RooseveltAveProjectCard />
        </div>  
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col items-center pt-[var(--spacing-5xl)] pb-[var(--spacing-10xl)] px-[var(--spacing-2xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
                      <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
                       {ABOUT_US_TITLE}
                      </h1>
                      <p className="web-text-m-medium text-[var(--color-content-primary)]">
                       {ABOUT_US_DESCRIPTION}
                      </p>
                        <BorderlessButton
                          variant="primary"
                          size="large"
                          href="/projects/jackson-heights-in-bloom"
                          trailingIcon="/arrow-right.svg"
                          className="w-fit"
                        >
                          Roosevelt Avenue Project
                         </BorderlessButton>           
           </div>
          <PhotoCarousel />
          <DecorativeDivider />
          <ArtistInfo />
          <DecorativeDivider />
          <RooseveltAveProjectCard layout="row" />
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="w-full min-h-screen">
        <div className="flex flex-col mx-auto items-center justify-center pt-[var(--spacing-7xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
              {ABOUT_US_TITLE}
            </h1>
            <p className="web-text-m-medium text-[var(--color-content-primary)]">
              {ABOUT_US_DESCRIPTION}
            </p>
            <BorderlessButton
              variant="primary"
              size="large"
              href="/projects/jackson-heights-in-bloom"
              trailingIcon="/arrow-right.svg"
              className="w-fit"
            >
              Roosevelt Avenue Project
            </BorderlessButton>
          </div>
          <PhotoCarousel />
          <DecorativeDivider />
          <ArtistInfo />
          <DecorativeDivider />
          <RooseveltAveProjectCard layout="row" />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-screen">
      <div className="flex flex-col max-w-[2000px] mx-auto items-center justify-center pt-[var(--spacing-8xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
          <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
            {ABOUT_US_TITLE}
          </h1>
          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
           {ABOUT_US_DESCRIPTION}
          </p>
          <BorderlessButton
            variant="primary"
            size="large"
            href="/projects/jackson-heights-in-bloom"
            trailingIcon="/arrow-right.svg"
            className="w-fit"
          >
            Roosevelt Avenue Project
          </BorderlessButton>
        </div>
        <PhotoCarousel />
        <DecorativeDivider />
        <ArtistInfo />
        <DecorativeDivider />
        <RooseveltAveProjectCard layout="row" />
      </div>
    </div>
  );
}
