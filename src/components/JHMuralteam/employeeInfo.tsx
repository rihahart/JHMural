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
        <h2 className="mobile-heading-5xl-bold text-[var(--color-content-primary)] w-full">
          Behind the scenes team
        </h2>
        {employeeData.map((employee) => (
          <div key={employee.id} className="flex flex-col w-full gap-[var(--spacing-s)] overflow-hidden">
            <div className="relative w-full h-[200px]">
              <Image
                src={employee.image}
                alt={employee.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col justify-center gap-[var(--spacing-lg)] py-[var(--spacing-lg)] w-full">
              <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                <h3 className=" mobile-heading-4xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                <p className="mobile-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
              </div>
              <p className="mobile-text-lg-medium  text-[var(--color-content-primary)]">
                {employee.description.split('Arc Residential Team').map((part, i, arr) => 
                  i === arr.length - 1 ? part : (
                    <React.Fragment key={i}>
                      {part}
                          {employee.arcLink && (
                        <a 
                          href={employee.arcLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="underline text-[var(--color-content-primary)]"
                        >
                          Arc Residential Team
                        </a>
                      )}
                      {!employee.arcLink && 'Arc Residential Team'}
                    </React.Fragment>
                  )
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (isTablet) {
    return (
      <div className="flex flex-col gap-[var(--spacing-6xl)] w-full h-auto">
        <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
          Behind the scenes team
        </h2>
        {employeeData.map((employee) => (
          <div key={employee.id} className="flex flex-col w-full py-[var(--spacing-xl)] gap-[var(--spacing-m)] overflow-hidden h-auto">
            <div className="relative w-full h-[300px]">
              <Image
                src={employee.image}
                alt={employee.name}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="flex flex-col px-[var(--spacing-lg)] items-start  py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {employee.description.split('Arc Residential Team').map((part, i, arr) => 
                      i === arr.length - 1 ? part : (
                        <React.Fragment key={i}>
                          {part}
                          {employee.arcLink && (
                        <a 
                          href={employee.arcLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="underline text-[var(--color-content-primary)]"
                        >
                          Arc Residential Team
                        </a>
                      )}
                          {!employee.arcLink && 'Arc Residential Team'}
                        </React.Fragment>
                      )
                    )}
                  </p>
                </div>
          </div>
        ))}
      </div>
    );
  }

  if (isDesktop1440px) {
    const firstTwoEmployees = employeeData.slice(0, 2);
    const thirdEmployee = employeeData[2];
    
    return (
      <div className="flex flex-col items-start gap-[var(--spacing-6xl)] w-full">
      <h2 className="web-heading-5xl-bold text-[var(--color-content-primary)]">
        Behind the scenes team
      </h2>
      
      {/* First row - First two employees */}
      <div className="flex items-start gap-[var(--spacing-6xl)] w-full">
        <>
          {firstTwoEmployees.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <div className="flex items-start gap-[var(--spacing-2xl)] flex-1">
                <div className="flex flex-col w-full align-center px-[var(--spacing-s)] align-start py-[var(--spacing-lg)] gap-[var(--spacing-s)]">
                <div className="relative w-full h-[250px] ">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {employee.description.split('Arc Residential Team').map((part, i, arr) => 
                      i === arr.length - 1 ? part : (
                        <React.Fragment key={i}>
                          {part}
                          {employee.arcLink && (
                        <a 
                          href={employee.arcLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="underline text-[var(--color-content-primary)]"
                        >
                          Arc Residential Team
                        </a>
                      )}
                          {!employee.arcLink && 'Arc Residential Team'}
                        </React.Fragment>
                      )
                    )}
                  </p>
                </div>
                </div>
              </div>
              {index < firstTwoEmployees.length - 1 && (
                <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
              )}
            </React.Fragment>
          ))}
        </>
      </div>
      
      {/* Second row - Third employee (Grace) with empty space for future employee */}
      {thirdEmployee && (
        <div className="flex items-start gap-[var(--spacing-6xl)] w-full">
          <div className="flex items-start gap-[var(--spacing-2xl)] flex-1">
            <div className="flex flex-col w-full align-center px-[var(--spacing-s)] align-start py-[var(--spacing-lg)] gap-[var(--spacing-s)]">
              <div className="relative w-full h-[250px]">
                <Image
                  src={thirdEmployee.image}
                  alt={thirdEmployee.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-xl-bold text-[var(--color-content-primary)]">{thirdEmployee.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{thirdEmployee.title}</p>
                </div>
                <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                  {thirdEmployee.description}
                </p>
              </div>
            </div>
          </div>
          {/* Vertical divider */}
          <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
          {/* Empty space for future fourth employee */}
          <div className="flex-1" />
        </div>
      )}
    </div>
    );
  }

  // Large Desktop
  const firstTwoEmployees = employeeData.slice(0, 2);
  const thirdEmployee = employeeData[2];
  
  return (
    <div className="flex flex-col items-start gap-[var(--spacing-8xl)] w-full">
      <h2 className="hero-xs text-[var(--color-content-primary)]">
        Behind the scenes team
      </h2>
      
      {/* First row - First two employees */}
      <div className="flex items-start gap-[var(--spacing-6xl)] w-full">
        <>
          {firstTwoEmployees.map((employee, index) => (
            <React.Fragment key={employee.id}>
              <div className="flex items-start gap-[var(--spacing-6xl)] flex-1">
                <div className="flex flex-col w-full align-center px-[var(--spacing-xl)] align-start py-[var(--spacing-xl)] gap-[var(--spacing-m)]">
                <div className="relative w-full h-[300px] ">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                  <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{employee.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{employee.title}</p>
                  </div>
                  <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                    {employee.description.split('Arc Residential Team').map((part, i, arr) => 
                      i === arr.length - 1 ? part : (
                        <React.Fragment key={i}>
                          {part}
                          {employee.arcLink && (
                        <a 
                          href={employee.arcLink.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="underline text-[var(--color-content-primary)]"
                        >
                          Arc Residential Team
                        </a>
                      )}
                          {!employee.arcLink && 'Arc Residential Team'}
                        </React.Fragment>
                      )
                    )}
                  </p>
                </div>
                </div>
              </div>
              {index < firstTwoEmployees.length - 1 && (
                <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
              )}
            </React.Fragment>
          ))}
        </>
      </div>
      
      {/* Second row - Third employee (Grace) with empty space for future employee */}
      {thirdEmployee && (
        <div className="flex items-start gap-[var(--spacing-6xl)] w-full">
          <div className="flex items-start gap-[var(--spacing-6xl)] flex-1">
            <div className="flex flex-col w-full align-center px-[var(--spacing-xl)] align-start py-[var(--spacing-xl)] gap-[var(--spacing-m)]">
              <div className="relative w-full h-[300px]">
                <Image
                  src={thirdEmployee.image}
                  alt={thirdEmployee.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="flex flex-col px-[var(--spacing-lg)] items-start border-1 border-[var(--color-background-primary)] py-[var(--spacing-2xl)] gap-[var(--spacing-xl)]">
                <div className="flex flex-col items-start gap-[var(--spacing-xs)]">
                  <h3 className="web-heading-2xl-bold text-[var(--color-content-primary)]">{thirdEmployee.name}</h3>
                  <p className="web-text-lg-semibold text-[var(--color-content-secondary)]">{thirdEmployee.title}</p>
                </div>
                <p className="web-text-lg-regular text-[var(--color-content-primary)]">
                  {thirdEmployee.description}
                </p>
              </div>
            </div>
          </div>
          {/* Vertical divider */}
          <div className="border-l-4 border-[var(--color-content-primary)] self-stretch" />
          {/* Empty space for future fourth employee */}
          <div className="flex-1" />
        </div>
      )}
    </div>
  );
}

