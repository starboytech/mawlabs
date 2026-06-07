import type { Metadata } from "next";
import Link from "next/link";

const BASE = "https://mawlabs.ai";
const EFFECTIVE_DATE = "June 1, 2026";
const CONTACT_EMAIL = "contact@mawlabs.ai";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MAW Labs privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: `${BASE}/privacy` },
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

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-blue-400 mb-3 uppercase tracking-widest">Legal</p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-zinc-500 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose-zinc border-t border-white/5 pt-10">
          <Section title="1. Who we are">
            <p>
              MAW Labs LLC (&ldquo;MAW Labs&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates the website at{" "}
              <Link href="/" className="text-blue-400 hover:text-blue-300">
                mawlabs.ai
              </Link>
              . This policy explains what information we collect when you use our website or contact us, how we use it, and your rights.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>
              <strong className="text-zinc-200">Contact form submissions.</strong> When you fill out our contact form, we collect your name, email address, company name (optional), service interest, and message content. This information is submitted voluntarily and used only to respond to your inquiry.
            </p>
            <p>
              <strong className="text-zinc-200">Usage data.</strong> Our hosting provider (Vercel) automatically collects standard server logs including IP address, browser type, referring URL, and pages visited. This data is used for security and performance monitoring and is not linked to individual identities.
            </p>
            <p>
              <strong className="text-zinc-200">Cookies.</strong> We do not use tracking cookies or third-party advertising pixels. Vercel may set functional cookies required for site delivery.
            </p>
          </Section>

          <Section title="3. How we use your information">
            <ul className="list-disc list-inside space-y-2">
              <li>To respond to your inquiry or schedule a discovery call</li>
              <li>To send a follow-up related to your specific request</li>
              <li>To monitor and improve website performance and security</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information with third parties for marketing purposes. We do not use your information for automated profiling or unsolicited outreach.
            </p>
          </Section>

          <Section title="4. Third-party services">
            <p>
              <strong className="text-zinc-200">Resend.</strong> Contact form submissions are delivered via Resend (resend.com), an email delivery service. Your submitted data is transmitted to Resend servers to facilitate delivery. Resend&apos;s privacy policy is available at resend.com/legal/privacy-policy.
            </p>
            <p>
              <strong className="text-zinc-200">Vercel.</strong> Our website is hosted on Vercel (vercel.com). Vercel collects server-level access logs as described above. Vercel&apos;s privacy policy is available at vercel.com/legal/privacy-policy.
            </p>
          </Section>

          <Section title="5. Data retention">
            <p>
              Contact form submissions are retained for up to 12 months to allow for follow-up on business inquiries. You may request deletion at any time by emailing{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="6. Your rights">
            <p>
              You have the right to access, correct, or delete personal information we hold about you. To exercise any of these rights, email{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                {CONTACT_EMAIL}
              </a>{" "}
              with your request. We will respond within 30 days.
            </p>
            <p>
              If you are located in the European Economic Area, you have additional rights under the GDPR including the right to data portability and the right to lodge a complaint with your local supervisory authority.
            </p>
          </Section>

          <Section title="7. Children">
            <p>
              Our website is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has submitted information to us, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this policy as our practices change. Material changes will be reflected with an updated effective date at the top of this page. Continued use of the website after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="9. Contact">
            <p>
              Questions about this policy?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">
                {CONTACT_EMAIL}
              </a>
              {" "}or use the{" "}
              <Link href="/contact" className="text-blue-400 hover:text-blue-300">
                contact form
              </Link>
              .
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
