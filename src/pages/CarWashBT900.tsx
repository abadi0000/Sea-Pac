import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Star,
  Target,
  Gauge,
  Settings,
  Wrench,
  Award,
  Users,
  Clock,
  Sparkles,
  Wind,
  Brush,
  Waves,
  CircuitBoard,
  Database,
  Smartphone
} from 'lucide-react';

const CarWashBT900 = () => {
  const generalFeatures = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "2 في واحد",
      description: "غسيل بدون لمس + غسيل بالفرش"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "تقنيات متطورة",
      description: "أداء فائق الكفاءة مع قدرة عالية على غسيل أعداد كبيرة"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "كفاءة تشغيلية",
      description: "تقليل أوقات الانتظار وتحقيق عوائد مالية مرتفعة"
    }
  ];

  const performanceSpecs = [
    { label: "السرعة", value: "60 سيارة/ساعة", icon: <Gauge className="h-6 w-6" /> },
    { label: "وقت الغسيل", value: "1 دقيقة", icon: <Timer className="h-6 w-6" /> },
    { label: "ضمان الهيكل", value: "10 سنوات", icon: <Shield className="h-6 w-6" /> },
    { label: "الدعم الفني", value: "مدى الحياة", icon: <Users className="h-6 w-6" /> }
  ];

  const smartFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "نظام ذكي ضد الاصطدام",
      description: "تقنية المركبات الموجهة تلقائياً لحماية السيارة والمعدات"
    },
    {
      icon: <CircuitBoard className="h-8 w-8" />,
      title: "تشخيص ذاتي للأخطاء",
      description: "نظام ذكي يحدد الأخطاء تلقائياً ويقدم تقارير مفصلة"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "الخدمة الذاتية",
      description: "قبول جميع طرق الدفع وتشغيل 24 ساعة"
    }
  ];

  const brushFeatures = [
    "9 فرش ناعمة جداً من المايكروفايبر وطبقات الإيفا فوم",
    "فرش صناعة يابانية مصممة للبيئة الصحراوية",
    "إعادة ضبط الضغط حسب الرغبة",
    "ضمان ضد الخدوش - أمان عالي",
    "فترة استخدام حتى 100,000 سيارة",
    "تقنية التنظيف الذاتي للفرش"
  ];

  const dryingSpecs = [
    { label: "المجففات العلوية", value: "4 × 5.5KW" },
    { label: "المجففات الجانبية", value: "2 × 7.5KW" },
    { label: "نسبة التجفيف", value: "99%" },
    { label: "نظام التجفيف", value: "سمارتكو المتطور" }
  ];

  const washingModes = [
    "غسيل أسفل السيارة",
    "غسيل مسبق آمن (100 بار)",
    "رغوة متطورة",
    "واكس عالي الجودة",
    "تجفيف متقدم",
    "غسيل بدون لمس X2"
  ];

  const customerReviews = [
    {
      company: "شركة رواف القابضة للاستثمار (القصيم)",
      review: "آلات جودة عالية وخدمة الصيانة سريعة والفني يحضر في الوقت المحدد، أنصح الجميع بالتعامل معهم."
    },
    {
      company: "مغسلة غيمة نجد (الرياض)",
      review: "ما شاء الله اشتريت المغسلة وكانت ممتازة وتشغيلها بسيط، أفضل تعامل وحسن خلق من العاملين في الشركة."
    },
    {
      company: "مغسلة لمسة السيارة (الرياض: طويق)",
      review: "المغسلة تشتغل مضبوط المهندسين عندهم خبرة ممتازة وقطع الغيار متوفرة."
    }
  ];

  const purchaseSteps = [
    { step: "1", title: "تقديم استفسارك", description: "التواصل عبر الهاتف أو البريد الإلكتروني" },
    { step: "2", title: "حجز موعد مع خبير", description: "تحديد احتياجاتكم وتقديم النصائح" },
    { step: "3", title: "تقييم الموقع", description: "زيارة الموقع وتقييم المساحات والمتطلبات" },
    { step: "4", title: "توقيع العقد", description: "الاتفاق على التفاصيل وتجهيز الموقع" },
    { step: "5", title: "التركيب", description: "تركيب المكائن والفحص النهائي" },
    { step: "6", title: "التدريب", description: "تدريب شامل على العمليات والصيانة" },
    { step: "7", title: "المتابعة", description: "متابعة دورية ودعم مستمر" }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-lg px-6 py-2">
              <Sparkles className="h-5 w-5 ml-2" />
              نظام الغسيل المتطور
            </Badge>
            
            <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">
              BT900
            </h1>
            
            <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              نظام الغسيل الأوتوماتيكي الأكثر تطوراً مع تقنيات ذكية متقدمة
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {generalFeatures.map((feature, index) => (
                <Card key={index} className="bg-background/80 backdrop-blur-sm border-primary/20 hover:bg-background/90 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">الأداء والضمان</h2>
            <p className="text-xl text-muted-foreground">مواصفات تقنية متقدمة لأداء استثنائي</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceSpecs.map((spec, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-background to-muted/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {spec.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{spec.value}</div>
                  <div className="text-muted-foreground">{spec.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">المميزات الذكية</h2>
            <p className="text-xl text-muted-foreground">تقنيات متطورة لحماية وكفاءة عاليين</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {smartFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="mb-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary w-fit">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specifications */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="brushes" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="brushes">الفرش</TabsTrigger>
              <TabsTrigger value="drying">التجفيف</TabsTrigger>
              <TabsTrigger value="washing">أوضاع الغسيل</TabsTrigger>
              <TabsTrigger value="pump">المضخة</TabsTrigger>
            </TabsList>

            <TabsContent value="brushes" className="space-y-6">
              <Card className="bg-gradient-to-r from-background to-blue-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Brush className="h-6 w-6 text-blue-500" />
                    نظام الفرش المتطور
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {brushFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drying" className="space-y-6">
              <Card className="bg-gradient-to-r from-background to-green-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Wind className="h-6 w-6 text-green-500" />
                    أقوى نظام تجفيف
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dryingSpecs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                        <span className="font-semibold text-foreground">{spec.label}</span>
                        <span className="text-primary font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                    <p className="text-foreground">
                      <strong>نسبة تجفيف تصل إلى 99%</strong> - 6 مجففات تعمل معاً لإزالة المياه بانسيابية عالية جداً وسرعة
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="washing" className="space-y-6">
              <Card className="bg-gradient-to-r from-background to-purple-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Waves className="h-6 w-6 text-purple-500" />
                    أوضاع الغسيل المتكاملة
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {washingModes.map((mode, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-purple-500" />
                        <span className="text-foreground font-medium">{mode}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pump" className="space-y-6">
              <Card className="bg-gradient-to-r from-background to-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Settings className="h-6 w-6 text-red-500" />
                    مضخة PINFL الألمانية
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">قوة الضخ</span>
                        <span className="text-primary font-bold">100 بار</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">العلامة التجارية</span>
                        <span className="text-primary font-bold">PINFL (ألمانية)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">عدد المضخات</span>
                        <span className="text-primary font-bold">2</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">كفاءة عالية وتوفير الطاقة</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">ضغط الماء قابل للتخصيص</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">ميزات السلامة العالية</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">بناء متين للبيئة القاسية</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Purchase Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">خطوات الشراء من سمارتكو</h2>
            <p className="text-xl text-muted-foreground">عملية سهلة ومتكاملة من الاستفسار إلى التشغيل</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {purchaseSteps.map((step, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-background to-primary/5 border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">آراء عملائنا</h2>
            <p className="text-xl text-muted-foreground">تجارب حقيقية من عملائنا الكرام</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review, index) => (
              <Card key={index} className="bg-background border-primary/20 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                  <p className="font-semibold text-primary">{review.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            تواصل معنا الآن
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            لديك استفسارات وتحتاج إلى المساعدة؟ احجز موعد مع أحد خبرائنا الآن
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="p-4 bg-background/80 rounded-lg">
              <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-semibold">920031826</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg">
              <Phone className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-semibold">+966581962473</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg">
              <Mail className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-semibold text-sm">sales@SmartComachine.com</p>
            </div>
            <div className="p-4 bg-background/80 rounded-lg">
              <Database className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-semibold text-sm">www.SmartComachine.com</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Phone className="h-5 w-5 ml-2" />
              احجز موعد مع خبير
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5">
              <Mail className="h-5 w-5 ml-2" />
              أرسل استفسارك
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWashBT900;