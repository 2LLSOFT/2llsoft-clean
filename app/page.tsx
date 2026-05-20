import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import SpaceBackground from "@/components/SpaceBackground";

import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import BrandShowcase from "@/sections/BrandShowcase";
import Services from "@/sections/Services";
import Features from "@/sections/Features";
import Projects from "@/sections/Projects";
import Trust from "@/sections/Trust";
import About from "@/sections/About";
import Stats from "@/sections/Stats";
import Numbers from "@/sections/Numbers";
import WhyUs from "@/sections/WhyUs";
import Process from "@/sections/Process";
import Technologies from "@/sections/Technologies";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030303]">
      <SpaceBackground />
      <CustomCursor />

      <Navbar />
      <Hero />

      <FadeIn><Marquee /></FadeIn>
      <FadeIn><BrandShowcase /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><Features /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><Trust /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><Stats /></FadeIn>
      <FadeIn><Numbers /></FadeIn>
      <FadeIn><WhyUs /></FadeIn>
      <FadeIn><Process /></FadeIn>
      <FadeIn><Technologies /></FadeIn>
      <FadeIn><Pricing /></FadeIn>
      <FadeIn><CTA /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><Contact /></FadeIn>

      <Footer />
    </main>
  );
}