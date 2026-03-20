"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";

/* SVG avocado drawn with paths */
function AvocadoSVG() {
  return (
    <svg
      viewBox="0 0 200 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-2xl"
    >
      {/* Outer skin */}
      <ellipse cx="100" cy="140" rx="78" ry="105" fill="#2d5a1b" />
      {/* Flesh */}
      <ellipse cx="100" cy="145" rx="62" ry="90" fill="#c8d850" />
      {/* Flesh gradient overlay */}
      <ellipse cx="100" cy="145" rx="62" ry="90" fill="url(#fleshGrad)" />
      {/* Pit */}
      <ellipse cx="100" cy="160" rx="28" ry="32" fill="#7a4a2a" />
      <ellipse cx="100" cy="160" rx="28" ry="32" fill="url(#pitGrad)" />
      {/* Pit shine */}
      <ellipse cx="90" cy="150" rx="8" ry="6" fill="white" opacity="0.2" />
      {/* Stem */}
      <path
        d="M100 35 C100 35 95 20 100 12 C105 4 112 8 108 18 C106 24 103 30 100 35Z"
        fill="#4a7c2f"
      />
      <defs>
        <radialGradient id="fleshGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#e8f060" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c8d850" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pitGrad" cx="35%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#a06040" />
          <stop offset="100%" stopColor="#5a3015" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/* Decorative floating leaf */
function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M30 75 C10 60 0 35 15 15 C25 3 45 0 55 18 C65 36 50 65 30 75Z"
        fill="#4a7c2f"
        opacity="0.7"
      />
      <line x1="30" y1="75" x2="35" y2="18" stroke="#2d5a1b" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #2d5a1b 0%, #1e3a0f 40%, #0f2208 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large blurred circles */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#4a7c2f]/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[#7db545]/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#d4e84a]/10 blur-3xl" />

        {/* Floating leaves */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 left-16"
        >
          <Leaf className="w-16 h-20 opacity-60" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [5, -5, 5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 right-20"
        >
          <Leaf className="w-12 h-16 opacity-40" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-8, 8, -8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-8"
        >
          <Leaf className="w-8 h-10 opacity-30" />
        </motion.div>

        {/* Dotted grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#d4e84a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pt-24 pb-16"
      >
        {/* Left: text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[#4a7c2f]/30 border border-[#7db545]/40 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4e84a] pulse-ring" />
            <span className="text-[#d4e84a] text-sm font-semibold tracking-widest uppercase">
              Nature's Superfood
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white leading-tight mb-6"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
            }}
          >
            The World's Most{" "}
            <em className="not-italic text-[#d4e84a]">Beloved</em>{" "}
            Green Fruit
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-white/70 text-lg leading-relaxed mb-8 max-w-md"
          >
            Creamy, rich, and packed with nutrients. Avocados are more than a food trend —
            they're a lifestyle. Explore nutrition facts, health benefits, and irresistible recipes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#benefits"
              className="inline-flex items-center gap-2 bg-[#7db545] hover:bg-[#d4e84a] text-white hover:text-[#1e3a0f] px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 shadow-lg shadow-[#7db545]/30 hover:scale-105"
            >
              Explore Benefits
            </a>
            <a
              href="#recipes"
              className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-[#d4e84a] text-white hover:text-[#d4e84a] px-7 py-3.5 rounded-full font-bold text-base transition-all duration-200 hover:scale-105"
            >
              View Recipes
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-12 flex gap-8"
          >
            {[
              { value: "20+", label: "Vitamins" },
              { value: "160", label: "Calories/100g" },
              { value: "#1", label: "Superfood" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-[#d4e84a] font-bold text-2xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.value}
                </div>
                <div className="text-white/50 text-xs mt-0.5 tracking-wide uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: animated avocado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", bounce: 0.3 }}
          className="flex justify-center items-center relative"
        >
          {/* Glow rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full border border-[#7db545]/20 spin-slow" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-80 h-80 rounded-full border border-[#d4e84a]/10"
              style={{ animation: "spin-slow 35s linear infinite reverse" }}
            />
          </div>

          {/* Avocado */}
          <div className="float-animation relative z-10 w-64 h-80 md:w-72 md:h-96">
            <AvocadoSVG />
          </div>

          {/* Floating nutrient badges */}
          {[
            { label: "Omega-9", emoji: "💚", top: "10%", left: "-15%" },
            { label: "Potassium", emoji: "⚡", top: "50%", right: "-18%" },
            { label: "Fiber", emoji: "🌿", bottom: "15%", left: "-12%" },
          ].map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
              style={{ top: b.top, left: b.left, right: b.right, bottom: b.bottom }}
              className="absolute bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-3 py-2 text-center shadow-xl"
            >
              <div className="text-lg">{b.emoji}</div>
              <div className="text-white text-xs font-semibold whitespace-nowrap">{b.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f8f4e8"
          />
        </svg>
      </div>
    </section>
  );
}
