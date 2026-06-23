"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Loader2,
  MessageCircle,
  ShieldCheck,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
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
import { useLeadForm } from "./use-lead-form";
import { packageTiers, site, waLink } from "@/config/site";
import { cn } from "@/lib/utils";

const investmentOptions = [
  "Rp100 – Rp150 Juta",
  "Rp150 – Rp200 Juta",
  "Rp200 – Rp260 Juta",
  "Rp260 Juta+",
];

type Status = "idle" | "loading" | "success";

export function LeadFormDialog() {
  const { open, preselectedPackage, closeForm } = useLeadForm();
  const { toast } = useToast();
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    name: "",
    whatsapp: "",
    city: "",
    hasLand: "Tidak",
    investment: "",
  });
  const [packageId, setPackageId] = React.useState<
    "basic" | "standard" | "premium" | null
  >(null);

  // Sync preselected package when dialog opens
  React.useEffect(() => {
    if (open) {
      setPackageId(preselectedPackage);
      setStatus("idle");
    }
  }, [open, preselectedPackage]);

  const selectedPkg = packageTiers.find((p) => p.id === packageId) ?? null;

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
          packageName: selectedPkg?.name ?? null,
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

  const handleClose = (open: boolean) => {
    if (!open) {
      // small delay so success state animates out cleanly
      closeForm();
    }
  };

  const successMessage = `Halo MAKLIN, saya ${form.name || "[Nama]"} dari ${form.city || "[Kota]"}. Saya${selectedPkg ? ` tertarik dengan Paket ${selectedPkg.name}` : " tertarik membangun bisnis cuci motor"}. Saya sudah mengisi form konsultasi dan menunggu info lebih lanjut. (Modal: ${form.investment || "-"}, Punya lahan: ${form.hasLand})`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogPortal>
        <DialogContent className="max-h-[92vh] gap-0 overflow-hidden p-0 sm:max-w-[480px]">
          <div className="flex max-h-[92vh] flex-col">
            {/* Header */}
            <div className="relative overflow-hidden bg-ink px-6 py-7 text-white">
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-brand/20 blur-3xl" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand ring-1 ring-inset ring-white/15">
                    <ShieldCheck className="size-3.5" /> Konsultasi Gratis
                  </span>
                </div>
                <DialogTitle asChild>
                  <h2 className="mt-4 text-2xl font-black leading-tight">
                    Jadwalkan Konsultasi Gratis
                  </h2>
                </DialogTitle>
                <DialogDescription asChild>
                  <p className="mt-1.5 text-sm text-white/60">
                    Isi data Anda. Tim Maklin menghubungi dalam 1×24 jam.
                  </p>
                </DialogDescription>

                {selectedPkg && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1.5 text-xs font-bold text-ink">
                    Paket {selectedPkg.name} — {selectedPkg.price}
                  </div>
                )}
              </div>
            </div>

            {/* Body — switch between form and success */}
            <div className="flex-1 overflow-y-auto scrollbar-slim">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-6 py-8 text-center"
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
                    <h3 className="mt-5 text-xl font-bold text-ink">
                      Terima kasih, {form.name.split(" ")[0] || "Bapak/Ibu"}!
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
                      Permintaan konsultasi Anda kami terima. Tim Maklin akan
                      menghubungi Anda via WhatsApp segera. Untuk respons lebih
                      cepat, lanjutkan chat WhatsApp sekarang.
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
                    <button
                      type="button"
                      onClick={closeForm}
                      className="mt-3 h-11 w-full rounded-full text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
                    >
                      Tutup
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 px-6 py-6"
                  >
                    <Field label="Nama" htmlFor="lead-name" required>
                      <Input
                        id="lead-name"
                        placeholder="Nama lengkap Anda"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        autoComplete="name"
                        className="h-11"
                      />
                    </Field>

                    <Field
                      label="Nomor WhatsApp"
                      htmlFor="lead-wa"
                      required
                      hint="Aktif & bisa dihubungi"
                    >
                      <Input
                        id="lead-wa"
                        inputMode="tel"
                        placeholder="0812xxxxxxx"
                        value={form.whatsapp}
                        onChange={(e) =>
                          setForm({ ...form, whatsapp: e.target.value })
                        }
                        autoComplete="tel"
                        className="h-11"
                      />
                    </Field>

                    <Field label="Kota" htmlFor="lead-city" required>
                      <Input
                        id="lead-city"
                        placeholder="cth: Jakarta Selatan"
                        value={form.city}
                        onChange={(e) =>
                          setForm({ ...form, city: e.target.value })
                        }
                        className="h-11"
                      />
                    </Field>

                    <Field label="Punya Lahan?" required>
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
                            htmlFor={`land-${opt.v}`}
                            className={cn(
                              "flex cursor-pointer items-center gap-2.5 rounded-xl border px-4 py-3 text-sm font-semibold transition-all",
                              form.hasLand === opt.v
                                ? "border-ink bg-ink/[0.03] text-ink"
                                : "border-black/10 text-ink/70 hover:border-ink/30",
                            )}
                          >
                            <RadioGroupItem
                              id={`land-${opt.v}`}
                              value={opt.v}
                              className="border-ink/30 text-ink"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </RadioGroup>
                    </Field>

                    <Field label="Modal Investasi" required>
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
                    </Field>

                    {/* Optional package selector */}
                    <Field
                      label="Paket Diminati"
                      hint="Opsional — bisa diskusikan nanti"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {packageTiers.map((p) => (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() =>
                              setPackageId(
                                packageId === p.id ? null : p.id,
                              )
                            }
                            className={cn(
                              "rounded-xl border px-2 py-2.5 text-center transition-all",
                              packageId === p.id
                                ? "border-brand bg-brand/10"
                                : "border-black/10 hover:border-ink/30",
                            )}
                          >
                            <span
                              className={cn(
                                "block text-xs font-bold",
                                packageId === p.id ? "text-ink" : "text-ink/80",
                              )}
                            >
                              {p.name}
                            </span>
                            <span className="block text-[10px] text-ink/50">
                              {p.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </Field>

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
                        <>
                          Jadwalkan Konsultasi Gratis
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      Dengan mengirim, Anda setuju dihubungi tim Maklin. Data
                      Anda aman & tidak dibagikan.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <Label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
          {label}
          {required && <span className="ml-0.5 text-destructive">*</span>}
        </Label>
        {hint && (
          <span className="text-xs text-muted-foreground">{hint}</span>
        )}
      </div>
      {children}
    </div>
  );
}
