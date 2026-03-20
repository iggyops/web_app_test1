"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    icon: "❤️",
    title: "Heart Health",
    description:
      "Rich in oleic acid (monounsaturated fat), avocados help lower LDL cholesterol and reduce the risk of cardiovascular disease.",
    color: "#7db545",
    bg: "#f0f7e6",
  },
  {
    icon: "🧠",
    title: "Brain Boost",
    description:
      "Folate and omega-9 fatty acids support cognitive function, memory, and help protect against Alzheimer's disease.",
    color: "#4a7c2f",
    bg: "#e8f2e0",
  },
  {
    icon: "⚖️",
    title: "Weight Management",
    description:
      "High fiber and healthy fats keep you full longer, reducing overall calorie intake and supporting healthy metabolism.",
    color: "#7db545",
    bg: "#f0f7e6",
  },
  {
    icon: "✨",
    title: "Glowing Skin",
    description:
      "Vitamins C and E, plus antioxidants, combat free radicals and promote collagen production for youthful, radiant skin.",
    color: "#4a7c2f",
    bg: "#e8f2e0",
  },
  {
    icon: "💪",
    title: "Muscle Recovery",
    description:
      "Potassium (more than bananas!) and magnesium help replenish electrolytes and reduce exercise-induced cramps.",
    color: "#7db545",
    bg: "#f0f7e6",
  },
  {
    icon: "👁️",
    title: "Eye Protection",
    description:
      "Lutein and zeaxanthin in avocados accumulate in retinal tissue and protect against macular degeneration.",
    color: "#4a7c2f",
    bg: "#e8f2e0",
  },
];

function BenefitCard({
  benefit,
  index,
}: {
  benefit: (typeof benefits)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(74,124,47,0.15)" }}
      className="rounded-3xl p-7 border border-[#e0ead0] hover:border-[#7db545]/50 transition-all duration-300 cursor-default"
      style={{ backgroundColor: benefit.bg }}
    >
      <div
        className="inline-flex items-center justify-center w-14 h-14 rounded-2xl text-2xl mb-5 shadow-sm"
        style={{ backgroundColor: benefit.color + "20", border: `2px solid ${benefit.color}30` }}
      >
        {benefit.icon}
      </div>
      <h3
        className="text-xl font-bold mb-3 text-[#1e3a0f]"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {benefit.title}
      </h3>
      <p className="text-[#1e3a0f]/65 text-sm leading-relaxed">{benefit.description}</p>

      {/* Bottom accent bar */}
      <div
        className="mt-5 h-1 w-12 rounded-full opacity-40"
        style={{ backgroundColor: benefit.color }}
      />
    </motion.div>
  );
}

export default function Benefits() {
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      id="benefits"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #1e3a0f 0%, #2d5a1b 50%, #1e3a0f 100%)",
      }}
    >
      {/* Background deco */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7db545]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7db545]/40 to-transparent" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="hex" x="0" y="0" width="50" height="57.7" patternUnits="userSpaceOnUse">
              <polygon
                points="25,2 48,14 48,43 25,55 2,43 2,14"
                fill="none"
                stroke="#d4e84a"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hex)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#d4e84a] font-semibold text-sm tracking-widest uppercase mb-3">
            Why You Need It
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            6 Reasons to Eat Avocado{" "}
            <span className="text-[#d4e84a]">Every Day</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Backed by science, loved by chefs. Here's why this fruit belongs on your plate.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} benefit={b} index={i} />
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#d4e84a]/10 border border-[#d4e84a]/25 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-white font-bold text-2xl mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to start your avocado journey?
            </h3>
            <p className="text-white/60 text-sm">
              Check your avocado's ripeness below, then try one of our delicious recipes.
            </p>
          </div>
          <a
            href="#ripeness"
            className="shrink-0 bg-[#d4e84a] hover:bg-white text-[#1e3a0f] px-7 py-3.5 rounded-full font-bold transition-all duration-200 hover:scale-105"
          >
            Check Ripeness →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
