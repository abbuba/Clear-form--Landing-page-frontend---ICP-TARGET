export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8 leading-tight">
          Why Clearform Exists
        </h2>

        <div className="space-y-5 max-w-2xl">
          <p className="text-lg text-gray-600 leading-relaxed">
            Most teams do not have a feedback problem. They have a signal problem.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            They collect feedback constantly but it is vague and unusable. Open text responses, thumbs up and down, Slack threads — all of it piles up without creating clarity.
          </p>
          <p className="text-base text-gray-500 leading-relaxed">
            Clearform fixes this at the source. Instead of collecting more feedback, we help users give better feedback.
          </p>
          <p className="text-base font-bold text-gray-900 pt-2">
            Better input leads to clearer decisions.
          </p>
        </div>
      </div>
    </section>
  );
}
