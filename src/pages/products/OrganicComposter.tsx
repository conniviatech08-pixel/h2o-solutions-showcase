import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import automatic from "@/assets/automaticorganic.webp";
import manualorganic from "@/assets/manual-organic.webp";
import Organicbg from "@/assets/Organicbg.jpg";
import { Leaf, Recycle, Timer, Award } from "lucide-react";

const OrganicComposter = () => {
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
      {/* HERO SECTION */}
      {/* <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white"> */}
      <section className="relative h-[380px] md:h-[420px] flex items-center justify-center text-white">

        <div className="absolute inset-0 -z-10">
          <img
            src={Organicbg}
            alt="Organic Waste Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative z-10">
            Organic Waste Composters
          </h1>
          <p className="text-md sm:text-lg md:text-3xl relative z-10 text-white/90 max-w-2xl mx-auto">
            Prominent & Leading Manufacturer from Mumbai, we offer mild steel green organic waste composter, mild steel organic waste composter, automatic organic waste composter, manual organic waste composter, in-vessel organic waste composter and stainless steel organic waste composter.
          </p>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-10 md:py-16 bg-background">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-2">
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

      {/* PRODUCT INTRO WITH IMAGE */}
      <section className="py-10 md:py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          {/* DESCRIPTION BELOW IMAGE */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center mb-8">
            Leading manufacturer offering automatic & manual organic waste
            composter machines.
          </p>

          {/* BENEFITS */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {[
              "Available in mild steel and stainless steel models.",
              "Converts organic waste into compost efficiently.",
              "Offers automatic and manual operation options.",
              "Durable, long-lasting construction.",
              "Eco-friendly solution for waste reduction.",
              "Suitable for homes, societies, hotels, and industries.",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTOMATIC & MANUAL PRODUCT BLOCKS */}
      <section className="py-10 md:py-16 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-12">
          {/* AUTOMATIC */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={automatic}
                  alt="Automatic Organic Waste Composter"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Automatic Organic Waste Composter
              </h2>
              <p className="text-muted-foreground">
                Fully Automated Machines that handle the composting process with
                minimal human intervention.
              </p>
              <div className="space-y-1 text-muted-foreground">
                <p>Automated Mixing: Mixes the Organic Waste Automatically.</p>
                <p>
                  Reduces contaminants, odors, and harmful chemicals
                  effectively.
                </p>
                <p>Aeration: Provides necessary oxygen for decomposition.</p>
                <p>Grinding and Shredding: Some models include shredders.</p>
              </div>
              <Button asChild className="gradient-primary py-2 px-6 mt-2">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* MANUAL */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Manual Organic Waste Composter
              </h2>
              <p className="text-muted-foreground">
                Require complete manual operation without any automation.
              </p>
              <div className="space-y-1 text-muted-foreground">
                <p>Users need to turn the compost pile to aerate it.</p>
                <p>Often simple bins or tumblers without advanced features.</p>
                <p>
                  Users must manually add water to maintain moisture levels.
                </p>
                <p>Full control over the composting process.</p>
              </div>
              <Button asChild className="gradient-primary py-2 px-6 mt-2">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>

            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={manualorganic}
                  alt="Manual Organic Waste Composter"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground">
              Simple 4-step organic waste composting process for efficient and
              clean waste management.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                title: "Step 1: Loading",
                desc: "Add organic waste such as food scraps, vegetable peels, and garden waste.",
              },
              {
                title: "Step 2: Processing",
                desc: "Automatic mixing and aeration accelerate the decomposition process.",
              },
              {
                title: "Step 3: Composting",
                desc: "Microorganisms break down organic matter at optimum temperature and moisture.",
              },
              {
                title: "Step 4: Collection",
                desc: "Collect nutrient-rich compost ready for gardening and agriculture.",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="border-l-4 border-primary shadow-sm hover:shadow-md transition-all"
              >
                <CardHeader className="flex flex-row items-start gap-3">
                  <div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {step.desc}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-8 md:py-12 bg-muted/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Ideal For</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Hotels & Restaurants",
                desc: "Handle large volumes of food waste efficiently",
              },
              {
                title: "Residential Complexes",
                desc: "Manage community organic waste sustainably",
              },
              {
                title: "Educational Institutions",
                desc: "Schools and colleges with canteen facilities",
              },
              {
                title: "Hospitals & Healthcare",
                desc: "Process organic waste from kitchens and gardens",
              },
              {
                title: "Food Processing Units",
                desc: "Convert processing waste into valuable compost",
              },
              {
                title: "Corporate Offices",
                desc: "Manage cafeteria waste responsibly",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-10 md:py-16">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Cost Savings",
                desc: "Reduce waste disposal costs significantly",
              },
              {
                title: "Environmental Impact",
                desc: "Reduce carbon footprint and landfill waste",
              },
              {
                title: "Rich Compost",
                desc: "Produce high-quality organic fertilizer",
              },
              {
                title: "Easy Operation",
                desc: "Fully automatic with minimal maintenance",
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Go Green with Our Composters
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            Start your journey towards sustainable waste management. Contact us
            for the right composter for your needs.
          </p>
            <Button
            size="lg"
            variant="outline"
            className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
          >
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OrganicComposter;
