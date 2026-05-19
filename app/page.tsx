"use client";

import { useEffect, useState } from "react";

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
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <main className="relative overflow-hidden bg-[#030303]">
      <div
        className="pointer-events-none fixed z-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]"
        style={{
          left: position.x - 250,
          top: position.y - 250,
        }}
      />

      <div className="relative z-10">
        <Navbar />

        <Hero />

        <Services />

        <Projects />

        <About />

        <Technologies />

        <Pricing />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}