'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: "What's included in the pilot?",
    answer: "Product access, 300 responses, AI features, and guided support.",
  },
  {
    question: "Is there a time limit?",
    answer: "No, use it at your own pace. The pilot has no expiration date.",
  },
  {
    question: "What happens after 300 responses?",
    answer: "You can upgrade to continue collecting and analysing feedback.",
  },
  {
    question: "Do you access our data?",
    answer: "No. Your data stays with you. We do not access, store, or process your feedback data.",
  },
  {
    question: "Is technical setup required?",
    answer: "No. Clearform is easy to start. No engineering required.",
  },
  {
    question: "Who is this for?",
    answer: "AI product teams building user facing tools: chatbots, copilots, LLM-powered products.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight">
          Frequently Asked Questions
        </h2>

        <div className="border-t border-gray-200">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="text-base font-semibold text-gray-900">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: openIndex === i ? "200px" : "0" }}
              >
                <p className="pb-5 text-base text-gray-500 leading-relaxed pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
