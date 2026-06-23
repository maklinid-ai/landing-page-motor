"use client";

import {
  MapPinOff,
  UsersRound,
  AlertTriangle,
  ClipboardList,
  Megaphone,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const mistakes = [
  {
    icon: MapPinOff,
    title: "Salah Memilih Lokasi",
    desc: "Lokasi sepi atau bukan target pasar → omzet keras naik.",
  },
  {
    icon: AlertTriangle,
    title: "Tidak Memahami Pasar",
    desc: "Asumsi, bukan data. Yang laku tidak sesuai ekspektasi.",
  },
  {
    icon: ClipboardList,
    title: "Tidak Memiliki SOP",
    desc: "Kualitas layanan naik-turun, pelanggan kabur.",
  },
  {
    icon: UsersRound,
    title: "Sulit Mencari SDM",
    desc: "Rekrut asal-asalan, turnover tinggi, training mulai dari nol.",
  },
  {
    icon: Megaphone,
    title: "Tidak Memahami Pemasaran",
    desc: "Buka outlet tapi sepi. Tidak ada sistem akuisisi pelanggan.",
  },
  {
    icon: Wrench,
    title: "Tidak Memahami Operasional",
    desc: "Alat rusak, bahan boros, margin tipis tanpa disadari.",
  },
];

export function MistakesSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9] py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-60" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Kesalahan Investor Pemula"
          title="Jangan Habiskan Modal Untuk Trial & Error"
          description="Tanpa sistem yang teruji, membuka bisnis cuci motor jadi arena uji coba yang mahal. Inilah jebakan yang paling sering menjatuhkan investor pemula."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mistakes.map((m, i) => (
            <StaggerItem key={m.title}>
              <div className="group flex h-full items-start gap-4 rounded-2xl border border-black/8 bg-white p-5 transition-all duration-300 hover:border-destructive/30 hover:shadow-premium">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <m.icon className="size-5" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold tabular-nums text-destructive">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-bold text-ink">{m.title}</h3>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {m.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12" delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-destructive/20 bg-destructive px-6 py-10 text-center shadow-[0_20px_50px_-20px_rgba(229,72,77,0.5)] sm:px-12">
            <div className="absolute inset-0 bg-grid-dark opacity-20" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Risiko Terbesar
              </p>
              <h3 className="mt-3 text-balance text-2xl font-black text-white sm:text-4xl">
                Modal Habis Sebelum Bisnis Berkembang
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-white/80 sm:text-base">
                Tanpa sistem, modal Anda habis untuk belajar — bukan untuk
                tumbuh. Maklin hadir agar setiap rupiah modal bekerja menghasilkan.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
