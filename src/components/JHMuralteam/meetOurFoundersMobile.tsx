import Image from "next/image";

export default function MeetOurFoundersMobile() {
  return (
    <div className="flex p-[var(--spacing-m)] sm:p-[var(--spacing-xl)] flex-col justify-center items-center gap-[var(--spacing-s)] sm:gap-[var(--spacing-xs)] w-full">
      <Image
        src="/Suz&Riha.jpg"
        alt="Suzanne and Riha"
        width={400}
        height={550}
        className="rounded-[var(--radius-s)] object-cover w-full max-w-[300px] sm:max-w-[400px] h-auto"
      />
      <div className="flex w-full py-[var(--spacing-lg)] sm:py-[var(--spacing-2xl)] px-[var(--spacing-m)] sm:px-[var(--spacing-lg)] flex-col items-center gap-[var(--spacing-lg)] sm:gap-[var(--spacing-xl)]">
        <p className="text-lg-regular sm:text-xl-regular text-[var(--color-content-primary)] tracking-[var(--letter-spacing-none)] text-center">
          The idea for the Jackson Heights Mural Project began when local resident Suzanne Adler grew tired of seeing the blank wall at 84th Street and Roosevelt Avenue covered in graffiti and surrounded by garbage. One day, she posted a message on the Jackson Heights Facebook page asking if anyone would help her get a mural painted. That post connected her with Riha Hart, and together they formed what is now known as the Jackson Heights Mural Project.
        </p>
      </div>
    </div>
  );
}