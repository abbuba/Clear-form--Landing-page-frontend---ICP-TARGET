"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useMemo, useRef } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { RedUnderline } from "@/components/ui/red-underline";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";
import { StickyNote } from "@/components/ui/sticky-note";
import { useTypewriter } from "@/lib/hooks/use-typewriter";

const NOTES: { text: string; rot: number }[] = [
  { text: '"Wrong answer"', rot: -3 },
  { text: '"Not helpful"', rot: 1.5 },
  { text: '"Doesn\u2019t work"', rot: -2 },
];

const CLEARFORM_SIGNAL = {
  /** Short typed line — plain language, one breath. */
  summary:
    "It pushed a confident answer but never checked it against my sheet — I still can't see which rule or cell actually failed.",
} as const;

const FEEDBACK_ACK =
  "Great feedback — thanks for the detail. That insight helps." as const;

function buildAnswerSentence() {
  return CLEARFORM_SIGNAL.summary;
}

function ClearformOutputCard() {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-80px" });
  const fullText = useMemo(() => buildAnswerSentence(), []);
  const { displayedText, isComplete } = useTypewriter(fullText, inView, {
    charsPerTick: 2,
    intervalMs: 26,
  });

  return (
    <div
      ref={cardRef}
      className="mx-auto max-w-2xl rounded-2xl border border-gray-200/80 bg-white/90 p-6 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:p-7"
    >
      <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
        Clearform output
      </p>

      <div aria-busy={!isComplete} aria-live="polite">
        <p className="sr-only">
          {isComplete
            ? "Typing finished. Structured feedback complete. Green dots mean issue, context, and detail are captured. Thank-you acknowledgment shown."
            : "Clearform output is typing character by character."}
        </p>
        <div
          className={`relative max-w-prose rounded-xl border border-gray-200 bg-gray-50/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] sm:p-5 ${
            isComplete ? "pb-[4.25rem] sm:pb-16" : "pb-4 sm:pb-5"
          }`}
        >
          <p className="text-sm font-medium leading-relaxed text-gray-800 sm:text-[15px] sm:leading-relaxed sm:pr-2">
            {displayedText}
            {!isComplete && (
              <motion.span
                aria-hidden
                className="ml-0.5 inline-block h-[1.15em] w-px translate-y-0.5 bg-gray-800 align-text-bottom"
                animate={reducedMotion ? { opacity: 0 } : { opacity: [1, 0] }}
                transition={{
                  duration: 0.55,
                  repeat: reducedMotion ? 0 : Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            )}
          </p>
          {isComplete ? (
            <motion.div
              className="absolute bottom-3 right-3 flex max-w-[13rem] flex-col items-end gap-1.5 text-right"
              initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] font-medium leading-snug text-green-700 sm:text-xs">{FEEDBACK_ACK}</p>
              <div className="flex gap-1" aria-hidden>
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600 opacity-90" />
                ))}
              </div>
            </motion.div>
          ) : null}
        </div>
        {isComplete ? (
          <p className="mt-3 text-xs text-gray-500">Structured for decisions.</p>
        ) : null}
      </div>
    </div>
  );
}

function TransformArrow() {
  const reducedMotion = useReducedMotion();
  return (
    <div className="flex justify-center py-6 sm:py-8" aria-hidden>
      <svg viewBox="0 0 60 80" className="h-16 w-12 sm:h-20 sm:w-14">
        <motion.path
          d="M30 4 C 22 22, 38 42, 30 70"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: reducedMotion ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            delay: reducedMotion ? 0 : 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
        <motion.path
          d="M22 64 L30 76 L38 64"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ opacity: reducedMotion ? 1 : 0, scale: reducedMotion ? 1 : 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: reducedMotion ? 0 : 0.4,
            delay: reducedMotion ? 0 : 0.95,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ transformOrigin: "30px 70px" }}
        />
      </svg>
    </div>
  );
}

export default function UseCase() {
  return (
    <section
      id="use-case"
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Use Case</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading>
            What it looks like in <RedUnderline delay={0.4}>practice.</RedUnderline>
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLead>Vague feedback in. Structured signal out.</SectionLead>
        </Reveal>

        <Stagger
          as="ul"
          className="flex list-none flex-wrap justify-center gap-x-4 gap-y-5 px-1 py-2"
          staggerDelay={0.07}
        >
          {NOTES.map((note, i) => (
            <StaggerItem key={note.text} as="span">
              <StickyNote text={note.text} rot={note.rot} index={i} />
            </StaggerItem>
          ))}
        </Stagger>

        <TransformArrow />

        <Reveal delay={0.15}>
          <ClearformOutputCard />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-16 text-center font-poppins text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            From <RedUnderline delay={0.4}>noise</RedUnderline> to{" "}
            <RedUnderline delay={0.7}>signal</RedUnderline>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
