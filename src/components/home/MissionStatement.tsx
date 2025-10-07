"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";


export default function MissionStatement() {
  return (
    <div className="flex flex-col items-start justify-start gap-[var(--spacing-xl)] max-w-[1600px] mx-auto">
       <p className="text-[40px] leading-[82px] font-semibold" >
        We partner with ARTISTS,{" "}
        <span className="inline-block">
          <Image
            src="/MissionStatementPhotos/KidsArtClass.png"
            alt="Kids in free Art Class provided by the JH Mural Project"
            width={75}
            height={75}
            className="w-full h-full"
          />
        </span>{" "}
        paint MURALS in public spaces,{" "}
        <span className="inline-block">
          <Image
            src="/MissionStatementPhotos/MuralWall.png"
            alt="Mural Wall illustration"
            width={75}
            height={75}
            className="w-full h-full"
          />
        </span>{" "}
        bring CREATIVITY and JOY,{" "}
        <span className="inline-block">
          <Image
            src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
            alt="Kids looking at the camera and smiling"
            width={75}
            height={75}
            className="w-full h-full"
          />
        </span>{" "}
        and create an open-air public art gallery{" "}
        <span className="inline-block">
          <Image
            src="/MissionStatementPhotos/AccessForAll.png"
            alt="Illustration with rainbow and flowers"
            width={75}
            height={75}
            className="w-full h-full"
          />
        </span>{" "}
        accessible to all.{" "}
        
      </p>

<div className="flex py-[var(--spacing-2xl)]">
          <Button
            variant="primary-inverse"
            size="large"
            href="/get-to-know-us/meet-jh-mural-team"
            trailingIcon="/arrow-right.svg">
            Get to know us 
            </Button>
</div>
    </div>
  );
}