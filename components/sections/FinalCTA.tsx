"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="relative px-6 py-32 lg:px-8">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
      </div>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative mx-auto max-w-3xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="text-gradient">
            Your next adventure is closer than you think.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-foreground/60">
          Download MyQuest and start discovering spontaneous experiences in your
          neighborhood.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <StoreButton platform="android" onClick={openModal} />
          <StoreButton platform="ios" onClick={openModal} />
        </div>
      </motion.div>
    </section>
  );
}
