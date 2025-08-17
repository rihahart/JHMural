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
      className="flex flex-col items-center justify-center bg-[var(--color-brand-600)] px-6 pt-20 pb-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]"
    >
      <div className="flex flex-col items-center w-full gap-8 max-w-[1200px]">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[clamp(4rem,8vw,8.5rem)] font-black leading-none tracking-[0.005em] text-white transition-all duration-300 ease-in-out">
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
              className="text-lg md:text-xl lg:text-2xl font-medium text-white mt-2"
            >
              on graffiti walls of Jackson Heights, Queens.
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
              className="w-full h-full object-cover rounded-lg"
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
