"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";

type Workflow = {
  id: string;
  title: string;
  description: string;
  status: string;
};

export default function WorkflowDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [workflow, setWorkflow] = useState<Workflow | null>(null);

  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState("");

  useEffect(() => {
    loadWorkflow();
  }, []);

  async function loadWorkflow() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      router.push("/login");
      return;
    }

    const { data, error } = await supabase
      .from("workflows")
      .select("*")
      .eq("id", params.id)
      .eq("user_id", user.id)
      .single();

    if (error || !data) {
      router.push("/dashboard");
      return;
    }

    setWorkflow(data);
    setLoading(false);
  }

  async function generateWorkflow() {
    if (!workflow) return;

    setAiLoading(true);
    setAiResult("");

    try {
      const response = await fetch("/api/generate-workflow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: workflow.title,
          description: workflow.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "AI generation failed");
        return;
      }

      setAiResult(data.result);
    } catch (error) {
      console.error(error);
      alert("AI request failed");
    } finally {
      setAiLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading workflow...
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen flex">
      <Sidebar />

      <section className="flex-1 p-10">
        <button
          onClick={() => router.push("/dashboard")}
          className="mb-8 border border-white/10 px-5 py-3 rounded-2xl hover:bg-white/10 transition"
        >
          ← Back
        </button>

        <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-gray-400 mb-3">Workflow Details</p>

              <h1 className="text-5xl font-bold">
                {workflow?.title}
              </h1>
            </div>

            <span className="text-green-400 text-lg">
              {workflow?.status}
            </span>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Description
              </h2>

              <p className="text-gray-400">
                {workflow?.description}
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
              <div className="flex items-center justify-between gap-6 mb-6">
                <div>
                  <h2 className="text-2xl font-semibold">
                    AI Execution
                  </h2>

                  <p className="text-gray-400 mt-2">
                    Generate a structured workflow plan using AI.
                  </p>
                </div>

                <button
                  onClick={generateWorkflow}
                  disabled={aiLoading}
                  className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition disabled:opacity-50"
                >
                  {aiLoading ? "Generating..." : "Generate AI Workflow"}
                </button>
              </div>

              {aiResult ? (
                <div className="rounded-2xl border border-white/10 bg-black p-6 whitespace-pre-wrap text-gray-300 leading-relaxed">
                  {aiResult}
                </div>
              ) : (
                <p className="text-gray-500">
                  No AI result yet.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}