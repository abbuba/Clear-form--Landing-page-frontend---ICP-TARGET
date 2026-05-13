import Link from "next/link";
import Image from "next/image";
import { posts } from "@/app/(default)/blog/posts";

export const metadata = { title: 'Blog' };

const categories = ["All", "Interviews", "Inspiration", "Updates", "Product", "Miscellaneous"];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-linear-to-b from-slate-100 via-slate-50 to-transparent" aria-hidden="true" />

      <div className="px-6 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
        >
          ← Back to Home
        </Link>
      </div>

      <main className="relative mx-auto min-h-screen w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6">
        <section className="mx-auto max-w-3xl">
          <div className="flex items-center gap-6">
            <Image src="/images/logo.png" alt="Clearform" width={60} height={15} priority />
            <span className="text-6xl mt-2 font-semibold tracking-tight text-slate-900">Clearform blogs</span>
          </div>

          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
            Content for developers, product, and digital experts.
          </p>
          <hr className="mt-3" />

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-md border px-3 py-1 text-xs transition ${index === 0
                  ? "border-slate-800 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-8 grid max-w-3xl gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group border-l border-blue-700 pl-6 pt-5 pb-5"
            >
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[10px] font-semibold text-slate-700">
                  {post.author.charAt(0)}
                </div>
                <span className="mt-1">{post.author}</span>
              </div>

              <Link href={`/blog/${post.slug}`}>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 transition group-hover:text-blue-900">
                  {post.title}
                </h2>
              </Link>

              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{post.subtitle}</p>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-5 inline-flex items-center text-sm font-medium text-[#4880da] transition-transform duration-300 ease-out hover:scale-105 hover:text-[#2369da]"
              >
                Read more <div className="mt-px ml-1">-&gt;</div>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
