import type { Metadata } from "next";
import Link from "next/link";

const BASE = "https://mawlabs.ai";
const EFFECTIVE_DATE = "June 1, 2026";
const CONTACT_EMAIL = "contact@mawlabs.ai";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "MAW Labs terms of service — the conditions under which we provide engineering and consulting services.",
  alternates: { canonical: `${BASE}/terms` },
  robots: { index: true, follow: true },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 text-white">{title}</h2>
      <div className="text-zinc-400 leading-relaxed space-y-3 text-sm">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-zinc-500 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="border-t border-white/5 pt-10">
          <Section title="1. Agreement">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the MAW Labs LLC (&ldquo;MAW Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) website at mawlabs.ai and any services you engage us to provide. By using the website or entering into a service agreement with MAW Labs, you agree to these Terms.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              MAW Labs provides engineering and consulting services including AI automation, custom software development, cybersecurity auditing, cloud architecture, and data engineering. The specific scope, deliverables, timeline, and pricing for any engagement are defined in a separate written proposal or statement of work (&ldquo;SOW&rdquo;) agreed upon by both parties before work begins.
            </p>
            <p>
              The free AI audit described on our website is a preliminary assessment provided at our discretion. It does not constitute a binding engagement and creates no obligation on either party.
            </p>
          </Section>

          <Section title="3. Payment">
            <p>
              Payment terms are specified in each SOW. Unless otherwise stated, invoices are due within 15 business days of issuance. Late payments accrue interest at 1.5% per month. We reserve the right to pause work on any engagement with a past-due balance until payment is received.
            </p>
            <p>
              Fixed-scope proposals are priced for the defined scope. Changes to scope during an engagement require a written change order and may affect pricing and timeline.
            </p>
          </Section>

          <Section title="4. Intellectual property">
            <p>
              Upon receipt of full payment for a project, all custom work product created specifically for your engagement becomes your property. This excludes any pre-existing tools, libraries, frameworks, or internal utilities used in the build, which remain the property of MAW Labs or their respective owners.
            </p>
            <p>
              Open-source components used in your project are subject to their respective licenses, which we will document as part of the project handoff.
            </p>
          </Section>

          <Section title="5. Confidentiality">
            <p>
              Both parties agree to treat non-public information shared during an engagement as confidential and not to disclose it to third parties without written consent. This obligation survives the end of the engagement for a period of two years.
            </p>
          </Section>

          <Section title="6. Limitation of liability">
            <p>
              MAW Labs is not liable for indirect, incidental, consequential, or punitive damages arising from the use of our services or website. Our total liability for any claim arising out of a service engagement is limited to the fees paid by you for the specific engagement giving rise to the claim.
            </p>
            <p>
              We do not warrant that software we build will be free of defects. We commit to resolving material defects during an agreed post-delivery support period as specified in each SOW.
            </p>
          </Section>

          <Section title="7. Website use">
            <p>
              The mawlabs.ai website is provided for informational purposes. You may not use the website to transmit harmful, unlawful, or infringing content. We reserve the right to block access to the website for any reason.
            </p>
          </Section>

          <Section title="8. Governing law">
            <p>
              These Terms are governed by the laws of the United States. Any disputes arising under these Terms will be resolved by binding arbitration in accordance with the rules of the American Arbitration Association, unless both parties agree to another resolution method in writing.
            </p>
          </Section>

          <Section title="9. Changes">
            <p>
              We may update these Terms at any time. Material changes will be reflected with an updated effective date. Continued use of the website after changes constitutes acceptance of the updated Terms. Service agreements in effect at the time of a change are governed by the Terms in effect when the SOW was signed.
            </p>
          </Section>

          <Section title="10. Contact">
            <p>
              Questions about these Terms?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <Link href="/" className="text-sm text-zinc-500 hover:text-white transition-colors">
            ← Back to mawlabs.ai
          </Link>
        </div>
      </div>
    </div>
  );
}
