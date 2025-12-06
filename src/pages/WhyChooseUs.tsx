import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import {
  CheckCircle2,
  Award,
  Users,
  Wrench,
  Shield,
  TrendingUp,
  HeartHandshake,
  Leaf,
} from "lucide-react";

import qualityAssurance from "@/assets/quality-assurance.webp";
import teamWorking from "@/assets/team-working.webp";
import ecoPlant from "@/assets/whychoose1.jpg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description:
        "Over a decade and a half of proven expertise serving clients across India.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "ISO-certified products with strict quality checks and premium materials.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced engineers, technicians, and consultants dedicated to solutions.",
    },
    {
      icon: Wrench,
      title: "Comprehensive Service",
      description:
        "End-to-end service from consultation to installation and maintenance.",
    },
    {
      icon: TrendingUp,
      title: "Innovative Technology",
      description:
        "We invest in R&D to deliver the latest efficient technologies.",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centric",
      description:
        "We prioritize understanding your needs and delivering tailored solutions.",
    },
    {
      icon: Leaf,
      title: "Environmental Friendly",
      description:
        "Solutions designed for sustainability and reduced environmental footprint.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "500+ successful projects across all sectors.",
    },
  ];

  const advantages = [
    "Customized solutions based on your exact requirements",
    "Competitive pricing with quality assurance",
    "Quick order-to-delivery timeline",
    "Pan-India support network",
    "Energy-efficient systems to reduce costs",
    "Compliant with environmental regulations",
    "Complete documentation and training",
    "Long-term spare parts availability",
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${teamWorking})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-3">
              Why Bharat H2O
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-foreground">
              Why Choose Bharat H2O?
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Trusted partner for reliable, efficient and innovative water
              treatment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Our Strengths
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Card
                key={index}
                className="border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group text-center"
              >
                <CardHeader className="p-0 mb-3 flex flex-col items-center">
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-2 group-hover:scale-110 transition">
                    <reason.icon className="text-white h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 text-sm text-muted-foreground">
                  {reason.description}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          {/* CENTERED HEADING */}
          <div className="text-center mb-10">
            <span className="text-secondary uppercase tracking-wide font-semibold block">
              Quality First
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Additional Advantages
            </h2>
          </div>

          {/* 4 + 4 GRID BOXES */}
          <div className="grid md:grid-cols-2 gap-6 ">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-background p-4 rounded-lg shadow-sm"
              >
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1" />
                <p className="text-foreground text-sm">{adv}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* TEXT */}
            <div className="space-y-5 order-2 lg:order-1">
              <span className="text-secondary uppercase font-semibold">
                Sustainability
              </span>

              <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We deliver reliable, energy-efficient and eco-friendly water
                treatment solutions.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Choosing us means partnering with a team that prioritizes
                quality and sustainability.
              </p>

              <Button asChild className="gradient-primary mt-2">
                <NavLink to="/enquiry">Get Started Today</NavLink>
              </Button>
            </div>

            {/* IMAGE */}
            <div className="order-1 lg:order-2">
              <div className="w-full h-[320px] md:h-[380px] lg:h-[350px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ecoPlant}
                  alt="Eco-friendly"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-16 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-6 max-w-xl mx-auto text-secondary-foreground/90">
            Join hundreds of satisfied clients who trust Bharat H2O.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
          >
            <NavLink to="/contact">Contact Our Team</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
