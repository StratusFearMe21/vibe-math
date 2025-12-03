import Link from "next/link";

export default function FactorialsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-serif italic text-red-500 mb-6 font-bold opacity-80">!</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Factorials
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Why are you shouting at the numbers?
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              You see a nice, calm number like <span className="font-mono text-green-600">5</span>. Then someone puts an exclamation mark next to it: <span className="font-mono text-red-500">5!</span>. Suddenly it explodes into <span className="font-mono text-red-500">120</span>.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              It&apos;s too aggressive. Numbers should grow at a reasonable, steady pace. Factorials are the mathematical equivalent of losing your temper. They escalate things way too quickly for no good reason.
            </p>
            <p className="text-xl leading-relaxed">
              And the notation is literally a scream. Math should be a whisper, a gentle suggestion. Not a command screamed in your face. Calm down, numbers.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 1/10 - Far too loud
          </div>
        </div>
      </main>
    </div>
  );
}
