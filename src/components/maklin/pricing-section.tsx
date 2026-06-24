"use client";

import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { packageTiers } from "@/config/site";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";
import { useLeadForm } from "./use-lead-form";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const openForm = useLeadForm((s) => s.openForm);

  return (
    <section id="paket" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Paket Investasi"
          title="Pilih Paket Yang Sesuai Dengan Modal Anda"
          description="Tiga paket investasi terstruktur — dari pemula hingga premium. Semua paket sudah termasuk sistem, SDM, dan pendampingan operasional."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {packageTiers.map((pkg) => (
            <StaggerItem key={pkg.id} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 sm:p-8",
                  pkg.recommended
                    ? "border-ink bg-ink text-white shadow-2xl lg:-translate-y-4"
                    : "border-black/8 bg-white text-ink hover:-translate-y-1 hover:border-brand/40 hover:shadow-premium",
                )}
              >
                {/* glow for recommended */}
                {pkg.recommended && (
                  <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-brand/30 blur-[80px]" />
                )}

                {/* Badge */}
                {pkg.recommended && (
                  <div className="absolute right-5 top-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-ink shadow-lg">
                      <Star className="size-3.5 fill-ink" />
                      Paling Direkomendasikan
                    </span>
                  </div>
                )}

                <div className="relative">
                  <h3
                    className={cn(
                      "text-sm font-bold uppercase tracking-[0.18em]",
                      pkg.recommended ? "text-brand" : "text-ink/60",
                    )}
                  >
                    {pkg.name}
                  </h3>

                  <div className="mt-4 flex items-end gap-2">
                    <span
                      className={cn(
                        "text-4xl font-black tracking-tight sm:text-5xl",
                        pkg.recommended ? "text-white" : "text-ink",
                      )}
                    >
                      {pkg.price}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-3 min-h-[60px] text-sm leading-relaxed",
                      pkg.recommended ? "text-white/70" : "text-muted-foreground",
                    )}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="relative mt-6 flex-1 space-y-3.5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full",
                          pkg.recommended
                            ? "bg-brand text-ink"
                            : "bg-brand/20 text-ink",
                        )}
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          pkg.recommended ? "text-white/90" : "text-ink/80",
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => openForm(pkg.id)}
                  className={cn(
                    "group/btn relative mt-8 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4",
                    pkg.recommended
                      ? "bg-brand text-ink hover:shadow-brand focus-visible:ring-brand/40"
                      : "bg-ink text-white hover:bg-ink/90 focus-visible:ring-ink/20",
                  )}
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    {pkg.cta}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center text-sm text-muted-foreground"
          suppressHydrationWarning
        >
          Semua paket sudah termasuk{" "}
          <span className="font-semibold text-ink">studi kelayakan & setup outlet</span>.
          Butuh paket kustom?{" "}
          <button
            type="button"
            onClick={() => openForm(null)}
            className="font-semibold text-ink underline underline-offset-4 hover:text-brand"
          >
            Konsultasi dengan kami
          </button>
          .
        </motion.p>
      </div>
    </section>
  );
}
