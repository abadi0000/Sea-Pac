
const ShippingCalculatorSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-4">
            اعرف تكلفة الشحن
            <span className="gradient-text block">فورًا</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            احصل على تقدير أولي لتكلفة الشحن من الصين إلى السعودية بشكل فوري
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
            <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-6 text-center">
              حاسبة تكلفة الشحن الفورية
            </h3>
            <p className="text-gray-600 text-center mb-8">
              احصل على تقديرات أولية لتكاليف الشحن بسرعة. ما عليك سوى تزويد روبوت الدردشة بمعلومات حول أبعاد شحنتك ووزنها ووجهة الوصول
            </p>
            
            {/* Placeholder for calculator - in real implementation this would be the Elfsight widget */}
            <div className="bg-gradient-to-br from-sebaaq-blue/10 to-blue-400/10 rounded-xl p-12 text-center border-2 border-dashed border-sebaaq-blue/30">
              <div className="w-16 h-16 bg-sebaaq-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-sebaaq-midnight mb-2">حاسبة الشحن التفاعلية</h4>
              <p className="text-gray-600 mb-6">أدخل تفاصيل شحنتك للحصول على تقدير فوري</p>
              <button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                ابدأ الحساب
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculatorSection;
