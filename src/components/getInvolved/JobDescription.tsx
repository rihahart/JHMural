"use client";

import React from "react";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import jobDescriptionsData from "@/data/getInvolved/jobDescriptionsData";
import BorderlessButton from "../ButtonCollection/BorderlessButton";
export default function JobDescription() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  // Mobile
  if (isMobile) {
    return (
      <div className="w-full border border-[var(--color-content-secondary)] rounded-xs bg-[var(--color-background-primary)]">
        <div className="flex flex-col px-[var(--spacing-lg)] py-[var(--spacing-xl)]">
          {jobDescriptionsData.map((job) => (
            <div key={job.id} className="flex flex-col items-start align-stretch gap-[var(--spacing-lg)]">
              <h2 className="mobile-heading-3xl-bold text-[var(--color-content-primary)]">
                {job.title}
              </h2>
              <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">
                {job.description}
              </p>
              <BorderlessButton
           variant="primary"
           size="small"
           href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up
         </BorderlessButton>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Tablet
  if (isTablet) {
    return (
      <div className="w-full border border-[var(--color-content-secondary)] rounded-xs bg-[var(--color-background-primary)]">
        <div className="flex flex-col max-w-[1024px] mx-auto px-[var(--spacing-xl)] py-[var(--spacing-2xl)]">
          {jobDescriptionsData.map((job) => (
            <div key={job.id} className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
              <h2 className="web-heading-xl-bold text-[var(--color-content-primary)]">
                {job.title}
              </h2>
              <p className="web-text-lg-medium text-[var(--color-content-primary)]">
                {job.description}
              </p>
              <BorderlessButton
           variant="primary"
           size="large"
           href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up
         </BorderlessButton>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop 1440px
  if (isDesktop1440px) {
    return (
      <div className="w-full border border-[var(--color-content-secondary)] rounded-xs bg-[var(--color-background-primary)]">
        <div className="flex flex-col px-[var(--spacing-2xl)] py-[var(--spacing-2xl)] gap-[var(--spacing-4xl)]">
          {jobDescriptionsData.map((job) => (
            <div key={job.id} className="flex flex-col items-start align-stretch gap-[var(--spacing-xl)]">
              <h2 className="web-heading-xl-bold text-[var(--color-content-primary)]">
                {job.title}
              </h2>
              <p className="web-text-xl-medium text-[var(--color-content-primary)]">
                {job.description}
              </p>
              <BorderlessButton
           variant="primary"
           size="large"
           href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up
         </BorderlessButton>
         </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop 1440px+
  return (
    <div className="w-full border border-[var(--color-content-secondary)] bg-[var(--color-background-primary)]">
      <div className="flex flex-col px-[var(--spacing-3xl)] py-[var(--spacing-3xl)] gap-[var(--spacing-3xl)]">
        {jobDescriptionsData.map((job) => (
          <div key={job.id} className="flex flex-col items-start align-stretch gap-[var(--spacing-2xl)]">
            <h2 className="web-heading-2xl-bold text-[var(--color-content-primary)]">
              {job.title}
            </h2>
            <p className="web-text-2xl-medium text-[var(--color-content-primary)]">
              {job.description}
            </p>
            <BorderlessButton
           variant="primary"
           size="large"
           href="https://docs.google.com/forms/d/e/1FAIpQLSdbSZQgmdehq9oPOU-gDxMxK9otBDpDhuIYUpZ2r8QC65AVkw/viewform"
           target="_blank"
           rel="noopener noreferrer"
           trailingIcon="/arrow-right.svg"
           className="font-base">
           Sign up
         </BorderlessButton>
          </div>
        ))}
      </div>
    </div>
  );
}

