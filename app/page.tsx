import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import Technologies from "@/sections/Technologies";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030303]">
      <div className="pointer-events-none absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      <Navbar />

      <Hero />

      <Services />

      <Projects />

      <About />

      <Stats />

      <Testimonials />

      <Technologies />

      <Pricing />

      <CTA />

      <Contact />

      <Footer />
    </main>
  );
}