import Link from "next/link";

export default function LimitsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">lim</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Limits
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The mathematical equivalent of &quot;I&apos;m not touching you!&quot;
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              It approaches, but never touches. It gets infinitely close, but never arrives. It is the definition of commitment issues.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              And the <span className="font-mono text-red-500">ε-δ</span> definition? &quot;For every epsilon greater than zero...&quot; stop. Just stop. If you have to use Greek letters to explain why you are close to something, you aren&apos;t close enough.
            </p>
            <p className="text-xl leading-relaxed">
              Limits are the gateway drug to Calculus. They take perfectly good, solid numbers and turn them into ghosts. Nothing is exact anymore, everything is just &quot;approaching&quot;.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 0/10 - Stop hovering
          </div>
        </div>
      </main>
    </div>
  );
}
