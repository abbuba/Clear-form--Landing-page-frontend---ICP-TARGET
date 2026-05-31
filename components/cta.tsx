"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CalendlyButton from "@/components/calendly-button";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { RedUnderline } from "@/components/ui/red-underline";
import { PILOT_CTA_LABEL, PILOT_CHECKOUT_URL } from "@/lib/pricing";

export default function Cta() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-[var(--color-ink,#0B0B0F)] py-20 md:py-28"
    >
      {/* Background grid */}
      <div className="grid-bg-dark pointer-events-none absolute inset-0 opacity-100" aria-hidden />

      {/* Brand glow blobs */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--color-brand-600)]/30 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[color:var(--color-brand-700)]/20 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-[color:var(--color-brand-500)]/15 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-500)] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--color-brand-500)]" />
            </span>
            Ready when you are
          </span>
        </Reveal>
        <motion.div
          className="will-change-transform"
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{
            duration: reducedMotion ? 0 : 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Start turning feedback <br className="hidden sm:block" />
            into <RedUnderline delay={0.25}>decisions.</RedUnderline>
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
            Stop guessing what is wrong. Start seeing it clearly.
          </p>
        </motion.div>

        <Reveal delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={PILOT_CHECKOUT_URL}
              external
              variant="secondary"
              size="lg"
              className="border-white/20 bg-white text-gray-900 shadow-[0_18px_40px_-16px_rgba(255,255,255,0.32)] hover:bg-white"
            >
              {PILOT_CTA_LABEL}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <CalendlyButton className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Book a demo
            </CalendlyButton>
            <Link
              href="mailto:hello@clearform.in"
              className="text-base font-medium text-white/60 transition-colors duration-200 hover:text-white hover:underline"
            >
              Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
