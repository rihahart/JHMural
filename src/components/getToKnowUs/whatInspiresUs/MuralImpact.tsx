"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ButtonCollection/Button";
import muralImpactData from "@/data/muralImpactData";

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

export default function MuralImpact() {
  const width = useWindowWidth();

  if (width <= 768) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center gap-[var(--spacing-5xl)]  justify-center">
          {muralImpactData.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-[var(--spacing-2xl)] w-full"
            >
              <h2 className="w-full mobile-heading-4xl-bold text-[var(--color-content-primary)]">
                {item.title}
              </h2>
              <div className="flex flex-col items-start gap-[var(--spacing-xl)] w-full">
                    <div className="w-full">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        width={800}
                        height={600}
                        className={`w-full h-[350px] object-cover ${
                          index === 0 ? "object-bottom" : "object-center"
                        }`}
                      />
                      <div className="flex items-center justify-end gap-[var(--spacing-s)] w-full">
                        <span className="flex items-center gap-[var(--spacing-2xs)] mobile-text-xs-regular text-[var(--color-content-secondary)]">
                        {index !== 1 && (
                          <Image src="/Brush.svg" alt="" width={16} height={16} className="w-3 h-3" />
                        )}
                          {item.artistCredit}
                        </span>
                        <span className="flex items-center gap-[var(--spacing-2xs)] mobile-text-xs-regular text-[var(--color-content-secondary)]">
                          {index !== 1 && (
                            <Image src="/Camera.svg" alt="" width={16} height={16} className="w-5 h-5" />
                          )}
                          {item.photoCredit}
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-[var(--spacing-2xl)]">
                      <div className="flex flex-col gap-[var(--spacing-lg)]">
                            <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                              {item.description}
                            </p>
                          {item.description2 && (
                            <p className="mobile-text-m-medium text-[var(--color-content-primary)]">
                              {item.description2}
                            </p>
                      )}
                      </div>
                   </div>   
              </div>  
                {item.cta && (
                  <Button
                    variant="secondary"
                    size="small"
                    href={item.cta.href}
                    trailingIcon="/arrow-right.svg"
                    className="w-full "
                  >
                    {item.cta.label}
                  </Button>
                )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center gap-[var(--spacing-10xl)] justify-center">
         {muralImpactData.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-[var(--spacing-3xl)] w-full"
            >
              <h2 className="w-full web-heading-xl-bold text-[var(--color-content-primary)]">
                {item.title}
              </h2>
              <div className="flex flex-col items-start gap-[var(--spacing-xl)] w-full">
                    <div className="w-full">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        width={800}
                        height={600}
                        className={`w-full h-[450px] object-cover ${
                          index === 0 ? "object-bottom" : "object-center"
                        }`}
                      />
                      <div className="flex items-center justify-end py-[var(--spacing-xs)] gap-[var(--spacing-m)] w-full">
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-xs-regular text-[var(--color-content-secondary)]">
                        {index !== 1 && (
                          <Image src="/Brush.svg" alt="" width={16} height={16} className="w-4 h-4" />
                        )}
                          {item.artistCredit}
                        </span>
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-xs-regular text-[var(--color-content-secondary)]">
                          {index !== 1 && (
                            <Image src="/Camera.svg" alt="" width={16} height={16} className="w-6 h-6" />
                          )}
                          {item.photoCredit}
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-start gap-[var(--spacing-2xl)]">
                      <div className="flex flex-col gap-[var(--spacing-xl)]">
                            <p className="web-text-m-medium text-[var(--color-content-primary)]">
                              {item.description}
                            </p>
                          {item.description2 && (
                            <p className="web-text-m-medium text-[var(--color-content-primary)]">
                              {item.description2}
                            </p>
                      )}
                      </div>
                   </div>   
              </div>  
                {item.cta && (
                  <Button
                    variant="secondary"
                    size="small"
                    href={item.cta.href}
                    trailingIcon="/arrow-right.svg"
                    className="w-fit "
                  >
                    {item.cta.label}
                  </Button>
                )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center p-[var(--spacing-xl)] gap-[var(--spacing-12xl)] justify-center">
          {muralImpactData.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-row items-start justify-center gap-[var(--spacing-10xl)] w-full"
            >
              <div className="w-[50%] order-1">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  width={800}
                  height={600}
                  className={`w-full h-[475px] object-cover ${
                          index === 0 ? "object-bottom" : "object-center"
                        }`}
                />
                 <div className="flex items-center justify-start gap-[var(--spacing-m)] w-full">
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-xs-regular text-[var(--color-content-secondary)]">
                        {index !== 1 && (
                          <Image src="/Brush.svg" alt="" width={16} height={16} className="w-4 h-4" />
                        )}
                          {item.artistCredit}
                        </span>
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-xs-regular text-[var(--color-content-secondary)]">
                          {index !== 1 && (
                            <Image src="/Camera.svg" alt="" width={16} height={16} className="w-6 h-6" />
                          )}
                          {item.photoCredit}
                        </span>
                      </div>
              </div>

              
                    <div className="w-[35%] flex flex-col items-start gap-[var(--spacing-4xl)] p-[var(--spacing-lg)] order-2">

                       <div className="flex flex-col gap-[var(--spacing-2xl)]">
                          <h2 className="web-heading-xl-bold text-[var(--color-content-primary)]">
                            {item.title}
                          </h2>
                        <div className="flex flex-col gap-[var(--spacing-xl)]">  
                          <p className="web-text-m-medium text-[var(--color-content-primary)]">
                            {item.description}
                          </p>
                          {item.description2 && (
                            <p className="web-text-m-medium text-[var(--color-content-primary)]">
                              {item.description2}
                            </p>
                          )}
                        </div>  

                        </div>  

                    {item.cta && (
                      <Button
                        variant="secondary"
                        size="small"
                        href={item.cta.href}
                        trailingIcon="/arrow-right.svg"
                        className="w-fit"
                      >
                        {item.cta.label}
                      </Button>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="w-full min-h-dvh">
        <div className="flex flex-col items-center p-[var(--spacing-4xl)] gap-[var(--spacing-12xl)] justify-center">
          {muralImpactData.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-row items-start justify-center gap-[var(--spacing-12xl)] w-full"
            >
              <div className="w-[50%] px-[var(--spacing-xl)] order-1">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  width={800}
                  height={600}
                  className={`w-full h-[575px] object-cover ${
                          index === 0 ? "object-bottom" : "object-center"
                        }`}
                />
                 <div className="flex items-center justify-start py-[var(--spacing-s)] gap-[var(--spacing-lg)] w-full">
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-s-regular text-[var(--color-content-secondary)]">
                        {index !== 1 && (
                          <Image src="/Brush.svg" alt="" width={16} height={16} className="w-5 h-5" />
                        )}
                          {item.artistCredit}
                        </span>
                        <span className="flex items-center gap-[var(--spacing-xs)] web-text-s-regular text-[var(--color-content-secondary)]">
                          {index !== 1 && (
                            <Image src="/Camera.svg" alt="" width={16} height={16} className="w-7 h-7" />
                          )}
                          {item.photoCredit}
                        </span>
                      </div>
              </div>

              
                    <div className="w-[35%] flex flex-col items-start gap-[var(--spacing-6xl)] p-[var(--spacing-2xl)] order-2">

                       <div className="flex flex-col gap-[var(--spacing-3xl)]">
                          <h2 className="web-heading-2xl-bold text-[var(--color-content-primary)]">
                            {item.title}
                          </h2>
                        <div className="flex flex-col gap-[var(--spacing-2xl)]">  
                          <p className="web-text-lg-medium text-[var(--color-content-primary)]">
                            {item.description}
                          </p>
                          {item.description2 && (
                            <p className="web-text-lg-medium text-[var(--color-content-primary)]">
                              {item.description2}
                            </p>
                          )}
                        </div>  

                        </div>  

                    {item.cta && (
                      <Button
                        variant="secondary"
                        size="small"
                        href={item.cta.href}
                        trailingIcon="/arrow-right.svg"
                        className="w-fit"
                      >
                        {item.cta.label}
                      </Button>
                    )}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
