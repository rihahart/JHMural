"use client";

import React from "react";

export default function OrganizationSupporters() {
  const organizations = [
    {
      name: "Jackson Heights Beautification Group",
      description: "Community organization dedicated to beautifying Jackson Heights",
      logoNeeded: true
    },
    {
      name: "Flushing Town Hall",
      description: "Cultural arts center supporting community initiatives",
      logoNeeded: true
    },
    {
      name: "Francisco and Charlie from A.R.T.",
      description: "Local artists and community advocates",
      logoNeeded: false
    }
  ];

  return (
    <div className="bg-white px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-content-primary)] mb-4">
            Partner Organizations
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-content-secondary)] max-w-2xl mx-auto">
            Working together with local organizations to create lasting impact in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <div key={index} className="bg-[var(--color-neutral-200)] p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                {/* Logo placeholder */}
                <div className="w-20 h-20 bg-[var(--color-brand-600)] rounded-full flex items-center justify-center mb-4">
                  {org.logoNeeded ? (
                    <div className="text-white text-xs font-semibold">
                      LOGO<br/>NEEDED
                    </div>
                  ) : (
                    <div className="text-white text-2xl font-bold">
                      {org.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-3">
                  {org.name}
                </h3>
                
                <p className="text-[var(--color-content-secondary)] text-sm">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
