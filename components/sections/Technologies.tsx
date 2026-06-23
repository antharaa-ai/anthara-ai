"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "AI & MACHINE LEARNING",
    tech: ["PyTorch", "Gemma", "Llama", "FAISS", "LangGraph", "Rerankers"],
  },
  {
    label: "ENGINEERING",
    tech: ["Next.js", "FastAPI", "TypeScript", "PostgreSQL", "Node.js"],
  },
  {
    label: "INFRASTRUCTURE",
    tech: ["Docker", "AWS", "CI/CD", "Redis", "Observability"],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">

        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-white/30 text-[16px] font-bold mb-4"
          >
            ARCHITECTURE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-white"
          >
            Scalable. Modular.
            <br />
            Engineering.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 relative">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="text-left"
            >
              <div className="text-[14px] uppercase tracking-[0.4em] text-white/30 font-bold mb-10 border-b border-white/5 pb-6">
                {cat.label}
              </div>
              <div className="flex flex-col gap-6">
                {cat.tech.map((t, idx) => (
                  <motion.div
                    key={t}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.05) }}
                    className="text-[20px] md:text-[24px] font-bold text-white/70 hover:text-white transition-all cursor-default flex items-center gap-4"
                  >
                    <span className="w-1 h-1 bg-white/10 rounded-full" />
                    {t}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}