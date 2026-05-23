"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useModal } from "@/components/providers/ModalProvider";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/data/mockData";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollNavbar();
  const { openModal } = useModal();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6",
          scrolled
            ? "glass border border-white/10 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <Logo priority href="#" />

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="cursor-pointer text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button onClick={openModal}>Get Early Access</Button>
        </div>

        <button
          type="button"
          className="cursor-pointer rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 lg:hidden"
        >
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block cursor-pointer py-2 text-foreground/80 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button onClick={openModal} className="mt-4 w-full">
            Get Early Access
          </Button>
        </motion.div>
      )}
    </header>
  );
}
