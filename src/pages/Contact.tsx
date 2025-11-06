import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const Contact = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with our team for any queries or requirements
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products or services? Our team is here to help. Reach out to us through any
                  of the following channels.
                </p>
              </div>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-2">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    1st Floor, Office No F114 B Wing,
                    <br />
                    Express Zone Mall,
                    <br />
                    Western Express Highway,
                    <br />
                    Mumbai - 400063,
                    <br />
                    Maharashtra, India
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-secondary flex items-center justify-center mb-2">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="tel:07948549907"
                    className="text-lg text-primary hover:underline"
                  >
                    079 4854 9907
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center mb-2">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:info@bharath2osolutions.com"
                    className="text-lg text-primary hover:underline break-all"
                  >
                    info@bharath2osolutions.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-2">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Map / CTA */}
            <div className="space-y-6">
              <Card className="border-2 h-full">
                <CardHeader>
                  <CardTitle>Visit Our Office</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8776447682984!2d72.8358!3d19.1574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA5JzI2LjYiTiA3MsKwNTAnMDguOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0, borderRadius: "0.5rem" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Bharat H2O Solutions Office Location"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We welcome you to visit our office and discuss your water treatment requirements in person. Our
                      technical team will be happy to provide detailed consultations and site assessments.
                    </p>
                    <Button asChild size="lg" className="w-full gradient-hero">
                      <NavLink to="/enquiry">Send Enquiry</NavLink>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
