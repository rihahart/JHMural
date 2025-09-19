"use client";
import React, { forwardRef, useEffect, useRef } from "react";
import Link from "next/link";

interface WebMenuProps {
  isOpen: boolean;
  submenu: Array<{ name: string; href: string }>;
  onMenuEnter?: () => void; // keep open while hovered
  onMenuLeave?: () => void; // schedule close when leaving
}

/**
 * Forward the menu DOM node to the parent so it can check outside-click
 * with `menuRef.contains(event.target)`. Also exposes hover callbacks.
 */
const WebMenu = forwardRef<HTMLDivElement, WebMenuProps>(function WebMenu(
  { isOpen, submenu, onMenuEnter, onMenuLeave },
  ref
) {
  const localRef = useRef<HTMLDivElement | null>(null);

  // Wire up the forwarded ref
  useEffect(() => {
    if (!ref) return;
    if (typeof ref === "function") {
      ref(localRef.current);
    } else {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = localRef.current;
    }
  }, [ref, isOpen]);

  // Autofocus first item when opened (nice for keyboard)
  const firstItemRef = useRef<HTMLAnchorElement | null>(null);
  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => firstItemRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={localRef}
      role="menu"
      aria-label="Section menu"
      data-dropdown-menu
      className="fixed top-[80px] left-0 right-0 w-screen z-[9999] bg-[#f9fbfc] shadow-lg"
      onMouseEnter={onMenuEnter}
      onMouseLeave={onMenuLeave}
    >
      <div className="px-8 grid grid-cols-3 gap-x-6">
        {/* Items column (2/3 width) */}
        <div
          className="grid pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] col-span-2 relative"
          style={{ height: "350px" }}
        >
          <div className="flex flex-col gap-y-4 w-fit gap-x-16">
            {submenu.map((s, i) => (
              <Link
                key={s.name}
                href={s.href}
                role="menuitem"
                ref={i === 0 ? firstItemRef : undefined}
                className="block rounded-full w-fit px-4 py-2 outline-none transition-all duration-200
                           text-[var(--color-content-primary)]
                           hover:bg-[var(--color-background-hover)]
                           focus-visible:ring-2 focus-visible:ring-[var(--color-brand-500)] focus-visible:ring-offset-2"
              >
                {s.name}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="absolute right-0 w-px h-3/4 translate-y-1/8 bg-[var(--color-content-secondary-inverse)]" />
        </div>

        {/* Right column (optional) */}
        <div className="pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)]" />
      </div>
    </div>
  );
});

export default WebMenu;
