"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

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
    <main className="bg-black text-white min-h-screen flex">

      <Sidebar />

      <section className="flex-1 p-10">

        <div className="flex items-center justify-between mb-12">

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
            className="border border-white/10 px-6 py-3 rounded-2xl hover:bg-white/10 transition"
          >
            Logout
          </button>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400 text-sm mb-3">
              Active Workflows
            </p>

            <h2 className="text-5xl font-bold">
              12
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400 text-sm mb-3">
              AI Agents
            </p>

            <h2 className="text-5xl font-bold">
              4
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400 text-sm mb-3">
              Executions
            </p>

            <h2 className="text-5xl font-bold">
              2.4k
            </h2>
          </div>

        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 min-h-[400px]">

          <div className="flex items-center justify-between mb-10">

            <div>
              <h2 className="text-3xl font-bold">
                Recent Workflows
              </h2>

              <p className="text-gray-400 mt-2">
                Monitor and manage your AI automations.
              </p>
            </div>

            <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition">
              Create Workflow
            </button>

          </div>

          <div className="space-y-4">

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  Invoice AI Processing
                </h3>

                <p className="text-gray-400 mt-1">
                  Active workflow
                </p>
              </div>

              <span className="text-green-400">
                Running
              </span>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  Email Security Scanner
                </h3>

                <p className="text-gray-400 mt-1">
                  Scheduled workflow
                </p>
              </div>

              <span className="text-yellow-400">
                Pending
              </span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}