"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  title: string;
  duration: string;
  distance: string;
  joined: number;
  className?: string;
};

export function GlassCard({
  title,
  duration,
  distance,
  joined,
  className,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.97 }}
      transition={{ duration: 0.15 }}
      className={cn(
        "glass pointer-events-none w-44 rounded-xl p-3 shadow-xl shadow-primary/10",
        className
      )}
    >
      <p className="mb-2 text-sm font-semibold text-foreground">{title}</p>
      <div className="space-y-1 text-xs text-foreground/60">
        <p>{duration}</p>
        <p>{distance}</p>
        <p>{joined} joined</p>
      </div>
    </motion.div>
  );
}
