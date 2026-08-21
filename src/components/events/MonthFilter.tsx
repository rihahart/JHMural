"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface MonthOption {
  key: string;
  label: string;
}

interface MonthFilterProps {
  options: MonthOption[];
  selectedKey: string;
  onSelect: (key: string) => void;
}

// Month label + trailing arrow that opens a full-width panel listing the
// OTHER available months (Figma node 3981:5839 — the currently selected
// month stays as the header label and is not repeated in the list).
export default function MonthFilter({ options, selectedKey, onSelect }: MonthFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const selected = options.find((o) => o.key === selectedKey) ?? options[0];
  const otherOptions = options.filter((o) => o.key !== selectedKey);

  const close = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const open = () => {
    setActiveIndex(0);
    setIsOpen(true);
  };

  // Click outside closes.
  useEffect(() => {
    if (!isOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  // Focus the active option whenever the list opens or the active index changes.
  useEffect(() => {
    if (!isOpen) return;
    const node = listRef.current?.children[activeIndex] as HTMLElement | undefined;
    node?.focus();
  }, [isOpen, activeIndex]);

  const handleButtonKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      open();
    }
  };

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => Math.min(otherOptions.length - 1, i + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(otherOptions[activeIndex].key);
      close();
    } else if (event.key === "Tab") {
      setIsOpen(false);
    }
  };

  return (
    <div ref={rootRef} className="relative w-full flex flex-col">
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? close() : open())}
        onKeyDown={handleButtonKeyDown}
        className="group inline-flex items-center gap-[var(--spacing-m)] w-fit"
      >
        <span className="mobile-heading-5xl-bold text-[var(--color-content-primary)]">
          {selected.label}
        </span>
        <Image
          src="/arrow-right.svg"
          alt=""
          width={24}
          height={24}
          className={`w-[24px] h-[24px] brightness-0 transition-transform duration-200 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        />
      </button>

      <div className="border-t-[4px] border-[var(--color-content-secondary)] w-full mt-[var(--spacing-m)]" />

      {isOpen && otherOptions.length > 0 && (
        <ul
          ref={listRef}
          role="listbox"
          aria-label="Filter events by month"
          tabIndex={-1}
          onKeyDown={handleListKeyDown}
          className="flex flex-col w-full gap-[var(--spacing-4xl)] p-[var(--spacing-lg)] bg-[var(--color-background-hover)]"
        >
          {otherOptions.map((option, index) => (
            <li
              key={option.key}
              role="option"
              aria-selected={false}
              tabIndex={-1}
              onClick={() => {
                onSelect(option.key);
                close();
              }}
              onMouseEnter={() => setActiveIndex(index)}
              className="web-text-3xl-black text-[var(--color-content-primary)] cursor-pointer outline-none w-fit"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
