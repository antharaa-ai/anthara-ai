"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCTA() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-24 md:py-0">

      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square watermark opacity-[0.03]">
        <Image
          src="/AntharaLogo_converted.svg"
          alt=""
          fill
          className="object-contain brightness-0 invert"
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-7xl lg:text-8xl font-bold Satoshi tracking-tighter leading-[0.95] text-white"
        >
          Ready To Build
          <br />
          Your Next System?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 md:mt-12 text-white/40 text-[16px] md:text-[22px] leading-relaxed max-w-2xl mx-auto font-medium"
        >
          AI Products. Automation Platforms. Scalable Software.
          <br />
          Anthara engineers intelligent systems that transform operations and drive business outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-7 md:gap-12"
        >
          <MagneticButton
            strength={0.45}
            onClick={() => window.location.href = "#contact"}
            className="text-[17px] md:text-[28px] font-bold uppercase tracking-[0.16em] md:tracking-[0.2em] text-white hover:Satoshi transition-all duration-300 group cursor-pointer"
          >
            Start a Project <span className="inline-block group-hover:translate-x-4 transition-transform">→</span>
          </MagneticButton>

          <MagneticButton
            strength={0.3}
            onClick={() => window.location.href = "#work"}
            className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.25em] md:tracking-[0.4em] text-white/40 hover:text-white transition-colors cursor-pointer"
          >
            View Case Studies
          </MagneticButton>
        </motion.div>
      </div>

    </section>
  );
}
