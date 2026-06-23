"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Top Contact Strip */}
      <div className="border-b border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold mb-3">Get In Touch</p>
            <a
              href="mailto:contact.anthara@gmail.com"
              className="text-[28px] md:text-[40px] font-bold Satoshi text-white hover:text-white/60 transition-colors tracking-tighter"
            >
              contact@anthara
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-12"
          >
            {[
              { label: "LinkedIn", href: "#" },
              { label: "GitHub", href: "#" },
              { label: "Twitter", href: "#" },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="text-[13px] font-bold uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors"
              >
                {s.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="text-white/20 font-bold text-[20px] Satoshi tracking-tighter">ANTHARA</span>
          <span className="text-white/10">—</span>
          <p className="text-white/20 text-[11px] tracking-widest uppercase">
            AI & Software Engineering Studio
          </p>
        </div>
        <p className="text-white/20 text-[11px] tracking-widest uppercase Satoshi">
          © 2026 · BUILT FOR IMPACT
        </p>
      </div>
    </footer>
  );
}