"use client";

import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    title: "Analytics",
    skills: [
      { name: "STATA", level: 90 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Power BI", level: 80 },
    ],
  },
  {
    title: "Research",
    skills: [
      { name: "Literature Review", level: 90 },
      { name: "Survey Design", level: 80 },
      { name: "Regression Analysis", level: 85 },
    ],
  },
  {
    title: "Public Health",
    skills: [
      { name: "Epidemiology", level: 85 },
      { name: "Mental Health", level: 80 },
      { name: "Program Evaluation", level: 90 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Excel", level: 95 },
      { name: "Google Sheets", level: 90 },
      { name: "Canva", level: 70 },
      { name: "Moodle", level: 75 },
    ],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Skills & Tools
          </h2>
          <div className="mt-2 w-16 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-2">
                      <div
                        className="skill-bar bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: visible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}