"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import DecorativeDivider from "@/components/getToKnowUs/whatInspiresUs/DecorativeDivider";
import RooseveltAvePhase1 from "@/components/RooseveltAveProject/RooseveltAvePhase1";
import JacksonHeightInBloomCard from "@/components/RooseveltAveProject/JacksonHeightInBloomCard";


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

const PROJECT_TITLE = "Roosevelt Ave Project";
const PROJECT_DESCRIPTION =
  "Roosevelt Ave has experienced many environmental challenges, such as vandalism, graffiti, and crime, that impact local businesses. Unsavory activities negatively impact families and children in the neighborhood. Most community beautification efforts focus on 34th Avenue and 37th Avenue. Roosevelt Avenue is often left to be addressed by people outside the neighborhood through policing and other aggressive measures, which further impact public perception without showing meaningful change. The location offers high visibility due to the constant traffic in the area. It provides an opportunity to create a visual landmark in a very densely populated neighborhood.";

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
            <RooseveltAvePhase1 />
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
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
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
            <RooseveltAvePhase1 />
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
          <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
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
            <RooseveltAvePhase1 />
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
        <div className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
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
        <RooseveltAvePhase1 />
        <DecorativeDivider />
        <JacksonHeightInBloomCard layout="row" />
      </div>
    </div>
  );
}
