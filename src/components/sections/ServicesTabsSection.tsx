import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Cog, MessageCircle } from "lucide-react";

// Feature component with hover effects
interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const Feature = ({ title, description, icon, index }: FeatureProps) => {
  return (
    <div
      className={cn(
        "flex flex-col py-12 px-8 relative group/feature hover:bg-gradient-to-br hover:from-primary/5 hover:to-secondary/5 transition-all duration-500",
        index % 2 === 1 && "lg:border-r border-border/50",
        index < 2 && "border-b border-border/50"
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="mb-6 relative z-10 flex justify-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover/feature:scale-110 group-hover/feature:rotate-6 transition-all duration-300">
          {icon}
        </div>
      </div>
      
      <div className="text-center relative z-10 space-y-4">
        <h3 className="text-xl font-bold text-foreground group-hover/feature:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed group-hover/feature:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main component
interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface ServicesTabsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const ServicesTabsSection = ({
  badge = "شحن موثوق من الصين",
  heading = "شريكك في الاستيراد من الصين",
  description = "نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلمها مباشرة إلى عنوانك في السعودية.",
  tabs = [
    {
      value: "factory-search",
      icon: <div className="text-4xl">🔍</div>,
      label: "بحث عن أفضل المصانع",
      content: {
        badge: "بحث متقدم",
        title: "بحث عن أفضل المصانع",
        description: "نساعدك في العثور على المصانع الحقيقية التي تُنتج المنتجات التي تحتاجها بجودة عالية وسعر مناسب، مع التأكد من أن المصنع مرخص وموثوق.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "بحث عن المصانع",
      },
    },
    {
      value: "negotiation",
      icon: <div className="text-4xl">🤝</div>,
      label: "تفاوض مع المصانع",
      content: {
        badge: "تفاوض احترافي",
        title: "تفاوض مع المصانع",
        description: "نقوم بالتفاوض مع المصانع نيابة عنك للحصول على أفضل الأسعار، شروط دفع مريحة، وأقصر مدة تصنيع ممكنة — بفضل خبرتنا الطويلة في السوق الصيني.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "تفاوض مع المصانع",
      },
    },
    {
      value: "quality-check",
      icon: <div className="text-4xl">🕵️‍♂️</div>,
      label: "فحص الجودة والتفاوض",
      content: {
        badge: "ضمان الجودة",
        title: "فحص الجودة والتفاوض",
        description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "فحص الجودة",
      },
    },
    {
      value: "consultation",
      icon: <div className="text-4xl">📞</div>,
      label: "استشارات مجانية",
      content: {
        badge: "خبرة متخصصة",
        title: "استشارات مجانية",
        description: "نقدم لك توجيهًا مجانيًا عبر خبرائنا المتخصصين في السوق الصيني، يشمل توصيات للمنتجات والموردين، وتحذيرات من المخاطر المحتملة.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "استشارات مجانية",
      },
    },
    {
      value: "pre-shipping-check",
      icon: <div className="text-4xl">📦</div>,
      label: "فحص البضاعة قبل الشحن",
      content: {
        badge: "فحص نهائي",
        title: "فحص البضاعة قبل الشحن",
        description: "فريقنا في الصين يتولى مهمة التحقق النهائي من جودة وشكل وعدد المنتجات قبل شحنها، مما يقلل من احتمالية المفاجآت عند الوصول.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "فحص قبل الشحن",
      },
    },
    {
      value: "consolidation",
      icon: <div className="text-4xl">📥</div>,
      label: "تجميع الشحنات من عدة موردين",
      content: {
        badge: "توفير التكاليف",
        title: "تجميع الشحنات من عدة موردين",
        description: "إذا اشتريت من أكثر من مصنع أو مورد، نقوم بتجميع الشحنات جميعها في مستودعاتنا في الصين لضمان شحن موحد وتوفير في التكاليف.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "تجميع الشحنات",
      },
    },
    {
      value: "warehousing",
      icon: <div className="text-4xl">🏪</div>,
      label: "تجميع وتخزين مؤقت في مستودعاتنا",
      content: {
        badge: "تخزين آمن",
        title: "تجميع وتخزين مؤقت في مستودعاتنا",
        description: "نمتلك مستودعات استراتيجية في الصين والسعودية لتخزين شحنتك بشكل آمن ومنظم إلى حين موعد الشحن أو التوزيع النهائي.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "مستودعات التخزين",
      },
    },
    {
      value: "door-to-door",
      icon: <div className="text-4xl">🚚</div>,
      label: "خدمة الشحن من الباب للباب",
      content: {
        badge: "خدمة شاملة",
        title: "خدمة الشحن من الباب للباب",
        description: "نتولى عملية الشحن كاملة من عنوان المصنع في الصين وحتى باب العميل في السعودية، مما يوفر عليك الوقت والتعقيد والمتابعة مع أطراف متعددة.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "شحن من الباب للباب",
      },
    },
    {
      value: "customs-clearance",
      icon: <div className="text-4xl">🧾</div>,
      label: "التخليص الجمركي في السعودية",
      content: {
        badge: "خدمات جمركية",
        title: "التخليص الجمركي في السعودية",
        description: "فريق التخليص التابع لنا يتعامل مع الجمارك السعودية باحترافية عالية لتسريع دخول الشحنة وتقليل أي تأخير محتمل أو رسوم إضافية.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "التخليص الجمركي",
      },
    },
    {
      value: "tracking",
      icon: <div className="text-4xl">📡</div>,
      label: "تتبع شحنتك لحظة بلحظة",
      content: {
        badge: "تتبع متقدم",
        title: "تتبع شحنتك لحظة بلحظة",
        description: "نقدم لك نظام تتبع إلكتروني حديث يتيح لك معرفة موقع شحنتك في كل لحظة، من لحظة الشحن إلى التسليم، لضمان الشفافية وراحة البال.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "تتبع الشحنات",
      },
    },
    {
      value: "ecommerce",
      icon: <div className="text-4xl">🛒</div>,
      label: "حلول خدمات التجارة الإلكترونية",
      content: {
        badge: "حلول رقمية",
        title: "حلول خدمات التجارة الإلكترونية",
        description: "ندعم المتاجر الإلكترونية في السعودية بخدمات مخصصة تشمل الشحن الجزئي، التغليف حسب الطلب، وربط مباشر بين الموردين والمتاجر.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "التجارة الإلكترونية",
      },
    },
    {
      value: "smart-logistics",
      icon: <div className="text-4xl">⚙️</div>,
      label: "حلول لوجستية ذكية",
      content: {
        badge: "تقنية متقدمة",
        title: "حلول لوجستية ذكية",
        description: "نوفر لك أنظمة شحن مرنة (مثل الشحن الجزئي أو الموحد) باستخدام أدوات تقنية لتقليل التكاليف وتسريع العمليات.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "حلول ذكية",
      },
    },
    {
      value: "local-expertise",
      icon: <div className="text-4xl">🇸🇦</div>,
      label: "خبرة محلية طويلة",
      content: {
        badge: "خبرة +10 سنوات",
        title: "خبرة محلية طويلة",
        description: "بخبرتنا الممتدة لأكثر من 10 سنوات في الشحن بين الصين والسعودية، نحن نعرف القوانين، التحديات، وأفضل الطرق لتوصيل شحنتك باسرع وقت وبأمان.",
        buttonText: "تواصل معنا",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "خبرة محلية",
      },
    },
  ],
}: ServicesTabsSectionProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUserInteracted) {
            // Start auto-cycling through tabs for 5 seconds only
            let currentIndex = 0;
            intervalRef.current = setInterval(() => {
              currentIndex = (currentIndex + 1) % tabs.length;
              setActiveTab(tabs[currentIndex].value);
            }, 2000); // Change tab every 2 seconds
            
            // Stop auto-cycling after 5 seconds
            setTimeout(() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
              }
            }, 5000);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [tabs, hasUserInteracted]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setHasUserInteracted(true);
    // Clear the auto-cycling interval when user interacts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            {badge}
          </Badge>
          <h1 className="max-w-4xl text-5xl md:text-6xl font-bold text-foreground font-cairo">
            {heading}
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl font-cairo">
            {description}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="mt-16">
          <div className="relative">
            <TabsList className="grid w-full max-w-6xl mx-auto grid-cols-4 md:grid-cols-6 lg:grid-cols-13 h-auto bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-2 shadow-lg overflow-x-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-3 rounded-xl px-6 py-8 text-base font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-accent/50 font-cairo"
                >
                  <div className="text-xl">{tab.icon}</div>
                  <span className="text-center text-2xl font-bold leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text font-cairo">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-12">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="flex justify-center items-center"
              >
                <div className="flex flex-col gap-6 text-center max-w-4xl">
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-fit mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-primary font-semibold">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-4xl font-bold lg:text-5xl text-foreground leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text font-cairo">
                      {tab.content.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground xl:text-lg leading-relaxed whitespace-pre-line font-cairo">
                    {tab.content.description}
                  </p>
                  <Button className="mt-8 w-fit mx-auto gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-10 py-7 font-cairo" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

      </div>
    </section>
  );
};

export default ServicesTabsSection;