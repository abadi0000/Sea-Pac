
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ShippingCalculatorSection from "@/components/sections/ShippingCalculatorSection";
import ShippingSection from "@/components/sections/ShippingSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FactorySearchSection from "@/components/sections/FactorySearchSection";
import TrackingSection from "@/components/sections/TrackingSection";
import WarehouseSection from "@/components/sections/WarehouseSection";
import VisionSection from "@/components/sections/VisionSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ShippingCalculatorSection />
      <WhyChooseUsSection />
      <StatsSection />
      <FactorySearchSection />
      <ShippingSection />
      <TrackingSection />
      <WarehouseSection />
      
      <ContactSection />
    </div>
  );
};

export default Index;
