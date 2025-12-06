import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import CountUp from "@/components/CountUp";
import { Target, Eye, Award, CheckCircle } from "lucide-react";
import aboutOffice from "@/assets/about-office.webp";
import qualityAssurance from "@/assets/quality-assurance.webp";
import teamWorking from "@/assets/team-working.webp";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutOffice})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-2">
              About Us
            </span>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              About Bharat H2O Solutions
            </h1>

            <p className="text-base text-primary-foreground/90 leading-relaxed">
              Your trusted partner in water and wastewater treatment solutions
              since 2008.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-secondary font-semibold">Our Story</span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Leading the Water Industry
              </h2>

              <div className="space-y-3 text-muted-foreground text-xlleading-relaxed">
                <p>
                  <strong className="text-foreground">
                    Bharat H2O Solutions Pvt. Ltd.
                  </strong>{" "}
                  is a leading manufacturer & supplier of water and wastewater
                  treatment systems.
                </p>

                <p>
                  We design and install water treatment plants, STP, ETP and
                  industrial purification systems.
                </p>

                <p>
                  Based in Mumbai, we deliver sustainable and cost-effective
                  engineering solutions.
                </p>
              </div>

              <Button asChild className="gradient-primary">
                <NavLink to="/contact">Get In Touch</NavLink>
              </Button>
            </div>

            <div className="relative">
              <img
                src={teamWorking}
                alt="Our team at work"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MISSION - VISION - VALUES */}
      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container">
          <div className="text-center mb-8">
            <span className="text-secondary font-semibold uppercase tracking-wide">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Mission, Vision & Values
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6 w-full max-w-5xl mx-auto">
            {/* Mission */}
            <Card className="relative border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-col items-center text-center p-5">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center mb-3 shadow-md">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Our Mission
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2 px-8 pb-8 text-center">
                <p className="text-gray-600 text-sm">
                  To provide sustainable and innovative water treatment
                  solutions.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="relative border rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-col items-center text-center p-5">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center mb-3 shadow-md">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Our Vision
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2 px-8 pb-8 text-center">
                <p className="text-gray-600 text-sm">
                  To become India’s most trusted water treatment company.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="flex justify-center">
            <Card className="w-full md:w-80 border rounded-xl transition-all hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex flex-col items-center text-center p-5">
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-3 shadow-md">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Our Values
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-2 px-8 pb-8 text-center">
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    "Quality Excellence",
                    "Customer Satisfaction",
                    "Environmental Responsibility",
                    "Innovation & Technology",
                    "Integrity & Trust",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QUALITY SECTION */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* IMAGE */}
            <div className="order-2 lg:order-1">
              <img
                src={qualityAssurance}
                alt="Quality assurance"
                className="rounded-2xl shadow-xl w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition-transform"
              />
            </div>

            {/* CONTENT */}
            <div className="order-1 lg:order-2 space-y-4">
              <span className="text-secondary font-semibold uppercase">
                Quality Commitment
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Why Choose Us</h2>

              <div className="space-y-3">
                {[
                  {
                    title: "Expertise & Experience",
                    desc: "Over 15 years of industry-leading solutions.",
                  },
                  {
                    title: "Quality Products",
                    desc: "Built using durable, high-grade materials.",
                  },
                  {
                    title: "Custom Solutions",
                    desc: "Tailored systems based on your requirements.",
                  },
                  {
                    title: "After-Sales Support",
                    desc: "Installation, maintenance & technical support.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="h-9 w-9 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-3">Ready to Partner With Us?</h2>

          <p className="text-base mb-6 max-w-xl mx-auto opacity-90">
            Let’s work together to build sustainable and effective water
            treatment solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/enquiry">Request Quote</NavLink>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
