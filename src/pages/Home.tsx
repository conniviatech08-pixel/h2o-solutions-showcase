import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import { Droplets, Leaf, Shield, Award, Users, Settings, CheckCircle, Phone } from "lucide-react";
import pressureSandFilter from "@/assets/pressure-sand-filter.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import heroWater from "@/assets/hero-water.webp";
import teamWorking from "@/assets/team-working.webp";
import cleanWater from "@/assets/clean-water.webp";
import ecoPlant from "@/assets/eco-plant.webp";

const Home = () => {
  const services = [
    {
      image: pressureSandFilter,
      title: "Pressure Sand Filters",
      description: "High-efficiency filtration systems for water purification",
    },
    {
      image: swimmingPoolFilter,
      title: "Swimming Pool Filters",
      description: "Crystal clear pool water with advanced filtration",
    },
    {
      image: waterTreatmentPlant,
      title: "Water Treatment Plants",
      description: "Complete water treatment solutions for all needs",
    },
    {
      image: organicComposter,
      title: "Organic Waste Composters",
      description: "Eco-friendly waste management solutions",
    },
    {
      image: effluentTreatment,
      title: "Effluent Treatment Plants",
      description: "Industrial wastewater treatment systems",
    },
    {
      image: sewageTreatment,
      title: "Sewage Treatment Plants",
      description: "Advanced sewage treatment technology",
    },
  ];

  const features = [
    {
      icon: Droplets,
      title: "Pure Water Solutions",
      description: "Advanced water treatment technology for clean and safe water",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Sustainable solutions that protect our environment",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "ISO certified products with highest quality standards",
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "15+ years of excellence in water treatment",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals dedicated to your success",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored systems designed for your specific needs",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroWater})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium">
              Leading Water Treatment Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Pure Water, <br />
              <span className="text-secondary">Healthy Life</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              India's trusted provider of innovative water and wastewater treatment solutions for residential, commercial, and industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <NavLink to="/products">View Products</NavLink>
              </Button>
              <Button asChild size="lg" className="text-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30">
                <NavLink to="/enquiry">Get Free Quote</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary-foreground">{stat.value}</div>
                <div className="text-secondary-foreground/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={teamWorking} 
                alt="Our expert team at work" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:block">
                <img 
                  src={cleanWater} 
                  alt="Clean purified water" 
                  className="w-48 h-48 object-cover rounded-xl shadow-xl border-4 border-background"
                />
              </div>
            </div>
            <div className="space-y-6">
              <span className="text-secondary font-semibold">About Bharat H2O</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Your Trusted Partner in Water Treatment Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 15 years of experience, Bharat H2O has been at the forefront of providing cutting-edge water treatment solutions across India. We specialize in designing, manufacturing, and installing complete water and wastewater treatment systems.
              </p>
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 Certified Company",
                  "Pan-India Service Network",
                  "Customized Solutions for Every Need",
                  "After-Sales Support & Maintenance",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="gradient-primary">
                <NavLink to="/about">Learn More About Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Why Choose Bharat H2O?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive water treatment solutions with cutting-edge technology and expert service
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Our Products</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-2">Our Products & Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete range of water treatment solutions for residential, commercial, and industrial applications
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary">
              <NavLink to="/products">View All Products</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="text-secondary font-semibold">Sustainability</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Committed to Environmental Sustainability
              </h2>
              <p className="text-muted-foreground text-lg">
                Our water treatment solutions are designed with the environment in mind. We help businesses and communities reduce their water footprint while ensuring compliance with environmental regulations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Water Recycling", desc: "Up to 90% water recovery" },
                  { title: "Zero Discharge", desc: "ZLD systems available" },
                  { title: "Energy Efficient", desc: "Low power consumption" },
                  { title: "Eco Materials", desc: "Sustainable components" },
                ].map((item, index) => (
                  <Card key={index} className="p-4">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={ecoPlant} 
                alt="Eco-friendly water treatment plant" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today for a free consultation and quote. Our experts are ready to help you find the perfect
              water treatment solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <NavLink to="/enquiry">Request Enquiry</NavLink>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <NavLink to="/contact" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Us
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;