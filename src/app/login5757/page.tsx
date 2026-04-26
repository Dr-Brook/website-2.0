"use client";

import React, { useState } from "react";
import EditorField from "@/components/cms/EditorField";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const ADMIN_EMAILS = ["brookeshete@gmail.com"];

function hasAdminAccess(user: { email?: string } | null) {
  const email = user?.email?.toLowerCase?.() || "";
  return ADMIN_EMAILS.includes(email);
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const handleLogin = async () => {
    if (!supabase) {
      setAuthError("Supabase is not configured.");
      return;
    }

    setAuthError("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
      return;
    }

    const user = data?.user ?? null;
    if (!hasAdminAccess(user)) {
      await supabase.auth.signOut();
      setAuthError("You are signed in, but this account does not have admin access.");
      return;
    }

    router.push("/admin5757");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Secure Admin Access
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Sign in</h1>
          <p className="mt-2 text-sm text-slate-600">
            Admin access is restricted to authorized accounts only.
          </p>
        </div>

        {!supabase && (
          <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            Supabase is not configured. Secure admin login is unavailable.
          </div>
        )}

        <div className="space-y-4">
          <EditorField label="Email" value={email} onChange={setEmail} type="email" />
          <EditorField label="Password" value={password} onChange={setPassword} type="password" />

          {authError && (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
              {authError}
            </div>
          )}

          <button
            onClick={handleLogin}
            className="w-full rounded-2xl bg-slate-900 py-3 text-sm font-medium text-white hover:bg-slate-800"
          >
            Sign in to admin
          </button>
        </div>
      </div>
    </div>
  );
}