export default function ProcessSteps() {
  const steps = [
    { num: "01", title: "Define", desc: "Define your use case and feedback points" },
    { num: "02", title: "Collect", desc: "Collect feedback with real time response improvement" },
    { num: "03", title: "Structure", desc: "Structure responses into consistent signals" },
    { num: "04", title: "Identify", desc: "Identify patterns and recurring issues" },
    { num: "05", title: "Decide", desc: "Decide what to fix and improve" },
  ];

  return (
    <section id="process" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 text-center">
          Process
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-16 leading-tight text-center">
          How the Pilot Works
        </h2>

        {/* Horizontal step circles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-4">
              {/* Circle */}
              <div className="w-16 h-16 rounded-full border-2 border-red-100 bg-white flex items-center justify-center shadow-sm">
                <span className="text-lg font-bold text-red-600">{step.num}</span>
              </div>
              {/* Label */}
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">{step.title}</p>
                <p className="text-xs text-gray-500 leading-snug">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
