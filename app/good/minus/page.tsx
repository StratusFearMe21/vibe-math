import Link from "next/link";

export default function MinusPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#cfffe1]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-green-600 transition-colors mb-12 block">
          ← Back to the vibe
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-green-500 mb-6 font-bold opacity-80">-</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-green-600">
            Minus
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The art of simplicity.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-green-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              In a world of clutter, Minus is the minimalist hero we deserve.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              It removes the bad. It subtracts the debt. It takes away the worry. 
              A simple horizontal line that says &quot;calm down, let&apos;s have less of that.&quot;
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#f0fff4] px-8 py-4 rounded-full text-[#166534] font-bold text-lg border border-[#bbf7d0]">
            Vibe Rating: 9/10 - Cleansing
          </div>
        </div>
      </main>
    </div>
  );
}
