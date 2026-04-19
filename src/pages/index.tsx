import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="K A K ELECTRICALS - Licensed Electrician Craigieburn VIC | 24/7 Service"
        description="Expert electrical services in Craigieburn & Wollert. 5.0★ rated. Emergency repairs, installations, upgrades. Open 24 hours. Call 0425 170 200 for a free quote."
      />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}