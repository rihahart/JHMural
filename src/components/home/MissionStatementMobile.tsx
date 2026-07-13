"use client";

import useMobileDetection from "@/app/_utilities/useMobileDetection";

type Token =
  | { type: "word"; text: string }
  | { type: "sparkle"; text: string }
  | { type: "img"; src: string; w?: string; h?: string; fit?: string };

export default function MissionStatementMobile() {
  const { isTablet } = useMobileDetection();
  const fontSize = isTablet ? "36px" : "26px";
  const lineHeight = isTablet ? "96px" : "60px";
  const irsW = isTablet ? "38px" : "27px";
  const irsH = isTablet ? "57px" : "38px";
  const photoSize = isTablet ? "57px" : "42px";
  const muralW = isTablet ? "80px" : "62px";

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
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div
        className="text-left"
        style={{ fontFamily: "var(--font-family-display)", fontSize, lineHeight }}
      >
        {tokens.map((token, i) => (
          <span
            key={i}
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
          </span>
        ))}
      </div>
    </div>
  );
}
