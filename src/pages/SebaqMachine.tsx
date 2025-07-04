
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Package, Settings, Headphones, Cog, Lightbulb, Cpu, Zap, MapPin } from 'lucide-react';

const SebaqMachine = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredExpertise, setHoveredExpertise] = useState<number | null>(null);

  const services = [
    {
      title: "استشارات",
      description: "نقدم استشارات فنية متخصصة لمساعدتكم في اختيار الآلات الأمثل التي تتوافق مع احتياجات مشاريعكم وميزانيتكم",
      icon: Headphones
    },
    {
      title: "توريد",
      description: "نتولى كافة إجراءات توريد الآلات بكفاءة عالية، تشمل جميع إجراءات هيئة المواصفات والمقاييس والتخليص الجمركي. مستفيدين من خبرتنا الواسعة في الشحن الدولي والخدمات اللوجستية وشبكة موردينا العالمية",
      icon: Package
    },
    {
      title: "تركيب",
      description: "فريقنا الفني مؤهل لتركيب جميع أنواع الآلات والمكائن وتشغيلها بأعلى معايير الدقة والاحترافية.",
      icon: Settings
    },
    {
      title: "صيانة",
      description: "نوفر خدمات صيانة شاملة ودعمًا فنيًا لضمان استمرارية عمل الآلات بكفاءة عالية وإطالة عمرها التشغيلي.",
      icon: Wrench
    },
    {
      title: "توفير القطع",
      description: "نوفر خدمات صيانة شاملة ودعمًا فنيًا لضمان استمرارية عمل الآلات بكفاءة عالية وإطالة عمرها التشغيلي.",
      icon: Cog
    }
  ];

  const products = [
    {
      title: "مكائن البيع الذاتي",
      subtitle: "آخر العروض",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "أنظمة خطوط الإنتاج والمصانع",
      subtitle: "آخر العروض",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "مغاسل السيارات الاوتوماتيكية",
      subtitle: "آخر العروض",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "الأنظمة الترفيهية",
      subtitle: "آخر العروض",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const expertiseAreas = [
    {
      title: "فهم معمّق لجوهر الآلات وأنظمة التحكم المتقدمة",
      description: "إننا نتعمق في فهم بنيتها الجوهرية وأسسها التقنية. لقد أكسبنا التعامل المباشر مع مجموعة متنوعة من الأنظمة الصناعية والخدمية والترفيهية المتقدمة – بما في ذلك خطوط الإنتاج",
      icon: Lightbulb
    },
    {
      title: "تحليل النظم الميكانيكي، الكهربائية، والهوائية",
      description: "لدينا فهم عميق للمكونات الميكانيكية الدقيقة، الدوائر الكهربائية وأنظمة الطاقة، بالإضافة إلى الأنظمة النيوماتيكية والهيدروليكية التي تدير الحركة والقوة داخل الآلات. هذا الإلمام الشامل يمكننا من تحليل التفاعلات بين هذه الأنظمة، تشخيص الأعطال بدقة",
      icon: Cpu
    },
    {
      title: "التخطيط الفني والتجهيز الموقعي",
      description: "نُقيّم موقع التركيب فنيًا بشكل كامل (مساحة، طاقة، أرضيات، وبيئة العمل)، ونُخطط لتوزيع الآلات بما يضمن كفاءة التشغيل، السلامة، وتكامل توصيلات الخدمات",
      icon: MapPin
    },
    {
      title: "تركيب وتشغيل احترافي",
      description: "يشرف فريقنا الفني المتخصص على عمليات تركيب وتجميع الآلات بدقة متناهية، ملتزمين بالمواصفات الفنية للمصنع، المخططات الهندسية المعتمدة، وأفضل الممارسات الصناعية لضمان سلامة وثبات التركيب",
      icon: Zap
    }
  ];

  const stats = [
    { number: "90+", label: "تم تركيب آله في مختلف المجالات" },
    { number: "800+", label: "اكثر من عملية صيانة" },
    { number: "60+", label: "لدينا عميل دائم" },
    { number: "8+", label: "خبراتنا تتجاوز سنين في مجالات متعددة" },
    { number: "490+", label: "تم توفير قطع غيار" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            سـي بـاك ماشـين
            <span className="gradient-text block mt-2">استشارة، توريد، تركيب، صيانة</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            في سـي باك ماشـين نقدم لكم حلولاً متخصصة وشاملة تشمل أحدث الأنظمة الآلية والمعدات الصناعية والتجارية والخدمية المتطورة. سواء كنتم بحاجة إلى آلات إنتاج دقيقة تتطلب تحكمًا فائقًا، أو أنظمة أوتوماتيكية معقدة تدمج بين الميكانيكا والإلكترونيات والبرمجيات. نحن شريككم الاستراتيجي الذي يضمن لكم الحصول على الآلات المناسبة وتركيبها وتشغيلها وصيانتها بكفاءة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
              تواصل معنا
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold">
              تصفح عروضنا على الآلات التي نوفرها
            </Button>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              خبرتنا التقنية الشاملة
              <span className="gradient-text block">من التخطيط الموقعي إلى التشغيل الأمثل والدعم المستمر</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              في سي باك ماشين، تمتد خبرتنا التقنية إلى ما وراء مجرد توريد. نحن لدينا فهم عالي في كثير من المجالات والأنظمة التقنية المعقدة، مع إدراك دقيق لتعقيدات عملها الميكانيكي ومبادئ تصميمها الحركي، وذلك يشمل تحليل القوى والإجهادات، ودراسة المواد المكونة منها، وكفاءة نقل الحركة والطاقة
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredExpertise === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredExpertise(index)}
                onMouseLeave={() => setHoveredExpertise(null)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            منتجاتنا
            <span className="gradient-text block">المتخصصة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card 
                key={index}
                className={`overflow-hidden transition-all duration-300 transform ${
                  hoveredProduct === index ? 'scale-105 shadow-2xl' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-sebaaq-midnight">
                    {product.title}
                  </CardTitle>
                  <p className="text-sebaaq-blue font-medium">{product.subtitle}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight text-center mb-16">
            خدماتنا
            <span className="gradient-text block">المتكاملة</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredService === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal">
        <div className="container mx-auto px-6">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white text-center mb-4">
            لماذا يثق بنا
            <span className="gradient-text block">عملاؤنا؟</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-sebaaq-midnight mb-8">
            ابدأ مشروعك معنا اليوم
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا الآن للحصول على استشارة مجانية وتحديد أفضل الحلول لاحتياجاتك
          </p>
          <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SebaqMachine;
