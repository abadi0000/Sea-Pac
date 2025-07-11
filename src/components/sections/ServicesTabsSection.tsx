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
  badge = "خدمات سي باك",
  heading = "خدمات سي باك لوجستك",
  description = "نقدم خدمات شاملة للاستيراد والشحن وتوريد الآلات مع الخبرة والكفاءة العالية",
  tabs = [
    {
      value: "shipping",
      icon: <Truck className="h-auto w-5 shrink-0" />,
      label: "خدمات الشحن والاستيراد",
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
      value: "consultation",
      icon: <MessageCircle className="h-auto w-5 shrink-0" />,
      label: "خدمات استشارية",
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

        <Tabs defaultValue={tabs[0].value} className="mt-16">
          <div className="relative">
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 h-auto bg-background/60 backdrop-blur-md border border-border/50 rounded-2xl p-1 shadow-lg">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex flex-col items-center gap-2 rounded-xl px-4 py-6 text-sm font-semibold transition-all duration-300 data-[state=active]:bg-gradient-to-br data-[state=active]:from-primary data-[state=active]:to-primary/80 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg hover:bg-accent/50"
                >
                  <div className="text-lg">{tab.icon}</div>
                  <span className="text-center text-xs font-medium leading-tight">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="mt-12">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
              >
                <div className="flex flex-col gap-6 text-right order-2 lg:order-1">
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-fit bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-primary font-semibold">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-bold lg:text-4xl text-foreground leading-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                      {tab.content.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground lg:text-lg leading-relaxed max-w-lg">
                    {tab.content.description}
                  </p>
                  <Button className="mt-6 w-fit gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="relative group order-1 lg:order-2">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-primary/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-border/20">
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Additional Features Grid */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
              لماذا تختار سي باك؟
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              نقدم حلولاً متكاملة تلبي جميع احتياجاتك في الاستيراد من الصين بأعلى معايير الجودة والكفاءة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto gap-0 bg-background/50 backdrop-blur-sm rounded-3xl border border-border/30 overflow-hidden shadow-xl">
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