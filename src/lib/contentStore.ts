// Unique ID for your content row in Supabase
export const CONTENT_ROW_ID = "brook-site-content";

// Default content (your website initial data)
export const defaultContent = {
  profile: {
    name: "Brook S. Eshete, M.D., MPH",
    tagline: "Public Health Data Analyst • Health Informatics • Program Evaluation • Silver Spring, MD",
    badge: "Public Health Data Analyst — MD, MPH",
    heroTitle: "Public Health Data Analyst with an MD and MPH from Johns Hopkins",
    heroDescription:
      "I turn complex health data into clear, actionable insights. With a clinical background and deep training in epidemiology, biostatistics, and program evaluation, I help organizations make better decisions for the communities they serve. Based in the DMV area and open to roles in public health analytics, research, and health systems strengthening.",
    aboutTitle: "A physician and public health professional with a strong analytics foundation.",
    aboutParagraphs: [
      "I hold a Doctor of Medicine degree and a Master of Public Health from the Johns Hopkins Bloomberg School of Public Health, with a focus on epidemiology and biostatistics. My experience spans public health research, data analysis, program evaluation, and community health strategy across U.S. and international settings — including work in humanitarian and conflict-affected contexts.",
      "I have led data collection and analysis for mental health programs, built Power BI dashboards for healthcare training programs, supported evidence generation for program evaluation, and managed digital health platforms. I am especially interested in work that improves access, strengthens health systems, and translates complex data into decisions that matter for real people.",
      "I am actively seeking opportunities in public health data analytics, health informatics, program evaluation, and research in the Washington, D.C. metro area and beyond. I bring clinical insight, quantitative rigor, and a commitment to equity to every project I take on.",
    ],
    location: "Silver Spring, Maryland (DMV area)",
    email: "info@itsbrook.com",
    linkedin: "https://linkedin.com/in/brook-shimelis-md",
    phone: "",
  },
  focusAreas: [
    "Public Health Analytics",
    "Health Systems Strengthening",
    "Mental Health Research",
    "Digital Health & Informatics",
    "Program Evaluation",
    "Health Policy & Equity",
  ],
  blogPosts: [
    {
      title: "Using data to strengthen public health programs",
      date: "2026-03-23",
      summary:
        "A short reflection on how analytics, evaluation, and clear communication can improve decision-making in public health.",
      link: "/blog/public-health-data-analyst-insights",
    },
  ],
  services: [
    {
      title: "Data Analysis & Visualization",
      description:
        "I clean, analyze, and visualize health data using STATA, Python, SQL, and Power BI. Whether it's building dashboards for program managers or running regression models for research teams, I turn raw datasets into insights that drive decisions.",
    },
    {
      title: "Program Evaluation",
      description:
        "I design and evaluate public health programs using mixed methods — from quantitative outcome measurement to qualitative stakeholder synthesis. My work helps teams understand what's working, what isn't, and what to change.",
    },
    {
      title: "Research & Technical Reporting",
      description:
        "I conduct literature reviews, synthesize evidence, and produce technical reports for both specialist and non-specialist audiences. My goal is always clarity: making complex findings accessible and actionable.",
    },
  ],
  highlights: [
    {
      role: "Program Coordinator",
      org: "RnD Associates / Zeni's Gift",
      period: "Aug 2025 – Present",
      bullets: [
        "Lead community engagement and health screening initiatives that promote public health awareness and access in underserved communities.",
        "Conduct data collection, management, analysis, and reporting to support program improvement and evidence-based decision-making.",
        "Develop culturally appropriate health education materials, reports, and manuscripts for stakeholders and publication.",
      ],
    },
    {
      role: "Healthcare Data Analyst",
      org: "Johns Hopkins Bloomberg School of Public Health",
      period: "Dec 2024 – May 2025",
      bullets: [
        "Conducted quantitative and qualitative analyses on mental health and psychosocial support services in humanitarian and conflict-affected settings using STATA and Python.",
        "Synthesized findings into reports and presentations for internal teams and partner organizations, translating complex data into actionable recommendations.",
        "Supported evidence generation for program evaluation and data-driven decision-making across multiple research initiatives.",
      ],
    },
    {
      role: "Research Assistant",
      org: "Johns Hopkins Bloomberg School of Public Health",
      period: "Sep 2024 – May 2025",
      bullets: [
        "Managed and updated the Stop Cholera website to improve accessibility, relevance, and stakeholder engagement for global health audiences.",
        "Supported dissemination of global health resources and maintained web-based public health content for diverse stakeholders.",
        "Coordinated with developers on backend maintenance and upgrades, ensuring reliable access to critical health information.",
      ],
    },
    {
      role: "Junior Digital Learning Specialist",
      org: "St. Paul Millennium Medical College",
      period: "Nov 2022 – May 2024",
      bullets: [
        "Built Power BI dashboards to track continuing medical education (CME) reach, attendance, and outcomes across healthcare training programs.",
        "Applied SQL queries and Excel analysis to support performance reporting, metric standardization, and data quality assurance.",
        "Coordinated large-scale virtual training sessions for healthcare professionals and supported digital learning platform operations.",
      ],
    },
  ],
  projects: [
    {
      title: "Mental Health Program Evaluation",
      description:
        "Supported mixed-methods evaluation of mental health and psychosocial support interventions in humanitarian settings. Conducted regression analysis, outcome measurement, and synthesized findings into actionable reports for program stakeholders.",
    },
    {
      title: "Training Analytics Dashboard",
      description:
        "Developed interactive Power BI dashboards to track healthcare training participation, engagement, and performance metrics across multiple programs. Enabled real-time monitoring for program managers and decision-makers.",
    },
    {
      title: "Community Health Data Systems",
      description:
        "Designed end-to-end data workflows, cleaned complex datasets, and created analytical reports to support program monitoring and decision-making for community health initiatives in the DMV area.",
    },
    {
      title: "Exploratory Data Analysis Projects",
      description:
        "Performed exploratory data analysis using Python, SQL, and STATA to identify trends, clean datasets, and generate insights from structured and semi-structured health data for research and evaluation purposes.",
    },
  ],
  skills: {
    analytics: ["STATA", "Python", "SQL", "Power BI"],
    research: ["Literature Review", "Survey Design", "Regression Analysis"],
    health: ["Public Health", "Mental Health", "Epidemiology"],
    tools: ["Excel", "Google Sheets", "Canva", "Moodle"],
  },
};

// Local storage key
const STORAGE_KEY = "brook_portfolio_content";

// Load content from browser
export function loadLocalContent() {
  if (typeof window === "undefined") return defaultContent;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    return JSON.parse(raw);
  } catch {
    return defaultContent;
  }
}

// Save content locally
export function saveLocalContent(content: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    console.warn("Failed to save content locally");
  }
}

// Optional helper to clear storage
export function clearLocalContent() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}