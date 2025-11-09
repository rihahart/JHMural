"use client";

import React from "react";
// import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function MissionStatement() {
  return (
    <div className="flex flex-col items-center justify-start  align-center gap-[var(--spacing-xl)] max-w-[1600px] mx-auto">
      <div
        className="text-[clamp(40px,calc(40px+(14*(100vw-1025px)/575)),54px)] leading-[86px] text-left"
        style={{ fontFamily: "var(--font-family-base)", fontWeight: "var(--font-weight-bold)",  }}
      >
        This is {" "}
        {/* <span className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            fill
            className="object-contain"
          />
        </span> */}{" "}
        <span className="sparkle-primary">Jackson Heights</span>.{" "}
        {/* <span className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
          <Image
            src="/MissionStatementPhotos/AccessForAll.png"
            alt="Illustration with rainbow and flowers"
            fill
            className="object-contain"
          />
        </span> */}{" "}
        The most{" "}
        {/* <span className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
          <Image
            src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
            alt="Kids looking at the camera and smiling"
            fill
            className="object-contain"
          />
        </span> */}{" "}
        <span className="sparkle-primary">diverse community</span>{" "}
        on earth. Here, every{" "}
        blank wall{" "}
        is an opportunity to{" "}
        <span className="sparkle-primary">change the world</span>.{" "}
        <span className="inline-block">
          <BorderlessButton
            variant="primary"
            size="large"
            href="/get-to-know-us/what-inspires-us"
            trailingIcon="/arrow-right.svg"
            className="font-base"
          >
            Get to know us
          </BorderlessButton>
        </span>
      </div>
    </div>
  );
}
