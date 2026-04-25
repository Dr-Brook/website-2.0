import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Clinical Medicine to Public Health Data: My Journey | Brook Eshete",
  description:
    "How I went from practicing medicine to finding my calling in data, evaluation, and systems thinking — and why the transition made me better at both.",
  openGraph: {
    title: "From Clinical Medicine to Public Health Data: My Journey",
    description:
      "A personal story about transitioning from clinical medicine to public health data analytics.",
    url: "https://itsbrook.com/blog/clinical-medicine-to-public-health-data",
    type: "article",
  },
};

export default function BlogPost3() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <nav className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-lg font-bold text-primary-600 dark:text-primary-400">
            Brook<span className="text-accent-500">.</span>
          </a>
          <a href="/blog" className="text-sm text-neutral-500 hover:text-primary-600 dark:hover:text-primary-400">
            ← All Posts
          </a>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <header className="mb-8">
          <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            Personal
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white mt-4 mb-4">
            From Clinical Medicine to Public Health Data: My Journey
          </h1>
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            April 25, 2026 · 4 min read
          </div>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="lead text-lg text-neutral-600 dark:text-neutral-300">
            People often ask me why a physician would transition into data analytics. The answer isn&apos;t simple, but it comes down to this: I wanted to help more people than I could see in a single exam room.
          </p>

          <h2>The Clinical Beginning</h2>
          <p>
            I trained as a physician. I learned to diagnose, treat, and care for individual patients. Clinical medicine teaches you to think systematically — to gather information, form hypotheses, test them, and adjust your approach based on results. It&apos;s analytical work, even if most people don&apos;t think of it that way.
          </p>
          <p>
            But clinical work has limits. You see one patient at a time. You address one problem at a time. And too often, you see the same problems recurring — not because of individual failure, but because of systemic issues that no amount of clinical skill can fix alone.
          </p>

          <h2>The Pivot</h2>
          <p>
            I went to Johns Hopkins Bloomberg School of Public Health for my MPH because I wanted to understand the systems that shape health outcomes. Not just what happens in the clinic, but what happens before people get there — the social determinants, the data infrastructure, the policy decisions.
          </p>
          <p>
            What I found was that public health organizations were drowning in data but starving for insight. They had datasets. They had dashboards. What they lacked were people who could connect the clinical picture to the population-level analysis — people who understood both the medicine and the methodology.
          </p>

          <h2>Finding the Overlap</h2>
          <p>
            My clinical background turned out to be an asset, not a detour. When you&apos;ve seen how diseases present in real patients, you ask better questions of your data. You know that a &quot;significant&quot; p-value doesn&apos;t always mean &quot;important,&quot; and that a non-significant result doesn&apos;t mean &quot;nothing happened.&quot;
          </p>
          <p>
            At Hopkins, I analyzed mental health data from humanitarian settings. I built Power BI dashboards for training programs. I evaluated whether community health initiatives were actually reaching the people they intended to serve. Each project reinforced the same lesson: data is only as valuable as the decisions it informs.
          </p>

          <h2>What I Wish I&apos;d Known Earlier</h2>
          <p>
            If you&apos;re considering a similar transition — from clinical work to data, from direct service to analysis — here are three things I wish someone had told me:
          </p>
          <ol>
            <li>
              <strong>Your clinical knowledge is not wasted.</strong> It gives you context that pure data analysts don&apos;t have. You understand what the numbers mean in practice, not just in theory.
            </li>
            <li>
              <strong>The technical skills are learnable.</strong> STATA, Python, SQL, Power BI — these are tools, not identities. You can pick them up. What&apos;s harder to learn is the judgment about when and how to use them.
            </li>
            <li>
              <strong>Communication is the underrated skill.</strong> The best analysis in the world is useless if you can&apos;t explain it to the people who need to act on it. Learn to write clearly, present persuasively, and build dashboards that people actually use.
            </li>
          </ol>

          <h2>Where I Am Now</h2>
          <p>
            Today, I work at the intersection of clinical insight and population-level data. I clean messy datasets, run analyses, build dashboards, write reports, and help organizations make better decisions with their health data. I still think like a clinician — asking about individual patients — but I work at a scale that reaches thousands.
          </p>
          <p>
            If you&apos;re navigating a similar path, or if your organization needs someone who can bridge the gap between clinical understanding and data-driven strategy, I&apos;d love to connect. The best work happens at the intersection.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
          <a href="/blog" className="text-primary-600 dark:text-primary-400 hover:underline">
            ← Back to all posts
          </a>
        </div>
      </article>
    </div>
  );
}