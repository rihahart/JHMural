"use client";

import MeetOurFounders from "../../components/about/meetOurFounders";
import CoFounderInfo from "../../components/about/coFounderInfo";

export default function About() {
  return (
    <div className="flex w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-12 lg:gap-20 min-h-screen mx-auto">
      {/* Mission and Vision Sections */}
      <div className="w-full max-w-4xl space-y-8 lg:space-y-12">
        {/* Mission Section */}
        <div id="mission" className="text-center space-y-3 lg:space-y-4 scroll-mt-24">
          <h2 className="text-2xl lg:text-4xl font-black text-[var(--color-brand-600)]">
            Mission
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-content-primary)] leading-relaxed">
            The JH Mural Project aims to collaborate with local artists to transform spaces along the Roosevelt Avenue Corridor and throughout Jackson Heights. We want to create large-scale murals and create an open-air, public art gallery for the community.
          </p>
        </div>

        {/* Our Vision Section */}
        <div id="our-vision" className="text-center space-y-3 lg:space-y-4 scroll-mt-24">
          <h2 className="text-2xl lg:text-4xl font-black text-[var(--color-brand-600)]">
            Our Vision
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-content-primary)] leading-relaxed">
            Revitalize public spaces, cultivate creativity, build social connections, and inspire the children of the community.
          </p>
        </div>
      </div>

      <MeetOurFounders />
      <CoFounderInfo />
    </div>
  );
}
