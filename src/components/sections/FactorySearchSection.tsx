
const FactorySearchSection = () => {
  return (
    <section className="py-20 bg-sebaaq-charcoal relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-sebaaq-blue/20 rounded-full blur-2xl animate-float"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
              البحث عن أفضل
              <span className="gradient-text block">المصانع والأسعار</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              نساعدك في العثور على مصانع حقيقية، تقييم الجودة، ومقارنة الأسعار
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 mb-8 border border-red-500/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  !
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl">90%</h3>
                  <p className="text-gray-300 text-sm">من المنتجات المعروضة أونلاين</p>
                </div>
              </div>
              <p className="text-white leading-relaxed">
                من المنتجات المعروضة اون لاين مثل في علي بابا وغيره، هي من وسطاء وشركات تجارية ليست بشكل مباشر من المصانع
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">تحديد المصادر المثلى</h3>
                  <p className="text-gray-400">نساعدك في العثور على المصانع الأكثر ملاءمة لاحتياجاتك المحددة</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">تحليل التكاليف والتفاوض</h3>
                  <p className="text-gray-400">نعمل على تأمين أفضل الأسعار التنافسية من خلال التفاوض الاستراتيجي</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">ضمان الجودة والمطابقة</h3>
                  <p className="text-gray-400">فحص دقيق للبضائع قبل الشحن لضمان المطابقة للمواصفات</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-sebaaq-blue/20 to-blue-400/20 rounded-3xl p-8 backdrop-blur-sm border border-sebaaq-blue/30">
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-xl mb-2">سي باك طريقك المباشر للمصانع</h3>
                <p className="text-gray-300">تجاهل الوسطاء والكيانات التجارية</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-sebaaq-blue rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-sm">تحديد المصانع</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-sm">فحص الجودة</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-sebaaq-blue rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-sm">التفاوض</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-white text-sm">الشحن المباشر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactorySearchSection;
