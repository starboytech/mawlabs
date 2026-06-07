import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Code2, Shield, Cloud, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";

const BASE = "https://mawlabs.ai";

export const metadata: Metadata = {
  title: "AI Automation, Custom Software & Cybersecurity Services",
  description:
    "AI automation agents, custom software development, cybersecurity audits, cloud architecture on AWS, and data engineering. Fixed-scope engagements with measurable outcomes.",
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: "AI Automation, Custom Software & Cybersecurity Services | MAW Labs",
    description:
      "Five service lines built AI-native. AI agents, custom software, cybersecurity, cloud, and data engineering for US businesses.",
    url: `${BASE}/services`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE}/services` },
  ],
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI Automation & Agents",
    serviceType: "AI Process Automation",
    provider: { "@id": `${BASE}/#organization` },
    description:
      "Custom AI agents that automate document processing, customer support, lead qualification, invoice handling, and compliance monitoring.",
    areaServed: { "@type": "Country", name: "United States" },
    url: `${BASE}/services#ai-automation`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software Development",
    serviceType: "Custom Software Development",
    provider: { "@id": `${BASE}/#organization` },
    description:
      "Full-stack AI-native web applications built with Next.js, TypeScript, PostgreSQL, and Supabase. Internal tools, client portals, and SaaS products.",
    areaServed: { "@type": "Country", name: "United States" },
    url: `${BASE}/services#custom-software`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cybersecurity",
    serviceType: "Cybersecurity Consulting",
    provider: { "@id": `${BASE}/#organization` },
    description:
      "Security audits, managed monitoring, and compliance preparation for SOC 2, HIPAA, and GDPR for small and mid-sized businesses.",
    areaServed: { "@type": "Country", name: "United States" },
    url: `${BASE}/services#cybersecurity`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cloud & DevOps",
    serviceType: "Cloud Architecture",
    provider: { "@id": `${BASE}/#organization` },
    description:
      "AWS cloud architecture, Terraform infrastructure as code, CI/CD pipelines, and containerization with ongoing cost optimization.",
    areaServed: { "@type": "Country", name: "United States" },
    url: `${BASE}/services#cloud-devops`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Data & Analytics Engineering",
    serviceType: "Data Engineering",
    provider: { "@id": `${BASE}/#organization` },
    description:
      "ETL pipelines, analytics dashboards, and RAG systems that surface business-ready insights from scattered data sources.",
    areaServed: { "@type": "Country", name: "United States" },
    url: `${BASE}/services#data-analytics`,
  },
];

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    tagline: "Replace manual workflows with agents that run 24/7.",
    description:
      "We build custom AI agents that automate specific, costly business workflows. Document processing, customer support triaging, lead qualification, invoice extraction, compliance monitoring — any workflow that follows rules and drowns your team in repetition is a candidate.",
    deliverables: [
      "Workflow analysis and automation opportunity map",
      "Custom AI agent built on your existing tools and data",
      "Staff training and handoff documentation",
      "30-day monitoring and optimization period",
    ],
    pricing: "Setup: $2,500–$15,000 · Monthly retainer: $1,500–$6,000",
    outcome: "Law firm reduced document review from 6 hours to 45 minutes.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    tagline: "AI-native applications — not templates with AI bolted on.",
    description:
      "We build full-stack web applications where AI is structural, not decorative. Internal tools, client-facing portals, SaaS products, dashboards. Every build uses Next.js, TypeScript, PostgreSQL, and Supabase — a stack that scales from 10 users to 100,000 without rearchitecting.",
    deliverables: [
      "Product architecture and database design",
      "Full-stack development in weekly sprints",
      "Authentication, payments, and third-party integrations",
      "Deployment, CI/CD pipeline, and handoff documentation",
    ],
    pricing: "Small projects: $15,000–$50,000 · Full products: $75,000–$200,000",
    outcome: "CramRocket — built and launched in 7 weeks, generating revenue on day one.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    tagline: "Prevention is $5,000. Recovery is $120,000. We do prevention.",
    description:
      "Cybersecurity managed services and compliance consulting for small and mid-sized businesses. We audit your attack surface, close the gaps, monitor for threats, and prepare you for SOC 2, HIPAA, or GDPR compliance — depending on your industry and customer base.",
    deliverables: [
      "Full security audit with written findings report",
      "Remediation roadmap with prioritized fixes",
      "Ongoing managed monitoring and incident alerts",
      "Compliance documentation and evidence collection",
    ],
    pricing: "Audit: $3,000–$8,000 · Managed monitoring: $750–$2,500/mo",
    outcome: "Ransomware attacks against SMBs up 40% in 2026. Most had no monitoring.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    tagline: "Infrastructure defined in code, reproducible from scratch.",
    description:
      "Cloud architecture on AWS — designed, built, and maintained with Infrastructure as Code. We migrate existing systems, optimize over-provisioned infrastructure, build CI/CD pipelines, and containerize applications. Your infrastructure should be a living document, not tribal knowledge.",
    deliverables: [
      "Cloud architecture design and cost estimate",
      "Terraform infrastructure build and documentation",
      "CI/CD pipeline setup (GitHub Actions)",
      "Ongoing cloud management and cost optimization",
    ],
    pricing: "Architecture build: $10,000–$40,000 · Managed: $1,500–$5,000/mo",
    outcome: "Avg. 35% reduction in cloud spend after optimization audit.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Engineering",
    tagline: "If you can't act on your data today, we fix that.",
    description:
      "We build data pipelines that consolidate scattered sources, analytics dashboards that surface decisions (not just charts), and RAG systems that let your team query internal knowledge in plain English. Most businesses have more data than they can use — we close that gap.",
    deliverables: [
      "Data source audit and pipeline architecture",
      "ETL pipelines and data warehouse setup",
      "Analytics dashboard with business-relevant KPIs",
      "Optional: internal RAG system for document querying",
    ],
    pricing: "Pipeline build: $8,000–$35,000 · Dashboard: $5,000–$15,000",
    outcome: "Insurance broker went from weekly Excel reports to real-time dashboard in 3 weeks.",
  },
];

