"use client";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative inline-flex size-8 items-center justify-center rounded-lg bg-brand">
        <span className="text-[15px] font-black leading-none text-ink">M</span>
        <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-ink ring-2 ring-white" />
      </span>
      <span
        className={cn(
          "text-lg font-black tracking-tight",
          tone === "light" ? "text-white" : "text-ink",
        )}
      >
        MAKLIN<span className="text-brand">.</span>
      </span>
    </span>
  );
}
