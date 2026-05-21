"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  centered?: boolean;
};

export function SectionHeader({
  label,
  title,
  description,
  className,
  centered = true,
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
        <span className="mb-3 inline-block text-sm font-medium uppercase tracking-widest text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-foreground/60">{description}</p>
      )}
    </motion.div>
  );
}
