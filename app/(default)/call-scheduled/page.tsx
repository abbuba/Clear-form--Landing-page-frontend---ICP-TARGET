import Link from "next/link";

export const metadata = { title: 'Call Scheduled — Clearform' };

export default function CallScheduledPage() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="max-w-lg w-full text-center">

        {/* Success icon */}
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Your call is scheduled!
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          You&apos;ll receive a calendar invite shortly. We&apos;re looking forward to speaking with you.
        </p>

        {/* Founder card */}
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-10 text-left flex items-start gap-5">
          <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-lg shrink-0">
            NK
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">You&apos;re booked with the founder</p>
            <p className="text-sm text-gray-500 mt-1">
              NK · Founder, Clearform
            </p>
            <p className="text-sm text-gray-400 mt-2">
              30-minute call · We&apos;ll walk through your feedback challenges and how Clearform can help.
            </p>
          </div>
        </div>

        {/* What to expect */}
        <div className="text-left mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">What to expect</p>
          <ul className="space-y-3">
            {[
              "A calendar invite has been sent to your email",
              "We'll review your current feedback setup",
              "You'll see how Clearform structures signal from noise",
              "No sales pitch — just a conversation about your product",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Clearform
        </Link>
      </div>
    </main>
  );
}
