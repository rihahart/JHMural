"use client";

import React from "react";
import jobDescriptionsData from "@/data/getInvolved/jobDescriptionsData";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
export default function JobDescription() {
  return (
    <div className="w-full border border-[var(--color-content-secondary)] rounded-xs md:rounded-none bg-[var(--color-background-primary)]">
      <div className="flex flex-col px-[var(--spacing-lg)] md:px-[var(--spacing-3xl)] py-[var(--spacing-xl)] md:py-[var(--spacing-3xl)] gap-[var(--spacing-3xl)]">
        {jobDescriptionsData.map((job) => (
          <div key={job.id} className="flex flex-col items-start align-stretch gap-[var(--spacing-lg)] md:gap-[var(--spacing-2xl)]">
            <h2 className="mobile-heading-3xl-bold md:web-heading-2xl-bold text-[var(--color-content-primary)]">
              {job.title}
            </h2>
            <p className="mobile-text-lg-medium md:web-text-2xl-medium text-[var(--color-content-primary)]">
              {job.description}
            </p>
            <div className="md:hidden">
              <BorderlessButton
                variant="primary"
                size="small"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                trailingIcon="/arrow-right.svg"
                className="font-base"
              >
                Sign up
              </BorderlessButton>
            </div>
            <div className="hidden md:block">
            <BorderlessButton
              variant="primary"
              size="large"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              trailingIcon="/arrow-right.svg"
              className="font-base"
            >
              Sign up
            </BorderlessButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

