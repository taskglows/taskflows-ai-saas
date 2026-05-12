import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Features from "@/sections/Features";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
    </main>
  );
}