'use client'
import Image from "next/image";
import useMobileDetection from "@/app/_utilities/useMobileDetection";

export default function CoFounderInfo() {
  const { isMobile, isTablet, isDesktop1440px } = useMobileDetection();

  if (isMobile || isTablet) {
    return (
      <div className="flex flex-col items-center justify-center gap-12 lg:gap-20 w-full max-w-6xl">
      
      {/* Riha Card */}
      <div className="flex flex-col w-full overflow-hidden">
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="/Riha.jpg"
            alt="Riha"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Riha Hart</h3>
          <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & Creative Director</p>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
          Riha Hart is a designer, developer, and project manager who leads JH Mural&apos;s creative direction. She oversees branding, grant writing, and artist collaborations blending visual storytelling with technology to bring public art projects to life.  A Queens native, Riha draws inspiration from the borough&apos;s vibrant diversity.
          </p>
        </div>
      </div>

      {/* Suzanne Card */}
      <div className="flex flex-col w-full overflow-hidden">
        <div className="relative w-full h-64 lg:h-96">
          <Image
            src="/Suzanne.jpeg"
            alt="Suzanne"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Suzanne Adler</h3>
          <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & title</p>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
            Suzanne Adler is a resident of Jackson Heights and a long time fan of murals and community art. She is a co-founder of The Arc Residential Team at Compass.
          </p>
        </div>
      </div>

    </div>
    );
  }

  if (isDesktop1440px) {
    return (
      <div className="flex items-start gap-[var(--spacing-2xl)] w-full">
        {/* Riha Card */}
        <div className="flex flex-col w-full overflow-hidden h-[800px]">
          <div className="relative w-full h-1/2">
            <Image
              src="/Riha.jpg"
              alt="Riha"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full h-1/2">
            <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Riha Hart</h3>
            <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & Creative Director</p>
            <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
              Riha Hart is a designer, developer, and project manager who leads JH Mural&apos;s creative direction. She oversees branding, grant writing, and artist collaborations blending visual storytelling with technology to bring public art projects to life.  A Queens native, Riha draws inspiration from the borough&apos;s vibrant diversity.
            </p>
          </div>
        </div>

        <div className="w-px h-[900px] bg-[var(--color-content-primary)]"></div>

        {/* Suzanne Card */}
        <div className="flex flex-col w-full overflow-hidden h-[800px]">
          <div className="relative w-full h-1/2">
            <Image
              src="/Suzanne.jpeg"
              alt="Suzanne"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full h-1/2">
            <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Suzanne Adler</h3>
            <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & title</p>
            <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
              Suzanne Adler is a resident of Jackson Heights and a long time fan of murals and community art. She is a co-founder of The Arc Residential Team at Compass.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Large Desktop
  return (
    <div className="flex items-start gap-[var(--spacing-6xl)] w-full">
      {/* Riha Card */}
      <div className="flex flex-col w-full overflow-hidden h-[900px]">
        <div className="relative w-full h-1/2">
          <Image
            src="/Suzanne.jpeg"
            alt="Suzanne"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full h-1/2">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Suzanne Adler</h3>
          <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & title</p>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
            Suzanne Adler is a resident of Jackson Heights and a long time fan of murals and community art. She is a co-founder of The Arc Residential Team at Compass.
          </p>
        </div>
      </div>

      <div className="w-px h-[900px] bg-[var(--color-content-primary)]"></div>

      {/* Riha Card */}
      <div className="flex flex-col w-full overflow-hidden h-[900px]">
        <div className="relative w-full h-1/2">
          <Image
            src="/Riha.jpg"
            alt="Riha"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="flex flex-col justify-center gap-4 lg:gap-6 p-6 lg:p-8 w-full h-1/2">
          <h3 className="text-[var(--color-content-primary)] text-2xl lg:text-3xl font-black">Riha Hart</h3>
          <p className="text-[var(--color-content-primary)] text-xl lg:text-2xl font-semibold">Co-founder & Creative Director</p>
          <p className="text-[var(--color-content-primary)] text-base lg:text-xl leading-relaxed">
            Riha Hart is a designer, developer, and project manager who leads JH Mural&apos;s creative direction. She oversees branding, grant writing, and artist collaborations blending visual storytelling with technology to bring public art projects to life.  A Queens native, Riha draws inspiration from the borough&apos;s vibrant diversity.
          </p>
        </div>
      </div>
    </div>
  );
}
