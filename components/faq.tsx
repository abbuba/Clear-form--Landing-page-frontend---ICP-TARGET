"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";

const FAQ_ITEMS = [
  {
    question: "What's included in the pilot?",
    answer:
      "Product access, 300 responses, the full AI feedback system, and guided support to design your feedback structure and interpret signals.",
  },
  {
    question: "Is there a time limit?",
    answer:
      "The pilot includes three months of access — use your responses at your own pace within that window. When it ends, you can move to a subscription only if you want to keep going.",
  },
  {
    question: "What happens after 300 responses?",
    answer:
      "You can upgrade to continue collecting and analysing feedback at scale. We'll talk through pricing once you're getting clear value.",
  },
  {
    question: "Do you access our data?",
    answer:
      "No. Your data stays with you. We do not access, store, or process your raw feedback data.",
  },
  {
    question: "Is technical setup required?",
    answer:
      "No. Clearform is easy to start — no engineering required. We'll help you wire it into your existing workflow.",
  },
  {
    question: "Who is this for?",
    answer:
      "AI product teams building user-facing tools — chatbots, copilots, LLM-powered products — where output quality depends on the feedback loop.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-b from-white to-gray-50/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <SectionEyebrow>FAQ</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <SectionHeading className="mb-12">
            Frequently asked questions
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className={`group ${i === 0 ? "" : "border-t border-gray-100"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors duration-150 hover:bg-gray-50/70 focus-visible:bg-gray-50 focus-visible:outline-none"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="text-base font-semibold text-gray-900 sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        isOpen
                          ? "border-[color:var(--color-brand-200)] bg-[color:var(--color-brand-50)] text-[color:var(--color-brand-600)]"
                          : "border-gray-200 bg-white text-gray-500 group-hover:border-gray-300"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pr-12">
                          <p className="text-base leading-relaxed text-gray-600">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
