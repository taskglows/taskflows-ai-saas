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
              <p className="text-gray-400 mb-3">
                Workflow Details
              </p>

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
              <h2 className="text-2xl font-semibold mb-4">
                AI Execution
              </h2>

              <p className="text-gray-400">
                AI execution engine coming next phase.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}