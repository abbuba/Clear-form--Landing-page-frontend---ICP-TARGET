"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Lock, Workflow } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

const CARDS = [
  {
    Icon: ShieldCheck,
    title: "No long-term commitment",
    desc: "Pay once for a three-month pilot window — move at your own pace inside it. Subscription only if you continue afterward.",
  },
  {
    Icon: Lock,
    title: "No data access required",
    desc: "We never access your data. Your data stays in your environment.",
  },
  {
    Icon: Workflow,
    title: "Works with your existing workflows",
    desc: "Easy to integrate. No technical setup needed to start collecting better feedback.",
  },
];

export default function TrustPrivacy() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="trust" className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Trust &amp; Privacy</SectionEyebrow>
        </Reveal>
        <motion.div
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-18%" }}
          transition={{
            duration: reducedMotion ? 0 : 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <SectionHeading className="mb-12 max-w-2xl">
            Built for real product teams
          </SectionHeading>
        </motion.div>

        <Stagger className="grid gap-4 sm:grid-cols-3">
          {CARDS.map(({ Icon, title, desc }) => (
            <StaggerItem key={title}>
              <motion.div
                whileHover={{ y: -2 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-[color:var(--section-card-border)] bg-[color:var(--section-card-bg)] p-6 shadow-[var(--section-shadow-sm)] transition-all duration-200 hover:border-[color:var(--color-brand-100)] hover:shadow-[var(--section-shadow-md)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-brand-50)] ring-1 ring-[color:var(--color-brand-100)] transition-all duration-200 group-hover:scale-105">
                  <Icon className="h-5 w-5 text-[color:var(--color-brand-600)]" />
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <p className="mt-8 text-sm font-medium text-gray-400">
            Your data stays in your environment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
