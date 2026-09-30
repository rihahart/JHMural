"use client";

import React from "react";
import EmployeeInfo from "@/components/JHMuralteam/employeeInfo";
import useWindowWidth from "@/app/_utilities/useWindowWidth";

export default function MeetJHMuralTeam() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col w-full items-start justify-centerpt-[var(--spacing-3xl)] pb-[var(--spacing-6xl)] px-[var(--spacing-lg)] gap-[var(--spacing-5xl)]">
          <h1 className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
            Meet JH Mural Team
          </h1>
          <EmployeeInfo />
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col w-full items-start justify-center pt-[var(--spacing-5xl)] pb-[var(--spacing-10xl)] px-[var(--spacing-2xl)] gap-[var(--spacing-5xl)]">
          <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
            Meet JH Mural Team
          </h1>
          <EmployeeInfo />
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col max-w-[1800px] mx-auto items-start justify-center pt-[var(--spacing-7xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-5xl)] gap-[var(--spacing-12xl)]">
          <h1 className="web-heading-3xl-bold text-[var(--color-content-primary)]">
            Meet JH Mural Team
          </h1>
          <EmployeeInfo />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-dvh">
      <div className="flex flex-col max-w-[2000px] mx-auto items-start justify-center pt-[var(--spacing-8xl)] pb-[var(--spacing-12xl)] px-[var(--spacing-6xl)] gap-[var(--spacing-12xl)]">
        <h1 className="web-heading-4xl-bold text-[var(--color-content-primary)]">
          Meet JH Mural Team
        </h1>
        <EmployeeInfo />
      </div>
    </div>
  );
}
