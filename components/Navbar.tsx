"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Technologies", href: "#technologies" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    if (isMenuOpen) return;

    const diff = current - lastScrollY;
    if (current > 100) {
      setIsScrolled(true);
      if (diff > 5) setIsVisible(false);
      else if (diff < -5) setIsVisible(true);
    } else {
      setIsScrolled(false);
      setIsVisible(true);
    }
    setLastScrollY(current);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            isScrolled
              ? "border-b border-white/[0.08] backdrop-blur-2xl bg-black/70"
              : "border-b border-white/0 bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsMenuOpen(false)}>
              <motion.div whileHover={{ rotate: 12 }} transition={{ type: "spring", stiffness: 300 }}>
                <Image
                  src="/AntharaLogo_converted.svg"
                  alt="Anthara"
                  width={22}
                  height={22}
                  className="brightness-0 invert"
                />
              </motion.div>
              <span className="text-[14px] sm:text-[16px] font-bold tracking-[0.2em] sm:tracking-[0.25em] text-white">
                ANTHARA
              </span>
            </Link>

            {/* Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5 }}
                  className="text-[12px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:contact@anthara.dev"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex bg-white text-black px-5 lg:px-7 py-2.5 text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.18em] lg:tracking-[0.2em] hover:bg-transparent hover:text-white border border-white transition-all duration-300 cursor-pointer"
            >
              Let&apos;s Talk
            </motion.a>

            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden border-t border-white/[0.08] bg-black/95 px-4 pb-5 pt-3 backdrop-blur-2xl"
              >
                <div className="flex flex-col">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="min-h-12 border-b border-white/[0.06] py-4 text-[13px] font-bold uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="mailto:contact@anthara.dev"
                    onClick={() => setIsMenuOpen(false)}
                    className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-[12px] font-bold uppercase tracking-[0.2em] text-black"
                  >
                    Let&apos;s Talk
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
