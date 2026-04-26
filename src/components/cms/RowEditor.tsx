"use client";

import React from "react";

export default function RowEditor({ value, onChange, onRemove, textarea = false }: { value: string; onChange: (v: string) => void; onRemove: () => void; textarea?: boolean }) {
  return (
    <div className="flex gap-3 items-start">
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
        />
      )}
      <button
        onClick={onRemove}
        className="rounded-xl border border-red-200 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-50"
      >
        Remove
      </button>
    </div>
  );
}