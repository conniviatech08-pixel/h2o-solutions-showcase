import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import stpbg1 from "@/assets/stpbg.webp";
import stp2 from "@/assets/stp2.webp";
import stp3 from "@/assets/stp3.webp";
import { Leaf, Settings, Droplets, Award } from "lucide-react";

const SewageTreatment = () => {
  const features = [
    {
      icon: Leaf,
      title: "Eco-Friendly Process",
      description:
        "Environment-friendly treatment with minimal ecological impact",
    },
    {
      icon: Settings,
      title: "Modular Design",
      description:
        "Compact and scalable design suitable for various applications",
    },
    {
      icon: Droplets,
      title: "Advanced Treatment",
      description: "MBBR technology for efficient biological treatment",
    },
    {
      icon: Award,
      title: "Low Maintenance",
      description: "Minimal operational cost with automated systems",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      {/* <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white"> */}
      <section className="relative h-[380px] md:h-[420px] flex items-center justify-center text-white">

        <div className="absolute inset-0 -z-10">
          <img
            src={stpbg1}
            alt="Water Treatment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sewage Treatment Plants (STP)
            </h1>
            <p className="text-lg text-white/90">
              Our range of sewage treatment plants includes commercial sewage
              treatment plants, automatic systems, sequencing batch reactors,
              integrated fixed-film activated sludge plants, hybrid systems, and
              compact MBBR sewage treatment plants.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 md:py-14 bg-background">
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

      {/* PRODUCTS SECTION */}
      <section className="py-8 md:py-10 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-16">
          {/* FIRST BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={stp2}
                  alt="Rotating Biological Contactor Sewage Treatment Plant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Rotating Biological Contactor Sewage Treatment Plant
              </h2>

              <p className="text-lg text-muted-foreground">
                A Rotating Biological Contactor (RBC) sewage treatment plant
                uses rotating discs to grow biofilm and degrade organic
                pollutants efficiently.
              </p>

              <div className="space-y-1">
                <p className="text-muted-foreground">
                  Uses rotating discs for biofilm growth.
                </p>
                <p className="text-muted-foreground">
                  Energy-efficient and space-saving.
                </p>
                <p className="text-muted-foreground">
                  Prevents pollution of water bodies.
                </p>
                <p className="text-muted-foreground">
                  Reduces waterborne diseases.
                </p>
              </div>

              <Button asChild className="gradient-primary py-2 px-6 mt-2">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* SECOND BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Integrated Fixed-Film Activated Sludge Sewage Treatment Plant
              </h2>

              <p className="text-lg text-muted-foreground">
                Combines MBBR technology with activated sludge to improve
                treatment capacity and performance without increasing footprint.
              </p>

              <div className="space-y-1">
                <p className="text-muted-foreground">
                  Combines MBBR technology with traditional activated sludge processes.
                </p>
                <p className="text-muted-foreground">
                 Enhances the treatment capacity and performance of existing plants by adding biofilm carriers to the aeration tanks.
                </p>
                <p className="text-muted-foreground">
                  Ideal for upgrading existing plants without increasing the footprint significantly
                </p>
                <p className="text-muted-foreground">
                  Removes sand, gravel, and other heavy particles that can cause wear and tear on equipment.
                </p>
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
                  src={stp3}
                  alt="IFAS Sewage Treatment Plant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Key Benefits
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Meets Pollution Norms</CardTitle>
                  <CardDescription>
                    Treated water meets all discharge standards.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cost-Effective</CardTitle>
                  <CardDescription>
                    Low operational and maintenance cost.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Water Reuse</CardTitle>
                  <CardDescription>
                    Perfect for gardening & flushing.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Compact Installation</CardTitle>
                  <CardDescription>
                    Ideal for urban environments.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-14 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Looking for Custom STP Solution?
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            We provide customized sewage treatment plants designed for your
            specific needs.
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

export default SewageTreatment;
