
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, Package, Truck, Ship, Plane } from 'lucide-react';

const ShippingCalculatorSection = () => {
  const [formData, setFormData] = useState({
    weight: '',
    dimensions: '',
    origin: '',
    destination: '',
    shippingType: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateShipping = () => {
    console.log('Calculating shipping for:', formData);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-5 sm:opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            اعرف تكلفة الشحن فورًا
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            احصل على تقدير أولي لتكلفة الشحن من الصين إلى السعودية بشكل فوري
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Calculator Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-sebaaq-blue/30 order-2 lg:order-1">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-white flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-sebaaq-blue" />
                حاسبة تكلفة الشحن
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-gray-300 text-sm sm:text-base">الوزن (كيلوغرام)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="أدخل الوزن"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions" className="text-gray-300 text-sm sm:text-base">الأبعاد (سم)</Label>
                  <Input
                    id="dimensions"
                    placeholder="الطول × العرض × الارتفاع"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400 h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin" className="text-gray-300 text-sm sm:text-base">المدينة المرسلة</Label>
                  <Select onValueChange={(value) => handleInputChange('origin', value)}>
                    <SelectTrigger className="bg-white/20 border-gray-400 text-white h-10 sm:h-11">
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guangzhou">قوانغتشو</SelectItem>
                      <SelectItem value="shenzhen">شنتشن</SelectItem>
                      <SelectItem value="shanghai">شنغهاي</SelectItem>
                      <SelectItem value="beijing">بكين</SelectItem>
                      <SelectItem value="yiwu">ييوو</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination" className="text-gray-300 text-sm sm:text-base">المدينة المستقبلة</Label>
                  <Select onValueChange={(value) => handleInputChange('destination', value)}>
                    <SelectTrigger className="bg-white/20 border-gray-400 text-white h-10 sm:h-11">
                      <SelectValue placeholder="اختر المدينة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="riyadh">الرياض</SelectItem>
                      <SelectItem value="jeddah">جدة</SelectItem>
                      <SelectItem value="dammam">الدمام</SelectItem>
                      <SelectItem value="mecca">مكة المكرمة</SelectItem>
                      <SelectItem value="medina">المدينة المنورة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shippingType" className="text-gray-300 text-sm sm:text-base">نوع الشحن</Label>
                <Select onValueChange={(value) => handleInputChange('shippingType', value)}>
                  <SelectTrigger className="bg-white/20 border-gray-400 text-white h-10 sm:h-11">
                    <SelectValue placeholder="اختر نوع الشحن" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sea">
                      <div className="flex items-center gap-2">
                        <Ship className="w-4 h-4" />
                        شحن بحري (15-30 يوم)
                      </div>
                    </SelectItem>
                    <SelectItem value="air">
                      <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4" />
                        شحن جوي (3-7 أيام)
                      </div>
                    </SelectItem>
                    <SelectItem value="express">
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4" />
                        شحن سريع (1-3 أيام)
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateShipping}
                className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white h-11 sm:h-12 text-sm sm:text-base"
              >
                <Package className="w-4 h-4 mr-2" />
                احسب التكلفة
              </Button>
            </CardContent>
          </Card>

          {/* Pricing Chart */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-2xl">
              <picture>
                <source 
                  srcSet="/lovable-uploads/fc517a5f-1ae6-42e8-80af-97ea437eaf38.webp" 
                  type="image/webp"
                />
                <img 
                  src="/lovable-uploads/fc517a5f-1ae6-42e8-80af-97ea437eaf38.png" 
                  alt="مخطط تقدير أسعار الشحن" 
                  className="w-full rounded-lg"
                  loading="lazy"
                />
              </picture>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                تحليل ذكي للأسعار
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                نستخدم خوارزميات متقدمة لتحليل أسعار الشحن وتقديم أفضل العروض المتاحة بناءً على احتياجاتكم المحددة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingCalculatorSection;
