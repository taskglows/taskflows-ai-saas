export default function DashboardPreview() {
  return (
    <section className="bg-black py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            AI Dashboard
          </p>

          <h2 className="text-5xl font-bold text-white mb-6">
            Control your AI workflows
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Manage automations, monitor AI agents and orchestrate enterprise workflows from a single dashboard.
          </p>
        </div>

        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl" />

          <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

            <div className="grid md:grid-cols-3 gap-6">

              <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
                <p className="text-gray-400 text-sm mb-2">
                  Active Workflows
                </p>

                <h3 className="text-4xl font-bold text-white">
                  128
                </h3>
              </div>

              <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
                <p className="text-gray-400 text-sm mb-2">
                  AI Agents
                </p>

                <h3 className="text-4xl font-bold text-white">
                  42
                </h3>
              </div>

              <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
                <p className="text-gray-400 text-sm mb-2">
                  Automations
                </p>

                <h3 className="text-4xl font-bold text-white">
                  2.4k
                </h3>
              </div>

            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-10 min-h-[300px] flex items-center justify-center">
              <p className="text-gray-500 text-xl">
                AI Workflow Visualization Coming Soon
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}