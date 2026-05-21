"use client";

import { motion } from "framer-motion";
import { questPins } from "@/data/mockData";
import { useMouseGradient } from "@/hooks/useMouseGradient";
import { QuestPin } from "./QuestPin";

export function InteractiveMap() {
  const { position, handleMouseMove } = useMouseGradient();

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseMove={handleMouseMove}
      aria-hidden="true"
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />

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

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] animate-grid-drift"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Abstract roads SVG */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 300 Q250 200 500 300 T1000 300"
          stroke="#2563EB"
          strokeWidth="2"
          strokeOpacity="0.4"
        />
        <path
          d="M0 400 Q300 350 600 400 T1000 380"
          stroke="#60A5FA"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="8 8"
        />
        <path
          d="M100 0 Q400 250 700 500 T1000 600"
          stroke="#2563EB"
          strokeWidth="1"
          strokeOpacity="0.2"
        />
        <path
          d="M800 0 Q500 300 200 600"
          stroke="#60A5FA"
          strokeWidth="1"
          strokeOpacity="0.25"
        />
        <circle cx="500" cy="300" r="120" stroke="#2563EB" strokeWidth="0.5" strokeOpacity="0.15" />
        <circle cx="500" cy="300" r="200" stroke="#60A5FA" strokeWidth="0.5" strokeOpacity="0.1" />
      </svg>

      {/* Quest pins */}
      <div className="absolute inset-0">
        {questPins.map((pin) => (
          <QuestPin key={pin.id} pin={pin} />
        ))}
      </div>

      {/* Bottom fade for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
    </div>
  );
}
