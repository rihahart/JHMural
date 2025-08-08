"use client";

import React from "react";
import Hero from "../components/home/Hero";
import useWindowWidth from "./_utilities/useWindowWidth";

export default function RootHome() {
  const windowWidth = useWindowWidth();

  return (
    <main className="w-full min-h-screen">
      <Hero />
    </main>
  );
} 