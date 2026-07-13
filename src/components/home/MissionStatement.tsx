"use client";

import { motion } from "framer-motion";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

type Token =
  | { type: "word"; text: string }
  | { type: "sparkle"; text: string }
  | { type: "img"; src: string; w?: string; h?: string; fit?: string };

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const item = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function MissionStatement() {
  const { isDesktop1440px } = useMobileDetection();
  const fontSize = isDesktop1440px ? "36px" : "40px";
  const lineHeight = isDesktop1440px ? "96px" : "110px";
  const irsW = isDesktop1440px ? "45px" : "47px";
  const irsH = isDesktop1440px ? "65px" : "67px";
  const photoSize = isDesktop1440px ? "67px" : "70px";
  const muralW = isDesktop1440px ? "100px" : "110px";

  const tokens: Token[] = [
    { type: "word", text: "JH" },
    { type: "word", text: "Mural" },
    { type: "word", text: "Project" },
    { type: "word", text: "is" },
    { type: "word", text: "a" },
    { type: "word", text: "nonprofit" },
    { type: "img", src: "/MissionStatement/IRS_Frame.png", w: irsW, h: irsH },
    { type: "word", text: "that" },
    { type: "word", text: "partners" },
    { type: "word", text: "with" },
    { type: "sparkle", text: "local artists" },
    { type: "word", text: "to" },
    { type: "img", src: "/MissionStatement/MyPhoto.png", h: photoSize },
    { type: "word", text: "bring" },
    { type: "word", text: "murals" },
    { type: "word", text: "to" },
    { type: "word", text: "neighborhoods" },
    { type: "word", text: "that" },
    { type: "word", text: "have" },
    { type: "word", text: "historically" },
    { type: "word", text: "been" },
    { type: "word", text: "overlooked" },
    { type: "img", src: "/MissionStatement/Overlooked.png", w: muralW, h: photoSize, fit: "cover" },
  ];

  return (
    <div className="flex flex-col items-center justify-start align-center gap-[var(--spacing-xl)] max-w-[1600px] mx-auto">
      <motion.div
        className="text-left"
        style={{ fontFamily: "var(--font-family-display)", fontSize, lineHeight }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        {tokens.map((token, i) => (
          <motion.span
            key={i}
            variants={item}
            style={{ display: "inline-block", marginRight: "0.25em" }}
          >
            {token.type === "word" && token.text}
            {token.type === "sparkle" && (
              <span className="sparkle-primary">{token.text}</span>
            )}
            {token.type === "img" && (
              <img
                src={token.src}
                alt=""
                style={{
                  display: "inline",
                  verticalAlign: "baseline",
                  width: token.w,
                  height: token.h,
                  ...(token.fit ? { objectFit: token.fit as "cover" } : {}),
                }}
              />
            )}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
