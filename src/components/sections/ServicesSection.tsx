
import { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ServiceCard = ({ title, description, features, isHovered, onHover, onLeave }: ServiceCardProps) => {
  return (
    <div 
      className={`relative bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-3xl' : 'scale-100'
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative z-10">
        <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Hover Effect Background */}
      <div className={`absolute inset-0 bg-gradient-to-br from-sebaaq-blue/5 to-blue-400/5 rounded-2xl transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}></div>
    </div>
  );
};

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      title: "خدمة الشحن من الباب للباب",
      description: "نتكفل بكل تفاصيل شحن بضائعك من مكان موردك مباشرة إلى عنوانك في المملكة العربية السعودية.",
      features: [
        "استلام من المصانع الصينية",
        "التخليص الجمركي الكامل",
        "التسليم حتى باب منزلك أو مكتبك",
        "تتبع الشحنة لحظة بلحظة"
      ]
    },
    {
      title: "حلول خدمات التجارة الإلكترونية",
      description: "ندعم نمو تجارتك الإلكترونية بتوفير خدمات لوجستية متخصصة تلبي احتياجات متجرك الإلكتروني.",
      features: [
        "إدارة المخزون الذكية",
        "شحن سريع للعملاء",
        "معالجة الطلبات التلقائية",
        "دعم تقني متخصص"
      ]
    },
    {
      title: "تفاوض مع المصانع",
      description: "بفضل خبرتنا في المصانع والسوق الصيني نستطيع تقديم لك أسعار وقيمة إضافية عن طريق التفاوض مع المصنع.",
      features: [
        "تفاوض احترافي على الأسعار",
        "توفير في مدة التصنيع",
        "ضمان جودة المنتجات",
        "علاقات مباشرة مع المصانع"
      ]
    },
    {
      title: "استشارات مجانية",
      description: "نوفر رؤى متعمقة ونصائح عملية في سوق الصناعة الصيني في كافة المجالات.",
      features: [
        "تحليل السوق الصيني",
        "نصائح اختيار الموردين",
        "إرشادات الجودة والمطابقة",
        "استراتيجيات التوريد"
      ]
    },
    {
      title: "فحص البضائع",
      description: "نضمن لك جودة المنتجات من خلال فحصها والتأكد من سلامتها قبل الشحن.",
      features: [
        "فحص جودة شامل",
        "تقارير مفصلة بالصور",
        "التأكد من المطابقة للمواصفات",
        "اختبارات الأداء"
      ]
    },
    {
      title: "تجميع وتخزين",
      description: "إذا كنت تتعامل مع عدة موردين، نوفر لك خدمة تجميع شحناتك وتخزينها بأمان.",
      features: [
        "تجميع من موردين متعددين",
        "تخزين آمن ومؤمن",
        "إعادة تعبئة احترافية",
        "توفير تكاليف الشحن"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-4">
            لماذا تختار
            <span className="gradient-text block">سي باك؟</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            سي باك لوجيستيك، شركة سعودية متخصصة في الخدمات اللوجستية، تتفهم التحديات التي تواجه الشركات والأفراد في عمليات الاستيراد من الصين، توفر خدمات إحترافية ودعم عملاء قوي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              features={service.features}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>

        {/* Additional Service Highlights */}
        <div className="mt-20 bg-gradient-to-r from-sebaaq-midnight to-sebaaq-blue rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-6">حلول لوجستية ذكية</h3>
              <h4 className="text-xl font-semibold mb-4">شحن جزئي سريع ومباشر من الصين إلى السعودية</h4>
              <p className="text-white/90 leading-relaxed mb-6">
                استورد بضائعك بمرونة وكفاءة. يتيح لك الشحن الجزئي مشاركة مساحة الحاوية مع شحنات أخرى، مما يقلل التكاليف
              </p>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <span>خبرة محلية طويلة في السوق الصيني</span>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">شحن ذكي</h4>
                <p className="text-white/80">حلول مرنة وفعالة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
