'use client';

import Link from "next/link";
import CalendlyButton from "@/components/calendly-button";

export default function HeroHome() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left: Text content */}
          <div className="flex-1 max-w-xl">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block border border-gray-300 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-600">
                AI Product Teams
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6">
              Turn User Feedback Into{" "}
              <span className="text-red-600">Clear Product Decisions</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Most AI teams collect feedback. Few can actually use it. Clearform helps you improve how users respond and shows you exactly what to fix.
            </p>

            {/* CTA Row 1 */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Link
                href="/early-access"
                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-6 py-3 rounded-lg transition-colors duration-150"
              >
                Start Pilot for $50
              </Link>
              <Link
                href="#process"
                className="inline-flex items-center gap-2 border border-gray-900 text-gray-900 hover:bg-gray-50 font-semibold text-base px-6 py-3 rounded-lg transition-colors duration-150"
              >
                See How It Works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* CTA Row 2 */}
            <div className="flex flex-wrap items-center gap-4">
              <CalendlyButton className="inline-flex items-center border border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors duration-150 bg-transparent cursor-pointer">
                Book a demo
              </CalendlyButton>
              <Link
                href="mailto:support@clearform.com"
                className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors duration-150"
              >
                Talk to us
              </Link>
            </div>

            <p className="mt-5 text-xs text-gray-400">
              No time limits. No complex setup. Start collecting better feedback immediately.
            </p>
          </div>

          {/* Right: Before/After Widget */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              <div className="grid grid-cols-2">

                {/* Before Panel */}
                <div className="bg-gray-50 p-6 border-r border-gray-200">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Before</p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg border border-gray-200 px-3 py-2 shadow-sm">
                      <p className="text-xs text-gray-800 font-medium">Not helpful</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Feedback</p>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 px-3 py-2 shadow-sm ml-4">
                      <p className="text-xs text-gray-800 font-medium">Wrong answer</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Feedback</p>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg border border-gray-200 px-3 py-2 shadow-sm">
                      <p className="text-xs text-gray-800 font-medium">Does not work</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">Feedback</p>
                    </div>
                  </div>
                </div>

                {/* After Panel */}
                <div className="bg-white p-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">After</p>
                  <p className="text-xs font-bold text-gray-700 mb-4">AI Feedback Quality</p>
                  <div className="space-y-3.5">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">Issue type</p>
                        <p className="text-xs font-semibold text-gray-800">Incorrect answer</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">Context</p>
                        <p className="text-xs font-semibold text-gray-800">Missing verification step</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400">Detail</p>
                        <p className="text-xs font-semibold text-gray-800">Specific explanation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 pt-1">
                      <span className="flex items-center gap-1 text-[10px] text-green-600 font-medium">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        High quality
                      </span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="text-[10px] text-gray-400 font-medium">Actionable</span>
                      <span className="text-[10px] text-gray-300">•</span>
                      <span className="text-[10px] text-gray-400 font-medium">Structured</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                <p className="text-xs text-gray-400">From noise to signal</p>
                <p className="text-sm font-bold text-gray-800">Every response, actionable</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
