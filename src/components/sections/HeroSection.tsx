
import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(18, 18, 18, 0.8)), url('/lovable-uploads/ff0a1b84-4ef4-4abd-b976-94c738cd52ce.png')`
        }}
      />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-sebaaq-blue rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-sebaaq-blue rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <img 
            src="/lovable-uploads/d7f46067-5eb1-4e56-8b93-d7c37d04c951.png" 
            alt="شعار سيباك" 
            className="h-24 mx-auto mb-8 animate-fade-in"
          />
          
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            سيباك: هندسة
            <span className="gradient-text block mt-2">تدفق المستقبل</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            من قلب الصناعة الصينية إلى مشاريعكم الرائدة في المملكة العربية السعودية
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              استكشف خدماتنا
            </button>
            <Link 
              to="/consultation-services"
              className="border-2 border-white text-white hover:bg-white hover:text-sebaaq-midnight px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              الخدمات الاستشارية
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white w-6 h-6 opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
