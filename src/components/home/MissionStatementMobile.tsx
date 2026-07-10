"use client";

import React from "react";
// import Image from "next/image";
import BorderlessButton from "../ButtonCollection/BorderlessButton";

export default function MissionStatementMobile() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto">
      <div className="text-[clamp(26px,calc(26px+(18*(100vw-393px)/375)),44px)] leading-[clamp(45px,calc(45px+(15*(100vw-393px)/375)),60px)] text-left" style={{ fontFamily: 'var(--font-family-base)', fontWeight: 'var(--font-weight-bold)' }}>
        JH Mural Project is a nonprofit that partners with{" "}
        <span className="sparkle-primary">local artists</span>{" "}
        to bring murals to neighborhoods that have historically been overlooked.{" "}
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
