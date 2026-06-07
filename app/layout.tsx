import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const BASE_URL = "https://mawlabs.ai";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "MAW Labs | AI-Native Engineering Company",
    template: "%s | MAW Labs",
  },
  description:
    "MAW Labs builds AI-native software that creates measurable outcomes — AI automation, custom software development, cybersecurity, cloud architecture, and data engineering for US businesses.",
  keywords: [
    "AI automation agency",
    "custom software development",
    "AI agents for business",
    "cybersecurity consulting",
    "cloud architecture AWS",
    "data engineering",
    "AI-native engineering",
    "business process automation",
  ],
  authors: [{ name: "MAW Labs", url: BASE_URL }],
  creator: "MAW Labs",
  publisher: "MAW Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "MAW Labs",
    title: "MAW Labs | AI-Native Engineering Company",
    description:
      "We build AI automation, custom software, and data systems that create measurable outcomes. Free AI audit to start.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MAW Labs — AI-Native Engineering Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mawlabs",
    creator: "@mawlabs",
    title: "MAW Labs | AI-Native Engineering Company",
    description: "We build software that thinks. AI automation, custom software, cybersecurity, cloud, and data engineering.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "MAW Labs",
  url: BASE_URL,
  logo: `${BASE_URL}/logo_icon.png`,
  description:
    "MAW Labs is an AI-native engineering company that builds AI automation, custom software, cybersecurity solutions, cloud architecture, and data engineering systems for US businesses.",
  email: "contact@mawlabs.ai",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "contact@mawlabs.ai",
    availableLanguage: "English",
  },
  sameAs: [
    "https://x.com/mawlabs",
    "https://github.com/starboytech/mawlabs",
    "https://linkedin.com/company/mawlabs",
  ],
  foundingDate: "2026",
  knowsAbout: [
    "AI Automation",
    "Machine Learning",
    "Custom Software Development",
    "Cybersecurity",
    "Cloud Architecture",
    "Data Engineering",
    "RAG Systems",
    "Next.js",
    "TypeScript",
    "AWS",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "MAW Labs",
  url: BASE_URL,
  publisher: { "@id": `${BASE_URL}/#organization` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
