"use client";

import React, { useEffect, useState } from "react";
import { defaultContent, loadLocalContent, CONTENT_ROW_ID } from "@/lib/contentStore";
import { supabase } from "@/lib/supabase";
import SkillCard from "@/components/cms/SkillCard";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentData = Record<string, any>;

export default function HomePage() {
  const [content, setContent] = useState<ContentData>(defaultContent);

  useEffect(() => {
    async function load() {
      const localContent = loadLocalContent();
      setContent(localContent);

      if (!supabase) return;

      const { data } = await supabase
        .from("site_content")
        .select("content")
        .eq("id", CONTENT_ROW_ID)
        .maybeSingle();

      if (data?.content) {
        setContent(data.content);
      }
    }

    load();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h1 className="text-xl font-semibold">{content.profile.name}</h1>
            <p className="text-sm text-slate-600">{content.profile.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-700">
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#experience" className="hover:text-slate-950">Experience</a>
            <a href="#projects" className="hover:text-slate-950">Projects</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-white">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 mb-5">
                {content.profile.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                {content.profile.heroTitle}
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-8 max-w-2xl">
                {content.profile.heroDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-800">
                  Get in touch
                </a>
                <a href="#experience" className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium hover:bg-slate-100">
                  View experience
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-3xl bg-slate-900 text-white p-6 shadow-sm">
                <div className="text-3xl font-semibold">MD + MPH</div>
                <p className="mt-2 text-sm text-slate-300">
                  Clinical and population health perspective grounded in research and applied analytics.
                </p>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                <div className="text-3xl font-semibold">Data + Strategy</div>
                <p className="mt-2 text-sm text-slate-600">
                  Experience translating complex datasets into reports, dashboards, and decisions.
                </p>
              </div>
              <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm sm:col-span-2">
                <div className="text-sm font-medium text-slate-500">Focus Areas</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {content.focusAreas.map((item: string) => (
                    <span key={item} className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr,1.2fr] gap-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">About</p>
              <h3 className="mt-3 text-3xl font-semibold">{content.profile.aboutTitle}</h3>
            </div>
            <div className="space-y-5 text-slate-700 leading-8">
              {content.profile.aboutParagraphs.map((paragraph: string, i: number) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">What I do</p>
              <h3 className="mt-3 text-3xl font-semibold">Services and areas of contribution</h3>
              <p className="mt-4 text-slate-600 leading-8">
                I support organizations and teams that need strong analytical thinking, evidence synthesis, data storytelling, and public health insight.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {content.services.map((service: { title: string; description: string }) => (
                <div key={service.title} className="rounded-3xl border border-slate-200 p-6 bg-slate-50 shadow-sm">
                  <h4 className="text-lg font-semibold">{service.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Experience</p>
            <h3 className="mt-3 text-3xl font-semibold">Experience highlights</h3>
            <p className="mt-4 text-slate-600 leading-8">
              A cross-functional background in research, analytics, community health, and digital systems.
            </p>
          </div>
          <div className="mt-10 space-y-5">
            {content.highlights.map((item: { role: string; org: string; period: string; bullets: string[] }) => (
              <div key={item.role + item.org} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div>
                    <h4 className="text-xl font-semibold">{item.role}</h4>
                    <p className="text-slate-600 mt-1">{item.org}</p>
                  </div>
                  <span className="text-sm text-slate-500">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-700 leading-7 list-disc pl-5">
                  {item.bullets.map((bullet: string) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Data Analysis + Projects */}
        <section id="projects" className="bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 pt-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Data Analysis</p>
              <h3 className="mt-3 text-3xl font-semibold">Analytical capabilities</h3>
              <p className="mt-4 text-slate-300 leading-8">
                I apply statistical methods, data cleaning techniques, and visualization tools to transform raw health data into meaningful insights that support decision-making.
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-5">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <h4 className="text-lg font-semibold">Statistical Analysis</h4>
                <p className="mt-3 text-sm text-slate-300">Regression analysis, hypothesis testing, descriptive and inferential statistics.</p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <h4 className="text-lg font-semibold">Data Management</h4>
                <p className="mt-3 text-sm text-slate-300">Data cleaning, transformation, merging datasets, and quality assurance.</p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <h4 className="text-lg font-semibold">Visualization</h4>
                <p className="mt-3 text-sm text-slate-300">Dashboards and reports using Power BI, Excel, and Python visualizations.</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Selected work</p>
              <h3 className="mt-3 text-3xl font-semibold">Projects and applied work</h3>
              <p className="mt-4 text-slate-300 leading-8">
                Examples of how data, evaluation, and research can support stronger public health programs and systems.
              </p>
            </div>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {content.projects.map((project: { title: string; description: string }) => (
                <div key={project.title} className="rounded-3xl bg-white/5 border border-white/10 p-6">
                  <h4 className="text-lg font-semibold">{project.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Skills</p>
            <h3 className="mt-3 text-3xl font-semibold">Core strengths</h3>
          </div>
          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            <SkillCard title="Analytics" items={content.skills.analytics} />
            <SkillCard title="Research" items={content.skills.research} />
            <SkillCard title="Public Health" items={content.skills.health} />
            <SkillCard title="Tools" items={content.skills.tools} />
          </div>
        </section>

        {/* Recruiter Snapshot */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Recruiter snapshot</p>
                <h3 className="mt-3 text-3xl font-semibold">What I bring to a team</h3>
                <p className="mt-4 text-slate-600 leading-8">
                  A strong blend of public health expertise, analytical rigor, research communication, and cross-functional collaboration. I am especially well suited for roles in public health analytics, health research, health policy, program evaluation, consulting, and digital health.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-6 shadow-sm">
                <ul className="space-y-4 text-sm text-slate-700 leading-7">
                  <li>• MD and MPH with experience across clinical, academic, and community settings</li>
                  <li>• Skilled in STATA, SQL, Python, Power BI, Excel, and evidence synthesis</li>
                  <li>• Experienced in program monitoring, evaluation, dashboards, and technical reporting</li>
                  <li>• Strong writer with the ability to translate findings for technical and non-technical audiences</li>
                  <li>• Mission-driven and interested in equity, access, and system improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-[2rem] bg-slate-900 text-white p-8 md:p-10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Contact</p>
                <h3 className="mt-3 text-3xl font-semibold">Let&apos;s connect</h3>
                <p className="mt-4 text-slate-300 leading-8">
                  I am open to opportunities in public health research, data analytics, program evaluation, consulting, and health systems work.
                </p>
              </div>
              <div className="space-y-4 text-sm md:text-base">
                <p><span className="text-slate-400">Email:</span> {content.profile.email}</p>
                <p><span className="text-slate-400">LinkedIn:</span> {content.profile.linkedin}</p>
                <p><span className="text-slate-400">Base:</span> {content.profile.location}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {content.profile.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-slate-700">About</a>
            <a href="#experience" className="hover:text-slate-700">Experience</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}