"use client";

import * as React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { waLink } from "@/config/site";
import { useLeadForm } from "./use-lead-form";

type CtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  /** Preselect a package when opening the lead form */
  pkg?: "basic" | "standard" | "premium" | null;
  /** Override default WhatsApp message */
  message?: string;
};

const sizeMap = {
  sm: "h-10 px-5 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

/** Primary brand-yellow CTA — opens the lead form. */
export function ConsultCta({
  children,
  className,
  size = "md",
  pkg = null,
}: CtaButtonProps) {
  const openForm = useLeadForm((s) => s.openForm);
  return (
    <button
      type="button"
      onClick={() => openForm(pkg)}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand font-semibold text-ink shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_rgba(255,209,0,0.6)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/40 active:translate-y-0",
        sizeMap[size],
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
}

/** WhatsApp CTA — opens wa.me link in new tab. */
export function WhatsAppCta({
  children,
  className,
  size = "md",
  message,
}: CtaButtonProps) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-ink font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink/90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/20",
        sizeMap[size],
        className,
      )}
    >
      <MessageCircle className="size-[18px] transition-transform group-hover:rotate-[-8deg]" />
      <span>{children}</span>
    </a>
  );
}

/** Ghost / outline CTA on light backgrounds. */
export function GhostCta({
  children,
  className,
  size = "md",
  href,
  onClick,
}: CtaButtonProps & { href?: string; onClick?: () => void }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/60 font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-ink/30 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ink/10",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Comp>
  );
}

/** Outline CTA meant for dark backgrounds. */
export function OutlineOnDarkCta({
  children,
  className,
  size = "md",
  href,
  onClick,
}: CtaButtonProps & { href?: string; onClick?: () => void }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20",
        sizeMap[size],
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function PhoneLink({ className }: { className?: string }) {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink",
        className,
      )}
    >
      <Phone className="size-4 text-brand" />
      <span className="tabular-nums">+62 819-7394-0566</span>
    </a>
  );
}
