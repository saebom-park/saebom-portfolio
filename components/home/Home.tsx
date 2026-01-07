"use client";

import BackgroundGrid from "@/components/ui/BackgroundGrid";
import Nav from "@/components/home/Nav";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import LogAndSkills from "@/components/home/LogAndSkills";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-blue-500/30 selection:text-blue-200">
      <BackgroundGrid />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <LogAndSkills />
      <Footer />
    </main>
  );
}
