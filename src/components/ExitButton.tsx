import React from "react";

interface ExitButtonProps {
  onClick: () => void;
}

export default function ExitButton({
  onClick,
}: ExitButtonProps) {
  const barColorClass = "bg-[var(--color-neutral-800)]";

  return (
    <button
      onClick={onClick}
      className="lg:hidden flex flex-col gap-[var(--spacing-xs)] p-[var(--spacing-s)]"
      aria-label="Close menu"
    >
      {/* X shape made with two diagonal bars */}
      <div className="relative w-[var(--spacing-2xl)] h-[3px]">
        <div
          className={`absolute w-full h-full ${barColorClass} rounded-sm transition-all duration-300 rotate-45`}
        />
        <div
          className={`absolute w-full h-full ${barColorClass} rounded-sm transition-all duration-300 -rotate-45`}
        />
      </div>
    </button>
  );
}
