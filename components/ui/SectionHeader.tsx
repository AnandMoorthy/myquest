"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  intro?: string;
  className?: string;
  centered?: boolean;
  accentLabel?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  intro,
  className,
  centered = true,
  accentLabel = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        "mb-12 max-w-2xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest",
            accentLabel
              ? "bg-orange/10 text-orange"
              : "bg-primary/10 text-accent"
          )}
        >
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-foreground/60">{description}</p>
      )}
      {intro && (
        <p className="mt-3 text-base leading-relaxed text-foreground/50">
          {intro}
        </p>
      )}
    </motion.div>
  );
}
