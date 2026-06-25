"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div className="z-10">

          <span className="uppercase tracking-[0.25em] text-white/50 text-sm">
            AI Research & Innovation
          </span>
<motion.h1
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="
    mt-6
    text-6xl
    md:text-8xl
    font-bold
    leading-[0.95]
  "
>
  INTELLIGENCE.
  <br />
  DISCOVERY.
  <br />
  IMPACT.
</motion.h1>
          
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    delay: 0.4,
    duration: 0.8,
  }}
></motion.p>
          <p
            className="
            mt-8
            text-lg
            text-white/60
            max-w-xl
            leading-relaxed
          "
          >
            Anthara is an AI-first software studio helping startups
            and businesses build intelligent products, automate
            workflows, and scale through technology.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <button
              className="
             group
bg-white
text-black
px-8
py-4
rounded-full
font-medium
transition-all
duration-500
hover:scale-105
hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]
            "
            >
              Start a Project
            </button>

            <button
              className="
             border
border-white/20
px-8
py-4
rounded-full
transition-all
duration-500
hover:border-white
hover:bg-white/5
hover:scale-105
            "
            >
              View Work
            </button>

          </div>
        </div>

{/* RIGHT */}

<div className="relative flex justify-center items-center min-h-[700px]">

  {/* Outer Ring */}

  <div
    className="
      absolute
      h-[700px]
      w-[700px]
      rounded-full
      border
      border-white/[0.04]
    "
  />

  {/* Middle Ring */}

  <div
    className="
      absolute
      h-[560px]
      w-[560px]
      rounded-full
      border
      border-white/[0.05]
    "
  />

  {/* Inner Ring */}

  <div
    className="
      absolute
      h-[420px]
      w-[420px]
      rounded-full
      border
      border-white/[0.08]
    "
  />
  <div className="absolute inset-0 overflow-hidden">

  <div
    className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]
    "
  />


</div>

  {/* Small orbital dots */}

  <div className="absolute h-[700px] w-[700px] animate-spin-slow">

    <div
      className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-1
        h-1
        rounded-full
        bg-white/60
      "
    />

    <div
      className="
        absolute
        bottom-20
        right-10
        w-1
        h-1
        rounded-full
        bg-white/40
      "
    />
  </div>

  {/* Logo */}
<motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [0, 2, 0, -4, 0],
  }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <Image
    src="/AntharaLogo_converted.svg"
    alt="Anthara Logo"
    loading="eager"
    width={420}
    height={500}
    priority
    className="brightness-0 invert"
  />
</motion.div>
</div>
      </div>
    </section>

  );
}