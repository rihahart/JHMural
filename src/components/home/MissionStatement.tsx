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
        JH Mural Project is a nonprofit that partners with{" "}
        <span className="sparkle-primary">local artists</span>{" "}
        to bring murals to neighborhoods that have historically been overlooked.{" "}
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
