"use client";

import {
  FileSearch,
  MapPinned,
  FileText,
  Store,
  ListChecks,
  UserPlus,
  GraduationCap,
  HeartHandshake,
  Sparkle,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { ConsultCta } from "./cta";

const solutions = [
  {
    icon: FileSearch,
    title: "Studi Kelayakan",
    desc: "Analisis mendalam lokasi, pasar, dan proyeksi finansial sebelum Anda membangun.",
  },
  {
    icon: MapPinned,
    title: "Survey Lokasi",
    desc: "Penilaian objektif terhadap potensi lokasi agar keputusan berbasis data.",
  },
  {
    icon: FileText,
    title: "Business Plan",
    desc: "Rencana bisnis terstruktur dengan target omzet, biaya, dan profit yang realistis.",
  },
  {
    icon: Store,
    title: "Setup Outlet",
    desc: "Pembangunan outlet siap operasi — dari layout, instalasi, hingga peralatan.",
  },
  {
    icon: ListChecks,
    title: "SOP Operasional",
    desc: "Standar prosedur yang teruji agar kualitas layanan konsisten setiap hari.",
  },
  {
    icon: UserPlus,
    title: "Rekrutmen SDM",
    desc: "Sistem rekrutmen untuk mendapatkan tim yang tepat dan andal.",
  },
  {
    icon: GraduationCap,
    title: "Training SDM",
    desc: "Pelatihan teknis & pelayanan agar tim siap menghasilkan dari hari pertama.",
  },
  {
    icon: HeartHandshake,
    title: "Pendampingan Operasional",
    desc: "Dampingi langsung selama operasional awal hingga bisnis berjalan stabil.",
  },
  {
    icon: Sparkle,
    title: "Pengembangan Salon Motor",
    desc: "Perluasan layanan ke salon motor untuk meningkatkan margin & loyalitas.",
  },
  {
    icon: ShieldCheck,
    title: "Coating & Detailing",
    desc: "Layanan premium margin tinggi yang menjadi pembeda outlet Anda.",
  },
];

export function SolutionSection() {
  return (
    <section
      id="solusi"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Solusi MAKLIN"
          title="Maklin Tidak Sekadar Menjual Alat"
          description="Kami membantu membangun sistem bisnis yang siap menghasilkan — dari studi kelayakan, setup outlet, SOP, SDM, hingga pendampingan operasional penuh."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-black/8 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-premium">
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-brand/0 blur-2xl transition-colors duration-300 group-hover:bg-brand/30" />
                <div className="relative flex items-start gap-4">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-brand transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <ConsultCta size="lg">Konsultasi Gratis Sekarang</ConsultCta>
        </Reveal>
      </div>
    </section>
  );
}
