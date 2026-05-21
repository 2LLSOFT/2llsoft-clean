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
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import InstagramButton from "@/components/InstagramButton";
import Location from "@/sections/Location";
import Support from "@/sections/Support";
import ProductShowcase from "@/sections/ProductShowcase";
import FloatingPanels from "@/sections/FloatingPanels";
import DashboardPreview from "@/sections/DashboardPreview";
import MobileAppPreview from "@/sections/MobileAppPreview";
import CaseStudies from "@/sections/CaseStudies";
import LiveFeed from "@/sections/LiveFeed";
import TrustedBy from "@/sections/TrustedBy";
import AdvancedStats from "@/sections/AdvancedStats";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#030303]">
      <SpaceBackground />
    
      <ScrollProgress />
  
      <BackToTop />
      <InstagramButton />

      <Navbar />
      <Hero />

      <FadeIn><Marquee /></FadeIn>
      <FadeIn><TrustedBy /></FadeIn>
      <FadeIn><BrandShowcase /></FadeIn>
      <FadeIn><Services /></FadeIn>
      <FadeIn><Features /></FadeIn>
      <FadeIn><Projects /></FadeIn>
      <FadeIn><CaseStudies /></FadeIn>
      <FadeIn><ProductShowcase /></FadeIn>
      <FadeIn><FloatingPanels /></FadeIn>
      <FadeIn><LiveFeed /></FadeIn>
      <FadeIn><DashboardPreview /></FadeIn>
      <FadeIn><MobileAppPreview /></FadeIn>
      <FadeIn><Trust /></FadeIn>
      <FadeIn><About /></FadeIn>
      <FadeIn><AdvancedStats /></FadeIn>
      <FadeIn><Stats /></FadeIn>
      <FadeIn><Numbers /></FadeIn>
      <FadeIn><WhyUs /></FadeIn>
      <FadeIn><Process /></FadeIn>
      <FadeIn><Technologies /></FadeIn>
      <FadeIn><Pricing /></FadeIn>
      <FadeIn><CTA /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><FAQ /></FadeIn>
      <FadeIn><Location /></FadeIn>
      <FadeIn><Support /></FadeIn>
      <FadeIn><Contact /></FadeIn>

      <Footer />
    </main>
  );
}