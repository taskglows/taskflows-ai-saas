"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created successfully!");

    window.location.href = "/login";
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <h1 className="text-3xl font-bold mb-2">
          Create account
        </h1>

        <p className="text-gray-400 mb-8">
          Start building AI workflows today.
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
          Create account
        </button>

        <p className="text-gray-500 text-sm mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-white underline">
            Sign in
          </a>
        </p>
      </form>
    </main>
  );
}