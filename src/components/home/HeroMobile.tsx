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
        top: 85, // Just past navbar height (~80px) to hide it cleanly
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
      className="flex flex-col items-center justify-center bg-[var(--color-background-brand)] px-6 pt-12 pb-16 md:pt-16"
    >
      <div className="flex flex-col items-center w-full gap-8 max-w-[1200px]">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-black leading-none tracking-[0.005em] text-white transition-all duration-300 ease-in-out">
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
              className="text-xl md:text-2xl font-medium text-white mt-2"
            >
              on lonely walls of Jackson Heights, Queens.
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
            className="w-[clamp(300px,60vw,1000px)]"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg"
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
