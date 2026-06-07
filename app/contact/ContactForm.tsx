"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact } from "./actions";
import { CheckCircle2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-violet-400 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending…" : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, null);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="h-14 w-14 rounded-full bg-emerald-500/10 flex items-center justify-center">
          <CheckCircle2 size={28} className="text-emerald-400" />
        </div>
        <h3 className="text-xl font-semibold">Message received.</h3>
        <p className="text-zinc-400 text-sm max-w-xs">
          We'll be in touch within one business day. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state?.error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Company <span className="text-zinc-600">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Acme Corp"
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-1.5">
          What are you interested in?
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors"
        >
          <option value="">Select a service</option>
          <option value="ai-audit">Free AI Audit</option>
          <option value="ai-automation">AI Automation & Agents</option>
          <option value="custom-software">Custom Software Development</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="cloud-devops">Cloud & DevOps</option>
          <option value="data-analytics">Data & Analytics Engineering</option>
          <option value="other">Other / Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1.5">
          Tell us what you're working on
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Describe the workflow you want to automate, the software you need built, or the problem you're trying to solve."
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 transition-colors resize-none"
        />
      </div>

      <SubmitButton />

      <p className="text-center text-xs text-zinc-600">
        We respond within one business day. No cold outreach — we only reply to people who reach out first.
      </p>
    </form>
  );
}
