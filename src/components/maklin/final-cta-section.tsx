"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { site, waLink } from "@/config/site";
import { Reveal } from "./reveal";
import { useLeadForm } from "./use-lead-form";

export function FinalCtaSection() {
  const openForm = useLeadForm((s) => s.openForm);

  return (
    <section className="relative overflow-hidden bg-brand py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>
      {/* Decorative big circles */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 -top-20 -z-10 size-[300px] rounded-full bg-ink/10 blur-[60px]"
      />
      <motion.div
        animate={{ scale: [1.05, 1, 1.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-24 -right-16 -z-10 size-[340px] rounded-full bg-white/30 blur-[80px]"
      />

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-ink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-ink ring-1 ring-inset ring-ink/15">
            Saatnya Memulai
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-6 text-balance text-4xl font-black leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Modal Bisa Habis Karena Salah Memulai
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-lg font-medium text-ink/70 sm:text-xl">
            Atau Menjadi Bisnis yang Menghasilkan Bertahun-Tahun
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-ink/60">
            Konsultasikan rencana investasi Anda dengan Maklin. Tanpa biaya,
            tanpa kewajiban. Kami bantu Anda memulai dengan benar.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openForm(null)}
              className="group inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-8 text-base font-bold text-white shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/30 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex items-center gap-2">
                Konsultasi Gratis Sekarang
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-ink/20 bg-white/40 px-8 text-base font-bold text-ink backdrop-blur transition-all duration-300 hover:border-ink/40 hover:bg-white/60 sm:w-auto"
            >
              <MessageCircle className="size-5" />
              {site.whatsappDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-ink/50">
            Konsultasi gratis • Tanpa kewajiban • Respons cepat
          </p>
        </Reveal>
      </div>
    </section>
  );
}
