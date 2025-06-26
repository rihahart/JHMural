"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ["WE", "PAINT", "MURALS"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="flex flex-col items-center justify-center bg-[var(--color-background-primary)] px-[var(--spacing-8xl)] py-[var(--spacing-6xl)]"
    >
      <div className="flex flex-col items-center w-full gap-[var(--spacing-6xl)] max-w-[1200px]">
        {/* Text Section */}
        <div className="w-[90%] lg:w-full flex justify-start lg:justify-center">
          <div className="lg:max-w-[1000px] text-start">
            <h1 className="text-[5rem] lg:text-[clamp(4rem,8vw,8.5rem)] font-black leading-none tracking-[0.005em] text-[var(--color-content-primary)] transition-all duration-300 ease-in-out">
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
              className="text-[2rem] lg:text-[clamp(2rem,4vw,2.5rem)] font-semibold text-[var(--color-content-primary)] mt-[var(--spacing-m)] transition-all duration-300 ease-in-out"
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
              key={isMobile ? 'mobile' : 'desktop'}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            >
              <source
                src={isMobile ? "/hero-video-mobile.mp4" : "/MainAnimation.mp4"}
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
