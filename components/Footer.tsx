export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              TaskFlows AI
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Enterprise AI workflow automation platform for modern teams.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Product
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>AI Workflows</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Security</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">
              Resources
            </h4>

            <ul className="space-y-3 text-gray-400">
              <li>Documentation</li>
              <li>API</li>
              <li>Status</li>
              <li>Support</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 TaskFlows AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>

        </div>

      </div>
    </footer>
  );
}