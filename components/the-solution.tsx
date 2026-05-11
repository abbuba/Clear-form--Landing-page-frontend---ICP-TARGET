"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, MessageSquare, Zap } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { RedUnderline } from "@/components/ui/red-underline";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";

const STEPS = [
  { Icon: MessageSquare, label: "User gives feedback" },
  { Icon: Zap, label: "Clearform improves response in real time" },
  { Icon: BarChart3, label: "You get structured, comparable signals" },
];

export default function TheSolution() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="solution" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>The Solution</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="max-w-3xl">
            Fix feedback at the <RedUnderline delay={0.4}>source.</RedUnderline>
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLead className="max-w-2xl mb-14">
            Clearform improves feedback at the moment it&apos;s given. Instead of vague responses,
            users are guided to provide clear context, specific issues, and actionable detail.
          </SectionLead>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-3">
          {STEPS.map(({ Icon, label }, i) => (
            <StaggerItem key={label}>
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative h-full rounded-2xl border border-[color:var(--section-card-border)] bg-[color:var(--section-card-bg)] p-6 shadow-[var(--section-shadow-sm)] transition-all duration-200 hover:border-[color:var(--color-brand-100)] hover:shadow-[var(--section-shadow-md)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] ring-1 ring-[color:var(--color-brand-100)]">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <span className="text-3xl font-extrabold text-gray-200 transition-colors group-hover:text-[color:var(--color-brand-100)]">
                    0{i + 1}
                  </span>
                </div>
                <p className="text-base font-semibold leading-snug text-gray-900">{label}</p>
                {i < STEPS.length - 1 ? (
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: reducedMotion ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: reducedMotion ? 0 : 0.45, delay: reducedMotion ? 0 : 0.25 + i * 0.08 }}
                    className="absolute -right-2 top-8 hidden h-px w-4 origin-left bg-[color:var(--color-brand-200)] sm:block"
                  />
                ) : null}
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
            Better input ? structured signal ? clear decisions
          </p>
        </Reveal>
      </div>
    </section>
  );
}
