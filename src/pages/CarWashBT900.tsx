import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Car, 
  Clock, 
  Shield, 
  Zap, 
  Droplets, 
  Wind, 
  Settings, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Globe,
  ArrowLeft,
  Gauge,
  Wrench,
  CreditCard,
  Users,
  Award,
  Target,
  Sparkles,
  CircuitBoard,
  Cpu,
  Database,
  Wifi
} from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, highlight = false }) => (
  <Card className={`p-6 h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 group ${
    highlight 
      ? 'bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20 shadow-lg' 
      : 'bg-background/80 backdrop-blur-sm hover:bg-background/90'
  }`}>
    <div className="flex flex-col items-center text-center space-y-4">
      <div className={`p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
        highlight 
          ? 'bg-gradient-to-br from-primary/20 to-blue-500/20' 
          : 'bg-gradient-to-br from-muted to-muted/50'
      }`}>
        {icon}
      </div>
      <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </Card>
);

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  gradient?: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, icon, gradient = "from-primary to-blue-500" }) => (
  <Card className={`p-6 bg-gradient-to-br ${gradient} text-white relative overflow-hidden group hover:scale-105 transition-all duration-300`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold">{value}</div>
          <div className="text-white/90">{label}</div>
        </div>
      </div>
    </div>
  </Card>
);

interface TestimonialProps {
  company: string;
  location: string;
  review: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ company, location, review, rating }) => (
  <Card className="p-6 h-full bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300 border-primary/10">
    <div className="space-y-4">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/30'}`} />
        ))}
      </div>
      <p className="text-muted-foreground italic leading-relaxed">"{review}"</p>
      <div>
        <div className="font-semibold text-foreground">{company}</div>
        <div className="text-sm text-primary">{location}</div>
      </div>
    </div>
  </Card>
);

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-500 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
        {step}
      </div>
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-bold text-lg text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  </div>
);

