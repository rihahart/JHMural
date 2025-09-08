import Image from "next/image";

export default function MeetOurFounders() {
  return (
    <div id="meet-our-founders" className="flex w-full max-w-4xl p-4 lg:p-8 flex-col justify-center items-center gap-4 lg:gap-6 scroll-mt-24">
      <Image
        src="/Suz&Riha.jpg"
        alt="Suzanne and Riha"
        width={400}
        height={550}
        className="rounded-[var(--radius-s)] object-cover w-full max-w-[300px] lg:max-w-[400px] h-auto"
      />
      <div className="flex w-full py-6 lg:py-12 px-4 lg:px-8 flex-col items-center gap-6 lg:gap-8">
        <div className="flex justify-center items-center gap-3 lg:gap-4">
          <Image 
            src="/Tulip64.svg"
            alt="JH Mural Tulip logo" 
            width={48} 
            height={48}
            className="w-12 h-12 lg:w-16 lg:h-16"
          />
          <h2 className="text-[var(--color-brand-600)] text-center text-2xl lg:text-4xl font-black">Meet our Founders</h2>
        </div>
        <p className="text-base lg:text-xl text-[var(--color-content-primary)] text-center leading-relaxed max-w-3xl">
          The idea for the Jackson Heights Mural Project began when local resident Suzanne Adler grew tired of seeing the blank wall at 84th Street and Roosevelt Avenue covered in graffiti and surrounded by garbage. One day, she posted a message on the Jackson Heights Facebook page asking if anyone would help her get a mural painted. That post connected her with Riha Hart, and together they formed what is now known as the Jackson Heights Mural Project.
        </p>
      </div>
    </div>
  );
}