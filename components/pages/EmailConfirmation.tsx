"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useModal } from "@/components/providers/ModalProvider";
import { Logo } from "@/components/ui/Logo";
import { StoreButton } from "@/components/ui/StoreButton";
import { withBasePath } from "@/lib/basePath";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function EmailConfirmation() {
  const { openModal } = useModal();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-80 w-80 rounded-full bg-primary/15 blur-[100px] animate-glow-pulse" />
        <div className="absolute h-56 w-56 rounded-full bg-orange/10 blur-[80px] animate-glow-pulse" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-lg"
      >
        <motion.div variants={fadeUp} className="mb-10 flex justify-center">
          <Logo href={withBasePath("/")} priority />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-10"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15">
            <CheckCircle2 className="h-9 w-9 text-primary" aria-hidden />
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            <span className="text-gradient">Email confirmed</span>
          </h1>
          <p className="mt-4 text-foreground/60">
            Your account is verified. Open the MyQuest app and sign in with the
            email and password you used when signing up.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StoreButton platform="android" onClick={openModal} />
            <StoreButton platform="ios" onClick={openModal} />
          </div>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-center">
          <a
            href={withBasePath("/")}
            className="text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
          >
            Back to homepage
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
}
