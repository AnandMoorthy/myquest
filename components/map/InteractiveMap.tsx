"use client";

import { motion } from "framer-motion";
import { questPins } from "@/data/mockData";
import { useMouseGradient } from "@/hooks/useMouseGradient";
import { MapGrid, MapPattern } from "./MapPattern";
import { QuestPin } from "./QuestPin";

export function InteractiveMap() {
  const { position, handleMouseMove } = useMouseGradient();

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      {/* Lighter base so map pattern shows through */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-surface/50 to-background/80" />

      <MapGrid className="absolute inset-0 opacity-[0.08] animate-grid-drift" />

      {/* City map — visible behind quest pins */}
      <div className="absolute inset-0 opacity-[0.32]">
        <MapPattern className="h-full w-full text-accent" />
      </div>

      {/* Mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, rgba(37, 99, 235, 0.15), transparent 60%)`,
        }}
      />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 bottom-1/4 h-80 w-80 rounded-full bg-accent/15 blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange/10 blur-[80px]"
      />

      {/* Quest pins */}
      <div className="absolute inset-0">
        {questPins.map((pin) => (
          <QuestPin key={pin.id} pin={pin} />
        ))}
      </div>

      {/* Fade left for headline readability; keep right open for map + pins */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
    </div>
  );
}
