import React from "react";
import Image from "next/image";

export default function OurStory() {
  return (
    <div className="flex flex-col align-center self-stretch max-w-full justify-center mx-auto" style={{
        gap: 'clamp(32px, calc(32px + 16px * ((100vw - 1025px) / 575px)), 48px)'
      }}>
      <h1 
        className="font-bold self-stretch"
        style={{
          fontSize: 'clamp(104px, calc(104px + 32px * ((100vw - 1025px) / 575px)), 136px)',
          fontFamily: 'var(--font-family-base)',
          lineHeight: 'var(--line-height-hero-heading)'
        }}
      >
        Our Story
      </h1>
      <Image
        src="/SuzanneRiha.png"
        alt="Our Story"
        width={1600}
        height={1600}
        className="w-full h-auto"
      />
        <div className="flex flex-wrap py-[var(--spacing-2xl)] max-w-[1024px] px-[var(--spacing-2xl)] mx-auto text-center">
         <p className="text-[var(--font-size-text-3xl)] text-left font-bold">
      The idea for the Jackson Heights Mural Project began when local resident Suzanne Adler grew tired of seeing the blank wall at 84th Street and Roosevelt Avenue covered in graffiti and surrounded by garbage. One day, she posted a message on the Jackson Heights Facebook page asking if anyone would help her get a mural painted. That post connected her with Riha Hart, and together they formed what is now known as the Jackson Heights Mural Project.
</p>
        </div>
      </div>
  );
}