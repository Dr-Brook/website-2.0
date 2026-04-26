// Unique ID for your content row in Supabase
export const CONTENT_ROW_ID = "brook-site-content";

// Default content (your website initial data)
export const defaultContent = {
  profile: {
    name: "Brook S. Eshete, M.D., MPH",
    tagline: "Public Health Analytics • Health Systems • Research • Digital Health",
    badge: "Data-driven public health professional",
    heroTitle: "Bridging clinical insight and public health strategy through data.",
    heroDescription:
      "I am a physician and public health professional focused on improving health outcomes through analytics, program evaluation, research, and digital health solutions. My work connects data, systems thinking, and community-centered practice to support better decisions and more equitable care.",
    aboutTitle: "A physician and public health professional with a strong analytics foundation.",
    aboutParagraphs: [
      "I hold a Doctor of Medicine degree and a Master of Public Health from Johns Hopkins Bloomberg School of Public Health. My experience spans public health research, digital health, data analysis, program evaluation, and community health strategy across U.S. and international settings.",
      "I have supported projects focused on mental health, health communication, e-learning, and health systems improvement, using data and research to inform practical decisions. I am especially interested in work that improves access, strengthens systems, and turns complex information into actionable insights for leaders, partners, and communities.",
      "This site is designed to showcase a profile that is relevant for public health, research, health policy, consulting, and health data opportunities.",
    ],
    location: "Silver Spring, Maryland",
    email: "info@itsbrook.com",
    linkedin: "linkedin.com/in/brook-shimelis-md",
  },
  focusAreas: [
    "Public Health Analytics",
    "Health Systems Strengthening",
    "Mental Health",
    "Digital Health",
    "Program Evaluation",
    "Health Policy",
  ],
  blogPosts: [
    {
      title: "Using data to strengthen public health programs",
      date: "2026-03-23",
      summary:
        "A short reflection on how analytics, evaluation, and clear communication can improve decision-making in public health.",
      link: "#",
    },
  ],
  services: [
    {
      title: "Data Analysis",
      description:
        "Cleaning, analyzing, and visualizing health data to generate actionable insights.",
    },
    {
      title: "Program Evaluation",
      description:
        "Designing and evaluating public health programs using data-driven methods.",
    },
    {
      title: "Research & Reporting",
      description:
        "Literature reviews, data synthesis, and technical report writing.",
    },
  ],
  highlights: [
    {
      role: "Program Coordinator",
      org: "RnD Associates / Zeni's Gift",
      period: "Aug 2025 – Present",
      bullets: [
        "Lead community engagement and health screening initiatives that promote public health awareness and access.",
        "Conduct data collection, management, analysis, and reporting to support program improvement and decision-making.",
        "Develop culturally appropriate health education materials, reports, and manuscripts for stakeholders and publication.",
      ],
    },
    {
      role: "Healthcare Data Analyst",
      org: "Johns Hopkins Bloomberg School of Public Health",
      period: "Dec 2024 – May 2025",
      bullets: [
        "Conducted quantitative and qualitative analyses on mental health and psychosocial support services in humanitarian and conflict-affected settings.",
        "Synthesized findings into reports and presentations for internal teams and partner organizations.",
        "Supported evidence generation for program evaluation and data-driven decision-making.",
      ],
    },
    {
      role: "Research Assistant",
      org: "Johns Hopkins Bloomberg School of Public Health",
      period: "Sep 2024 – May 2025",
      bullets: [
        "Supported the dissemination of global health resources and maintained web-based public health content for diverse stakeholders.",
        "Managed and updated the Stop Cholera website to improve accessibility, relevance, and stakeholder engagement.",
        "Provided technical troubleshooting and coordinated with developers on backend maintenance and upgrades.",
      ],
    },
    {
      role: "Junior Digital Learning Specialist",
      org: "St. Paul Millennium Medical College",
      period: "Nov 2022 – May 2024",
      bullets: [
        "Built Power BI dashboards and managed datasets to track CME reach, attendance, and outcomes.",
        "Applied SQL queries and Excel analysis to support performance reporting and metric standardization.",
        "Coordinated large virtual training sessions for healthcare professionals and supported digital learning systems.",
      ],
    },
  ],
  projects: [
    {
      title: "Mental Health Program Evaluation",
      description:
        "Supported mixed-methods evaluation of mental health and psychosocial support interventions, including regression analysis, outcome measurement, and reporting.",
    },
    {
      title: "Training Analytics Dashboard",
      description:
        "Developed Power BI dashboards to track healthcare training participation, engagement, and performance metrics across programs.",
    },
    {
      title: "Community Health Data Systems",
      description:
        "Designed data workflows, cleaned datasets, and created reports to support program monitoring and decision-making.",
    },
    {
      title: "Exploratory Data Analysis Projects",
      description:
        "Performed exploratory data analysis using Python, SQL, and STATA to identify trends, clean datasets, and generate insights from structured health data.",
    },
  ],
  skills: {
    analytics: ["Stata", "Python", "SQL", "Power BI"],
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