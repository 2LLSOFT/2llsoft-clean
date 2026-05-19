import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Technologies from "@/sections/Technologies";

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Technologies />
    </main>
  );
}