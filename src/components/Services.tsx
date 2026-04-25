const services = [
  {
    icon: "📊",
    title: "Data Analysis",
    description:
      "Cleaning, analyzing, and visualizing health data to generate actionable insights using STATA, SQL, Python, and Power BI.",
  },
  {
    icon: "📋",
    title: "Program Evaluation",
    description:
      "Designing and evaluating public health programs using data-driven methods — from logic models to outcome measurement.",
  },
  {
    icon: "🔬",
    title: "Research & Reporting",
    description:
      "Literature reviews, data synthesis, and technical report writing that translates complex findings into clear, actionable recommendations.",
  },
  {
    icon: "💻",
    title: "Digital Health",
    description:
      "Building dashboards, managing datasets, and supporting digital learning systems that improve health outcomes.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            What I Do
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            I support organizations and teams that need strong analytical thinking, evidence synthesis, data storytelling, and public health insight.
          </p>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md transition-all border border-neutral-100 dark:border-neutral-700 hover:border-primary-200 dark:hover:border-primary-800"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}