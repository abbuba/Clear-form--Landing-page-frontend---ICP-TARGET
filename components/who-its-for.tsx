export default function WhoItsFor() {
  const tags = [
    "AI chatbots",
    "AI copilots",
    "AI SaaS products",
    "Customer facing AI tools",
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          Who It&apos;s For
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-10 leading-tight">
          Built for Applied AI Product Teams
        </h2>

        <div className="flex flex-wrap gap-3 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block border border-gray-200 rounded-full px-5 py-2.5 text-base text-gray-700 font-medium bg-gray-50"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="text-base font-semibold text-gray-900">
          If user feedback impacts your product, this is for you.
        </p>
      </div>
    </section>
  );
}
