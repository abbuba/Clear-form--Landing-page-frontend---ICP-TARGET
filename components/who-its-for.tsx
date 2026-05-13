"use client";

import { motion } from "framer-motion";
import { Bot, MessageCircle, Boxes, Users } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

const TAGS = [
  { Icon: Bot, label: "AI chatbots" },
  { Icon: MessageCircle, label: "AI copilots" },
  { Icon: Boxes, label: "AI SaaS products" },
  { Icon: Users, label: "Customer-facing AI tools" },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Who it&apos;s for</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-10 max-w-2xl">
            Built for applied AI product teams
          </SectionHeading>
        </Reveal>

        <Stagger className="mb-10 flex flex-wrap gap-3">
          {TAGS.map(({ Icon, label }) => (
            <StaggerItem key={label}>
              <motion.span
                whileHover={{ y: -2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
                className="inline-flex cursor-default items-center gap-2 rounded-full border border-[color:var(--section-card-border)] bg-[color:var(--section-card-bg)] px-5 py-2.5 text-base font-medium text-gray-800 shadow-[var(--section-shadow-sm)] transition-all duration-200 hover:border-[color:var(--color-brand-200)] hover:bg-white hover:text-[color:var(--color-brand-700)] hover:shadow-[var(--section-shadow-md)]"
              >
                <Icon className="h-4 w-4" />
                {label}
              </motion.span>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="text-base font-semibold text-gray-900">
            If user feedback impacts your product, this is for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
