import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

import swimmingpool1 from "@/assets/swimmingpool1.webp";
import swimmingpool2 from "@/assets/swimmimgpool2.webp";
import bgwater from "@/assets/swimmingbg.jpg";

import { Waves, Sparkles, Shield, Settings } from "lucide-react";

const SwimmingPool = () => {
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
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={bgwater}
            alt="Swimming Pool"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>

        <div className="container text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Swimming Pool Filters
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            Offering you a complete choice of products which include swimming pool sand filter, swimming pool filtration systems, 50 kg mild steel swimming pool filtration plant and 100 kg mild steel swimming pool filtration plant.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <Card key={idx} className="text-center">
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

      {/* PRODUCT SECTION */}
      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-16">
          {/* FIRST BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="w-full">
              <div className="w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={swimmingpool1}
                  alt="200 LPH"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-black">
                100 Kg Mild Steel Swimming Pool Filtration Plant
              </h2>

              <p className="text-muted-foreground">
                Bharat H2O Solutions, our Pipeless Swimming Pool Filters provide a compact, plug-and-play solution to traditional pool filtration systems. Crafted with high-grade mild steel (100kg unit weight), this robust system is ideal for both residential and commercial swimming pools.
              </p>

              <ul className="space-y-1 text-muted-foreground">
                <li>Prevents scale buildup in pipes and boilers.</li>
                <li>Lowers maintenance and increases equipment life.</li>
                <li>Improves heating efficiency and water quality.</li>
              </ul>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry">Enquiry Now</NavLink>
              </Button>
            </div>
          </div>

          {/* SECOND BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-black">
                Swimming Pool Filtration Systems
              </h2>

              <p className="text-muted-foreground">
               Bharat H2O Solutions,our pipeless swimmming pool filters offer an innovative and compact filteration solution.This system eliminates the need for conventional piping,providing efficient filteration for clean and crystal-clear pool water.With space saving design & simplified installation.
              </p>

              <ul className="space-y-1 text-muted-foreground">
                <li>Prevents scale and mineral deposits.</li>
                <li>Improves water taste and performance.</li>
                <li>Ideal for small restaurants, homes & offices.</li>
              </ul>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry">Enquiry Now</NavLink>
              </Button>
            </div>

            <div className="w-full">
              <div className="w-full h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={swimmingpool2}
                  alt="100 LPH"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM COMPONENTS */}
      <section className="py-10 md:py-14">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Complete Pool System
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sand & Cartridge Filters</CardTitle>
                <CardDescription>Options for all pool sizes.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pool Pumps</CardTitle>
                <CardDescription>
                  Energy-efficient water circulation.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Chemical Dosing</CardTitle>
                <CardDescription>
                  Automated chlorine & pH control.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>UV Disinfection</CardTitle>
                <CardDescription>
                  Advanced sanitization technology.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Our Systems?
          </h2>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Superior Filtration</CardTitle>
                <CardDescription>
                  Removes particles as small as 2 microns.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Low Maintenance</CardTitle>
                <CardDescription>
                  Easy backwash & minimal upkeep.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Energy Efficient</CardTitle>
                <CardDescription>Saves up to 70% energy.</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Complete Support</CardTitle>
                <CardDescription>Installation & AMC available.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 gradient-secondary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Pool Filtration Solution?
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-white/90">
            Get expert advice and installation across all pool types.
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

export default SwimmingPool;
