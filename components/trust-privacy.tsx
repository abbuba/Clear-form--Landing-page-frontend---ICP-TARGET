export default function TrustPrivacy() {
  const cards = [
    {
      title: "No long term commitment",
      desc: "Pay once, run your pilot at your own pace. No subscriptions required.",
    },
    {
      title: "No data access required",
      desc: "We never access your data. Your data stays in your environment.",
    },
    {
      title: "Works with your existing workflows",
      desc: "Easy to integrate. No technical setup needed to start collecting better feedback.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Trust &amp; Privacy
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-12 leading-tight">
          Built for Real Product Teams
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-400 font-medium">
          Your data stays in your environment
        </p>
      </div>
    </section>
  );
}
