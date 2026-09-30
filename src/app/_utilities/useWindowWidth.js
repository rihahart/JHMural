"use client";

import { useEffect, useState } from "react";

// Shared across components that branch their JSX per breakpoint in JS
// (see DESIGN_REFERENCE.md). Returns 0 until mounted so callers can render
// a placeholder and avoid a server/client markup mismatch.
export default function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}
