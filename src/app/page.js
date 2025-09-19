"use client";

import React from "react";
import Hero from "../components/home/Hero";
import CollaborationSection from "../components/home/CollaborationSection";
import DonationSection from "../components/home/DonationSection";
import ContentSections from "../components/home/ContentSections";

export default function RootHome() {
  return (
    <div className="w-full min-h-screen">
      <Hero />
      <CollaborationSection />
      <DonationSection />
      <ContentSections />
    </div>
  );
} 