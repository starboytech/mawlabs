import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
                M
              </div>
              <span className="font-semibold tracking-tight">
                MAW <span className="gradient-text">Labs</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed">
              AI-native engineering for businesses that need measurable results — not just software.
            </p>
            <p className="text-xs text-zinc-600 mt-4">
              © {new Date().getFullYear()} MAW Labs LLC. All rights reserved.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2">
              {[
                "AI Automation",
                "Custom Software",
                "Cybersecurity",
                "Cloud & DevOps",
                "Data Engineering",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-zinc-500 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "CramRocket", href: "https://cramrocket.com" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-zinc-500 hover:text-white transition-colors"
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
