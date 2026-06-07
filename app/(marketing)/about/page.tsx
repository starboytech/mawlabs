import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const BASE = "https://mawlabs.ai";

export const metadata: Metadata = {
  title: "About MAW Labs — AI-Native Engineering Company",
  description:
    "MAW Labs is an AI-native engineering company founded by Mohamed Yusuf. We build software that creates measurable outcomes — AI automation, custom software, and cybersecurity for US businesses.",
  alternates: { canonical: `${BASE}/about` },
  openGraph: {
    title: "About MAW Labs — AI-Native Engineering Company",
    description:
      "Founded by a software engineer building production AI systems. CramRocket is our first product — launched July 2026, generating revenue in 30 days.",
    url: `${BASE}/about`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE}/about` },
  ],
};

const values = [
  {
    title: "Specific over vague",
    description:
      "Every engagement has a defined metric. Not 'improve efficiency' — 'reduce document review from 6 hours to 45 minutes.' If we can't measure it, we don't commit to it.",
  },
  {
    title: "AI as infrastructure, not decoration",
    description:
      "AI is not a feature we bolt onto software. It's the underlying mechanism that makes the software worth building. Every system we design assumes AI is a first-class component.",
  },
  {
    title: "Small team, high standard",
    description:
      "We don't scale with bodies. We scale with better systems. The engineers on your project are the engineers who designed your architecture — not whoever was available that week.",
  },
  {
    title: "Show the work",
    description:
      "Weekly deliverables you can use. Not status updates, not slide decks — working software and documented progress. You always know where your engagement stands.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />
      {/* Header */}
      <section className="relative px-6 py-24 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 h-[400px] w-[500px] rounded-full bg-amber-600/6 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">About</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Built by engineers.{" "}
            <span className="gradient-text">Measured by outcomes.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            MAW Labs is an AI-native engineering company. We build and operate software systems for businesses that need real results — automation that runs in production, software that ships on schedule, and infrastructure that doesn't break.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-20 lg:px-8 border-b border-white/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Where this started</h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              MAW Labs was founded by Mohamed Yusuf — a software engineer currently completing a BS in Software Engineering at WGU, building production systems in parallel with coursework.
            </p>
            <p>
              The first product out of MAW Labs is{" "}
              <Link
                href="https://cramrocket.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
              >
                CramRocket <ExternalLink size={12} />
              </Link>
              {" "}— an AI-powered study platform that teaches from uploaded course materials using the Feynman method, generates mock exams, and tracks weak spots with spaced repetition. It launched in July 2026 and reached paying users in the first 30 days.
            </p>
            <p>
              That build made one thing clear: the same engineering stack that powers CramRocket — RAG pipelines, AI agents, full-stack Next.js, PostgreSQL, production-grade security — is exactly what most businesses need and can't find. MAW Labs is the company that delivers it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 lg:px-8 border-b border-white/5">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-12">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl border border-white/5 bg-zinc-900/40">
                <h3 className="font-semibold text-lg mb-3 gradient-text">{v.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="px-6 py-20 lg:px-8 border-b border-white/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Our stack</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            We don't use different technologies for every client. We've built the same core stack to production and know exactly where it stretches and where it doesn't. That means faster builds, fewer surprises, and a team that's already solved the hard problems.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Next.js 15", "TypeScript", "Tailwind CSS",
              "PostgreSQL", "Supabase", "pgvector",
              "Gemini 2.5 / OpenAI", "AWS", "Terraform",
              "GitHub Actions", "Vercel", "Stripe",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-lg border border-white/5 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-300 font-mono text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Let's build something worth measuring.
          </h2>
          <p className="text-zinc-400 mb-8">
            If you have a workflow that costs your team time, a product that needs to ship, or infrastructure that's gotten out of control — we'll take a look, no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
          >
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
