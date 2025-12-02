import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { ArrowRight } from "lucide-react";
import pressureSandFilter from "@/assets/pressure-sand-filter.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import heroWater from "@/assets/hero-water.webp";

const Products = () => {
  const products = [
    {
      image: waterTreatmentPlant,
      title: "Water Treatment Plants",
      description:
        "Complete water treatment systems for residential, commercial, and industrial applications. Designed to remove impurities and ensure safe, clean drinking water.",
      features: ["Capacity: 500 LPH to 50,000 LPH", "Automated operation", "Compact design", "Energy efficient"],
      link: "/products/water-treatment",
    },
    {
      image: sewageTreatment,
      title: "Sewage Treatment Plants (STP)",
      description:
        "Advanced sewage treatment solutions for residential complexes, hotels, hospitals, and commercial establishments. Treats wastewater to meet discharge standards.",
      features: [
        "Modular & compact design",
        "Low operational cost",
        "Minimal maintenance",
        "Eco-friendly process",
      ],
      link: "/products/sewage-treatment",
    },
    {
      image: effluentTreatment,
      title: "Effluent Treatment Plants (ETP)",
      description:
        "Industrial effluent treatment systems designed to treat industrial wastewater from various industries including textile, pharmaceutical, chemical, and food processing.",
      features: [
        "Customized solutions",
        "Meets pollution control norms",
        "Zero liquid discharge options",
        "Advanced automation",
      ],
      link: "/products/effluent-treatment",
    },
    {
      image: pressureSandFilter,
      title: "Pressure Sand Filters",
      description:
        "High-efficiency pressure sand filters for removing suspended solids, turbidity, and impurities from water. Ideal for pre-treatment in water treatment systems.",
      features: [
        "FRP/MS construction",
        "Multi-grade media",
        "Easy backwash system",
        "Long service life",
      ],
      link: "/products/pressure-sand-filter",
    },
    {
      image: swimmingPoolFilter,
      title: "Swimming Pool Filters",
      description:
        "Premium quality swimming pool filtration systems to keep pool water crystal clear and hygienic. Complete pool equipment and maintenance solutions.",
      features: [
        "Sand & cartridge filters",
        "Pool pumps & accessories",
        "Chemical dosing systems",
        "UV disinfection",
      ],
      link: "/products/swimming-pool",
    },
    {
      image: organicComposter,
      title: "Organic Waste Composters",
      description:
        "Fully automatic organic waste composters for converting food waste and organic matter into compost. Ideal for hotels, restaurants, residential complexes, and institutions.",
      features: [
        "Fully automatic operation",
        "Odorless process",
        "90% volume reduction",
        "24-hour cycle",
      ],
      link: "/products/organic-composter",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWater})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Our Products & Solutions</h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive range of water and wastewater treatment equipment for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Explore</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Complete Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From water treatment to waste management, we offer end-to-end solutions for all your requirements
            </p>
          </div>
          <div className="space-y-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl group">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`aspect-video md:aspect-auto overflow-hidden bg-muted ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{product.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-secondary mt-0.5">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="gradient-primary">
                          <NavLink to={product.link} className="flex items-center gap-2">
                            View Details <ArrowRight className="h-4 w-4" />
                          </NavLink>
                        </Button>
                        <Button asChild variant="outline">
                          <NavLink to="/enquiry">Get Quote</NavLink>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Products Banner */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Water Softening Plants</h3>
                <p className="text-muted-foreground mb-4">
                  Ion exchange based systems for removing hardness from water, ideal for industrial and commercial applications.
                </p>
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/products/water-softening">Learn More</NavLink>
                </Button>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
                <p className="text-muted-foreground mb-4">
                  Need a specialized solution? We design and manufacture custom water treatment systems based on your requirements.
                </p>
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/contact">Contact Us</NavLink>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            We can design and manufacture customized water treatment systems based on your specific requirements.
            Contact us for a detailed consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <NavLink to="/contact">Contact Our Experts</NavLink>
            </Button>
            <Button asChild size="lg" className="bg-white text-secondary hover:bg-white/90">
              <NavLink to="/enquiry">Request Quote</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;