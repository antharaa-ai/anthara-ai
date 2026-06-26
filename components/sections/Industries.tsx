"use client";

import { motion } from "framer-motion";

const industries = [
  {
    name: "HEALTHCARE AI",
    focus: ["Insurance Intelligence", "Claim Automation", "Policy Reasoning", "Patient Data Pipelines"],
  },
  {
    name: "EDUCATION TECH",
    focus: ["Career Pathing", "Skill Verification", "Curriculum AI", "Student Ecosystems"],
  },
  {
    name: "ENTERPRISE OPS",
    focus: ["Workflow Automation", "Resource Allocation", "System Migration", "Global Observability"],
  },
];

export default function Industries() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-14 md:mb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-black/30 text-[12px] sm:text-[16px] font-bold mb-4"
          >
            EXPERTISE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-black leading-tight"
          >
            Domain Expertise.
            <br />
            Deep Specialization.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1 }}
              className="border-l border-black/5 pl-5 sm:pl-8 py-4"
            >
              <h3 className="text-[13px] sm:text-[14px] font-bold tracking-[0.22em] sm:tracking-[0.3em] text-black mb-6 sm:mb-8 Satoshi">{ind.name}</h3>
              <ul className="space-y-4">
                {ind.focus.map(f => (
                  <li key={f} className="text-black/50 text-[15px] font-medium hover:text-black transition-colors flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-black/[0.05] rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
