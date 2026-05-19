import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <main className="bg-[#030303]">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}