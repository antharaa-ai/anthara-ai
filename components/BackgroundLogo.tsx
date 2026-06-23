import Image from "next/image";

export default function BackgroundLogo() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">

      <Image
        src="/AntharaLogo.png"
        alt=""
        fill
        priority
        loading="eager"
        className="
          opacity-[0.08]
          rotate-[12deg]
          scale-[1.4]
          select-none
          object-contain
        "
      />

    </div>
  );
}