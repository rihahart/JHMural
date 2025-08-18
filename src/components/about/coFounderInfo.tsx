'use client'
import Image from "next/image";

export default function CoFounderInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl">
      
      {/* Suzanne Card */}
      <div className="flex flex-col lg:flex-row w-full bg-[var(--color-background-notice-subtle)] rounded-lg overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96">
          <Image
            src="/Suzanne.jpeg"
            alt="Suzanne"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 lg:w-1/2">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Suzanne Adler</h3>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
            Suzanne Adler is a resident of Jackson Heights and a long time fan of murals and community art. She is a co-founder of The Arc Residential Team at Compass.
          </p>
        </div>
      </div>

      {/* Riha Card */}
      <div className="flex flex-col lg:flex-row-reverse w-full bg-[var(--color-background-notice-subtle)] rounded-lg overflow-hidden">
        <div className="relative w-full lg:w-1/2 h-64 lg:h-96">
          <Image
            src="/Riha.jpg"
            alt="Riha"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 lg:w-1/2">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Riha Hart</h3>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
            Riha is a proud Queens native and currently lives in Jackson Heights. She is the founding tech and design lead for Everest Federal Credit Union (EFCU), the first Nepalese-American credit union. There, she oversees the bank's tech team and leads the brand strategy.
          </p>
        </div>
      </div>

    </div>
  );
}
