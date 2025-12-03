import Link from "next/link";

export default function VariablesPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">x</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Variables
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Who are they hiding from?
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Why do we need <span className="font-mono text-red-500">x</span>? Why do we need <span className="font-mono text-red-500">y</span>? Numbers were doing just fine on their own. Introducing letters into math is like bringing a lawyer to a casual lunch—suddenly everything is suspicious and contractual.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              "Solve for x." Why? Did x ask to be found? Maybe x wants to be left alone. The obsession with finding the value of unknown entities is a clear sign of trust issues.
            </p>
            <p className="text-xl leading-relaxed">
              And don't get me started on when they start using Greek letters. It's pretentious. Stick to <span className="font-mono text-green-600">1, 2, 3</span>. We know what those are. They're honest.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: Low/10 - Suspiciously vague
          </div>
        </div>
      </main>
    </div>
  );
}
