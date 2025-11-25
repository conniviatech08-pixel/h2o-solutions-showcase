import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import { Droplets, Settings, Award, Shield } from "lucide-react";

const WaterTreatment = () => {
  const products = [
    {
      title: "500 LPH Water Treatment Plant",
      price: "Rs 1,60,000 / Piece",
      description: "A 500 LPH Water Treatment Plant refers to a system designed to treat 500 Liters of water per hour. The type and components of the plant depend on the water source and the end-use (drinking, industrial, etc.).",
      specs: [
        { label: "Capacity", value: "500 LPH" },
        { label: "Water Source", value: "Borewell Water" },
        { label: "Type", value: "Pharmaceutical Industry" },
        { label: "Treatment Technique", value: "Membrane Bioreactor (MBR)" },
        { label: "Automation", value: "Fully Automatic" },
        { label: "Voltage", value: "240V" },
        { label: "Frequency", value: "50 Hz" },
        { label: "Air Blower Power", value: "0.75 KW" },
      ],
    },
    {
      title: "100 LPH Water Treatment Plant",
      price: "Rs 95,000 / Piece",
      description: "LPH in a Water Treatment Plant stands for Litres Per Hour. This plant refers to the capacity of treating 100 litres of water in one hour, suitable for pharmaceutical and industrial applications.",
      specs: [
        { label: "Capacity", value: "100 LPH" },
        { label: "Water Source", value: "Borewell Water" },
        { label: "Application", value: "Pharmaceutical Industry" },
        { label: "Treatment Technique", value: "Membrane Bioreactor (MBR)" },
        { label: "Automation", value: "Fully Automatic" },
        { label: "Voltage", value: "240V" },
        { label: "Frequency", value: "50 Hz" },
        { label: "Air Blower Power", value: "0.5 KW" },
      ],
    },
  ];

  const features = [
    {
      icon: Droplets,
      title: "Advanced Filtration",
      description: "Multi-stage filtration process ensures pure, safe drinking water",
    },
    {
      icon: Settings,
      title: "Fully Automated",
      description: "Automatic operation with minimal manual intervention required",
    },
    {
      icon: Award,
      title: "High Efficiency",
      description: "Optimized design for maximum water recovery and minimal waste",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Meets all drinking water quality standards and regulations",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Treatment Plants</h1>
            <p className="text-lg text-primary-foreground/90">
              Our comprehensive range of water treatment plants includes systems designed to treat water from various sources including borewell water. We offer advanced membrane bioreactor (MBR) technology for pharmaceutical, industrial, and commercial applications with capacities ranging from 100 LPH to 500 LPH and beyond.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Water Treatment Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available in various capacities to meet your specific requirements
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={waterTreatmentPlant}
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
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
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

      {/* Applications Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Applications</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Industrial Use</CardTitle>
                  <CardDescription>Pharmaceutical, chemical, and manufacturing industries</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Commercial Use</CardTitle>
                  <CardDescription>Hotels, restaurants, hospitals, and offices</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Residential Use</CardTitle>
                  <CardDescription>Apartments, villas, and housing societies</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Municipal Use</CardTitle>
                  <CardDescription>Government buildings and public facilities</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Capacity?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            We design and manufacture customized water treatment plants from 100 LPH to 50,000 LPH based on your specific requirements.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WaterTreatment;
