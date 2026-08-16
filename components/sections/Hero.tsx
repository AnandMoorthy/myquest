"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { HeroPhoneShowcase } from "@/components/sections/HeroPhoneShowcase";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <InteractiveMap />

      <div className="relative z-20 mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 pb-16 pt-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-8 lg:pb-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-xl"
        >
          <motion.button
            type="button"
            variants={fadeUp}
            onClick={openModal}
            className="mb-6 inline-flex cursor-pointer items-center rounded-full border border-orange/25 bg-orange/10 px-4 py-1.5 text-sm font-medium text-orange transition-colors hover:bg-orange/15"
          >
            Launching soon · Join the waitlist
          </motion.button>

          <motion.h1
            variants={fadeUp}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl"
          >
            <span className="text-gradient">Discover live experiences</span>{" "}
            <span className="text-foreground">around you.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg text-foreground/60 sm:text-xl"
          >
            Join a nearby quest, or host your own in minutes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <StoreButton platform="android" onClick={openModal} />
            <StoreButton platform="ios" onClick={openModal} />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="lg:justify-self-stretch"
        >
          <HeroPhoneShowcase />
        </motion.div>
      </div>

      <div className="section-divider relative z-20 mx-auto max-w-6xl px-6 lg:px-8" />
    </section>
  );
}
