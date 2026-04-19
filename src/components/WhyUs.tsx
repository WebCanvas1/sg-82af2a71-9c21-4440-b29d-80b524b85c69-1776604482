import { Award, Clock, Shield, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reasons = [
  {
    icon: Award,
    title: "5.0 Star Rated",
    description: "159 five-star reviews from satisfied customers across Craigieburn and surrounding areas",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    description: "Open 24 hours a day for emergency repairs and urgent electrical work",
  },
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed electricians with comprehensive insurance coverage for your peace of mind",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guaranteed",
    description: "We stand behind our work with quality guarantees on all installations and repairs",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Why Choose K A K Electricals?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional electrical services you can trust
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-display text-xl">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}