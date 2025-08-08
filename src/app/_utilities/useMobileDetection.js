"use client";

import { useState, useEffect } from "react";
import useWindowWidth from "./useWindowWidth";

export default function useMobileDetection() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(windowWidth <= 768);
  }, [windowWidth]);

  return isMobile;
}
