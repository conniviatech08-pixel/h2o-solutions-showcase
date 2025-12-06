import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import pressureSandFilter from "@/assets/pressuresand1.webp";
import swimmingPoolFilter from "@/assets/swimming-pool-filter.webp";
import waterTreatmentPlant from "@/assets/water-treatment-plant.webp";
import organicComposter from "@/assets/organic-composter.webp";
import effluentTreatment from "@/assets/effluent-treatment.webp";
import sewageTreatment from "@/assets/sewage-treatment.webp";
import heroWater from "@/assets/hero-water.webp";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      image: waterTreatmentPlant,
      title: "Water Treatment Plants",
      description:
        "Complete water treatment systems for residential, commercial, and industrial applications.",
      features: [
        "Capacity: 500 LPH to 50,000 LPH",
        "Automated operation",
        "Compact design",
        "Energy efficient",
      ],
      link: "/products/water-treatment",
    },
    {
      image: sewageTreatment,
      title: "Sewage Treatment Plants (STP)",
      description:
        "Advanced sewage treatment solutions that meet discharge standards.",
      features: [
        "Modular & compact",
        "Low operational cost",
        "Minimal maintenance",
        "Eco-friendly process",
      ],
      link: "/products/sewage-treatment",
    },
    {
      image: effluentTreatment,
      title: "Effluent Treatment Plants (ETP)",
      description:
        "Industrial wastewater treatment system for textile, pharma, chemical, food industries.",
      features: [
        "Customized solutions",
        "Pollution control compliant",
        "ZLD options",
        "Advanced automation",
      ],
      link: "/products/effluent-treatment",
    },
    {
      image: pressureSandFilter,
      title: "Pressure Sand Filters",
      description:
        "High-efficiency sand filters for removing turbidity and suspended solids.",
      features: [
        "FRP/MS body",
        "Multi-grade media",
        "Easy backwash",
        "Long service life",
      ],
      link: "/products/pressure-sand-filter",
    },
    {
      image: swimmingPoolFilter,
      title: "Swimming Pool Filters",
      description:
        "Premium filters to keep swimming pools clean and hygienic.",
      features: [
        "Sand & cartridge filters",
        "Pool pumps",
        "Chemical dosing",
        "UV disinfection",
      ],
      link: "/products/swimming-pool",
    },
    {
      image: organicComposter,
      title: "Organic Waste Composters",
      description:
        "Fully automatic machines converting organic waste into compost.",
      features: [
        "Automatic operation",
        "Odorless process",
        "90% reduction",
        "24-hour cycle",
      ],
      link: "/products/organic-composter",
    },
  ];

  return (
    <div className="flex flex-col">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroWater})` }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="container relative z-10 px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-white text-sm mb-4">
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Products & Solutions
            </h1>
            <p className="text-lg text-white/90">
              Complete range of water & wastewater treatment equipment.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- PRODUCTS SECTION ---------------- */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container px-4 md:px-10">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold uppercase">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              Complete Product Range
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Water treatment, wastewater treatment & waste management products.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-10">
            {products.map((p, i) => (
              <Card
                key={i}
                className="relative overflow-hidden border bg-white rounded-2xl shadow-sm 
                hover:shadow-xl transition-all duration-500 group"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center px-6 md:px-10 py-8">

                  {/* ---- IMAGE SMALL + CLEAN ---- */}
                  <div className="flex justify-center">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="rounded-xl w-[70%] md:w-[60%] object-cover 
                      transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>

                  {/* ---- CONTENT ---- */}
                  <div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition">
                        {p.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2 text-muted-foreground">
                        {p.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <h4 className="font-semibold mb-3 text-primary text-lg">
                        Key Features:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {p.features.map((f, idx) => (
                          <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="text-secondary font-semibold">✓</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          onClick={() => navigate(p.link)}
                          className="gradient-primary shadow-md flex items-center gap-2"
                        >
                          View Details <ArrowRight className="h-4 w-4" />
                        </Button>

                        <Button variant="outline" onClick={() => navigate("/enquiry")}>
                          Get Quote
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;
