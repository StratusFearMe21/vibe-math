import Link from "next/link";

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">log</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Logarithms
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The most pretentious way to ask &quot;how many times?&quot;
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Why do we need a three-letter word just to do math? <span className="font-mono text-red-500">log</span>. It looks like wood. It sounds like wood. It&apos;s about as flexible as wood.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              And then there&apos;s <span className="font-mono text-red-500">ln</span>. The &quot;Natural&quot; Logarithm. There is nothing natural about base <span className="italic">e</span> (2.718...). If nature counted like that, we&apos;d all be extinct.
            </p>
            <p className="text-xl leading-relaxed">
              The rules make no sense. Adding logs is multiplying? Subtracting is dividing? It&apos;s like they looked at perfectly good arithmetic and decided to run it through a funhouse mirror.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 2/10 - Passive aggressive
          </div>
        </div>
      </main>
    </div>
  );
}
