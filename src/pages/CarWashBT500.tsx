import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Droplets, 
  Zap, 
  Timer, 
  Shield, 
  Cog, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Gem
} from 'lucide-react';

const CarWashBT500 = () => {
  const specifications = [
    { label: "الطول", value: "10 متر" },
    { label: "العرض", value: "3.2 متر" },
    { label: "الارتفاع", value: "2.6 متر" },
    { label: "استهلاك المياه", value: "150-180 لتر" },
    { label: "القدرة الكهربائية", value: "12 كيلو واط" },
    { label: "عدد السيارات/ساعة", value: "25-30 سيارة" },
    { label: "ضغط المياه", value: "8-12 بار" },
    { label: "درجة حرارة الماء", value: "35-55 درجة مئوية" }
  ];

  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "غسيل ذكي",
      description: "نظام غسيل ذكي مع تحكم آلي بالرغوة"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "كفاءة عالية",
      description: "استهلاك أقل للمياه والكهرباء"
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "وقت مثالي",
      description: "دورة غسيل في 4-6 دقائق"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "أمان تام",
      description: "نظام حماية متقدم للسيارة والمعدات"
    }
  ];

  const benefits = [
    "تشغيل سهل وبسيط",
    "نظام تجفيف فعال",
    "برامج غسيل متنوعة",
    "صيانة منخفضة التكلفة",
    "مناسب للمساحات المتوسطة",
    "ضمان لمدة سنتين"
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                <Gem className="h-4 w-4 ml-2" />
                الخيار الأمثل
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                غسالة السيارات الآلية
                <span className="block text-secondary-foreground mt-2">BT500</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                حل متوازن ومثالي للمشاريع التجارية المتوسطة. تقنية متقدمة 
                بتكلفة معقولة وكفاءة عالية في الأداء.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Phone className="h-5 w-5 ml-2" />
                  اطلب عرض سعر
                </Button>
                <Button variant="outline" size="lg">
                  <Mail className="h-5 w-5 ml-2" />
                  استشارة مجانية
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=600&fit=crop" 
                  alt="غسالة السيارات BT500"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">25-30</div>
                  <div className="text-sm">سيارة/ساعة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="specs">المواصفات</TabsTrigger>
              <TabsTrigger value="features">المميزات</TabsTrigger>
              <TabsTrigger value="benefits">الفوائد</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">المواصفات التقنية</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {specifications.map((spec, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">{spec.label}</span>
                      <span className="text-secondary-foreground font-bold">{spec.value}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">المميزات الرئيسية</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-secondary/10 text-secondary-foreground rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">الفوائد والمزايا</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            هل BT500 مناسب لمشروعك؟
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            احصل على استشارة مجانية وعرض سعر مخصص لاحتياجاتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Phone className="h-5 w-5 ml-2" />
              اتصل بنا الآن
            </Button>
            <Button variant="outline" size="lg">
              <ArrowRight className="h-5 w-5 mr-2" />
              عرض المنتجات الأخرى
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWashBT500;