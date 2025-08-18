"use client";

import React from "react";
import SupportersHero from "../../components/supporters/SupportersHero";
import OrganizationSupporters from "../../components/supporters/OrganizationSupporters";
import IndividualSupporters from "../../components/supporters/IndividualSupporters";
import JoinSupporters from "../../components/supporters/JoinSupporters";
import GetInvolvedSection from "../../components/supporters/GetInvolvedSection";

export default function Supporters() {
  return (
    <div className="w-full min-h-screen">
      <SupportersHero />
      <OrganizationSupporters />
      <IndividualSupporters />
      <GetInvolvedSection />
    </div>
  );
}
