
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Ship, Plane, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["البحري", "الجوي", "المباشر", "الآمن", "السريع"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <>
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        تخطي إلى المحتوى الرئيسي
      </a>
      
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/80 to-background"
        role="banner"
        aria-labelledby="hero-title"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0" aria-hidden="true">
          <picture>
            <source 
              srcSet="/lovable-uploads/ff0a1b84-4ef4-4abd-b976-94c738cd52ce.webp" 
              type="image/webp"
            />
            <img 
              src="/lovable-uploads/ff0a1b84-4ef4-4abd-b976-94c738cd52ce.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
              loading="lazy"
              role="presentation"
            />
          </picture>
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Main Content */}
        <main id="main-content" className="relative z-10 w-full">
          <div className="container mx-auto">
            <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
              <div>
                <Button variant="secondary" size="sm" className="gap-4">
                  وكيل شحن معتمد من الصين <MoveRight className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex gap-4 flex-col">
                <h1 
                  id="hero-title"
                  className="text-5xl md:text-7xl max-w-4xl tracking-tight text-center font-bold font-tajawal" 
                  dir="rtl"
                >
                  <span className="text-primary">سي باك لوجستيك</span>
                  <br />
                  <span className="text-3xl md:text-5xl">حلول الشحن الذكية</span>
                  <br />
                  <span className="text-3xl md:text-5xl">من الصين إلى المملكة</span>
                </h1>

                {/* Services with Icons */}
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8" dir="rtl">
                  <div className="flex items-center gap-3 text-lg md:text-xl font-noto-arabic">
                    <Ship className="w-6 h-6 text-primary" />
                    <span>شحن بحري</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg md:text-xl font-noto-arabic">
                    <Plane className="w-6 h-6 text-primary" />
                    <span>شحن جوي</span>
                  </div>
                  <div className="flex items-center gap-3 text-lg md:text-xl font-noto-arabic">
                    <Cog className="w-6 h-6 text-primary" />
                    <span>توريد وتركيب وصيانة آلات حديثة</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-row gap-3" dir="rtl">
                <Button size="lg" className="gap-4" variant="outline">
                  <PhoneCall className="w-4 h-4" /> اتصل بنا الآن
                </Button>
                <Button 
                  size="lg" 
                  className="gap-4"
                  onClick={() => {
                    const calculatorSection = document.getElementById('shipping-calculator');
                    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <MoveRight className="w-4 h-4" /> احصل على عرض سعر
                </Button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default HeroSection;
