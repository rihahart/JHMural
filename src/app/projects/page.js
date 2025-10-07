"use client";

import useWindowWidth from "@/app/_utilities/useWindowWidth";

export default function Projects() {
  const windowWidth = useWindowWidth();

  const renderProjectContent = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-6">
            <h1 className="text-3xl lg:text-4xl font-black text-[var(--color-content-primary)]">
              Our Projects
            </h1>
            <p className="text-lg text-[var(--color-content-secondary)]">
              Discover the murals and community art projects we&apos;re bringing to Jackson Heights
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-[var(--color-brand-600)] mb-4">
                84th St Mural
              </h2>
              <p className="text-lg text-[var(--color-content-primary)] mb-4">
                &ldquo;Welcome to Jackson Heights: a Celebration of Diversity, Solidarity and Community&rdquo;
              </p>
              <p className="text-[var(--color-content-secondary)] mb-4">
                by Eli Salome-Diaz and Benny Guerra
              </p>
              <p className="text-[var(--color-content-primary)]">
                A vibrant mural celebrating the diversity and community spirit of Jackson Heights, 
                transforming a neglected space into a beacon of hope and unity.
              </p>
              <div className="mt-4">
                <a 
                  href="/projects/84th-street-mural" 
                  className="inline-flex items-center text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] font-medium transition-colors duration-200"
                >
                  Learn more about this project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
  };

  if (windowWidth > 768) {
    return (
      <div className="flex w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col min-h-screen">
        {/* Project Content */}
        <div className="flex-1">
          {renderProjectContent()}
        </div>
      </div>
    );
  }

  // Mobile layout
  return (
    <div className="flex w-full px-4 pt-[var(--spacing-4xl)] pb-[var(--spacing-4xl)] flex-col min-h-screen">
      {/* Project Content */}
      <div className="flex-1">
        {renderProjectContent()}
      </div>
    </div>
  );
} 