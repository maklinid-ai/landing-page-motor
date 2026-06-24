"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Calendar, Wallet, ArrowRight, Check } from "lucide-react";
import { profitTiers, type ProfitTier } from "@/config/site";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ConsultCta } from "./cta";
import { cn } from "@/lib/utils";

export function ProfitSimulationSection() {
  const [active, setActive] = React.useState<ProfitTier>(
    profitTiers.find((t) => t.highlight) ?? profitTiers[0],
  );

  // Cumulative net profit per month (linear approximation until BEP, then sustained).
  const bepMonths = parseInt(active.bep);
  const monthlyProfitNum = parseFloat(
    active.monthlyProfit.replace(/[^\d,]/g, "").replace(",", "."),
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const investmentY = active.investmentValue;

  return (
    <section
      id="simulasi"
      className="relative overflow-hidden bg-brand py-20 sm:py-28"
    >
      <div className="absolute inset-0 -z-10 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 size-[400px] rounded-full bg-white/30 blur-[100px]" />
      <div className="pointer-events-none absolute -left-24 bottom-10 -z-10 size-[400px] rounded-full bg-ink/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simulasi Profit"
          title="Lihat Potensi Hasil Investasi Anda"
          description="Pilih paket untuk melihat proyeksi laba bersih bulanan dan estimasi titik balik modal (BEP)."
        />

        {/* Tier selector */}
        <Reveal className="mt-10 flex justify-center" delay={0.05}>
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/40 p-1.5 backdrop-blur">
            {profitTiers.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t)}
                className={cn(
                  "relative rounded-full px-5 py-2.5 text-sm font-bold transition-colors",
                  active.id === t.id
                    ? "text-white"
                    : "text-ink/70 hover:text-ink",
                )}
              >
                {active.id === t.id && (
                  <motion.span
                    layoutId="profit-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink"
                    transition={{ type: "spring", damping: 30, stiffness: 350 }}
                  />
                )}
                {t.name}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left: numbers */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-ink/10 bg-white p-6 shadow-premium sm:p-8"
              suppressHydrationWarning
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
                  Paket {active.name}
                </span>
                {active.highlight && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-ink px-3 py-1 text-xs font-bold text-brand">
                    <Check className="size-3.5" /> Direkomendasikan
                  </span>
                )}
              </div>

              <div className="mt-6 grid gap-5">
                <div className="flex items-center justify-between border-b border-black/8 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink/5 text-ink">
                      <Wallet className="size-5" />
                    </span>
                    <span className="text-sm font-semibold text-ink/70">
                      Investasi
                    </span>
                  </div>
                  <span className="text-2xl font-black text-ink sm:text-3xl">
                    {active.investment}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-black/8 pb-5">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand text-ink">
                      <TrendingUp className="size-5" />
                    </span>
                    <span className="text-sm font-semibold text-ink/70">
                      Potensi Laba Bersih
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-black text-ink sm:text-3xl">
                      {active.monthlyProfit}
                    </span>
                    <span className="text-xs font-medium text-ink/50">
                      per bulan
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-ink/5 text-ink">
                      <Calendar className="size-5" />
                    </span>
                    <span className="text-sm font-semibold text-ink/70">
                      Break Even Point
                    </span>
                  </div>
                  <span className="text-2xl font-black text-ink sm:text-3xl">
                    {active.bep}
                  </span>
                </div>
              </div>

              <ConsultCta
                size="lg"
                pkg={active.id}
                className="mt-7 w-full"
              >
                Konsultasi Paket {active.name}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ConsultCta>
            </motion.div>
          </AnimatePresence>

          {/* Right: chart */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id + "-chart"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-ink/10 bg-ink p-6 text-white shadow-premium sm:p-8"
              suppressHydrationWarning
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/50">
                    Proyeksi Kumulatif
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    Laba Bersih vs Investasi
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1.5 text-white/70">
                    <span className="size-2.5 rounded-full bg-brand" />
                    Laba Kumulatif
                  </span>
                  <span className="flex items-center gap-1.5 text-white/70">
                    <span className="size-2.5 rounded-full bg-white/30" />
                    Investasi
                  </span>
                </div>
              </div>

              {/* Chart */}
              <div className="mt-8">
                <div className="relative h-56 w-full">
                  {/* BEP marker line */}
                  <div
                    className="absolute top-0 z-10 flex flex-col items-center"
                    style={{
                      left: `${((bepMonths - 1) / 11) * 100}%`,
                      height: "100%",
                    }}
                  >
                    <span className="rounded bg-brand px-2 py-0.5 text-[10px] font-bold text-ink">
                      BEP
                    </span>
                    <div className="w-px flex-1 bg-brand/40" />
                  </div>

                  <div className="flex h-full items-end gap-1.5">
                    {months.map((m, i) => {
                      const cumulative = monthlyProfitNum * m;
                      const profitPct = Math.min(
                        (cumulative / (investmentY * 1.4)) * 100,
                        100,
                      );
                      return (
                        <div
                          key={m}
                          className="group relative flex h-full flex-1 flex-col justify-end"
                        >
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${profitPct}%` }}
                            transition={{
                              duration: 0.5,
                              delay: i * 0.04,
                              ease: "easeOut",
                            }}
                            className={cn(
                              "w-full rounded-t-md",
                              m >= bepMonths
                                ? "bg-brand"
                                : "bg-brand/40",
                            )}
                            suppressHydrationWarning
                          />
                          {/* investasi baseline indicator */}
                          <div
                            className="absolute left-0 right-0 border-t border-dashed border-white/30"
                            style={{ bottom: "100%" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-2 flex justify-between text-[10px] font-medium text-white/40">
                  {months.map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <p className="mt-3 text-center text-xs text-white/50">
                  Estimasi laba kumulatif mencapai titik balik modal di bulan{" "}
                  <span className="font-bold text-brand">{bepMonths}</span>.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Investasi
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {active.investment}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    Laba/Bln
                  </p>
                  <p className="mt-1 text-sm font-bold text-brand">
                    {active.monthlyProfit}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40">
                    BEP
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">
                    {active.bep}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal className="mt-10" delay={0.1}>
          <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-ink/60">
            *Simulasi bersifat ilustratif berdasarkan asumsi operasional ideal.
            Hasil aktual dapat bervariasi tergantung lokasi, manajemen, dan
            kondisi pasar. Konsultasi diperlukan untuk proyeksi spesifik lokasi
            Anda.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
