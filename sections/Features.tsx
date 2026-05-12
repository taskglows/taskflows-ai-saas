const features = [
  {
    title: "AI Workflows",
    description:
      "Create intelligent automations powered by modern AI systems.",
  },
  {
    title: "Document AI",
    description:
      "Upload files and let AI extract, summarize and automate tasks.",
  },
  {
    title: "Team Collaboration",
    description:
      "Enterprise-grade workspace for teams and departments.",
  },
  {
    title: "API Integrations",
    description:
      "Connect with Microsoft 365, Slack, Notion and external APIs.",
  },
];

export default function Features() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Platform Features
          </p>

          <h2 className="text-5xl font-bold text-white">
            Everything your AI team needs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}