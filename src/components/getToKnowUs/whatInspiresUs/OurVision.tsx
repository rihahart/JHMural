"use client";

import { useEffect, useState } from "react";
import ourVisionData from "@/data/whatInspiresUs/ourVisionData";
import NavButton from "@/components/ButtonCollection/NavButton";

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

function VisionButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="border-b-[1px] border-[var(--color-content-secondary)]">
        <NavButton
          variant="primary"
          href="https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00"
          target="_blank"
          rel="noopener noreferrer"
          trailingIcon="/arrow-right.svg"
          className="w-full !web-text-m-semibold"
          
        >
          Donate to our murals
        </NavButton>
      </div>
      <div className="border-b-[1px] border-[var(--color-content-secondary)]">
        <NavButton
          variant="primary"
          href="/newsletter"
          trailingIcon="/arrow-right.svg"
          className="w-full !web-text-m-semibold "
        >
          Join our newsletter
        </NavButton>
      </div>
      <div className="border-b-[1px] border-[var(--color-content-secondary)]">
        <NavButton
          variant="primary"
          href="/about-us/meet-jh-mural-team"
          trailingIcon="/arrow-right.svg"
          className="w-full !web-text-m-semibold"
        >
          Meet our team
        </NavButton>
      </div>
    </div>
  );
}

export default function OurVision() {
  const width = useWindowWidth();
  const { title, description, description2 } = ourVisionData;

  if (width <= 768) {
    return (
      <div className="flex flex-col justify-center items-start w-full gap-[var(--spacing-xl)]">
          <h1 className="mobile-heading-4xl-bold text-[var(--color-content-primary)] w-full">
            {title}
          </h1>

          <div className="flex flex-col items-start w-full gap-[var(--spacing-lg)] mobile-text-m-medium text-[var(--color-content-primary)">
              <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                {description} 
              </p>
              <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                {description2}
              </p>
          </div>

          <VisionButtons />
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="flex flex-col justify-center items-start w-full gap-[var(--spacing-2xl)]">
        <h1 className="web-heading-xl-bold text-[var(--color-content-primary)] w-full">
          {title}
        </h1>
        <div className="flex flex-col items-start w-full gap-[var(--spacing-xl)]">
          <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {description}
          </p>
           <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {description2}
          </p>
        </div>
         <VisionButtons />
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="flex flex-row justify-center items-start gap-[var(--spacing-8xl)]">
      <h1 className="web-heading-xl-bold text-[var(--color-content-primary)] w-[40%]">
        {title}
      </h1>
      <div className="flex flex-col items-start w-[60%] gap-[var(--spacing-2xl)]">
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {description}
          </p>
          <p className="web-text-m-medium text-[var(--color-content-primary)]">
            {description2}
          </p>
        </div>
        <VisionButtons />
      </div>
    </div>
    );
  }

  // large desktop (> 1600px)
  return (
      <div className="flex flex-row justify-center items-start px-[var(--spacing-2xl)] gap-[var(--spacing-8xl)]">
      <h1 className="web-heading-2xl-bold text-[var(--color-content-primary)] w-[40%]">
        {title}
      </h1>
      <div className="flex flex-col items-start w-[60%] gap-[var(--spacing-2xl)]">
        <div className="flex flex-col gap-[var(--spacing-xl)]">
          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
            {description}
          </p>
          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
            {description2}
          </p>
        </div>
        <VisionButtons />
      </div>
    </div>
  );
}
