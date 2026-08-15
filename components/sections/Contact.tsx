"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/motion";

const CONTACT_EMAIL = "hello@myquest.live";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-band relative scroll-mt-24 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeader
          label="Contact"
          title="Get in touch"
          description="Questions, feedback, or just saying hi? We read every email."
          accentLabel
        />

        <motion.a
          href={`mailto:${CONTACT_EMAIL}`}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="glass mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl px-6 py-5 text-foreground transition-shadow hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Mail className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-semibold">{CONTACT_EMAIL}</span>
        </motion.a>
      </div>
    </section>
  );
}
