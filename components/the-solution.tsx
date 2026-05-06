export default function TheSolution() {
  const steps = [
    { label: "User gives feedback" },
    { label: "Clearform improves response in real time" },
    { label: "You get structured, comparable signals" },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          The Solution
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
          Fix Feedback at the Source
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed mb-14 max-w-2xl">
          Clearform improves feedback at the moment it is given. Instead of vague responses, users are guided to provide: clear context, specific issues, and actionable detail.
        </p>

        {/* 3-step flow */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex sm:flex-col items-center gap-4 flex-1">
              <div className="flex items-center gap-4 sm:flex-col sm:text-center">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-base font-semibold text-gray-800 sm:text-center">{step.label}</p>
              </div>
              {i < steps.length - 1 && (
                <svg className="w-5 h-5 text-gray-300 shrink-0 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm font-semibold text-gray-400 uppercase tracking-wider">
          Better input → structured signal → clear decisions
        </p>
      </div>
    </section>
  );
}
