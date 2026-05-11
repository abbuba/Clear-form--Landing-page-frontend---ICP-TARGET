"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

import CalendlyButton from "@/components/calendly-button";
import BlurText from "@/components/blur-text";
import { RedUnderline } from "@/components/ui/red-underline";
import { StickyNote } from "@/components/ui/sticky-note";
import { useSmoothAnchor } from "@/lib/hooks/use-smooth-anchor";

const LightRays = dynamic(() => import("@/components/light-rays"), { ssr: false });

export default function HeroHome() {
  const reducedMotion = useReducedMotion();
  const handleAnchor = useSmoothAnchor();

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-rose-50/30 to-white">
      {/* Grid background */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />

      {/* Light rays */}
      {!reducedMotion && (
        <div className="motion-safe:block pointer-events-none absolute inset-0 -z-0 opacity-50" aria-hidden>
          <LightRays
            raysOrigin="top-center"
            raysColor="#E24A45"
            raysSpeed={1.1}
            lightSpread={1.2}
            rayLength={1.6}
            pulsating={false}
            fadeDistance={1.4}
            saturation={0.85}
            followMouse
            mouseInfluence={0.08}
            noiseAmount={0.05}
            distortion={0.02}
            className="h-full w-full"
          />
        </div>
      )}

      {/* Top fade so rays bleed into header gracefully */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left: copy */}
          <div className="max-w-xl flex-1">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-700 shadow-sm backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-brand-500)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-brand)]" />
              </span>
              Pilot now open · AI Product Teams
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <BlurText
                text="Turn user feedback into"
                animateBy="words"
                delay={60}
                className="block"
              />
              <span className="block text-gray-900">
                clear product <RedUnderline delay={0.7}>decisions.</RedUnderline>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              Most AI teams collect feedback. Few can actually use it. Clearform improves response quality
              at the source and shows you exactly what to fix.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mb-4 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-16px_rgba(0,0,0,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-black hover:shadow-[0_22px_50px_-16px_rgba(0,0,0,0.55)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-brand-500)]/60"
              >
                <span className="relative z-10">Start Pilot for $50</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </Link>
              <Link
                href="/#process"
                onClick={(e) => handleAnchor("/#process", e)}
                className="group inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white/70 px-6 py-3.5 text-base font-semibold text-gray-900 backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-brand-500)]/60"
              >
                See how it works
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <CalendlyButton className="inline-flex items-center gap-2 rounded-lg border border-transparent bg-transparent px-3 py-2 text-sm font-medium text-gray-700 transition-colors duration-150 hover:text-gray-900 hover:underline cursor-pointer">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="3" />
                  <path strokeLinecap="round" d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Book a demo
              </CalendlyButton>
              <Link
                href="mailto:hello@clearform.in"
                className="text-sm font-medium text-gray-500 transition-colors duration-150 hover:text-gray-900 hover:underline"
              >
                Talk to us
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-5 text-xs text-gray-400"
            >
              No time limits · No complex setup · Start collecting better feedback immediately.
            </motion.p>
          </div>
          {/* Right: animated widget */}
          <BeforeAfterWidget />
        </div>
      </div>
    </section>
  );
}

function BeforeAfterWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg flex-1"
    >
      {/* Glow */}
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[color:var(--color-brand-100)]/45 via-rose-200/30 to-transparent blur-2xl" aria-hidden />

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/95 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur">
        <div className="grid grid-cols-2">
          {/* Before panel */}
          <div className="border-r border-gray-200 bg-gray-50/80 p-6">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Before</p>
            <motion.ul
              className="flex list-none flex-wrap gap-x-3 gap-y-3 px-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
              }}
            >
              {[
                { text: '"Not helpful"', rot: -3 },
                { text: '"Wrong answer"', rot: 1.5 },
                { text: '"Does not work"', rot: -2 },
              ].map((note, i) => (
                <StickyNote key={note.text} text={note.text} rot={note.rot} index={i} />
              ))}
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-3 text-center text-[11px] font-medium text-gray-400"
            >
              Vague &middot; Unactionable
            </motion.p>
          </div>

          {/* After panel */}
          <div className="bg-white p-6">
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">After</p>
            <p className="mb-4 text-xs font-bold text-gray-700">AI feedback quality</p>
            <motion.div
              className="space-y-3.5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.14, delayChildren: 0.7 } },
              }}
            >
              {[
                { label: "Issue type", value: "Incorrect answer" },
                { label: "Context", value: "Missing verification step" },
                { label: "Detail", value: "Specific explanation" },
              ].map((row) => (
                <motion.div
                  key={row.label}
                  variants={{
                    hidden: { opacity: 0, x: 8 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-start gap-2.5"
                >
                  <span className="mt-1.5 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-500)] ring-2 ring-[color:var(--color-brand-100)]" />
                  <div>
                    <p className="text-[10px] text-gray-400">{row.label}</p>
                    <p className="text-xs font-semibold text-gray-800">{row.value}</p>
                  </div>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1 },
                }}
                className="flex items-center gap-1.5 pt-1"
              >
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-semibold text-green-700 ring-1 ring-green-100">
                  <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  High quality
                </span>
                <span className="text-[10px] font-medium text-gray-400">· Actionable · Structured</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">From noise to signal</p>
          <p className="text-sm font-bold text-gray-900">Every response, actionable</p>
        </div>
      </div>
    </motion.div>
  );
}
