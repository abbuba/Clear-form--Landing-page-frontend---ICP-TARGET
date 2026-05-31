"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";
import { Button } from "@/components/ui/button";
import {
  INCLUDED_ITEMS,
  PILOT_CHECKOUT_URL,
  PILOT_CTA_LABEL,
  PILOT_PRICE_LINE,
  PILOT_PRICE_USD_LABEL,
  PILOT_SUBLINE,
  PILOT_TERMS_LINE,
} from "@/lib/pricing";

export default function Pricing() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[color:var(--color-brand-100)]/40 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Pricing</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-0 max-w-2xl">
            Simple, one-time pilot
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.07}>
          <SectionLead className="mb-12 max-w-xl">
            One payment. Three months. Everything below, included.
          </SectionLead>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center">
            <motion.div
              initial={reducedMotion ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 22, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{
                duration: reducedMotion ? 0 : 0.68,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={reducedMotion ? undefined : { y: -3 }}
              className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-7 text-center shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-transparent transition-[box-shadow,ring-color] duration-300 hover:shadow-[0_28px_60px_-28px_rgba(15,23,42,0.22)] hover:ring-1 hover:ring-gray-900/[0.06] sm:p-8"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-50/80 to-transparent" aria-hidden />

              <div className="relative">
                <div className="mb-5 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-[11px] font-medium leading-none text-gray-600 shadow-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                    Limited cohort — early spots only
                  </div>
                </div>

                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Pilot access
                </p>
                <div className="mb-2 flex flex-wrap items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    {PILOT_PRICE_USD_LABEL}
                  </span>
                  <span className="text-sm font-semibold text-gray-400">one-time</span>
                </div>
                <p className="mx-auto mb-1 max-w-xs text-xs text-gray-500">{PILOT_PRICE_LINE}</p>
                <p className="mx-auto mb-1 max-w-sm text-sm leading-snug text-gray-700">
                  {PILOT_TERMS_LINE}
                </p>
                <p className="mx-auto mb-5 max-w-sm text-xs leading-relaxed text-gray-500">
                  {PILOT_SUBLINE}
                </p>

                <Button
                  href={PILOT_CHECKOUT_URL}
                  external
                  variant="primary"
                  size="lg"
                  className="mb-6 flex w-full justify-center"
                >
                  {PILOT_CTA_LABEL}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>

                <div className="border-t border-gray-100 pt-5">
                  <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                    Included
                  </p>
                  <ul className="mx-auto max-w-sm space-y-2.5 text-left">
                    {INCLUDED_ITEMS.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.08 + i * 0.05, duration: 0.35 }}
                        className="flex items-start gap-2.5 text-sm leading-snug text-gray-700"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100">
                          <Check className="h-2.5 w-2.5 text-green-600" strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
