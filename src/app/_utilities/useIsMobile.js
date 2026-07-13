"use client";

import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 768px)";

export default function useIsMobile() {
  const [state, setState] = useState({ isMobile: false, isReady: false });

  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);

    const onChange = () => setState({ isMobile: media.matches, isReady: true });

    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return state;
}
