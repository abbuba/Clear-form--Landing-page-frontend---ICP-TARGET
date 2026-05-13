"use client";

import { motion } from "framer-motion";
import { Target, Search, GitCompare, ListChecks, Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { RedUnderline } from "@/components/ui/red-underline";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const ITEMS = [
  { Icon: Target, text: "Identify the top issues affecting your AI outputs" },
  { Icon: Search, text: "Understand why users are dissatisfied" },
  { Icon: GitCompare, text: "Compare feedback across users and scenarios" },
  { Icon: ListChecks, text: "Prioritise what to fix" },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <SectionEyebrow centered>Outcomes</SectionEyebrow>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading centered className="mb-12 max-w-3xl">
            What you get from the pilot
          </SectionHeading>
        </Reveal>

        <Stagger className="mb-14 grid gap-4 sm:grid-cols-2">
          {ITEMS.map(({ Icon, text }) => (
            <StaggerItem key={text}>
              <motion.div
                whileHover={{ y: -3 }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-[color:var(--section-card-border)] bg-[color:var(--section-card-bg)] p-6 shadow-[var(--section-shadow-sm)] transition-all duration-200 hover:border-[color:var(--color-brand-100)] hover:shadow-[var(--section-shadow-md)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)] ring-1 ring-[color:var(--color-brand-100)]">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div className="flex-1">
                  <div className="mb-1 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-green-600">
                    <Check className="h-3 w-3" strokeWidth={3} />
                    Outcome
                  </div>
                  <p className="text-base font-semibold leading-snug text-gray-900">{text}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="text-center">
            <p className="mb-8 text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Not more feedback. <RedUnderline delay={0.25}>Better decisions.</RedUnderline>
            </p>
            <Button href="https://rzp.io/rzp/IGGfoRf" external variant="dark" size="lg">
              Start Pilot for $50
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
