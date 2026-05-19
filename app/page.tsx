import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Numbers from "@/sections/Numbers";
import Process from "@/sections/Process";
import Team from "@/sections/Team";
import Blog from "@/sections/Blog";
import Testimonials from "@/sections/Testimonials";
import Technologies from "@/sections/Technologies";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030303]">
      <div className="pointer-events-none absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-blue-700/10 blur-[120px]" />

      <Navbar />

      <Hero />

      <Marquee />

      <Services />

      <Projects />

      <About />

      <Stats />

      <Numbers />

      <Process />

      <Team />

      <Blog />

      <Testimonials />

      <Technologies />

      <Pricing />

      <CTA />

      <FAQ />

      <Contact />

      <Footer />
    </main>
  );
}