import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Droplets, Leaf, Shield, Award, Users, Settings } from "lucide-react";
import pressureSandFilter from "@/assets/pressure-sand-filter.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";

const Home = () => {
  const services = [
    {
      image: pressureSandFilter,
      title: "Pressure Sand Filters",
      description: "High-efficiency filtration systems for water purification",
    },
    {
      image: swimmingPoolFilter,
      title: "Swimming Pool Filters",
      description: "Crystal clear pool water with advanced filtration",
    },
    {
      image: waterTreatmentPlant,
      title: "Water Treatment Plants",
      description: "Complete water treatment solutions for all needs",
    },
    {
      image: organicComposter,
      title: "Organic Waste Composters",
      description: "Eco-friendly waste management solutions",
    },
    {
      image: effluentTreatment,
      title: "Effluent Treatment Plants",
      description: "Industrial wastewater treatment systems",
    },
    {
      image: sewageTreatment,
      title: "Sewage Treatment Plants",
      description: "Advanced sewage treatment technology",
    },
  ];

  const features = [
    {
      icon: Droplets,
      title: "Pure Water Solutions",
      description: "Advanced water treatment technology for clean and safe water",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions that protect our environment",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO certified products with highest quality standards",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "15+ years of excellence in water treatment",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your success",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored systems designed for your specific needs",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 gradient-hero text-primary-foreground overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Pure Water, Healthy Life
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Leading provider of innovative water and wastewater treatment solutions across India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <NavLink to="/products">View Products</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                <NavLink to="/enquiry">Get Quote</NavLink>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Bharat H2O?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive water treatment solutions with cutting-edge technology and expert service
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products & Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of water treatment solutions for residential, commercial, and industrial applications
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary">
              <NavLink to="/products">View All Products</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect
            water treatment solution.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/enquiry">Request Enquiry</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
