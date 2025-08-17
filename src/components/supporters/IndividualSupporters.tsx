"use client";

import React from "react";

export default function IndividualSupporters() {
  const supporters = [
    "Jonathan Baillie Strong",
    "Jason Mei",
    "Storm Hurwitz",
    "Nancy Ryerson",
    "Carlos Luna",
    "Suzanne Adler",
    "Hunter Kennedy",
    "Tahima Begum",
    "Thomas Christmann",
    "Liat Krawczyk",
    "Jessie Cozza",
    "Steven R Rose",
    "Ernestine Manning",
    "Kim Cummings",
    "Jessie Bruah",
    "Isaac Lyles",
    "Jonathan Grass",
    "Daniel Contreras",
    "Joshua Brustein",
    "Aideen Kane",
    "Cordelia Persen",
    "Joseph Sebring",
    "William Bruno",
    "Dewen Kong",
    "Jeanette Duffy",
    "Jen Dang"
  ];

  // Remove duplicate "Thomas Christmann" and sort alphabetically
  const uniqueSupporters = [...new Set(supporters)].sort();

  return (
    <div className="bg-[var(--color-neutral-200)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-content-primary)] mb-4">
            Individual Supporters
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-content-secondary)] max-w-2xl mx-auto mb-8">
            Amazing individuals who believe in the power of community art and support our mission.
          </p>
          <div className="inline-flex items-center gap-2 text-[var(--color-brand-600)] font-semibold">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>{uniqueSupporters.length} supporters and counting!</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {uniqueSupporters.map((supporter, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-[var(--color-neutral-300)]">
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 bg-[var(--color-brand-600)] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {supporter.split(' ').map(name => name[0]).join('')}
                  </span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--color-content-primary)] text-sm truncate">
                    {supporter}
                  </h3>
                  <p className="text-[var(--color-content-secondary)] text-xs">
                    Community Supporter
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
