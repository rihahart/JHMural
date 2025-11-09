"use client";

import React from "react";
// import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function MissionStatementMobile() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="text-[clamp(26px,calc(26px+(18*(100vw-393px)/375)),44px)] leading-[clamp(45px,calc(45px+(15*(100vw-393px)/375)),60px)] text-left" style={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>
        This is {" "}
        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            fill
            className="object-contain"
          />
        </span> */}{" "}
        <span className="sparkle-primary">Jackson Heights</span>.{" "}
        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
          <Image
            src="/MissionStatementPhotos/AccessForAll.png"
            alt="Illustration with rainbow and flowers"
            fill
            className="object-contain"
          />
        </span> */}{" "}
        The most{" "}
        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
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
            size="small"
            href="/get-to-know-us/what-inspires-us"
            trailingIcon="/arrow-right.svg"
            className="font-base">
            Get to know us
          </BorderlessButton>
        </span>
      </div> 

   
    </div>
  );
}
