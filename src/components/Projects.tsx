const projects = [
  {
    title: "Mental Health Program Evaluation",
    description:
      "Supported mixed-methods evaluation of mental health and psychosocial support interventions, including regression analysis, outcome measurement, and reporting.",
    tags: ["STATA", "Regression Analysis", "Program Evaluation"],
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Training Analytics Dashboard",
    description:
      "Developed Power BI dashboards to track healthcare training participation, engagement, and performance metrics across programs.",
    tags: ["Power BI", "SQL", "Data Visualization"],
    color: "from-purple-500 to-pink-400",
  },
  {
    title: "Community Health Data Systems",
    description:
      "Designed data workflows, cleaned datasets, and created reports to support program monitoring and decision-making for community health initiatives.",
    tags: ["Python", "Data Management", "Reporting"],
    color: "from-emerald-500 to-teal-400",
  },
  {
    title: "Exploratory Data Analysis Projects",
    description:
      "Performed exploratory data analysis using Python, SQL, and STATA to identify trends, clean datasets, and generate insights from structured health data.",
    tags: ["Python", "SQL", "STATA", "EDA"],
    color: "from-amber-500 to-orange-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Selected Work
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">
            Examples of how data, evaluation, and research support stronger public health programs.
          </p>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-neutral-800 shadow-sm hover:shadow-lg transition-all border border-neutral-100 dark:border-neutral-700"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}