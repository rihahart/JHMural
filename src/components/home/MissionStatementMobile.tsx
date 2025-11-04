"use client";

import React from "react";
import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function MissionStatementMobile() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="text-[clamp(26px,calc(26px+(18*(100vw-393px)/375)),44px)] leading-[clamp(45px,calc(45px+(15*(100vw-393px)/375)),60px)] text-left" style={{ fontFamily: 'var(--font-family-sharp)' }}>
        {" "}We partner with artists,{" "}
        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            fill
            className="object-contain"
          />
        </span> */}
        {" "}paint murals{" "}

        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
          <Image
            src="/MissionStatementPhotos/AccessForAll.png"
            alt="Mural Wall illustration"
            fill
            className="object-contain"
          />
        </span> */}
        {" "} and bring joy,{" "}
        {/* <span className="inline-block relative w-[clamp(34px,calc(10px+(10*(100vw-393px)/375)),44px)] translate-y-[4px] aspect-square">
          <Image
            src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
            alt="Kids looking at the camera and smiling"
            fill
            className="object-contain"
          />
        </span> */}
        {" "}<span className="mr-[var(--spacing-s)]">to our community.</span>{" "}
        <span className="inline-block translate-y-[2px]">
          <BorderlessButton
            variant="primary"
            size="small"
            href="/get-to-know-us/what-inspires-us"
            trailingIcon="/arrow-right.svg"
            className="font-base translate-y-[-2px]">
            Get to know us
          </BorderlessButton>
        </span>
      </div> 

   
    </div>
  );
}
