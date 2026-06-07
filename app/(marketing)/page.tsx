"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot, Code2, Shield, Cloud, BarChart3,
  ArrowRight, CheckCircle2, Zap, Target, Users,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";

const services = [
  {
    icon: Bot,
    title: "AI Automation & Agents",
    description:
      "Replace manual, repetitive workflows with AI agents that run 24/7. Document processing, customer support, lead qualification, invoice handling.",
    outcome: "Avg. 70% reduction in manual processing time",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Full-stack applications built AI-native from day one. Internal tools, client portals, SaaS products — built for your exact workflow.",
    outcome: "From concept to deployed product in 6–12 weeks",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Security audits, managed monitoring, and compliance prep. The average ransomware recovery for an SMB costs $120,000.",
    outcome: "SOC 2, HIPAA, GDPR compliance support",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud architecture on AWS, CI/CD pipelines, containerization, and cost optimization. Infrastructure defined in code.",
    outcome: "Avg. 35% reduction in cloud spend after optimization",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Engineering",
    description:
      "Connect your data sources, build pipelines, and surface insights in plain English. If you can't act on your data today, we fix that.",
    outcome: "From scattered data to decision-ready dashboards",
  },
];

const stats = [
  { value: "70%", label: "avg. reduction in manual processing time" },
  { value: "35%", label: "avg. reduction in cloud spend" },
  { value: "$120K", label: "avg. ransomware recovery cost — we prevent it" },
  { value: "12 wks", label: "concept to deployed product" },
];

const differentiators = [
  { icon: Zap, title: "AI-native by default", description: "Every system we build treats AI as core infrastructure — not a feature." },
  { icon: Target, title: "Outcomes, not hours", description: "Every engagement starts with a defined success metric. We measure what changes." },
  { icon: Users, title: "Small team, senior work", description: "No juniors learning on your project. Engineers who have shipped production systems." },
];

