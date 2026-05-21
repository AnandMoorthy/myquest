"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Users } from "lucide-react";
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
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "glass pointer-events-none w-44 rounded-xl p-3 shadow-xl shadow-primary/10",
        className
      )}
    >
      <p className="mb-2 text-sm font-semibold text-foreground">{title}</p>
      <div className="space-y-1 text-xs text-foreground/60">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3 text-accent" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3 text-accent" />
          <span>{distance}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3 w-3 text-accent" />
          <span>{joined} joined</span>
        </div>
      </div>
    </motion.div>
  );
}
