import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import pressureSandFilter from "@/assets/pressure-sand-filter.webp";
import { Filter, Droplets, Settings, Award } from "lucide-react";

const PressureSandFilter = () => {
  const products = [
    {
      title: "200 Kg Pressure Sand Filter",
      price: "Rs 80,000",
      specs: [
        { label: "Flow Rate", value: "1000 m3/hr" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Media Quantity", value: "200kg" },
        { label: "Vessel Diameter", value: "400 mm" },
        { label: "Vessel Height", value: "800 mm" },
        { label: "Finishing", value: "Powder Coated" },
        { label: "Automation", value: "Automatic" },
        { label: "Body Material", value: "Mild Steel" },
      ],
    },
    {
      title: "100 Kg Pressure Sand Filter",
      price: "Rs 50,000",
      specs: [
        { label: "Flow Rate", value: "500 m3/hr" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Media Quantity", value: "100kg" },
        { label: "Vessel Diameter", value: "200 mm" },
        { label: "Vessel Height", value: "500 mm" },
        { label: "Finishing", value: "Powder Coated" },
        { label: "Automation", value: "Automatic" },
        { label: "Body Material", value: "Mild Steel" },
      ],
    },
  ];

  const features = [
    {
      icon: Filter,
      title: "High Efficiency",
      description: "Removes suspended solids, turbidity, and impurities effectively",
    },
    {
      icon: Droplets,
      title: "Multi-Grade Media",
      description: "Uses multiple layers of filtration media for superior results",
    },
    {
      icon: Settings,
      title: "Easy Backwash",
      description: "Simple backwash system for easy maintenance and cleaning",
    },
    {
      icon: Award,
      title: "Long Service Life",
      description: "Durable construction ensures years of reliable operation",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pressure Sand Filters</h1>
            <p className="text-lg text-primary-foreground/90">
              High-efficiency pressure sand filters for removing suspended solids, turbidity, and impurities from water. Ideal for pre-treatment in water treatment systems.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Pressure Sand Filters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available in FRP/MS construction with various capacities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={pressureSandFilter}
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

      {/* How It Works Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
            <Card>
              <CardHeader>
                <CardTitle>Filtration Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Water enters the pressure vessel from the top and flows downward through multiple layers of graded sand media. As water passes through the sand bed, suspended particles are trapped while clean water flows out through the bottom collector system.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Filtration Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous operation with high flow rates and efficient particle removal
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Backwash Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic backwash cleans the media by reversing water flow
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Applications</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Treatment</CardTitle>
                  <CardDescription>For RO plants and other water treatment systems</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Industrial Water</CardTitle>
                  <CardDescription>Process water treatment for various industries</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cooling Towers</CardTitle>
                  <CardDescription>Removes suspended particles from cooling water</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Swimming Pools</CardTitle>
                  <CardDescription>Maintains crystal clear pool water quality</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Filtration Solution?</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            We provide pressure sand filters in various sizes and configurations. Contact us for a customized solution.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PressureSandFilter;
