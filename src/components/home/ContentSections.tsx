"use client";

import React from "react";

export default function ContentSections() {
  return (
    <div className="bg-[var(--color-neutral-200)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Jackson Heights Artist Section */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-[var(--color-content-primary)]">Jackson Heights Artist</h3>
              <button className="text-[var(--color-brand-600)] text-sm hover:text-[var(--color-brand-700)] transition-colors duration-200">
                see all
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-300 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[var(--color-brand-600)] mb-2">
                  Why are Murals Important to the community.
                </h4>
              </div>
              <div className="bg-gray-300 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[var(--color-brand-600)] mb-2">
                  Why are Murals Important to the community.
                </h4>
              </div>
              <div className="bg-gray-300 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[var(--color-brand-600)] mb-2">
                  Why are Murals Important to the community.
                </h4>
              </div>
            </div>
          </div>

          {/* Right Column for Desktop */}
          <div className="lg:block">
            {/* Murals around Jackson Heights */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-4">
                Murals around Jackson Heights
              </h3>
              <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Mural gallery placeholder</span>
              </div>
            </div>

            {/* Jackson Heights Events */}
            <div>
              <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-4">
                Jackson Heights Events.
              </h3>
              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="border border-gray-300 p-3 rounded">
                    <div className="flex gap-3">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[var(--color-content-primary)]">12</div>
                        <div className="text-sm text-gray-600">Oct</div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[var(--color-content-primary)]">Title</h4>
                        <p className="text-sm text-gray-600">5:30pm - 6:30pm</p>
                        <p className="text-sm text-gray-600">Location: XXXXXXX</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only sections */}
        <div className="lg:hidden mt-8 space-y-8">
          {/* Murals around Jackson Heights */}
          <div>
            <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-4">
              Murals around Jackson Heights
            </h3>
            <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Mural gallery placeholder</span>
            </div>
          </div>

          {/* Jackson Heights Events */}
          <div>
            <h3 className="text-xl font-bold text-[var(--color-content-primary)] mb-4">
              Jackson Heights Events.
            </h3>
            <div className="space-y-3">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="border border-gray-300 p-3 rounded">
                  <div className="flex gap-3">
                    <div className="text-center">
                      <div className="text-lg font-bold text-[var(--color-content-primary)]">12</div>
                      <div className="text-sm text-gray-600">Oct</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[var(--color-content-primary)]">Title</h4>
                      <p className="text-sm text-gray-600">5:30pm - 6:30pm</p>
                      <p className="text-sm text-gray-600">Location: XXXXXXX</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
