"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { cn } from "@/lib/utils";

type StoreButtonProps = {
  platform: "android" | "ios";
  onClick?: () => void;
  className?: string;
};

export function StoreButton({ platform, onClick, className }: StoreButtonProps) {
  const isAndroid = platform === "android";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Download for ${isAndroid ? "Android" : "iOS"}`}
      className={cn(
        "flex cursor-pointer items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg"
        aria-hidden
      >
        {isAndroid ? (
          <span className="text-primary">▶</span>
        ) : (
          <Apple className="h-5 w-5 text-foreground" />
        )}
      </span>
      <span className="flex flex-col items-start text-left">
        <span className="text-[10px] uppercase tracking-wide text-foreground/50">
          Download on
        </span>
        <span className="text-sm font-semibold leading-tight">
          {isAndroid ? "Google Play" : "App Store"}
        </span>
      </span>
    </motion.button>
  );
}
