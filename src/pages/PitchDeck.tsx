
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield,
  Phone,
  Mail,
  MessageCircle,
  Target,
  Handshake,
  Zap,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const PitchDeck = () => {
  const opportunities = [
    {
      title: "نمو التجارة الإلكترونية",
      description: "الطلب المتزايد على حلول شحن موثوقة وفعالة"
    },
    {
      title: "الآلات المتخصصة",
      description: "طلب على مكائن البيع الذاتي ومغاسل السيارات وأنظمة الترفيه"
    },
    {
      title: "فرص استثمارية",
      description: "شراكة في شراء وبيع آلات مطلوبة بأرباح سريعة"
    }
  ];

  const advantages = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "خبرة متراكمة",
      description: "أكثر من 8 سنوات خبرة مع السوق الصيني والسعودي"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "حلول متكاملة",
      description: "نغطي جميع مراحل الاستيراد من البحث وحتى التوصيل"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "تقنية متطورة",
      description: "أنظمة ذكية لإدارة المخازن وتتبع الشحنات"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "مخاطر منخفضة",
      description: "عمليات قانونية وجمركية منظمة ومحكمة"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "عائد استثماري مرتفع",
      description: "تفاوض مباشر مع المصانع وخدمة البيع في السوق السعودي"
    }
  ];

  const partnerQualities = [
    "خبرة في التجارة الدولية أو اللوجستيات",
    "قدرة على بناء علاقات تجارية قوية",
    "مهارات تحليل الأسواق والمفاوضات",
    "التزام وحماس لبناء شركة واعدة",
    "خلفية تقنية أو تجارية مفضلة",
    "إجادة اللغتين العربية والإنجليزية"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm sm:text-base">
            عرض شراكة مؤسس
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sebaaq-midnight mb-6 leading-tight">
            انضم إلينا كشريك مؤسس في
            <span className="gradient-text block mt-2">سي باك للوجستيك</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            الشركة الرائدة في تقديم حلول شحن واستيراد متكاملة بين الصين والمملكة العربية السعودية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sebaaq-blue hover:bg-blue-600 text-white">
              <Handshake className="w-5 h-5 mr-2" />
              ابدأ الحوار الآن
            </Button>
            <Button variant="outline" size="lg">
              <ArrowRight className="w-5 h-5 mr-2" />
              اعرف المزيد
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              من نحن؟
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-8 h-8 text-sebaaq-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">شركة سعودية متخصصة</h3>
                      <p className="text-muted-foreground">
                        في الخدمات اللوجستية الشاملة، نوفر خدمات استيراد متكاملة من مصانع الصين مباشرة إلى العنوان النهائي في السعودية
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-sebaaq-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">خدمات شاملة</h3>
                      <p className="text-muted-foreground">
                        فحص جودة، تجميع شحنات، تخليص جمركي سريع، وتخزين ذكي بفضل مستودعاتنا في السعودية والصين
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Zap className="w-8 h-8 text-sebaaq-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">تقنيات حديثة</h3>
                      <p className="text-muted-foreground">
                        نعمل بالذكاء الاصطناعي لإدارة المخازن وتتبع الشحنات لحظة بلحظة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-sebaaq-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">استشارات متخصصة</h3>
                      <p className="text-muted-foreground">
                        في سوق الصناعة الصينية والآلات الذكية، ومساعدة العملاء على بناء علاقات قوية مع أفضل الموردين
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              فرص السوق
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              نمو مستمر في التجارة والاستيراد يفتح آفاق جديدة للاستثمار
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-sebaaq-blue" />
                  </div>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              لماذا الشراكة معنا؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center">
                    {advantage.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              ماذا نبحث عنه في شريك مؤسس؟
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {partnerQualities.map((quality, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                <Star className="w-5 h-5 text-sebaaq-blue flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-sebaaq-midnight mb-4">
              كيف نعمل؟
            </h2>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg text-sebaaq-blue">المشاركة الاستراتيجية</h3>
                <p className="text-muted-foreground">
                  شريكنا المؤسس سيشارك في رسم خطط التوسع، تطوير الخدمات، وتحسين العمليات اللوجستية والتجارية
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg text-sebaaq-blue">القيادة التشغيلية</h3>
                <p className="text-muted-foreground">
                  سيقود المفاوضات مع المصانع والموردين ويشارك في إدارة العمليات اليومية والتسويق
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="space-y-4">
                <h3 className="font-semibold text-lg text-sebaaq-blue">الشراكة العادلة</h3>
                <p className="text-muted-foreground">
                  شراكتنا قائمة على الثقة والشفافية، مع توزيع عادل للأسهم والأرباح
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sebaaq-blue to-blue-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            دعوة للتعاون
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            نحن على أعتاب مرحلة نمو جديدة، ونتطلع لشريك مؤسس يشاركنا الطموح والرؤية لبناء شركة تضع معيارًا جديدًا في مجال الاستيراد واللوجستيات بين الصين والسعودية
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <MessageCircle className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">واتساب</h3>
                <p className="text-blue-100 text-sm">+966 594 196 930</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <Phone className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">الهاتف</h3>
                <p className="text-blue-100 text-sm">+966 920 031 826</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white/10 border-white/20">
              <CardContent className="text-center space-y-3">
                <Mail className="w-8 h-8 text-white mx-auto" />
                <h3 className="font-semibold text-white">البريد الإلكتروني</h3>
                <p className="text-blue-100 text-sm">info@sebaaq.com</p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" variant="secondary" className="text-sebaaq-blue hover:bg-white/90">
            <Handshake className="w-5 h-5 mr-2" />
            تواصل معنا اليوم
          </Button>
        </div>
      </section>
    </div>
  );
};

export default PitchDeck;
