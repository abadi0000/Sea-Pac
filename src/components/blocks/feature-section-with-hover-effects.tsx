import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, ShoppingCart, MessageSquare, FileSearch, Shield, Package, Clock, Users } from 'lucide-react';

const FeaturesSectionWithHoverEffects = () => {
  const services = [
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: "خدمة الشحن من الباب للباب",
      description: "نتكفل بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "حلول خدمات التجارة الإلكترونية",
      description: "ندعم نمو تجارتك الإلكترونية بتوفير خدمات لوجستية متخصصة تلبي احتياجات متجرك"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "تفاوض مع المصانع",
      description: "بفضل خبرتنا في المصانع والسوق الصيني نستطيع تقديم لك أسعار قيمة إضافية عن طريق التفاوض مع المصنع"
    },
    {
      icon: <FileSearch className="w-8 h-8 text-primary" />,
      title: "استشارات مجانية",
      description: "نوفر رؤى متعمقة ونصائح عملية في سوق الصناعة الصيني في كافة المجالات"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "فحص البضاعة",
      description: "نضمن لك جودة المنتجات من خلال فحصها والتأكد من سلامتها قبل الشحن"
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: "تجميع وتخزين",
      description: "إذا كنت تتعامل مع عدة موردين، نوفر لك خدمة تجميع شحناتك وتخزينها"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "خبرة محلية طويلة",
      description: "نتمتع بخبرة طويلة في مجال الخدمات اللوجستية والشحن بين الصين والسعودية"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "حلول لوجستية ذكية",
      description: "شحن جزئي سريع ومباشر من الصين إلى السعودية مع مرونة وكفاءة عالية"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-tajawal text-3xl md:text-5xl font-bold text-foreground mb-6">
            لماذا تختار سي باك؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed font-noto-arabic">
            سي باك لوجيستيك، شركة سعودية متخصصة في الخدمات اللوجستية، تتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين، توفر خدمات احترافية ودعم عملاء قوي
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-background border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="font-bold text-foreground mb-3 text-lg font-tajawal">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-noto-arabic">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export { FeaturesSectionWithHoverEffects };