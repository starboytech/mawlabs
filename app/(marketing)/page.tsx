"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot, Code2, Shield, Cloud, BarChart3,
  ArrowRight, CheckCircle2, Zap, Target, Users,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { StaggerGrid, StaggerItem } from "@/components/StaggerGrid";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypewriterText from "@/components/TypewriterText";

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
  { value: 70, suffix: "%", label: "avg. reduction in manual processing time" },
  { value: 35, suffix: "%", label: "avg. reduction in cloud spend" },
  { value: 120, suffix: "K", prefix: "$", label: "avg. ransomware recovery cost — we prevent it" },
  { value: 12, suffix: " wks", label: "concept to deployed product" },
];

const differentiators = [
  { icon: Zap, title: "AI-native by default", description: "Every system we build treats AI as core infrastructure — not a feature." },
  { icon: Target, title: "Outcomes, not hours", description: "Every engagement starts with a defined success metric. We measure what changes." },
  { icon: Users, title: "Small team, senior work", description: "No juniors learning on your project. Engineers who have shipped production systems." },
];

const process = [
  { step: "01", title: "AI Audit", description: "Map your workflow, identify automation opportunities, written report. No commitment." },
  { step: "02", title: "Proposal", description: "Fixed-scope proposal with defined deliverables, timeline, and outcome metrics." },
  { step: "03", title: "Build", description: "Weekly sprints with visible progress. Working software, not status updates." },
  { step: "04", title: "Measure", description: "After delivery we track the outcome metric we agreed on. Results become your case study." },
];

export default function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-28 lg:pt-44 lg:pb-36 lg:px-8">
        {/* Background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]"
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 h-[400px] w-[400px] rounded-full bg-amber-500/6 blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-1.5 text-sm text-blue-300 mb-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
            AI-Native Engineering Company
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            We build{" "}
            <br className="hidden sm:block" />
            <TypewriterText />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            AI automation, custom software, cybersecurity, cloud architecture, and data engineering — for businesses that need measurable results, not just technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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

        {/* Glossy floor — polished dark surface catching light at the bottom of the hero */}
        <div className="absolute bottom-0 inset-x-0 pointer-events-none">
          {/* Soft ambient light bloom above the floor */}
          <div
            className="absolute bottom-0 inset-x-0 h-20"
            style={{
              background:
                "radial-gradient(ellipse 70% 100% at 50% 100%, rgba(255,255,255,0.025) 0%, transparent 70%)",
            }}
          />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-zinc-900/30 px-6 pt-0 pb-10 lg:px-8">
        <div
          className="h-px w-full mb-10"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-5xl">
          <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-3xl font-bold gradient-text mb-1">
                  <AnimatedCounter target={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p className="text-xs text-zinc-500 leading-snug">{s.label}</p>
              </StaggerItem>
            ))}
          </StaggerGrid>
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
                  className="gradient-border rounded-2xl p-6 bg-zinc-950 h-full flex flex-col"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(37,99,235,0.12)" }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.15, backgroundColor: "rgba(37,99,235,0.2)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <service.icon size={20} className="text-blue-400" />
                  </motion.div>
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
                className="rounded-2xl bg-gradient-to-br from-blue-600/20 to-amber-600/10 border border-blue-500/20 p-6 flex flex-col justify-between h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <p className="text-sm text-blue-300 font-medium mb-2">Not sure where to start?</p>
                  <h3 className="font-bold text-xl mb-3">Book a free AI audit</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    We map your workflow, identify automation opportunities, and produce a written report — no commitment required.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors group"
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

      {/* Process */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <div className="mx-auto max-w-7xl">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              How an engagement works
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              No retainer until you have seen what we are building. No ambiguity on scope.
            </p>
          </FadeIn>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <StaggerItem key={p.step}>
                <motion.div
                  className="relative p-5 rounded-xl border border-white/5 bg-zinc-900/30 h-full"
                  whileHover={{ borderColor: "rgba(37,99,235,0.25)", y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[80%] right-0 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
                  )}
                  <div className="text-4xl font-bold gradient-text mb-4">{p.step}</div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{p.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div
          className="h-px w-full mb-24"
          style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }}
        />
        <FadeIn className="mx-auto max-w-3xl text-center">
          <motion.div
            className="relative rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-12 glow"
            whileHover={{ boxShadow: "0 0 80px rgba(37,99,235,0.2), 0 0 160px rgba(245,158,11,0.08)" }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
              Ready to build something that works?
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-xl mx-auto">
              Start with a free AI audit. We will identify exactly where automation creates the most leverage for your business.
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
          </motion.div>
        </FadeIn>
      </section>
    </div>
  );
}
