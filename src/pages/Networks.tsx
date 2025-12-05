import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Building2,
  Hotel,
  Factory,
  Hospital,
  GraduationCap,
  Home,
  Quote,
} from "lucide-react";
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
      clients: [
        "Textile industries",
        "Chemical plants",
        "Food processing units",
      ],
    },
    {
      icon: Hospital,
      title: "Healthcare",
      description: "Hospitals and medical facilities",
      clients: [
        "Multi-specialty hospitals",
        "Diagnostic centers",
        "Nursing homes",
      ],
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
      clients: [
        "Residential complexes",
        "Gated communities",
        "Apartment buildings",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      title: "Property Manager",
      desc: "The installation was smooth and their service is excellent. Highly recommended for sewage treatment solutions.",
      number: "Mumbai, Maharashtra",
    },
    {
      id: 2,
      title: "CEO & Founder",
      desc: "The installation was smooth and their service is excellent. Highly recommended for sewage treatment solutions.",
      number: "Warora, Maharashtra",
    },
    {
      id: 3,
      title: "Operations Director",
      desc: "The installation was smooth and their service is excellent. Highly recommended for sewage treatment solutions.",
      number: "Nagpur, Maharashtra",
    },
    {
      id: 4,
      title: "Property Manager",
      desc: "The installation was smooth and their service is excellent. Highly recommended for sewage treatment solutions.",
      number: "Mumbai",
    },
  ];

  const locations = [
    "Mumbai",
    "Pune",
    "Nashik",
    "Aurangabad",
    "Nagpur",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Surat",
    "Jaipur",
    "Lucknow",
    "Indore",
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${aboutOffice})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/60" />

        <div className="container relative z-10 px-4">
          <div className="max-w-xl">
            <span className="inline-block px-4 py-1.5 bg-white/15 rounded-full text-white text-sm mb-4">
              Our Reach
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Our Network & Clients
            </h1>
            <p className="text-white/90 text-lg">
              Serving diverse sectors across India with reliable water treatment
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-10">
            <span className="text-secondary font-semibold">Industries</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Sectors We Serve
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="border hover:border-primary rounded-xl transition-all"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center mb-3">
                    <sector.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{sector.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {sector.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <h4 className="font-semibold text-sm mb-1 text-primary">
                    Typical Clients:
                  </h4>
                  <ul className="space-y-1">
                    {sector.clients.map((client, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex gap-2"
                      >
                        <span className="text-secondary">•</span> {client}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* INDIA MAP SECTION */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="space-y-4">
              <span className="text-secondary font-semibold">Coverage</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Pan-India Presence
              </h2>
              <p className="text-muted-foreground">
                We provide timely service and nationwide support with a strong
                presence across major Indian cities.
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="bg-background border rounded-md p-2 text-center hover:border-primary transition"
                  >
                    <p className="text-sm">{location}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src={indiaNetwork}
                className="rounded-xl shadow-xl w-[75%] md:w-[65%]"
                alt="India Network"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <Testimonial /> */}

      <section className="py-12 md:py-16 bg-white ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Testimonials
          </h2>

          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x"
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className=" min-w-[90%] max-w-[90%] sm:min-w-[70%] sm:max-w-[70%] md:min-w-[45%] md:max-w-[45% lg:min-w-[30%] lg:max-w-[30%] bg-white shadow-md rounded-2xl p-6 flex-shrink-0 border snap-start"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                  <p className="text-gray-600 mb-6 text-sm">{item.desc}</p>

                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <span className="w-10 h-0.5 bg-green-500"></span>
                    {item.number}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollLeft}
              className="absolute -bottom-16 right-20 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={scrollRight}
              className="absolute -bottom-16 right-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 gradient-hero text-primary-foreground text-center">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Join Our Growing Network
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-6 text-primary-foreground/90">
            Partner with us for reliable, efficient, and sustainable water
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

export default Networks;
