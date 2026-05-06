import Link from "next/link";

export default function FounderSection() {
  const noiseItems = [
    "Thumbs up and down",
    "Open text responses",
    "Slack threads",
    "Support tickets",
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Founder
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
          Built From a Problem We&apos;ve Seen Up Close
        </h2>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg text-gray-600">Most AI teams are collecting feedback. But they can&apos;t use it.</p>
            <p className="text-base text-gray-500">You&apos;ve seen it:</p>

            <div className="flex flex-wrap gap-2">
              {['"Not helpful"', '"Wrong answer"', '"Does not work"'].map((q) => (
                <span key={q} className="inline-block border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 font-medium bg-gray-50">
                  {q}
                </span>
              ))}
            </div>

            <p className="text-base font-semibold text-gray-900">This is not feedback. It is noise.</p>

            <p className="text-base text-gray-500 leading-relaxed">
              If you are building AI products like copilots, chat interfaces, or LLM tools, your output quality depends on user feedback. But today, that feedback is scattered across:
            </p>

            <ul className="space-y-2 pl-1">
              {noiseItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-base text-gray-500 leading-relaxed">
              It is inconsistent, unstructured, and difficult to act on. So even with a high volume of feedback, teams struggle to answer: <span className="font-semibold text-gray-800">What should we fix?</span>
            </p>

            <p className="text-base font-bold text-gray-900">Clearform solves this.</p>

            <div className="pt-2">
              <Link
                href="https://www.linkedin.com/in/naveenkumar-k/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </Link>
            </div>
          </div>

          {/* Founder avatar */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-bold shrink-0">
              NK
            </div>
            <p className="text-xs text-gray-400 font-medium">Founder, Clearform</p>
          </div>
        </div>
      </div>
    </section>
  );
}