const SERVICE_IDS = [
  "ai-automation",
  "custom-software",
  "cybersecurity",
  "cloud-devops",
  "data-analytics",
];

const streakStyle = { background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" };

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {serviceSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(s).replace(/</g, "\\u003c"),
          }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <section className="px-6 pt-24 pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">Services</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Five lines. One{" "}
            <span className="gradient-text">standard.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Every service we offer has AI embedded in it — not as a demo feature, but as the mechanism that creates the outcome we agreed on before we started.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div className="h-px w-full mb-16" style={streakStyle} />
        <div className="mx-auto max-w-5xl space-y-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              id={SERVICE_IDS[i]}
              className="border border-white/8 rounded-2xl p-8 bg-zinc-950"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <service.icon size={20} className="text-blue-400" />
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">0{i + 1}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-1">{service.title}</h2>
                  <p className="text-blue-300 text-sm font-medium mb-4">{service.tagline}</p>
                  <p className="text-zinc-400 leading-relaxed mb-6">{service.description}</p>

                  <ul className="space-y-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm text-zinc-300">
                        <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="lg:border-l lg:border-white/5 lg:pl-8 flex flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-2">Pricing</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{service.pricing}</p>
                  </div>
                  <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-4">
                    <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-1">Real outcome</p>
                    <p className="text-sm text-zinc-300 leading-relaxed">{service.outcome}</p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Get a quote <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div className="h-px w-full mb-16" style={streakStyle} />
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Not sure which service fits?</h2>
          <p className="text-zinc-400 mb-8">
            Start with a free AI audit. We'll identify where automation and engineering create the most value for your specific business — then recommend the right service line.
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
