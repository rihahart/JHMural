"use client";

import React from "react";
import Image from "next/image";
import { employeeData } from "@/data/employeeData";

export default function EmployeeInfo() {
  const rows: (typeof employeeData)[] = [];
  for (let i = 0; i < employeeData.length; i += 2) {
    rows.push(employeeData.slice(i, i + 2));
  }

  return (
    <>
      {/* Mobile + tablet: stacked */}
      <div className="flex flex-col gap-[var(--spacing-4xl)] md:gap-[var(--spacing-6xl)] w-full lg:hidden">
        {employeeData.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-col w-full gap-[var(--spacing-s)] md:py-[var(--spacing-xl)] md:gap-[var(--spacing-m)] overflow-hidden"
          >
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src={employee.image}
                alt={employee.name}
                fill
                sizes="100vw"
                className="object-cover"
                style={
                  employee.imagePosition
                    ? { objectPosition: employee.imagePosition }
                    : undefined
                }
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)] py-[var(--spacing-lg)] md:py-[var(--spacing-2xl)] md:px-[var(--spacing-lg)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className="mobile-heading-4xl-bold md:web-heading-xl-bold text-[var(--color-content-primary)]">
                  {employee.name}
                </h3>
                <p className="mobile-text-lg-semibold md:web-text-lg-semibold text-[var(--color-content-secondary)]">
                  {employee.title}
                </p>
              </div>
              <p className="mobile-text-lg-medium md:web-text-lg-regular text-[var(--color-content-primary)]">
                {employee.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: two-column rows with divider */}
      <div className="hidden lg:flex flex-col items-start gap-[var(--spacing-6xl)] xl:gap-[var(--spacing-8xl)] w-full">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-start gap-[var(--spacing-6xl)] w-full"
          >
            {row.map((employee, index) => (
              <React.Fragment key={employee.id}>
                <div className="flex items-start gap-[var(--spacing-2xl)] xl:gap-[var(--spacing-6xl)] flex-1 min-w-0">
                  <div className="flex flex-col w-full px-[var(--spacing-s)] xl:px-[var(--spacing-xl)] py-[var(--spacing-lg)] xl:py-[var(--spacing-xl)] gap-[var(--spacing-s)] xl:gap-[var(--spacing-m)]">
                    <div className="relative w-full h-[450px] xl:h-[330px]">
                      <Image
                        src={employee.image}
                        alt={employee.name}
                        fill
                        sizes="(max-width: 1440px) 50vw, 40vw"
                        className="object-cover"
                        style={
                          employee.imagePosition
                            ? { objectPosition: employee.imagePosition }
                            : undefined
                        }
                        priority
                      />
                    </div>
                    <div className="flex flex-col px-[var(--spacing-lg)] items-start border border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                      <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                        <h3 className="web-heading-xl-bold xl:web-heading-2xl-bold text-[var(--color-content-primary)]">
                          {employee.name}
                        </h3>
                        <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">
                          {employee.title}
                        </p>
                      </div>
                      <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                        {employee.description}
                      </p>
                    </div>
                  </div>
                </div>
                {index < row.length - 1 && (
                  <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
                )}
              </React.Fragment>
            ))}
            {row.length < 2 && (
              <>
                <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
                <div className="flex-1" />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
