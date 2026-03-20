"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const stages = [
  {
    id: 0,
    label: "Unripe",
    days: "5–7 days",
    color: "#2d8a2d",
    skinColor: "#1a5c1a",
    fleshColor: "#e8f5e8",
    pitColor: "#c8a060",
    tip: "Hard to the touch, bright green. Store at room temperature to ripen. Do NOT refrigerate.",
    storage: "Room temp",
    storageIcon: "🌡️",
    taste: "Bland, slightly bitter",
    use: "Wait — not ready yet",
    emoji: "🌱",
  },
  {
    id: 1,
    label: "Nearly Ready",
    days: "2–3 days",
    color: "#4a7c2f",
    skinColor: "#3a6020",
    fleshColor: "#d8ea70",
    pitColor: "#a07840",
    tip: "Yields slightly to gentle pressure. Skin turning darker. Almost perfect — refrigerate to slow ripening.",
    storage: "Fridge",
    storageIcon: "❄️",
    taste: "Mild, slightly creamy",
    use: "Best for slicing",
    emoji: "🥬",
  },
  {
    id: 2,
    label: "Perfect",
    days: "Eat today!",
    color: "#7db545",
    skinColor: "#2d5a1b",
    fleshColor: "#c8d850",
    pitColor: "#7a4a2a",
    tip: "Yields to gentle pressure, dark green/black skin. This is peak flavor — use immediately for the best experience.",
    storage: "Eat now!",
    storageIcon: "🥑",
    taste: "Rich, buttery, nutty",
    use: "Any recipe",
    emoji: "⭐",
  },
  {
    id: 3,
    label: "Overripe",
    days: "Use ASAP",
    color: "#8b6914",
    skinColor: "#5c4010",
    fleshColor: "#d4b060",
    pitColor: "#6a3820",
    tip: "Very soft with dents, very dark skin. May have brown spots inside. Still good for smoothies, baking, and face masks!",
    storage: "Use today",
    storageIcon: "⚠️",
    taste: "Strong, slightly off",
    use: "Smoothies, baking",
    emoji: "⚡",
  },
];

function AvocadoCrossSection({ stage }: { stage: (typeof stages)[number] }) {
  return (
    <motion.svg
      key={stage.id}
      initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
      viewBox="0 0 200 240"
      className="w-full h-full"
    >
      {/* Outer skin */}
      <ellipse cx="100" cy="130" rx="75" ry="100" fill={stage.skinColor} />
      {/* Inner flesh */}
      <ellipse cx="100" cy="133" rx="60" ry="86" fill={stage.fleshColor} />
      {/* Flesh gradient overlay */}
      <ellipse cx="100" cy="133" rx="60" ry="86" fill="url(#crossGrad)" />
      {/* Pit */}
      <ellipse cx="100" cy="148" rx="26" ry="30" fill={stage.pitColor} />
      <ellipse cx="100" cy="148" rx="26" ry="30" fill="url(#crossPit)" />
      {/* Pit shine */}
      <ellipse cx="91" cy="139" rx="7" ry="5" fill="white" opacity="0.2" />
      {/* Stem top */}
      <path
        d="M100 30 C100 30 96 18 100 11 C104 4 110 8 107 17 C105 23 102 28 100 30Z"
        fill="#4a7c2f"
      />
      <defs>
        <radialGradient id="crossGrad" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="crossPit" cx="35%" cy="35%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.2" />
          <stop offset="100%" stopColor="black" stopOpacity="0.2" />
        </radialGradient>
      </defs>
    </motion.svg>
  );
}

export default function RipenessTracker() {
  const [selected, setSelected] = useState(2); // default to "perfect"
  const stage = stages[selected];
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section
      id="ripeness"
      className="py-28 px-6 relative overflow-hidden"
      style={{ backgroundColor: "#1e3a0f" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7db545]/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-[#d4e84a] font-semibold text-sm tracking-widest uppercase mb-3">
            Interactive Guide
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ripeness Tracker
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            Never guess if your avocado is ready again. Click a stage to learn exactly what to look for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: avocado illustration */}
          <div className="flex flex-col items-center">
            <div className="w-56 h-72 float-animation">
              <AnimatePresence mode="wait">
                <AvocadoCrossSection key={stage.id} stage={stage} />
              </AnimatePresence>
            </div>

            {/* Stage label */}
            <motion.div
              key={stage.id + "label"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <span className="text-3xl mr-2">{stage.emoji}</span>
              <span
                className="font-bold text-2xl"
                style={{ color: stage.color, fontFamily: "var(--font-playfair)" }}
              >
                {stage.label}
              </span>
              <div className="text-white/50 text-sm mt-1">{stage.days}</div>
            </motion.div>
          </div>

          {/* Right: details */}
          <div>
            {/* Stage selector */}
            <div className="grid grid-cols-4 gap-2 mb-8">
              {stages.map((s) => (
                <motion.button
                  key={s.id}
                  onClick={() => setSelected(s.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative py-3 rounded-2xl text-xs font-bold transition-all duration-200 border-2 ${
                    selected === s.id
                      ? "text-white border-transparent shadow-lg"
                      : "bg-white/5 text-white/60 border-white/10 hover:border-white/30 hover:text-white/90"
                  }`}
                  style={
                    selected === s.id
                      ? { backgroundColor: s.color, borderColor: s.color }
                      : {}
                  }
                >
                  <div className="text-xl mb-1">{s.emoji}</div>
                  {s.label}
                  {selected === s.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Info cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id + "info"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {/* Tip */}
                <div className="bg-white/8 border border-white/15 rounded-2xl p-5">
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-2 font-semibold">
                    How to identify
                  </div>
                  <p className="text-white/85 text-sm leading-relaxed">{stage.tip}</p>
                </div>

                {/* Grid details */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Storage", value: stage.storage, icon: stage.storageIcon },
                    { label: "Taste", value: stage.taste, icon: "👅" },
                    { label: "Best For", value: stage.use, icon: "🍽️" },
                  ].map((d) => (
                    <div
                      key={d.label}
                      className="bg-white/8 border border-white/15 rounded-2xl p-3 text-center"
                    >
                      <div className="text-xl mb-1">{d.icon}</div>
                      <div className="text-white/40 text-xs uppercase tracking-wide mb-1 font-semibold">
                        {d.label}
                      </div>
                      <div className="text-white text-xs font-semibold leading-tight">
                        {d.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Ripeness meter */}
                <div className="bg-white/8 border border-white/15 rounded-2xl p-4">
                  <div className="text-white/50 text-xs uppercase tracking-wide mb-3 font-semibold">
                    Ripeness Level
                  </div>
                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${((stage.id + 1) / stages.length) * 100}%` }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stage.color }}
                    />
                  </div>
                  <div className="flex justify-between text-white/30 text-xs mt-2">
                    <span>Hard</span>
                    <span>Perfect</span>
                    <span>Overripe</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
