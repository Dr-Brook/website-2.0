"use client";

import React from "react";

export default function CardEditor({ title, children, onRemove, noRemove = false }: { title: string; children: React.ReactNode; onRemove?: () => void; noRemove?: boolean }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-5 bg-slate-50">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h4 className="font-semibold text-slate-900">{title}</h4>
        {!noRemove && onRemove && (
          <button
            onClick={onRemove}
            className="rounded-xl border border-red-200 px-3 py-2 text-xs font-medium text-red-700 hover:bg-red-50"
          >
            Remove card
          </button>
        )}
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}