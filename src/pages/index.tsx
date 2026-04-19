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
        title="KAK Electricals - Licensed Electrician Craigieburn VIC | Open 24/7"
        description="Expert electrical services in Craigieburn. 5-star rated with 159 reviews. Open 24/7 for emergency repairs. Licensed & insured electricians serving Wollert and nearby areas. Call 0425 170 200 for a free quote."
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