import Link from "next/link";

export default function ModulusPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">%</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Modulus
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Stop asking me for the remainder.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Division was hard enough. Now you want me to divide, throw away the answer, and just keep the leftovers? <span className="font-mono text-red-500">Modulus</span> is the dumpster diving of arithmetic.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              "It's like a clock!" they say. No, a clock is a clock. Numbers are supposed to go up, not wrap around in a circle like a confused dog chasing its tail. <span className="font-mono text-red-500">12 + 1 = 1</span>? Get out of here.
            </p>
            <p className="text-xl leading-relaxed">
              And don't get me started on the symbol. <span className="font-mono text-red-500">%</span>. It looks like a fraction that fell over. It's confusing, it's messy, and it makes simple addition stressful.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 2/10 - Disorienting
          </div>
        </div>
      </main>
    </div>
  );
}
