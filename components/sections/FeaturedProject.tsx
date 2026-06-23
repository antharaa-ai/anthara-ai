"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface FeaturedProjectProps {
  title: string;
  industry: string;
  role: string;
  timeline: string;
  watermark: string;
  challenge: string;
  solution: string;
  impact: string[];
  stack: string[];
  video?: string;
  reverse?: boolean;
  dark?: boolean;
  themeColor?: "blue" | "green" | "orange" | "purple" | "pink" | "teal" | "yellow" | "cyan" | "lime" | "indigo" | "violet" | "fuchsia" | "rose" | "emerald" | "sky" | "stone" | "neutral" | "slate" | "zinc" | "gray" | "white" | "black";
}

export default function FeaturedProject({
  title,
  industry,
  role,
  timeline,
  watermark,
  challenge,
  solution,
  impact,
  stack,
  video,
  reverse = false,
  dark = true
}: FeaturedProjectProps) {
  const textColor = dark ? "text-white" : "text-black";
  const subTextColor = dark ? "text-white/100" : "text-black/70";
  const labelColor = dark ? "text-white/100" : "text-black/50";

  // Parallax for mockup image
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <div ref={containerRef} className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 py-24 items-center relative`}>

      {/* Massive Background Watermark Text */}
      <div className={`absolute top-0 ${reverse ? "right-0" : "left-0"} translate-y-[-20%] select-none pointer-events-none z-0`}>
        <h4 className={`text-[120px] md:text-[180px] font-black Satoshi tracking-tighter opacity-[0.04] ${textColor}`}>
          {watermark}
        </h4>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Metadata Bar */}
          <div className="flex flex-wrap gap-8 mb-12 border-b border-black/5 pb-10">
            <div>
              <span className={`text-[14px] uppercase tracking-widest ${labelColor} font-bold`}>Industry</span>
              <p className={`text-[16px] font-bold ${textColor} mt-1`}>{industry}</p>
            </div>
            <div>
              <span className={`text-[14px] uppercase tracking-widest ${labelColor} font-bold`}>Role</span>
              <p className={`text-[16px] font-bold ${textColor} mt-1`}>{role}</p>
            </div>
            <div>
              <span className={`text-[14px] uppercase tracking-widest ${labelColor} font-bold`}>Timeline</span>
              <p className={`text-[16px] font-bold ${textColor} mt-1`}>{timeline}</p>
            </div>
          </div>

          {/* Blur-to-clear title reveal */}
          <motion.h3
            initial={{ opacity: 0, filter: "blur(12px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={`text-[32px] md:text-[48px] font-bold mb-10 Satoshi uppercase tracking-tighter leading-none ${textColor}`}
          >
            {title}
          </motion.h3>

          <div className="space-y-12">
            <div>
              <h4 className={`text-[14px] uppercase tracking-[0.3em] ${labelColor} font-bold mb-4`}>The Challenge</h4>
              <p className={`${subTextColor} text-[18px] leading-relaxed max-w-lg font-medium`}>{challenge}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className={`text-[14px] uppercase tracking-[0.3em] ${labelColor} font-bold mb-4`}>The Solution</h4>
                <p className={`${subTextColor} text-[15px] leading-relaxed`}>{solution}</p>
              </div>
              <div>
                <h4 className={`text-[14px] uppercase tracking-[0.3em] ${labelColor} font-bold mb-4`}>The Impact</h4>
                <ul className="space-y-3">
                  {impact.map((item, i) => (
                    <li key={i} className={`${textColor} text-[15px] flex items-start gap-2 font-medium`}>
                      <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${dark ? "bg-white" : "bg-black"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h4 className={`text-[14px] uppercase tracking-[0.3em] ${labelColor} font-bold mb-4`}>Built With</h4>
              <div className="flex flex-wrap gap-2">
                {stack.map(s => (
                  <span key={s} className={`px-3 py-1 text-[13px] font-bold border ${dark ? "border-white/10 text-white/50" : "border-black/5 text-black/40"} rounded-sm`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mockup */}
      <div className="flex-[1.5] w-full relative z-10 lg:pl-25">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`relative aspect-[16/9] ${dark ? "bg-white/[0.03]" : "bg-black/[0.02]"} rounded-sm overflow-hidden border ${dark ? "border-white/5" : "border-black/5"} group/card transition-all duration-700`}
        >
          {/* Subtle Glow */}
          <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 bg-gradient-to-br ${dark ? "from-white/[0.05]" : "from-black/[0.02]"} to-transparent`} />

          {/* Parallax image wrapper */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-0"
          >
            <motion.video
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.6,
              }}
              autoPlay
              muted
              loop
              playsInline
              className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
  "
            >
              <source src={video} type="video/mp4" />
            </motion.video>
          </motion.div>
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
            <div className="w-full h-full border border-current scale-90 rounded-sm" />
          </div>
        </motion.div>
      </div>

    </div>
  );
}
