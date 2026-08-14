"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { employeeData } from "@/data/employeeData";

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

function getRows() {
  const rows: (typeof employeeData)[] = [];
  for (let i = 0; i < employeeData.length; i += 2) {
    rows.push(employeeData.slice(i, i + 2));
  }
  return rows;
}

export default function EmployeeInfo() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="flex flex-col w-full gap-[var(--spacing-5xl)] min-w-0">
        {employeeData.map((employee, index) => (
          <div
            key={employee.id}
            className="flex flex-col w-full gap-[var(--spacing-xl)] overflow-hidden"
          >
            <div className="relative w-full h-full min-h-[300px]">
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
            <div className="flex flex-col gap-[var(--spacing-lg)] px-[var(--spacing-xs)] pb-[var(--spacing-lg)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className="mobile-heading-3xl-bold text-[var(--color-content-primary)]">
                  {employee.name}
                </h3>
                <p className="mobile-text-s-semibold text-[var(--color-content-secondary)]">
                  {employee.title}
                </p>
              </div>
              <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                {employee.description}
              </p>
            </div>
            {index < employeeData.length - 1 && (
              <div className="w-full h-[4px] bg-[var(--color-content-secondary)]" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="flex flex-col w-full gap-[var(--spacing-8xl)] min-w-0">
        {employeeData.map((employee, index) => (
          <div
            key={employee.id}
            className="flex flex-col w-full gap-[var(--spacing-3xl)] overflow-hidden"
          >
            <div className="relative w-full h-[450px]">
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
            <div className="flex flex-col gap-[var(--spacing-xl)] px-[var(--spacing-s)] pb-[var(--spacing-2xl)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-s)]">
                <h3 className="web-heading-lg-bold text-[var(--color-content-primary)]">
                  {employee.name}
                </h3>
                <p className="web-text-s-semibold text-[var(--color-content-secondary)]">
                  {employee.title}
                </p>
              </div>
              <p className="web-text-m-medium text-[var(--color-content-primary)]">
                {employee.description}
              </p>
            </div>
            {index < employeeData.length - 1 && (
              <div className="w-full h-[4px] bg-[var(--color-content-secondary)]" />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (width <= 1600) {
    const rows = getRows();
    return (
      <div className="flex flex-col items-start gap-[var(--spacing-10xl)] w-full min-w-0">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex items-start  gap-[var(--spacing-6xl)] w-full"
          >
            {row.map((employee, index) => (
              <React.Fragment key={employee.id}>
                <div className="flex flex-col w-full flex-1 p-[var(--spacing-lg)] min-w-0 gap-[var(--spacing-s)]">
                  <div className="relative w-full h-[375px]">
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
                  <div className="flex flex-col items-start py-[var(--spacing-xl)] px-[var(--spacing-s)] gap-[var(--spacing-lg)]">
                    <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                      <h3 className="web-heading-lg-bold text-[var(--color-content-primary)]">
                        {employee.name}
                      </h3>
                      <p className="web-text-s-semibold text-[var(--color-content-secondary)]">
                        {employee.title}
                      </p>
                    </div>
                    <p className="web-text-m-medium text-[var(--color-content-primary)]">
                      {employee.description}
                    </p>
                  </div>
                </div>
                {index < row.length - 1 && (
                  <div className="border-l-4 border-[var(--color-content-secondary)] self-stretch" />
                )}
              </React.Fragment>
            ))}
            {row.length < 2 && (
              <>
                <div className="border-l-0 border-[var(--color-content-primary)] self-stretch" />
                <div className="flex-1" />
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  // large desktop (> 1600px)
  const rows = getRows();
  return (
    <div className="flex flex-col items-start gap-[var(--spacing-12xl)] w-full min-w-0">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex items-start gap-[var(--spacing-8xl)] pb-[var(--spacing-2xl)] w-full"
        >
          {row.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <div className="flex flex-col w-full flex-1 p-[var(--spacing-xl)] min-w-0 gap-[var(--spacing-m)]">
                <div className="relative w-full h-[450px]">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    fill
                    sizes="40vw"
                    className="object-cover"
                    style={
                      employee.imagePosition
                        ? { objectPosition: employee.imagePosition }
                        : undefined
                    }
                    priority
                  />
                </div>
                <div className="flex flex-col items-start py-[var(--spacing-2xl)] px-[var(--spacing-m)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                    <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">
                      {employee.name}
                    </h3>
                    <p className="web-text-m-semibold text-[var(--color-content-secondary)]">
                      {employee.title}
                    </p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {employee.description}
                  </p>
                </div>
              </div>
              {index < row.length - 1 && (
                <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
              )}
            </React.Fragment>
          ))}
          {row.length < 2 && (
            <>
              <div className="border-l-0 border-[var(--color-content-primary)] self-stretch" />
              <div className="flex-1" />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
