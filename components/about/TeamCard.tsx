"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  tags: string[];
  portfolio: string;
}

export default function TeamCard({
  image,
  name,
  role,
  tags,
  portfolio,
}: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="
      border border-white/10
      rounded-4xl
      overflow-hidden
      bg-white/[0.02]
      backdrop-blur-sm
    " 
      
    >
      <div className="relative h-[420px] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="
          object-cover
          grayscale
          transition-transform
          duration-500
          hover:scale-105
        "
        />
      </div>
             

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{name}</h3>

        <p className="text-white/60 mt-2">{role}</p>
        

       <div className="mt-5 flex items-end justify-between gap-4">

  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="
        px-3
        py-1
        rounded-full
        border
        border-white/10
        text-xs
        text-white/70
      "
      >
        {tag}
      </span>
    ))}
  </div>

  <a
    href={portfolio}
    target="_blank"
    rel="noopener noreferrer"
    className="
      shrink-0
      px-4
      py-2
      rounded-full
      bg-white
      text-black
      text-sm
      font-semibold
      transition-all
      hover:scale-105
    "
  >
    Portfolio →
  </a>

</div>
      </div>
    </motion.div>
  );
}