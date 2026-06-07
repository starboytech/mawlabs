import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const BASE = "https://mawlabs.ai";

export const metadata: Metadata = {
  title: "Work — Built by MAW Labs",
  description:
    "Products and systems built by MAW Labs. CramRocket: an AI study platform launching July 2026.",
  alternates: { canonical: `${BASE}/work` },
  openGraph: {
    title: "Work — Built by MAW Labs",
    description: "Real products, real engineering. CramRocket — AI study platform built by MAW Labs, launching July 2026.",
    url: `${BASE}/work`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Work", item: `${BASE}/work` },
  ],
};

const cramrocketSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CramRocket",
  url: "https://cramrocket.com",
  applicationCategory: "EducationalApplication",
  description:
    "AI-powered study platform that teaches from uploaded course materials using the Feynman method, generates mock exams, and tracks weak spots with spaced repetition.",
  creator: { "@type": "Organization", name: "MAW Labs", url: BASE },
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "34.99",
    priceCurrency: "USD",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      billingDuration: "P1M",
    },
  },
};

const stack = [
  "Next.js 15",
  "TypeScript",
  "Supabase + pgvector",
  "Gemini 2.5 Pro",
  "OpenAI Embeddings",
  "Stripe",
  "Vercel",
  "Resend",
];

const outcomes = [
  { metric: "July 2026", label: "launch target" },
  { metric: "95%", label: "projected gross margin per subscriber" },
  { metric: "4 AI models", label: "orchestrated in production" },
  { metric: "41 migrations", label: "shipped with zero downtime" },
];

const features = [
  {
    title: "RAG pipeline",
    description:
      "Upload PDFs, slides, and notes. The system chunks, embeds, and indexes them with pgvector HNSW for sub-50ms retrieval. Supports 6 file types.",
  },
  {
    title: "Feynman tutor",
    description:
      "AI teaches each topic using the Feynman method — explains, uses analogies, checks understanding. Not a chatbot — a structured pedagogical loop.",
  },
  {
    title: "Mock exam generator",
    description:
      "Generates multiple-choice exams from uploaded materials. Questions are stored server-side; correct answers never reach the browser.",
  },
  {
    title: "Spaced repetition (SM-2)",
    description:
      "Weak spots resurface on an SM-2 schedule. The system tracks mastery per concept and adjusts daily drills based on what's overdue.",
  },
  {
    title: "Study plan chat",
    description:
      "Enter an exam date, get a day-by-day study schedule. Chat with it to reschedule, swap topics, or ask what to focus on.",
  },
  {
    title: "Billing infrastructure",
    description:
      "Stripe Checkout + Customer Portal. 7-day free trial, monthly and annual plans, webhook idempotency, and GDPR account deletion.",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cramrocketSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <section className="relative px-6 py-24 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 h-[400px] w-[500px] rounded-full bg-amber-600/5 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">Work</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            What we've{" "}
            <span className="gradient-text">shipped.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            The best way to evaluate an engineering team is to look at what they've built in production. Here's ours.
          </p>
        </div>
      </section>

      {/* CramRocket case study */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Project header */}
          <div className="flex items-start justify-between gap-6 mb-12 flex-wrap">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <span className="text-base font-bold text-blue-400">CR</span>
                </div>
                <h2 className="text-2xl font-bold text-white">CramRocket</h2>
                <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full">
                  Launching July 2026
                </span>
              </div>
              <p className="text-zinc-400 max-w-xl leading-relaxed">
                AI-powered study platform. Upload your course materials and it teaches you, tests you, and tracks your weak spots — purpose-built for exam prep.
              </p>
            </div>
            <a
              href="https://cramrocket.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/50 px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
            >
              cramrocket.com
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Outcomes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {outcomes.map((o) => (
              <div key={o.label} className="rounded-xl border border-white/5 bg-zinc-900/40 p-5">
                <p className="text-2xl font-bold font-mono text-white mb-1">{o.metric}</p>
                <p className="text-sm text-zinc-500 leading-snug">{o.label}</p>
              </div>
            ))}
          </div>

          {/* What we built */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-white mb-8">What we built</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {features.map((f) => (
                <div key={f.title} className="rounded-xl border border-white/5 bg-zinc-900/30 p-5">
                  <h4 className="font-semibold text-zinc-100 mb-2">{f.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stack */}
          <div className="mb-16">
            <h3 className="text-lg font-bold text-white mb-6">Stack</h3>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/5 bg-zinc-900/50 px-4 py-2 text-sm text-zinc-300 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6">
            <p className="text-sm text-zinc-400 leading-relaxed">
              CramRocket is an internal MAW Labs product, not a client engagement. We built the entire stack — product, engineering, infrastructure, and go-to-market. It demonstrates the same technical capabilities we bring to client work: RAG pipelines, AI orchestration, production-grade security, and billing infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl border-t border-white/5 pt-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            Building something similar?
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            If you have a product that needs AI infrastructure, a workflow that needs automation, or a system that needs rebuilding — start with the free audit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
          >
            Get a free AI audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
