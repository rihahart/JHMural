"use client";
import React from "react";
import Link from "next/link";

interface WebMenuProps {
  isOpen: boolean;
  isInitialLoad: boolean;
  submenu: Array<{
    name: string;
    href: string;
  }>;
}

export default function WebMenu({ isOpen, isInitialLoad, submenu }: WebMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[80px] left-0 right-0 mt-0 w-screen z-40 bg-[#f9fbfc] shadow-lg">
      <div className="px-8 grid grid-cols-3 gap-x-6">
        {/* Give two columns to the list items*/}
        <div className="grid pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] col-span-2 relative" style={{ height: '350px' }}>
          {/* dynamic height - flex wrap the items to show 3 items per row */}
          <div className="flex flex-col gap-y-4 w-fit gap-x-16">
            {submenu.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="block hover:cursor-pointer rounded-full w-fit p-2 transition-all duration-200 text-[var(--color-content-primary)] hover:bg-[var(--color-background-hover)]"
              >
                {subItem.name}
              </Link>
            ))}
          </div>
          {/* vertical line */}
          <div className="absolute right-0 w-px h-3/4 translate-y-1/8 bg-[var(--color-content-secondary-inverse)]" />
        </div>
      </div>
    </div>
  );
}
