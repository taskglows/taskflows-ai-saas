import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import TrustedBy from "@/sections/TrustedBy";
import Features from "@/sections/Features";
import DashboardPreview from "@/sections/DashboardPreview";
import Pricing from "@/sections/Pricing";

export default function Home() {
  return (
    <main className="bg-black min-h-screen pt-24">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DashboardPreview />
      <Pricing />
      <Footer />
    </main>
  );
}