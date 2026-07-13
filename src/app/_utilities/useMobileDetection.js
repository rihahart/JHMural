"use client";

import useWindowWidth from "./useWindowWidth";

function getScreenSize(windowWidth) {
  if (windowWidth <= 768) return 'mobile';
  if (windowWidth <= 1024) return 'tablet';
  if (windowWidth <= 1440) return 'desktop1440px';
  return 'desktop';
}

function useMobileDetection() {
  const windowWidth = useWindowWidth();
  const screenSize = getScreenSize(windowWidth);

  return {
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop1440px: screenSize === 'desktop1440px',
    isDesktop: screenSize === 'desktop',
    screenSize
  };
}

export default useMobileDetection;
