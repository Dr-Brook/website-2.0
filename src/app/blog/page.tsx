import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Brook Eshete | Public Health Data & Insights",
  description:
    "Thoughts on public health data analysis, program evaluation, health informatics, and career transitions from MD to public health.",
};

const posts = [
  {
    slug: "public-health-data-analyst-insights",
    title: "How Public Health Data Analysts Turn Raw Data Into Life-Saving Insights",
    excerpt:
      "From outbreak surveillance to program evaluation, public health data analysts bridge the gap between numbers and decisions that affect millions.",
    date: "April 25, 2026",
    readTime: "6 min read",
    category: "Data Analysis",
  },
  {
    slug: "health-informatics-specialist-skills",
    title: "5 Skills Every Health Informatics Specialist Needs in 2026",
    excerpt:
      "The field is evolving fast. Here are the technical, analytical, and interpersonal skills that separate good informaticians from great ones.",
    date: "April 25, 2026",
    readTime: "5 min read",
    category: "Career",
  },
  {
    slug: "clinical-medicine-to-public-health-data",
    title: "From Clinical Medicine to Public Health Data: My Journey",
    excerpt:
      "How I went from practicing medicine to finding my calling in data, evaluation, and systems thinking — and why the transition made me better at both.",
    date: "April 25, 2026",
    readTime: "4 min read",
    category: "Personal",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-primary-600 dark:text-primary-400">
            Brook<span className="text-accent-500">.</span>
          </Link>
          <Link href="/" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400">
            ← Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
          Insights & Writing
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-12">
          Thoughts on public health data, evaluation methods, and career transitions.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                      {post.category}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {post.date} · {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}