
const VisionSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-8">
            The Trust Behind
            <span className="gradient-text block">the Technology</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
            Our commitment goes beyond logistics. We build lasting partnerships based on transparency, 
            reliability, and innovative solutions that exceed expectations.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the preferred logistics partner connecting trade between China and Saudi Arabia, 
                fostering economic growth and prosperity.
              </p>
            </div>

            {/* Values */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-6 h-6 border-2 border-white rounded"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparency, reliability, and client-focus form the foundation of every partnership we build, 
                ensuring trust at every step.
              </p>
            </div>

            {/* Goal */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full ml-1"></div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-sebaaq-midnight mb-4">Our Goal</h3>
              <p className="text-gray-600 leading-relaxed">
                To build long-term relationships and provide innovative solutions that drive success 
                and exceed client expectations consistently.
              </p>
            </div>
          </div>

          {/* Company Stats in a more visual way */}
          <div className="mt-16 bg-gradient-to-r from-sebaaq-midnight to-sebaaq-blue rounded-2xl p-8 text-white">
            <h3 className="font-playfair text-2xl font-bold mb-6">Building the Digital Silk Road</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              Through strategic partnerships, cutting-edge technology, and unwavering commitment to excellence, 
              SEBAAQ is pioneering the future of China-Saudi Arabia trade relations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
