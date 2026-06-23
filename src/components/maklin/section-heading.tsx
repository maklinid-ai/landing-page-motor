"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "light" | "dark";
}) {
  const tones: Record<string, string> = {
    brand: "bg-brand/15 text-ink ring-brand/30",
    light: "bg-black/5 text-ink ring-black/10",
    dark: "bg-white/10 text-white ring-white/20",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ring-1 ring-inset",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === "dark" ? "dark" : "brand"}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl",
            tone === "dark" ? "text-white" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "max-w-2xl text-pretty text-base leading-relaxed sm:text-lg",
              align === "center" ? "mx-auto" : "",
              tone === "dark" ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
