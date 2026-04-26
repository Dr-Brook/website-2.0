"use client";

import React from "react";

export default function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}