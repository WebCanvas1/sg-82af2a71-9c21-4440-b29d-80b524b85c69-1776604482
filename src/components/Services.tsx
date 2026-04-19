import { Zap, Power, Fan, Lightbulb, Sun, Shield, Wrench, Radio, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Zap,
    title: "Socket & Switch Installation",
    description: "Professional installation of electrical sockets and switches throughout your property",
  },
  {
    icon: Wrench,
    title: "Socket & Switch Relocation",
    description: "Relocate existing outlets and switches to better suit your space layout",
  },
  {
    icon: Power,
    title: "Socket & Switch Repair",
    description: "Fast repairs for faulty sockets, switches, and electrical connections",
  },
  {
    icon: Radio,
    title: "Electrical Panel Upgrading",
    description: "Upgrade outdated panels to meet modern electrical demands safely",
  },
  {
    icon: Lightbulb,
    title: "Power Restoration",
    description: "Quick diagnosis and restoration of electrical power issues",
  },
  {
    icon: Fan,
    title: "Fan Installation",
    description: "Expert installation of ceiling fans, exhaust fans, and ventilation systems",
  },
  {
    icon: Lightbulb,
    title: "Light Fixture Installation",
    description: "Professional fitting of indoor and decorative lighting fixtures",
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    description: "Installation of outdoor lighting for security, ambiance, and functionality",
  },
  {
    icon: Shield,
    title: "Security System Installation",
    description: "Complete security system setup including cameras and monitoring",
  },
];

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Our Electrical Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive electrical solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                Emergency Electrical Repairs
              </h3>
              <p className="text-muted-foreground">
                Electrical emergencies don't wait for business hours. We provide fast, reliable emergency repair services 24/7. Call us immediately if you experience power outages, sparking outlets, or burning smells.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}