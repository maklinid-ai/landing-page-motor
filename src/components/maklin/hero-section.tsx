"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Repeat2,
  Bike,
} from "lucide-react";
import { ConsultCta, GhostCta } from "./cta";
import { CountUp } from "./reveal";

const stats = [
  {
    icon: Bike,
    value: 130,
    suffix: "Juta+",
    label: "Motor di Indonesia",
    decimals: 0,
  },
  {
    icon: Repeat2,
    value: 0,
    custom: "Tinggi",
    label: "Repeat Order",
  },
  {
    icon: TrendingUp,
    value: 0,
    custom: "Berulang",
    label: "Potensi Profit",
  },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-28 text-white sm:pt-32 lg:pt-36"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-70" />
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 size-[520px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 size-[480px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: copy */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              suppressHydrationWarning
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand ring-1 ring-inset ring-white/15 backdrop-blur">
                <Sparkles className="size-3.5" />
                Konsultan Bisnis Cuci Motor
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]"
              suppressHydrationWarning
            >
              Punya Modal atau{" "}
              <span className="relative whitespace-nowrap">
                <span className="text-brand">Lahan?</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 9C50 3 150 2 298 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-white/80 sm:text-xl"
              suppressHydrationWarning
            >
              Bangun Bisnis Cuci Motor yang Siap Menghasilkan Bersama{" "}
              <span className="font-semibold text-white">MAKLIN</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/60"
              suppressHydrationWarning
            >
              Kami membantu investor membangun bisnis cuci motor dari nol hingga
              siap beroperasi — lengkap dengan studi kelayakan, setup outlet,
              SOP, SDM, dan pendampingan operasional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              suppressHydrationWarning
            >
              <ConsultCta size="lg" className="w-full sm:w-auto">
                Konsultasi Gratis
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ConsultCta>
              <GhostCta
                href="#simulasi"
                size="lg"
                className="w-full border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                Lihat Simulasi Profit
              </GhostCta>
            </motion.div>

            {/* Stats */}
            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="mt-12 grid w-full grid-cols-1 gap-3 sm:grid-cols-3"
              suppressHydrationWarning
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur transition-colors hover:border-brand/40 hover:bg-white/[0.06]"
                >
                  <div className="flex items-center gap-2 text-brand">
                    <s.icon className="size-4" />
                    <dt className="text-xs font-medium uppercase tracking-wider text-white/60">
                      {s.label}
                    </dt>
                  </div>
                  <dd className="mt-2 text-2xl font-bold text-white">
                    {s.custom ? (
                      s.custom
                    ) : (
                      <CountUp to={s.value} suffix={s.suffix} />
                    )}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            suppressHydrationWarning
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      {/* Main card: profit preview */}
      <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-white/50">
              Estimasi Profit / Bulan
            </p>
            <p className="mt-1 text-3xl font-bold text-white">
              Rp46,8 Juta
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-inset ring-brand/30">
            <TrendingUp className="size-3.5" />
            Premium
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-6 flex h-32 items-end gap-2">
          {[35, 48, 42, 60, 72, 68, 88, 96].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.06, ease: "easeOut" }}
              className="flex-1 rounded-t-md bg-gradient-to-t from-brand/40 to-brand"
              suppressHydrationWarning
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wider text-white/40">
          <span>Bln 1</span>
          <span>Bln 8</span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Investasi
            </p>
            <p className="mt-1 text-sm font-bold text-white">Rp255Jt</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              Laba/Bln
            </p>
            <p className="mt-1 text-sm font-bold text-brand">Rp46,8Jt</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-white/40">
              BEP
            </p>
            <p className="mt-1 text-sm font-bold text-white">5 Bln</p>
          </div>
        </div>
      </div>

      {/* Floating badge: BEP */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-1/2 z-20 hidden rounded-2xl border border-white/10 bg-ink/90 p-4 shadow-xl backdrop-blur sm:block"
      >
        <p className="text-[10px] uppercase tracking-wider text-white/50">
          Break Even Point
        </p>
        <p className="mt-1 text-2xl font-black text-brand">5 Bln</p>
        <p className="text-[10px] text-white/50">Paket Premium</p>
      </motion.div>

      {/* Floating badge: repeat order */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-5 -right-3 z-20 rounded-2xl border border-white/10 bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-brand">
            <Repeat2 className="size-4 text-ink" />
          </span>
          <div>
            <p className="text-xs font-semibold text-ink">Repeat Order</p>
            <p className="text-[11px] text-ink/60">Pelanggan kembali rutin</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
