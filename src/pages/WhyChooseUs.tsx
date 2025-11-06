import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, Users, Wrench, Shield, TrendingUp, HeartHandshake, Leaf } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "15+ Years of Excellence",
      description:
        "Over a decade and a half of proven expertise in water treatment industry, serving hundreds of satisfied clients across India.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "ISO certified products manufactured using premium materials and adhering to international quality standards. Each product undergoes rigorous testing.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our team comprises experienced engineers, technicians, and consultants who are dedicated to providing the best solutions for your needs.",
    },
    {
      icon: Wrench,
      title: "Comprehensive Service",
      description:
        "From consultation to installation, commissioning, and maintenance - we provide end-to-end support throughout the project lifecycle.",
    },
    {
      icon: TrendingUp,
      title: "Innovative Technology",
      description:
        "We continuously invest in R&D to bring the latest and most efficient water treatment technologies to our clients.",
    },
    {
      icon: HeartHandshake,
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We work closely with you to understand requirements and deliver customized solutions.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description:
        "All our solutions are designed with environmental sustainability in mind, helping you reduce your ecological footprint.",
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description:
        "Successfully completed 500+ projects across residential, commercial, industrial, and municipal sectors.",
    },
  ];

  const advantages = [
    "Customized solutions tailored to your specific requirements",
    "Competitive pricing without compromising on quality",
    "Quick turnaround time from order to delivery",
    "Pan-India service network for prompt support",
    "Energy-efficient systems that reduce operational costs",
    "Compliance with all statutory and environmental regulations",
    "Detailed project documentation and training",
    "Long-term spare parts availability",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Bharat H2O?</h1>
            <p className="text-lg text-primary-foreground/90">
              Discover what makes us the preferred choice for water treatment solutions across India
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Advantages */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Additional Advantages</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Commitment</h2>
            <p className="text-lg text-muted-foreground">
              At Bharat H2O Solutions, we are committed to delivering excellence in every project. Our goal is not just
              to provide equipment, but to build long-term partnerships with our clients. We stand by our products and
              services, ensuring that you receive the best value for your investment.
            </p>
            <p className="text-lg text-muted-foreground">
              When you choose us, you're choosing a partner who cares about your success and is dedicated to providing
              sustainable water treatment solutions that make a real difference.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
