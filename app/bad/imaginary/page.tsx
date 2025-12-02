import Link from "next/link";

export default function ImaginaryPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">i</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Imaginary Numbers
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Gaslighting in mathematical form.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              The name says it all. They aren&apos;t real. Mathematicians just made them up because they couldn&apos;t handle the fact that <span className="font-mono text-red-500">x² + 1 = 0</span> has no solution.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              You can&apos;t have <span className="font-serif italic">i</span> apples. You can&apos;t walk <span className="font-serif italic">i</span> miles. It&apos;s a ghost number that haunts equations for no reason other than to make things difficult.
            </p>
            <p className="text-xl leading-relaxed">
              They complicate everything they touch. Suddenly you have a &quot;complex plane&quot; and &quot;rotations&quot;. Math is supposed to be counting, not spinning around in imaginary dimensions.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 0/10 - Literally fake news
          </div>
        </div>
      </main>
    </div>
  );
}
