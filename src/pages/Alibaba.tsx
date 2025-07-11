
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Package, CheckCircle, Truck, Users } from 'lucide-react';

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
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            استورد من الصين
            <span className="gradient-text block mt-2">[وسيط علي بابا]</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            سي باك لوجستيك وسيط علي بابا لشحن سهل وموثوق من علي بابا إلى السعودية
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto mb-12 leading-relaxed">
            حلول موثوقة تضمن لك استيراد آمن من علي بابا إلى السعودية، سي باك لوجستيك توفر لك خدمة استيراد متكاملة لتوفير الوقت والجهد 
            وضمان جودة مشترياتك وتخليصها جمركيًا بسلاسة
          </p>
          <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
            تواصل معنا
          </Button>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              الخدمات التي نوفرها
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg border max-w-5xl mx-auto">
              <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4">
                خدمات سي باك لوجستيك للشحن من علي بابا إلى السعودية
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                نحن في سي باك نساعدك على شحن بضائعك من علي بابا إلى السعودية بكل يسر وسهولة. 
                كل ما عليك هو تسجيل طلب الشحنة ونحن نقوم بباقي العمل.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-6 transition-all duration-300 transform ${
                  hoveredService === index ? 'scale-105 shadow-2xl bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5' : 'scale-100 shadow-lg'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-start mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-lg flex items-center justify-center ml-4 flex-shrink-0">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight leading-tight">
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
              كيف نعمل معك
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              عملية بسيطة وسهلة لضمان استيراد آمن وموثوق من علي بابا إلى السعودية
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight mb-2">
                تسجيل الطلب
              </h3>
              <p className="text-gray-600 text-sm">
                قم بتسجيل طلب الشحنة معنا
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight mb-2">
                البحث والتفاوض
              </h3>
              <p className="text-gray-600 text-sm">
                نبحث عن أفضل الموردين ونتفاوض لك
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight mb-2">
                الشحن والتجميع
              </h3>
              <p className="text-gray-600 text-sm">
                نجمع شحناتك ونرسلها إلى السعودية
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-playfair text-lg font-bold text-sebaaq-midnight mb-2">
                التخليص والتسليم
              </h3>
              <p className="text-gray-600 text-sm">
                نتولى التخليص الجمركي والتسليم
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sebaaq-midnight">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-8">
            ابدأ الاستيراد من علي بابا اليوم
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            تواصل معنا الآن وسنساعدك في استيراد منتجاتك من الصين بكل سهولة وأمان
          </p>
          <Button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-semibold text-lg">
            تواصل معنا
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Alibaba;
