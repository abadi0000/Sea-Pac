
import { useState, useEffect } from 'react';
import { ArrowDown, Truck, Ship, Plane, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    { icon: Ship, text: "شحن بحري آمن وموثوق" },
    { icon: Plane, text: "شحن جوي سريع ومضمون" },
    { icon: Truck, text: "توصيل مباشر لعنوانك" },
    { icon: Package, text: "تغليف احترافي ومتقن" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = features[currentFeature].icon;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-20000 ease-linear animate-[subtle-zoom_20s_ease-in-out_infinite_alternate]"
          style={{
            backgroundImage: `url('/lovable-uploads/ff0a1b84-4ef4-4abd-b976-94c738cd52ce.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-sebaaq-midnight/90 via-sebaaq-midnight/80 to-sebaaq-charcoal/85" />
      </div>
      
      {/* Dynamic Grid Pattern */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 right-10 w-6 h-6 bg-sebaaq-blue rounded-full animate-float opacity-80 shadow-lg shadow-sebaaq-blue/50"></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 bg-blue-400 rounded-full animate-float opacity-60 shadow-lg shadow-blue-400/50" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-sebaaq-blue rounded-full animate-float opacity-70 shadow-lg shadow-sebaaq-blue/50" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-blue-300 rounded-full animate-float opacity-50 shadow-lg shadow-blue-300/50" style={{ animationDelay: '3s' }}></div>

      {/* Main Content - Enhanced */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className={`transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Logo with enhanced animation */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d7f46067-5eb1-4e56-8b93-d7c37d04c951.png" 
              alt="شعار سي باك" 
              className="h-28 mx-auto animate-fade-in transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
          
          {/* Enhanced Main Headline */}
          <div className="mb-8">
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
              سي باك لوجستيك
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-sebaaq-blue to-blue-400 mx-auto rounded-full mb-6"></div>
            <h2 className="font-cairo text-2xl md:text-4xl lg:text-5xl font-semibold gradient-text leading-relaxed">
              حلول الشحن الذكية من الصين إلى المملكة
            </h2>
          </div>
          
          {/* Dynamic Feature Display */}
          <div className="mb-8 flex items-center justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-sebaaq-blue/30">
              <CurrentIcon className="w-8 h-8 text-sebaaq-blue" />
            </div>
            <p className="text-xl md:text-2xl text-white font-medium">
              {features[currentFeature].text}
            </p>
          </div>
          
          {/* Enhanced Value Proposition */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10 shadow-2xl">
            <p className="text-lg md:text-xl text-gray-200 max-w-5xl mx-auto leading-relaxed">
              نوفر حلولاً لوجستية متكاملة للشركات والأفراد، <span className="text-sebaaq-blue font-semibold">وكيل شحن معتمد من الصين</span>، 
              مع ضمان أعلى معايير الأمان والاحترافية
            </p>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                <span>استلام من المصانع</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                <span>تسليم مباشر لعنوانك</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                <span>ضمان شامل</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-gradient-to-r from-sebaaq-blue to-blue-500 hover:from-blue-600 hover:to-sebaaq-blue text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sebaaq-blue/50 border-2 border-transparent hover:border-white/20">
              <span className="relative z-10 flex items-center gap-3">
                <Package className="w-6 h-6" />
                اعرف تكلفة الشحن فورًا
              </span>
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <Link 
              to="/consultation-services"
              className="group border-2 border-white/80 hover:border-sebaaq-blue text-white hover:bg-white hover:text-sebaaq-midnight px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                <Ship className="w-6 h-6" />
                الخدمات الاستشارية
              </span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>+1000 شحنة مُسلّمة</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>معتمد رسمياً</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span>دعم 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm">اكتشف المزيد</span>
          <ArrowDown className="text-white w-6 h-6 opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
