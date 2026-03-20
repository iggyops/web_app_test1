"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Clock, Users, Star, ChevronRight } from "lucide-react";

const recipes = [
  {
    id: 1,
    name: "Classic Guacamole",
    emoji: "🥑",
    category: "Dip",
    time: "10 min",
    servings: 4,
    rating: 4.9,
    difficulty: "Easy",
    color: "#4a7c2f",
    gradient: "from-[#4a7c2f] to-[#2d5a1b]",
    ingredients: [
      "3 ripe avocados",
      "1 lime, juiced",
      "1 tsp salt",
      "½ cup diced onion",
      "3 tbsp chopped cilantro",
      "2 roma tomatoes, diced",
      "1 tsp minced garlic",
      "Pinch of cayenne pepper",
    ],
    instructions: [
      "Halve avocados, remove pits, scoop flesh into bowl",
      "Mash to desired consistency with a fork",
      "Stir in lime juice and salt",
      "Fold in onion, cilantro, tomatoes, and garlic",
      "Season with cayenne; taste and adjust",
      "Serve immediately or cover tightly and refrigerate",
    ],
  },
  {
    id: 2,
    name: "Avocado Toast",
    emoji: "🍞",
    category: "Breakfast",
    time: "5 min",
    servings: 2,
    rating: 4.8,
    difficulty: "Easy",
    color: "#7db545",
    gradient: "from-[#7db545] to-[#4a7c2f]",
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs (poached)",
      "Red pepper flakes",
      "Everything bagel seasoning",
      "Lemon zest",
      "Microgreens to garnish",
      "Flaky sea salt",
    ],
    instructions: [
      "Toast sourdough to golden perfection",
      "Halve avocado, remove pit, scoop and roughly mash",
      "Season mash with lemon zest and flaky salt",
      "Poach eggs to your liking",
      "Spread avocado generously on toast",
      "Top with poached egg, chili flakes, and microgreens",
    ],
  },
  {
    id: 3,
    name: "Avocado Chocolate Mousse",
    emoji: "🍫",
    category: "Dessert",
    time: "15 min",
    servings: 4,
    rating: 4.7,
    difficulty: "Medium",
    color: "#2d5a1b",
    gradient: "from-[#2d5a1b] to-[#1e3a0f]",
    ingredients: [
      "2 ripe avocados",
      "¼ cup raw cacao powder",
      "3 tbsp maple syrup",
      "1 tsp vanilla extract",
      "Pinch of sea salt",
      "2 tbsp coconut milk",
      "Dark chocolate shavings",
      "Fresh berries",
    ],
    instructions: [
      "Blend avocado flesh until silky smooth",
      "Add cacao powder, maple syrup, and vanilla",
      "Stream in coconut milk while blending",
      "Add salt and blend until ultra-creamy",
      "Taste and adjust sweetness",
      "Chill 30 mins; top with chocolate and berries",
    ],
  },
  {
    id: 4,
    name: "Avocado Buddha Bowl",
    emoji: "🥗",
    category: "Lunch",
    time: "20 min",
    servings: 2,
    rating: 4.9,
    difficulty: "Medium",
    color: "#a8c45a",
    gradient: "from-[#a8c45a] to-[#7db545]",
    ingredients: [
      "1 cup quinoa, cooked",
      "1 avocado, sliced",
      "1 cup roasted chickpeas",
      "1 cup cherry tomatoes",
      "Cucumber ribbons",
      "Tahini dressing",
      "Toasted sesame seeds",
      "Lemon juice",
    ],
    instructions: [
      "Cook quinoa and let cool slightly",
      "Roast chickpeas with olive oil and spices at 400°F",
      "Arrange quinoa as base in bowls",
      "Fan avocado slices artfully over quinoa",
      "Add chickpeas, tomatoes, and cucumber",
      "Drizzle tahini dressing and finish with sesame seeds",
    ],
  },
];

const categories = ["All", "Breakfast", "Lunch", "Dip", "Dessert"];

