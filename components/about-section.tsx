"use client";

import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionLead } from "@/components/ui/section-lead";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-gray-50 to-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>About</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-8 max-w-2xl">
            Why Clearform exists
          </SectionHeading>
        </Reveal>

        <div className="max-w-2xl space-y-5">
          <Reveal delay={0.1}>
            <SectionLead className="mb-0 text-lg text-gray-700">
              Most teams don&apos;t have a feedback problem. They have a{" "}
              <span className="font-semibold text-gray-900">signal problem</span>.
            </SectionLead>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-base leading-relaxed text-gray-600">
              They collect feedback constantly but it&apos;s vague and unusable. Open text responses,
              thumbs up and down, Slack threads — all of it piles up without creating clarity.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed text-gray-600">
              Clearform fixes this at the source. Instead of collecting more feedback, we help users
              give better feedback.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="pt-2 text-base font-bold text-gray-900">
              Better input leads to clearer decisions.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
