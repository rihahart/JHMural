"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupportersHero() {
  return (
    <div className="flex flex-col items-center justify-center bg-[var(--color-brand-600)] px-6 pt-20 pb-16 lg:px-[var(--spacing-8xl)] lg:py-[var(--spacing-6xl)]">
      <div className="flex flex-col items-center w-full gap-4 max-w-[1200px]">
        <div className="w-full flex justify-center">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-6xl lg:text-[clamp(3rem,6vw,4.5rem)] font-black leading-none tracking-[0.005em] text-white mb-4"
            >
              OUR SUPPORTERS
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-lg md:text-xl lg:text-2xl font-medium text-white max-w-3xl mx-auto"
            >
              Thank you to the amazing community members and organizations who make our mural projects possible.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
