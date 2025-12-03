import Link from "next/link";
import Calculator from "@/components/Calculator";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <header className="mb-20 text-center">
          <h1 className="text-6xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Vibe Math
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Why anything beyond 4th grade arithmetic is ruining the vibe.
          </p>
        </header>

        <section className="mb-16">
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-xl leading-relaxed">
              We need to talk about math. Somewhere along the way, we lost the plot. 
              We went from the purity of adding apples to the chaos of imaginary numbers. 
              It&apos;s time to return to tradition. It&apos;s time to reject the squiggly lines.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-green-600/10 hover:border-green-600/30 transition-all">
            <h2 className="text-3xl font-bold mb-4 text-green-600 flex items-center gap-3">
              <span className="text-4xl">😊</span> The Good
            </h2>
            <div className="space-y-4">
              <Link href="/good/plus" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-green-50 p-4 rounded-xl text-green-800 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span>+</span> Plus
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/good/minus" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-green-50 p-4 rounded-xl text-green-800 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span>-</span> Minus
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/good/times" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-green-50 p-4 rounded-xl text-green-800 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span>*</span> Times
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/good/divide" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-green-50 p-4 rounded-xl text-green-800 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span>/</span> Divide
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>
            <p className="mt-6 text-gray-600">
              Clean. Honest. You know exactly what they do. No hidden agendas. 
              Just pure numerical manipulation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-[#ff6b6b]/10 hover:border-[#ff6b6b]/30 transition-all">
            <h2 className="text-3xl font-bold mb-4 text-red-500 flex items-center gap-3">
              <span className="text-4xl">🤢</span> The Bad
            </h2>
            <div className="space-y-4">
              <Link href="/bad/brackets" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span>[]</span> Brackets
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/integrals" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span>∫</span> Integrals
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/roots" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span>√</span> Roots
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/imaginary" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic ">i</span> Imaginary numbers
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/trig" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">θ</span> Trig Identities
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/limits" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">lim</span> Limits
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/recurring" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span>0.9<span className="overline">9</span></span> 0.999...
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/variables" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">x</span> Variables
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/exponents" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">x⁻¹</span> Weird Exponents
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/cosecant" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">csc</span> Cosecant
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/modulus" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">%</span> Modulus
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/factorials" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">!</span> Factorials
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/approx" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">≈</span> Approximately
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
              <Link href="/bad/logs" className="block group">
                <div className="flex items-center gap-4 text-2xl font-mono bg-red-50 p-4 rounded-xl text-red-800 opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all cursor-pointer">
                  <span className="flex items-center gap-4 line-through decoration-red-500">
                    <span className="font-serif italic">log</span> Logarithms
                  </span>
                  <span className="ml-auto text-lg opacity-40 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </div>
            <p className="mt-6 text-gray-600">
              Aggressive shapes. Unnecessary complexity. Just looking at them raises 
              cortisol levels. Why are they so pointy?
            </p>
          </div>
        </section>

        <section className="bg-[#fff5f5] rounded-3xl p-12 text-center mb-16 border border-[#ffd1d1]">
          <h2 className="text-3xl font-bold mb-6 text-[#d63031]">The Manifesto</h2>
          <ul className="text-left max-w-lg mx-auto space-y-4 text-lg text-gray-700">
            <li className="flex gap-4">
              <span className="text-[#d63031] font-bold text-xl">1.</span>
              If you can&apos;t calculate it on a napkin in 30 seconds, it&apos;s not worth knowing.
            </li>
            <li className="flex gap-4">
              <span className="text-[#d63031] font-bold text-xl">2.</span>
              Symbol complexity correlates directly with bad vibes. Keep it simple.
            </li>
            <li className="flex gap-4">
              <span className="text-[#d63031] font-bold text-xl">3.</span>
              Variables are suspicious. Who is &apos;x&apos;? What are they hiding?
            </li>
            <li className="flex gap-4">
              <span className="text-[#d63031] font-bold text-xl">4.</span>
              Calculus is just anxiety with better PR.
            </li>
          </ul>
        </section>

        <Calculator />

        <footer className="text-center text-gray-400 text-sm">
          <p>Made with only +, -, *, and / in mind.</p>
        </footer>
      </main>
    </div>
  );
}
