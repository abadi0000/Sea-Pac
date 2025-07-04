
const WarehouseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sebaaq-blue/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            مستودعات متكاملة في
            <span className="gradient-text block">السعودية والصين</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            نمتلك شبكة متطورة من المستودعات في مواقع استراتيجية في المملكة العربية السعودية والصين. تمكننا هذه البنية التحتية من تقديم مجموعة شاملة من خدمات التخزين، التجميع، والتوزيع، المصممة لتحسين كفاءة سلسلة الإمداد الخاصة بك وتقليل زمن التسليم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-sebaaq-blue to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4 text-center">
              مستودعات الصين
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <span>استلام وفحص البضائع</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <span>تجميع الشحنات من موردين متعددين</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <span>التخزين المؤقت والطويل الأمد</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-sebaaq-blue rounded-full mt-2 flex-shrink-0"></div>
                <span>إعداد الشحنات للنقل الدولي</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h3 className="font-playfair text-2xl font-bold text-sebaaq-midnight mb-4 text-center">
              مستودعات السعودية
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>التخليص الجمركي السريع</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>التوزيع على مختلف المدن</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>خدمات التخزين المحلية</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>التسليم السريع للعملاء</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseSection;
