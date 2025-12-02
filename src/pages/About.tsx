import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Target, Eye, Award, CheckCircle, Users, Clock, Building } from "lucide-react";
import aboutOffice from "@/assets/about-office.webp";
import qualityAssurance from "@/assets/quality-assurance.webp";
import teamWorking from "@/assets/team-working.webp";

const About = () => {
  const stats = [
    { icon: Clock, value: "15+", label: "Years Experience" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Building, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "ISO", label: "9001:2015 Certified" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">About Bharat H2O Solutions</h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in water and wastewater treatment solutions since 2008. We combine advanced technology with expert engineering to deliver sustainable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center flex flex-col items-center gap-2">
                <stat.icon className="h-8 w-8 text-secondary-foreground/80" />
                <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-secondary-foreground/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview with Image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-semibold">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold">Leading the Water Treatment Industry</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Bharat H2O Solutions Private Limited</strong> is a leading manufacturer and supplier of
                  comprehensive water and wastewater treatment solutions in India. With over 15 years of industry
                  experience, we have established ourselves as a trusted name in the water treatment sector.
                </p>
                <p>
                  Our company specializes in designing, manufacturing, and installing a wide range of water treatment
                  plants, sewage treatment plants, effluent treatment plants, and related equipment. We serve diverse
                  sectors including residential, commercial, industrial, and municipal clients.
                </p>
                <p>
                  Located in Mumbai, Maharashtra, we combine advanced technology with expert engineering to deliver
                  sustainable and cost-effective solutions.
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
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Mission, Vision & Values</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide innovative, sustainable, and cost-effective water treatment solutions that ensure clean
                  water for all, while protecting the environment for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl gradient-secondary flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred water treatment company in India, recognized for our quality,
                  innovation, and commitment to environmental sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <Award className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Quality Excellence</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Customer Satisfaction</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Environmental Responsibility</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Innovation & Technology</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-secondary" /> Integrity & Trust</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section with Image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={qualityAssurance} 
                alt="Quality assurance and testing" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="text-secondary font-semibold">Quality Commitment</span>
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
              <div className="grid gap-6">
                {[
                  { title: "Expertise & Experience", desc: "Over 15 years of proven track record in delivering successful water treatment projects across various industries and applications." },
                  { title: "Quality Products", desc: "All our products are manufactured using high-grade materials and comply with international quality standards and certifications." },
                  { title: "Custom Solutions", desc: "We design and manufacture customized solutions tailored to meet your specific requirements and site conditions." },
                  { title: "After-Sales Support", desc: "Comprehensive after-sales service including installation, commissioning, maintenance, and technical support." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your water treatment goals. Our experts are ready to provide customized solutions for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/enquiry">Request Quote</NavLink>
            </Button>
            <Button asChild size="lg" className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;