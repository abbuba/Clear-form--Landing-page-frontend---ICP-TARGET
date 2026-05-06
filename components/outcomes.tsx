import Link from "next/link";

const items = [
  "Identify the top issues affecting your AI outputs",
  "Understand why users are dissatisfied",
  "Compare feedback across users and scenarios",
  "Prioritise what to fix",
];

export default function Outcomes() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 text-center">
          Outcomes
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight text-center">
          What You Get From the Pilot
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {items.map((item) => (
            <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3.5 h-3.5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-base font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl font-extrabold text-gray-900 mb-8">
            Not more feedback.{" "}
            <span className="text-red-600">Better decisions.</span>
          </p>
          <Link
            href="/early-access"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors duration-150"
          >
            Start Pilot for $50
          </Link>
        </div>
      </div>
    </section>
  );
}
