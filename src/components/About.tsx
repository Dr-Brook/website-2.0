export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            About Me
          </h2>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">👩‍⚕️</div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  Professional headshot coming soon
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/10 rounded-2xl -z-10" />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              A physician and public health professional with a strong analytics foundation.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
              I hold a Doctor of Medicine degree and a Master of Public Health from Johns Hopkins 
              Bloomberg School of Public Health. My experience spans public health research, digital 
              health, data analysis, program evaluation, and community health strategy across U.S. 
              and international settings.
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
              I&apos;ve supported projects focused on mental health, health communication, e-learning, 
              and health systems improvement — using data and research to inform practical decisions. 
              I&apos;m especially interested in work that improves access, strengthens systems, and turns 
              complex information into actionable insights for leaders, partners, and communities.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  🎓
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">MD + MPH</p>
                  <p className="text-sm text-neutral-500">Johns Hopkins</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400">
                  📍
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Silver Spring, MD</p>
                  <p className="text-sm text-neutral-500">DMV Area</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-success-100 dark:bg-success-900/30 flex items-center justify-center">
                  📊
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Data-Driven</p>
                  <p className="text-sm text-neutral-500">Analytics & Evaluation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-warning-100 dark:bg-warning-900/30 flex items-center justify-center">
                  🏥
                </div>
                <div>
                  <p className="font-medium text-neutral-900 dark:text-white">Clinical + Public Health</p>
                  <p className="text-sm text-neutral-500">Dual Perspective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}