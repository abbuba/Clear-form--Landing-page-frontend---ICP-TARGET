"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { StickyNote } from "@/components/ui/sticky-note";

const NOISE_ITEMS = [
  "Thumbs up and down",
  "Open text responses",
  "Slack threads",
  "Support tickets",
];

const QUOTES = [
  { text: '"Not helpful"', rot: -2.5 },
  { text: '"Wrong answer"', rot: 1.5 },
  { text: '"Does not work"', rot: -1.5 },
];

export default function FounderSection() {
  return (
    <section id="founder" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>Founder</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-8">
            Built from a problem we&apos;ve seen up close
          </SectionHeading>
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl space-y-5">
            <Reveal delay={0.1}>
              <p className="text-lg text-gray-700">
                Most AI teams are collecting feedback. But they can&apos;t use it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base text-gray-600">You&apos;ve seen it:</p>
            </Reveal>

            <Reveal delay={0.2}>
              <ul className="flex list-none flex-wrap gap-3">
                {QUOTES.map((q, i) => (
                  <StickyNote key={q.text} text={q.text} rot={q.rot} index={i} />
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-base font-semibold text-gray-900">This is not feedback. It&apos;s noise.</p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="text-base leading-relaxed text-gray-600">
                If you&apos;re building AI products like copilots, chat interfaces, or LLM tools, your
                output quality depends on user feedback. But today, that feedback is scattered across:
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <ul className="space-y-2 pl-1">
                {NOISE_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="text-base leading-relaxed text-gray-600">
                It&apos;s inconsistent, unstructured, and difficult to act on. Even with high volume,
                teams struggle to answer:{" "}
                <span className="font-semibold text-gray-900">What should we fix?</span>
              </p>
            </Reveal>

            <Reveal delay={0.45}>
              <p className="text-base font-bold text-gray-900">Clearform solves this.</p>
            </Reveal>

            <Reveal delay={0.5}>
              <Link
                href="https://www.linkedin.com/in/naveenkumar-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/40 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
              >
                <Linkedin className="h-4 w-4" />
                Connect on LinkedIn
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="flex flex-col items-center gap-3 md:items-end">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-[color:var(--color-brand-100)]/50 via-[color:var(--color-brand-50)]/35 to-transparent blur-xl"
                  aria-hidden
                />
                <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-black text-2xl font-bold text-white shadow-xl ring-1 ring-white/10">
                  NK
                </div>
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Founder, Clearform
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
