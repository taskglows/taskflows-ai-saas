export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-black/60 backdrop-blur-xl min-h-screen p-6">

      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white">
          TaskFlows AI
        </h1>

        <p className="text-gray-500 mt-2 text-sm">
          AI workflow platform
        </p>
      </div>

      <nav className="space-y-3">

        <a
          href="/dashboard"
          className="block rounded-2xl bg-white/10 px-5 py-4 text-white"
        >
          Dashboard
        </a>

        <a
          href="#"
          className="block rounded-2xl px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition"
        >
          Workflows
        </a>

        <a
          href="#"
          className="block rounded-2xl px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition"
        >
          AI Agents
        </a>

        <a
          href="#"
          className="block rounded-2xl px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition"
        >
          Integrations
        </a>

        <a
          href="#"
          className="block rounded-2xl px-5 py-4 text-gray-400 hover:bg-white/5 hover:text-white transition"
        >
          Analytics
        </a>

      </nav>
    </aside>
  );
}