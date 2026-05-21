"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps } from "@/data/mockData";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section id="howitworks" className="relative px-6 py-24 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          label="How it Works"
          title="Three steps to your next adventure"
          description="From discovery to meetup, it only takes minutes."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid gap-12 md:grid-cols-3 md:gap-8"
        >
          {/* Connector line - desktop */}
          <div className="absolute left-[16.67%] right-[16.67%] top-12 hidden h-0.5 md:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportOnce}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
            />
          </div>

          {howItWorksSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/20">
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {step.step}
                  </span>
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-foreground/60">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
