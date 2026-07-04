"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Top Contact Strip */}
      <div className="border-b border-white/5 py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/30 font-bold mb-3">Get In Touch</p>
            <a
              href="mailto:contact.anthara@gmail.com"
              className="text-[26px] sm:text-[32px] md:text-[40px] font-bold Satoshi text-white hover:text-white/60 transition-colors tracking-tighter break-all"
            >
              contact.anthara@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-5 sm:gap-8 md:gap-12"
          >
            {[
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "https://github.com/antharaa-ai" },
              { label: "Twitter", href: "#" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.3em] text-white/30 hover:text-white transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-white/200 font-bold text-[20px] Satoshi tracking-tighter">ANTHARA</span>
          <span className="text-white/100">—</span>
          <p className="text-white/200 text-[11px] tracking-widest uppercase">
            AI & Software Engineering Studio
          </p>
        </div>
        <p className="text-white/200 text-[11px] tracking-widest uppercase Satoshi">
          © 2026 · BUILT FOR IMPACT
        </p>
      </div>
    </footer>
  );
}
