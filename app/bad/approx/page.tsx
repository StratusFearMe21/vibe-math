import Link from "next/link";

export default function ApproxPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">≈</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Approximately
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Commitment issues in symbol form.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Math is supposed to be exact. <span className="font-mono text-green-600">2 + 2 = 4</span>. Not "around 4". Not "maybe 4ish". <span className="font-mono text-red-500">≈</span> is the shrug of mathematics.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              It&apos;s a wavy equals sign, literally bending the truth because it can&apos;t handle the precision. It&apos;s the symbol of "good enough" in a world that demands perfection.
            </p>
            <p className="text-xl leading-relaxed">
              If you don&apos;t know the answer, just admit it. Don&apos;t hide behind squiggly lines pretending you&apos;re close. It&apos;s weak. It&apos;s non-committal. It&apos;s bad vibes.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 3/10 - Wishy-washy
          </div>
        </div>
      </main>
    </div>
  );
}
