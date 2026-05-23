"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { StoreButton } from "@/components/ui/StoreButton";
import { trustBullets } from "@/data/mockData";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  const { openModal } = useModal();

  return (
    <section className="relative px-6 py-32 lg:px-8">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute h-64 w-64 rounded-full bg-orange/10 blur-[100px] animate-glow-pulse" />
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
          neighborhood. Join early access and be first when we launch in your
          city.
        </p>

        <ul className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          {trustBullets.map((text) => (
            <li key={text} className="text-sm text-foreground/70">
              {text}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <StoreButton platform="android" onClick={openModal} />
          <StoreButton platform="ios" onClick={openModal} />
        </div>
      </motion.div>
    </section>
  );
}
