
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
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
                  <span className="text-3xl md:text-5xl">حلول الشحن</span>
                  <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                    &nbsp;
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute font-semibold text-primary"
                        initial={{ opacity: 0, y: "-100" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? -150 : 150,
                                opacity: 0,
                              }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="text-3xl md:text-5xl">من الصين إلى المملكة</span>
                </h1>

                <p 
                  className="text-lg md:text-xl leading-relaxed tracking-normal text-muted-foreground max-w-4xl text-center font-noto-arabic" 
                  dir="rtl"
                >
                  نوفر حلولاً لوجستية متكاملة للشركات والأفراد مع خدمات الشحن البحري والجوي والتوصيل المباشر والتغليف الاحترافي. 
                  نضمن استلام البضائع من المصانع وتسليمها مباشرة لعنوانك مع أعلى معايير الأمان والاحترافية وضمان شامل.
                </p>
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
