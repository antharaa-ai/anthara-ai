"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Strategy & Discovery", desc: "We align with your business goals to define the technical vision and product roadmap." },
  { id: "02", title: "Architecture Design", desc: "Engineering the foundation—scalability, security, and data infrastructure planned for growth." },
  { id: "03", title: "Product Engineering", desc: "Iterative development cycles focusing on robust code and production-grade stability." },
  { id: "04", title: "Deployment & Ops", desc: "Rigorous testing and seamless deployment with continuous monitoring." },
  { id: "05", title: "Scaling & Growth", desc: "Evolving the system based on real-world data and user feedback." },
];

export default function Process() {
  return (
    <section id="process" className="py-40 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-black/30 text-[16px] font-bold mb-4"
          >
            OUR PROCESS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-black"
          >
            How We Build.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="border-t border-black/10 pt-10 group-hover:border-black transition-colors duration-500">
                <span className="text-[12px] font-bold tracking-widest text-black/20 group-hover:text-black group-hover:scale-125 inline-block transition-all duration-500">
                  {step.id}
                </span>
                <h3 className="mt-4 text-[24px] font-bold tracking-tight text-black group-hover:translate-x-2 transition-transform duration-500">
                  {step.title}
                </h3>
                <p className="mt-4 text-black/40 group-hover:text-black/60 transition-colors duration-500 max-w-xs text-[15px] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Animated reveal line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
