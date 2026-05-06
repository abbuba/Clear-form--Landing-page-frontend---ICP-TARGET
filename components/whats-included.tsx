import Link from "next/link";

const columns = [
  {
    title: "Product",
    icon: (
      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: ["Up to 300 responses", "Unlimited forms", "Up to 5 users", "10GB storage"],
  },
  {
    title: "AI Capabilities",
    icon: (
      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: ["Response quality scoring", "AI suggestions and improvements", "Dynamic follow up questions"],
  },
  {
    title: "Support",
    icon: (
      <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    items: ["Guided setup", "Feedback structure design", "Help interpreting signals"],
  },
];

export default function WhatsIncluded() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4 text-center">
          What&apos;s Included
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight text-center">
          Everything You Need to Run a Feedback Cycle
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {columns.map((col) => (
            <div key={col.title} className="bg-red-50 rounded-2xl p-7 border border-red-50">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center mb-5 shadow-sm">
                {col.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/early-access"
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold text-base px-8 py-3.5 rounded-lg transition-colors duration-150"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
