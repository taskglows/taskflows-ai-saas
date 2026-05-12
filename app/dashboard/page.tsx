"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    setEmail(user.email || "");
    setLoading(false);
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-5xl font-bold">
              Dashboard
            </h1>

            <p className="text-gray-400 mt-2">
              Welcome back, {email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="border border-white/20 px-5 py-3 rounded-xl hover:bg-white/10 transition"
          >
            Logout
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold mb-3">
              AI Workflows
            </h2>

            <p className="text-gray-400">
              Create and manage automation systems.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold mb-3">
              Integrations
            </h2>

            <p className="text-gray-400">
              Connect external services and APIs.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold mb-3">
              Usage
            </h2>

            <p className="text-gray-400">
              Monitor AI usage and analytics.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}