const experiences = [
  {
    title: "Program Coordinator",
    org: "RnD Associates / Zeni's Gift",
    period: "Aug 2025 – Present",
    bullets: [
      "Lead community engagement and health screening initiatives promoting public health awareness and access",
      "Conduct data collection, management, analysis, and reporting to support program improvement",
      "Develop culturally appropriate health education materials, reports, and manuscripts for publication",
    ],
  },
  {
    title: "Healthcare Data Analyst",
    org: "Johns Hopkins Bloomberg School of Public Health",
    period: "Dec 2024 – May 2025",
    bullets: [
      "Conducted quantitative and qualitative analyses on mental health and psychosocial support services in humanitarian settings",
      "Synthesized findings into reports and presentations for internal teams and partner organizations",
      "Supported evidence generation for program evaluation and data-driven decision-making",
    ],
  },
  {
    title: "Research Assistant",
    org: "Johns Hopkins Bloomberg School of Public Health",
    period: "Sep 2024 – May 2025",
    bullets: [
      "Managed and updated the Stop Cholera website to improve accessibility and stakeholder engagement",
      "Supported dissemination of global health resources for diverse stakeholders",
      "Coordinated with developers on backend maintenance and upgrades",
    ],
  },
  {
    title: "Junior Digital Learning Specialist",
    org: "St. Paul Millennium Medical College",
    period: "Nov 2022 – May 2024",
    bullets: [
      "Built Power BI dashboards and managed datasets tracking CME reach, attendance, and outcomes",
      "Applied SQL queries and Excel analysis for performance reporting and metric standardization",
      "Coordinated large virtual training sessions for healthcare professionals",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Experience
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            A cross-functional background in research, analytics, community health, and digital systems.
          </p>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-700" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.title + exp.org}
                className={`relative flex flex-col md:flex-row items-start ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full border-2 border-white dark:border-neutral-900 z-10 mt-6" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <div className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mt-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-accent-600 dark:text-accent-400 mb-3">
                      {exp.org}
                    </p>
                    <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="text-sm text-neutral-600 dark:text-neutral-300">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}