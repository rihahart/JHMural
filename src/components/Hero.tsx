"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion} from "framer-motion";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null); 
  const words = ["WE", "PAINT", "MURALS"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
     
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // handle autoplay restrictions silently
        });
      }
    }, 1550);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
  ref={heroRef}
  className="flex flex-col w-full min-h-[calc(100vh-4rem)] pt-[4rem] items-center justify-center bg-[var(--color-background-brand)] px-[var(--spacing-4xl)] py-[var(--spacing-2xl)] md:py-[var(--spacing-4xl)]"
>
      <div
        className="flex flex-col items-center w-full gap-[var(--spacing-xl)] max-w-[1280px]"
      >
        {/* Text Section */}
        <div className="w-full text-start">
          <h1 className="text-[clamp(2.5rem,8vw,11rem)] font-bold leading-none tracking-[0.005em] text-[var(--color-content-primary-inverse)] transition-all duration-300 ease-in-out">
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
            className="text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--color-content-primary-inverse)] mt-[var(--spacing-m)] transition-all duration-300 ease-in-out"
          >
            on lonely walls of Jackson Heights, Queens.
          </motion.p>
        </div>

        {/* Video Section */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.5,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
  
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
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
