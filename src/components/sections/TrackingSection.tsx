
const TrackingSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            تتبع شحنتك
            <span className="gradient-text block">لحظة بلحظة</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            <strong>ندرك أهمية البقاء على اطلاع دائم بحركة شحناتك، لذلك نقدم لك نظام تتبع شحنات متطور يمنحك رؤية كاملة وراحة بال تامة</strong>
          </p>

          <div className="bg-gradient-to-br from-sebaaq-blue/10 to-blue-400/10 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4">
                  ابق على اطلاع دائم: تتبع الشحنات المباشر
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  تتبع شحنتك لحظة بلحظة مع نظام التتبع من سي باك لوجيستك
                </p>
                <button className="bg-sebaaq-blue hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  تتبع الشحنة
                </button>
              </div>
              
              <div className="flex-1 max-w-md">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-800">تم الاستلام من المصنع</div>
                        <div className="text-xs text-gray-500">الصين - شنغهاي</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-sebaaq-blue rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-800">في الطريق</div>
                        <div className="text-xs text-gray-500">شحن جوي</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500">وصول المملكة</div>
                        <div className="text-xs text-gray-400">قريباً</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
