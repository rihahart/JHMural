"use client";

import ourVisionData from "@/data/whatInspiresUs/ourVisionData";
import NavButton from "@/components/ButtonCollection/NavButton";

export default function OurVision() {
  const { title, description, description2, subtitle } = ourVisionData;

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start max-w-[1600px] gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] lg:gap-[var(--spacing-8xl)]">
      <h1 className="mobile-heading-5xl-bold md:web-heading-4xl-bold lg:hero-xs xl:hero-s text-[var(--color-content-primary)] w-full md:w-1/2 lg:w-[40%]">
        {title}
      </h1>
      <div className="flex flex-col items-start w-full lg:w-[60%] gap-[var(--spacing-2xl)]">
        <div className="flex flex-col gap-[var(--spacing-2xl)]">
          <p className="web-text-xl-semibold text-[var(--color-content-primary)] xl:hidden">
            {description} {description2}
          </p>
          <p className="hidden xl:block web-text-xl-semibold text-[var(--color-content-primary)]">
            {description}
          </p>
          <p className="hidden xl:block web-text-xl-semibold text-[var(--color-content-primary)]">
            {description2}
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="border-b-[2px] border-[var(--color-content-secondary)]">
            <NavButton
              variant="primary"
              href="/get-involved"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Join us
            </NavButton>
          </div>
          <div className="border-b-[2px] border-[var(--color-content-secondary)]">
            <NavButton
              variant="primary"
              href="https://www.instagram.com/jhmuralproject"
              trailingIcon="/arrow-right.svg"
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              Share our story
            </NavButton>
          </div>
          <div className="border-b-[2px] border-[var(--color-content-secondary)]">
            <NavButton
              variant="primary"
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Donate to us
            </NavButton>
          </div>
        </div>
        <h2 className="mobile-text-2xl-black md:web-text-2xl-black sparkle-text">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}
