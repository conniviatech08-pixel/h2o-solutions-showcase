import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import PressureSand1 from "@/assets/pressuresand1.webp";
import PressureSand2 from "@/assets/pressure-sand-filters2.webp";
import { Filter, Droplets, Settings, Award } from "lucide-react";
import pressurebg from "@/assets/pressuresand.jpg";

const PressureSandFilter = () => {
  const features = [
    {
      icon: Filter,
      title: "High Efficiency",
      description:
        "Removes suspended solids, turbidity, and impurities effectively",
    },
    {
      icon: Droplets,
      title: "Multi-Grade Media",
      description:
        "Uses multiple layers of filtration media for superior results",
    },
    {
      icon: Settings,
      title: "Easy Backwash",
      description: "Simple backwash system for easy maintenance and cleaning",
    },
    {
      icon: Award,
      title: "Long Service Life",
      description: "Durable construction ensures years of reliable operation",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative h-[300px] md:h-[380px] flex items-center justify-center text-white">
        <div className="absolute inset-0 -z-10">
          <img
            src={pressurebg}
            alt="Water Treatment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Remove blur – optional very light overlay */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Pressure Sand Filters
            </h1>
            <p className="text-lg text-white/90">
              Our product range includes a wide range of 200 kg pressure sand filter and 100 kg pressure sand filters.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-10 md:py-14 bg-background">
        <div className="container ">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-3 mx-auto">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container mx-auto  px-6 md:px-12 lg:px-20 space-y-12">
          {/* FIRST BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={PressureSand1}
                  alt="Pressure Sand Filter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                200 Kg Pressure Sand Filter
              </h2>

              <p className="text-lg text-muted-foreground">
                A 200 Kg Pressure Sand Filter contains 200 kg of sand media for
                filtration. Here's how it works.
              </p>

              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Automated Mixing Process.
                </p>
                <p className="text-muted-foreground">
                  Reduces contaminants and odors effectively.
                </p>
                <p className="text-muted-foreground">
                  Provides proper aeration.
                </p>
                <p className="text-muted-foreground">
                  Some models include shredders.
                </p>
              </div>

              <Button asChild className="gradient-primary py-2 px-6 mt-2">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>
          </div>

          {/* SECOND BLOCK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                100 Kg Pressure Sand Filters
              </h2>

              <p className="text-lg text-muted-foreground">
                Our compact 100 Kg pressure sand filters are suitable for
                residential & commercial pools.
              </p>

              <div className="space-y-2">
                <p className="text-muted-foreground">
                  Manual aeration required.
                </p>
                <p className="text-muted-foreground">Simple & user-friendly.</p>
                <p className="text-muted-foreground">
                  Requires moisture control.
                </p>
                <p className="text-muted-foreground">Full process control.</p>
              </div>

              <Button asChild className="gradient-primary py-2 px-6 mt-2">
                <NavLink to="/enquiry" className="text-white font-semibold">
                  Enquiry Now
                </NavLink>
              </Button>
            </div>

            <div className="w-full h-full">
              <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={PressureSand2}
                  alt="Pressure Sand Filter"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 md:py-14">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How It Works
            </h2>
            <Card>
              <CardHeader>
                <CardTitle>Filtration Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Water flows downward through a graded sand bed. Suspended
                  particles get trapped while clean water exits from the bottom.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mt-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Filtration Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuous operation with efficient removal.
                    </p>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-1">Backwash Cycle</h4>
                    <p className="text-sm text-muted-foreground">
                      Reverse flow cleans the media thoroughly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-10 md:py-14 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Applications
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pre-Treatment</CardTitle>
                  <CardDescription>
                    For RO plants & water treatment
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Industrial Water</CardTitle>
                  <CardDescription>For industrial applications</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Cooling Towers</CardTitle>
                  <CardDescription>Removes suspended solids</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Swimming Pools</CardTitle>
                  <CardDescription>Keeps water crystal clear</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 gradient-secondary text-secondary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Need Custom Filtration Solution?
          </h2>
          <p className="text-lg mb-6 text-secondary-foreground/90 max-w-2xl mx-auto">
            We provide pressure sand filters in various sizes and custom
            options.
          </p>

          <Button
            size="lg"
            variant="outline"
            className="bg-white text-green-600 border border-green-600 hover:bg-green-600 hover:text-white"
          >
            <NavLink to="/contact">Contact Our Experts</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PressureSandFilter;
