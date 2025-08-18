"use client";

import React from "react";

export default function ContactSection() {
  return (
    <div className="bg-[var(--color-neutral-200)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[800px] mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-content-primary)] mb-6">
          Ready to Get Started?
        </h2>
        
        <p className="text-lg text-[var(--color-content-secondary)] mb-8">
          We&apos;d love to hear from you! Reach out to us with any questions, ideas, or to discuss how you can get involved with the Jackson Heights Mural Project.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--color-content-primary)] mb-3">
              Email Us
            </h3>
            <p className="text-[var(--color-content-secondary)] mb-4">
              Send us your questions, ideas, or collaboration proposals.
            </p>
            <a
              href="mailto:jhmuralproject@gmail.com"
              className="text-[var(--color-brand-600)] font-medium hover:text-[var(--color-brand-700)] transition-colors duration-200"
            >
              jhmuralproject@gmail.com
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--color-content-primary)] mb-3">
              Follow Our Journey
            </h3>
            <p className="text-[var(--color-content-secondary)] mb-4">
              Stay updated on our latest projects and community events.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/jhmuralproject"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/people/Jackson-Heights-Mural-Project/61563349293857/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-brand-600)] hover:text-[var(--color-brand-700)] transition-colors duration-200"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="bg-[var(--color-brand-600)] text-white p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">
            Join the Jackson Heights Community
          </h3>
          <p className="mb-6">
            Together, we can transform our neighborhood through art, creativity, and community collaboration.
          </p>
          <a
            href="mailto:jhmuralproject@gmail.com?subject=I want to get involved!"
            className="bg-white text-[var(--color-brand-600)] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Get Started Today
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
