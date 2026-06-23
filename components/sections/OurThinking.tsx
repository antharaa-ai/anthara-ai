"use client";

import { motion } from "framer-motion";

const articles = [
  {
    category: "AI Systems",
    title: "Building Reliable RAG Applications",
    link: "Read →",
  },
  {
    category: "Healthcare AI",
    title: "The Future of Insurance Intelligence",
    link: "Read →",
  },
  {
    category: "Engineering",
    title: "Why Most SaaS Products Fail To Scale",
    link: "Read →",
  },
];

export default function OurThinking() {
  return (
    <section className="py-40 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[0.4em] text-white/30 text-[16px] font-bold mb-4"
          >
            OUR THINKING
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold Satoshi tracking-tighter text-white"
          >
            Expertise in Motion.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="h-full border border-white/5 bg-white/[0.02] p-10 hover:bg-white/[0.05] transition-all duration-500 rounded-sm flex flex-col justify-between aspect-[4/5]">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                    {article.category}
                  </span>
                  <h3 className="mt-8 text-[28px] md:text-[32px] font-bold leading-tight text-white group-hover:Satoshi transition-all duration-500">
                    {article.title}
                  </h3>
                </div>

                <span className="text-[12px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white transition-colors duration-500">
                  {article.link}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
