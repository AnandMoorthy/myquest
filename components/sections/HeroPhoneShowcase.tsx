"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ScreenshotPlaceholder } from "@/components/sections/screenshotPlaceholders";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { appScreenshots, type AppScreenshot } from "@/data/mockData";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

function AppScreen({
  screen,
  active,
  priority = false,
}: {
  screen: AppScreenshot;
  active: boolean;
  priority?: boolean;
}) {
  if (screen.src) {
    return (
      <Image
        src={withBasePath(screen.src)}
        alt={active ? screen.alt : ""}
        fill
        priority={priority}
        decoding="sync"
        className="object-cover object-top"
        sizes="(max-width: 1024px) 260px, 300px"
      />
    );
  }

  return <ScreenshotPlaceholder id={screen.id} />;
}

function PhoneScreens({
  activeId,
  preload = false,
}: {
  activeId: string;
  preload?: boolean;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {appScreenshots.map((screen) => {
        const isActive = screen.id === activeId;
        return (
          <div
            key={screen.id}
            className={cn(
              "absolute inset-0",
              shouldReduceMotion
                ? isActive
                  ? "opacity-100"
                  : "opacity-0"
                : "transition-opacity duration-300 ease-out",
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            aria-hidden={!isActive}
          >
            <AppScreen screen={screen} active={isActive} priority={preload} />
          </div>
        );
      })}
    </>
  );
}

export function HeroPhoneShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const count = appScreenshots.length;
  const current = appScreenshots[index];
  const prev = appScreenshots[(index - 1 + count) % count];
  const next = appScreenshots[(index + 1) % count];

  useEffect(() => {
    if (shouldReduceMotion || paused) return;

    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % count);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [count, paused, shouldReduceMotion]);

  return (
    <div
      className="relative mx-auto w-full max-w-[28rem] px-2"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[90px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-8 top-16 h-48 w-48 rounded-full bg-orange/15 blur-[80px]"
        aria-hidden
      />

      <div className="relative flex h-[480px] items-center justify-center p-3 sm:h-[520px] lg:h-[560px]">
        <button
          type="button"
          aria-label={`Show ${prev.title}`}
          onClick={() => setIndex((index - 1 + count) % count)}
          className="absolute left-2 z-0 hidden w-[42%] origin-bottom -rotate-12 scale-90 opacity-45 transition-opacity hover:opacity-70 sm:block"
        >
          <PhoneFrame>
            <PhoneScreens activeId={prev.id} />
          </PhoneFrame>
        </button>

        <button
          type="button"
          aria-label={`Show ${next.title}`}
          onClick={() => setIndex((index + 1) % count)}
          className="absolute right-2 z-0 hidden w-[42%] origin-bottom rotate-12 scale-90 opacity-45 transition-opacity hover:opacity-70 sm:block"
        >
          <PhoneFrame>
            <PhoneScreens activeId={next.id} />
          </PhoneFrame>
        </button>

        <div className="relative z-10 w-[72%] max-w-[260px] p-1 sm:w-[52%] sm:max-w-[280px]">
          <PhoneFrame className="shadow-[0_30px_80px_-12px_rgba(59,130,246,0.35)]">
            <PhoneScreens activeId={current.id} preload />
          </PhoneFrame>
        </div>
      </div>

      <div
        className="mt-5 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="App screens"
      >
        {appScreenshots.map((screen, screenIndex) => {
          const isActive = screenIndex === index;
          return (
            <button
              key={screen.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setIndex(screenIndex)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "border border-white/10 bg-white/5 text-foreground/65 hover:bg-white/10 hover:text-foreground"
              )}
            >
              {screen.title}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-center text-sm text-foreground/55" aria-live="polite">
        {current.description}
      </p>
    </div>
  );
}
