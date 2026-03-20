"use client";

import { motion } from "framer-motion";

const links = {
  Explore: ["Benefits", "Nutrition", "Recipes", "Ripeness Guide"],
  Recipes: ["Guacamole", "Avocado Toast", "Chocolate Mousse", "Buddha Bowl"],
  Learn: ["History", "Varieties", "Growing Tips", "Storage Guide"],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-20 px-6"
      style={{ backgroundColor: "#0f2208" }}
    >
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#1e3a0f" />
        </svg>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7db545] blur-3xl" />
        <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-[#d4e84a] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🥑</span>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Avocado
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your ultimate guide to the world's most beloved green fruit. From farm to table.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["𝕏", "IG", "YT", "📌"].map((s, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.1, backgroundColor: "#7db545" }}
                  className="w-9 h-9 rounded-full bg-white/10 text-white/60 hover:text-white text-xs font-bold flex items-center justify-center transition-colors duration-200"
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="text-[#d4e84a] font-semibold text-sm uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e3a0f]/60 border border-[#7db545]/20 rounded-3xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3
              className="text-white font-bold text-xl mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Get weekly avocado recipes
            </h3>
            <p className="text-white/50 text-sm">
              Fresh ideas delivered to your inbox every Monday.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 md:w-56 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#7db545] transition-colors"
            />
            <button className="bg-[#7db545] hover:bg-[#d4e84a] text-white hover:text-[#1e3a0f] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 whitespace-nowrap hover:scale-105">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Avocado Guide. Made with 💚 and good fats.
          </p>
          <div className="flex gap-6 text-white/30 text-sm">
            <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
