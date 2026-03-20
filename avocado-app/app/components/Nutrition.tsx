"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const macros = [
  { label: "Healthy Fats", value: 15, unit: "g", color: "#7db545", icon: "💧" },
  { label: "Fiber", value: 7, unit: "g", color: "#4a7c2f", icon: "🌿" },
  { label: "Protein", value: 2, unit: "g", color: "#d4e84a", icon: "💪" },
  { label: "Carbs", value: 9, unit: "g", color: "#a8c45a", icon: "⚡" },
];

const vitamins = [
  { label: "Vitamin K", pct: 26 },
  { label: "Folate", pct: 20 },
  { label: "Vitamin C", pct: 17 },
  { label: "Potassium", pct: 14 },
  { label: "Vitamin B5", pct: 14 },
  { label: "Vitamin B6", pct: 13 },
  { label: "Vitamin E", pct: 10 },
];

function AnimatedBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="h-2.5 rounded-full bg-[#e5ead5] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : {}}
        transition={{ duration: 1, delay, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

function MacroCard({
  item,
  delay,
}: {
  item: (typeof macros)[number];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative bg-white rounded-2xl p-6 shadow-sm border border-[#e5ead5] hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-3xl opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ backgroundColor: item.color }}
      />
      <div className="text-3xl mb-3">{item.icon}</div>
      <div
        className="font-bold text-3xl mb-1"
        style={{ color: item.color, fontFamily: "var(--font-playfair)" }}
      >
        {item.value}
        <span className="text-base font-semibold ml-1">{item.unit}</span>
      </div>
      <div className="text-[#1e3a0f]/60 text-sm font-medium">{item.label}</div>
      {/* Per 100g label */}
      <div className="text-[#1e3a0f]/30 text-xs mt-1">per 100g serving</div>
    </motion.div>
  );
}

export default function Nutrition() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      id="nutrition"
      className="section-bg py-28 px-6"
      style={{ backgroundColor: "#f8f4e8" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#7db545] font-semibold text-sm tracking-widest uppercase mb-3">
            What's Inside
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1e3a0f] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Nutrition Facts
          </h2>
          <p className="text-[#1e3a0f]/60 max-w-xl mx-auto text-lg">
            One avocado packs a powerhouse of essential nutrients your body craves daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Macro cards */}
          <div>
            <h3
              className="text-xl font-bold text-[#1e3a0f] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Macronutrients
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {macros.map((m, i) => (
                <MacroCard key={m.label} item={m} delay={i * 0.1} />
              ))}
            </div>

            {/* Calorie badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 bg-[#1e3a0f] rounded-2xl p-5 flex items-center justify-between"
            >
              <div>
                <div className="text-white/60 text-sm mb-1">Total Calories</div>
                <div
                  className="text-[#d4e84a] font-bold text-3xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  160 kcal
                </div>
              </div>
              <div className="text-5xl opacity-80">🥑</div>
            </motion.div>
          </div>

          {/* Vitamin bars */}
          <div>
            <h3
              className="text-xl font-bold text-[#1e3a0f] mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vitamins & Minerals{" "}
              <span className="text-sm font-normal text-[#1e3a0f]/40">% Daily Value</span>
            </h3>
            <div className="space-y-5">
              {vitamins.map((v, i) => (
                <div key={v.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#1e3a0f]/80 font-medium text-sm">{v.label}</span>
                    <span
                      className="font-bold text-sm"
                      style={{ color: "#4a7c2f" }}
                    >
                      {v.pct}%
                    </span>
                  </div>
                  <AnimatedBar
                    pct={v.pct * 4}
                    color="#7db545"
                    delay={0.1 + i * 0.08}
                  />
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-[#1e3a0f]/40 text-xs italic"
            >
              * Percent Daily Values are based on a 2,000 calorie diet
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
