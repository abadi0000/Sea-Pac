
import { useState, useEffect } from 'react';
import { ArrowDown, Truck, Ship, Plane, Package } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sebaaq-midnight via-sebaaq-charcoal to-sebaaq-midnight">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/ff0a1b84-4ef4-4abd-b976-94c738cd52ce.png')`,
          }}
        />
        <div className="absolute inset-0 bg-sebaaq-midnight/70" />
      </div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="tech-grid"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Logo */}
          <div className="mb-12">
            <img 
              src="/lovable-uploads/d7f46067-5eb1-4e56-8b93-d7c37d04c951.png" 
              alt="شعار سي باك" 
              className="h-24 mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Main Title */}
          <div className="mb-12 space-y-6">
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-wide">
              سي باك لوجستيك
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-24 bg-sebaaq-blue rounded-full"></div>
            </div>
            
            <h2 className="font-cairo text-2xl md:text-3xl lg:text-4xl font-light text-blue-200 leading-relaxed">
              حلول الشحن الذكية من الصين إلى المملكة
            </h2>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Ship className="w-8 h-8 text-sebaaq-blue mx-auto mb-3" />
              <p className="text-white text-sm font-medium">شحن بحري</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Plane className="w-8 h-8 text-sebaaq-blue mx-auto mb-3" />
              <p className="text-white text-sm font-medium">شحن جوي</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Truck className="w-8 h-8 text-sebaaq-blue mx-auto mb-3" />
              <p className="text-white text-sm font-medium">توصيل مباشر</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Package className="w-8 h-8 text-sebaaq-blue mx-auto mb-3" />
              <p className="text-white text-sm font-medium">تغليف احترافي</p>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              نوفر حلولاً لوجستية متكاملة للشركات والأفراد، 
              <span className="text-sebaaq-blue font-semibold"> وكيل شحن معتمد من الصين</span>، 
              مع ضمان أعلى معايير الأمان والاحترافية
            </p>
            
            {/* Trust Indicators */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>استلام من المصانع</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>تسليم مباشر لعنوانك</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>ضمان شامل</span>
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-sebaaq-blue to-blue-500 hover:from-blue-600 hover:to-sebaaq-blue text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg">
              <span className="flex items-center gap-3">
                <Package className="w-5 h-5" />
                احسب تكلفة الشحن فورًا
              </span>
            </button>
            
            <Link 
              to="/consultation-services"
              className="group border-2 border-white/60 hover:border-sebaaq-blue text-white hover:bg-sebaaq-blue hover:text-white px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                <Ship className="w-5 h-5" />
                الخدمات الاستشارية
              </span>
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2">+1000</div>
              <div className="text-white/80 text-sm">شحنة مُسلّمة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2">24/7</div>
              <div className="text-white/80 text-sm">دعم فني</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-sebaaq-blue mb-2">100%</div>
              <div className="text-white/80 text-sm">ضمان الجودة</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm">اكتشف المزيد</span>
          <ArrowDown className="text-white/60 w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
