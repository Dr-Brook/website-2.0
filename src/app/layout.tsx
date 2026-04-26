import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brook S. Eshete, M.D., MPH — Public Health Data Analyst",
  description: "Bridging clinical insight and public health strategy through data. MD + MPH from Johns Hopkins.",
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
    title: "Brook S. Eshete, M.D., MPH — Public Health Data Analyst",
    description: "Bridging clinical insight and public health strategy through data.",
    url: "https://itsbrook.com",
    siteName: "Brook Eshete",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brook S. Eshete, M.D., MPH — Public Health Data Analyst",
    description: "Bridging clinical insight and public health strategy through data.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}