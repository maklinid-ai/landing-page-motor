"use client";

import { useEffect } from "react";

/**
 * HydrationGuard
 *
 * Some browser extensions (Bitdefender Anti-Fraud / Anti-Tracker, certain
 * password managers, etc.) inject non-standard attributes such as
 * `fdprocessedid`, `data-bitdefender`, or `data-webkit-droppable` into
 * interactive elements (buttons, inputs, links) before React hydrates.
 *
 * React then sees a mismatch between its virtual DOM (no such attribute) and
 * the real DOM (attribute present) and throws a hydration warning.
 *
 * This component runs a MutationObserver that continuously strips those
 * extension-injected attributes so the DOM stays clean during SPA navigation
 * and re-renders. The initial pre-hydration cleanup is handled by an inline
 * script in the root layout (see `src/app/layout.tsx`).
 */
const STRIP_ATTRS = [
  "fdprocessedid",
  "data-bitdefender",
  "data-efd",
  "data-lt-installed",
  "data-new-gr-c-s-check-loaded",
  "data-gr-ext-installed",
];

export function HydrationGuard() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const strip = () => {
      const selector = STRIP_ATTRS.map((a) => `[${a}]`).join(",");
      const els = document.querySelectorAll<HTMLElement>(selector);
      els.forEach((el) => {
        STRIP_ATTRS.forEach((attr) => el.removeAttribute(attr));
      });
    };

    // Initial sweep after mount.
    strip();

    // Continuously strip attributes as the extension re-injects them.
    const observer = new MutationObserver(() => strip());
    observer.observe(document.documentElement, {
      subtree: true,
      attributes: true,
      attributeFilter: STRIP_ATTRS,
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
