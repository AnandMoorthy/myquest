"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  className,
  type = "button",
  "aria-label": ariaLabel,
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-[#1d4ed8]",
    outline:
      "border border-white/15 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/25",
    ghost: "text-foreground/80 hover:text-foreground hover:bg-white/5",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
}
