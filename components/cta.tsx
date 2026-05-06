'use client';

import Link from "next/link";
import CalendlyButton from "@/components/calendly-button";

export default function Cta() {
  return (
    <section className="bg-gray-900 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
          Start Turning Feedback Into Decisions
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          Stop guessing what is wrong. Start seeing it clearly.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <CalendlyButton className="inline-flex items-center border border-gray-600 text-gray-200 hover:border-gray-400 hover:text-white font-semibold text-base px-6 py-3 rounded-lg transition-colors duration-150 bg-transparent cursor-pointer">
            Book a demo
          </CalendlyButton>
          <Link
            href="mailto:support@clearform.com"
            className="text-base font-medium text-gray-400 hover:text-white transition-colors duration-150"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}
