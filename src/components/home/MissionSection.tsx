"use client";

import React from "react";
import Image from "next/image";

export default function MissionSection() {
  return (
    <div className="bg-[var(--color-neutral-200)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-content-primary)] mb-6">
              Our mission is to{" "}
              <span className="inline-flex items-center gap-2">
                inspire,
                <Image src="/Riha.jpg" alt="Inspire" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 rounded object-cover" />
              </span>{" "}
              <span className="inline-flex items-center gap-2">
                empower,
                <Image src="/Suzanne.jpeg" alt="Empower" width={64} height={64} className="w-12 h-12 md:w-16 md:h-16 rounded object-cover" />
              </span>{" "}
              and connect people to change their world.
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button className="text-[var(--color-brand-600)] text-lg font-medium hover:text-[var(--color-brand-700)] transition-colors duration-200 flex items-center gap-2">
                About us
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
