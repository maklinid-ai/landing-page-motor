"use client";

import { motion } from "framer-motion";
import { Droplets, Sparkles, Shield, RefreshCw, Bike } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem, CountUp } from "./reveal";

const needs = [
  {
    icon: RefreshCw,
    title: "Cuci Rutin",
    desc: "Setiap motor butuh dicuci 2–4x per bulan secara konsisten.",
  },
  {
    icon: Sparkles,
    title: "Detailing",
    desc: "Permintaan detailing tumbuh seiring kesadaran perawatan.",
  },
  {
    icon: Shield,
    title: "Coating",
    desc: "Layanan premium dengan margin tinggi dan repeat order panjang.",
  },
  {
    icon: Droplets,
    title: "Perawatan Berkala",
    desc: "Pelanggan loyal kembali berulang setiap bulan — recurring revenue.",
  },
];

export function OpportunitySection() {
  return (
    <section
      id="peluang"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-brand/15 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Peluang Pasar"
          tone="dark"
          title="Mengapa Bisnis Cuci Motor?"
          description="Indonesia adalah salah satu pasar motor terbesar di dunia. Setiap motor adalah pelanggan berulang yang membutuhkan perawatan rutin setiap bulan."
        />

        {/* Headline stat */}
        <Reveal className="mt-14" delay={0.05}>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur sm:p-12">
            <span className="inline-flex size-16 items-center justify-center rounded-2xl bg-brand text-ink">
              <Bike className="size-8" />
            </span>
            <div>
              <p className="text-6xl font-black leading-none text-brand sm:text-7xl">
                <CountUp to={130} suffix="Jt+" />
              </p>
              <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                Motor di Indonesia
              </p>
              <p className="mt-2 max-w-md text-pretty text-sm text-white/60">
                Salah satu populasi motor terbesar di dunia. Setiap unit adalah
                pelanggan potensial untuk layanan cuci, detailing, dan coating.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Needs grid */}
        <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {needs.map((n) => (
            <StaggerItem key={n.title}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white/[0.07]">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand ring-1 ring-inset ring-brand/30 transition-transform duration-300 group-hover:scale-110">
                  <n.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {n.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        {/* Recurring revenue highlight */}
        <Reveal className="mt-10" delay={0.1}>
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-full border border-brand/30 bg-brand/10 px-6 py-3 text-center">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-brand"
            >
              <RefreshCw className="size-4" />
            </motion.span>
            <p className="text-sm font-semibold text-white sm:text-base">
              Bisnis <span className="text-brand">recurring revenue</span> —
              pelanggan kembali berulang setiap bulan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
