"use client";

import { motion } from "framer-motion";

const beliefs = [
  {
    num: "01",
    statement: "We don't take on projects. We take on engineering partnerships.",
  },
  {
    num: "02",
    statement: "Architecture is not a technical decision. It's a business decision.",
  },
  {
    num: "03",
    statement: "The best AI systems are invisible. The outcomes are not.",
  },
];

export default function StudioPhilosophy() {
  return (
    <section className="py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">

          {/* Label + Headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[0.4em] text-black/30 text-[16px] font-bold mb-6"
            >
              STUDIO PHILOSOPHY
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-black leading-tight"
            >
              We engineer
              <br />
              outcomes
              <br />
              not just code.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 text-black/40 text-[17px] leading-relaxed max-w-sm"
            >
              Every decision at Anthara is driven by a single question: what system architecture will create the most durable business value?
            </motion.p>
          </div>

          {/* Principle Cards */}
          <div className="space-y-0 divide-y divide-black/5">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 flex gap-8 group"
              >
                <span className="text-[11px] font-bold tracking-widest text-black/20 pt-1 shrink-0 group-hover:text-black/50 transition-colors">{b.num}</span>
                <p className="text-[20px] md:text-[22px] font-bold text-black/70 leading-snug group-hover:text-black transition-colors tracking-tight">
                  {b.statement}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
