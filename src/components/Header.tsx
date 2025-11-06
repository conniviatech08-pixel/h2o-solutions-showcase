import { useState } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/products", label: "Products" },
    { to: "/why-choose-us", label: "Why Choose Us" },
    { to: "/networks", label: "Our Network" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bharat H2O Solutions" className="h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground">Bharat H2O</span>
            <span className="text-xs text-muted-foreground">Water Solutions</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="gradient-hero">
            <NavLink to="/enquiry">Enquiry Now</NavLink>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-sm font-medium text-muted-foreground py-2"
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild className="gradient-hero w-full">
              <NavLink to="/enquiry" onClick={() => setMobileMenuOpen(false)}>
                Enquiry Now
              </NavLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
