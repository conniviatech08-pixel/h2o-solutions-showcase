import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import customerSupport from "@/assets/customer-support.webp";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <>
          1st Floor, Office No F114 B Wing,<br />
          Express Zone Mall,<br />
          Western Express Highway,<br />
          Mumbai - 400063, Maharashtra, India
        </>
      ),
      gradient: "gradient-primary",
    },
    {
      icon: Phone,
      title: "Phone",
      content: (
        <a href="tel:07948549907" className="text-lg text-primary hover:underline">
          079 4854 9907
        </a>
      ),
      gradient: "gradient-secondary",
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <a href="mailto:info@bharath2osolutions.com" className="text-lg text-primary hover:underline break-all">
          info@bharath2osolutions.com
        </a>
      ),
      gradient: "gradient-hero",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: (
        <>
          Monday - Saturday: 9:00 AM - 7:00 PM<br />
          Sunday: Closed
        </>
      ),
      gradient: "gradient-primary",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section with Image */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${customerSupport})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with our team for any queries or requirements. We're here to help you find the perfect water treatment solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <span className="text-secondary font-semibold">Contact Information</span>
                <h2 className="text-3xl font-bold mb-4 mt-2">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or services? Our team is here to help. Reach out to us through any
                  of the following channels.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardHeader className="pb-2">
                      <div className={`h-12 w-12 rounded-lg ${info.gradient} flex items-center justify-center mb-2`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">{info.content}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact CTA */}
              <Card className="border-2 border-secondary bg-secondary/5">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Need Quick Assistance?</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Send us an enquiry and our team will get back to you within 24 hours.
                      </p>
                      <Button asChild className="gradient-secondary">
                        <NavLink to="/enquiry">Send Enquiry</NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Section */}
            <div className="space-y-6">
              <Card className="border-2 h-full">
                <CardHeader>
                  <CardTitle>Visit Our Office</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    We welcome you to visit our office and discuss your water treatment requirements in person.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8776447682984!2d72.8358!3d19.1574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzI2LjYiTiA3MsKwNTAnMDguOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "300px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bharat H2O Solutions Office Location"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our technical team will be happy to provide detailed consultations and site assessments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button asChild size="lg" className="flex-1 gradient-hero">
                        <NavLink to="/enquiry">Send Enquiry</NavLink>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="flex-1">
                        <a href="tel:07948549907">Call Now</a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you need a simple filter or a complete treatment plant, we have the expertise to deliver the best solution for you.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/products">Explore Our Products</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;