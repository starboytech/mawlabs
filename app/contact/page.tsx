import type { Metadata } from "next";
import { Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — MAW Labs",
  description: "Get in touch with MAW Labs. Start with a free AI audit or ask about a specific service.",
};

const details = [
  {
    icon: Clock,
    title: "Response time",
    description: "Within one business day. Usually faster.",
  },
  {
    icon: MessageSquare,
    title: "First step",
    description: "A 30-minute call to understand your workflow and where AI creates leverage.",
  },
  {
    icon: Mail,
    title: "Prefer email?",
    description: "contact@mawlabs.ai",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="relative px-6 py-24 lg:px-8 border-b border-white/5">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[500px] rounded-full bg-violet-600/8 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-violet-400 mb-4 uppercase tracking-widest">Contact</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Let's figure out{" "}
            <span className="gradient-text">what you need.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Start with the free AI audit — we'll map your workflow and show you exactly where automation and engineering create the most leverage. No commitment, no sales pressure.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-2">What happens next</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Send us a message. We'll read it, then schedule a 30-minute call to understand your workflow in depth. After the call, we'll produce a written AI audit — what we found, what we'd automate, and what it would cost. Then you decide.
                </p>
              </div>

              <div className="space-y-4">
                {details.map((d) => (
                  <div key={d.title} className="flex gap-3">
                    <div className="h-9 w-9 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                      <d.icon size={16} className="text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-zinc-200">{d.title}</p>
                      <p className="text-sm text-zinc-500">{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-white/5 bg-zinc-900/50 p-5">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-3">Also built by MAW Labs</p>
                <a
                  href="https://cramrocket.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="h-9 w-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-400">CR</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">CramRocket</p>
                    <p className="text-xs text-zinc-500">AI study platform — cramrocket.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="gradient-border rounded-2xl p-8 bg-zinc-950">
                <h2 className="text-lg font-bold mb-6">Send a message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
