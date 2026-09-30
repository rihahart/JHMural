"use client";

import React from "react";
import Image from "next/image";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import WhyRooseveltAve from "@/components/RooseveltAveProject/WhyRooseveltAve";
import JacksonHeightInBloomCard from "@/components/RooseveltAveProject/JacksonHeightInBloomCard";
import useWindowWidth from "@/app/_utilities/useWindowWidth";


const PROJECT_TITLE = "Roosevelt Ave Project";
const PROJECT_DESCRIPTION =
  "An initiative to transform Roosevelt Ave in Queens into an open-air gallery by filling it with murals.";

export default function RooseveltProject() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center pt-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] px-[var(--spacing-lg)] gap-[var(--spacing-5xl)] justify-center">
            <div className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
                <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
                 {PROJECT_TITLE}
                </h1>
                <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
               {PROJECT_DESCRIPTION}
                </p>
                <div className="relative w-full overflow-hidden h-[300px]">
                  <Image
                    src="/RooseveltAveProject.png"
                    alt="Roosevelt Ave Wall covered in murals"
                    fill
                    sizes="100vw"
                    className="object-cover object-bottom"
                  />
                </div>
            </div>
           <DecorativeDivider />
            <WhyRooseveltAve />
          <DecorativeDivider />
          <JacksonHeightInBloomCard />
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center pt-[var(--spacing-5xl)] pb-[var(--spacing-10xl)] px-[var(--spacing-2xl)] gap-[var(--spacing-6xl)] justify-center">
          <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
             {PROJECT_TITLE}
            </h1>
            <p className="web-text-m-medium text-[var(--color-content-primary)]">
             {PROJECT_DESCRIPTION}
            </p>
              <div className="relative w-full overflow-hidden h-[350px]">
            <Image
              src="/RooseveltAveProject.png"
              alt="Roosevelt Ave Wall covered in murals"
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
          </div>
             <DecorativeDivider />
              <WhyRooseveltAve />
          <DecorativeDivider />
          <JacksonHeightInBloomCard layout="row" />
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col mx-auto items-center justify-center pt-[var(--spacing-7xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-8xl)]">
          <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-2xl)]">
            <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
              {PROJECT_TITLE}
            </h1>
            <p className="web-text-m-medium text-[var(--color-content-primary)]">
              {PROJECT_DESCRIPTION}
            </p>
          </div>
          <div className="relative w-full overflow-hidden h-[450px] ">
            <Image
              src="/RooseveltAveProject.png"
              alt="Roosevelt Ave Wall covered in murals"
              fill
              sizes="(max-width: 1800px) 100vw, 1800px"
              className="object-cover object-bottom"
            />
          </div>
            <DecorativeDivider />
            <WhyRooseveltAve />
          <DecorativeDivider />
          <JacksonHeightInBloomCard layout="row" />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-dvh">
      <div className="flex flex-col max-w-[2000px] mx-auto items-center justify-center py-[var(--spacing-8xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-8xl)]">
        <div className="flex flex-col w-full items-start align-stretch gap-[var(--spacing-2xl)]">
          <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
           {PROJECT_TITLE}
          </h1>
          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
           {PROJECT_DESCRIPTION}
          </p>
        </div>
        <div className="relative w-full overflow-hidden h-[450px]">
          <Image
            src="/RooseveltAveProject.png"
            alt="Roosevelt Ave Wall covered in murals"
            fill
            sizes="(max-width: 2000px) 100vw, 2000px"
            className="object-cover object-bottom"
          />
        </div>
          <DecorativeDivider />
        <WhyRooseveltAve />
        <DecorativeDivider />
        <JacksonHeightInBloomCard layout="row" />
      </div>
    </div>
  );
}
