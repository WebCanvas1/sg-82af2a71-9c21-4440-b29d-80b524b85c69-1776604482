import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-xl mb-4">K A K ELECTRICALS</h3>
            <p className="text-background/80 mb-4">
              Licensed electrical services in Craigieburn and surrounding areas. Quality work, fair pricing, and exceptional customer service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Socket & Switch Installation</li>
              <li>Electrical Panel Upgrading</li>
              <li>Fan Installation</li>
              <li>Light Fixture Installation</li>
              <li>Outdoor Lighting</li>
              <li>Security System Installation</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:0425170200" className="hover:text-accent transition-colors">
                    0425 170 200
                  </a>
                  <p className="text-sm">Open 24 Hours</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>10 Northcroft St, Craigieburn VIC 3064</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} K A K ELECTRICALS. All rights reserved.</p>
          <p className="mt-2">Licensed Electrician • Fully Insured • Serving Craigieburn & Wollert</p>
        </div>
      </div>
    </footer>
  );
}