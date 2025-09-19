import React from "react";

interface HamburgerMenuProps {
  onClick: () => void;
  initialWhite?: boolean; // show white bars on initial load (homepage)
}

export default function HamburgerMenu({
  onClick,
  initialWhite = false,
}: HamburgerMenuProps) {
  const barColorClass = initialWhite ? "bg-white" : "bg-[var(--color-neutral-800)]";

  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col gap-[var(--spacing-xs)] p-[var(--spacing-s)]"
      aria-label="Toggle menu"
    >
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`w-[var(--spacing-xl)] h-[3px] ${barColorClass} rounded-sm transition-all duration-300`}
        />
      ))}
    </button>
  );
}