const BT900ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const mainFeatures = [
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "2 في 1",
      description: "غسيل بدون لمس + غسيل بالفرش في نظام واحد متطور",
      highlight: true
    },
    {
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: "سرعة فائقة",
      description: "60 سيارة في الساعة - دقيقة واحدة فقط لكل سيارة",
      highlight: true
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "ضمان شامل",
      description: "10 سنوات ضمان على الهيكل ودعم فني مدى الحياة"
    },
    {
      icon: <CircuitBoard className="w-8 h-8 text-blue-500" />,
      title: "ذكي ومتطور",
      description: "نظام ذكي ضد الاصطدام وتشخيص ذاتي للأخطاء"
    }
  ];

  const brushFeatures = [
    {
      icon: <Settings className="w-6 h-6 text-primary" />,
      title: "9 فرش ناعمة",
      description: "مصنوعة من المايكروفايبر وطبقات الإيفا فوم"
    },
    {
      icon: <Award className="w-6 h-6 text-green-500" />,
      title: "صناعة يابانية",
      description: "مصممة خصيصاً للبيئة القاسية والصحراوية"
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "ضمان ضد الخدوش",
      description: "أمان عالي ومواد لا تمتص الماء"
    },
    {
      icon: <Target className="w-6 h-6 text-orange-500" />,
      title: "عمر طويل",
      description: "تحمل حتى 100,000 سيارة مع تنظيف ذاتي"
    }
  ];

  const testimonials = [
    {
      company: "شركة رواف القابضة",
      location: "القصيم",
      review: "آلات جودة عالية وخدمة الصيانة سريعة والفني يحضر في الوقت المحدد، أنصح الجميع بالتعامل معهم",
      rating: 5
    },
    {
      company: "مغسلة غيمة نجد",
      location: "الرياض",
      review: "ما شاء الله اشتريت المغسلة وكانت ممتازة وتشغيلها بسيط، أفضل تعامل وحسن خلق من العاملين",
      rating: 5
    },
    {
      company: "مغسلة لمسة السيارة",
      location: "الرياض - طويق",
      review: "المغسلة تشتغل مضبوط المهندسين عندهم خبرة ممتازة وقطع الغيار متوفرة",
      rating: 5
    }
  ];

  const purchaseSteps = [
    {
      step: 1,
      title: "تقديم الاستفسار",
      description: "تواصل معنا عبر الهاتف أو البريد الإلكتروني",
      icon: <Phone className="w-5 h-5" />
    },
    {
      step: 2,
      title: "حجز موعد مع خبير",
      description: "سيتواصل معك أحد خبرائنا لتحديد احتياجاتك",
      icon: <Users className="w-5 h-5" />
    },
    {
      step: 3,
      title: "تقييم الموقع",
      description: "زيارة موقعك لتقييم المساحات والمتطلبات",
      icon: <Target className="w-5 h-5" />
    },
    {
      step: 4,
      title: "التركيب والتدريب",
      description: "تركيب المعدات وتدريب فريقك على الاستخدام",
      icon: <Wrench className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-6 py-3 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 ml-2" />
              نظام الغسيل المتطور
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              BT900
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              نظام غسيل أوتوماتيكي متطور يجمع بين تقنية الغسيل بدون لمس والغسيل بالفرش
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">
                <Clock className="w-5 h-5" />
                <span>60 سيارة/ساعة</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">
                <Shield className="w-5 h-5" />
                <span>ضمان 10 سنوات</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-xl backdrop-blur-sm">
                <CircuitBoard className="w-5 h-5" />
                <span>تقنية ذكية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              value="60" 
              label="سيارة في الساعة" 
              icon={<Car className="w-6 h-6" />}
              gradient="from-primary to-blue-500"
            />
            <StatCard 
              value="1" 
              label="دقيقة لكل سيارة" 
              icon={<Clock className="w-6 h-6" />}
              gradient="from-green-500 to-emerald-500"
            />
            <StatCard 
              value="10" 
              label="سنوات ضمان" 
              icon={<Shield className="w-6 h-6" />}
              gradient="from-purple-500 to-violet-500"
            />
            <StatCard 
              value="99%" 
              label="نسبة التجفيف" 
              icon={<Wind className="w-6 h-6" />}
              gradient="from-orange-500 to-red-500"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-12 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
              <TabsTrigger value="brushes">الفرش</TabsTrigger>
              <TabsTrigger value="drying">التجفيف</TabsTrigger>
              <TabsTrigger value="pump">المضخة</TabsTrigger>
              <TabsTrigger value="modes">أوضاع الغسيل</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-foreground">المميزات العامة</h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  يتميز هذا النظام بتقنيات متطورة تضمن أداءً فائق الكفاءة، مع قدرة عالية على غسيل أعداد كبيرة من السيارات بسرعة وفعالية
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mainFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              <Card className="p-8 bg-gradient-to-r from-primary/5 via-blue-500/5 to-purple-500/5 border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-primary" />
                  طريقة عمل النظام
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  تتحرك السيارة عبر النفق بنظام سحب سير مدمج، مروراً بمراحل الغسيل (غسيل مسبق، الرغوة، الشمع، والتجفيف). 
                  كل مرحلة مجهزة بتقنيات متقدمة وأجهزة استشعار تتكيف مع أبعاد السيارة لضمان تنظيف شامل.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="brushes" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-foreground">نظام الفرش المتطور</h2>
                <p className="text-xl text-muted-foreground">
                  9 فرش ناعمة جداً مصنوعة من أجود المواد اليابانية
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {brushFeatures.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-background to-primary/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <Settings className="w-5 h-5 ml-2 text-primary" />
                    مكونات الفرش
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />1 فرشاة علوية</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />فرش جانبية متعددة</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />4 فرش للجنوط والإطارات</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />مايكروفايبر وإيفا فوم</li>
                  </ul>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-background to-green-500/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <Award className="w-5 h-5 ml-2 text-green-500" />
                    المميزات الخاصة
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />ضبط الضغط حسب الرغبة</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />تنظيف ذاتي للفرش</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />مقاومة الالتصاق</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 ml-2 text-green-500" />عمر 100,000 سيارة</li>
                  </ul>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="drying" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-foreground">أقوى نظام تجفيف</h2>
                <p className="text-xl text-muted-foreground">
                  6 مجففات عالية القوة لتجفيف مثالي بنسبة 99%
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-background to-blue-500/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <Wind className="w-5 h-5 ml-2 text-blue-500" />
                    المجففات العلوية
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">عدد المجففات</span>
                      <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">4 مجففات</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">القوة</span>
                      <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20">5.5 كيلوواط</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      مخصصة لتجفيف الجزء العلوي من السيارة بكفاءة عالية
                    </p>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-background to-green-500/5">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <Wind className="w-5 h-5 ml-2 text-green-500" />
                    المجففات الجانبية
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">عدد المجففات</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">2 مجففات</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">القوة</span>
                      <Badge className="bg-green-500/10 text-green-600 border-green-500/20">7.5 كيلوواط</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      لإزالة متبقي المياه على جوانب السيارة بانسيابية عالية
                    </p>
                  </div>
                </Card>
              </div>

              <Card className="p-8 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-purple-500/5 border border-green-500/20">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">نسبة تجفيف استثنائية</h3>
                  <div className="text-7xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">99%</div>
                  <p className="text-muted-foreground text-lg">
                    6 مجففات تعمل معاً لإزالة المياه بانسيابية عالية جداً وسرعة
                  </p>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="pump" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-foreground">نظام المضخة الألماني</h2>
                <p className="text-xl text-muted-foreground">
                  مضخات PINFL الألمانية عالية الكفاءة
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 text-center bg-gradient-to-br from-background to-primary/5 hover:shadow-xl transition-all duration-300">
                  <Gauge className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-bold text-xl mb-2 text-foreground">قوة الضخ</h3>
                  <div className="text-4xl font-bold text-primary">100</div>
                  <div className="text-muted-foreground">بار</div>
                </Card>

                <Card className="p-6 text-center bg-gradient-to-br from-background to-green-500/5 hover:shadow-xl transition-all duration-300">
                  <Settings className="w-12 h-12 mx-auto mb-4 text-green-500" />
                  <h3 className="font-bold text-xl mb-2 text-foreground">عدد المضخات</h3>
                  <div className="text-4xl font-bold text-green-500">2</div>
                  <div className="text-muted-foreground">مضخة</div>
                </Card>

                <Card className="p-6 text-center bg-gradient-to-br from-background to-purple-500/5 hover:shadow-xl transition-all duration-300">
                  <Award className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                  <h3 className="font-bold text-xl mb-2 text-foreground">العلامة التجارية</h3>
                  <div className="text-2xl font-bold text-purple-500">PINFL</div>
                  <div className="text-muted-foreground">ألمانية</div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "كفاءة عالية", desc: "استهلاك أمثل للطاقة وتقليل تكاليف التشغيل", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
                  { title: "ضغط قابل للتخصيص", desc: "تعديل ضغط الماء حسب متطلبات التنظيف", icon: <Settings className="w-5 h-5 text-blue-500" /> },
                  { title: "ميزات السلامة", desc: "صمامات إغلاق تلقائي وتخفيف الضغط", icon: <Shield className="w-5 h-5 text-green-500" /> },
                  { title: "بناء متين", desc: "مواد عالية الجودة لتحمل البيئات القاسية", icon: <Award className="w-5 h-5 text-purple-500" /> }
                ].map((feature, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      {feature.icon}
                      <h3 className="font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="modes" className="space-y-12">
              <div className="text-center space-y-6">
                <h2 className="text-4xl font-bold text-foreground">أوضاع الغسيل المتعددة</h2>
                <p className="text-xl text-muted-foreground">
                  خيارات غسيل متكاملة قابلة للتعديل حسب احتياجاتكم
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: <Droplets className="w-6 h-6 text-blue-500" />, title: "غسيل أسفل السيارة", desc: "تنظيف شامل للجزء السفلي" },
                  { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "غسيل مسبق آمن", desc: "مضخة 100 بار لإزالة الجزيئات" },
                  { icon: <Car className="w-6 h-6 text-green-500" />, title: "الرغوة", desc: "رغوة كثيفة للتنظيف العميق" },
                  { icon: <Star className="w-6 h-6 text-purple-500" />, title: "الواكس", desc: "طبقة حماية ولمعان" },
                  { icon: <Wind className="w-6 h-6 text-orange-500" />, title: "التجفيف", desc: "تجفيف مثالي بنسبة 99%" },
                  { icon: <Shield className="w-6 h-6 text-red-500" />, title: "غسيل بدون لمس", desc: "تقنية X2 عند الدخول والخروج" }
                ].map((mode, index) => (
                  <Card key={index} className="p-6 bg-gradient-to-br from-background to-muted/30 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-muted rounded-lg">
                        {mode.icon}
                      </div>
                      <h3 className="font-bold text-foreground">{mode.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{mode.desc}</p>
                  </Card>
                ))}
              </div>

              <Card className="p-8 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-6 text-center text-foreground flex items-center justify-center gap-2">
                  <Wifi className="w-6 h-6 text-purple-500" />
                  الخدمة الذاتية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CreditCard className="w-8 h-8 mx-auto mb-3 text-purple-500" />
                    <h4 className="font-semibold text-foreground mb-2">طرق دفع متعددة</h4>
                    <p className="text-sm text-muted-foreground">Apple Pay, Visa, مدى</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-8 h-8 mx-auto mb-3 text-green-500" />
                    <h4 className="font-semibold text-foreground mb-2">عمل 24 ساعة</h4>
                    <p className="text-sm text-muted-foreground">تقنية الدفع الذاتي</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 mx-auto mb-3 text-blue-500" />
                    <h4 className="font-semibold text-foreground mb-2">برنامج الولاء</h4>
                    <p className="text-sm text-muted-foreground">ربط البوابة والعملاء</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold text-foreground">خطوات الشراء من سمارتكو</h2>
            <p className="text-xl text-muted-foreground">
              عملية شراء مبسطة مع دعم شامل من البداية حتى النهاية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {purchaseSteps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl font-bold text-foreground">آراء عملائنا</h2>
            <p className="text-xl text-muted-foreground">
              تجارب حقيقية من عملائنا الكرام
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-8">
            <h2 className="text-4xl font-bold">تواصل معنا</h2>
            <p className="text-xl text-blue-100">
              لديك استفسارات وتحتاج إلى المساعدة؟ احجز موعد مع أحد خبرائنا الآن
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Phone className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">الهاتف</h3>
                <p className="text-blue-100">920031826</p>
                <p className="text-blue-100">+966581962473</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Mail className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">البريد الإلكتروني</h3>
                <p className="text-blue-100">sales@SmartComachine.com</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Globe className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-bold mb-2">الموقع الإلكتروني</h3>
                <p className="text-blue-100">www.SmartComachine.com</p>
              </Card>
            </div>

            <Button size="lg" className="bg-white text-primary hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl">
              احجز موعد مع خبير
              <ArrowLeft className="w-4 h-4 mr-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BT900ProductPage;