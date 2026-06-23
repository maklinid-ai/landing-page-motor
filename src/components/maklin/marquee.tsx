"use client";

import { services } from "@/config/site";

export function Marquee() {
  const items = [...services, ...services];
  return (
    <div className="relative overflow-hidden border-y border-black/5 bg-white py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-ink/40">
              {item}
            </span>
            <span className="size-1.5 rounded-full bg-brand" />
          </div>
        ))}
      </div>
    </div>
  );
}
