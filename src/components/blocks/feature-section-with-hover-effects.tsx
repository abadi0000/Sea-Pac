import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, ShoppingCart, MessageSquare, FileSearch, Shield, Package, Clock, Users } from 'lucide-react';

const FeaturesSectionWithHoverEffects = () => {
  const services = [
    {
      icon: <img src="/lovable-uploads/d7f1cba7-dbec-4c7e-85f2-3f7da1660c17.png" alt="خبرة واسعة" className="w-16 h-16" />,
      title: "خبرة واسعة",
      description: "سنوات من الخبرة في السوق الصيني وفهم عميق لاحتياجات العملاء"
    },
    {
      icon: <img src="/lovable-uploads/ca0e3cbf-cfd3-4fe0-88e7-173dc3ac0bc2.png" alt="شبكة موردين موثوقة" className="w-16 h-16" />,
      title: "شبكة موردين موثوقة",
      description: "علاقات قوية مع أفضل المصانع والموردين في الصين"
    },
    {
      icon: <img src="/lovable-uploads/36e35649-f04b-406a-94e8-2c8d6d70df5d.png" alt="ضمان الجودة" className="w-16 h-16" />,
      title: "ضمان الجودة",
      description: "فحص دقيق للمنتجات وضمان مطابقتها للمواصفات المطلوبة"
    },
    {
      icon: <Shield className="w-16 h-16 text-primary" />,
      title: "دعم شامل",
      description: "مرافقة كاملة من البحث حتى وصول البضاعة والدعم الفني"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t-4 border-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Distinctive Header with Border */}
        <div className="text-center mb-20">
          <div className="inline-block bg-white rounded-2xl px-8 py-6 shadow-lg border-2 border-primary/20 mb-8">
            <h2 className="font-cairo text-4xl md:text-6xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              لماذا تختار سي باك؟
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-cairo">
            نقدم حلولاً متكاملة تلبي جميع احتياجاتك في الاستيراد من الصين بأعلى معايير الجودة والكفاءة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 bg-white border-2 border-transparent hover:border-primary/20 rounded-xl overflow-hidden">
              <CardContent className="p-8 text-center relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-4 text-xl font-cairo group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed font-cairo group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-md border border-primary/20">
            <p className="text-primary font-bold text-lg font-cairo">جاهزون لخدمتك في أي وقت</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { FeaturesSectionWithHoverEffects };