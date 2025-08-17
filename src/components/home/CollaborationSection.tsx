"use client";

import React from "react";

export default function CollaborationSection() {
  return (
    <div className="bg-white px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center lg:text-left">
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-[var(--color-content-primary)] mb-8">
            We collaborate with independent artists, paint murals, and create an outdoor art gallery.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[var(--color-brand-800)] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-[var(--color-brand-700)] transition-colors duration-200 flex items-center gap-2">
              Get to know us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
