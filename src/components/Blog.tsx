const blogPosts = [
  {
    slug: "public-health-data-analyst-insights",
    title: "How Public Health Data Analysts Turn Raw Data Into Life-Saving Insights",
    excerpt:
      "From outbreak surveillance to program evaluation, public health data analysts bridge the gap between numbers and decisions that affect millions.",
    date: "Apr 2026",
    readTime: "6 min",
    category: "Data Analysis",
  },
  {
    slug: "health-informatics-specialist-skills",
    title: "5 Skills Every Health Informatics Specialist Needs in 2026",
    excerpt:
      "The field is evolving fast. Here are the technical, analytical, and interpersonal skills that separate good informaticians from great ones.",
    date: "Apr 2026",
    readTime: "5 min",
    category: "Career",
  },
  {
    slug: "clinical-medicine-to-public-health-data",
    title: "From Clinical Medicine to Public Health Data: My Journey",
    excerpt:
      "How I went from practicing medicine to finding my calling in data, evaluation, and systems thinking — and why the transition made me better at both.",
    date: "Apr 2026",
    readTime: "4 min",
    category: "Personal",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Insights & Writing
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Thoughts on public health data, evaluation methods, and career transitions.
          </p>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col rounded-xl overflow-hidden bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-800 transition-all hover:shadow-md"
            >
              {/* Gradient header */}
              <div className="h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 dark:from-primary-500/10 dark:to-accent-500/10 flex items-center justify-center">
                <span className="text-3xl">
                  {post.category === "Data Analysis" ? "📊" : post.category === "Career" ? "🎯" : "👩‍⚕️"}
                </span>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                    {post.category}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400">
                    {post.date} · {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <span className="text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/30 font-medium transition-all"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}