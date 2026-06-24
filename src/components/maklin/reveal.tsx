"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SSR-safe reduced-motion hook.
 *
 * `useReducedMotion()` from Framer Motion returns `null` on the server (no
 * access to `matchMedia`) but the actual boolean on the client. When a user
 * has `prefers-reduced-motion: reduce` enabled, this causes a hydration
 * mismatch: the server renders with motion enabled (y offset applied) while
 * the client renders with motion reduced (no y offset).
 *
 * This hook returns `false` on both the server AND the first client render
 * (hydration), then updates to the real preference after mount. This
 * guarantees the initial rendered output is identical on both sides.
 */
function useReducedMotionSafe(): boolean {
  const [mounted, setMounted] = React.useState(false);
  const reduce = useReducedMotion();
  React.useEffect(() => setMounted(true), []);
  return mounted ? Boolean(reduce) : false;
}

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span";
};

/**
 * Scroll-triggered reveal animation. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotionSafe();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      suppressHydrationWarning
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger container — children using <Reveal> should use motion variants directly.
 * Use <StaggerGroup> + <StaggerItem> pairs for grids/lists.
 */
export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      suppressHydrationWarning
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: reduce ? 0 : stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <motion.div
      className={className}
      suppressHydrationWarning
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotionSafe();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: reduce ? 1 : 0 }}
      transition={{ duration: 0.8, delay }}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}

/** Animated counter that runs when in view. */
export function CountUp({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const [value, setValue] = React.useState(0);
  const reduce = useReducedMotionSafe();
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            if (reduce) {
              setValue(to);
              return;
            }
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / (duration * 1000), 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(to * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration, reduce]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)} suppressHydrationWarning>
      {prefix}
      {value.toLocaleString("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
