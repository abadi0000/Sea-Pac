
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Search, Package, FileCheck, Truck, Users, Factory, CheckCircle, MessageSquare, ShoppingCart, BarChart3, Cpu, Eye, Clock } from 'lucide-react';

const Alibaba = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "الموردين الموثوقين",
      description: "نحن نتعامل مع أفضل الموردين في علي بابا الذين لديهم تقييمات عالية وسجل تجاري موثوق به.",
      icon: Users
    },
    {
      title: "فحص الجودة والتفاوض",
      description: "نقوم بفحص جودة المنتجات التي تريدها والتفاوض مع الموردين للحصول على الأسعار الأفضل لك.",
      icon: Search
    },
    {
      title: "تجميع الشحنات",
      description: "نوفر خدمة تجميع شحناتك من عدة موردين في شحنة واحدة لتوفير تكاليف الشحن.",
      icon: Package
    },
    {
      title: "التخليص الجمركي",
      description: "نتولى جميع الإجراءات الجمركية في السعودية لضمان وصول شحنتك دون تأخير.",
      icon: FileCheck
    }
  ];

  const processSteps = [
    {
      icon: Factory,
      title: "تحديد المصانع",
      description: "نساعدك في العثور على المصانع الحقيقية"
    },
    {
      icon: CheckCircle,
      title: "فحص الجودة",
      description: "فحص دقيق للمنتجات والمواصفات"
    },
    {
      icon: MessageSquare,
      title: "التفاوض",
      description: "التفاوض المباشر مع المصانع للحصول على أفضل سعر"
    },
    {
      icon: Truck,
      title: "الشحن المباشر",
      description: "شحن مباشر من المصنع إلى عنوانك"
    }
  ];

  const shippingFeatures = [
    {
      icon: Package,
      title: "تصنيف وترقيم دقيق للبضائع",
      description: "نظام متقدم لتنظيم وتصنيف جميع البضائع"
    },
    {
      icon: BarChart3,
      title: "استغلال أمثل لمساحة الحاويات",
      description: "تحسين استخدام المساحة لتوفير التكاليف"
    },
    {
      icon: Shield,
      title: "حماية متقدمة للمعدات الحساسة",
      description: "تقنيات خاصة لحماية البضائع الحساسة"
    },
    {
      icon: Eye,
      title: "تتبع مباشر لحالة الشحنة",
      description: "مراقبة مستمرة لحالة الشحنة في جميع المراحل"
    }
  ];

  const warehouseFeatures = [
    {
      icon: Cpu,
      title: "تتبع فوري للمنتجات بالذكاء الاصطناعي",
      description: "تقنية AI متطورة لتتبع المنتجات"
    },
    {
      icon: BarChart3,
      title: "تحليل الأبعاد والمساحات تلقائياً",
      description: "تحليل ذكي للمساحات والأبعاد"
    },
    {
      icon: Package,
      title: "تحسين التخزين والاسترجاع",
      description: "نظام ذكي لتحسين عمليات التخزين"
    },
    {
      icon: FileCheck,
      title: "تقارير مفصلة ودقيقة",
      description: "تقارير شاملة عن جميع العمليات"
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-cairo">
            استورد من الصين
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block mt-2">وسيط علي بابا</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed font-cairo">
            سي باك لوجستيك وسيط علي بابا لشحن سهل وموثوق من علي بابا إلى السعودية
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed font-cairo">
            حلول موثوقة تضمن لك استيراد آمن من علي بابا إلى السعودية، سي باك لوجستيك توفر لك خدمة استيراد متكاملة لتوفير الوقت والجهد 
            وضمان جودة مشترياتك وتخليصها جمركيًا بسلاسة
          </p>
          <Button className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold font-cairo">
            تواصل معنا
          </Button>
        </div>
      </section>

      {/* Factory Search Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit text-primary border-primary">
                  البحث عن أفضل المصانع والأسعار
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground font-cairo">
                  نساعدك في العثور على مصانع حقيقية، تقييم الجودة، ومقارنة الأسعار
                </h2>
              </div>
              
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-2xl border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-100 dark:bg-red-900 p-3 rounded-full">
                    <span className="text-2xl font-bold text-red-600 dark:text-red-400">90%</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-200 font-cairo">
                    من المنتجات المعروضة أونلاين هي من وسطاء وشركات! وباسعار مرتفعة
                  </h3>
                </div>
                <p className="text-red-700 dark:text-red-300 leading-relaxed font-cairo">
                  في الواقع، أغلب المنتجات المعروضة على الإنترنت – سواء عبر مواقع كبرى مثل علي بابا أو من خلال موردين مستقلين – تُقدَّم من خلال وسطاء أو شركات تجارية لا تُمثل المصنع بشكل مباشر. هذا التعدد في الوساطة يؤدي إلى زيادة مرتفعة في الأسعار، غالبًا تتجاوز القيمة الحقيقية للمنتج. من خلال الشراء المباشر من المصنع، يمكنك الحصول على أسعار المصنع، وضمان أعلى للجودة والمواصفات، وتوفير كبير في التكاليف.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground font-cairo">
                  سي باك طريقك المباشر للمصانع
                </h3>
                <p className="text-muted-foreground font-cairo">
                  تجاهل الوسطاء والكيانات التجارية
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm font-cairo">{step.title}</h4>
                      <p className="text-xs text-muted-foreground font-cairo">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/lovable-uploads/76b5ed08-b95c-4469-8d3c-692b75bdf7d6.png" 
                alt="شحن موثوق من الصين" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Shipping Management Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="w-fit mx-auto text-primary border-primary">
              تنظيم وإدارة الشحنات
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-cairo">
              تنظيم وإدارة الشحنات
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
              نستخدم أحدث تقنيات تنظيم الحاويات لضمان الاستفادة القصوى من المساحة وحماية البضائع أثناء النقل.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {shippingFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm font-cairo">{feature.title}</h3>
                <p className="text-xs text-muted-foreground font-cairo">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                تنظيم الحاويات
              </h3>
              <p className="text-muted-foreground font-cairo">
                نظام متقدم لتنظيم الحاويات وضمان الاستفادة القصوى من المساحة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Warehouse Management Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="w-fit mx-auto text-primary border-primary">
              نظام إدارة المخازن الذكي
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 font-cairo">
              إدارة ذكية للمخازن
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
              نطبق أحدث تقنيات الذكاء الاصطناعي في إدارة المخازن وتتبع البضائع لضمان الدقة والكفاءة.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {warehouseFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-primary/10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-sm font-cairo">{feature.title}</h3>
                <p className="text-xs text-muted-foreground font-cairo">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
              الخدمات التي نوفرها
            </h2>
            <div className="bg-background p-8 rounded-lg shadow-lg border max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-cairo">
                خدمات سي باك لوجستيك للشحن من علي بابا إلى السعودية
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed font-cairo">
                نحن في سي باك نساعدك على شحن بضائعك من علي بابا إلى السعودية بكل يسر وسهولة. 
                كل ما عليك هو تسجيل طلب الشحنة ونحن نقوم بباقي العمل.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredService === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-primary/5 to-secondary/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground leading-tight font-cairo">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed font-cairo">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-cairo">
              كيف نعمل معك
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-cairo">
              عملية بسيطة وسهلة لضمان استيراد آمن وموثوق من علي بابا إلى السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-cairo">
                تسجيل الطلب
              </h3>
              <p className="text-muted-foreground text-sm font-cairo">
                قم بتسجيل طلب الشحنة معنا
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-cairo">
                البحث والتفاوض
              </h3>
              <p className="text-muted-foreground text-sm font-cairo">
                نبحث عن أفضل الموردين ونتفاوض لك
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-cairo">
                الشحن والتجميع
              </h3>
              <p className="text-muted-foreground text-sm font-cairo">
                نجمع شحناتك ونرسلها إلى السعودية
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-foreground font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-cairo">
                التخليص والتسليم
              </h3>
              <p className="text-muted-foreground text-sm font-cairo">
                نتولى التخليص الجمركي والتسليم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-8 font-cairo">
            ابدأ الاستيراد من علي بابا اليوم
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-12 max-w-2xl mx-auto font-cairo">
            تواصل معنا الآن وسنساعدك في استيراد منتجاتك من الصين بكل سهولة وأمان
          </p>
          <Button className="bg-background text-foreground hover:bg-background/90 px-12 py-4 rounded-lg font-semibold text-lg font-cairo">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Alibaba;
