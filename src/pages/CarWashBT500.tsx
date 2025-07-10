import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BT500Specifications from '@/components/sections/BT500Specifications';
import BT500Features from '@/components/sections/BT500Features';
import CustomerTestimonials from '@/components/sections/CustomerTestimonials';
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
  Gem,
  Users,
  Award,
  Clock
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
                حيث يلتقي الابتكار والتكنولوجيا - حلول الأتمتة لغسيل المركبات.
                نظام 2 في 1: غسيل بدون لمس + غسيل بالفرش لأداء استثنائي.
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

      {/* Comprehensive Specifications */}
      <BT500Specifications />

      {/* Advanced Features */}
      <BT500Features />

      {/* Quality & Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
              جودة SEBAQ
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              لماذا SEBAQ؟
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-gradient-to-br from-blue-500/5 to-blue-600/10 border border-blue-500/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-blue-500/20 border border-blue-500/30">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">الهيكل المتين</h3>
                <p className="text-muted-foreground">
                  جميع أنظمة SEBAQ مصنوعة من الستيل المجلفن المقاوم للصدأ
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-500/5 to-green-600/10 border border-green-500/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-green-500/20 border border-green-500/30">
                  <Award className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">قطع عالمية</h3>
                <p className="text-muted-foreground">
                  جميع القطع من علامات تجارية قوية ومعروفة (ألمانية وفرنسية)
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-500/5 to-purple-600/10 border border-purple-500/20">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 rounded-full bg-purple-500/20 border border-purple-500/30">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-foreground">تصميم محلي</h3>
                <p className="text-muted-foreground">
                  تصميم وتجميع محلي مناسب للبيئة السعودية القاسية
                </p>
              </div>
            </Card>
          </div>

          <Card className="p-8 bg-gradient-to-br from-secondary/5 to-accent/5 border border-secondary/20">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                خطوات الشراء
              </h3>
              <div className="grid md:grid-cols-7 gap-4 text-center">
                {[
                  { step: "1", title: "الاستفسار", desc: "تواصل معنا" },
                  { step: "2", title: "الاستشارة", desc: "حجز موعد خبير" },
                  { step: "3", title: "تقييم الموقع", desc: "زيارة ميدانية" },
                  { step: "4", title: "العقد", desc: "توقيع الاتفاقية" },
                  { step: "5", title: "التركيب", desc: "تركيب المعدات" },
                  { step: "6", title: "التدريب", desc: "تدريب الفريق" },
                  { step: "7", title: "المتابعة", desc: "دعم مستمر" }
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto border border-secondary/30">
                      <span className="text-lg font-bold text-secondary-foreground">{item.step}</span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Customer Testimonials */}
      <CustomerTestimonials />

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