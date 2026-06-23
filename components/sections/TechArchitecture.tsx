"use client";

import { motion } from "framer-motion";

const architecture = [
  {
    layer: "FRONTEND",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    layer: "BACKEND",
    tech: ["FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    layer: "AI SYSTEMS",
    tech: ["PyTorch", "LangChain", "FAISS"],
  },
  {
    layer: "INFRASTRUCTURE",
    tech: ["Docker", "AWS", "CI/CD"],
  },
];

export default function TechArchitecture() {
  return (
    <section id="technologies" className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-white/30 text-[16px] font-bold mb-4"
          >
            TECHNOLOGY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter"
          >
            Scalable. Modular.
            <br />
            Architectural.
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto py-20 px-8">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          <div className="space-y-40">
            {architecture.map((item, i) => (
              <motion.div
                key={item.layer}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex flex-col items-center"
              >
                {/* Node */}
                <div className="w-4 h-4 bg-white rounded-full relative z-10 mb-8 shadow-[0_0_20px_rgba(255,255,255,0.5)]" />

                <h3 className="text-[12px] font-bold tracking-[0.4em] text-white/40 mb-6 uppercase">
                  {item.layer}
                </h3>

                <div className="flex flex-wrap justify-center gap-6">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[20px] md:text-[24px] font-bold text-white/80 hover:text-white transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
