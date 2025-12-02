import Link from "next/link";

export default function PlusPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#cfffe1]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-green-600 transition-colors mb-12 block">
          ← Back to the vibe
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-green-500 mb-6 font-bold opacity-80">+</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-green-600">
            Plus
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The bringer of abundance.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-green-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              It starts here. One plus one. Me plus you. Coffee plus donut.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              There is nothing hidden in a <span className="font-mono text-green-600 bg-green-50 px-2 rounded">+</span> sign. 
              It stands with its arms open, welcoming more numbers into the fold. It is the most optimistic of all symbols.
            </p>
            <p className="text-xl leading-relaxed">
              Compare this to Sigma <span className="font-mono text-red-600 bg-red-50 px-2 rounded">∑</span>. 
              Sigma is just &quot;Plus&quot; trying to look smart in a tuxedo, shouting at you to add up an infinite series. 
              Plus is your friend who just wants to give you another slice of pizza.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#f0fff4] px-8 py-4 rounded-full text-[#166534] font-bold text-lg border border-[#bbf7d0]">
            Vibe Rating: 10/10 - Pure gain
          </div>
        </div>
      </main>
    </div>
  );
}
