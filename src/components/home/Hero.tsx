"use client";

import React, { useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const WORDS = ["WE", "PAINT", "MURALS"];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      let handleEnded: (() => void) | null = null;
      const videoTimer = setTimeout(() => {
        if (video) {
          video.play().then(() => {
            video.style.opacity = '1';
          }).catch(() => {});
        }
      }, 1000);

      const setupVideoLoop = () => {
        if (video) {
          handleEnded = () => {
            if (video.duration) {
              video.currentTime = Math.max(0, video.duration - 1);
              video.play().catch(() => {});
            }
          };
          video.addEventListener('ended', handleEnded);
        }
      };

      if (video) {
        if (video.readyState >= 3) {
          setupVideoLoop();
        } else {
          video.addEventListener('loadeddata', setupVideoLoop);
        }
      }

      return () => {
        clearTimeout(videoTimer);
        if (video) {
          video.removeEventListener('loadeddata', setupVideoLoop);
          if (handleEnded) {
            video.removeEventListener('ended', handleEnded);
          }
        }
      };
    }
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div
        ref={heroRef}
        className="hidden md:flex flex-col items-center justify-center bg-[var(--color-background-brand)]"
      >
        <div className="flex flex-col items-center w-full gap-[var(--spacing-xs)] mt-[var(--spacing-6xl)] px-[var(--spacing-xl)] max-w-[1600px]">
        <div className="w-full flex justify-center items-left">
          <div className="flex flex-col items-start gap-[var(--spacing-s)]">
            <h1 className="text-[clamp(100px,calc(100px+(50*(100vw-1025px)/415)),200px)] font-black leading-none tracking-[0.005em] text-white transition-all duration-300 ease-in-out">
              {WORDS.map((word, i) => (
                <m.span
                  key={word}
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
                </m.span>
              ))}
            </h1>

            <m.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.9,
                duration: 0.5,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-[clamp(32px,calc(32px+(16*(100vw-1025px)/415)),64px)] font-semibold text-[var(--color-content-primary-inverse)] mt-2"
            >
              and Turn Neighborhoods into Open-Air Galleries
            </m.p>
          </div>
        </div>

        {/* Video Section */}
        <div className="w-full flex justify-center">
          <m.div
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
              className="w-full aspect-video object-cover rounded-lg opacity-0 transition-opacity duration-500"
              muted
              playsInline
              preload="auto"
            >
              <source
                src="/MainAnimation.mp4"
                type="video/mp4"
              />
            </video>
          </m.div>
        </div>
        </div>
      </div>
    </LazyMotion>
  );
}
