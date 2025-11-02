"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  url: string;
}

interface ExhibitionBoxProps {
  exhibition: Exhibition;
}

export default function ExhibitionBox({ exhibition }: ExhibitionBoxProps) {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="flex flex-col border border-[var(--color-border-primary)] w-full">
        {/* Exhibition details */}
        <div className=" px-[var(--spacing-m)] py-[var(--spacing-m)] flex flex-col justify-center gap-[var(--spacing-m)] w-full min-w-0">
          <h3 className="mobile-heading-2xl-bold text-[var(--color-content-primary)] truncate w-full">
            {exhibition.title}
          </h3>
           <div className="flex flex-col gap-[var(--spacing-xs)]">
             <p className="mobile-text-m-medium text-[var(--color-content-primary)] break-words">
               {exhibition.startTime}
             </p>
             <p className="mobile-text-m-medium text-[var(--color-content-primary)] break-words">
               {exhibition.location}
             </p>
           </div>
        </div>
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex border items-center border-[var(--color-border-primary)] gap-[var(--spacing-2xl)] px-[var(--spacing-lg)] py-[var(--spacing-lg)] w-full">
        {/* Exhibition details */}
        <div className="flex flex-col justify-center items-start gap-[var(--spacing-m)] w-full min-w-0">
          <h3 className="web-heading-m-bold text-[var(--color-content-primary)] truncate w-full">
            {exhibition.title}
          </h3>
          <div className="flex flex-col gap-[var(--spacing-xs)]">
            <p className="web-text-m-medium text-[var(--color-content-primary)] break-words">
              {exhibition.startTime}
            </p>
            <p className="web-text-m-medium text-[var(--color-content-primary)] break-words">
              {exhibition.location}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="flex border items-center border-[var(--color-border-primary)] gap-[var(--spacing-2xl)]  px-[var(--spacing-lg)] py-[var(--spacing-lg)] w-full">
        {/* Exhibition details */}
        <div className="flex flex-col justify-center items-start gap-[var(--spacing-m)] w-full min-w-0">
          <h3 className="web-heading-m-bold text-[var(--color-content-primary)] truncate w-full">
            {exhibition.title}
          </h3>
          <div className="flex flex-col gap-[var(--spacing-xs)]">
          <p className="web-text-m-medium text-[var(--color-content-primary)] break-words">
            {exhibition.startTime}
          </p>
          <p className="web-text-m-medium text-[var(--color-content-primary)] break-words">
            {exhibition.location}
          </p>
          </div>
          </div>
        </div>
    );
  }

  // Desktop (1440px+)
  return (
    <div className="w-full flex border items-center border-[var(--color-border-primary)] min-w-0">
      {/* Exhibition details */}
      <div className=" flex flex-col px-[var(--spacing-xl)] py-[var(--spacing-m)] gap-[var(--spacing-lg)] justify-center w-full min-w-0">
          <h3 className="web-heading-lg-bold text-gray-900 truncate w-full">
            {exhibition.title}
          </h3>
        <div className="flex flex-col gap-[var(--spacing-xs)]">
        <p className="web-text-lg-medium text-[var(--color-content-primary)] break-words">
          {exhibition.startTime}
        </p>
        <p className="web-text-lg-medium text-[var(--color-content-primary)] break-words">
          {exhibition.location}
          </p>
        </div>
       
      </div>
    </div>
  );
}
