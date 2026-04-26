import { createClient } from "@supabase/supabase-js";

function getEnvVar(name: string): string {
  try {
    if (typeof process !== "undefined" && process.env && name in process.env) {
      return process.env[name] || "";
    }
  } catch {
    // ignore
  }

  try {
    if (typeof window !== "undefined") {
      const w = window as unknown as Record<string, unknown>;
      const cfg = w.__SITE_CONFIG__ as Record<string, string> | undefined;
      if (cfg && name in cfg) {
        return cfg[name];
      }
    }
  } catch {
    // ignore
  }

  return "";
}

const supabaseUrl = getEnvVar("NEXT_PUBLIC_SUPABASE_URL");
const supabaseAnonKey = getEnvVar("NEXT_PUBLIC_SUPABASE_ANON_KEY");

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export { getEnvVar };