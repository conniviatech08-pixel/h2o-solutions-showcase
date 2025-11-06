import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Bharat H2O Solutions</h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner in water and wastewater treatment solutions since 2008
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6 text-lg">
            <p>
              <strong>Bharat H2O Solutions Private Limited</strong> is a leading manufacturer and supplier of
              comprehensive water and wastewater treatment solutions in India. With over 15 years of industry
              experience, we have established ourselves as a trusted name in the water treatment sector.
            </p>
            <p>
              Our company specializes in designing, manufacturing, and installing a wide range of water treatment
              plants, sewage treatment plants, effluent treatment plants, and related equipment. We serve diverse
              sectors including residential, commercial, industrial, and municipal clients.
            </p>
            <p>
              Located in Mumbai, Maharashtra, we combine advanced technology with expert engineering to deliver
              sustainable and cost-effective solutions. Our commitment to quality and customer satisfaction has earned
              us a strong reputation across India.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide innovative, sustainable, and cost-effective water treatment solutions that ensure clean
                  water for all, while protecting the environment for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-secondary flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred water treatment company in India, recognized for our quality,
                  innovation, and commitment to environmental sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-hero flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quality Excellence</li>
                  <li>• Customer Satisfaction</li>
                  <li>• Environmental Responsibility</li>
                  <li>• Innovation & Technology</li>
                  <li>• Integrity & Trust</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Us</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Expertise & Experience</h3>
                <p className="text-muted-foreground">
                  Over 15 years of proven track record in delivering successful water treatment projects across various
                  industries and applications.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Quality Products</h3>
                <p className="text-muted-foreground">
                  All our products are manufactured using high-grade materials and comply with international quality
                  standards and certifications.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Custom Solutions</h3>
                <p className="text-muted-foreground">
                  We design and manufacture customized solutions tailored to meet your specific requirements and site
                  conditions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">After-Sales Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive after-sales service including installation, commissioning, maintenance, and technical
                  support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
