"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  defaultContent,
  loadLocalContent,
  saveLocalContent,
  CONTENT_ROW_ID,
} from "@/lib/contentStore";
import { supabase } from "@/lib/supabase";

import SkillCard from "@/components/cms/SkillCard";
import DashboardHeader from "@/components/cms/DashboardHeader";
import EditorField from "@/components/cms/EditorField";
import EditorArea from "@/components/cms/EditorArea";
import RowEditor from "@/components/cms/RowEditor";
import CardEditor from "@/components/cms/CardEditor";

const ADMIN_EMAILS = ["brookeshete@gmail.com"];

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function hasAdminAccess(user: { email?: string } | null) {
  const email = user?.email?.toLowerCase?.() || "";
  return ADMIN_EMAILS.includes(email);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ContentData = Record<string, any>;

export default function AdminDashboard() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [content, setContent] = useState<ContentData>(defaultContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [sessionUser, setSessionUser] = useState<{ email?: string } | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthorizedAdmin, setIsAuthorizedAdmin] = useState(false);
  const [authError, setAuthError] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = useMemo(
    () => [
      { key: "profile", label: "Site Profile" },
      { key: "focusAreas", label: "Focus Areas" },
      { key: "services", label: "Services" },
      { key: "experience", label: "Experience" },
      { key: "projects", label: "Projects" },
      { key: "skills", label: "Skills" },
      { key: "settings", label: "Admin Settings" },
    ],
    []
  );

  useEffect(() => {
    async function initialize() {
      if (!supabase) {
        setInfoMessage("Supabase is not configured. Running with local content only.");
        setContent(loadLocalContent());
        setLoading(false);
        return;
      }

      const {
        data: { session },
      } = await supabase.auth.getSession();

      const user = session?.user ?? null;
      setSessionUser(user);
      setIsAuthenticated(!!user);
      setIsAuthorizedAdmin(hasAdminAccess(user));

      if (!user || !hasAdminAccess(user)) {
        router.push("/login5757");
        return;
      }

      const localContent = loadLocalContent();
      await loadContentFromCloud(localContent);
      setLoading(false);
    }

    initialize();

    if (!supabase) return;

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const user = session?.user ?? null;
      setSessionUser(user);
      setIsAuthenticated(!!user);
      setIsAuthorizedAdmin(hasAdminAccess(user));
    });

    return () => subscription.unsubscribe();
  }, [router]);

  async function loadContentFromCloud(fallbackContent: ContentData) {
    if (!supabase) return;

    const { data, error } = await supabase
      .from("site_content")
      .select("content")
      .eq("id", CONTENT_ROW_ID)
      .maybeSingle();

    if (error) {
      setAuthError(error.message);
      setContent(fallbackContent);
      return;
    }

    if (data?.content) {
      setContent(data.content);
      saveLocalContent(data.content);
      return;
    }

    await supabase.from("site_content").upsert({
      id: CONTENT_ROW_ID,
      content: fallbackContent,
    });

    setContent(fallbackContent);
  }

  async function saveContent(nextContent = content) {
    saveLocalContent(nextContent);

    if (!supabase || !isAuthenticated || !isAuthorizedAdmin) {
      setInfoMessage("Changes saved locally in this browser.");
      return;
    }

    setSaving(true);
    setInfoMessage("");

    const { error } = await supabase.from("site_content").upsert({
      id: CONTENT_ROW_ID,
      content: nextContent,
      updated_at: new Date().toISOString(),
    });

    if (error) {
      setAuthError(error.message);
    } else {
      setInfoMessage("Changes saved successfully.");
    }

    setSaving(false);
  }

  const updateContent = (updater: ContentData | ((prev: ContentData) => ContentData)) => {
    setContent((prev) => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      void saveContent(next);
      return next;
    });
  };

  const updateProfile = (field: string, value: string) => {
    updateContent((prev) => ({
      ...prev,
      profile: { ...prev.profile, [field]: value },
    }));
  };

  const updateAboutParagraph = (index: number, value: string) => {
    updateContent((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        aboutParagraphs: prev.profile.aboutParagraphs.map((item: string, i: number) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const updateListItem = (section: string, index: number, value: string) => {
    updateContent((prev) => ({
      ...prev,
      [section]: prev[section].map((item: string, i: number) => (i === index ? value : item)),
    }));
  };

  const addListItem = (section: string, value = "New item") => {
    updateContent((prev) => ({
      ...prev,
      [section]: [...prev[section], value],
    }));
  };

  const removeListItem = (section: string, index: number) => {
    updateContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((_: string, i: number) => i !== index),
    }));
  };

  const updateObjectArrayField = (section: string, index: number, field: string, value: string) => {
    updateContent((prev) => ({
      ...prev,
      [section]: prev[section].map((item: Record<string, unknown>, i: number) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const updateBullet = (index: number, bulletIndex: number, value: string) => {
    updateContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((item: { bullets: string[] }, i: number) =>
        i === index
          ? {
              ...item,
              bullets: item.bullets.map((b: string, bi: number) =>
                bi === bulletIndex ? value : b
              ),
            }
          : item
      ),
    }));
  };

  const addBullet = (index: number) => {
    updateContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((item: { bullets: string[] }, i: number) =>
        i === index ? { ...item, bullets: [...item.bullets, "New bullet"] } : item
      ),
    }));
  };

  const removeBullet = (index: number, bulletIndex: number) => {
    updateContent((prev) => ({
      ...prev,
      highlights: prev.highlights.map((item: { bullets: string[] }, i: number) =>
        i === index
          ? {
              ...item,
              bullets: item.bullets.filter((_: string, bi: number) => bi !== bulletIndex),
            }
          : item
      ),
    }));
  };

  const addCard = (section: string, template: Record<string, unknown>) => {
    updateContent((prev) => ({
      ...prev,
      [section]: [...prev[section], template],
    }));
  };

  const removeCard = (section: string, index: number) => {
    updateContent((prev) => ({
      ...prev,
      [section]: prev[section].filter((_: unknown, i: number) => i !== index),
    }));
  };

  const updateSkillGroup = (group: string, index: number, value: string) => {
    updateContent((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [group]: prev.skills[group].map((item: string, i: number) =>
          i === index ? value : item
        ),
      },
    }));
  };

  const addSkill = (group: string) => {
    updateContent((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [group]: [...prev.skills[group], "New skill"],
      },
    }));
  };

  const removeSkill = (group: string, index: number) => {
    updateContent((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [group]: prev.skills[group].filter((_: string, i: number) => i !== index),
      },
    }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    void saveContent(defaultContent);
  };

  const exportContent = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "brook-portfolio-content.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const importContent = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const text = await file.text();

    try {
      const parsed = JSON.parse(text);
      setContent(parsed);
      await saveContent(parsed);
      setInfoMessage("Content imported.");
    } catch {
      setAuthError("That file could not be imported. Please use a valid JSON export.");
    }
  };

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.push("/login5757");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-700">
        Loading admin...
      </div>
    );
  }

  if (!isAuthenticated || !isAuthorizedAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Brook CMS
            </p>
            <h1 className="mt-1 text-2xl font-semibold">Content Management</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-slate-900">
                {sessionUser?.email || "Admin"}
              </p>
              <p className="text-xs text-slate-500">
                {saving ? "Saving..." : infoMessage || "Ready"}
              </p>
            </div>

            <button
              onClick={() => router.push("/")}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              View site
            </button>

            <button
              onClick={handleLogout}
              className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-6 lg:grid-cols-[280px,1fr]">
        <aside className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <p className="text-sm font-medium text-slate-500">Navigation</p>
          </div>

          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                  activeTab === tab.key
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-2 border-t border-slate-200 pt-6">
            <button
              onClick={resetContent}
              className="w-full rounded-2xl border border-red-200 bg-white px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-50"
            >
              Reset to default
            </button>

            <button
              onClick={exportContent}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Export content
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Import content
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              className="hidden"
              onChange={importContent}
            />
          </div>
        </aside>

        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {activeTab === "profile" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Site Profile</h2>
              <p className="text-sm text-slate-600">
                Update your name, hero section, about section, and public contact information.
              </p>

              <EditorField label="Name" value={content.profile.name} onChange={(v) => updateProfile("name", v)} />
              <EditorField label="Tagline" value={content.profile.tagline} onChange={(v) => updateProfile("tagline", v)} />
              <EditorField label="Badge" value={content.profile.badge} onChange={(v) => updateProfile("badge", v)} />
              <EditorField label="Hero Title" value={content.profile.heroTitle} onChange={(v) => updateProfile("heroTitle", v)} />
              <EditorArea label="Hero Description" value={content.profile.heroDescription} onChange={(v) => updateProfile("heroDescription", v)} />
              <EditorField label="About Title" value={content.profile.aboutTitle} onChange={(v) => updateProfile("aboutTitle", v)} />

              {content.profile.aboutParagraphs.map((p: string, i: number) => (
                <EditorArea
                  key={i}
                  label={`About Paragraph ${i + 1}`}
                  value={p}
                  onChange={(v) => updateAboutParagraph(i, v)}
                />
              ))}

              <EditorField label="Email" value={content.profile.email} onChange={(v) => updateProfile("email", v)} />
              <EditorField label="LinkedIn" value={content.profile.linkedin} onChange={(v) => updateProfile("linkedin", v)} />
              <EditorField label="Location" value={content.profile.location} onChange={(v) => updateProfile("location", v)} />
            </div>
          )}

          {activeTab === "focusAreas" && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Focus Areas</h2>
              <DashboardHeader title="Focus Areas" onAdd={() => addListItem("focusAreas")} />
              {content.focusAreas.map((item: string, i: number) => (
                <RowEditor
                  key={i}
                  value={item}
                  onChange={(v) => updateListItem("focusAreas", i, v)}
                  onRemove={() => removeListItem("focusAreas", i)}
                />
              ))}
            </div>
          )}

          {activeTab === "services" && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Services</h2>
              <DashboardHeader
                title="Service Cards"
                onAdd={() => addCard("services", { title: "New Service", description: "Add a description" })}
              />
              {content.services.map((item: { title: string; description: string }, i: number) => (
                <CardEditor key={i} title={`Service ${i + 1}`} onRemove={() => removeCard("services", i)}>
                  <EditorField
                    label="Title"
                    value={item.title}
                    onChange={(v) => updateObjectArrayField("services", i, "title", v)}
                  />
                  <EditorArea
                    label="Description"
                    value={item.description}
                    onChange={(v) => updateObjectArrayField("services", i, "description", v)}
                  />
                </CardEditor>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <DashboardHeader
                title="Experience Entries"
                onAdd={() =>
                  addCard("highlights", {
                    role: "New Role",
                    org: "Organization",
                    period: "Dates",
                    bullets: ["Add accomplishment"],
                  })
                }
              />
              {content.highlights.map((item: { role: string; org: string; period: string; bullets: string[] }, i: number) => (
                <CardEditor key={i} title={`Experience ${i + 1}`} onRemove={() => removeCard("highlights", i)}>
                  <EditorField
                    label="Role"
                    value={item.role}
                    onChange={(v) => updateObjectArrayField("highlights", i, "role", v)}
                  />
                  <EditorField
                    label="Organization"
                    value={item.org}
                    onChange={(v) => updateObjectArrayField("highlights", i, "org", v)}
                  />
                  <EditorField
                    label="Period"
                    value={item.period}
                    onChange={(v) => updateObjectArrayField("highlights", i, "period", v)}
                  />
                  <DashboardHeader title="Bullets" compact onAdd={() => addBullet(i)} />
                  {item.bullets.map((bullet: string, bi: number) => (
                    <RowEditor
                      key={bi}
                      value={bullet}
                      onChange={(v) => updateBullet(i, bi, v)}
                      onRemove={() => removeBullet(i, bi)}
                      textarea
                    />
                  ))}
                </CardEditor>
              ))}
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <DashboardHeader
                title="Projects"
                onAdd={() => addCard("projects", { title: "New Project", description: "Add a project description" })}
              />
              {content.projects.map((item: { title: string; description: string }, i: number) => (
                <CardEditor key={i} title={`Project ${i + 1}`} onRemove={() => removeCard("projects", i)}>
                  <EditorField
                    label="Title"
                    value={item.title}
                    onChange={(v) => updateObjectArrayField("projects", i, "title", v)}
                  />
                  <EditorArea
                    label="Description"
                    value={item.description}
                    onChange={(v) => updateObjectArrayField("projects", i, "description", v)}
                  />
                </CardEditor>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">Skills</h2>
              {Object.entries(content.skills).map(([group, items]) => (
                <CardEditor key={group} title={capitalize(group)} noRemove>
                  <DashboardHeader
                    title={`${capitalize(group)} items`}
                    compact
                    onAdd={() => addSkill(group)}
                  />
                  {(items as string[]).map((item: string, i: number) => (
                    <RowEditor
                      key={i}
                      value={item}
                      onChange={(v) => updateSkillGroup(group, i, v)}
                      onRemove={() => removeSkill(group, i)}
                    />
                  ))}
                </CardEditor>
              ))}
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-5">
              <h2 className="text-2xl font-semibold">Admin Settings</h2>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">Access Model</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  This admin system is hidden from the public. There is no visible login or edit button on the site.
                  Only users whose emails are listed in <code>ADMIN_EMAILS</code> can access the dashboard.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">Current Admin</h3>
                <p className="mt-2 text-sm text-slate-700">
                  {sessionUser?.email || "Unknown"}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">Future Role-Based Access</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Later, you can replace the static admin email list with a Supabase
                  <code>profiles</code> table containing fields like <code>role</code>, <code>permissions</code>,
                  and <code>is_active</code>. The <code>hasAdminAccess()</code> function is already isolated so it can be swapped easily.
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}