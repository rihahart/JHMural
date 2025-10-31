"use client";

import React from "react";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  url: string;
}

interface ExhibitionBoxProps {
  exhibition: Exhibition;
}

export default function ExhibitionBox({ exhibition }: ExhibitionBoxProps) {
  return (
    <div className="flex border items-center border-[#656666] p-3">
      {/* Left side: Black box with day and date */}
      <div className="w-[150px] h-[150px] bg-black flex flex-col items-center justify-center text-white">
        <div className="text-[40px] font-bold uppercase tracking-wider mb-3 text-white">
          {exhibition.dayOfWeek}
        </div>
        <div className="text-[32px] font-bold text-white tracking-wide">
          {exhibition.date}
        </div>
      </div>

      {/* Right side: Exhibition details */}
      <div className="p-6 flex flex-col justify-center bg-white">
        <h3 className="text-[40px] font-bold text-gray-900 mb-4 break-words">
          {exhibition.title}
        </h3>
        <p className="text-gray-700 mb-2 break-words">
          <span className="font-semibold block mb-1">Location:</span>
          {exhibition.location}
        </p>
        <p className="text-gray-700 break-words">
          <span className="font-semibold block mb-1">Time:</span>
          {exhibition.startTime}
        </p>
      </div>
    </div>
  );
}
