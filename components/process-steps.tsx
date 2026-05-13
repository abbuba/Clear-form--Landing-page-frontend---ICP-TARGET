"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  type LucideIcon,
  ClipboardList,
  Inbox,
  Layers,
  LineChart,
  CircleCheck,
} from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";

const STEPS: {
  num: string;
  title: string;
  desc: string;
  Icon: LucideIcon;
}[] = [
  {
    num: "01",
    title: "Define",
    desc: "Scope your use case and the feedback moments that matter.",
    Icon: ClipboardList,
  },
  {
    num: "02",
    title: "Collect",
    desc: "Capture responses while Clearform tightens wording in real time.",
    Icon: Inbox,
  },
  {
    num: "03",
    title: "Structure",
    desc: "Normalize answers into comparable fields and categories.",
    Icon: Layers,
  },
  {
    num: "04",
    title: "Identify",
    desc: "Surface patterns, repeats, and where teams get stuck.",
    Icon: LineChart,
  },
  {
    num: "05",
    title: "Decide",
    desc: "Prioritize fixes with evidence, not guesswork.",
    Icon: CircleCheck,
  },
];

export default function ProcessSteps() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 md:py-28"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <SectionEyebrow centered>Process</SectionEyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading id="process-heading" centered className="mx-auto mb-0 max-w-2xl">
            How the pilot works
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLead centered className="mb-14 max-w-2xl sm:mb-16">
            Five steps from raw reactions to decisions you can defend.
          </SectionLead>
        </Reveal>

        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[2.125rem] hidden md:block"
            aria-hidden
          >
            <div className="relative mx-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent">
              {!reducedMotion && (
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gray-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </div>
          </div>

          <motion.ol
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
            className="grid list-none grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-4"
          >
            {STEPS.map(({ num, title, desc, Icon }, i) => (
              <motion.li
                key={num}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="group relative flex flex-col items-center gap-4 text-center"
              >
                {/* Circle + icon */}
                <div className="relative">
                  <div className="relative flex h-[4.25rem] w-[4.25rem] flex-col items-center justify-center gap-1 rounded-full border border-gray-200 bg-[color:var(--section-card-bg)] shadow-[var(--section-shadow-sm)] transition-all duration-200 group-hover:border-[color:var(--color-brand-200)] group-hover:shadow-[var(--section-shadow-md)]">
                    <Icon
                      className="h-4 w-4 shrink-0 text-gray-600"
                      strokeWidth={2.2}
                      aria-hidden
                    />
                    <span className="text-[13px] font-extrabold leading-none text-gray-700">
                      {num}
                    </span>
                  </div>
                </div>
                <div className="max-w-[16rem] md:max-w-[11.5rem]">
                  <p className="mb-1.5 text-sm font-bold text-gray-900">{title}</p>
                  <p className="text-xs leading-relaxed text-gray-500 sm:text-sm sm:leading-snug">
                    {desc}
                  </p>
                </div>
                {i < STEPS.length - 1 ? (
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: reducedMotion ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reducedMotion ? 0 : 0.45,
                      delay: reducedMotion ? 0 : 0.25 + i * 0.08,
                    }}
                    className="absolute -right-2 top-[2.125rem] hidden h-px w-4 origin-left bg-gray-300 sm:block"
                  />
                ) : null}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
