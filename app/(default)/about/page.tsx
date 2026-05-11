import Link from "next/link";

import { PageBackLink } from "@/components/ui/page-back-link";

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-24 px-6 text-gray-800 leading-relaxed">
      <PageBackLink className="mb-10" />

      {/* Header */}
      <div className="mb-16">
        <span className="inline-block rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-500 mb-6">
          Our Story
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Most forms collect answers.<br />
          <span className="text-gray-400 font-normal">We collect decisions.</span>
        </h1>
        <p className="text-lg text-gray-500">
          Clearform is a response-first form and feedback platform built to help teams collect
          structured, decision-ready input — not just raw submissions.
        </p>
      </div>

      <div className="space-y-14">

        {/* Problem */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">The problem we noticed</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              After speaking with founders, marketers, and hiring managers, we kept hearing the same thing:
            </p>
            <div className="border-l-2 border-gray-200 pl-5 space-y-3 my-6">
              <p className="italic text-gray-500">"We get responses… but they're vague."</p>
              <p className="italic text-gray-500">"We spend more time interpreting feedback than acting on it."</p>
              <p className="italic text-gray-500">"The dashboard is full, but clarity is missing."</p>
            </div>
            <p>
              Forms were doing their job — technically. But decisions were still hard.{" "}
              <strong className="text-gray-800">That didn't make sense to us.</strong>
            </p>
          </div>
        </section>

        {/* Why we built it */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why we built Clearform</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Most tools focus on increasing submission rates, not improving the responses themselves.
              If someone gives a rushed, unclear, or emotional answer, no amount of analytics can fully fix that later.
            </p>
            <p>So we asked a simple question:</p>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-5 my-4">
              <p className="text-gray-900 font-medium text-lg">
                What if forms could help people respond more clearly while they're typing?
              </p>
            </div>
            <p>That's what Clearform is built to do.</p>
          </div>
        </section>

        {/* What we do differently */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">What Clearform does differently</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Clearform is a <strong className="text-gray-800">response-first form platform.</strong> Instead
              of collecting raw input and analyzing it afterward, we focus on improving clarity at the source.
            </p>
            <p className="font-medium text-gray-700">We help teams:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitor responses as they come in</li>
              <li>Measure response quality and completeness</li>
              <li>Act on structured, decision-ready input</li>
            </ul>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-5 mt-4">
              <p className="font-medium text-gray-800">It's not about more feedback.</p>
              <p className="font-medium text-gray-800">It's about better feedback.</p>
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Who it's for</h2>
          <p className="text-gray-600 mb-4">
            Clearform is built for people who rely on feedback to make real decisions:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Startup founders refining product direction</li>
            <li>Marketing teams testing campaigns</li>
            <li>Hiring managers reviewing applicants</li>
            <li>Teams running internal feedback loops</li>
          </ul>
          <p className="mt-4 text-gray-500 italic">
            If messy input slows you down, Clearform is built for you.
          </p>
        </section>

        {/* Where we are now */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Where we are now</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              We&apos;re running a focused pilot program, shaped by conversations with 50+ founders and teams who shared
              their frustrations openly. Clearform is still evolving — thoughtfully, intentionally — with one goal:
            </p>
            <div className="rounded-2xl bg-gray-50 border border-gray-100 px-6 py-5">
              <p className="text-gray-900 font-medium">
                Make decisions clearer by improving input quality at the source.
              </p>
            </div>
            <p className="font-medium text-gray-800">
              If that resonates with you, we'd love to build it together.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/contact"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-full px-6 py-3 transition-colors duration-200"
          >
            Start a pilot →
          </Link>
        </div>

      </div>
    </main>
  );
}
