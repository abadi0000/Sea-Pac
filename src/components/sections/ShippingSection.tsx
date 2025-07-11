
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const shippingFeatures = [
  {
    emoji: "🔍",
    title: "بحث عن أفضل المصانع",
    description: "نساعدك في العثور على المصانع الحقيقية التي تُنتج المنتجات التي تحتاجها بجودة عالية وسعر مناسب، مع التأكد من أن المصنع مرخص وموثوق."
  },
  {
    emoji: "🤝",
    title: "تفاوض مع المصانع",
    description: "فريقنا في الصين يتولى مهمة التحقق النهائي من جودة وشكل وعدد المنتجات قبل شحنها، مما يقلل من احتمالية المفاجآت عند الوصول."
  },
  {
    emoji: "🕵️‍♂️",
    title: "خدمة الشحن من الباب للباب",
    description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
  },
  {
    emoji: "📞",
    title: "شحن جزئي",
    description: "نقدم لك توجيهًا مجانيًا عبر خبرائنا المتخصصين في السوق الصيني، يشمل توصيات للمنتجات والموردين، وتحذيرات من المخاطر المحتملة."
  },
  {
    emoji: "📦",
    title: "فحص البضاعة قبل الشحن",
    description: "نؤمن بأن الثقة لا تكفي. نقوم بفحص المنتجات قبل الشراء والتأكد من مطابقتها للمواصفات، مع التفاوض على أي تعديل أو تحسين مطلوب قبل التصنيع النهائي."
  },
  {
    emoji: "📥",
    title: "تجميع الشحنات من عدة موردين",
    description: "إذا اشتريت من أكثر من مصنع أو مورد، نقوم بتجميع الشحنات جميعها في مستودعاتنا في الصين لضمان شحن موحد وتوفير في التكاليف."
  },
  {
    emoji: "🏪",
    title: "تجميع وتخزين مؤقت في مستودعاتنا",
    description: "نمتلك مستودعات استراتيجية في الصين والسعودية لتخزين شحنتك بشكل آمن ومنظم إلى حين موعد الشحن أو التوزيع النهائي."
  },
  {
    emoji: "🚚",
    title: "فحص الجودة والتفاوض",
    description: "نتولى عملية الشحن كاملة من عنوان المصنع في الصين وحتى باب العميل في السعودية، مما يوفر عليك الوقت والتعقيد والمتابعة مع أطراف متعددة."
  },
  {
    emoji: "🧾",
    title: "التخليص الجمركي في السعودية",
    description: "فريق التخليص التابع لنا يتعامل مع الجمارك السعودية باحترافية عالية لتسريع دخول الشحنة وتقليل أي تأخير محتمل أو رسوم إضافية."
  },
  {
    emoji: "📡",
    title: "تتبع شحنتك لحظة بلحظة",
    description: "نقدم لك نظام تتبع إلكتروني حديث يتيح لك معرفة موقع شحنتك في كل لحظة، من لحظة الشحن إلى التسليم، لضمان الشفافية وراحة البال."
  },
  {
    emoji: "🛒",
    title: "حلول خدمات التجارة الإلكترونية",
    description: "ندعم المتاجر الإلكترونية في السعودية بخدمات مخصصة تشمل الشحن الجزئي، التغليف حسب الطلب، وربط مباشر بين الموردين والمتاجر."
  },
  {
    emoji: "⚙️",
    title: "استشارات مجانية",
    description: "نوفر لك أنظمة شحن مرنة (مثل الشحن الجزئي أو الموحد) باستخدام أدوات تقنية لتقليل التكاليف وتسريع العمليات."
  },
  {
    emoji: "🇸🇦",
    title: "خبرة محلية طويلة",
    description: "بخبرتنا الممتدة لأكثر من 10 سنوات في الشحن بين الصين والسعودية، نحن نعرف القوانين، التحديات، وأفضل الطرق لتوصيل شحنتك باسرع وقت وبأمان."
  }
];

const ShippingSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % shippingFeatures.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            شحن موثوق من الصين
          </h2>
          <h3 className="font-playfair text-xl md:text-2xl font-semibold text-sebaaq-blue mb-4">
            شريكك في الاستيراد من الصين
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلمها مباشرة إلى عنوانك في السعودية.
          </p>
        </div>

        {/* Tabs Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-12 border border-gray-100 text-center">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-3 mb-8 justify-items-center">
            {shippingFeatures.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 border-2 ${
                  activeTab === index
                    ? 'bg-gradient-to-br from-sebaaq-blue to-blue-600 border-sebaaq-blue text-white shadow-lg'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                }`}
              >
                <div className="text-3xl mb-2">{feature.emoji}</div>
                <div className={`text-xs font-medium leading-tight ${
                  activeTab === index ? 'text-white' : 'text-gray-700'
                }`}>
                  {feature.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-2xl p-8 min-h-[120px] flex items-center justify-center text-center">
            <div className="w-full max-w-4xl">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl ml-4">{shippingFeatures[activeTab].emoji}</span>
                <h4 className="text-2xl font-bold text-sebaaq-midnight text-center">
                  {shippingFeatures[activeTab].title}
                </h4>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto">
                {shippingFeatures[activeTab].description}
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-6 space-x-2 space-x-reverse">
            {shippingFeatures.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeTab
                    ? 'w-8 bg-sebaaq-blue'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-sebaaq-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
