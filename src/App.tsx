
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import ConsultationServices from "./pages/ConsultationServices";
import SebaqMachine from "./pages/SebaqMachine";
import VendingMachines from "./pages/VendingMachines";
import ProductionLines from "./pages/ProductionLines";
import CarWash from "./pages/CarWash";
import EntertainmentSystems from "./pages/EntertainmentSystems";
import Alibaba from "./pages/Alibaba";
import Invest from "./pages/Invest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultation-services" element={<ConsultationServices />} />
          <Route path="/sebaaq-machine" element={<SebaqMachine />} />
          <Route path="/sebaaq-machine/vending-machines" element={<VendingMachines />} />
          <Route path="/sebaaq-machine/production-lines" element={<ProductionLines />} />
          <Route path="/sebaaq-machine/car-wash" element={<CarWash />} />
          <Route path="/sebaaq-machine/entertainment-systems" element={<EntertainmentSystems />} />
          <Route path="/alibaba" element={<Alibaba />} />
          <Route path="/invest" element={<Invest />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
