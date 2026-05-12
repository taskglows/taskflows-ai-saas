"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      setEmail(user.email || "");
    }

    getUser();
  }, []);

  async function handleLogout() {
    await supabase.auth.signOut();

    window.location.href = "/";
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back {email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-white/10 px-6 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-2">
              AI Workflows
            </h2>

            <p className="text-gray-400">
              Create intelligent automations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-2">
              API Integrations
            </h2>

            <p className="text-gray-400">
              Connect external systems.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold mb-2">
              Analytics
            </h2>

            <p className="text-gray-400">
              Monitor workflow activity.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}