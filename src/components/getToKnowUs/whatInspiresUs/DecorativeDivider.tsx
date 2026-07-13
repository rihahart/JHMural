"use client";

import React from "react";
import Image from "next/image";

export default function DecorativeDivider() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[1600px] gap-[var(--spacing-sm)] md:gap-[var(--spacing-lg)]">
    <div className="flex-1 h-1 md:h-2 bg-[var(--color-content-positive)]" />
     <div className="flex-shrink-0 px-[var(--spacing-m)]">
       <Image
         src="/Tulip64.svg"
         alt="Tulip decoration"
         width={64}
         height={64}
         aria-hidden
         className="w-[34px] h-[34px] md:w-[64px] md:h-[64px]"
         style={{ transform: 'rotate(-50.972deg)' }}
       />
     </div>
    <div className="flex-1 h-1 md:h-2 bg-[var(--color-border-positive)]" />
  </div>
  );
}
