import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import WhyChooseUs from "./pages/WhyChooseUs";
import Networks from "./pages/Networks";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import NotFound from "./pages/NotFound";
import WaterTreatment from "./pages/products/WaterTreatment";
import SewageTreatment from "./pages/products/SewageTreatment";
import EffluentTreatment from "./pages/products/EffluentTreatment";
import PressureSandFilter from "./pages/products/PressureSandFilter";
import SwimmingPool from "./pages/products/SwimmingPool";
import OrganicComposter from "./pages/products/OrganicComposter";
import WaterSoftening from "./pages/products/WaterSoftening";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/water-treatment" element={<WaterTreatment />} />
            <Route path="/products/sewage-treatment" element={<SewageTreatment />} />
            <Route path="/products/effluent-treatment" element={<EffluentTreatment />} />
            <Route path="/products/pressure-sand-filter" element={<PressureSandFilter />} />
            <Route path="/products/swimming-pool" element={<SwimmingPool />} />
            <Route path="/products/organic-composter" element={<OrganicComposter />} />
            <Route path="/products/water-softening" element={<WaterSoftening />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/networks" element={<Networks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
