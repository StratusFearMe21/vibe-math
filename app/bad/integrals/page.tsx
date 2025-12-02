import Link from "next/link";

export default function IntegralsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-red-500 mb-6 font-bold opacity-80">∫</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Integrals
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Trying too hard to be elegant.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              It&apos;s just a stretched-out &apos;S&apos;. We all see it. You aren&apos;t fooling anyone.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              They say it stands for &quot;Sum&quot;, but we already have a perfectly good symbol for adding things: <span className="font-mono text-green-600 bg-green-50 px-2 rounded">+</span>. 
              Why do we need a tall, skinny S to do the same thing but harder?
            </p>
            <p className="text-xl leading-relaxed">
              It represents &quot;area under a curve.&quot; But ask yourself: in your daily life, how often do you need to know the 
              <em>exact</em> area under a squiggly line? Just estimate it. Draw a rectangle. Call it a day. 
              Integrals encourage perfectionism, and perfectionism is the enemy of vibes.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 3/10 - Pretentious
          </div>
        </div>
      </main>
    </div>
  );
}
