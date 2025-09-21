"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import HeroMobile from "./HeroMobile";

export default function Hero() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const words = ["WE", "PAINT", "MURALS"];

  useEffect(() => {
    // Only apply scroll and video effects on desktop (lg and up)
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      const scrollTimer = setTimeout(() => {
        // Scroll a bit higher to show more content
        window.scrollTo({ 
          top: 280, // Scroll higher to show more content
          behavior: "smooth" 
        });
      }, 1000);

      // Start video 1 second earlier (at 1s instead of 2s)
      const videoTimer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            // Fade in video when it starts playing
            videoRef.current!.style.opacity = '1';
          }).catch(() => {});
        }
      }, 1000);

      return () => {
        clearTimeout(scrollTimer);
        clearTimeout(videoTimer);
      };
    }
  }, []);

  return (
    <>
      {/* Mobile Hero - only on homepage */}
      {isHome && (
        <div className="lg:hidden">
          <HeroMobile />
        </div>
      )}
      
      {/* Desktop Hero */}
      <div
        ref={heroRef}
        className="hidden lg:flex flex-col items-center justify-center bg-[var(--color-background-brand)]"
      >
        <div className="flex flex-col items-center w-full gap-[var(--spacing-xs)] mt-[var(--spacing-6xl)] px-[var(--spacing-xl)] max-w-[1600px]">
        <div className="w-full flex justify-center items-left">
          <div className="flex flex-col items-start gap-[var(--spacing-s)]">
            <h1 className="text-[clamp(100px,calc(100px+(50*(100vw-1025px)/415)),200px)] font-black leading-none tracking-[0.005em] text-white transition-all duration-300 ease-in-out">
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
              className="text-[clamp(32px,calc(32px+(16*(100vw-1025px)/415)),64px)] font-semibold text-[var(--color-content-primary-inverse)] mt-2"
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
            className="w-[clamp(800px,calc(800px+0.723*(100vw-1025px)),1445px)]"
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-lg opacity-0 transition-opacity duration-500"
              muted
              loop
              playsInline
            >
              <source
                src="/MainAnimation.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
      </div>
      </div>
    </>
  );
}
