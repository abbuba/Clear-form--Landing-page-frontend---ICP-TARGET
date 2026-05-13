"use client";

import { useState } from "react";

export default function ContactClient() {
    const [copiedField, setCopiedField] = useState<"phone" | "email" | null>(null);

    const handleCopy = async (value: string, field: "phone" | "email") => {
        try {
            await navigator.clipboard.writeText(value);
            setCopiedField(field);
            setTimeout(() => setCopiedField(null), 1500);
        } catch {
            setCopiedField(null);
        }
    };

    return (
        <main className="max-w-3xl mx-auto py-24 px-6 text-gray-800 leading-relaxed">

            {/* Header */}
            <div className="mb-14">
                <span className="inline-block rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-medium text-slate-500 mb-6">
                    Clearform Support
                </span>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-3">
                    Contact Us
                </h1>
                <p className="text-gray-500 text-lg">
                    Have a question, feedback, or partnership idea? We're happy to help.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-14">

                {/* Phone */}
                <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Phone</p>
                    <div className="flex items-center justify-between gap-3">
                        <a
                            href="tel:+917386377217"
                            className="text-xl font-semibold text-gray-900 transition group-hover:text-blue-600"
                        >
                            +91 7386377217
                        </a>
                        <button
                            type="button"
                            onClick={() => handleCopy("+91 7386377217", "phone")}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            {copiedField === "phone" ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">Mon – Fri, 9:00 AM – 6:00 PM IST</p>
                </div>

                {/* Email */}
                <div className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Email</p>
                    <div className="flex items-center justify-between gap-3">
                        <a
                            href="mailto:hello@clearform.in"
                            className="text-xl font-semibold text-gray-900 transition group-hover:text-blue-600"
                        >
                            hello@clearform.in
                        </a>
                        <button
                            type="button"
                            onClick={() => handleCopy("hello@clearform.in", "email")}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                        >
                            {copiedField === "email" ? "Copied!" : "Copy"}
                        </button>
                    </div>
                    <p className="mt-3 text-sm text-gray-400">We usually reply within 24 hours</p>
                </div>

            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-10" />

            {/* Additional context */}
            <div className="space-y-6 text-gray-600">
                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">For legal or privacy inquiries</h2>
                    <p>
                        Reach out to{" "}
                        <a href="mailto:hello@clearform.in" className="text-blue-600 hover:underline">
                            hello@clearform.in
                        </a>{" "}
                        with the subject line <span className="font-medium text-gray-700">"Legal / Privacy"</span>.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Partnerships &amp; press</h2>
                    <p>
                        Interested in partnering with Clearform or writing about us? We'd love to hear from you at{" "}
                        <a href="mailto:hello@clearform.in" className="text-blue-600 hover:underline">
                            hello@clearform.in
                        </a>.
                    </p>
                </div>

                <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Interested in the pilot?</h2>
                    <p>
                        Email{" "}
                        <a href="mailto:hello@clearform.in?subject=Clearform%20pilot" className="text-blue-600 hover:underline">
                            hello@clearform.in
                        </a>{" "}
                        or call us above — we&apos;ll walk you through next steps.
                    </p>
                </div>
            </div>

        </main>
    );
}
