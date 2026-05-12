export default function Hero() {
  return (
    <section className="min-h-screen pt-40 bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        
        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          AI Automation Platform
        </div>

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
          Automate
          <span className="block text-gray-400">
            Everything
          </span>
        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Enterprise-grade AI workflows, automations and intelligent systems
          built for modern companies.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
            Start Free
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
            Book Demo
          </button>
        </div>

      </div>
    </section>
  );
}