"use client";

import React from "react";
import { MotionConfig } from "framer-motion";

// Globally honor the user's OS "Reduce Motion" preference for every
// Framer Motion animation (transform/layout animations are auto-reduced),
// satisfying WCAG 2.3.3 without removing motion for everyone else.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
