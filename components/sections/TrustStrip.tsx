"use client";

import { motion } from "framer-motion";

const tokens = [
  "HEALTHCARE AI",
  "EDUCATION PLATFORMS",
  "ENTERPRISE SYSTEMS",
  "AUTOMATION INFRASTRUCTURE",
  "DATA PLATFORMS",
  "AI SYSTEMS",
  "SCALABLE SOFTWARE",
];

export default function TrustStrip() {
  return (
    <div className="py-12 border-y border-white/[0.05] bg-[#050505] relative z-10 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content flex gap-12 items-center">
          {[...tokens, ...tokens, ...tokens, ...tokens].map((token, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="text-[12px] font-bold tracking-[0.4em] text-white/40">
                {token}
              </span>
              <span className="text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
