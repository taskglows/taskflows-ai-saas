import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Features from "@/sections/Features";
import DashboardPreview from "@/sections/DashboardPreview";
import Pricing from "@/sections/Pricing";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DashboardPreview />
      <Pricing />
    </main>
  );
}