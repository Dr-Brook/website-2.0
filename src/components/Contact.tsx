"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-2 text-neutral-400">
            Open to opportunities in public health research, data analytics, program evaluation, consulting, and health systems work.
          </p>
          <div className="mt-2 w-16 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="p-8 rounded-xl bg-green-900/30 border border-green-500/30 text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-neutral-300">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="How can I help?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-neutral-800 border border-neutral-700">
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📧</span>
                  <a href="mailto:info@itsbrook.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                    info@itsbrook.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">💼</span>
                  <a
                    href="https://linkedin.com/in/brook-shimelis-md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    linkedin.com/in/brook-shimelis-md
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl">📍</span>
                  <span className="text-neutral-300">Silver Spring, Maryland</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-600/20 border border-primary-500/20">
              <h3 className="text-lg font-semibold mb-2">Looking for:</h3>
              <ul className="space-y-2 text-neutral-300 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">→</span> Public Health Data Analyst roles
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">→</span> Health Informatics positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">→</span> Program Evaluation opportunities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">→</span> Research Analyst positions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary-400">→</span> Consulting collaborations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}