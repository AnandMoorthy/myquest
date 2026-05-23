"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { QuestPin as QuestPinType } from "@/data/mockData";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

type QuestPinProps = {
  pin: QuestPinType;
  isActive: boolean;
  onToggle: () => void;
};

type CardPlacement = "above" | "below" | "left" | "right";

/** Keep tooltips inside the hero based on pin position */
function getCardPlacement(x: number, y: number): CardPlacement {
  if (y < 24) return "below";
  if (y > 72) return "above";
  if (x > 82) return "left";
  if (x < 18) return "right";
  return "above";
}

const cardPlacementStyles: Record<CardPlacement, string> = {
  above: "bottom-full left-1/2 mb-2 -translate-x-1/2",
  below: "top-full left-1/2 mt-2 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

export function QuestPin({ pin, isActive, onToggle }: QuestPinProps) {
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const showCard = isHovered || isActive;
  const floatDuration = 1.4 + parseInt(pin.id, 10) * 0.08;
  const cardPlacement = pin.cardPlacement ?? getCardPlacement(pin.x, pin.y);

  const visibilityClass =
    pin.showFrom === "lg"
      ? "hidden lg:block"
      : pin.showFrom === "md"
        ? "hidden md:block"
        : undefined;

  return (
    <div
      className={cn("absolute z-10", visibilityClass)}
      style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -50%)" }}
    >
      <motion.button
        type="button"
        aria-label={`${pin.title} quest pin`}
        aria-expanded={showCard}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        onClick={onToggle}
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
        transition={
          shouldReduceMotion
            ? {}
            : {
                duration: floatDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
        className="group relative flex flex-col items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <span className="absolute -right-0.5 -top-0.5 z-20 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
        <span
          className={cn(
            "relative flex h-10 w-10 items-center justify-center rounded-full border bg-primary/20 text-lg shadow-lg backdrop-blur-sm transition-all sm:h-11 sm:w-11 sm:text-xl",
            isActive
              ? "border-orange/60 shadow-orange/40"
              : "border-primary/40 shadow-primary/30 group-hover:border-primary group-hover:shadow-primary/50"
          )}
        >
          {pin.emoji}
        </span>
      </motion.button>

      <AnimatePresence>
        {showCard && (
          <div
            className={cn(
              "absolute z-50",
              cardPlacementStyles[cardPlacement]
            )}
          >
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
