import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brook S. Eshete, MD, MPH — Public Health Data Analyst",
  description:
    "Public health data analyst and MD/MPH graduate from Johns Hopkins specializing in program evaluation, health informatics, STATA, Python, SQL, and Power BI. Based in Silver Spring, MD — open to opportunities in the DMV area.",
  keywords: [
    "public health data analyst",
    "health informatics specialist",
    "MPH data analyst",
    "program evaluation",
    "Brook Eshete",
    "Brook Shimelis",
    "MD MPH",
    "Johns Hopkins",
    "Silver Spring Maryland",
    "DMV public health",
    "epidemiology data analyst",
    "STATA analyst",
    "Power BI dashboard",
    "public health analytics",
    "health data analyst Washington DC",
    "public health jobs Maryland",
  ],
  authors: [{ name: "Brook S. Eshete" }],
  alternates: {
    canonical: "https://itsbrook.com",
  },
  openGraph: {
    title: "Brook S. Eshete, MD, MPH — Public Health Data Analyst",
    description:
      "Bridging clinical insight and public health strategy through data. MD + MPH from Johns Hopkins. Public health analytics, program evaluation, and health informatics in the DMV area.",
    url: "https://itsbrook.com",
    siteName: "Brook Eshete",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brook S. Eshete, MD, MPH — Public Health Data Analyst",
    description:
      "Public health data analyst with MD + MPH from Johns Hopkins. STATA, Python, SQL, Power BI. Open to opportunities in the DMV area.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://itsbrook.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brook S. Eshete, MD, MPH",
              jobTitle: "Public Health Data Analyst",
              description:
                "Public health data analyst and physician with MD and MPH from Johns Hopkins, specializing in program evaluation, health informatics, STATA, Python, SQL, and Power BI.",
              url: "https://itsbrook.com",
              email: "info@itsbrook.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Silver Spring",
                addressRegion: "MD",
                addressCountry: "US",
              },
              alumniOf: [
                {
                  "@type": "CollegeOrUniversity",
                  name: "Johns Hopkins Bloomberg School of Public Health",
                },
              ],
              knowsAbout: [
                "Public Health Analytics",
                "Program Evaluation",
                "Health Informatics",
                "Data Analysis",
                "STATA",
                "Python",
                "SQL",
                "Power BI",
                "Epidemiology",
                "Mental Health Research",
              ],
              sameAs: ["https://linkedin.com/in/brook-shimelis-md"],
              hiring: {
                "@type": "Demand",
                description: "Open to opportunities in public health data analytics, health informatics, program evaluation, and research in the DMV area.",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
