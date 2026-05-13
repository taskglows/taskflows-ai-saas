"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

type Workflow = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");

  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [newWorkflowTitle, setNewWorkflowTitle] = useState("");

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
    setUserId(user.id);
    await loadWorkflows(user.id);
    setLoading(false);
  }

  async function loadWorkflows(uid: string) {
    const { data, error } = await supabase
      .from("workflows")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false });

    if (error) {
      alert("Load error: " + error.message);
      return;
    }

    setWorkflows(data || []);
  }

  async function createWorkflow() {
    if (!newWorkflowTitle.trim()) {
      alert("Please enter workflow title");
      return;
    }

    const { error } = await supabase.from("workflows").insert({
      user_id: userId,
      title: newWorkflowTitle.trim(),
      description: "AI automation workflow",
      status: "active",
    });

    if (error) {
      alert("Create error: " + error.message);
      return;
    }

    setNewWorkflowTitle("");
    await loadWorkflows(userId);
  }

  async function deleteWorkflow(id: string) {
    const confirmed = confirm("Delete this workflow?");

    if (!confirmed) return;

    const { error } = await supabase
      .from("workflows")
      .delete()
      .eq("id", id)
      .eq("user_id", userId);

    if (error) {
      alert("Delete error: " + error.message);
      return;
    }

    await loadWorkflows(userId);
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
            <h1 className="text-5xl font-bold">Dashboard</h1>

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
              {workflows.length}
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400 text-sm mb-3">
              AI Agents
            </p>

            <h2 className="text-5xl font-bold">4</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-gray-400 text-sm mb-3">
              Executions
            </p>

            <h2 className="text-5xl font-bold">2.4k</h2>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10 min-h-[400px]">
          <div className="flex items-center justify-between mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-bold">
                Recent Workflows
              </h2>

              <p className="text-gray-400 mt-2">
                Monitor and manage your AI automations.
              </p>
            </div>

            <div className="flex gap-4">
              <input
                type="text"
                placeholder="New workflow title"
                value={newWorkflowTitle}
                onChange={(e) => setNewWorkflowTitle(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-3 text-white placeholder:text-gray-500"
              />

              <button
                onClick={createWorkflow}
                className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
              >
                Create Workflow
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {workflows.map((workflow) => (
              <div
                key={workflow.id}
                className="rounded-2xl border border-white/10 bg-black/40 p-6 flex items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {workflow.title}
                  </h3>

                  <p className="text-gray-400 mt-1">
                    {workflow.description}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-green-400">
                    {workflow.status}
                  </span>

                  <button
                    onClick={() => deleteWorkflow(workflow.id)}
                    className="border border-red-500/30 text-red-400 px-4 py-2 rounded-xl hover:bg-red-500/10 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            {workflows.length === 0 && (
              <div className="text-gray-500">
                No workflows yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}