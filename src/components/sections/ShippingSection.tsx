
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ship, Package, Clock, Shield } from 'lucide-react';

const ShippingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-sebaaq-midnight mb-6">
            شحن موثوق من الصين
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            نوفر خدمات شحن متكاملة وموثوقة لضمان وصول آلاتكم ومعداتكم بأمان وفي الوقت المحدد
          </p>
        </div>

        {/* Main Content with Port Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Port Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/f7fee70f-6642-464a-9248-24c0c3d0b0ce.png" 
              alt="ميناء سيباك للشحن" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-6">
              شريكك في الاستيراد من الصين
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              نوفر حلولاً لوجستية متكاملة للشركات والأفراد، وكيل شحن معتمد من الصين، مع ضمان أعلى معايير الأمان والاحترافية. نستلم شحنتك من مصانع الصين ونسلمها مباشرة إلى عنوانك في السعودية.
            </p>
            
            {/* Warning Box */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <span className="text-lg font-bold text-red-600">90%</span>
                </div>
                <h4 className="font-bold text-red-800">من المنتجات المعروضة أونلاين هي من وسطاء وشركات! وباسعار مرتفعة</h4>
              </div>
              <p className="text-red-700 text-sm leading-relaxed">
                في الواقع، أغلب المنتجات المعروضة على الإنترنت – سواء عبر مواقع كبرى مثل علي بابا أو من خلال موردين مستقلين – تُقدَّم من خلال وسطاء أو شركات تجارية لا تُمثل المصنع بشكل مباشر. هذا التعدد في الوساطة يؤدي إلى زيادة مرتفعة في الأسعار، غالبًا تتجاوز القيمة الحقيقية للمنتج.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-sebaaq-midnight mb-2">سي باك طريقك المباشر للمصانع</h4>
              <p className="text-gray-600 text-sm">تجاهل الوسطاء والكيانات التجارية</p>
            </div>
            
            {/* Process Steps */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sebaaq-blue font-bold">🏭</span>
                </div>
                <h5 className="font-semibold text-sebaaq-midnight text-sm">تحديد المصانع</h5>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sebaaq-blue font-bold">✅</span>
                </div>
                <h5 className="font-semibold text-sebaaq-midnight text-sm">فحص الجودة</h5>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sebaaq-blue font-bold">🤝</span>
                </div>
                <h5 className="font-semibold text-sebaaq-midnight text-sm">التفاوض</h5>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sebaaq-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-sebaaq-blue font-bold">🚚</span>
                </div>
                <h5 className="font-semibold text-sebaaq-midnight text-sm">الشحن المباشر</h5>
              </div>
            </div>
          </div>
        </div>

        {/* Container Organization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-6">
                تنظيم وإدارة الشحنات
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نستخدم أحدث تقنيات تنظيم الحاويات لضمان الاستفادة القصوى من المساحة وحماية البضائع أثناء النقل.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تصنيف وترقيم دقيق للبضائع</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>استغلال أمثل لمساحة الحاويات</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>حماية متقدمة للمعدات الحساسة</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تتبع مباشر لحالة الشحنة</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/b9a6b73c-7a7c-4210-8267-bad296bc4b56.png" 
                alt="تنظيم الحاويات" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* AI Warehouse Management */}
        <div className="bg-gradient-to-r from-sebaaq-blue/5 to-blue-400/5 rounded-2xl shadow-xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/lovable-uploads/d14ba9d4-afc3-4a8d-8141-dbaec2d0a42b.png" 
                alt="نظام إدارة المخازن الذكي" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-6">
                إدارة ذكية للمخازن
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                نطبق أحدث تقنيات الذكاء الاصطناعي في إدارة المخازن وتتبع البضائع لضمان الدقة والكفاءة.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تتبع فوري للمنتجات بالذكاء الاصطناعي</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تحليل الأبعاد والمساحات تلقائياً</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تحسين التخزين والاسترجاع</span>
                </li>
                <li className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-2 h-2 bg-sebaaq-blue rounded-full"></div>
                  <span>تقارير مفصلة ودقيقة</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button className="bg-gradient-to-r from-sebaaq-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            احصل على عرض سعر للشحن
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShippingSection;
