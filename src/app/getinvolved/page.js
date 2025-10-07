"use client";

import React from "react";
import WaysToGetInvolved from "@/components/Volunteer/WaysToGetInvolved";
import ContactSection from "@/components/Volunteer/ContactSection";

export default function GetInvolved() {
  return (
    <div className="w-full min-h-screen">
      <WaysToGetInvolved />
      <ContactSection />
    </div>
  );
}
