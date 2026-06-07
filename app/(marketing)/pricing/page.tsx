import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const BASE = "https://mawlabs.ai";

export const metadata: Metadata = {
  title: "Pricing — How MAW Labs Engagements Work",
  description:
    "Fixed-scope projects, retainers, and advisory. No hourly billing, no surprise invoices. Every engagement starts with a free AI audit.",
  alternates: { canonical: `${BASE}/pricing` },
  openGraph: {
    title: "Pricing — MAW Labs Engagement Model",
    description: "Fixed-scope projects, retainers, and advisory. Every engagement starts with a free AI audit.",
    url: `${BASE}/pricing`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${BASE}/pricing` },
  ],
};

const tiers = [
  {
    name: "Project",
    range: "$8K – $35K",
    description: "A defined deliverable with a defined price. You know exactly what you're getting and what it costs before we start.",
    timeline: "4 – 12 weeks",
    bestFor: "New systems, integrations, automation pipelines, and product features with clear scope.",
    includes: [
      "Fixed scope defined before any work starts",
      "Weekly working deliverables — not status updates",
      "Full handoff: documentation, deployment, runbooks",
      "30-day post-launch support included",
      "Source code and IP fully yours",
    ],
  },
  {
    name: "Retainer",
    range: "$4K – $12K / mo",
    description: "Ongoing engineering capacity for businesses that need consistent output — new features, maintenance, and system improvements month over month.",
    timeline: "3-month minimum",
    bestFor: "Growing teams that need reliable engineering output without full-time hiring overhead.",
    includes: [
      "Dedicated hours every week, predictable cadence",
      "Priority response for production issues",
      "Monthly planning session + retrospective",
      "Access to the full MAW Labs stack and tooling",
      "Scales up or down with 30-day notice",
    ],
    featured: true,
  },
  {
    name: "Advisory",
    range: "$250 / hr",
    description: "Architecture review, technical due diligence, or a second opinion from engineers who've shipped production AI systems.",
    timeline: "By the hour",
    bestFor: "Technical founders, CTOs, and teams that need expert input on specific decisions — not ongoing work.",
    includes: [
      "Architecture and system design review",
      "AI/ML stack evaluation and recommendations",
      "Security and infrastructure audits",
      "Technical due diligence for fundraising or acquisition",
      "Written summary of findings after each session",
    ],
  },
];

const faqs = [
  {
    q: "How does the free AI audit fit in?",
    a: "Every engagement starts with a free 30-minute call and written report. The report outlines what we'd build, how it would work, and what it would cost. You decide whether to proceed — no obligation either way.",
  },
  {
    q: "How does fixed-scope pricing work in practice?",
    a: "We agree on a written scope before any work begins. If new requirements emerge during the project, we pause and agree on how to handle them before continuing. Nothing gets added without a new scope approval. This protects both sides.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "Yes, if the scope is well-defined. Early-stage projects tend to work best as fixed-scope engagements where we build a specific thing — an MVP, a data pipeline, an AI integration — rather than open-ended retainers.",
  },
  {
    q: "What industries do you work with?",
    a: "We don't specialize by industry — we specialize by problem type. Document-heavy workflows, internal tooling, customer-facing AI products, data infrastructure. If the problem is engineering-solvable, we can evaluate it.",
  },
  {
    q: "What's the payment structure?",
    a: "Projects: 50% upfront, 50% on delivery. Retainers: monthly in advance. Advisory: invoiced weekly. We accept ACH and wire transfer.",
  },
];

export default function PricingPage() {
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
          <div className="absolute bottom-0 right-1/4 h-[350px] w-[500px] rounded-full bg-blue-600/6 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">Pricing</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Fixed scope.{" "}
            <span className="gradient-text">No surprises.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            We don't bill hourly. Every engagement is scoped before we start — you know exactly what you're getting and what it costs. Pricing comes after the free audit, once we understand the problem.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-7 flex flex-col ${
                  tier.featured
                    ? "border-blue-500/30 bg-blue-950/20"
                    : "border-white/5 bg-zinc-900/30"
                }`}
              >
                {tier.featured && (
                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4">
                    Most common
                  </div>
                )}
                <h2 className="text-xl font-bold text-white mb-1">{tier.name}</h2>
                <p className="text-2xl font-bold gradient-text mb-4">{tier.range}</p>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{tier.description}</p>

                <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Timeline
                </div>
                <p className="text-sm text-zinc-300 mb-4">{tier.timeline}</p>

                <div className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Best for
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{tier.bestFor}</p>

                <div className="space-y-2.5 mt-auto">
                  {tier.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white mb-10">Common questions</h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-semibold text-zinc-100 mb-2">{faq.q}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Start with the free audit.
          </h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            We scope the problem, identify what to build, and deliver a written report — including a price. No commitment until you approve the scope.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
          >
            Book a free AI audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
