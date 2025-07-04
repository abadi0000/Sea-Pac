
const IndustrySection = () => {
  return (
    <section className="py-20 bg-sebaaq-charcoal relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/32137c2d-3ef3-44c2-b0a7-849d53fca26d.png')`
        }}
      />
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-sebaaq-midnight/50 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
                The Future of Industry.
                <span className="gradient-text block">Engineered by SEBAAQ.</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Transforming traditional manufacturing through intelligent automation and Industry 4.0 solutions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Smart Factory Transformation</h3>
                  <p className="text-gray-400">Expert consultations on automation and intelligent manufacturing systems.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Efficiency Optimization</h3>
                  <p className="text-gray-400">Solutions to increase production efficiency and reduce operational costs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">End-to-End Support</h3>
                  <p className="text-gray-400">Complete support from consultation to supply, installation, and maintenance.</p>
                </div>
              </div>
            </div>

            <button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Industry Solutions
            </button>
          </div>

          {/* Interactive Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-sebaaq-blue/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-sm border border-sebaaq-blue/30">
              {/* Animated Tech Elements */}
              <div className="grid grid-cols-3 gap-4 h-64">
                <div className="space-y-4">
                  <div className="h-8 bg-sebaaq-blue/30 rounded animate-pulse"></div>
                  <div className="h-12 bg-blue-400/20 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="h-6 bg-sebaaq-blue/40 rounded animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                <div className="space-y-4">
                  <div className="h-16 bg-blue-400/30 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="h-8 bg-sebaaq-blue/20 rounded animate-pulse" style={{animationDelay: '0.8s'}}></div>
                  <div className="h-10 bg-blue-400/40 rounded animate-pulse" style={{animationDelay: '1.3s'}}></div>
                </div>
                <div className="space-y-4">
                  <div className="h-6 bg-sebaaq-blue/25 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="h-14 bg-blue-400/35 rounded animate-pulse" style={{animationDelay: '0.7s'}}></div>
                  <div className="h-8 bg-sebaaq-blue/30 rounded animate-pulse" style={{animationDelay: '1.2s'}}></div>
                </div>
              </div>
              
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center animate-pulse">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-sebaaq-blue rounded-full animate-float opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
