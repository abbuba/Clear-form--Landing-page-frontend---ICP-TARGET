export default function TheProblem() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          The Problem
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
          You&apos;re Collecting Feedback.<br />
          But Not Signal.
        </h2>

        <p className="text-lg text-gray-500 mb-10">Most feedback looks like this:</p>

        {/* Vague feedback examples */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['"Wrong answer"', '"Not helpful"', '"Does not work"'].map((label) => (
            <span
              key={label}
              className="inline-block bg-white border border-gray-200 rounded-full px-5 py-2.5 text-base text-gray-700 shadow-sm font-medium"
            >
              {label}
            </span>
          ))}
        </div>

        {/* Consequences */}
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            "No clarity on what is broken",
            "No prioritisation",
            "Slow product iteration",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-base text-gray-700 font-medium">{item}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-base font-semibold text-gray-900 border-t border-gray-200 pt-8">
          More feedback does not mean better decisions.
        </p>
      </div>
    </section>
  );
}
