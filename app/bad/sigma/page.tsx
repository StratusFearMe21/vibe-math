import Link from "next/link";

export default function SigmaPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-red-500 mb-6 font-bold opacity-80">∑</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Sigma
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            Stop shouting at me.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              Look at how sharp it is. It&apos;s basically a jagged &apos;E&apos; that could cut your finger if you touch it.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Sigma demands you to do the same task over and over again. It&apos;s the micromanager of mathematics. 
              &quot;Add this! Then add it again! Then do it 100 more times!&quot;
            </p>
            <p className="text-xl leading-relaxed">
              It&apos;s loud. It&apos;s aggressive. It takes up too much vertical space. 
              It&apos;s trying to act cool by using a Greek letter, but we know it&apos;s just a glorified 
              To-Do list that never ends.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 1/10 - Too pointy
          </div>
        </div>
      </main>
    </div>
  );
}
