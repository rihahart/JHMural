"use client";

import React from "react";
import Hero from "../components/home/Hero";
import CollaborationSection from "../components/home/CollaborationSection";
import MissionSection from "../components/home/MissionSection";
import DonationSection from "../components/home/DonationSection";
import ContentSections from "../components/home/ContentSections";
import FooterLinks from "../components/home/FooterLinks";

export default function RootHome() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <CollaborationSection />
      <MissionSection />
      <DonationSection />
      <ContentSections />
      <FooterLinks />
    </div>
  );
} 