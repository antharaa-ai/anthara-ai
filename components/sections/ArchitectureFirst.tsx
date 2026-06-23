"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "Systems Built To Scale",
    desc: "Every product is engineered with scalability and performance in mind from day one, ensuring your systems can handle growth without costly rewrites.",
  },
  {
    title: "AI Infrastructure",
    desc: "Retrieval systems (RAG), intelligent agent workflows, and evaluation frameworks designed for production-grade reliability.",
  },
  {
    title: "Operational Reliability",
    desc: "Deployment pipelines, automated monitoring, and observability systems that ensure your product remains stable and performant under load.",
  },
  {
    title: "Data To Decisions",
    desc: "Transforming fragmented data into structured intelligence through robust engineering pipelines and intelligent automation.",
  },
];

export default function ArchitectureFirst() {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-white/30 text-[16px] font-bold mb-4"
          >
            ENGINEERING DEPTH
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-tight"
          >
            Built For Scale.
            <br />
            Designed For Growth.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-0 bg-white/5 border border-white/5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="bg-[#050505] p-12 md:p-16 hover:bg-white/[0.02] transition-colors duration-500 group"
            >
              <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-6 group-hover:Satoshi transition-all">
                {pillar.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-[16px] md:text-[18px] max-w-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
