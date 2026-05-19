import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Technologies from "@/sections/Technologies";
import Pricing from "@/sections/Pricing";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Technologies />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}