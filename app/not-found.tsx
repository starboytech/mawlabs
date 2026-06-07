import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-[80vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-sm font-mono text-blue-400 mb-4 uppercase tracking-widest">404</p>
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Page not found</h1>
        <p className="text-zinc-400 mb-10 leading-relaxed">
          This page doesn&apos;t exist. It may have moved or the URL may be wrong.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-blue-400 transition-all duration-200"
          >
            <Home size={16} />
            Back to home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-white/20 hover:text-white transition-all duration-200"
          >
            View services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
