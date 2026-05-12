export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="text-2xl font-bold text-white">
          TaskFlows AI
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-white transition">
            Features
          </a>

          <a href="#" className="hover:text-white transition">
            Solutions
          </a>

          <a href="#" className="hover:text-white transition">
            Pricing
          </a>

          <a href="#" className="hover:text-white transition">
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition">
            Sign In
          </button>

          <button className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition">
            Start Free
          </button>
        </div>

      </div>
    </header>
  );
}