import Image from "next/image";

export default function About() {
  return (
    <div className="flex w-[var(--breakpoint-xl)] pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-[var(--spacing-7xl)]">
      <div className="flex p-[var(--spacing-xl)] flex-col justify-center items-center gap-[var(--spacing-xs)]">
        <Image
          src="/Suz&Riha.jpg"
          alt="Suzanne and Riha"
          width={400}
          height={550}
          className="rounded-[var(--radius-s)] object-cover"
        />
      <div className="flex w-[900px] py-[var(--spacing-2xl)] px-[var(--spacing-lg)] flex-col items-center gap-[var(--spacing-xl)]">
        <p className="text-xl-regular text-[var(--color-content-primary)] tracking-[var(--letter-spacing-none)]">
        The idea for the Jackson Heights Mural Project began when local resident Suzanne Adler grew tired of seeing the blank wall at 84th Street and Roosevelt Avenue covered in graffiti and surrounded by garbage. One day, she posted a message on the Jackson Heights Facebook page asking if anyone would help her get a mural painted. That post connected her with Riha Hart, and together they formed what is now known as the Jackson Heights Mural Project.
          
        </p>
      </div>
      </div>

    </div>
  );
} 