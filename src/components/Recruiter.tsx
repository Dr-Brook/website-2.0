const highlights = [
  "MD and MPH with experience across clinical, academic, and community settings",
  "Skilled in STATA, SQL, Python, Power BI, Excel, and evidence synthesis",
  "Experienced in program monitoring, evaluation, dashboards, and technical reporting",
  "Strong writer who translates findings for technical and non-technical audiences",
  "Mission-driven: equity, access, and system improvement",
];

export default function Recruiter() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">
            What I Bring to a Team
          </h2>
          <p className="mt-2 text-primary-100 text-lg">
            A strong blend of public health expertise, analytical rigor, research communication, and cross-functional collaboration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                ✓
              </span>
              <p className="text-white/90 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold hover:bg-primary-50 transition-colors"
          >
            Let&apos;s Talk
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}