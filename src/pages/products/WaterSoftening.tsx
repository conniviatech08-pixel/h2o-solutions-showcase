import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import watersoftening from "@/assets/watersoftening1.webp";
import watersoftening1 from "@/assets/watersoftening2.webp";
import bgwater from "@/assets/watersoft.jpg"; // ⭐ ADD YOUR BG IMAGE HERE
import { Droplets, Shield, Settings, Award } from "lucide-react";

const WaterSoftening = () => {
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
      description: "Fully automated regeneration cycles",
    },
    {
      icon: Award,
      title: "Efficient Design",
      description: "Optimized resin usage for maximum softening",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ================= HERO ================= */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={bgwater}
            alt="Water Softening"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Water Softening Plants</h1>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-10 bg-background">
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

      {/* ================= PRODUCT 1 ================= */}
      <section className="py-10 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl">
                <img
                  src={watersoftening}
                  alt="200 LPH Water Softening Plant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                200 LPH Water Softening Plant
              </h2>

              <p className="text-muted-foreground">
               A water softening plant is a facility remove calcium & magnesium ions from hard water to make it softer.
              </p>

              <div className="space-y-1">
                <p className="text-muted-foreground">Prevents scale buildup.</p>
                <p className="text-muted-foreground">Reduces maintenance cost.</p>
                <p className="text-muted-foreground">Improves boiler efficiency.</p>
              </div>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* ================= PRODUCT 2 ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                100 LPH Water Softening Plant
              </h2>

              <p className="text-muted-foreground">
              A water softener reduces the dissolved calcium,magnesium, and to some degree manganse and ferrous iron ion concentration in hard water.
              </p>

              <div className="space-y-1">
                <p className="text-muted-foreground">Protects appliances.</p>
                <p className="text-muted-foreground">Removes hardness minerals.</p>
                <p className="text-muted-foreground">Reduces scale formation.</p>
              </div>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>

            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl shadow-xl">
                <img
                  src={watersoftening1}
                  alt="100 LPH Water Softening Plant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How Water Softening Works
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Ion Exchange Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Hard water passes through resin beads that exchange calcium & magnesium with sodium ions.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Softening Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous hardness removal.
                    </p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Regeneration Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Resin cleaning with brine solution.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= BENIFITS ================= */}
      <section className="py-10 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Benefits of Soft Water
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["No Scale Formation", "Prevents limescale buildup"],
                ["Better Soap Performance", "Improves lather & cleaning"],
                ["Extended Equipment Life", "Protects heaters & appliances"],
                ["Energy Savings", "Better heat transfer"],
                ["Softer Skin & Hair", "Gentle on body"],
                ["Cleaner Dishes & Clothes", "Spot-free cleaning"],
              ].map(([title, desc], i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Applications
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Industrial Use", "Boilers, cooling towers, manufacturing"],
                ["Commercial Use", "Hotels, hospitals, laundries"],
                ["Residential Use", "Homes & apartments"],
                ["Pre-Treatment", "Before RO & other systems"],
              ].map(([title, desc], i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{title}</CardTitle>
                    <CardDescription>{desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-10 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Say Goodbye to Hard Water
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get the perfect water softening solution for your needs.
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

export default WaterSoftening;
