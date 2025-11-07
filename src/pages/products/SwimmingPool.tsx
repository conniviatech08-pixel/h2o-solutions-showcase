import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import { Waves, Sparkles, Shield, Settings } from "lucide-react";

const SwimmingPool = () => {
  const products = [
    {
      title: "Swimming Pool Sand Filter",
      price: "Rs 2,00,000",
      specs: [
        { label: "Type", value: "Side Mount" },
        { label: "Usage/Application", value: "Commercial" },
        { label: "Material", value: "Mild Steel" },
        { label: "Brand", value: "Emaux" },
        { label: "Country of Origin", value: "Made in India" },
      ],
    },
    {
      title: "Swimming Pool Filtration Systems",
      price: "Rs 20,000",
      specs: [
        { label: "Usage/Application", value: "Commercial" },
        { label: "Material", value: "Plastic" },
        { label: "Brand", value: "Emaux" },
        { label: "Type", value: "Pipeless System" },
      ],
    },
    {
      title: "50 Kg Mild Steel Swimming Pool Filter",
      price: "Rs 30,000",
      specs: [
        { label: "Flow Rate", value: "100 m3/hour" },
        { label: "Sand Weight", value: "50 Kg" },
        { label: "Material", value: "Mild Steel" },
        { label: "Valve Connection", value: "1.5 Inch" },
        { label: "Application", value: "Water Treatment" },
      ],
    },
  ];

  const features = [
    {
      icon: Waves,
      title: "Crystal Clear Water",
      description: "Advanced filtration for pristine, hygienic pool water",
    },
    {
      icon: Sparkles,
      title: "UV Disinfection",
      description: "Optional UV systems for chemical-free sanitization",
    },
    {
      icon: Shield,
      title: "Durable Design",
      description: "Weather-resistant materials for long-lasting performance",
    },
    {
      icon: Settings,
      title: "Complete Solutions",
      description: "Pumps, filters, and chemical dosing systems included",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Swimming Pool Filters</h1>
            <p className="text-lg text-primary-foreground/90">
              Premium quality swimming pool filtration systems to keep pool water crystal clear and hygienic. Complete pool equipment and maintenance solutions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pool Filtration Systems</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sand & cartridge filters for residential and commercial pools
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={swimmingPoolFilter}
                    alt={product.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
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

      {/* System Components Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Complete Pool System</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Sand & Cartridge Filters</CardTitle>
                  <CardDescription>
                    Multiple filtration options to suit your pool size and budget
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pool Pumps</CardTitle>
                  <CardDescription>
                    Energy-efficient pumps for optimal water circulation
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Chemical Dosing Systems</CardTitle>
                  <CardDescription>
                    Automated chlorine and pH control systems
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">UV Disinfection</CardTitle>
                  <CardDescription>
                    Advanced UV systems for superior water sanitization
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Systems?</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Superior Filtration</CardTitle>
                  <CardDescription>
                    Removes particles as small as 2 microns for crystal clear water
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Low Maintenance</CardTitle>
                  <CardDescription>
                    Easy backwash operation and minimal upkeep required
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Energy Efficient</CardTitle>
                  <CardDescription>
                    Variable speed pumps reduce energy consumption by up to 70%
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Complete Support</CardTitle>
                  <CardDescription>
                    Installation, maintenance, and AMC services available
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Pool Filtration Solution?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get expert advice on the best pool filtration system for your needs. We provide complete installation and maintenance services.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SwimmingPool;
