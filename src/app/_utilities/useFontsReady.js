"use client";

import { useEffect, useState } from "react";

// Waits until the given fonts have finished loading so content can be revealed
// in its final font, avoiding the layout shift (and flash of the section below)
// that happens when a web font swaps in after text has already been painted.
export default function useFontsReady(fontSpecs = []) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const done = () => {
      if (!cancelled) setReady(true);
    };

    if (typeof document === "undefined" || !document.fonts) {
      done();
      return;
    }

    const load = async () => {
      try {
        await Promise.all(fontSpecs.map((spec) => document.fonts.load(spec)));
        await document.fonts.ready;
      } catch {
        // If font loading fails for any reason, reveal content anyway.
      }
      done();
    };

    load();

    // Safety net: never keep the page blank for longer than this.
    const timeout = setTimeout(done, 3000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ready;
}
