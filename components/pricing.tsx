"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";
import { Button } from "@/components/ui/button";

const FEATURES = [
  "300 responses",
  "Unlimited forms",
  "Whole-team visibility — one workspace, everyone who needs in",
  "Full AI feedback system",
  "Guided onboarding",
  "Structured exports when you are ready to act",
];

function CountUp({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v)}`);

  useEffect(() => {
    if (inView) motionVal.set(to);
  }, [inView, motionVal, to]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
    </span>
  );
}

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
            One payment covers three months of pilot access — workspace, AI scoring, onboarding help, and exports.
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
              className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-8 text-center shadow-[0_20px_50px_-28px_rgba(15,23,42,0.18)] ring-transparent transition-[box-shadow,ring-color] duration-300 hover:shadow-[0_28px_60px_-28px_rgba(15,23,42,0.22)] hover:ring-1 hover:ring-gray-900/[0.06] sm:p-9"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50/80 to-transparent" aria-hidden />

              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-3.5 py-1.5 text-[12px] font-medium leading-none text-gray-600 shadow-sm backdrop-blur-sm">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500 ring-2 ring-emerald-500/25" aria-hidden />
                    Limited cohort — spots fill first
                  </div>
                </div>

                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                  Pilot access
                </p>
                <div className="mb-3 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1">
                  <span className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-7xl">
                    $<CountUp to={50} />
                  </span>
                  <span className="text-base font-semibold text-gray-400 sm:text-lg">one-time</span>
                </div>
                <p className="mx-auto mb-2 max-w-sm text-sm font-medium leading-snug text-gray-700">
                  <span className="block">3-month pilot window — use your seats and responses at your pace inside that period.</span>
                </p>
                <p className="mx-auto mb-2 max-w-sm text-xs leading-relaxed text-gray-500">
                  After three months, continue on a subscription only if it&apos;s working for you — we&apos;ll share options when you&apos;re ready; no forced upgrade.
                </p>
                <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-gray-500">
                  or ₹4,500 INR equivalent. Workspace, AI pipeline, onboarding, and structured exports included.
                </p>

                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="mb-8 flex w-full justify-center"
                >
                  Start pilot for $50
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>

                <div className="border-t border-gray-100 pt-6">
                  <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                    Included in your pilot
                  </p>
                  <ul className="mx-auto max-w-sm space-y-3 text-left">
                    {FEATURES.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                        className="flex items-start gap-3 text-sm leading-snug text-gray-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100">
                          <Check className="h-3 w-3 text-green-600" strokeWidth={3} />
                        </span>
                        <span>{feature}</span>
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
