import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import organicComposter from "@/assets/organic-composter.webp";
import { Leaf, Recycle, Timer, Award } from "lucide-react";

const OrganicComposter = () => {
  const products = [
    {
      title: "Mild Steel Green Organic Waste Composter",
      price: "Rs 80,000",
      capacity: "100 kg",
      specs: [
        { label: "Capacity", value: "100 kg" },
        { label: "Material", value: "Mild Steel" },
        { label: "Type of Waste", value: "Organic Waste" },
        { label: "Quality of Compost", value: "Fully Digested" },
        { label: "Grade", value: "Semi Automatic" },
        { label: "Color", value: "Green" },
        { label: "Surface Finish", value: "Powder Coated" },
      ],
    },
    {
      title: "Mild Steel Organic Waste Composter",
      price: "Rs 1,35,000",
      capacity: "250 kg",
      specs: [
        { label: "Capacity", value: "250 kg" },
        { label: "Material", value: "Mild Steel" },
        { label: "Type of Waste", value: "Organic Waste" },
        { label: "Quality of Compost", value: "Fully Digested" },
        { label: "Grade", value: "Semi Automatic" },
        { label: "Color", value: "Green" },
        { label: "Surface Finish", value: "Powder Coated" },
      ],
    },
  ];

  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Convert organic waste into valuable compost naturally",
    },
    {
      icon: Recycle,
      title: "90% Volume Reduction",
      description: "Dramatically reduces waste volume through composting",
    },
    {
      icon: Timer,
      title: "24-Hour Cycle",
      description: "Fast composting process in just 24 hours",
    },
    {
      icon: Award,
      title: "Odorless Process",
      description: "No foul smell during the entire composting process",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Organic Waste Composters</h1>
            <p className="text-lg text-primary-foreground/90">
              Fully automatic organic waste composters for converting food waste and organic matter into compost. Ideal for hotels, restaurants, residential complexes, and institutions.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Composters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Available in various capacities from 50 kg to 500 kg per day
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={organicComposter}
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
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Step 1: Loading</CardTitle>
                  <CardDescription>
                    Add organic waste such as food scraps, vegetable peels, and garden waste
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 2: Processing</CardTitle>
                  <CardDescription>
                    Automatic mixing and aeration accelerates decomposition process
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 3: Composting</CardTitle>
                  <CardDescription>
                    Microorganisms break down organic matter at optimal temperature
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Step 4: Collection</CardTitle>
                  <CardDescription>
                    Collect nutrient-rich compost ready for garden and plant use
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Ideal For</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hotels & Restaurants</CardTitle>
                  <CardDescription>
                    Handle large volumes of food waste efficiently
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Residential Complexes</CardTitle>
                  <CardDescription>
                    Manage community organic waste sustainably
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Educational Institutions</CardTitle>
                  <CardDescription>
                    Schools and colleges with canteen facilities
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Hospitals & Healthcare</CardTitle>
                  <CardDescription>
                    Process organic waste from kitchens and gardens
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Food Processing Units</CardTitle>
                  <CardDescription>
                    Convert processing waste into valuable compost
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Corporate Offices</CardTitle>
                  <CardDescription>
                    Manage cafeteria waste responsibly
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
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
                  <CardTitle>Cost Savings</CardTitle>
                  <CardDescription>
                    Reduce waste disposal costs significantly
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>
                    Reduce carbon footprint and landfill waste
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Rich Compost</CardTitle>
                  <CardDescription>
                    Produce high-quality organic fertilizer
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Easy Operation</CardTitle>
                  <CardDescription>
                    Fully automatic with minimal maintenance
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Go Green with Our Composters</h2>
          <p className="text-lg mb-8 text-secondary-foreground/90 max-w-2xl mx-auto">
            Start your journey towards sustainable waste management. Contact us for the right composter for your needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OrganicComposter;
