import Link from "next/link";

export default function RecurringPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-red-500 mb-6 font-bold opacity-80 tracking-tighter">0.9<span className="overline">9</span></div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            0.999... = 1
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The gaslighting of the number line.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              We all know the proof. <span className="font-mono text-red-500">1/3 = 0.333...</span> Multiply by 3. Suddenly <span className="font-mono text-red-500">0.999... = 1</span>.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Intellectually? Sure. Fine. Whatever. Emotionally? Absolutely not. It is an uncomfortable truth that we are forced to accept.
            </p>
            <p className="text-xl leading-relaxed">
              If I have 0.999... of a cake, I am still missing a crumb. Mathematicians tell you the crumb is infinitely small so it doesn&apos;t matter. I say I want my crumb back.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 0.999.../10 - Just be 1 already
          </div>
        </div>
      </main>
    </div>
  );
}
