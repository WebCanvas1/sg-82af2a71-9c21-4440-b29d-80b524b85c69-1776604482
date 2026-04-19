import { Star, Clock, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">(159 Reviews)</span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Expert Electrical Services{" "}
              <span className="text-primary">You Can Trust</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Licensed electricians serving Craigieburn and nearby areas. From installations to emergency repairs, we deliver quality work every time.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-medium">Open 24 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">Serves Wollert & Nearby</span>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
              <p className="font-semibold text-foreground">Emergency Repairs Available</p>
              <p className="text-sm text-muted-foreground">Fast response times when you need us most</p>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}