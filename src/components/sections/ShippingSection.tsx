
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

        {/* Main Content with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Alibaba Shipping Image */}
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/4d48ca1a-8931-4f9e-9817-ec991f917135.png" 
              alt="شحن علي بابا" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-sebaaq-midnight mb-6">
              شريكك في الاستيراد من الصين
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              بفضل شراكتنا مع أكبر المنصات التجارية وشركات الشحن، نضمن لكم تجربة استيراد سلسة وموثوقة من الصين إلى المملكة العربية السعودية.
            </p>
            
            {/* Features */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Ship className="w-6 h-6 text-sebaaq-blue" />
                <span className="text-gray-700">شحن بحري وجوي</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Package className="w-6 h-6 text-sebaaq-blue" />
                <span className="text-gray-700">تعبئة آمنة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Clock className="w-6 h-6 text-sebaaq-blue" />
                <span className="text-gray-700">توقيتات دقيقة</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Shield className="w-6 h-6 text-sebaaq-blue" />
                <span className="text-gray-700">تأمين شامل</span>
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
                src="/lovable-uploads/eaa468a4-4039-4a2f-80f5-f0483db26eca.png" 
                alt="تنظيم الحاويات" 
                className="w-full rounded-lg shadow-lg"
              />
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
