"use client";

import useWindowWidth from "../_utilities/useWindowWidth";

export default function Projects() {
  const windowWidth = useWindowWidth();

  if (windowWidth > 768) {
    return (
      <div className="flex w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-7xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-[var(--spacing-7xl)]">
        <div className="text-xl-regular text-[var(--color-content-primary)] text-center">
          Coming soon
        </div>
      </div>
    );
  }

  // Mobile layout
  return (
    <div className="flex w-full px-4 pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] flex-col items-center gap-[var(--spacing-4xl)]">
      <div className="text-lg-regular text-[var(--color-content-primary)] text-center">
        Coming soon
      </div>
    </div>
  );
} 