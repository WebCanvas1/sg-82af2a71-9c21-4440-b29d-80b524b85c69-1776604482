import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
          Contact us today for a free quote on your electrical project. We're available 24/7 for emergency repairs and scheduled appointments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="secondary" className="gap-2" asChild>
            <a href="tel:0425170200">
              <Phone className="w-5 h-5" />
              Call 0425 170 200
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-white text-primary hover:bg-white/90" asChild>
            <a href="#hero">
              <Mail className="w-5 h-5" />
              Request a Quote
            </a>
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center text-sm text-primary-foreground/90">
          <div className="flex items-center gap-2 justify-center">
            <MapPin className="w-4 h-4" />
            <span>10 Northcroft St, Craigieburn VIC 3064</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Phone className="w-4 h-4" />
            <span>Open 24 Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}