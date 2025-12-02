import Link from "next/link";

export default function RootsPage() {
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#2c2c2c] font-sans selection:bg-[#ffcfcf]">
      <main className="max-w-3xl mx-auto px-6 py-24">
        <Link href="/" className="text-gray-400 hover:text-[#ff6b6b] transition-colors mb-12 block">
          ← Back to safety
        </Link>
        
        <header className="mb-16 text-center">
          <div className="text-8xl font-mono text-red-500 mb-6 font-bold opacity-80">√</div>
          <h1 className="text-5xl font-black mb-6 tracking-tight text-[#ff6b6b]">
            Roots
          </h1>
          <p className="text-2xl font-medium text-gray-600">
            A roof that collapsed on one side.
          </p>
        </header>

        <section className="bg-white p-12 rounded-3xl shadow-sm border-2 border-red-100 mb-16">
          <div className="prose prose-lg mx-auto">
            <p className="text-xl leading-relaxed mb-6">
              It looks like a shelter, but it&apos;s a trap. It traps numbers underneath it and refuses to let them out whole.
            </p>
            <p className="text-xl leading-relaxed mb-6">
              Square root of 9? Sure, that&apos;s 3. But square root of 2? <span className="font-mono text-red-500">1.41421356...</span> it never ends. 
              It goes on forever. Irrational numbers are the definition of bad vibes. They are unresolved tension.
            </p>
            <p className="text-xl leading-relaxed">
              If a number can&apos;t make up its mind and finish, it shouldn&apos;t be used. 
              Roots introduce uncertainty and infinity into a world that should be finite and cozy.
            </p>
          </div>
        </section>

        <div className="text-center">
          <div className="inline-block bg-[#fff5f5] px-8 py-4 rounded-full text-[#d63031] font-bold text-lg border border-[#ffd1d1]">
            Vibe Rating: 0/10 - Unresolved issues
          </div>
        </div>
      </main>
    </div>
  );
}
