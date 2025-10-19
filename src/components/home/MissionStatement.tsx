"use client";

import React from "react";
import Image from "next/image";   
import BorderlessButton from "../ButtonCollection/BorderlessButton";


export default function MissionStatement() {
  return (
    <div className="flex flex-col items-center justify-start  align-center gap-[var(--spacing-xl)] max-w-[1600px] mx-auto">
        <p className="text-[clamp(40px,calc(40px+(14*(100vw-1025px)/575)),54px)] font-regular leading-[86px] logo-web-text-3xl-regular text-left">
        We partner with artists,{" "}
        <span className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            fill
            className="object-contain"
          />
        </span>{" "}
        paint murals,{" "}
        <span
           className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
           <Image
             src="/MissionStatementPhotos/AccessForAll.png"
             alt="Illustration with rainbow and flowers"
             fill
             className="object-contain"
           />
        </span>{" "}
        & bring joy{" "}
        <span className="inline-block w-[clamp(44px,calc(44px+(10*(100vw-1025px)/575)),54px)] aspect-square translate-y-[5px]">
          <Image
            src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
            alt="Kids looking at the camera and smiling"
            fill
            className="object-contain"
          />
        </span>{" "}
        
        <span className="mr-[var(--spacing-m)]">to our community.</span>{" "}
        <span className="inline-block">
         <BorderlessButton
           variant="primary"
           size="large"
           href="/get-to-know-us/meet-jh-mural-team"
           trailingIcon="/arrow-right.svg"
           className="font-base translate-y-[-2px]">
           Get to know us 
         </BorderlessButton>
         </span>
        </p>
    </div>
  );
}