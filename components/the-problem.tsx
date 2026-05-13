"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { RedUnderline } from "@/components/ui/red-underline";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StickyNote } from "@/components/ui/sticky-note";

const NOTES: { text: string; rot: number }[] = [
  { text: '"Wrong answer"', rot: -3 },
  { text: '"Not helpful"', rot: 1.5 },
  { text: '"Does not work"', rot: -2 },
  { text: '"Try again"', rot: 2.5 },
  { text: '"This is broken"', rot: -1 },
  { text: '"Bad UX"', rot: 3 },
];

export default function TheProblem() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="problem"
      className="relative bg-gradient-to-b from-white via-gray-50 to-gray-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>The Problem</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-8">
            You&apos;re collecting feedback. <br className="hidden sm:block" />
            <span className="text-gray-400">But not </span>
            <RedUnderline delay={0.4}>signal.</RedUnderline>
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mb-8 text-lg text-gray-600">Most feedback looks like this:</p>
        </Reveal>

        <Stagger
          as="ul"
          className="mb-14 flex list-none flex-wrap gap-x-4 gap-y-5 px-1 py-2"
          staggerDelay={0.07}
        >
          {NOTES.map((note, i) => (
            <StaggerItem key={note.text} as="span">
              <StickyNote text={note.text} rot={note.rot} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="my-12 rounded-2xl border border-gray-200/80 bg-white/80 p-5 backdrop-blur-sm sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <div className="inline-flex items-end gap-1 rounded-xl bg-[color:var(--color-brand-50)] px-3 py-2 text-[color:var(--color-brand-700)] ring-1 ring-[color:var(--color-brand-100)]">
                <span className="font-poppins text-3xl font-extrabold leading-none sm:text-4xl">70</span>
                <span className="pb-0.5 text-lg font-bold">%</span>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-gray-700">
                of leaders say their AI feedback lacks{" "}
                <span className="font-semibold text-gray-900">&ldquo;actionability and context.&rdquo;</span>
              </p>
            </div>
            <p className="mt-3 text-xs font-medium text-gray-400">
              Source: Zonka Feedback, State of AI Feedback Analytics 2025
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto max-w-3xl py-6 text-center sm:py-10">
            <p className="font-poppins text-xl font-semibold leading-relaxed tracking-tight text-gray-800 sm:text-2xl md:text-3xl">
              Without signal, you ship blind&mdash;{" "}
              <RedUnderline delay={0.4}>no clarity on what&rsquo;s broken</RedUnderline>,{" "}
              <RedUnderline delay={0.7}>no way to prioritise</RedUnderline>, and product iteration{" "}
              <RedUnderline delay={1.0}>slows to a crawl</RedUnderline>.
            </p>
            <p className="mt-6 text-xs text-gray-400 sm:text-sm">
              <span>wasted dev cycles</span>
              <span className="mx-2 text-gray-300" aria-hidden>
                &middot;
              </span>
              <span>every issue feels urgent</span>
              <span className="mx-2 text-gray-300" aria-hidden>
                &middot;
              </span>
              <span>ship, hope, repeat</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-poppins text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            More feedback{" "}
            <motion.span
              aria-hidden
              initial={{ scale: reducedMotion ? 1 : 0.6, opacity: reducedMotion ? 1 : 0 }}
              whileInView={{ scale: [reducedMotion ? 1 : 0.6, 1.18, 1], opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: reducedMotion ? 0 : 0.7,
                delay: reducedMotion ? 0 : 0.25,
                ease: [0.16, 1, 0.3, 1],
                times: [0, 0.6, 1],
              }}
              className="mx-1 inline-block text-[color:var(--color-brand-600)]"
            >
              &ne;
            </motion.span>
            <span className="sr-only">does not equal</span>{" "}
            better decisions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
