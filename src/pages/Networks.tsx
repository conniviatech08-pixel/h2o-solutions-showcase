import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Hotel, Factory, Hospital, GraduationCap, Home } from "lucide-react";

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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Network & Clients</h1>
            <p className="text-lg text-primary-foreground/90">
              Serving diverse sectors across India with reliable water treatment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sectors We Serve</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{sector.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{sector.description}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Typical Clients:</h4>
                  <ul className="space-y-1">
                    {sector.clients.map((client, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary">•</span>
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

      {/* Geographic Coverage */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Pan-India Presence</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              With a strong network across India, we provide timely service and support to clients nationwide
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="bg-card border-2 rounded-lg p-4 text-center hover:border-primary transition-colors"
                >
                  <p className="font-semibold">{location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                500+
              </div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                300+
              </div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                15+
              </div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">What Our Clients Say</h2>
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground mb-6 italic">
                  "Bharat H2O Solutions provided an excellent sewage treatment plant for our residential complex. The
                  installation was smooth, and their after-sales service has been outstanding. Highly recommended for
                  anyone looking for reliable water treatment solutions."
                </p>
                <p className="font-semibold">- Property Manager</p>
                <p className="text-sm text-muted-foreground">Residential Complex, Mumbai</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Networks;
