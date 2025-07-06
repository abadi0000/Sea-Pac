
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
    // This would typically connect to a real calculation API
    console.log('Calculating shipping for:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-sebaaq-midnight to-sebaaq-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-6">
            اعرف تكلفة الشحن فورًا
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            احصل على تقدير أولي لتكلفة الشحن من الصين إلى السعودية بشكل فوري
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Calculator Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-sebaaq-blue/30">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <Calculator className="w-6 h-6 text-sebaaq-blue" />
                حاسبة تكلفة الشحن
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-gray-300">الوزن (كيلوغرام)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="أدخل الوزن"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions" className="text-gray-300">الأبعاد (سم)</Label>
                  <Input
                    id="dimensions"
                    placeholder="الطول × العرض × الارتفاع"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    className="bg-white/20 border-gray-400 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin" className="text-gray-300">المدينة المرسلة</Label>
                  <Select onValueChange={(value) => handleInputChange('origin', value)}>
                    <SelectTrigger className="bg-white/20 border-gray-400 text-white">
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
                  <Label htmlFor="destination" className="text-gray-300">المدينة المستقبلة</Label>
                  <Select onValueChange={(value) => handleInputChange('destination', value)}>
                    <SelectTrigger className="bg-white/20 border-gray-400 text-white">
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
                <Label htmlFor="shippingType" className="text-gray-300">نوع الشحن</Label>
                <Select onValueChange={(value) => handleInputChange('shippingType', value)}>
                  <SelectTrigger className="bg-white/20 border-gray-400 text-white">
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
                className="w-full bg-sebaaq-blue hover:bg-blue-600 text-white"
              >
                <Package className="w-4 h-4 mr-2" />
                احسب التكلفة
              </Button>
            </CardContent>
          </Card>

          {/* Pricing Chart Image */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="/lovable-uploads/fc517a5f-1ae6-42e8-80af-97ea437eaf38.png" 
                alt="مخطط تقدير أسعار الشحن" 
                className="w-full rounded-lg"
              />
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                تحليل ذكي للأسعار
              </h3>
              <p className="text-gray-300 leading-relaxed">
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
