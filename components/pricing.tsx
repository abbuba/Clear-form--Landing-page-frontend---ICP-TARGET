import Link from "next/link";

const features = [
  "300 responses",
  "Unlimited forms",
  "5 user seats",
  "Full AI feedback system",
  "Guided onboarding",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Pricing
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight">
          Simple, One Time Pilot
        </h2>

        <div className="max-w-sm">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            {/* Price */}
            <div className="mb-2">
              <span className="text-5xl font-extrabold text-gray-900">$50</span>
              <span className="ml-2 text-base text-gray-500 font-medium">No time limits</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">or ₹4,500 &nbsp;·&nbsp; Use at your own pace</p>

            <Link
              href="/early-access"
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-6 py-3.5 rounded-lg transition-colors duration-150 mb-8"
            >
              Start Pilot for $50
            </Link>

            {/* Features */}
            <ul className="space-y-3.5">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                  <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
