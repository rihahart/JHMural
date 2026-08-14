"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
import homeFeatureCardsData from "@/data/homeFeatureCardsData";

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

// 3-up feature row on the homepage
export default function HomeFeatureCards() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="flex flex-col w-full gap-[var(--spacing-5xl)]">
        {homeFeatureCardsData.map((card, index) => (
          <div key={card.id} className="contents">
            <div className="flex flex-col gap-[var(--spacing-2xl)] min-w-0">
              <div className="relative w-full h-[300px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
                <div className="flex flex-col gap-[var(--spacing-lg)]">
                  <h3 className="mobile-heading-3xl-bold text-[var(--color-content-primary)]">
                    {card.title}
                  </h3>

                  <p className="mobile-text-m-medium text-[var(--color-content-primary)] flex-1">
                    {card.description}
                  </p>

                  <BorderlessButton
                    variant="primary"
                    size="small"
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    trailingIcon="/arrow-right.svg"
                    className="font-base w-fit !font-semibold"
                  >
                    Learn more
                  </BorderlessButton>
                </div>
            </div>
            {index < homeFeatureCardsData.length - 1 && (
              <div className="w-full h-[4px] bg-[var(--color-content-secondary)]" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="grid grid-cols-2 gap-y-[var(--spacing-12xl)] w-full">
        {homeFeatureCardsData.map((card, index) => {
          const hasRightNeighbor =
            index % 2 === 0 && index + 1 < homeFeatureCardsData.length;
          const isLeftColumn = index % 2 === 0;
          const isRightColumn = index % 2 === 1;

          return (
            <div
              key={card.id}
              className={`flex flex-col gap-[var(--spacing-2xl)] min-w-0 ${
                isLeftColumn
                  ? `pr-[var(--spacing-2xl)] border-[var(--color-content-secondary)] ${
                      hasRightNeighbor ? "border-r-2" : "border-r-0"
                    }`
                  : isRightColumn
                  ? "pl-[var(--spacing-2xl)]"
                  : ""
              }`}
            >
              <div className="relative w-full h-[400px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="50vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-[var(--spacing-lg)] min-w-0">

                <h3 className="web-heading-lg-bold text-[var(--color-content-primary)]">
                  {card.title}
                </h3>

                <p className="web-text-s-medium text-[var(--color-content-primary)] flex-1">
                  {card.description}
                </p>

                <BorderlessButton
                  variant="primary"
                  size="large"
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  trailingIcon="/arrow-right.svg"
                  className="font-base w-fit !font-semibold"
                >
                  Learn more
                </BorderlessButton>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="flex flex-row w-full divide-x-2 divide-[var(--color-content-secondary)]">
        {homeFeatureCardsData.map((card) => (
          <div
            key={card.id}
            className="flex-1 min-w-0 flex flex-col gap-[var(--spacing-2xl)] px-[var(--spacing-2xl)] py-[var(--spacing-lg)] first:pl-0 last:pr-0"
          >
            <div className="relative w-full h-[350px] overflow-hidden">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="33vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-[var(--spacing-lg)] min-w-0">
                <h3 className="web-heading-lg-bold text-[var(--color-content-primary)]">
                  {card.title}
                </h3>

                <p className="web-text-s-medium text-[var(--color-content-primary)] flex-1">
                  {card.description}
                </p>

                <BorderlessButton
                  variant="primary"
                  size="large"
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  trailingIcon="/arrow-right.svg"
                  className="font-base w-fit !font-semibold"
                >
                  Learn more
                </BorderlessButton>
            </div>
          
           </div>
        ))}
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="flex flex-row w-full divide-x-3 py-[var(--spacing-xl)] px-[var(--spacing-8xl)] divide-[var(--color-content-secondary)]">
      {homeFeatureCardsData.map((card) => (
        <div
          key={card.id}
          className="flex-1 min-w-0 flex flex-col gap-[var(--spacing-4xl)] px-[var(--spacing-4xl)] py-[var(--spacing-xl)] first:pl-0 last:pr-0"
        >
          <div className="relative w-full h-[340px] overflow-hidden">
            <Image
              src={card.image}
              alt={card.imageAlt}
              fill
              sizes="33vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[var(--spacing-xl)] min-w-0">

            <h3 className="web-heading-lg-bold text-[var(--color-content-primary)]">
              {card.title}
            </h3>

            <p className="web-text-m-medium text-[var(--color-content-primary)] flex-1">
              {card.description}
            </p>

            <BorderlessButton
              variant="primary"
              size="large"
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              trailingIcon="/arrow-right.svg"
              className="font-base w-fit !font-semibold"
            >
              Learn more
            </BorderlessButton>

          </div>
        </div>
      ))}
    </div>
  );
}
