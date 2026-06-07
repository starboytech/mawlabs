import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";

const BASE = "https://mawlabs.ai";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${BASE}/blog/${slug}` },
    openGraph: {
      title: `${post.title} | MAW Labs`,
      description: post.description,
      url: `${BASE}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["MAW Labs"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="text-3xl font-bold text-white mt-10 mb-4 leading-tight" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="text-xl font-bold text-white mt-10 mb-4 border-l-2 border-blue-500 pl-4" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="text-lg font-semibold text-zinc-200 mt-8 mb-3" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-zinc-300 leading-relaxed mb-5" {...props} />
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isExternal = href?.startsWith("http");
    if (!href || href.startsWith("javascript:")) return <span>{children}</span>;
    return (
      <Link
        href={href}
        className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  },
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc list-inside text-zinc-300 space-y-2 mb-5 pl-2" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal list-inside text-zinc-300 space-y-2 mb-5 pl-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="bg-zinc-800 text-blue-300 px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-zinc-900 border border-white/5 rounded-xl p-5 overflow-x-auto text-sm font-mono text-zinc-300 mb-6" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-4 border-amber-500/50 pl-5 italic text-zinc-400 my-6" {...props} />
  ),
  hr: () => <hr className="border-white/10 my-10" />,
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-zinc-100" {...props} />
  ),
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: "MAW Labs", url: BASE },
    publisher: { "@type": "Organization", name: "MAW Labs", url: BASE },
    url: `${BASE}/blog/${slug}`,
  };

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <section className="px-6 pt-20 pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full"
              >
                <Tag size={10} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-white mb-5 leading-snug">
            {post.title}
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">{post.description}</p>

          <div className="flex items-center gap-4 text-sm text-zinc-600">
            <span className="font-medium text-zinc-500">MAW Labs</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pt-0 pb-16 lg:px-8">
        <div className="h-px w-full mb-16" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }} />
        <div className="mx-auto max-w-3xl prose-none">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div className="h-px w-full mb-16" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" }} />
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-white/5 bg-zinc-900/40 p-8">
            <p className="text-sm font-medium text-blue-400 uppercase tracking-widest mb-3">MAW Labs</p>
            <h3 className="text-xl font-bold text-white mb-3">
              Want to talk through your use case?
            </h3>
            <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
              Start with the free AI audit — we'll map your workflow and show you where automation saves the most time and money.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
            >
              Book a free audit
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
