"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MessageCircle,
  ShieldCheck,
  Clock,
  Zap,
  Lock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Reveal } from "./reveal";
import { site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

const investmentOptions = [
  "Rp100 – Rp150 Juta",
  "Rp150 – Rp200 Juta",
  "Rp200 – Rp260 Juta",
  "Rp260 Juta+",
];

const benefits = [
  {
    icon: Zap,
    title: "Respons Cepat",
    desc: "Tim Maklin menghubungi Anda dalam 1×24 jam.",
  },
  {
    icon: ShieldCheck,
    title: "Tanpa Biaya",
    desc: "Konsultasi awal gratis, tanpa kewajiban.",
  },
  {
    icon: Lock,
    title: "Data Aman",
    desc: "Informasi Anda terjaga & tidak dibagikan.",
  },
];

type Status = "idle" | "loading" | "success";

export function LeadFormSection() {
  const { toast } = useToast();
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    whatsapp: "",
    city: "",
    hasLand: "Tidak",
    investment: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!form.name.trim()) {
      toast({ title: "Nama wajib diisi", variant: "destructive" });
      return;
    }
    if (!form.whatsapp.trim() || form.whatsapp.replace(/\D/g, "").length < 8) {
      toast({
        title: "Nomor WhatsApp tidak valid",
        description: "Contoh: 0812xxxx atau 62812xxxx",
        variant: "destructive",
      });
      return;
    }
    if (!form.city.trim()) {
      toast({ title: "Kota wajib diisi", variant: "destructive" });
      return;
    }
    if (!form.investment) {
      toast({ title: "Pilih rentang modal investasi", variant: "destructive" });
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          whatsapp: form.whatsapp.trim(),
          city: form.city.trim(),
          hasLand: form.hasLand,
          investment: form.investment,
          packageName: null,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error ?? "Gagal mengirim form.");
      }
      setStatus("success");
      toast({
        title: "Konsultasi terjadwal!",
        description: "Tim Maklin akan menghubungi Anda segera.",
      });
    } catch (err) {
      setStatus("idle");
      toast({
        title: "Gagal mengirim",
        description:
          err instanceof Error ? err.message : "Silakan coba lagi.",
        variant: "destructive",
      });
    }
  };

  const successMessage = `Halo MAKLIN, saya ${form.name || "[Nama]"} dari ${form.city || "[Kota]"}. Saya tertarik membangun bisnis cuci motor dan ingin mengetahui paket investasi yang sesuai untuk saya. (Modal: ${form.investment || "-"}, Punya lahan: ${form.hasLand})`;

  return (
    <section
      id="konsultasi"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div className="pointer-events-none absolute -left-24 top-1/3 -z-10 size-[400px] rounded-full bg-brand/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink ring-1 ring-inset ring-brand/30">
                <Clock className="size-3.5" />
                Mulai Hari Ini
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-[44px]">
                Jadwalkan Konsultasi{" "}
                <span className="text-brand">Gratis</span> Bersama Maklin
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Isi form di samping. Tim Maklin akan menganalisis kebutuhan Anda
                dan merekomendasikan paket investasi yang paling sesuai dengan
                modal, lokasi, dan tujuan Anda.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={0.12 + i * 0.05}>
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink text-brand">
                      <b.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-ink">{b.title}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-black/8 bg-[#fafaf9] p-4">
                <MessageCircle className="size-5 shrink-0 text-[#25D366]" />
                <p className="text-sm text-ink/80">
                  Lebih suka chat langsung?{" "}
                  <a
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink underline underline-offset-4 hover:text-brand"
                  >
                    WhatsApp {site.whatsappDisplay}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-black/8 bg-white shadow-premium">
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/20 blur-3xl" />
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-6 py-12 text-center sm:px-10"
                  >
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 14,
                        stiffness: 200,
                      }}
                      className="mx-auto inline-flex size-16 items-center justify-center rounded-full bg-brand text-ink"
                    >
                      <CheckCircle2 className="size-9" />
                    </motion.div>
                    <h3 className="mt-5 text-2xl font-bold text-ink">
                      Terima kasih,{" "}
                      {form.name.split(" ")[0] || "Bapak/Ibu"}!
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                      Permintaan konsultasi Anda kami terima. Tim Maklin akan
                      menghubungi Anda via WhatsApp segera.
                    </p>
                    <a
                      href={waLink(successMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-brand font-bold text-ink shadow-brand transition-all hover:-translate-y-0.5"
                    >
                      <MessageCircle className="size-5" />
                      Lanjut Chat WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative space-y-5 px-6 py-7 sm:px-8"
                  >
                    <div>
                      <h3 className="text-xl font-bold text-ink">
                        Form Konsultasi
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Semua field bertanda <span className="text-destructive">*</span> wajib diisi.
                      </p>
                    </div>

                    <FormField label="Nama" htmlFor="inline-name" required>
                      <Input
                        id="inline-name"
                        placeholder="Nama lengkap Anda"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        autoComplete="name"
                        className="h-11"
                      />
                    </FormField>

                    <FormField
                      label="Nomor WhatsApp"
                      htmlFor="inline-wa"
                      required
                    >
                      <Input
                        id="inline-wa"
                        inputMode="tel"
                        placeholder="0812xxxxxxx"
                        value={form.whatsapp}
                        onChange={(e) =>
                          setForm({ ...form, whatsapp: e.target.value })
                        }
                        autoComplete="tel"
                        className="h-11"
                      />
                    </FormField>

                    <FormField label="Kota" htmlFor="inline-city" required>
                      <Input
                        id="inline-city"
                        placeholder="cth: Jakarta Selatan"
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        className="h-11"
                      />
                    </FormField>

                    <FormField label="Punya Lahan?" required>
                      <RadioGroup
                        value={form.hasLand}
                        onValueChange={(v) =>
                          setForm({ ...form, hasLand: v })
                        }
                        className="grid grid-cols-2 gap-3"
                      >
                        {[
                          { v: "Ya", label: "Ya, sudah punya" },
                          { v: "Tidak", label: "Belum / cari lokasi" },
                        ].map((opt) => (
                          <label
                            key={opt.v}
                            htmlFor={`inline-land-${opt.v}`}
                            className={cn(
                              "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                              form.hasLand === opt.v
                                ? "border-ink bg-ink/[0.03] text-ink"
                                : "border-black/10 text-ink/70 hover:border-ink/30",
                            )}
                          >
                            <RadioGroupItem
                              id={`inline-land-${opt.v}`}
                              value={opt.v}
                              className="border-ink/30 text-ink"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </RadioGroup>
                    </FormField>

                    <FormField label="Modal Investasi" required>
                      <Select
                        value={form.investment}
                        onValueChange={(v) =>
                          setForm({ ...form, investment: v })
                        }
                      >
                        <SelectTrigger className="h-11 w-full">
                          <SelectValue placeholder="Pilih rentang modal" />
                        </SelectTrigger>
                        <SelectContent>
                          {investmentOptions.map((opt) => (
                            <SelectItem key={opt} value={opt}>
                              {opt}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormField>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-6 font-bold text-ink shadow-brand transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-80"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="size-5 animate-spin" />
                          Mengirim...
                        </>
                      ) : (
                        "Jadwalkan Konsultasi Gratis"
                      )}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      <Lock className="mr-1 inline size-3" />
                      Data aman. Tidak dibagikan ke pihak ketiga.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}
