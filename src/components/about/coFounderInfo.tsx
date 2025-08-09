'use client'
import Image from "next/image";

export default function CoFounderInfo() {
  return (
    <div className="flex flex-col items-center justify-center gap-[var(--spacing-7xl)]">
      
      {/* Suzanne Card */}
      <div className="flex h-[450px] w-full max-w-[1200px] p-[var(--spacing-xl)] justify-between items-center rounded-[var(--radius-xs)] bg-[var(--color-background-notice-subtle)] overflow-hidden">
        <div className="relative h-full w-[600px] rounded-[var(--radius-s)] overflow-hidden">
          <Image
            src="/Suzanne.jpeg"
            alt="Suzanne"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex w-[500px] py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] flex-col justify-center gap-[var(--spacing-xl)]">
          <h1 className="text-[var(--color-content-primary)] heading-3xl-bold">Suzanne Adler</h1>
          <p className="text-[var(--color-content-primary)] text-xl-regular">
            Suzanne Adler is a resident of Jackson Heights and a long time fan of murals and community art. She is a co-founder of The Arc Residential Team at Compass.
          </p>
        </div>
      </div>

      {/* Riha Card */}
      <div className="flex h-[450px] w-full max-w-[1200px] p-[var(--spacing-xl)] justify-between items-center rounded-[var(--radius-xs)] bg-[var(--color-background-notice-subtle)] overflow-hidden">
        <div className="relative h-full w-[600px] rounded-[var(--radius-s)] overflow-hidden">
          <Image
            src="/Riha.jpg"
            alt="Riha"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex w-[500px] py-[var(--spacing-2xl)] px-[var(--spacing-2xl)] flex-col justify-center gap-[var(--spacing-xl)]">
          <h1 className="text-[var(--color-content-primary)] heading-3xl-bold">Riha Hart</h1>
          <p className="text-[var(--color-content-primary)] text-xl-regular">
            Riha is a proud Queens native and currently lives in Jackson Heights. She is the founding tech and design lead for Everest Federal Credit Union (EFCU), the first Nepalese-American credit union. There, she oversees the bank’s tech team and leads the brand strategy.
          </p>
        </div>
      </div>

    </div>
  );
}
