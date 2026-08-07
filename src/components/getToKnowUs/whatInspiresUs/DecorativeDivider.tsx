"use client";

import React from "react";
import Image from "next/image";

export default function DecorativeDivider() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-sm)] md:gap-[var(--spacing-m)] lg:gap-[var(--spacing-lg)]">
      <div className="flex-1 h-1 md:h-1.5 lg:h-2 bg-[var(--color-content-secondary)]" />
      <div className="flex-shrink-0 px-[var(--spacing-m)]">
        <Image
          src="/Tulip64.svg"
          alt="Tulip decoration"
          width={64}
          height={64}
          aria-hidden
          className="w-[34px] h-[34px] md:w-[54px] md:h-[54px] lg:w-[64px] lg:h-[64px]"
          style={{ transform: "rotate(-50.972deg)" }}
        />
      </div>
      <div className="flex-1 h-1 md:h-1.5 lg:h-2 bg-[var(--color-content-secondary)]" />
    </div>
  );
}
