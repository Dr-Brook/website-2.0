import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brook Eshete, MD, MPH — Public Health Data Analyst | Silver Spring, MD",
  description:
    "Brook Eshete is a public health data analyst and MD/MPH graduate from Johns Hopkins, specializing in program evaluation, health informatics, and data storytelling. Based in Silver Spring, MD.",
  keywords: [
    "public health data analyst",
    "health informatics specialist",
    "MPH data analyst",
    "program evaluation",
    "Brook Eshete",
    "MD MPH",
    "Johns Hopkins",
    "Silver Spring Maryland",
    "DMV public health",
    "epidemiology data analyst",
  ],
  authors: [{ name: "Brook Eshete" }],
  openGraph: {
    title: "Brook Eshete, MD, MPH — Public Health Data Analyst",
    description:
      "Bridging clinical insight and public health strategy through data. MD + MPH from Johns Hopkins.",
    url: "https://itsbrook.com",
    siteName: "Brook Eshete",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brook Eshete, MD, MPH — Public Health Data Analyst",
    description:
      "Bridging clinical insight and public health strategy through data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Brook Eshete",
              jobTitle: "Public Health Data Analyst",
              description:
                "Physician and public health professional specializing in data analytics, program evaluation, and health informatics.",
              url: "https://itsbrook.com",
              email: "info@itsbrook.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Silver Spring",
                addressRegion: "MD",
                addressCountry: "US",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Johns Hopkins Bloomberg School of Public Health",
              },
              knowsAbout: [
                "Public Health Analytics",
                "Program Evaluation",
                "Health Informatics",
                "Data Analysis",
                "STATA",
                "Python",
                "SQL",
                "Power BI",
              ],
              sameAs: ["https://linkedin.com/in/brook-shimelis-md"],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        {children}
      </body>
    </html>
  );
}