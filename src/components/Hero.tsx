"use client";

import React, { useEffect } from "react";

export default function Hero() {
  let mobile = false;

  useEffect(() => {
    // Check if the viewport width is less than 768px
    if (window.innerWidth < 768) {
      // Mobile-specific code
      mobile = true;
    }
  }, []);
  return (
    <div className="flex flex-col h-[982px] w-full overflow-hidden items-center bg-background-brand pt-[120px] ">
      {/* Content */}
      <div className="flex flex-col items-center w-[80%] m-[var(--spacing-lg)]">
        <div className="w-auto">
          <h1 className="text-white line-height-[112px] sm:text-[72px] lg:text-[104px] font-[var(--font-weight-extrabold)]">
            WE PAINT MURALS
          </h1>

          <p className="text-[42px] self-start text-white">
            on graffiti walls of Jackson Heights, Queens
          </p>
        </div>
        <video
          className="w-auto h-[578px] object-cover pt-16"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              mobile == false ? "/hero-video-web.mp4" : "/hero-video-mobile.mp4"
            }
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
