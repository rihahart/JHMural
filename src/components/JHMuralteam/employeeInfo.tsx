'use client'
import React from "react";
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";
import { employeeData } from "@/data/employeeData";

export default function EmployeeInfo() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile) {
    return (
      <div className="flex flex-col justify-center gap-[var(--spacing-4xl)] w-full">
        {employeeData.map((employee) => (
          <div key={employee.id} className="flex flex-col w-full gap-[var(--spacing-s)] overflow-hidden">
            <div className="relative w-full h-[300px]">
              <Image
                src={employee.image}
                alt={employee.name}
                fill
                className="object-cover"
                style={employee.imagePosition ? { objectPosition: employee.imagePosition } : undefined}
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-[var(--spacing-lg)] py-[var(--spacing-lg)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className="mobile-heading-4xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                <p className="mobile-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
              </div>
              <p className="mobile-text-lg-medium text-[var(--color-content-primary)]">{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col gap-[var(--spacing-6xl)] w-full h-auto">
        {employeeData.map((employee) => (
          <div key={employee.id} className="flex flex-col w-full py-[var(--spacing-xl)] gap-[var(--spacing-m)] overflow-hidden h-auto">
            <div className="relative w-full h-[500px]">
              <Image
                src={employee.image}
                alt={employee.name}
                fill
                className="object-cover"
                style={employee.imagePosition ? { objectPosition: employee.imagePosition } : undefined}
                priority
              />
            </div>
            <div className="flex flex-col px-[var(--spacing-lg)] items-start py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
              </div>
              <p className="web-text-lg-regular text-[var(--color-content-primary)]">{employee.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isDesktop1440px) {
    const rows = [];
    for (let i = 0; i < employeeData.length; i += 2) {
      rows.push(employeeData.slice(i, i + 2));
    }

    return (
      <div className="flex flex-col items-start gap-[var(--spacing-6xl)] w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex items-start gap-[var(--spacing-6xl)] w-full">
            {row.map((employee, index) => (
              <React.Fragment key={employee.id}>
                <div className="flex items-start gap-[var(--spacing-2xl)] flex-1">
                  <div className="flex flex-col w-full align-center px-[var(--spacing-s)] align-start py-[var(--spacing-lg)] gap-[var(--spacing-s)]">
                    <div className="relative w-full h-[450px]">
                      <Image
                        src={employee.image}
                        alt={employee.name}
                        fill
                        className="object-cover"
                style={employee.imagePosition ? { objectPosition: employee.imagePosition } : undefined}
                        priority
                      />
                    </div>
                    <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                      <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                        <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                        <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
                      </div>
                      <p className="web-text-lg-regular text-[var(--color-content-primary)]">{employee.description}</p>
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
    );
  }

  // Large Desktop
  const rows = [];
  for (let i = 0; i < employeeData.length; i += 2) {
    rows.push(employeeData.slice(i, i + 2));
  }

  return (
    <div className="flex flex-col items-start gap-[var(--spacing-8xl)] w-full">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex items-start gap-[var(--spacing-6xl)] w-full">
          {row.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <div className="flex items-start gap-[var(--spacing-6xl)] flex-1">
                <div className="flex flex-col w-full align-center px-[var(--spacing-xl)] align-start py-[var(--spacing-xl)] gap-[var(--spacing-m)]">
                  <div className="relative w-full h-[330px]">
                    <Image
                      src={employee.image}
                      alt={employee.name}
                      fill
                      className="object-cover"
                style={employee.imagePosition ? { objectPosition: employee.imagePosition } : undefined}
                      priority
                    />
                  </div>
                  <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                    <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                      <h3 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                      <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
                    </div>
                    <p className="web-text-lg-regular text-[var(--color-content-primary)]">{employee.description}</p>
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
  );
}
