"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type LucideIcon, ArrowUpRight, Brain, Layers, LifeBuoy } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";
import { Button } from "@/components/ui/button";

const COLUMNS: { Icon: LucideIcon; title: string; items: string[] }[] = [
  {
    Icon: Layers,
    title: "Product",
    items: [
      "Capture up to 300 responses per pilot",
      "Unlimited forms with a single workspace",
      "Keep every submission in one auditable place",
    ],
  },
  {
    Icon: Brain,
    title: "AI capabilities",
    items: [
      "Traffic-light scoring on every response (Red, Amber, Green)",
      "Inline suggestions that tighten answers as people type",
      "Automatic guardrails for vague or low-signal submissions",
    ],
  },
  {
    Icon: LifeBuoy,
    title: "Support",
    items: [
      "Guided setup so you launch in days, not weeks",
      "Form design help aimed at clearer signal",
      "Help turning raw responses into concrete next actions",
    ],
  },
];

export default function WhatsIncluded() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="whats-included"
      aria-labelledby="whats-included-heading"
      className="relative bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <SectionEyebrow centered>What&apos;s included</SectionEyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading id="whats-included-heading" centered className="mx-auto mb-0 max-w-3xl">
            Everything you need to run a feedback cycle
          </SectionHeading>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionLead centered className="mb-12 max-w-2xl sm:mb-14">
            Product limits, AI scoring and guardrails, and guided support—packaged for one pilot.
          </SectionLead>
        </Reveal>

        <Stagger className="mb-12 grid max-w-md gap-6 sm:mx-auto sm:max-w-none sm:grid-cols-3">
          {COLUMNS.map(({ Icon, title, items }) => (
            <StaggerItem key={title}>
              <motion.article
                whileHover={reducedMotion ? undefined : { y: -4 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--section-card-border)] bg-[color:var(--section-card-bg)] p-6 shadow-[var(--section-shadow-sm)] transition-all duration-300 hover:border-[color:var(--color-brand-200)] hover:shadow-[var(--section-shadow-md)] sm:p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] ring-1 ring-[color:var(--color-brand-100)]">
                    <Icon
                      className="h-5 w-5 text-[color:var(--color-brand-600)]"
                      strokeWidth={2.2}
                      aria-hidden
                    />
                  </div>
                  <ArrowUpRight
                    className="h-4 w-4 -translate-x-1 translate-y-1 text-gray-300 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-[color:var(--color-brand-500)] group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <h3 className="mb-4 text-base font-bold tracking-tight text-gray-900">{title}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-brand-500)]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="text-center">
            <Button href="/contact" variant="primary" size="lg" className="inline-flex">
              Get started
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
