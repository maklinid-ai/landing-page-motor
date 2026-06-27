"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, waLink } from "@/config/site";
import { ConsultCta } from "./cta";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:h-[72px] lg:px-8",
          scrolled ? "mt-0 lg:mt-2" : "mt-0",
        )}
        suppressHydrationWarning
      >
        <div
          className={cn(
            "absolute inset-x-3 top-2 -z-10 h-[calc(100%-0.5rem)] rounded-2xl transition-all duration-300 sm:inset-x-4 lg:inset-x-6",
            scrolled
              ? "glass border border-black/5 shadow-premium"
              : "border border-transparent",
          )}
        />
        <a href="#top" className="flex items-center" aria-label="MAKLIN beranda">
          <img
            src="/logo-konsultan-motor.png"
            alt="MAKLIN"
            className="h-12 w-auto object-contain"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-black/5 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
          >
            WhatsApp
          </a>
          <ConsultCta size="sm">Konsultasi Gratis</ConsultCta>
        </div>

        <button
          type="button"
          aria-label="Buka menu"
          onClick={() => setOpen(true)}
          className="inline-flex size-11 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-ink backdrop-blur lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
            suppressHydrationWarning
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl"
              suppressHydrationWarning
            >
              <div className="flex items-center justify-between">
                <img
                  src="/logo-konsultan-motor.png"
                  alt="MAKLIN"
                  className="h-12 w-auto object-contain"
                />
                <button
                  type="button"
                  aria-label="Tutup menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-xl border border-black/10 text-ink"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-ink transition-colors hover:bg-black/5"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <ConsultCta
                  size="lg"
                  className="w-full"
                  pkg={null}
                >
                  Konsultasi Gratis
                </ConsultCta>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 text-sm font-semibold text-ink"
                >
                  Chat WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
