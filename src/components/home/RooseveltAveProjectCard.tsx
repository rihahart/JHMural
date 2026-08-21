"use client";

import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import useWindowWidth from "@/app/_utilities/useWindowWidth";

// Right card of the homepage "mission" row (Figma "Roosevelt Ave Project").
// Brand-blue card: title + blurb + "Learn more" CTA, with a photo beneath.
export default function RooseveltAveProjectCard({
  layout = "column",
}: {
  layout?: "column" | "row";
}) {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="flex flex-col  w-full  h-[450px] bg-blue-600 p-[var(--spacing-lg)]  gap-[var(--spacing-xl)] min-w-0">
        <div className="flex flex-col items-start gap-[var(--spacing-m)]">
          <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary-inverse)]">
            Roosevelt Ave Project
          </h2>

          <p className="mobile-text-m-medium text-[var(--color-content-primary-inverse)]">
            We want to transform Roosevelt Avenue, Queens into an open-air gallery.
          </p>
          <BorderlessButton
            variant="primary-inverse"
            size="small"
            href="/projects/RooseveltProject"
            trailingIcon="/arrow-right.svg"
            className="w-fit"
          >
            Learn more
          </BorderlessButton>
        </div>
           <div className="relative w-full flex-1 overflow-hidden">
            <Image
              src="/RooseveltAveProject.png"
              alt="Mural along Roosevelt Avenue in Jackson Heights"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
      </div>
    );
  }

  if (width <= 1200) {
    if (layout === "row") {
      return (
        <div className="flex flex-row w-full h-[450px] bg-blue-600 p-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] min-w-0">
          <div className="relative w-1/2 h-full flex-shrink-0 overflow-hidden">
            <Image
              src="/RooseveltAveProject.png"
              alt="Mural along Roosevelt Avenue in Jackson Heights"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 gap-[var(--spacing-lg)]">
            <h2 className="web-heading-3xl-bold text-[var(--color-content-primary-inverse)]">
              Roosevelt Ave Project
            </h2>
            <p className="web-text-s-medium text-[var(--color-content-primary-inverse)]">
              We want to transform Roosevelt Avenue, Queens into an open-air gallery.
            </p>
            <BorderlessButton
              variant="primary-inverse"
              size="small"
              href="/projects/RooseveltProject"
              trailingIcon="/arrow-right.svg"
              className="w-fit"
            >
              Learn more
            </BorderlessButton>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col w-full h-[600px] bg-blue-600 p-[var(--spacing-2xl)] min-w-0">
        <div className="flex flex-col items-start h-full gap-[var(--spacing-2xl)]">
          <div className="flex flex-col w-full gap-[var(--spacing-lg)]">
              <h2 className="web-heading-4xl-bold text-[var(--color-content-primary-inverse)]">
                Roosevelt Ave Project
              </h2>
              <p className="web-text-s-medium text-[var(--color-content-primary-inverse)]">
                We want to transform Roosevelt Avenue, Queens into an open-air gallery.
              </p>
              <BorderlessButton
                variant="primary-inverse"
                size="small"
                href="/projects/RooseveltProject"
                trailingIcon="/arrow-right.svg"
                className="w-fit"
              >
                Learn more
              </BorderlessButton>
          </div>
            <div className="relative w-full flex-1 overflow-hidden">
                  <Image
                  src="/RooseveltAveProject.png"
                  alt="Mural along Roosevelt Avenue in Jackson Heights"
                  fill
                  sizes="100vw"
                  className="object-cover"
                  />
              </div>
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    if (layout === "row") {
      return (
        <div className="flex flex-row w-full h-[500px] bg-blue-600 p-[var(--spacing-2xl)] gap-[var(--spacing-8xl)] min-w-0">
          <div className="relative w-1/2 h-full flex-shrink-0 overflow-hidden">
            <Image
              src="/RooseveltAveProject.png"
              alt="Mural along Roosevelt Avenue in Jackson Heights"
              fill
              sizes="50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-1/2 gap-[var(--spacing-xl)]">
            <h2 className="web-heading-4xl-bold text-[var(--color-content-primary-inverse)]">
              Roosevelt Ave Project
            </h2>
            <p className="web-text-s-medium text-[var(--color-content-primary-inverse)]">
              We want to transform Roosevelt Avenue, Queens into an open-air gallery.
            </p>
            <BorderlessButton
              variant="primary-inverse"
              size="small"
              href="/projects/RooseveltProject"
              trailingIcon="/arrow-right.svg"
              className="w-fit"
            >
              Learn more
            </BorderlessButton>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col w-full h-[600px] bg-blue-600 p-[var(--spacing-xl)] gap-[var(--spacing-2xl)] min-w-0">
        <div className="flex flex-col items-start gap-[var(--spacing-lg)]">

              <h2 className="web-heading-4xl-bold text-[var(--color-content-primary-inverse)]">
                Roosevelt Ave Project
              </h2>
              <p className="web-text-s-medium text-[var(--color-content-primary-inverse)]">
                We want to transform Roosevelt Avenue, Queens into an open-air gallery.
              </p>

          <BorderlessButton
            variant="primary-inverse"
            size="small"
            href="/projects/RooseveltProject"
            trailingIcon="/arrow-right.svg"
            className="w-fit"
          >
            Learn more
          </BorderlessButton>
        </div>

        <div className="relative w-full flex-1 overflow-hidden">
          <Image
            src="/RooseveltAveProject.png"
            alt="Mural along Roosevelt Avenue in Jackson Heights"
            fill
            sizes="(max-width: 1600px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  if (layout === "row") {
    return (
      <div className="flex flex-row w-full h-[750px] justify-center items-center bg-blue-600 p-[var(--spacing-4xl)] gap-[var(--spacing-8xl)] min-w-0">
        <div className="relative w-1/2 h-full flex-shrink-0 overflow-hidden">
          <Image
            src="/RooseveltAveProject.png"
            alt="Mural along Roosevelt Avenue in Jackson Heights"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 ">
            <div className="flex flex-col items-start gap-[var(--spacing-xl)]">
              <h2 className="web-heading-5xl-bold text-[var(--color-content-primary-inverse)]">
                Roosevelt Ave Project
              </h2>
              <p className="web-text-xl-medium text-[var(--color-content-primary-inverse)]">
                We want to transform Roosevelt Avenue, Queens into an open-air gallery.
              </p>
              <BorderlessButton
                variant="primary-inverse"
                size="large"
                href="/projects/RooseveltProject"
                trailingIcon="/arrow-right.svg"
                className="w-fit"
              >
                Learn more
              </BorderlessButton>
            </div> 
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col w-full h-[700px] bg-blue-600 p-[var(--spacing-2xl)] gap-[var(--spacing-4xl)] min-w-0">
      <div className="flex flex-col items-start max-w-[800px] gap-[var(--spacing-xl)]">

          <h2 className="web-heading-4xl-bold text-[var(--color-content-primary-inverse)]">
            Roosevelt Ave Project
          </h2>
          <p className="web-text-lg-medium text-[var(--color-content-primary-inverse)]">
            We want to transform Roosevelt Avenue, Queens into an open-air gallery.
          </p>

        <BorderlessButton
          variant="primary-inverse"
          size="large"
          href="/projects/RooseveltProject"
          trailingIcon="/arrow-right.svg"
          className="w-fit"
        >
          Learn more
        </BorderlessButton>
      </div>

      <div className="relative w-full flex-1 overflow-hidden">
        <Image
          src="/RooseveltAveProject.png"
          alt="Mural along Roosevelt Avenue in Jackson Heights"
          fill
          sizes="600px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
