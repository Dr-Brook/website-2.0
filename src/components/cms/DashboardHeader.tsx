"use client";

import React from "react";

export default function DashboardHeader({ title, onAdd, compact = false }: { title: string; onAdd?: () => void; compact?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${compact ? "mb-2" : "mb-4"}`}>
      <h4 className="font-semibold text-slate-800">{title}</h4>
      {onAdd && (
        <button
          onClick={onAdd}
          className="rounded-xl bg-slate-900 text-white px-3 py-2 text-xs font-medium hover:bg-slate-800"
        >
          Add
        </button>
      )}
    </div>
  );
}