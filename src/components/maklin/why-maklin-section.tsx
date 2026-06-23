"use client";

import {
  Activity,
  HeartHandshake,
  TrendingUp,
  ShieldCheck,
  Layers,
  Leaf,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem, Reveal } from "./reveal";

const reasons = [
  {
    icon: Activity,
    title: "Pengalaman Operasional Nyata",
    desc: "Bukan teori. Kami menjalankan dan memvalidasi sistem secara langsung di lapangan.",
  },
  {
    icon: HeartHandshake,
    title: "Pendampingan Intensif",
    desc: "Tim kami mendampingi Anda selama operasional awal hingga bisnis benar-benar stabil.",
  },
  {
    icon: TrendingUp,
    title: "Fokus Profit",
    desc: "Setiap keputusan diarahkan pada satu tujuan: bisnis Anda menghasilkan dan untung.",
  },
  {
    icon: ShieldCheck,
    title: "Sistem Teruji",
    desc: "SOP, rekrutmen, dan operasional sudah teruji untuk meminimalkan trial & error.",
  },
  {
    icon: Layers,
    title: "Solusi Sesuai Kebutuhan",
    desc: "Paket disesuaikan dengan modal & kapasitas Anda — Basic, Standard, atau Premium.",
  },
  {
    icon: Leaf,
    title: "Fokus Keberlanjutan",
    desc: "Kami bangun bisnis yang tumbuh bertahun-tahun, bukan sekadar untung sesaat.",
  },
];

export function WhyMaklinSection() {
  return (
    <section className="relative overflow-hidden bg-[#fafaf9] py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Mengapa MAKLIN"
          title="Mitra Yang Memahami Investor Seperti Anda"
          description="Kami tidak hanya menyiapkan peralatan. Kami membangun fondasi bisnis agar modal Anda bekerja optimal dan bertahan lama."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <StaggerItem key={r.title}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-black/8 bg-white p-7 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-brand/40">
                <span className="absolute right-6 top-6 text-5xl font-black text-black/5 transition-colors duration-300 group-hover:text-brand/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-ink transition-transform duration-300 group-hover:scale-110">
                  <r.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {r.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto max-w-3xl rounded-3xl bg-ink p-8 text-center sm:p-10">
            <p className="text-balance text-xl font-semibold text-white sm:text-2xl">
              Lebih dari konsultan —{" "}
              <span className="text-brand">kami mitra eksekusi Anda</span>.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-white/60">
              Dari ide hingga outlet beroperasi dan menghasilkan, Maklin
              mendampingi setiap langkahnya.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