function RecipeCard({
  recipe,
  onClick,
  index,
}: {
  recipe: (typeof recipes)[number];
  onClick: () => void;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="group cursor-pointer rounded-3xl overflow-hidden border border-[#e0ead0] bg-white shadow-sm hover:shadow-xl hover:shadow-[#4a7c2f]/10 transition-all duration-300"
    >
      {/* Card top */}
      <div
        className={`h-36 bg-gradient-to-br ${recipe.gradient} flex items-center justify-center relative overflow-hidden`}
      >
        <div className="text-7xl opacity-80 group-hover:scale-110 transition-transform duration-500">
          {recipe.emoji}
        </div>
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
          {recipe.category}
        </span>
        {/* Difficulty */}
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            recipe.difficulty === "Easy"
              ? "bg-[#d4e84a]/90 text-[#1e3a0f]"
              : "bg-white/20 text-white border border-white/30"
          }`}
        >
          {recipe.difficulty}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3
          className="font-bold text-lg text-[#1e3a0f] mb-2 group-hover:text-[#4a7c2f] transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {recipe.name}
        </h3>

        <div className="flex items-center gap-4 text-[#1e3a0f]/50 text-sm mb-4">
          <span className="flex items-center gap-1">
            <Clock size={13} /> {recipe.time}
          </span>
          <span className="flex items-center gap-1">
            <Users size={13} /> {recipe.servings} servings
          </span>
          <span className="flex items-center gap-1 text-[#7db545]">
            <Star size={13} fill="currentColor" /> {recipe.rating}
          </span>
        </div>

        <div
          className="flex items-center gap-1 text-[#4a7c2f] font-semibold text-sm group-hover:gap-2 transition-all"
        >
          View Recipe <ChevronRight size={14} />
        </div>
      </div>
    </motion.div>
  );
}

function Modal({
  recipe,
  onClose,
}: {
  recipe: (typeof recipes)[number];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(15, 34, 8, 0.75)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Header */}
        <div
          className={`h-28 bg-gradient-to-br ${recipe.gradient} flex items-center justify-between px-8 relative`}
        >
          <div>
            <div className="text-white/70 text-sm font-semibold tracking-wide uppercase mb-1">
              {recipe.category} · {recipe.time}
            </div>
            <h2
              className="text-white font-bold text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {recipe.name}
            </h2>
          </div>
          <div className="text-5xl">{recipe.emoji}</div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-8 grid md:grid-cols-2 gap-8">
          {/* Ingredients */}
          <div>
            <h3
              className="font-bold text-[#1e3a0f] text-lg mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ingredients
            </h3>
            <ul className="space-y-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#1e3a0f]/75">
                  <span
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: recipe.color }}
                  />
                  {ing}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h3
              className="font-bold text-[#1e3a0f] text-lg mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Instructions
            </h3>
            <ol className="space-y-3">
              {recipe.instructions.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-[#1e3a0f]/75">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white font-bold text-xs"
                    style={{ backgroundColor: recipe.color }}
                  >
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Recipes() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<(typeof recipes)[number] | null>(null);
  const titleRef = useRef(null);
  const inView = useInView(titleRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? recipes
      : recipes.filter((r) => r.category === activeCategory);

  return (
    <section id="recipes" className="py-28 px-6" style={{ backgroundColor: "#f8f4e8" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#7db545] font-semibold text-sm tracking-widest uppercase mb-3">
            Kitchen Inspiration
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1e3a0f] mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Avocado Recipes
          </h2>
          <p className="text-[#1e3a0f]/60 max-w-xl mx-auto text-lg">
            From breakfast to dessert — delicious ways to enjoy your avocados every day.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#1e3a0f] text-white shadow-md scale-105"
                  : "bg-white border border-[#e0ead0] text-[#1e3a0f]/70 hover:border-[#7db545] hover:text-[#4a7c2f]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((recipe, i) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                index={i}
                onClick={() => setSelected(recipe)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Recipe modal */}
      <AnimatePresence>
        {selected && (
          <Modal recipe={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
