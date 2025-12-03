import Link from "next/link";

export default function CosecantPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">csc</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Cosecant
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The third wheel of trigonometry.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Everyone knows sine and cosine. They're the popular kids. Even tangent gets invited to parties. But <span className="font-mono text-red-500">cosecant</span>? It's just trying too hard.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              It's literally just <span className="font-mono text-red-500">1/sin</span>. Why does it need its own name? It's a reciprocal with an ego problem. "Ooh, look at me, I'm the hypotenuse over the opposite side." Nobody cares.
            </p>
            <p className="text-xl leading-relaxed">
              And the abbreviation? <span className="font-mono text-red-500">csc</span>. It sounds like a hiss. It's unpleasant to say and unpleasant to calculate. Just flip sine and move on with your life.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 0/10 - Redundant and needy
          </div>
        </div>
      </main>
    </div>
  );
}
