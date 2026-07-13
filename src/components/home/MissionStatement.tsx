"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";

type Token =
  | { id: string; type: "word"; text: string }
  | { id: string; type: "sparkle"; text: string }
  | { id: string; type: "img"; src: string; w?: string; h?: string; fit?: string };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

// Intrinsic pixel dimensions of the decorative PNGs, so next/image keeps the
// correct aspect ratio and ships an optimized (not full-resolution) source.
const IMG_DIMENSIONS: Record<string, { w: number; h: number }> = {
  "/MissionStatement/IRS_Frame.png": { w: 144, h: 209 },
  "/MissionStatement/MyPhoto.png": { w: 6000, h: 4000 },
  "/MissionStatement/Overlooked.png": { w: 106, h: 70 },
};

export default function MissionStatement() {
  const fontSize = "40px";
  const lineHeight = "110px";
  const irsW = "47px";
  const irsH = "67px";
  const photoSize = "70px";
  const muralW = "110px";

  const tokens: Token[] = [
    { id: "jh", type: "word", text: "JH" },
    { id: "mural", type: "word", text: "Mural" },
    { id: "project", type: "word", text: "Project" },
    { id: "is", type: "word", text: "is" },
    { id: "a", type: "word", text: "a" },
    { id: "nonprofit", type: "word", text: "nonprofit" },
    { id: "img-irs", type: "img", src: "/MissionStatement/IRS_Frame.png", w: irsW, h: irsH },
    { id: "that-1", type: "word", text: "that" },
    { id: "partners", type: "word", text: "partners" },
    { id: "with", type: "word", text: "with" },
    { id: "sparkle-local-artists", type: "sparkle", text: "local artists" },
    { id: "to-1", type: "word", text: "to" },
    { id: "img-myphoto", type: "img", src: "/MissionStatement/MyPhoto.png", h: photoSize },
    { id: "bring", type: "word", text: "bring" },
    { id: "murals", type: "word", text: "murals" },
    { id: "to-2", type: "word", text: "to" },
    { id: "neighborhoods", type: "word", text: "neighborhoods" },
    { id: "that-2", type: "word", text: "that" },
    { id: "have", type: "word", text: "have" },
    { id: "historically", type: "word", text: "historically" },
    { id: "been", type: "word", text: "been" },
    { id: "overlooked", type: "word", text: "overlooked" },
    { id: "img-overlooked", type: "img", src: "/MissionStatement/Overlooked.png", w: muralW, h: photoSize, fit: "cover" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center justify-start align-center gap-[var(--spacing-xl)] max-w-[1600px] mx-auto">
        <m.div
          className="text-left"
          style={{ fontFamily: "var(--font-family-display)", fontSize, lineHeight }}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -150px 0px" }}
        >
          {tokens.map((token) => (
            <m.span
              key={token.id}
              variants={item}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {token.type === "word" && token.text}
              {token.type === "sparkle" && (
                <span className="sparkle-primary">{token.text}</span>
              )}
              {token.type === "img" && (
                <Image
                  src={token.src}
                  alt=""
                  width={IMG_DIMENSIONS[token.src].w}
                  height={IMG_DIMENSIONS[token.src].h}
                  sizes="120px"
                  style={{
                    display: "inline",
                    verticalAlign: "baseline",
                    width: token.w ?? "auto",
                    height: token.h ?? "auto",
                    ...(token.fit ? { objectFit: token.fit as "cover" } : {}),
                  }}
                />
              )}
            </m.span>
          ))}
        </m.div>
      </div>
    </LazyMotion>
  );
}
