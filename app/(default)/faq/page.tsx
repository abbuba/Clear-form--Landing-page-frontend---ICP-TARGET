import FAQ from "@/components/faq";

export const metadata = { title: 'Help & FAQ' };

export default function FAQPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 sm:px-6 pt-24 pb-16">
      <section>
        <FAQ />
      </section>

      <section className="mt-8 text-center">
        <p className="text-sm text-slate-600">Need more help? Email us at</p>
        <a
          href="mailto:hello@clearform.in"
          className="mt-2 inline-block text-base font-medium text-slate-900 transition hover:text-blue-600"
        >
          hello@clearform.in
        </a>
      </section>
    </main>
  );
}