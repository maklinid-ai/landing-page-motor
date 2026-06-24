"use client";

import { Wallet, MapPin, Building2, PiggyBank } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";

const problems = [
  {
    icon: PiggyBank,
    title: "Dana Pensiun",
    desc: "Punya tabungan yang mengendap, belum dioptimalkan menjadi aset produktif.",
  },
  {
    icon: MapPin,
    title: "Lahan Kosong",
    desc: "Strategis tapi tidak menghasilkan. Biaya operasional terus berjalan.",
  },
  {
    icon: Building2,
    title: "Ruko Tidak Produktif",
    desc: "Investasi properti yang seharusnya bisa jadi mesin uang bulanan.",
  },
  {
    icon: Wallet,
    title: "Modal Investasi",
    desc: "Punya modal, tapi bingung usaha apa yang minim risiko & terukur.",
  },
];

export function ProblemSection() {
  return (
    <section id="masalah" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Masalah Yang Sering Terjadi"
          title="Punya Modal Tapi Bingung Mau Usaha Apa?"
          description="Banyak investor pemula memiliki modal atau aset, namun terjebak keraguan. Modal mengendap, lahan kosong, dan ruko tidak produktif — sementara waktu terus berjalan."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-2xl border border-black/8 bg-white p-6 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-brand">
                <div className="inline-flex size-12 items-center justify-center rounded-xl bg-ink text-brand transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal className="mt-12" delay={0.1}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl bg-ink px-6 py-8 text-center sm:flex-row sm:text-left">
            <p className="flex-1 text-pretty text-lg font-semibold text-white sm:text-xl">
              Modal yang diam adalah peluang yang terbuang. Saatnya mengubahnya
              menjadi bisnis yang menghasilkan.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
