"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const reasons = [
  {
    number: "01",
    title: "AI NATIVE",
    desc: "We design systems where intelligence is part of the architecture—not an afterthought. Every solution is engineered to leverage modern AI capabilities from day one.",
    color: "bg-emerald-400",
    glow: "from-emerald-500/30",
    accent: "emerald",
  },
  {
    number: "02",
    title: "ENGINEERING FIRST",
    desc: "Reliable backends, scalable infrastructure, and production-grade systems. We focus on building foundations that remain stable as businesses grow.",
    color: "bg-blue-400",
    glow: "from-blue-500/30",
    accent: "blue",
  },
  {
    number: "03",
    title: "OUTCOME FOCUSED",
    desc: "Technology is only valuable when it drives measurable business outcomes. Every system we build is engineered around efficiency, automation, and impact.",
    color: "bg-amber-400",
    glow: "from-amber-500/30",
    accent: "amber",
  },
  {
    number: "04",
    title: "PRODUCTION READY",
    desc: "Deployment, observability, monitoring, and scalability are considered from the beginning. We engineer systems designed for real-world usage.",
    color: "bg-violet-400",
    glow: "from-violet-500/30",
    accent: "violet",
  },
];

interface CardProps {
  reason: (typeof reasons)[0];
  i: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isMobile: boolean;
}

function Card({ reason, i, total, progress, isMobile }: CardProps) {
  // Each card shrinks only within its own scroll segment
  // (i/total -> (i+1)/total), then holds at that scale — it does not
  // keep shrinking for the rest of the scroll. This is what makes the
  // cards stack one at a time instead of all animating toward the end
  // simultaneously.
  const targetScale = useMemo(
    () => Math.max(0.7, 1 - (total - i - 1) * 0.06),
    [i, total]
  );

  const segmentStart = i / total;
  const segmentEnd = (i + 1) / total;

  const inputRange = useMemo(
    () => [segmentStart, segmentEnd],
    [segmentStart, segmentEnd]
  );
  const outputRange = useMemo(() => [1, targetScale], [targetScale]);

  const scale = useTransform(progress, inputRange, outputRange);

  if (isMobile) {
    // On mobile: plain card, no sticky, no scale
    return (
      <div className="mb-4 w-full max-w-5xl mx-auto">
        <CardInner reason={reason} i={i} total={total} />
      </div>
    );
  }

  return (
    <div
      className="sticky h-screen flex items-center justify-center"
      style={{
        top: `${80 + i * 24}px`,
        zIndex: i + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className="w-full max-w-5xl"
      >
        <CardInner reason={reason} i={i} total={total} />
      </motion.div>
    </div>
  );
}

function CardInner({
  reason,
  i,
  total,
}: {
  reason: (typeof reasons)[0];
  i: number;
  total: number;
}) {
  return (
    <div
      className="
        relative overflow-hidden w-full rounded-[28px]
        border border-white/10 bg-[#0d0d0d]
        p-8 sm:p-12 md:p-16
        min-h-[340px] md:min-h-[420px]
        flex flex-col justify-center
        shadow-[0_30px_100px_rgba(0,0,0,0.8)]
        hover:border-white/20 transition-colors duration-500
      "
    >
      {/* Ambient glow */}
      <div
        className={`absolute -top-20 -left-20 w-64 h-64 rounded-full blur-[80px] opacity-30 bg-gradient-radial ${reason.glow} to-transparent`}
      />

      {/* Card number */}
      <span className="absolute top-8 right-10 text-white/10 text-[11px] font-bold tracking-[0.4em]">
        {reason.number} / {String(total).padStart(2, "0")}
      </span>

      {/* Accent dot + line */}
      <div className="flex items-center gap-3 mb-8">
        <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${reason.color}`} />
        <div className="h-px w-16 bg-white/10" />
        <span className="text-white/25 text-[10px] font-bold tracking-[0.35em] uppercase">
          {reason.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[32px] sm:text-5xl md:text-[68px] font-black Satoshi tracking-tight text-white mb-6 leading-[0.95]">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mt-2">
        {reason.desc}
      </p>
    </div>
  );
}

export default function WhyAnthara() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="why-anthara" className="relative bg-[#050505]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute left-[-10%] top-[20%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[180px]" />
        <div className="absolute right-[-10%] top-[35%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[200px]" />
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-500/10 rounded-full blur-[180px]" />
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-12 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-white/30 text-[10px] font-bold mb-4"
        >
          POSITIONING
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-white leading-tight"
        >
          Why Companies
          <br />
          Choose Anthara.
        </motion.h2>
      </div>

      {/* Cards container */}
      <div
        ref={containerRef}
        className="relative px-4 sm:px-6 lg:px-8"
        style={
          isMobile
            ? { paddingBottom: "3rem" }
            : { height: `${reasons.length * 100}vh` }
        }
      >
        {reasons.map((reason, i) => (
          <Card
            key={reason.number}
            reason={reason}
            i={i}
            total={reasons.length}
            progress={scrollYProgress}
            isMobile={isMobile}
          />
        ))}
      </div>

          {/* Metrics bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="pt-14 md:pt-24 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "AI Systems", value: "Production Ready" },
              { label: "Architecture", value: "Scalable" },
              { label: "Stack", value: "Full-Stack + ML" },
              { label: "Focus", value: "Applied AI" },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-[26px] md:text-5xl font-bold Satoshi text-white tracking-tight mb-2">
                  <AnimatedCounter value={metric.value} />
                </div>
                <div className="uppercase tracking-[0.2em] md:tracking-[0.25em] text-[11px] md:text-[12px] font-bold text-white/30">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}