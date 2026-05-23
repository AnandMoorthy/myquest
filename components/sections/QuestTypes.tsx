"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { questCategories } from "@/data/mockData";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function QuestTypes() {
  return (
    <section id="quests" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Explore"
          title="Explore what's nearby"
          description="A few popular ideas, and much more on the map."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {questCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="glass group rounded-2xl p-5 transition-shadow hover:border-orange/20 hover:shadow-lg hover:shadow-orange/5"
            >
              <span className="text-2xl" role="img" aria-hidden>
                {category.emoji}
              </span>
              <h3 className="mt-3 font-semibold text-foreground group-hover:text-orange">
                {category.title}
              </h3>
              <p className="mt-1 text-sm text-foreground/55">
                {category.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
