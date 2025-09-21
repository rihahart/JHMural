"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ["WE", "PAINT", "MURALS"];

  useEffect(() => {
    const timer = setTimeout(() => {
      // Scroll just enough to hide navbar but keep all blue content visible
      window.scrollTo({ 
        top: 200, // Just past navbar height (~80px) to hide it cleanly
        behavior: "smooth" 
      });

      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col items-center justify-center bg-[var(--color-background-brand)]"
    >
      <div className="flex flex-col items-center self-stretch mt-[var(--spacing-4xl)] px-[var(--spacing-xl)] w-full gap-[var(--spacing-lg)] max-w-[1200px]">
        <div className="w-full flex justify-center items-center">
          <div className="text-left">
            <h1 className="text-[clamp(82px,calc(82px+(78*(100vw-393px)/375)),160px)] font-bold leading-none tracking-[0.005em] text-white transition-all duration-300 ease-in-out">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + i * 0.2,
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-[clamp(24px,calc(24px+(26*(100vw-393px)/375)),50px)] font-medium text-white mt-2"
            >
              on lonely walls of Jackson Heights, Queens
            </motion.p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
            }}
            className="w-[clamp(345px, calc(345px + 530*(100vw - 345px)/655), 875px)]"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            >
              <source
                src="/hero-video-mobile.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