const auditFindings = [
  { workflow: "document_processing", detail: "6 hrs/day · 3 staff · fully automatable" },
  { workflow: "lead_qualification", detail: "manual scoring · 40 leads/wk · 80% automatable" },
  { workflow: "invoice_matching", detail: "3 hrs/wk · rule-based · fully automatable" },
  { workflow: "reporting_pipeline", detail: "weekly Excel exports · no live data · fully replaceable" },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="px-6 pt-32 pb-28 lg:pt-44 lg:pb-36 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-mono text-zinc-500 tracking-wide mb-8"
          >
            Based in the US · Billed by outcome · Open to new projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            We build software
            <br />
            <span className="gradient-text">that earns its keep.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            AI automation, custom software, cybersecurity, cloud architecture, and data engineering — for businesses that need measurable results, not just technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-200 overflow-hidden"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              Start with a free AI audit
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-base font-medium text-zinc-300 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              View services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pt-0 pb-16 lg:px-8">
        <div
          className="h-px w-full mb-16"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <div className="text-3xl font-bold font-mono text-white mb-1">{s.value}</div>
                <p className="text-xs text-zinc-500 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What an audit actually looks like */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">Free AI audit</p>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                We map what you're doing manually.
                <br />
                <span className="text-zinc-500">Then we quantify the cost.</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Every engagement starts with a 30-minute call and a written report. No commitment. We identify which workflows are costing you hours, and whether automation is worth it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
              >
                Book your free audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <FadeIn direction="left">
              <div className="rounded-xl bg-zinc-900 border border-white/8 p-6 font-mono text-sm">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <div className="h-3 w-3 rounded-full bg-zinc-700" />
                  <span className="ml-2 text-zinc-600 text-xs">maw-audit-report.txt</span>
                </div>
                <div className="text-zinc-500 mb-4 text-xs">// Workflow audit — Acme Legal (example)</div>
                <div className="space-y-2">
                  {auditFindings.map((f) => (
                    <div key={f.workflow} className="flex flex-col sm:flex-row sm:gap-3">
                      <span className="text-emerald-400 shrink-0">→</span>
                      <span className="text-zinc-200 shrink-0">{f.workflow}</span>
                      <span className="text-zinc-500 text-xs sm:text-sm">{f.detail}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-white/6 text-zinc-500">
                  est. hours recoverable per day:{" "}
                  <span className="text-white font-semibold">9.5 hrs</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Five service lines.{" "}
              <span className="gradient-text">One engineering standard.</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every service is built with AI embedded from the start — not as a feature, but as infrastructure.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div
                  className="rounded-2xl border border-white/8 p-6 bg-zinc-950 h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(37,99,235,0.10)", borderColor: "rgba(255,255,255,0.12)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <service.icon size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <CheckCircle2 size={13} />
                    {service.outcome}
                  </div>
                </motion.div>
              </StaggerItem>
            ))}

            <StaggerItem>
              <motion.div
                className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 flex flex-col justify-between h-full"
                whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.35)" }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <p className="text-sm text-blue-400 font-mono mb-2">$ maw audit --free</p>
                  <h3 className="font-bold text-xl mb-3">Book a free AI audit</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    We map your workflow, identify automation opportunities, and produce a written report — no commitment required.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-white transition-colors group"
                >
                  Schedule audit
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </StaggerItem>
          </StaggerGrid>
        </div>
      </section>

      {/* Why MAW Labs */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Most agencies sell{" "}
                <span className="text-zinc-500">hours.</span>
                <br />
                We sell{" "}
                <span className="gradient-text">outcomes.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Before we write a line of code, we agree on a specific, measurable result. Time saved. Error rate reduced. Revenue increased. That number is what we build toward.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
              >
                How we work
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <StaggerGrid className="grid grid-cols-1 gap-4">
              {differentiators.map((d) => (
                <StaggerItem key={d.title}>
                  <motion.div
                    className="flex gap-4 p-5 rounded-xl border border-white/5 bg-zinc-900/50"
                    whileHover={{ borderColor: "rgba(37,99,235,0.3)", backgroundColor: "rgba(37,99,235,0.04)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                      <d.icon size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">{d.title}</p>
                      <p className="text-zinc-400 text-sm leading-relaxed">{d.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>
      </section>

      {/* How an engagement works — terminal style */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-5xl">
          <FadeIn className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-3">
              How an engagement works
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl">
              No retainer until you have seen what we are building. No ambiguity on scope.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="rounded-xl bg-zinc-900 border border-white/8 overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/6 bg-zinc-900/80">
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <div className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="ml-2 text-zinc-600 text-xs font-mono">engagement.log</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-4">
                <div>
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">01</span>
                    <div>
                      <span className="text-blue-400 font-semibold">AI Audit</span>
                      <span className="text-zinc-600"> — no commitment</span>
                      <p className="text-zinc-500 text-xs mt-1 font-sans leading-relaxed">Map your workflow, identify automation opportunities, written report delivered within 5 business days.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/4 pt-4">
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">02</span>
                    <div>
                      <span className="text-blue-400 font-semibold">Proposal</span>
                      <span className="text-zinc-600"> — fixed scope</span>
                      <p className="text-zinc-500 text-xs mt-1 font-sans leading-relaxed">Defined deliverables, timeline, and outcome metric. You know exactly what you're paying for.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/4 pt-4">
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">03</span>
                    <div>
                      <span className="text-blue-400 font-semibold">Build</span>
                      <span className="text-zinc-600"> — weekly sprints</span>
                      <p className="text-zinc-500 text-xs mt-1 font-sans leading-relaxed">Working software every week, not status updates. You can use what we ship as we ship it.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-white/4 pt-4">
                  <div className="flex gap-3">
                    <span className="text-zinc-600 select-none">04</span>
                    <div>
                      <span className="text-emerald-400 font-semibold">Measure</span>
                      <span className="text-zinc-600"> — outcomes tracked</span>
                      <p className="text-zinc-500 text-xs mt-1 font-sans leading-relaxed">After delivery we track the metric we agreed on. Results become your case study — we publish the numbers.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ready to build something that works?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
            Start with a free AI audit. We will identify exactly where automation saves the most time and money for your business.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/25 hover:from-blue-500 hover:to-blue-400 transition-all duration-200 overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            Book a free audit
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-zinc-600 text-xs mt-4">No commitment. No sales pitch. Just a written report.</p>
        </FadeIn>
      </section>
    </div>
  );
}
