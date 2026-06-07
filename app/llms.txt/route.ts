import { NextResponse } from "next/server";

const BASE = "https://mawlabs.ai";

const content = `# MAW Labs
> AI-native engineering company. We build AI automation, custom software, cybersecurity, cloud architecture, and data engineering systems for US businesses.

MAW Labs delivers software that creates measurable outcomes — not just features. Every engagement starts with a free AI audit: we map your workflow, find the automation wins, and deliver a written report. No commitment required.

## Services

- AI Automation & Agents: [/services](${BASE}/services)
- Custom Software Development: [/services](${BASE}/services)
- Cybersecurity: [/services](${BASE}/services)
- Cloud & DevOps (AWS): [/services](${BASE}/services)
- Data & Analytics Engineering: [/services](${BASE}/services)

## Products

- CramRocket — AI study platform built by MAW Labs: [cramrocket.com](https://cramrocket.com)

## Pages

- About MAW Labs: [/about](${BASE}/about)
- How we work and pricing: [/pricing](${BASE}/pricing)
- Work we've shipped: [/work](${BASE}/work)
- Blog (AI engineering insights): [/blog](${BASE}/blog)
- Contact / Free AI Audit: [/contact](${BASE}/contact)

## Contact

Email: contact@mawlabs.ai
Free AI audit booking: [/contact](${BASE}/contact)

## About

Founded by Mohamed Yusuf, a software engineer building production AI systems in parallel with a BS in Software Engineering at WGU. MAW Labs is the engineering company behind CramRocket, which launched July 2026 and reached paying users within 30 days.

Stack: Next.js 15, TypeScript, PostgreSQL, Supabase, pgvector, Gemini 2.5, OpenAI, AWS, Terraform, GitHub Actions, Vercel, Stripe.
`;

export function GET() {
  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
