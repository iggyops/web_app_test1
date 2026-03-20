"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Benefits", href: "#benefits" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Recipes", href: "#recipes" },
  { label: "Ripeness", href: "#ripeness" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1e3a0f]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-2xl select-none" aria-hidden>🥑</span>
          <span
            className="font-bold text-xl text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Avocado
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-white/80 hover:text-[#d4e84a] font-medium text-sm tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#recipes"
          className="hidden md:inline-flex items-center gap-2 bg-[#7db545] hover:bg-[#d4e84a] text-white hover:text-[#1e3a0f] px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-[#7db545]/40 hover:scale-105"
        >
          Get Recipes
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#1e3a0f]/98 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white/90 hover:text-[#d4e84a] font-medium border-b border-white/10 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
