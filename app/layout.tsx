import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MAW Labs — AI-Native Engineering",
  description:
    "We build software that thinks. AI automation, custom software development, cybersecurity, cloud architecture, and data engineering for businesses that need real results.",
  metadataBase: new URL("https://mawlabs.ai"),
  openGraph: {
    title: "MAW Labs — AI-Native Engineering",
    description:
      "We build software that thinks. AI automation, custom software, cybersecurity, cloud, and data engineering.",
    url: "https://mawlabs.ai",
    siteName: "MAW Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MAW Labs — AI-Native Engineering",
    description: "We build software that thinks.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
