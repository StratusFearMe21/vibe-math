import Link from "next/link";

export default function TrigPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">θ</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Trig Identities
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Circles don&apos;t need to be this complicated.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Why does <span className="font-mono text-red-500">sin²(x) + cos²(x) = 1</span>? Who decided that? It feels like a secret code we were forced to memorize but never actually use.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Then there are the &quot;reciprocal identities&quot;. Secant? Cosecant? Cotangent? It&apos;s just math trying to sound fancy. If you need 6 different names for relations between 3 sides of a triangle, you&apos;re trying too hard.
            </p>
            <p className="text-xl leading-relaxed">
              And don&apos;t get me started on the double-angle formulas. They are shape-shifters. They change form just when you think you understand them. Trust issues, defined.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 1/10 - Too many aliases
          </div>
        </div>
      </main>
    </div>
  );
}
