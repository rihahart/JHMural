"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const IMAGES = [
  "/InugrationalMural.jpg",
  "/CarouselPhotos/01.jpg",
  "/CarouselPhotos/02.jpg",
  "/CarouselPhotos/03.jpg",
  "/CarouselPhotos/04.jpg",
  "/CarouselPhotos/05.jpg",
  "/CarouselPhotos/06.jpg",
  "/CarouselPhotos/07.jpg",
];

const AUTO_ADVANCE_MS = 8000;
const SWIPE_THRESHOLD_PX = 50;

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

function ArrowButton({
  direction,
  onClick,
  bordered = false,
}: {
  direction: "left" | "right";
  onClick: () => void;
  bordered?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous photo" : "Next photo"}
      className={`
        group flex items-center justify-center flex-shrink-0
        w-12 h-12
        rounded-[999px]
        bg-[var(--color-background-primary)]
        hover:bg-[var(--color-content-primary)]
        active:bg-[var(--color-content-primary)]
        transition-all duration-200 ease-in-out
        cursor-pointer
        ${bordered ? "border border-[var(--color-content-primary)]" : ""}
      `}
    >
      <Image
        src="/arrow-right.svg"
        alt=""
        width={20}
        height={20}
        className={`w-5 h-5 invert group-hover:invert-0 group-active:invert-0 ${direction === "left" ? "rotate-180" : ""}`}
      />
    </button>
  );
}

export default function PhotoCarousel() {
  const width = useWindowWidth();
  const [index, setIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);

  const goNext = () => setIndex((i) => (i + 1) % IMAGES.length);
  const goPrev = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  // Auto-advance every 3s; restarts whenever the slide changes (including manual nav)
  useEffect(() => {
    const t = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [index]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    if (deltaX > SWIPE_THRESHOLD_PX) goPrev();
    else if (deltaX < -SWIPE_THRESHOLD_PX) goNext();
    touchStartXRef.current = null;
  };

  const alt = `Jackson Heights mural photo ${index + 1} of ${IMAGES.length}`;

  if (width <= 768) {
    return (
      <div className="w-full flex flex-col items-center gap-[var(--spacing-lg)]">
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 350 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <Image
            src={IMAGES[index]}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
        </div>
        <div className="flex w-full justify-between px-[var(--spacing-lg)]">
          <ArrowButton direction="left" onClick={goPrev} bordered />
          <ArrowButton direction="right" onClick={goNext} bordered />
        </div>
      </div>
    );
  }

  if (width <= 1200) {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        <Image
          src={IMAGES[index]}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute left-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
          <ArrowButton direction="left" onClick={goPrev} />
        </div>
        <div className="absolute right-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
          <ArrowButton direction="right" onClick={goNext} />
        </div>
      </div>
    );
  }

  if (width <= 1600) {
    return (
      <div className="relative w-full overflow-hidden" style={{ height: 750 }}>
        <Image
          src={IMAGES[index]}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute left-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
          <ArrowButton direction="left" onClick={goPrev} />
        </div>
        <div className="absolute right-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
          <ArrowButton direction="right" onClick={goNext} />
        </div>
      </div>
    );
  }

  // large desktop (> 1600px)
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 1000 }}>
      <Image
        src={IMAGES[index]}
        alt={alt}
        fill
        sizes="100vw"
        className="object-cover"
        priority={index === 0}
      />
      <div className="absolute left-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
        <ArrowButton direction="left" onClick={goPrev} />
      </div>
      <div className="absolute right-[var(--spacing-lg)] top-1/2 -translate-y-1/2">
        <ArrowButton direction="right" onClick={goNext} />
      </div>
    </div>
  );
}
