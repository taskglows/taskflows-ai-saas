"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h1 className="text-3xl font-bold mb-2">Sign in</h1>

        <p className="text-gray-400 mb-8">
          Access your TaskFlows workspace.
        </p>

        <label className="block text-sm text-gray-400 mb-2">
          Email
        </label>
        <input
          type="email"
          className="w-full mb-4 rounded-xl bg-black border border-white/10 px-4 py-3 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block text-sm text-gray-400 mb-2">
          Password
        </label>
        <input
          type="password"
          className="w-full mb-6 rounded-xl bg-black border border-white/10 px-4 py-3 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
          Sign in
        </button>

        <p className="text-gray-500 text-sm mt-6 text-center">
          No account?{" "}
          <a href="/signup" className="text-white underline">
            Create one
          </a>
        </p>
      </form>
    </main>
  );
}