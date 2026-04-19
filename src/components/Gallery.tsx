import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=600&fit=crop",
    alt: "Electrical panel installation",
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&h=600&fit=crop",
    alt: "Modern light fixture installation",
  },
  {
    url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    alt: "Socket and switch installation",
  },
  {
    url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&h=600&fit=crop",
    alt: "Outdoor lighting setup",
  },
  {
    url: "https://images.unsplash.com/photo-1621905252472-a54c7fc6f3e3?w=800&h=600&fit=crop",
    alt: "Electrical wiring work",
  },
  {
    url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop",
    alt: "Security system installation",
  },
];

export function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-foreground">
            Our Recent Work
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality electrical installations and repairs across Craigieburn and surrounding areas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer border-2 hover:border-primary transition-colors duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}