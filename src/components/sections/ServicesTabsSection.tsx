
import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Main component
interface ServiceContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Service {
  icon: React.ReactNode;
  label: string;
  content: ServiceContent;
}

interface ServicesTabsSectionProps {
  badge?: string;
  heading?: string;
  description?: string;
  services?: Service[];
}

const ServicesTabsSection = ({
  badge = "خدمات سي باك",
  heading = "خدمات سي باك لوجستك",
  description = "نقدم خدمات شاملة للاستيراد والشحن وتوريد الآلات مع الخبرة والكفاءة العالية",
  services = [
    {
      icon: <img src="/lovable-uploads/a965f2ca-5f88-46aa-b258-0ab30861e7ef.png" alt="خدمات الشحن" className="w-20 h-20" />,
      label: "خدمات الشحن والاستيراد",
      content: {
        badge: "حلول لوجستية متكاملة",
        title: "خدمات الشحن والاستيراد",
        description: "نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين، نقدم خدمات احترافية ودعم عملاء قوي.\n\n• خدمة الشحن من الباب للباب: تتكفل الشركة بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك.\n• تفاوض مع المصانع: بفضل الخبرة في المصانع والسوق الصيني، تستطيع الشركة تقديم أسعار ذات قيمة إضافية من خلال التفاوض مع المصنع وتوفير في مدة التصنيع والأسعار.\n• نستلم شحنتك من مصانع الصين ونسلّمها مباشرة إلى عنوانك في السعودية.\n• حلول لوجستية ذكية: تقدم شحنًا جزئيًا سريعًا ومباشرًا من الصين إلى السعودية، مما يتيح لك استيراد بضائعك بمرونة وكفاءة عبر مشاركة مساحة الحاوية مع شحنات أخرى لتقليل التكاليف.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        imageAlt: "شحن بحري وجوي",
      },
    },
    {
      icon: <img src="/lovable-uploads/ad748a22-b280-4e40-8a29-eb0225627a3d.png" alt="خدمات استشارية" className="w-20 h-20" />,
      label: "خدمات استشارية",
      content: {
        badge: "خبرة متخصصة",
        title: "خدمات استشارية",
        description: "تمتلك سي باك معرفة واسعة وخبرة متراكمة في التعامل مع الموردين الصينيين وفهم ديناميكيات السوق لتوفر لك أفضل حلول الاستيراد من الصين.\n\n• خبرة عميقة بالسوق الصيني: تعمل بخبرة عميقة وواسعة في عالم الأعمال الصينية ولديها خبرة متراكمة في التعامل مع الموردين وفهم الديناميكيات السوق.\n• حلول مخصصة لاحتياجاتك: تحليل احتياجاتك وتقديم حلول مصممة خصيصًا لتلبية أهدافك الاستيرادية.\n• توفير الوقت والجهد والمال: تساعدك في توفير الوقت والجهد والمال عن طريق تجنب الأخطاء المكلفة وتبسيط الإجراءات.\n• بناء علاقات قوية مع الموردين: تساعدك في بناء علاقات قوية مع الموردين الصينيين من خلال شبكتها الواسعة من الموردين الموثوقين.\n• تغطية شاملة لجميع جوانب الاستيراد: تقدم لك خطوات تغطي جميع جوانب الاستيراد بدءًا من البحث عن الموردين وحتى الشحن والتخليص الجمركي.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
        imageAlt: "استشارات تجارية",
      },
    },
    {
      icon: <img src="/lovable-uploads/2a1593de-0f57-407c-90c8-6e1d6a86f04d.png" alt="توريد الآلات" className="w-20 h-20" />,
      label: "توريد وتركيب الآلات",
      content: {
        badge: "خبرة تقنية متقدمة",
        title: "توريد وتركيب الآلات",
        description: "في سي باك ماشين، تمتد الخبرة التقنية إلى ما وراء مجرد التوريد. لدينا فهم عالٍ في كثير من المجالات والأنظمة التقنية المعقدة، مع إدراك دقيق لتعقيدات عملها الميكانيكي ومبادئ تصميمها الحركي، وذلك يشمل تحليل القوى والإجهادات، ودراسة المواد المكونة منها، وكفاءة نقل الحركة والطاقة.",
        buttonText: "تفاصيل اكثر",
        imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        imageAlt: "آلات صناعية",
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
          <h1 className="max-w-4xl text-5xl md:text-6xl font-bold text-foreground font-cairo">
            {heading}
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl font-cairo">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-12 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-8 p-8 rounded-3xl border border-border/50 bg-gradient-to-br from-background to-muted/20 shadow-lg hover:shadow-xl transition-all duration-300",
                index % 2 === 1 && "lg:flex-row-reverse"
              )}
            >
              {/* Service Icon & Label */}
              <div className="flex flex-col items-center gap-4 lg:min-w-[300px]">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-foreground bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text font-cairo">
                  {service.label}
                </h3>
              </div>

              {/* Service Content */}
              <div className="flex-1 space-y-6 text-center lg:text-right">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit mx-auto lg:mx-0 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 text-primary font-semibold">
                    {service.content.badge}
                  </Badge>
                  <h4 className="text-3xl font-bold lg:text-4xl text-foreground leading-tight font-cairo">
                    {service.content.title}
                  </h4>
                </div>
                <p className="text-muted-foreground lg:text-lg leading-relaxed whitespace-pre-line font-cairo">
                  {service.content.description}
                </p>
                <Button className="mt-6 w-fit mx-auto lg:mx-0 gap-3 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6 font-cairo" size="lg">
                  {service.content.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesTabsSection;
