import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <div>
          <h1 className="font-display font-bold text-xl md:text-2xl text-primary">
            KAK Electricals
          </h1>
          <p className="text-xs text-muted-foreground hidden sm:block">
            Licensed Electrician • Craigieburn VIC
          </p>
        </div>
        
        <Button size="lg" className="gap-2" asChild>
          <a href="tel:0425170200">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">0425 170 200</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </Button>
      </div>
    </header>
  );
}