import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Enquiry = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We will contact you shortly.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      product: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Send Enquiry</h1>
            <p className="text-lg text-primary-foreground/90">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="lg:col-span-2 border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Enquiry Form</CardTitle>
                <CardDescription>
                  Please provide your details and requirements. All fields marked with * are mandatory.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input
                        id="company"
                        placeholder="Company name (optional)"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Product/Service Interest *</Label>
                    <Select value={formData.product} onValueChange={(value) => handleChange("product", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product or service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water-treatment">Water Treatment Plant</SelectItem>
                        <SelectItem value="sewage-treatment">Sewage Treatment Plant</SelectItem>
                        <SelectItem value="effluent-treatment">Effluent Treatment Plant</SelectItem>
                        <SelectItem value="pressure-sand-filter">Pressure Sand Filter</SelectItem>
                        <SelectItem value="swimming-pool">Swimming Pool Filter</SelectItem>
                        <SelectItem value="organic-composter">Organic Waste Composter</SelectItem>
                        <SelectItem value="other">Other / Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Requirements/Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements in detail..."
                      rows={6}
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-hero">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>Our team typically responds to all enquiries within 24 hours during business days.</p>
                  <p>For urgent requirements, please call us directly at:</p>
                  <a href="tel:07948549907" className="text-lg text-primary font-semibold hover:underline block">
                    079 4854 9907
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 gradient-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <div className="flex gap-3">
                    <span className="font-bold shrink-0">1.</span>
                    <p>We review your requirements</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold shrink-0">2.</span>
                    <p>Our expert contacts you for detailed discussion</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold shrink-0">3.</span>
                    <p>We provide customized solution and quotation</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold shrink-0">4.</span>
                    <p>Site visit if required</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="font-bold shrink-0">5.</span>
                    <p>Project execution and support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>For technical emergencies or immediate assistance with existing installations, please contact our support team.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
