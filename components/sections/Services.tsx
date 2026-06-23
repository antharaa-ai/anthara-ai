"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    title: "SYSTEMS BUILT TO SCALE",
    reveal: -50,
    items: [
      "Modular Architecture",
      "Event-Driven Systems",
      "API Engineering",
      "Cloud Foundations",
      "Security & Performance",
    ],
  },
  {
    title: "AI INFRASTRUCTURE",
    reveal: 50,
    items: [
      "RAG Subsystems",
      "Agent Workflows",
      "Reranking Hubs",
      "LLM Evaluation",
      "Vector Architectures",
    ],
  },
  {
    title: "DATA TO DECISIONS",
    reveal: -50,
    items: [
      "Data Pipelines",
      "Transformation Layers",
      "Analytics Systems",
      "Process Automation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-40 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-white/30 text-[16px] font-bold mb-20"
        >
          CAPABILITIES
        </motion.p>

        <div className="space-y-32">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, x: cap.reveal }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-2 gap-12 border-t border-white/5 pt-16"
            >
              <motion.h3
                initial={{ opacity: 0, x: cap.reveal * 0.5, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[40px] md:text-[60px] font-bold Satoshi tracking-tighter leading-none text-white"
              >
                {cap.title}
              </motion.h3>

              <div className="grid grid-cols-2 gap-8">
                {cap.items.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-white transition-colors" />
                    <span className="text-[18px] text-white/50 group-hover:text-white transition-colors font-medium">
                      {item}
                    </span>
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
