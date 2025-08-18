"use client";

import React from "react";
import GetInvolvedHero from "../../components/getinvolved/GetInvolvedHero";
import WaysToGetInvolved from "../../components/getinvolved/WaysToGetInvolved";
import ContactSection from "../../components/getinvolved/ContactSection";

export default function GetInvolved() {
  return (
    <div className="w-full min-h-screen">
      <GetInvolvedHero />
      <WaysToGetInvolved />
      <ContactSection />
    </div>
  );
} 