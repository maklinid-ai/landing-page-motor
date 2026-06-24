"use client";

import { Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { site, waLink, services } from "@/config/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-40" />
      <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[420px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-white/60">
              Layanan Bisnis Cuci Motor & Salon Motor. Kami membantu investor
              membangun bisnis dari nol hingga siap menghasilkan.
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {site.tagline}
            </p>

            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand"
              >
                <MessageCircle className="size-4 text-brand" />
                {site.whatsappDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-brand"
              >
                <Mail className="size-4 text-brand" />
                {site.email}
              </a>
              <span className="inline-flex items-center gap-2 text-white/70">
                <MapPin className="size-4 text-brand" />
                Indonesia
              </span>
            </div>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Layanan
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s}>
                  <a
                    href="#solusi"
                    className="text-sm text-white/70 transition-colors hover:text-brand"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Paket */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Paket Investasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#paket"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Basic — Rp129 Juta
                </a>
              </li>
              <li>
                <a
                  href="#paket"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Standard — Rp199 Juta
                </a>
              </li>
              <li>
                <a
                  href="#paket"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Premium — Rp255 Juta
                </a>
              </li>
              <li>
                <a
                  href="#simulasi"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Simulasi Profit
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="#masalah"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Masalah
                </a>
              </li>
              <li>
                <a
                  href="#peluang"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Peluang Pasar
                </a>
              </li>
              <li>
                <a
                  href="#solusi"
                  className="text-sm text-white/70 transition-colors hover:text-brand"
                >
                  Solusi Maklin
                </a>
              </li>
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-white"
                >
                  Konsultasi Gratis
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Build • Operate • Grow
          </p>
        </div>
      </div>
    </footer>
  );
}
