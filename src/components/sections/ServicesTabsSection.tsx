import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, Cog, Search, MessageCircle } from "lucide-react";

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
        "flex flex-col lg:border-r py-10 relative group/feature border-border hover:bg-gradient-to-b hover:from-accent/20 hover:to-transparent transition-all duration-300",
        (index === 0 || index === 2) && "lg:border-l border-border",
        index < 2 && "lg:border-b border-border"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-accent/10 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10 text-muted-foreground group-hover/feature:text-primary transition-colors duration-200">
        {icon}
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10 group-hover/feature:text-foreground transition-colors duration-200">
        {description}
      </p>
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
  badge = "خدمات سي باك",
  heading = "حلول الاستيراد والشحن المتكاملة من الصين",
  description = "نقدم خدمات شاملة للاستيراد والشحن مع الخبرة والكفاءة العالية",
  tabs = [
    {
      value: "shipping",
      icon: <Truck className="h-auto w-5 shrink-0" />,
      label: "الشحن البحري والجوي",
      content: {
        badge: "شحن سريع",
        title: "شحن جزئي وحاويات كاملة",
        description: "شحن سريع ومباشر من الصين إلى السعودية مع مرونة وكفاءة عالية في جميع أنواع الشحنات",
        buttonText: "اطلب عرض سعر",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "شحن بحري وجوي",
      },
    },
    {
      value: "machinery",
      icon: <Cog className="h-auto w-5 shrink-0" />,
      label: "توريد وتركيب الآلات",
      content: {
        badge: "حلول صناعية",
        title: "أحدث الآلات والمعدات الصناعية",
        description: "توريد أحدث الآلات والمعدات الصناعية المتطورة مع التركيب الاحترافي والصيانة والدعم الفني",
        buttonText: "استشارة مجانية",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "آلات صناعية",
      },
    },
    {
      value: "sourcing",
      icon: <Search className="h-auto w-5 shrink-0" />,
      label: "البحث عن المصانع",
      content: {
        badge: "مصادر موثوقة",
        title: "تحديد أفضل الموردين والمنتجات",
        description: "نبسط استيرادك من الصين بتحديد المصادر الموثوقة والتفاوض الفعال وضمان الجودة",
        buttonText: "ابدأ البحث",
        imageSrc: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
        imageAlt: "مصانع صينية",
      },
    },
    {
      value: "consultation",
      icon: <MessageCircle className="h-auto w-5 shrink-0" />,
      label: "الاستشارة",
      content: {
        badge: "خبرة متخصصة",
        title: "استشارات متخصصة في السوق الصيني",
        description: "نقدم استشارات مدعومة بخبرة عميقة وشبكة علاقات واسعة مع حلول المصانع الذكية والأتمتة",
        buttonText: "احجز استشارة",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "استشارات تجارية",
      },
    },
  ],
}: ServicesTabsSectionProps) => {
  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6 text-center mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            {badge}
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold md:text-5xl text-foreground">
            {heading}
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {description}
          </p>
        </div>

        <Tabs defaultValue={tabs[0].value} className="mt-12">
          <TabsList className="container flex flex-wrap items-center justify-center gap-2 bg-muted/50 p-2 mb-8">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-3 rounded-lg px-6 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-background data-[state=active]:text-primary data-[state=active]:shadow-sm hover:bg-background/50 transition-all"
              >
                {tab.icon} 
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mx-auto max-w-7xl rounded-2xl bg-muted/30 p-8 lg:p-16 border">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <div className="flex flex-col gap-6 text-right">
                  <Badge variant="outline" className="w-fit bg-background border-primary text-primary">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold lg:text-4xl text-foreground leading-tight">
                    {tab.content.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-lg leading-relaxed">
                    {tab.content.description}
                  </p>
                  <Button className="mt-4 w-fit gap-2 bg-primary hover:bg-primary/90" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="relative rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300 w-full h-auto"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Additional Features Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              لماذا تختار سي باك؟
            </h2>
            <p className="text-muted-foreground">
              نقدم حلولاً متكاملة تلبي جميع احتياجاتك في الاستيراد من الصين
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
            <Feature
              title="خبرة واسعة"
              description="سنوات من الخبرة في السوق الصيني وفهم عميق لاحتياجات العملاء"
              icon={<Search className="w-6 h-6" />}
              index={0}
            />
            <Feature
              title="شبكة موردين موثوقة"
              description="علاقات قوية مع أفضل المصانع والموردين في الصين"
              icon={<Cog className="w-6 h-6" />}
              index={1}
            />
            <Feature
              title="ضمان الجودة"
              description="فحص دقيق للمنتجات وضمان مطابقتها للمواصفات المطلوبة"
              icon={<Truck className="w-6 h-6" />}
              index={2}
            />
            <Feature
              title="دعم شامل"
              description="مرافقة كاملة من البحث حتى وصول البضاعة والدعم الفني"
              icon={<MessageCircle className="w-6 h-6" />}
              index={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsSection;