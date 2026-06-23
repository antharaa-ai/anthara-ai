"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  delay?: number;
}

export default function ProjectCard({ title, description, tags, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
    >
      {/* Visual Header / Image Placeholder */}
      <div className="h-64 bg-gradient-to-br from-white/[0.05] to-transparent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        {/* Animated accent */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/[0.02] rounded-full blur-3xl group-hover:bg-white/[0.08] transition-all duration-700" />
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 tracking-tight">{title}</h3>
        <p className="text-white/40 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}