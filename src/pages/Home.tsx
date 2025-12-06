import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavLink } from "@/components/NavLink";
import {
  Droplets,
  Leaf,
  Shield,
  Award,
  Users,
  Settings,
  CheckCircle,
  Phone,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import pressureSandFilter from "@/assets/pressuresand1.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import heroWater from "@/assets/hero-water.webp";
import teamWorking from "@/assets/team-working.webp";
import about from "@/assets/about.jpeg";
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
      description:
        "Advanced water treatment technology for clean and safe water",
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
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              Leading Water Treatment Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Pure Water, <br />
              <span className="text-secondary">Healthy Life</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl">
              India's trusted provider of innovative water and wastewater
              treatment solutions for residential, commercial, and industrial
              applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <NavLink to="/products">View Products</NavLink>
              </Button>
              
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <NavLink to="/enquiry">Get Free Quote</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              // Determine suffix
              const suffix = stat.value.includes("+")
                ? "+"
                : stat.value.includes("/")
                ? "/7"
                : "";

              const isNumeric = /^[0-9]/.test(stat.value);

              return (
                <div
                  key={index}
                  className="text-center flex flex-col items-center gap-2"
                >
                  <div className="text-2xl md:text-3xl font-bold text-secondary-foreground">
                    {isNumeric ? (
                      <CountUp
                        end={stat.value}
                        suffix={suffix}
                        duration={2000}
                      />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-secondary-foreground/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* IMAGE */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={about}
                  alt="About Bharat H2O"
                  className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="space-y-4 md:space-y-6">
              <span className="text-secondary font-semibold uppercase">
                About Bharat H2O
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Your Trusted Partner in Water Treatment Solutions
              </h2>
              <p className="text-muted-foreground text-lg">
                With over 15 years of experience, Bharat H2O specializes in
                designing, manufacturing, and installing innovative water &
                wastewater treatment systems.
              </p>

              {/* LIST */}
              <ul className="space-y-3">
                {[
                  "ISO 9001:2015 Certified Company",
                  "Pan-India Service Network",
                  "Customized Solutions for Every Requirement",
                  "Dedicated After-Sales Support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="gradient-primary mt-4">
                <NavLink to="/about">Learn More</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-gray-50"> */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We provide comprehensive water treatment solutions with cutting-edge
            technology and expert service
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="relative border-2 border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>

                <CardHeader className="flex flex-col items-center text-center relative z-10">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 group-hover:scale-125">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold uppercase">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              Our Products & Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete water treatment solutions for residential, commercial &
              industrial use
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden rounded-2xl border shadow-sm 
          hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* IMAGE (Reduced Size) */}
                <div className="relative h-[160px] md:h-[200px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <CardHeader className="p-5">
                  <CardTitle className="text-xl font-semibold">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-sm mt-1">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="gradient-primary">
              <NavLink to="/products">View All Products</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}

      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
              <span className="text-secondary font-semibold uppercase">
                Sustainability
              </span>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Committed to Environmental Sustainability
              </h2>

              <p className="text-muted-foreground text-lg max-w-xl">
                Our solutions help industries reduce water waste, save energy,
                and meet environmental compliance standards.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Water Recycling",
                    desc: "Up to 90% water recovery",
                  },
                  { title: "Zero Discharge", desc: "ZLD systems available" },
                  { title: "Energy Efficient", desc: "Low power consumption" },
                  { title: "Eco Materials", desc: "Sustainable components" },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="p-5 border rounded-xl shadow-sm hover:shadow-md transition-all"
                  >
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2">
              <img
                src={ecoPlant}
                alt="Eco Friendly Water Treatment"
                className="rounded-2xl shadow-xl w-full h-[320px] md:h-[420px] object-cover border"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Contact us today for a free consultation and quote. Our experts
              are ready to help you find the perfect water treatment solution
              for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="hover:bg-primary-foreground/10"
              >
                <NavLink to="/enquiry">Request Enquiry</NavLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
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
