import Link from "next/link";

export default function ExponentsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">x⁻¹</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Weird Exponents
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Why are numbers floating? And why are they negative?
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Exponents were fine when they just meant "multiply this number by itself." <span className="font-mono text-green-600">2³</span> is just <span className="font-mono text-green-600">2 * 2 * 2</span>. Wholesome. Honest.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              But then someone decided exponents could be negative. <span className="font-mono text-red-500">x⁻²</span>? What does it mean to multiply something by itself negative times? It's passive-aggressive math. It's flipping the script just to be difficult.
            </p>
            <p className="text-xl leading-relaxed">
              And fractional exponents? <span className="font-mono text-red-500">x½</span>? That's just a root in disguise. It's a root trying to look cool by hanging out in the superscript. We see through it.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 1/10 - Unnecessarily lofty
          </div>
        </div>
      </main>
    </div>
  );
}
