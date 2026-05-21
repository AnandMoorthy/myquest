"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { QuestPin as QuestPinType } from "@/data/mockData";
import { GlassCard } from "@/components/ui/GlassCard";

type QuestPinProps = {
  pin: QuestPinType;
};

export function QuestPin({ pin }: QuestPinProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const showCard = isHovered || isActive;

  return (
    <div
      className="absolute z-10"
      style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -50%)" }}
    >
      <motion.button
        type="button"
        aria-label={`${pin.title} quest pin`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={() => setIsActive((prev) => !prev)}
        animate={
          shouldReduceMotion
            ? {}
            : { y: [0, -6, 0], scale: [1, 1.05, 1] }
        }
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: 3 + parseInt(pin.id) * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="group relative flex flex-col items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
      >
        <span className="absolute -right-0.5 -top-0.5 z-20 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-lg shadow-lg shadow-primary/30 backdrop-blur-sm transition-all group-hover:border-primary group-hover:shadow-primary/50 sm:h-12 sm:w-12 sm:text-xl">
          {pin.emoji}
        </span>
        <span className="absolute inset-0 -z-10 rounded-full bg-primary/30 blur-md animate-glow-pulse" />
      </motion.button>

      <AnimatePresence>
        {showCard && (
          <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 pb-1">
            <GlassCard
              title={pin.title}
              duration={pin.duration}
              distance={pin.distance}
              joined={pin.joined}
            />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
