"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useModal } from "@/components/providers/ModalProvider";
import { Button } from "./Button";

export function ComingSoonModal() {
  const { isOpen, closeModal } = useModal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitted(true);
    }
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="glass relative w-full max-w-md rounded-2xl p-8 shadow-2xl shadow-primary/20"
            >
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close modal"
                className="absolute right-4 top-4 rounded-lg p-1 text-foreground/50 transition-colors hover:bg-white/10 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>

              {submitted ? (
                <div className="text-center">
                  <p className="text-4xl mb-4">🎉</p>
                  <h2
                    id="modal-title"
                    className="text-xl font-bold text-foreground"
                  >
                    You&apos;re on the list!
                  </h2>
                  <p className="mt-2 text-foreground/60">
                    We&apos;ll notify you when MyQuest launches.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <p className="text-4xl mb-2">🚀</p>
                    <h2
                      id="modal-title"
                      className="text-2xl font-bold text-foreground"
                    >
                      Coming Soon
                    </h2>
                    <p className="mt-2 text-foreground/60">
                      MyQuest is launching soon. Join the waitlist to get early
                      access.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      aria-label="Email address"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <Button type="submit" className="w-full">
                      Join Waitlist
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
