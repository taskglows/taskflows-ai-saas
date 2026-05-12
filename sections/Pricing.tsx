const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "5 AI workflows",
      "Basic automations",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    features: [
      "Unlimited workflows",
      "AI automations",
      "Advanced integrations",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited everything",
      "Dedicated infrastructure",
      "Enterprise security",
      "Custom AI systems",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
            Pricing
          </p>

          <h2 className="text-5xl font-bold text-white">
            Simple pricing for modern teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-10 hover:bg-white/10 transition"
            >
              <h3 className="text-3xl font-bold text-white mb-4">
                {plan.name}
              </h3>

              <p className="text-5xl font-bold text-white mb-8">
                {plan.price}
              </p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-gray-400">
                    • {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}