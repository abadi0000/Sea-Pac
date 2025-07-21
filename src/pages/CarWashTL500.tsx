import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Cog, Droplets, Timer, Shield, Zap, Settings, RefreshCw } from "lucide-react";

const CarWashTL500 = () => {
  const specifications = [
    { label: "نظام التحكم", value: "GERMAN: SIEMENS" },
    { label: "مضخة المياه الرئيسية", value: "GERMAN: PINFL" },
    { label: "الحساسات", value: "GERMAN: BAUMER" },
    { label: "القواطع الكهربائية", value: "GERMAN: SCHNEIDER" },
    { label: "مساحة التركيب", value: "طول: 7.8 متر، عرض: 4 متر، ارتفاع: 3.5 متر" },
    { label: "الحد الأقصى لحجم السيارة", value: "طول: 5.6 متر، عرض: 2.6 متر، ارتفاع: 2 متر" },
    { label: "مضخة المياه الرئيسية", value: "PINFL PUMP" },
    { label: "نظام التجفيف", value: "6 مجففات توربو" },
    { label: "استهلاك المياه", value: "60 - 140 لتر" },
    { label: "استهلاك الطاقة", value: "0.5-1.2 kW/سع" },
    { label: "وقت الغسيل", value: "2 - 5 دقائق" },
    { label: "أقصى قوة ضغط المياه", value: "100 Bar" },
    { label: "استهلاك مواد التنظيف", value: "150 / 20 مل" },
    { label: "الكهرباء", value: "380V" },
  ];

  const features = [
    {
      icon: Cog,
      title: "تقنية الاستشعار الذكي القياسي",
      description: "INTELLIGENT MAX SENSOR - يمتاز موديل TL500 بأجهزة استشعار هاكس متقدمة تقرأ أبعاد وارتفاع السيارة بتقنية عالية.",
    },
    {
      icon: Droplets,
      title: "ضغط ماء بقوة BAR 100",
      description: "باستخدام المضخة الألمانية (بينفل) توفر ضغط عالي وآمن يعمل بانسيابية عالية، مما يبيح تنظيفاً دقيقاً وشاملاً لجميع أنحاء سطح السيارة.",
    },
    {
      icon: Settings,
      title: "ذراع روبوتك ذكي",
      description: "يمكن للذراع أن يدور 360 ويتحرك للأمام والخلف ويدعم جميع الاتجاهات، ومن خلال ضبط اتجاه الذراع التي، يمكن توجيه تدفق المياه بشكل محدد نحو المرايا.",
    },
    {
      icon: RefreshCw,
      title: "نظام الحركة الديناميكية لليسار واليمين",
      description: "مع القدرة على التحرك أفقياً، يتكيف الذراع مع عرض كل سيارة، مما يضمن مسافة تنظيف مثالية بالإضافة إلى تجنب العوائق مثل المرايا.",
    },
    {
      icon: Shield,
      title: "مجموعة من الحساسات الذكية",
      description: "تقوم أجهزة الاستشعار المتعددة بقياس عرض السيارة، وضبط مسافة الذراع من سطح السيارة، للحفاظ على مسافة مثالية تبلغ 30 سم من الذراع وسطح السيارة.",
    },
    {
      icon: Zap,
      title: "الغسيل المضاعف",
      description: "يركز على المناطق التي تحتاج إلى اهتمام إضافي. مقدمة ومؤخرة السيارة: بفضل نظام الغسيل المضاعف، يتم غسل هذه المناطق مرتين قبل الدوران بشكل كامل.",
    },
  ];

  const advantages = [
    "نظام تجفيف متطور + مجفف جانبي",
    "مجففات جانبية: تصميم مبتكر يحسن وصول الهواء وتجفيفه، مما يضمن أقصى أداء للتجفيف",
    "خيارات متعددة: نوفر لعملائنا خيارات وتعددة لتصاميم أنظمة التجفيف، لتناسب التفضيلات الخاصة لكل عملائنا",
    "نسبة تجفيف تصل إلى 95%: توفر سمارتكو لأقوى نظام تجفيف، 6 مجففات بقوة وكفاءة قصوى",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="outline" className="w-fit bg-primary/10 text-primary border-primary/20">
                منتج جديد
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                  نظام غسيل السيارات <span className="text-primary">TL500</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  أقوى وأحدث أنظمة غسيل المركبات من موديلات الغسيل بدون لمس، <span className="text-primary font-semibold">سمارتكو</span>
                </p>
                <p className="text-lg text-muted-foreground">
                  تم تصميم نظام TL500 لتحقيق نتائج مبهرة، ووضع معايير جديدة في تكنولوجيا غسيل السيارات الأوتوماتيكي، مزودة بمجموعة كبيرة من الخبرات والتكنولوجيا المتقدمة، لإحداث ثورة في أنظمة غسيل السيارات.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  اطلب عرض سعر
                </Button>
                <Button variant="outline" size="lg">
                  تحميل الكتالوج
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="/lovable-uploads/7f3e676e-bd79-407e-a308-0d9483d4578f.png" 
                  alt="TL500 Car Wash System" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-glow to-accent">
        <div className="container mx-auto px-4">
          <div className="text-center text-white space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold">10</h2>
            <p className="text-2xl lg:text-3xl font-semibold">سنوات ضمان</p>
            <p className="text-lg opacity-90">على الهيكل وأنظمة التحكم</p>
            
            <div className="mt-12 flex items-center justify-center">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-8 py-3 rounded-full font-bold text-xl">
                دعم فني <span className="text-accent-foreground">مدى الحياة!</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <Settings className="w-12 h-12 text-white" />
              </div>
            </div>
            <p className="text-xl font-semibold">صيانة مجانية</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              المميزات التي تجعل نظام TL500 استثنائي
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              يمتاز موديل TL500 بأجهزة استشعار هاكس متقدمة تقرأ أبعاد وارتفاع السيارة بتقنية عالية الجودة، مما يوفر أداء تنظيف على المستوى وكفاءة في استخدام الطاقة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Images Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              نظام تجفيف متطور + مجفف جانبي
            </h2>
            <p className="text-xl text-muted-foreground">
              نظام تجفيف يتكون من 6 مجففات، مزيج بين التكنولوجيا المتطورة وموادعالية الجودة، مما يضمن أقصى أداء للتجفيف على المستوى وكفاءة في استخدام الطاقة
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/67d50a90-9cf1-4f95-99ca-847913f88c1f.png" 
                alt="TL500 Features" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/464c2913-7b6d-45d7-9618-6a6baa23ed50.png" 
                alt="TL500 Smart Arm Features" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/6190c4d1-c04b-4586-9991-d1daa8228546.png" 
                alt="TL500 Drying System" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src="/lovable-uploads/9cec8832-9e00-432b-8147-5d39c5f21026.png" 
                alt="TL500 Specifications" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">المواصفات التقنية</h2>
            <p className="text-xl text-muted-foreground">مواصفات تقنية متقدمة لضمان الأداء الأمثل</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-card rounded-lg border border-border/50">
                  <span className="font-medium text-foreground">{spec.label}</span>
                  <span className="text-muted-foreground text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">جدول مقارنة التقنيات</h2>
            <p className="text-xl text-muted-foreground">مقارنة شاملة بين موديلات TL300 و TL400 و TL500</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <img 
              src="/lovable-uploads/2176eb12-53f3-47b4-bfd6-4b73e7ab8f3a.png" 
              alt="Technology Comparison Table" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-glow to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold">
              ابدأ مشروعك مع TL500 اليوم
            </h2>
            <p className="text-xl opacity-90">
              احصل على عرض سعر مخصص واستشارة مجانية لتحديد أفضل حل لاحتياجاتك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                اطلب عرض سعر
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarWashTL500;