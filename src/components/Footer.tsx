import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "./NavLink";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Bharat H2O Solutions" className="h-16 w-auto" />
              {/* <div className="flex flex-col">
                <span className="text-lg font-bold">Bharat H2O</span>
                <span className="text-xs text-muted-foreground">Water Solutions</span>
              </div> */}
            </div>
            <p className="text-sm text-muted-foreground">
              Leading provider of water and wastewater treatment solutions in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/enquiry" className="text-muted-foreground hover:text-primary transition-colors">
                  Enquiry
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
  <li>
    <NavLink to="products/water-treatment" className="hover:text-primary">
      Water Treatment Plants
    </NavLink>
  </li>
  <li>
    <NavLink to="/products/sewage-treatment" className="hover:text-primary">
      Sewage Treatment Plants
    </NavLink>
  </li>
  <li>
    <NavLink to="/products/effluent-treatment" className="hover:text-primary">
      Effluent Treatment Plants
    </NavLink>
  </li>
  <li>
    <NavLink to="/products/organic-composter" className="hover:text-primary">
      Organic Waste Composters
    </NavLink>
  </li>
  <li>
    <NavLink to="/products/swimming-pool" className="hover:text-primary">
      Swimming Pool Filters
    </NavLink>
  </li>
</ul>

            {/* <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Water Treatment Plants</li>
              <li>Sewage Treatment Plants</li>
              <li>Effluent Treatment Plants</li>
              <li>Organic Waste Composters</li>
              <li>Swimming Pool Filters</li>
            </ul> */}
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  1st Floor, Office No F114 B Wing, Express Zone Mall, Western Express Highway, Mumbai - 400063,
                  Maharashtra, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:07948549907" className="hover:text-primary transition-colors">
                  079 4854 9907
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@bharath2osolutions.com" className="hover:text-primary transition-colors">
                  info@bharath2osolutions.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bharat H2O Solutions Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
