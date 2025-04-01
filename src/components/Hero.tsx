"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col h-[982px] w-full overflow-hidden items-center bg-background-brand pt-[120px] ">
      {/* Content */}
      <div className="flex flex-col font-acumin-pro-condensed items-center w-[80%] my-[var(--spacing-xl)] mx-[var(--spacing-l)]">
        <div className="w-auto">
          <h1 className="hero-heading text-white mb-l font-acumin-pro-condensed">
            WE PAINT MURALS
          </h1>

          <p className="text-3xl self-start text-white">
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
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
