import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    let temp: any = {};

    if (!formData.name) temp.name = "Full Name is required.";
    if (!formData.email) temp.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      temp.email = "Enter a valid email.";

    if (!formData.phone) temp.phone = "Phone number is required.";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      temp.phone = "Phone number must be exactly 10 digits.";

    if (!formData.product) temp.product = "Please select a product.";
    if (!formData.message) temp.message = "Message is required.";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We will contact you shortly.",
    });

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
    setErrors((prev: any) => ({ ...prev, [field]: "" })); // Remove error while typing
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

                  {/* NAME + EMAIL */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Full Name *</Label>
                      <Input
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Email Address *</Label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          handleChange("email", e.target.value)
                        }
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* PHONE + COMPANY */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Phone Number *</Label>
                      <Input
                        type="tel"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          handleChange("phone", e.target.value)
                        }
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label>Company/Organization</Label>
                      <Input
                        placeholder="Company name (optional)"
                        value={formData.company}
                        onChange={(e) =>
                          handleChange("company", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  {/* PRODUCT */}
                  <div className="space-y-2">
                    <Label>Product/Service Interest *</Label>
                    <Select
                      value={formData.product}
                      onValueChange={(value) => handleChange("product", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a product or service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="water-treatment">
                          Water Treatment Plant
                        </SelectItem>
                        <SelectItem value="sewage-treatment">
                          Sewage Treatment Plant
                        </SelectItem>
                        <SelectItem value="effluent-treatment">
                          Effluent Treatment Plant
                        </SelectItem>
                        <SelectItem value="pressure-sand-filter">
                          Pressure Sand Filter
                        </SelectItem>
                        <SelectItem value="swimming-pool">
                          Swimming Pool Filter
                        </SelectItem>
                        <SelectItem value="organic-composter">
                          Organic Waste Composter
                        </SelectItem>
                        <SelectItem value="other">Other / Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.product && (
                      <p className="text-red-600 text-sm">{errors.product}</p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div className="space-y-2">
                    <Label>Your Requirements/Message *</Label>
                    <Textarea
                      placeholder="Describe your requirements..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleChange("message", e.target.value)
                      }
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="w-full gradient-hero">
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* INFO SIDEBAR */}
            <div className="space-y-6">

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-4">
                  <p>We respond within 24 hours during business days.</p>
                  <p>For urgent help, call us:</p>
                  <a
                    href="tel:07948549907"
                    className="text-lg text-primary font-semibold hover:underline block"
                  >
                    079 4854 9907
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 gradient-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle>What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm space-y-3">
                  <p>1. We review your details</p>
                  <p>2. Our expert contacts you</p>
                  <p>3. We provide best solution & quotation</p>
                  <p>4. Site visit if required</p>
                  <p>5. Project execution & support</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>
                    Contact our support team for emergencies or technical help.
                  </p>
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
