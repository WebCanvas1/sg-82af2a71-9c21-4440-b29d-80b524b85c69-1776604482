import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
      </main>
    </>
  );
}