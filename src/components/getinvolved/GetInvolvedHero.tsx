"use client";

import React from "react";

export default function GetInvolvedHero() {
  return (
    <div className="bg-[var(--color-brand-600)] px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Get Involved with Jackson Heights
        </h1>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join our community of artists, supporters, and volunteers working to transform Jackson Heights through beautiful murals and public art. There are many ways to be part of this amazing project!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:jhmuralproject@gmail.com"
            className="bg-white text-[var(--color-brand-600)] px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
          >
            Contact Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
          <a
            href="https://www.gofundme.com/f/JHmuralproject"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-[var(--color-brand-600)] transition-colors duration-200 flex items-center gap-2"
          >
            Support Us
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
