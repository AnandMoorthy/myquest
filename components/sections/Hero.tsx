"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/providers/ModalProvider";
import { InteractiveMap } from "@/components/map/InteractiveMap";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeUp } from "@/lib/motion";

export function Hero() {
  const { openModal } = useModal();

  return (
    <section className="relative min-h-screen overflow-x-hidden">
      <InteractiveMap />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pb-20 pt-28 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="max-w-2xl"
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
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-gradient">
              Discover spontaneous experiences
            </span>{" "}
            <span className="text-foreground">around you.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-lg text-lg text-foreground/60 sm:text-xl"
          >
            Join nearby micro activities or host your own quests in minutes.
            MyQuest is the map for real-world connection. Discover what&apos;s
            happening now, meet in person, and skip the endless scroll.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <StoreButton platform="android" onClick={openModal} />
            <StoreButton platform="ios" onClick={openModal} />
          </motion.div>
        </motion.div>
      </div>

      <div className="section-divider relative z-20 mx-auto max-w-6xl px-6 lg:px-8" />
    </section>
  );
}
