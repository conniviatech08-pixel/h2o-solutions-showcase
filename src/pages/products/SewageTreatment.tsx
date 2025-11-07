import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import { Leaf, Settings, Droplets, Award } from "lucide-react";

const SewageTreatment = () => {
  const products = [
    {
      title: "Commercial Sewage Treatment Plant",
      price: "Rs 2,00,000",
      capacity: "500 KLD",
      specs: [
        { label: "Capacity", value: "500 KLD" },
        { label: "Inlet Flow Rate", value: "500 m3/day" },
        { label: "Installation Type", value: "Complete Civil Work" },
        { label: "Material", value: "Mild Steel" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    {
      title: "50 KLD Automatic Sewage Treatment Plant",
      price: "Rs 1,00,000",
      capacity: "50 KLD",
      specs: [
        { label: "Capacity", value: "50 KLD (KLD/MLD)" },
        { label: "Water Source", value: "Borewell Water" },
        { label: "Technology", value: "Mixed Bed Bio Reactor (MBBR)" },
        { label: "Feed Flow Rate", value: "100 m3/day" },
        { label: "Water Pump Power", value: "1 KW" },
        { label: "Automation Grade", value: "Automatic" },
      ],
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Process",
      description: "Environment-friendly treatment with minimal ecological impact",
    },
    {
      icon: Settings,
      title: "Modular Design",
      description: "Compact and scalable design suitable for various applications",
    },
    {
      icon: Droplets,
      title: "Advanced Treatment",
      description: "MBBR technology for efficient biological treatment",
    },
    {
      icon: Award,
      title: "Low Maintenance",
      description: "Minimal operational cost with automated systems",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sewage Treatment Plants (STP)</h1>
            <p className="text-lg text-primary-foreground/90">
              Advanced sewage treatment solutions for residential complexes, hotels, hospitals, and commercial establishments. Treats wastewater to meet discharge standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our STP Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available in various capacities from 10 KLD to 1000 KLD
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={sewageTreatment}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.title}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-primary">
                    {product.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {product.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center py-2 border-b">
                        <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full gradient-primary">
                    <NavLink to="/enquiry">Request Quote</NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Meets Pollution Norms</CardTitle>
                  <CardDescription>
                    Treated water meets all environmental discharge standards
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cost-Effective</CardTitle>
                  <CardDescription>
                    Low operational costs with minimal power consumption
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Water Reuse</CardTitle>
                  <CardDescription>
                    Treated water can be reused for gardening and flushing
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compact Installation</CardTitle>
                  <CardDescription>
                    Space-saving design suitable for urban environments
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for Custom STP Solution?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            We provide customized sewage treatment plants designed for your specific needs. Contact us for a detailed consultation.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SewageTreatment;
