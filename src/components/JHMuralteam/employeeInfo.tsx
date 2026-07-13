'use client'
import React from "react";
import Image from "next/image";
import { employeeData } from "@/data/employeeData";

export default function EmployeeInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--spacing-4xl)] md:gap-[var(--spacing-8xl)] w-full">
      {employeeData.map((employee) => (
        <div key={employee.id} className="flex flex-col w-full gap-[var(--spacing-s)] md:gap-[var(--spacing-m)] overflow-hidden">
          <div className="relative w-full h-[300px] md:h-[330px]">
            <Image
              src={employee.image}
              alt={employee.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={employee.imagePosition ? { objectPosition: employee.imagePosition } : undefined}
              priority
            />
          </div>
          <div className="flex flex-col justify-center gap-[var(--spacing-lg)] md:gap-[var(--spacing-xl)] py-[var(--spacing-lg)] md:py-[var(--spacing-2xl)] px-0 md:px-[var(--spacing-lg)] w-full border-0 md:border">
            <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
              <h3 className="mobile-heading-4xl-bold md:web-heading-2xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
              <p className="mobile-text-lg-semibold md:web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
            </div>
            <p className="mobile-text-lg-medium md:web-text-lg-regular text-[var(--color-content-primary)]">{employee.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
