"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { features } from "@/data/mockData";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Features() {
  return (
    <section id="features" className="relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Features"
          title="Discover, join, and host"
          description="Everything you need on one map."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={cn(
                "glass group rounded-2xl p-6 transition-shadow",
                feature.highlight
                  ? "border-orange/20 hover:shadow-lg hover:shadow-orange/10 lg:scale-[1.02]"
                  : "hover:shadow-lg hover:shadow-primary/10",
                index === 4 && "sm:col-span-2 lg:col-span-1 lg:col-start-2"
              )}
            >
              <div
                className={cn(
                  "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                  feature.highlight
                    ? "bg-orange/15 text-orange group-hover:bg-orange/25"
                    : "bg-primary/15 text-primary group-hover:bg-primary/25"
                )}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {feature.description}
              </p>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
