"use client";

import React from "react";

export default function WaysToGetInvolved() {
  const ways = [
    {
      title: "Artists: Let's Collaborate",
      description: "Are you a local artist interested in creating large-scale murals? We're always looking for talented artists to collaborate with on community projects.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5H9a2 2 0 00-2 2v10a4 4 0 004 4h6a2 2 0 002-2V7a2 2 0 00-2-2z" />
        </svg>
      ),
      action: "Apply to Collaborate",
      href: "mailto:jhmuralproject@gmail.com?subject=Artist Collaboration Inquiry"
    },
    {
      title: "Got a Wall to Paint?",
      description: "Do you own or manage a property with a wall that could use some beautiful art? Let us know about potential mural locations in Jackson Heights.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      action: "Submit Location",
      href: "mailto:jhmuralproject@gmail.com?subject=Mural Location Submission"
    },
    {
      title: "Volunteer with Us",
      description: "Help us with events, outreach, fundraising, or mural painting days. We always need volunteers with good vibes and community spirit!",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      action: "Join Our Team",
      href: "mailto:jhmuralproject@gmail.com?subject=Volunteer Interest"
    },
    {
      title: "Support Our Mission",
      description: "Every donation helps us purchase materials, pay artists fairly, and expand our mural program throughout Jackson Heights.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      action: "Donate Now",
      href: "https://www.gofundme.com/f/JHmuralproject"
    },
    {
      title: "Spread the Word",
      description: "Follow us on social media, share our posts, and help spread awareness about our community mural projects.",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011-1h2a1 1 0 011 1v3M7 4H5a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1h-2M7 4h10M9 9h6m-6 4h6m-7 4h8" />
        </svg>
      ),
      action: "Follow Us",
      href: "https://www.instagram.com/jhmuralproject"
    },
    {
      title: "Community Feedback",
      description: "Share your ideas, suggestions, or feedback about existing murals and future projects. Your voice matters to us!",
      icon: (
        <svg className="w-8 h-8 text-[var(--color-brand-600)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      action: "Share Feedback",
      href: "mailto:jhmuralproject@gmail.com?subject=Community Feedback"
    }
  ];

  return (
    <div className="bg-white px-6 py-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-content-primary)] mb-4">
            Ways to Get Involved
          </h2>
          <p className="text-lg text-[var(--color-content-secondary)] max-w-2xl mx-auto">
            Whether you're an artist, property owner, volunteer, or community supporter, there's a place for you in our mission.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <div key={index} className="bg-[var(--color-neutral-100)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4">
                {way.icon}
                <h3 className="text-xl font-semibold text-[var(--color-content-primary)]">
                  {way.title}
                </h3>
              </div>
              
              <p className="text-[var(--color-content-secondary)] mb-6 leading-relaxed">
                {way.description}
              </p>
              
              <a
                href={way.href}
                target={way.href.startsWith('http') ? '_blank' : undefined}
                rel={way.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 text-[var(--color-brand-600)] font-medium hover:text-[var(--color-brand-700)] transition-colors duration-200"
              >
                {way.action}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
