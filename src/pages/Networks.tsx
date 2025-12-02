import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { Building2, Hotel, Factory, Hospital, GraduationCap, Home, Quote } from "lucide-react";
import indiaNetwork from "@/assets/india-network.webp";
import aboutOffice from "@/assets/about-office.webp";

const Networks = () => {
  const sectors = [
    {
      icon: Building2,
      title: "Commercial Complexes",
      description: "Shopping malls, office buildings, and business parks",
      clients: ["Express Zone Mall", "Corporate offices", "Business centers"],
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotels, resorts, and restaurants",
      clients: ["5-star hotels", "Resort properties", "Restaurant chains"],
    },
    {
      icon: Factory,
      title: "Industrial",
      description: "Manufacturing facilities and industrial plants",
      clients: ["Textile industries", "Chemical plants", "Food processing units"],
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "Hospitals and medical facilities",
      clients: ["Multi-specialty hospitals", "Diagnostic centers", "Nursing homes"],
    },
    {
      icon: GraduationCap,
      title: "Educational",
      description: "Schools, colleges, and universities",
      clients: ["Educational institutions", "Hostels", "Training centers"],
    },
    {
      icon: Home,
      title: "Residential",
      description: "Housing societies and gated communities",
      clients: ["Residential complexes", "Gated communities", "Apartment buildings"],
    },
  ];

  const locations = [
    "Mumbai", "Pune", "Nashik", "Aurangabad", "Nagpur",
    "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
    "Ahmedabad", "Surat", "Jaipur", "Lucknow", "Indore"
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "300+", label: "Happy Clients" },
    { value: "15+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-4">
              Our Reach
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Our Network & Clients</h1>
            <p className="text-lg text-primary-foreground/90">
              Serving diverse sectors across India with reliable water treatment solutions
            </p>
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

      {/* Sectors Served */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Sectors We Serve</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide tailored water treatment solutions for various industries with specific requirements
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <sector.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Typical Clients:</h4>
                  <ul className="space-y-1">
                    {sector.clients.map((client, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-secondary">•</span>
                        {client}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Coverage with Map */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-secondary font-semibold">Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold">Pan-India Presence</h2>
              <p className="text-lg text-muted-foreground">
                With a strong network across India, we provide timely service and support to clients nationwide. Our presence in major cities ensures quick response and reliable after-sales support.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-background border-2 rounded-lg p-3 text-center hover:border-primary transition-colors"
                  >
                    <p className="font-medium text-sm">{location}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src={indiaNetwork} 
                alt="Pan-India network coverage" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-secondary font-semibold">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-2">What Our Clients Say</h2>
            <Card className="border-2 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="h-12 w-12 rounded-full gradient-secondary flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>
              <CardContent className="pt-12 pb-8 px-8">
                <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                  "Bharat H2O Solutions provided an excellent sewage treatment plant for our residential complex. The
                  installation was smooth, and their after-sales service has been outstanding. Highly recommended for
                  anyone looking for reliable water treatment solutions."
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">PM</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Property Manager</p>
                    <p className="text-sm text-muted-foreground">Residential Complex, Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Growing Network</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Partner with us for reliable, efficient, and sustainable water treatment solutions. Let's build a cleaner future together.
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

export default Networks;