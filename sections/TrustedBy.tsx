export default function TrustedBy() {
  const companies = [
    "Microsoft",
    "OpenAI",
    "Amazon",
    "Stripe",
    "Notion",
    "Vercel",
  ];

  return (
    <section className="bg-black py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-center text-sm uppercase tracking-[0.3em] text-gray-500 mb-12">
          Trusted by modern AI teams
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company}
              className="text-center text-gray-600 font-semibold text-xl hover:text-white transition"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}