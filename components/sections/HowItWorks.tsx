"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps } from "@/data/mockData";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function HowItWorks() {
  return (
    <section id="howitworks" className="section-band relative px-6 py-24 lg:px-8">
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
          className="relative"
        >
          {/* Connector runs behind step icons */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 z-0 hidden md:block"
            aria-hidden
          >
            <div className="mx-auto flex max-w-2xl items-center px-[16.67%]">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-accent/50" />
              <div className="mx-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
              <div className="h-px flex-1 bg-gradient-to-r from-accent/50 via-primary/50 to-orange/50" />
              <div className="mx-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange/60" />
              <div className="h-px flex-1 bg-gradient-to-r from-orange/50 via-accent/50 to-transparent" />
            </div>
          </div>

          <div className="relative z-10 grid gap-12 md:grid-cols-3 md:gap-8">
            {howItWorksSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  variants={fadeUp}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative mb-6 rounded-2xl bg-background p-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 shadow-lg shadow-primary/20">
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {step.step}
                      </span>
                      <Icon className="h-7 w-7 text-accent" />
                    </div>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
