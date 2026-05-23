"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  communityFeed,
  getActivityChips,
  type FeedItem,
} from "@/data/mockData";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

function FeedRow({ item }: { item: FeedItem }) {
  const isHosted = item.action === "hosted";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.35 }}
      className="flex items-center gap-4 border-b border-white/5 py-4 last:border-0"
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
          isHosted
            ? "bg-orange/20 text-orange"
            : "bg-primary/20 text-accent"
        )}
      >
        {item.avatar}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{item.name}</span>{" "}
          <span className="text-foreground/60">
            {item.action === "joined" ? "joined" : "hosted"}
          </span>{" "}
          <span
            className={cn(
              "font-medium",
              isHosted ? "text-orange" : "text-accent"
            )}
          >
            {item.quest}
          </span>
        </p>
        {item.count && (
          <p className="mt-0.5 text-xs text-foreground/50">
            {item.count} people joined
          </p>
        )}
      </div>
      <span className="shrink-0 text-xs text-foreground/40">{item.time}</span>
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
    </motion.div>
  );
}

export function Community() {
  const [visibleItems, setVisibleItems] = useState<FeedItem[]>(
    communityFeed.slice(0, 4)
  );
  const [tick, setTick] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activityChips = getActivityChips(communityFeed, 4);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setTick((t) => {
        const next = (t + 1) % communityFeed.length;
        const start = next;
        const items: FeedItem[] = [];
        for (let i = 0; i < 4; i++) {
          items.push(communityFeed[(start + i) % communityFeed.length]);
        }
        setVisibleItems(items);
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section id="community" className="section-band relative px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Community"
          title="Real people, real adventures"
          description="See what's happening around you right now. Quests going live every minute."
          accentLabel
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-xl"
        >
          <div className="glass rounded-2xl px-6 shadow-xl shadow-primary/5">
            <div className="flex items-center justify-between border-b border-white/5 py-4">
              <span className="text-sm font-medium text-foreground/80">
                Live activity
              </span>
              <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Active now
              </span>
            </div>
            <AnimatePresence mode="popLayout">
              <div key={tick}>
                {visibleItems.map((item) => (
                  <FeedRow key={`${tick}-${item.id}`} item={item} />
                ))}
              </div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {activityChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-foreground/60"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
