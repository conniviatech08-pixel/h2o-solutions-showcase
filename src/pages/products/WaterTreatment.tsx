import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import watertreatment from "@/assets/emp.png";
import bgwater from "@/assets/water.jpg";
import WaterTreatment2 from "@/assets/500lph.jpg";
import WaterTreatment3 from "@/assets/100kld.jpeg";

import { Droplets, Settings, Award, Shield } from "lucide-react";

const WaterTreatment = () => {
  const features = [
    {
      icon: Droplets,
      title: "Advanced Filtration",
      description:
        "Multi-stage filtration process ensures pure, safe drinking water",
    },
    {
      icon: Settings,
      title: "Fully Automated",
      description:
        "Automatic operation with minimal manual intervention required",
    },
    {
      icon: Award,
      title: "High Efficiency",
      description:
        "Optimized design for maximum water recovery and minimal waste",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Meets all drinking water quality standards and regulations",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-auto md:h-[380px] flex items-center justify-center text-white py-12 md:py-0">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={bgwater}
            alt="Water Treatment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Text */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Water Treatment Plants
          </h1>
          <p className="text-base sm:text-lg md:text-lg text-white/90 max-w-3xl mx-auto">
            Our comprehensive range of water treatment plants includes systems
            designed to treat water from various sources including borewell
            water. We offer advanced membrane bioreactor (MBR) technology for
            pharmaceutical, industrial, and commercial applications with
            capacities ranging from 100 LPH to 500 LPH and beyond.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 bg-background">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center p-6 rounded-2xl border border-gray-200 shadow-sm 
                       hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="flex flex-col items-center p-0">
                  <div className="h-14 w-14 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-md transition-transform duration-300 hover:scale-110">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Water Treatment Solutions Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <div className="relative mb-6">
            <img
              src={watertreatment}
              alt="Water Treatment"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl opacity-50 mx-auto"
            />
            <h2 className="text-3xl md:text-4xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Our Water Treatment Solutions
            </h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide complete water treatment solutions including Filtration
            Systems, Water Softeners, Dealkalizers, Demineralizers, Ultrapure
            Water Technologies, Chemical Dosing Systems, and Ultrafiltration
            units.
          </p>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4 mt-6">
            {[
              "Prevents scaling, corrosion, and clogging in pipelines and equipment",
              "Improves performance and lifespan of industrial machinery",
              "Ensures high-purity water for process, drinking, and utility applications",
              "Reduces operational downtime and long-term maintenance costs",
              "Enhances safety, cleanliness, and overall water quality",
              "Helps industries meet environmental and regulatory compliance",
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl shadow-md p-3 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-primary text-white font-bold">
                  ✓
                </div>
                <p className="text-gray-700 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant Showcase Section */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-12">
          {/* 500 LPH Plant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <img
                src={WaterTreatment2}
                alt="500 LPH Water Treatment Plant"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-3">
              <h3 className="text-3xl md:text-4xl font-bold">
                500 LPH Water Treatment Plant
              </h3>
              <p className="text-muted-foreground">
                A 500 LPH Water Treatment Plant refers to a system designed to
                treat 500 Liters of water per hour.
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>
                  Advanced filtration system for high-quality water output.
                </li>
                <li>
                  Reduces contaminants, odors, and harmful chemicals
                  effectively.
                </li>
                <li>
                  Energy-efficient design suitable for large-scale operations.
                </li>
                <li>Easy maintenance with long-lasting durable components.</li>
              </ul>
              <Button
                asChild
                className="gradient-primary py-2 px-4 mt-2 w-[140px]"
              >
                <NavLink
                  to="/enquiry"
                  className="text-white font-semibold text-center"
                >
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* 100 KLD Plant */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col justify-center space-y-3 order-2 lg:order-1">
              <h3 className="text-3xl md:text-4xl font-bold">
                100 KLD Grey Water Treatment Plant
              </h3>
              <p className="text-muted-foreground">
                A 100 KLD greywater plant treats 100,000 liters of domestic
                wastewater per day for reuse.
              </p>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>
                  Advanced filtration system for high-quality water output.
                </li>
                <li>
                  Reduces contaminants, odors, and harmful chemicals
                  effectively.
                </li>
                <li>
                  Energy-efficient design suitable for large-scale operations.
                </li>
                <li>Easy maintenance with long-lasting durable components.</li>
              </ul>
              <Button
                asChild
                className="gradient-primary py-2 px-4 mt-2 w-[140px]"
              >
                <NavLink
                  to="/enquiry"
                  className="text-white font-semibold text-center"
                >
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
            <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center order-1 lg:order-2">
              <img
                src={WaterTreatment3}
                alt="100 KLD Water Treatment Plant"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-8 bg-muted/50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Applications</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Explore the wide range of applications for our water treatment
            solutions.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                title: "Industrial Use",
                desc: "Pharmaceutical, chemical, and manufacturing industries",
              },
              {
                title: "Commercial Use",
                desc: "Hotels, restaurants, hospitals, and offices",
              },
              {
                title: "Residential Use",
                desc: "Apartments, villas, and housing societies",
              },
              {
                title: "Municipal Use",
                desc: "Government buildings and public facilities",
              },
            ].map((app, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-semibold mb-2">
                    {app.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {app.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Capacity?
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            We design and manufacture customized water treatment plants from 100
            LPH to 50,000 LPH based on your specific requirements.
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

export default WaterTreatment;
