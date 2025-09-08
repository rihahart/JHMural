"use client";

import React from "react";
import GetInvolvedSection from "../../../components/supporters/GetInvolvedSection";
import IndividualSupporters from "../../../components/supporters/IndividualSupporters";
import JoinSupporters from "../../../components/supporters/JoinSupporters";
import OrganizationSupporters from "../../../components/supporters/OrganizationSupporters";
import SupportersHero from "../../../components/supporters/SupportersHero";

export default function PartnersAndSupporters() {
  return (
    <div className="w-full min-h-screen">
      <SupportersHero />
      <IndividualSupporters />
      <OrganizationSupporters />
      <JoinSupporters />
      <GetInvolvedSection />
    </div>
  );
}
