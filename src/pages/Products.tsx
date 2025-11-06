import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import pressureSandFilter from "@/assets/pressure-sand-filter.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";

const Products = () => {
  const products = [
    {
      image: waterTreatmentPlant,
      title: "Water Treatment Plants",
      description:
        "Complete water treatment systems for residential, commercial, and industrial applications. Designed to remove impurities and ensure safe, clean drinking water.",
      features: ["Capacity: 500 LPH to 50,000 LPH", "Automated operation", "Compact design", "Energy efficient"],
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
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products & Solutions</h1>
            <p className="text-lg text-primary-foreground/90">
              Comprehensive range of water and wastewater treatment equipment for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-12">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">{product.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="gradient-primary">
                        <NavLink to="/enquiry">Get Quote</NavLink>
                      </Button>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can design and manufacture customized water treatment systems based on your specific requirements.
            Contact us for a detailed consultation.
          </p>
          <Button asChild size="lg" className="gradient-hero">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
