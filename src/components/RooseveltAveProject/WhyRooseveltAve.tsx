"use client";

import { useEffect, useState } from "react";
import RooseveltAveData from "@/data/RooseveltAveProject/WhyRooseveltAve";
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

const SPARKLES = [
  { top: "-15%", left: "4%", size: 12, delay: "0s", color: "var(--color-yellow-500)" },
  { top: "55%", left: "16%", size: 8, delay: "0.5s", color: "#fff" },
  { top: "-5%", left: "38%", size: 10, delay: "1s", color: "var(--color-yellow-500)" },
  { top: "65%", left: "58%", size: 13, delay: "1.4s", color: "#fff" },
  { top: "-10%", left: "76%", size: 9, delay: "0.3s", color: "var(--color-yellow-500)" },
  { top: "50%", left: "94%", size: 11, delay: "1.7s", color: "#fff" },
];

function Sparkle({
  top,
  left,
  size,
  delay,
  color,
}: {
  top: string;
  left: string;
  size: number;
  delay: string;
  color: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className="sparkle"
      style={{ top, left, width: size, height: size, color, animationDelay: delay }}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
    </svg>
  );
}

function RooseveltAveSubtitle({ className = "" }: { className?: string }) {
  const { subtitleParts } = RooseveltAveData;

  return (
    <p className={`glimmer-text ${className}`}>
      {subtitleParts.map((part, i) => (
        <span key={i} style={part.color ? { color: part.color } : undefined}>
          {part.text}
        </span>
      ))}
      {SPARKLES.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}
    </p>
  );
}

function RooseveltAveButtons({ className = "" }: { className?: string }) {
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
          href="/about-us/get-to-know-us"
          trailingIcon="/arrow-right.svg"
          className="w-full !web-text-m-semibold "
        >
          Get to know us
        </NavButton>
      </div>
   
    </div>
  );
}

export default function WhyRooseveltAve() {
  const width = useWindowWidth();
  const { title, description } = RooseveltAveData;

  if (width <= 768) {
    return (
      <div className="flex flex-col justify-center items-start w-full gap-[var(--spacing-xl)]">
          <h1 className="mobile-heading-4xl-bold text-[var(--color-content-primary)] w-full">
            {title}
          </h1>

          <div className="flex flex-col items-start w-full gap-[var(--spacing-lg)] mobile-text-m-medium text-[var(--color-content-primary)]">
              <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                {description}
              </p>
          </div>

          <RooseveltAveButtons />
          <RooseveltAveSubtitle className="mobile-heading-lg-bold w-full" />
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
        </div>
         <RooseveltAveButtons />
         <RooseveltAveSubtitle className="web-heading-s-bold w-full" />
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
        </div>
        <RooseveltAveButtons />
        <RooseveltAveSubtitle className="web-heading-s-bold w-full" />
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
        </div>
        <RooseveltAveButtons />
        <RooseveltAveSubtitle className="web-heading-m-bold w-full" />
      </div>
    </div>
  );
}
