"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button";

export default function MissionStatementMobile() {
  // Responsive clamp for mobile images
  

  return (
    <div className=" flex flex-col items-center justify-center gap-[var(--spacing-2xl)] w-full mx-auto">
       <div className="text-[clamp(24px,calc(24px+(8*(100vw-393px)/375)),32px)] leading-[50px] font-bold">
       {" "}  We partner with ARTISTS, {" "}
       <span className="inline-block w-[clamp(50px,calc(50px+25*(100vw-393px)/375),75px)] aspect-square">
  <Image 
    src="/MissionStatementPhotos/KidsArtClass.png"
    alt="Kids in free Art Class provided by the JH Mural Project"
    width={75}
    height={75}
    className="object-cover w-full h-full"
  />
</span>
          {" "} paint MURALS in public spaces, {" "}
              <span className="inline-block w-[clamp(50px,calc(50px+25*(100vw-393px)/375),75px)] aspect-square">
            <Image
              src="/MissionStatementPhotos/MuralWall.png"
              alt="Mural Wall illustration"
              width={75}
              height={75}
              className="object-cover w-full aspect-square"
            />
          </span>
          {" "} bring CREATIVITY and JOY, {" "}
          <span className="inline-block w-[clamp(50px,calc(50px+25*(100vw-393px)/375),75px)] aspect-square">
            <Image
              src="/MissionStatementPhotos/KidsJoyfullyDrawing.png"
              alt="Kids looking at the camera and smiling"
              width={75}
              height={75}
              className="object-cover w-full aspect-square"
            />
          </span>
          {" "} and create an open-air public art gallery {" "}
            <span className="inline-block w-[clamp(50px,calc(50px+25*(100vw-393px)/375),75px)] aspect-square">
            <Image
              src="/MissionStatementPhotos/AccessForAll.png"
              alt="Illustration with rainbow and flowers"
              width={75}
              height={75}
              className="object-cover w-full aspect-square"
            />
          </span>
          {" "} accessible to all. {" "}
        </div>
        <div className="flex w-full">
          <Button
            variant="primary-inverse"
            size="large"
            className="w-full"
            href="/get-to-know-us/meet-jh-mural-team"
            trailingIcon="/arrow-right.svg">
            Get to know us 
            </Button>
</div>



       
      </div>
    
  );
}
