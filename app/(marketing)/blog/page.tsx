import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Clock, Tag } from "lucide-react";

const BASE = "https://mawlabs.ai";

export const metadata: Metadata = {
  title: "Blog — AI Engineering Insights",
  description:
    "Practical writing on AI automation, RAG pipelines, custom software, and engineering for production. From the team building CramRocket and MAW Labs.",
  alternates: { canonical: `${BASE}/blog` },
  openGraph: {
    title: "Blog — MAW Labs AI Engineering",
    description: "Practical writing on AI automation, RAG pipelines, and custom software engineering.",
    url: `${BASE}/blog`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
  ],
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const streakStyle = { background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 8%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.04) 92%, transparent 100%)" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Header */}
      <section className="px-6 pt-24 pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-blue-400 mb-4 uppercase tracking-widest">Blog</p>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Engineering{" "}
            <span className="gradient-text">in the open.</span>
          </h1>
          <p className="text-zinc-400 text-xl leading-relaxed">
            Practical writing on AI automation, RAG systems, and custom software. What we built, what broke, and what we'd do differently.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 pt-0 pb-24 lg:px-8">
        <div className="h-px w-full mb-16" style={streakStyle} />
        <div className="mx-auto max-w-3xl">
          {posts.length === 0 ? (
            <p className="text-zinc-500">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="flex flex-wrap gap-2 mb-3">
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

                    <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white mb-3 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-zinc-400 leading-relaxed mb-4">{post.description}</p>

                    <div className="flex items-center gap-4 text-sm text-zinc-600">
                      <span>{formatDate(post.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readingTime}
                      </span>
                    </div>
                  </Link>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 hover:text-blue-300 mt-4 transition-colors group/link"
                  >
                    Read more
                    <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>

                  <div className="mt-10 border-t border-white/5" />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
