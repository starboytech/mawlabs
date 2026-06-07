import Link from "next/link";
import {
  Bot,
  Code2,
  Shield,
  Cloud,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    description:
      "Replace manual, repetitive workflows with AI agents that run 24/7. Document processing, customer support, lead qualification, invoice handling — we automate the work that slows your team down.",
    outcome: "Avg. 70% reduction in manual processing time",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack applications built AI-native from day one. Internal tools, client portals, SaaS products — designed for your exact workflow, not adapted from a generic template.",
    outcome: "From concept to deployed product in 6–12 weeks",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security audits, managed monitoring, and compliance prep. The average ransomware recovery for an SMB costs $120,000. Prevention costs a fraction of that.",
    outcome: "SOC 2, HIPAA, GDPR compliance support",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture on AWS, CI/CD pipelines, containerization, and cost optimization. Own your infrastructure — defined in code, reproducible from scratch.",
    outcome: "Avg. 35% reduction in cloud spend after optimization",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Engineering",
    description:
      "Connect your data sources, build pipelines that actually work, and surface insights in plain English. If you can't act on your data today, we fix that.",
    outcome: "From scattered data to decision-ready dashboards",
  },
];

const differentiators = [
  {
    icon: Zap,
    title: "AI-native by default",
    description:
      "We don't add AI to your software as an afterthought. Every system we build treats AI as core infrastructure — not a feature.",
  },
  {
    icon: Target,
    title: "Outcomes, not hours",
    description:
      "Every engagement starts with a defined success metric. We measure what changes, then we build toward it.",
  },
  {
    icon: Users,
    title: "Small team, senior work",
    description:
      "No juniors learning on your project. Every engagement is handled by engineers who have shipped production systems.",
  },
];

const process = [
  { step: "01", title: "AI Audit", description: "We map your workflow, identify automation opportunities, and produce a written report. No commitment — just clarity." },
  { step: "02", title: "Proposal", description: "Fixed-scope proposal with defined deliverables, timeline, and outcome metrics. No hourly billing, no scope creep." },
  { step: "03", title: "Build", description: "We build in weekly sprints with visible progress. You see working software, not status updates." },
  { step: "04", title: "Measure", description: "After delivery, we track the outcome metric we agreed on. Results are documented and become your case study." },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-32 lg:py-44 lg:px-8">
        {/* Background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-1.5 text-sm text-violet-300 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
            AI-Native Engineering Company
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            We build{" "}
            <span className="gradient-text">software that thinks.</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
            AI automation, custom software, cybersecurity, cloud architecture, and data engineering — for businesses that need measurable results, not just technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/20 hover:from-violet-500 hover:to-violet-400 transition-all duration-200"
            >
              Start with a free AI audit
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-base font-medium text-zinc-300 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              View services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Five service lines.{" "}
              <span className="gradient-text">One engineering standard.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every service is built with AI embedded from the start — not as a feature, but as infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="gradient-border rounded-2xl p-6 card-hover bg-zinc-950"
              >
                <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4">
                  <service.icon size={20} className="text-violet-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 size={13} />
                  {service.outcome}
                </div>
              </div>
            ))}

            {/* CTA card */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600/20 to-cyan-600/10 border border-violet-500/20 p-6 flex flex-col justify-between card-hover">
              <div>
                <p className="text-sm text-violet-300 font-medium mb-2">Not sure where to start?</p>
                <h3 className="font-bold text-xl mb-3">Book a free AI audit</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We map your workflow, identify automation opportunities, and produce a written report — no commitment required.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white transition-colors"
              >
                Schedule audit <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why MAW Labs */}
      <section className="px-6 py-24 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Most software agencies sell{" "}
                <span className="text-zinc-500">hours.</span>
                <br />
                We sell{" "}
                <span className="gradient-text">outcomes.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Before we write a line of code, we agree on a specific, measurable result. Time saved. Error rate reduced. Revenue increased. That number is what we build toward — and what we report back on delivery.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-violet-400 font-medium hover:text-violet-300 transition-colors"
              >
                How we work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {differentiators.map((d) => (
                <div key={d.title} className="flex gap-4 p-5 rounded-xl border border-white/5 bg-zinc-900/50">
                  <div className="h-9 w-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                    <d.icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">{d.title}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              How an engagement works
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No retainer until you've seen what we're building. No ambiguity on scope. No surprises on delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <div key={p.step} className="relative">
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-[60%] right-0 h-px bg-gradient-to-r from-violet-500/30 to-transparent" />
                )}
                <div className="text-4xl font-bold gradient-text mb-4">{p.step}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8 border-t border-white/5">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative rounded-3xl overflow-hidden border border-violet-500/20 bg-gradient-to-b from-violet-500/10 to-transparent p-12 glow">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Ready to build something that works?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Start with a free AI audit. We'll identify exactly where automation creates the most leverage for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/25 hover:from-violet-500 hover:to-violet-400 transition-all duration-200"
            >
              Book a free audit
              <ArrowRight size={18} />
            </Link>
            <p className="text-zinc-600 text-xs mt-4">No commitment. No sales pitch. Just a written report.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
