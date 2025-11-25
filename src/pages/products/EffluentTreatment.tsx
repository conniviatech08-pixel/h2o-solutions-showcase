import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import { Factory, Recycle, Shield, Settings } from "lucide-react";

const EffluentTreatment = () => {
  const products = [
    {
      title: "Wastewater Effluent Treatment Plant",
      price: "Rs 5,90,000 / Piece",
      capacity: "1 MLD (1000 KLD)",
      description: "An Effluent Treatment Plant (ETP) or Waste Water Treatment Plant (WWTP) is a unit plant where various physical, biological and chemical processes are used to change the properties of the waste water by removing harmful substances in order to turn it into a type of water that can be safely discharged into the environment.",
      specs: [
        { label: "Capacity", value: "1 MLD (1000 KLD)" },
        { label: "Capacity (KLD)", value: "1000 KLD" },
        { label: "Industry Type", value: "Hospital" },
        { label: "Industry / Application", value: "Pharmaceutical & Chemical" },
        { label: "Installation Type", value: "Prefabricated" },
        { label: "Material of Construction", value: "Mild Steel" },
        { label: "Tertiary Treatment System", value: "Pressure Sand Filter (PSF)" },
        { label: "Country of Origin", value: "Made in India" },
        { label: "Production Capacity", value: "1 MLD" },
        { label: "Delivery Time", value: "30 Days" },
      ],
    },
    {
      title: "Custom-Built Effluent Treatment Plant",
      price: "Rs 1,60,000 / Unit",
      capacity: "10 - 30 KLD",
      description: "Customized effluent treatment plant designed for hospital, healthcare, and food industry applications. Features activated sludge process for efficient treatment of industrial wastewater.",
      specs: [
        { label: "Capacity", value: "10 KLD" },
        { label: "Capacity (KLD)", value: "30 KLD" },
        { label: "Industry / Application", value: "Hospital & Healthcare" },
        { label: "Treatment Technology", value: "Activated Sludge Process (ASP)" },
        { label: "Application Industry", value: "Food Industry" },
        { label: "Installation Type", value: "Prefabricated" },
        { label: "Inlet Flow Rate", value: "50 m3/day or m3/hr" },
      ],
    },
  ];

  const features = [
    {
      icon: Factory,
      title: "Industrial Grade",
      description: "Designed for various industrial applications and requirements",
    },
    {
      icon: Recycle,
      title: "Zero Liquid Discharge",
      description: "Options available for complete water recovery and reuse",
    },
    {
      icon: Shield,
      title: "Compliance Assured",
      description: "Meets all pollution control board norms and regulations",
    },
    {
      icon: Settings,
      title: "Advanced Automation",
      description: "Automated systems for efficient and reliable operation",
    },
  ];

  const industries = [
    "Textile Industry",
    "Pharmaceutical Industry",
    "Chemical Processing",
    "Food Processing",
    "Hospital & Healthcare",
    "Automobile Industry",
    "Paper & Pulp Industry",
    "Leather Industry",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Effluent Treatment Plants (ETP)</h1>
            <p className="text-lg text-primary-foreground/90">
              Leading manufacturer of wastewater effluent treatment plants, custom-built systems, compact plants, biological treatment facilities, and zero liquid discharge effluent treatment plants. Our ETPs are designed to treat industrial wastewater from textile, pharmaceutical, chemical, food processing, hospital, healthcare, automobile, paper, pulp, and leather industries.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ETP Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Customized effluent treatment plants for diverse industrial applications
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={effluentTreatment}
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
                      <div key={idx} className="flex justify-between items-start py-2 border-b">
                        <span className="text-sm font-medium text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-semibold text-right">{spec.value}</span>
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

      {/* Industries Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {industries.map((industry, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-base">{industry}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Treatment Stages</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Primary Treatment</CardTitle>
                  <CardDescription>
                    Physical removal of suspended solids through screening and sedimentation
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Secondary Treatment</CardTitle>
                  <CardDescription>
                    Biological treatment using activated sludge process or MBBR technology
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tertiary Treatment</CardTitle>
                  <CardDescription>
                    Advanced filtration and chemical treatment for final polishing
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Industrial Effluent Treatment?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get a customized ETP solution designed specifically for your industry. Our experts will help you meet all compliance requirements.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EffluentTreatment;
