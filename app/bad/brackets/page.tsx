import Link from "next/link";

export default function BracketsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-red-500 mb-6 font-bold opacity-80">[]</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Brackets
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            The prison cells of mathematics.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Look at them. Rigid. Angular. Unforgiving. 
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Parentheses <span className="font-mono text-green-600 bg-green-50 px-2 rounded">()</span> are acceptable. 
              They curve. They embrace. They hug the numbers gently.
            </p>
            <p className="text-xl leading-relaxed">
              Square brackets <span className="font-mono text-red-600 bg-red-50 px-2 rounded">[]</span> are walls. 
              They box things in. They create harsh boundaries where none should exist. 
              They remind us of matrices, which are essentially just spreadsheets having an identity crisis. 
              A number should be free to float, not locked in a solitary confinement cell made of four right angles.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 2/10 - Too claustrophobic
          </div>
        </div>
      </main>
    </div>
  );
}
