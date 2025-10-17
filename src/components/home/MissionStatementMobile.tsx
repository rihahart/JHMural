"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";

export default function MissionStatementMobile() {
  return (
    <div className="flex flex-col items-center justify-center gap-[var(--spacing-2xl)] w-full mx-auto">
      <div className="text-[clamp(20px,calc(20px+(16*(100vw-393px)/375)),36px)] leading-[clamp(40px,calc(40px+(20*(100vw-393px)/375)),60px)] font-cubano text-left">
        {" "}We partner with artists,{" "}
        <span className="inline-block relative w-[clamp(26px,calc(26px+(10*(100vw-393px)/375)),36px)] aspect-square align-middle">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            fill
            className="object-contain"
          />
        </span>
        {" "}paint murals,{" "}

        <span className="inline-block relative w-[clamp(26px,calc(26px+(10*(100vw-393px)/375)),36px)] aspect-square align-middle">
          <Image
            src="/MissionStatementPhotos/AccessForAll.png"
            alt="Mural Wall illustration"
            fill
            className="object-contain"
          />
        </span>
        {" "} & bring joy,{" "}
        <span className="inline-block relative w-[clamp(26px,calc(26px+(10*(100vw-393px)/375)),36px)] aspect-square align-middle">
          <Image
            src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
            alt="Kids looking at the camera and smiling"
            fill
            className="object-contain"
          />
        </span>
        {" "}to our community.{" "}

        <Button
          variant="secondary"
          size="small"
          href="/get-to-know-us/meet-jh-mural-team"
          trailingIcon="/arrow-right.svg"
           className="font-base border-none translate-y-[-2px] "
        >
          Get to know us
        </Button>

    </div> 

   
    </div>
  );
}
