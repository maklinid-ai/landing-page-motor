
## Task 2 — Add suppressHydrationWarning to motion components with `initial` prop

**Date:** Auto-recorded
**Scope:** Framer Motion SSR/CSR style serialization hydration mismatch fix
(propagated as `opacity: "0"` string on server vs `opacity: 0` number on client).

### Files edited (7 files, 23 motion components updated)

1. `src/components/maklin/hero-section.tsx` — **8** motion components
   - `motion.div` (badge wrapper, initial opacity/y)
   - `motion.h1` (headline)
   - `motion.p` (subhead #1)
   - `motion.p` (subhead #2)
   - `motion.div` (CTA row)
   - `motion.dl` (stats grid)
   - `motion.div` (right visual container)
   - `motion.div` (bar chart bars, self-closing)

2. `src/components/maklin/navbar.tsx` — **3** motion components
   - `motion.div` (navbar container, initial y/opacity)
   - `motion.div` (mobile overlay, initial opacity)
   - `motion.div` (mobile drawer, initial x="100%")

3. `src/components/maklin/profit-simulation-section.tsx` — **3** motion components
   - `motion.div` (left numbers panel, key=active.id)
   - `motion.div` (right chart panel, key=active.id+"-chart")
   - `motion.div` (cumulative bars, initial height=0)
   - NOTE: `motion.span` with `layoutId="profit-pill"` was skipped (no `initial` prop).

4. `src/components/maklin/pricing-section.tsx` — **1** motion component
   - `motion.p` (footer note, initial opacity)

5. `src/components/maklin/floating-whatsapp.tsx` — **2** motion components
   - `motion.div` (outer wrapper, initial opacity/y/scale)
   - `motion.span` (expanded label, initial width/opacity/marginLeft)
   - NOTE: `motion.div` with `animate={{ width: ... }}` only was skipped (no `initial`).

6. `src/components/maklin/lead-form-dialog.tsx` — **3** motion components
   - `motion.div` (success state container, key="success")
   - `motion.div` (success check icon, initial scale/opacity)
   - `motion.form` (form state, key="form")

7. `src/components/maklin/lead-form-section.tsx` — **3** motion components
   - `motion.div` (success state container, key="success")
   - `motion.div` (success check icon, initial scale/opacity)
   - `motion.form` (form state, key="form")

### Files inspected but not modified (3 files)

8. `src/components/maklin/final-cta-section.tsx` — **0** changes.
   Contains 2 `motion.div` elements but both only have `animate={{ scale: [...] }}`
   (infinite loop animations) and no `initial` prop. Skipped per task rules.

9. `src/components/maklin/opportunity-section.tsx` — **0** changes.
   Contains 1 `motion.span` with `animate={{ rotate: [0, 360] }}` only, no `initial`.
   Skipped per task rules.

10. `src/components/maklin/mistakes-section.tsx` — **0** changes.
    Does not import or use `motion` from framer-motion. No motion components.

### Verification

- `bun run lint` — passes with no errors or warnings.
- Grep audit confirms 23 new `suppressHydrationWarning` occurrences across the 7
  edited files; existing ones in `reveal.tsx` and `footer.tsx` (untouched by this
  task) remain in place.
- All 23 edits target `motion.*` elements that have an `initial` prop.
- No motion components with `animate`-only or `whileInView`-only were touched.
- No non-motion elements were touched.

### Pattern applied

```tsx
<motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  suppressHydrationWarning   // <-- added as last JSX attribute
>
```

For self-closing motion elements:
```tsx
<motion.div
  initial={{ height: 0 }}
  animate={{ height: `${h}%` }}
  ...
  suppressHydrationWarning
/>
```
