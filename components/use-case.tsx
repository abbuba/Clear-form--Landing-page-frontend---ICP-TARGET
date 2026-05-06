export default function UseCase() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Use Case
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight">
          What This Looks Like in Practice
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Before card */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Before</p>
            <div className="bg-gray-50 rounded-xl border border-gray-200 px-5 py-4 mb-5">
              <p className="text-xl font-bold text-gray-800">&ldquo;Wrong answer&rdquo;</p>
            </div>
            <p className="text-sm text-gray-500 mb-1">Vague. Unactionable. Unhelpful.</p>
            <p className="text-sm font-semibold text-gray-700">You don&apos;t know what to fix.</p>
          </div>

          {/* After card */}
          <div className="bg-white rounded-2xl border border-red-100 shadow-sm p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-red-500 mb-4">
              After: with Clearform
            </p>
            <div className="space-y-4 mb-5">
              {[
                { label: "Issue type", value: "Incorrect answer" },
                { label: "Context", value: "Missing verification step" },
                { label: "Detail", value: "Specific explanation of the error" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-1 h-full min-h-[36px] bg-red-500 rounded-full shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-gray-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm font-bold text-gray-900">Now you know exactly what to fix.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
