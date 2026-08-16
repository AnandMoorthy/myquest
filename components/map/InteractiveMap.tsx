"use client";

import { motion } from "framer-motion";
import { useMouseGradient } from "@/hooks/useMouseGradient";
import { MapGrid, MapPattern } from "./MapPattern";

export function InteractiveMap() {
  const { position, handleMouseMove } = useMouseGradient();

  return (
    <div
      className="absolute inset-0 overflow-visible"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-surface/50 to-background/80" />
        <MapGrid className="absolute inset-0 opacity-[0.08] animate-grid-drift" />
        <div className="absolute inset-0 opacity-[0.32]">
          <MapPattern className="h-full w-full text-accent" />
        </div>
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${position.x}% ${position.y}%, rgba(59, 130, 246, 0.15), transparent 60%)`,
          }}
        />
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      </div>
    </div>
  );
}
