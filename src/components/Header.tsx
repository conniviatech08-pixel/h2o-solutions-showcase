// import { useState, useEffect } from "react";
// import { NavLink } from "./NavLink";
// import { Button } from "./ui/button";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.webp";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   // 👉 STOP BACKGROUND SCROLL WHEN MOBILE MENU IS OPEN
//   useEffect(() => {
//     if (mobileMenuOpen) {
//       document.body.style.overflow = "hidden"; // lock scroll
//     } else {
//       document.body.style.overflow = "auto"; // unlock scroll
//     }

//     return () => {
//       document.body.style.overflow = "auto"; // cleanup
//     };
//   }, [mobileMenuOpen]);

//   const navItems = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About Us" },
//     { to: "/why-choose-us", label: "Why Choose Us" },
//     { to: "/networks", label: "Our Network" },
//     { to: "/contact", label: "Contact Us" },
//   ];

//   const productItems = [
//     { to: "/products/water-treatment", label: "Water Treatment Plants" },
//     { to: "/products/sewage-treatment", label: "Sewage Treatment Plants" },
//     { to: "/products/effluent-treatment", label: "Effluent Treatment Plants" },
//     { to: "/products/pressure-sand-filter", label: "Pressure Sand Filters" },
//     { to: "/products/swimming-pool", label: "Swimming Pool Filters" },
//     { to: "/products/organic-composter", label: "Organic Waste Composters" },
//     { to: "/products/water-softening", label: "Water Softening Plants" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <nav className="container flex h-20 items-center justify-between">
//         <NavLink to="/" className="flex items-center gap-3">
//           <img src={logo} alt="Bharat H2O Solutions" className="h-16 w-auto" />

//         </NavLink>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center gap-6">
//           {navItems.slice(0, 2).map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//               activeClassName="text-primary"
//             >
//               {item.label}
//             </NavLink>
//           ))}

//           {/* Products Dropdown */}
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="text-sm font-medium">
//                   Products
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
//                     {productItems.map((item) => (
//                       <li key={item.to}>
//                         <NavigationMenuLink asChild>
//                           <NavLink
//                             to={item.to}
//                             className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
//                           >
//                             <div className="text-sm font-medium">{item.label}</div>
//                           </NavLink>
//                         </NavigationMenuLink>
//                       </li>
//                     ))}
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           {navItems.slice(2).map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
//               activeClassName="text-primary"
//             >
//               {item.label}
//             </NavLink>
//           ))}

//           <Button asChild className="gradient-hero">
//             <NavLink to="/enquiry">Enquiry Now</NavLink>
//           </Button>
//         </div>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="lg:hidden"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </nav>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t bg-background">
//           <div className="container py-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
//             {navItems.slice(0, 2).map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className="text-sm font-medium text-muted-foreground py-2"
//                 activeClassName="text-primary"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.label}
//               </NavLink>
//             ))}

//             {/* Products */}
//             <div className="border-t pt-2">
//               <div className="text-sm font-medium text-muted-foreground mb-2">
//                 Products
//               </div>
//               <div className="pl-4 flex flex-col gap-2">
//                 {productItems.map((item) => (
//                   <NavLink
//                     key={item.to}
//                     to={item.to}
//                     className="text-sm text-muted-foreground py-1"
//                     activeClassName="text-primary"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     {item.label}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             {navItems.slice(2).map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className="text-sm font-medium text-muted-foreground py-2"
//                 activeClassName="text-primary"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.label}
//               </NavLink>
//             ))}

//             <Button asChild className="gradient-hero w-full">
//               <NavLink to="/enquiry" onClick={() => setMobileMenuOpen(false)}>
//                 Enquiry Now
//               </NavLink>
//             </Button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/file.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // STOP BACKGROUND SCROLL WHEN MOBILE MENU OPEN
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/why-choose-us", label: "Why Choose Us" },
    { to: "/networks", label: "Our Network" },
    { to: "/contact", label: "Contact Us" },
  ];

  const productItems = [
    { to: "/products/water-treatment", label: "Water Treatment Plants" },
    { to: "/products/sewage-treatment", label: "Sewage Treatment Plants" },
    { to: "/products/effluent-treatment", label: "Effluent Treatment Plants" },
    { to: "/products/pressure-sand-filter", label: "Pressure Sand Filters" },
    { to: "/products/swimming-pool", label: "Swimming Pool Filters" },
    { to: "/products/organic-composter", label: "Organic Waste Composters" },
    { to: "/products/water-softening", label: "Water Softening Plants" },
  ];

  const navLinkClass =
    "text-[15px] font-medium text-muted-foreground transition hover:text-primary";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <nav className="container flex h-20 items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="Bharat H2O Solutions" className="h-10 w-auto" />
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center gap-x-6">
          {/* HOME & ABOUT */}
          {navItems.slice(0, 2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              activeClassName="text-primary"
            >
              {item.label}
            </NavLink>
          ))}

          {/* PRODUCTS DROPDOWN */}
          <NavigationMenu>
  <NavigationMenuList className="!m-0 p-0">
    <NavigationMenuItem className="!m-0 p-0">
      <NavigationMenuTrigger
        className="p-0 h-auto text-[15px] font-medium text-muted-foreground hover:text-primary transition bg-transparent"
      >
        Products
      </NavigationMenuTrigger>

      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          {productItems.map((item) => (
            <li key={item.to}>
              <NavigationMenuLink asChild>
                <NavLink
                  to={item.to}
                  className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition"
                >
                  <div className="text-sm font-medium">{item.label}</div>
                </NavLink>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[15px] font-medium text-muted-foreground hover:text-primary transition">
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-3 p-4 md:grid-cols-2">
                    {productItems.map((item) => (
                      <li key={item.to}>
                        <NavigationMenuLink asChild>
                          <NavLink
                            to={item.to}
                            className="block rounded-md p-3 hover:bg-accent hover:text-accent-foreground transition"
                          >
                            <div className="text-sm font-medium">
                              {item.label}
                            </div>
                          </NavLink>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          {/* REST NAV ITEMS */}
          {navItems.slice(2).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navLinkClass}
              activeClassName="text-primary"
            >
              {item.label}
            </NavLink>
          ))}

          {/* ENQUIRY BUTTON */}
          <Button asChild className="gradient-hero">
            <NavLink to="/enquiry" className="text-[15px] font-medium">
              Enquiry Now
            </NavLink>
          </Button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-10 w-10"/>
          ) : (
            <Menu className="h-10 w-10" />
          )}
        </Button>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white shadow-sm">
          <div className="container py-4 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
            {/* TOP ITEMS */}
            {navItems.slice(0, 2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClass}
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            {/* PRODUCTS */}
            <div className="border-t pt-2">
              <div className="text-[15px] font-medium text-muted-foreground mb-2">
                Products
              </div>

              <div className="pl-4 flex flex-col gap-2">
                {productItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className="text-sm text-muted-foreground py-1"
                    activeClassName="text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* LAST ITEMS */}
            {navItems.slice(2).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={navLinkClass}
                activeClassName="text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            {/* ENQUIRY */}
            <Button asChild className="gradient-hero w-full">
              <NavLink
                to="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] font-medium"
              >
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
