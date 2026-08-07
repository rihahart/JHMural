"use client";

import ourVisionData from "@/data/whatInspiresUs/ourVisionData";
import NavButton from "@/components/ButtonCollection/NavButton";

export default function OurVision() {
  const { title, description, description2 } = ourVisionData;

  return (
    <div className="flex flex-col xl:flex-row justify-center items-start max-w-[1600px] gap-[var(--spacing-xl)] md:gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-8xl)]">
      <h1 className="mobile-heading-5xl-bold md:web-heading-4xl-bold lg:hero-xs xl:hero-s text-[var(--color-content-primary)] w-full xl:w-[40%]">
        {title}
      </h1>
      <div className="flex flex-col items-start w-full xl:w-[60%] gap-[var(--spacing-2xl)]">
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
              href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Donate to our murals
            </NavButton>
          </div>
          <div className="border-b-[2px] border-[var(--color-content-secondary)]">
            <NavButton
              variant="primary"
              href="/newsletter"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Join our newsletter
            </NavButton>
          </div>
          <div className="border-b-[2px] border-[var(--color-content-secondary)]">
            <NavButton
              variant="primary"
              href="/get-to-know-us/meet-jh-mural-team"
              trailingIcon="/arrow-right.svg"
              className="w-full"
            >
              Meet our team
            </NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
