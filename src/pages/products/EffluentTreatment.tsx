import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

import effluentTreatment from "@/assets/effluent-treatment.webp";
import custombuild from "@/assets/custombuild.webp";
import bgwater from "@/assets/Effluentbg.webp"; // add your banner bg image

import { Factory, Recycle, Shield, Settings } from "lucide-react";

const EffluentTreatment = () => {
  const features = [
    {
      icon: Factory,
      title: "Industrial Grade",
      description:
        "Designed for various industrial applications and requirements",
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
      {/* HERO SECTION WITH FULL BG IMAGE */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white">
        <img
          src={bgwater}
          alt="Effluent Treatment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            Effluent Treatment Plants (ETP)
          </h1>
        </div>
      </section>

      {/* Features Section */}
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

      {/* FIRST BLOCK */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={effluentTreatment}
                  alt="200 LPH Water Softening Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Wastewater Effluent Treatment Plant
              </h2>

              <p className="text-lg text-muted-foreground">
                An Effluent Treatment Plant (ETP) or Waste Water Treatment Plant (WWTP) is a unit plant where various physical, biological and chemical processes are used to change the properties of the waste water by removing harmful substances in order to turn it into a type of water that can be safely discharged into the..
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li>Prevents scale buildup in pipes & equipment</li>
                <li>Reduces maintenance & increases equipment life</li>
                <li>Improves boiler & cooling tower efficiency</li>
              </ul>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* SECOND BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Packaged Effluent Treatment Plant
              </h2>

              <p className="text-lg text-muted-foreground">
               Complete treatment systems that come as a single package, often pre-fabricated, ready for on-site installation.
              </p>

              <ul className="space-y-2 text-muted-foreground">
                <li>Integrates all necessary treatment stages.</li>
                <li>Suitable for sites with limited space.</li>
                <li>User-friendly controls and low maintenance.</li>
                <li>Removes large solids and debris.</li>
              </ul>

              <Button asChild className="gradient-primary py-2 px-6 mt-3">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>

            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={custombuild}
                  alt="100 LPH Water Softening Plant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>

            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="border shadow-sm p-4 rounded-xl hover:shadow-md transition-all"
                >
                  <CardHeader>
                    <CardTitle className="text-base">{industry}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-10 md:py-14 bg-muted/40">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Treatment Stages</h2>

            <div className="space-y-5">
              {[
                {
                  title: "Primary Treatment",
                  desc: "Physical removal of suspended solids",
                },
                {
                  title: "Secondary Treatment",
                  desc: "Biological treatment using MBBR or activated sludge",
                },
                {
                  title: "Tertiary Treatment",
                  desc: "Advanced chemical & filtration treatment",
                },
              ].map((item, i) => (
                <Card key={i} className="border p-6 rounded-xl shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">
                      {item.title}
                    </CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Need Industrial Effluent Treatment?
          </h2>
          <p className="text-lg mb-5 text-secondary-foreground/90 max-w-2xl mx-auto">
            Get a customized ETP solution tailored for your industry.
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

export default EffluentTreatment;
