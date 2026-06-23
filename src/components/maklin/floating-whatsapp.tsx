"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { site, waLink } from "@/config/site";

export function FloatingWhatsApp() {
  const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-expand the pill once after first appearance (desktop), keep compact on mobile
  React.useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => setExpanded(true), 800);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6"
        >
          {/* Pulse ring */}
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi Gratis via WhatsApp"
            className="group relative inline-flex items-center"
            onMouseEnter={() => setExpanded(true)}
          >
            <span className="absolute right-0 top-1/2 -z-10 size-14 -translate-y-1/2 translate-x-0 rounded-full bg-[#25D366] opacity-60 blur-md" />
            <span className="absolute right-0 top-1/2 -z-10 size-14 -translate-y-1/2 animate-ping rounded-full bg-[#25D366] opacity-30" />

            <motion.div
              animate={{ width: expanded ? "auto" : "auto" }}
              className="flex items-center overflow-hidden rounded-full bg-[#25D366] py-3 pl-3.5 pr-3.5 text-white shadow-[0_12px_32px_-6px_rgba(37,211,102,0.6)] ring-1 ring-white/20 transition-all hover:bg-[#1fae54] sm:pr-4"
            >
              <MessageCircle className="size-6 shrink-0" />
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.span
                    initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                    animate={{ width: "auto", opacity: 1, marginLeft: 10 }}
                    exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden whitespace-nowrap text-sm font-bold"
                  >
                    Konsultasi Gratis
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </a>

          {/* Collapsible dismiss on mobile when expanded */}
          {expanded && (
            <button
              type="button"
              aria-label="Sembunyikan"
              onClick={(e) => {
                e.preventDefault();
                setExpanded(false);
              }}
              className="inline-flex size-6 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur sm:hidden"
            >
              <X className="size-3.5" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
