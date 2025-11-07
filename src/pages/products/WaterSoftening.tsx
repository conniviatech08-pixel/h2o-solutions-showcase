import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import { Droplets, Shield, Settings, Award } from "lucide-react";

const WaterSoftening = () => {
  const products = [
    {
      title: "100 LPH Water Softening Plant",
      price: "Rs 60,000",
      specs: [
        { label: "Capacity", value: "100 LPH" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Automation", value: "Automatic" },
        { label: "Water Source", value: "Borewell Water" },
        { label: "Softener Tank Type", value: "Vertical" },
        { label: "Material", value: "Mild Steel" },
        { label: "Color", value: "Blue (Base)" },
        { label: "Voltage", value: "240V" },
      ],
    },
    {
      title: "200 LPH Water Softening Plant",
      price: "Rs 1,60,000",
      specs: [
        { label: "Capacity", value: "200 LPH" },
        { label: "Usage/Application", value: "Industrial" },
        { label: "Automation", value: "Automatic" },
        { label: "Water Source", value: "Borewell Water" },
        { label: "Softener Tank Type", value: "Vertical" },
        { label: "Material", value: "Mild Steel" },
        { label: "Color", value: "Blue (Base)" },
        { label: "Voltage", value: "240V" },
      ],
    },
  ];

  const features = [
    {
      icon: Droplets,
      title: "Removes Hardness",
      description: "Eliminates calcium and magnesium ions from hard water",
    },
    {
      icon: Shield,
      title: "Protects Equipment",
      description: "Prevents scale formation in pipes and appliances",
    },
    {
      icon: Settings,
      title: "Automatic Operation",
      description: "Fully automated regeneration and operation cycles",
    },
    {
      icon: Award,
      title: "Efficient Design",
      description: "Optimized resin usage for maximum water softening",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Water Softening Plants</h1>
            <p className="text-lg text-primary-foreground/90">
              Advanced water softening systems to remove calcium and magnesium ions from hard water. Ideal for industrial, commercial, and residential applications.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Water Softening Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ion exchange technology for effective water softening
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
            <h2 className="text-3xl font-bold mb-8 text-center">How Water Softening Works</h2>
            <Card>
              <CardHeader>
                <CardTitle>Ion Exchange Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Water softeners use ion exchange resin to remove hardness-causing minerals. Hard water passes through a tank containing resin beads charged with sodium ions. As water flows through, calcium and magnesium ions are exchanged with sodium ions, effectively softening the water.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Softening Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous removal of hardness minerals during normal operation
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Regeneration Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Automatic resin cleaning and recharging with salt solution
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Soft Water</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>No Scale Formation</CardTitle>
                  <CardDescription>
                    Prevents limescale buildup in pipes, boilers, and appliances
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Better Soap Performance</CardTitle>
                  <CardDescription>
                    Improved lathering and cleaning efficiency with less soap
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Extended Equipment Life</CardTitle>
                  <CardDescription>
                    Longer lifespan for water heaters, washing machines, and dishwashers
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Energy Savings</CardTitle>
                  <CardDescription>
                    Improved heat transfer efficiency in boilers and heaters
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Softer Skin & Hair</CardTitle>
                  <CardDescription>
                    Gentler on skin and leaves hair feeling softer
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cleaner Dishes & Clothes</CardTitle>
                  <CardDescription>
                    Spot-free dishes and brighter, softer laundry
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Applications</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Industrial Use</CardTitle>
                  <CardDescription>Boilers, cooling towers, and manufacturing processes</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Commercial Use</CardTitle>
                  <CardDescription>Hotels, hospitals, laundries, and restaurants</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Residential Use</CardTitle>
                  <CardDescription>Homes, apartments, and residential complexes</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Treatment</CardTitle>
                  <CardDescription>Before RO plants and other treatment systems</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Say Goodbye to Hard Water</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get the perfect water softening solution for your needs. Our experts will help you choose the right capacity and configuration.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WaterSoftening;
