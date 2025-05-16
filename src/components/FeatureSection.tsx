
import React from 'react';
import { BookOpen, Star, ListCheck, Calendar, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-[#8B5CF6]" />,
    title: "Kelime Listeleri",
    description: "Kategorilere ayrılmış, seviyenize uygun kelime listeleri ile öğrenmenizi hızlandırın."
  },
  {
    icon: <Star className="h-10 w-10 text-[#1EAEDB]" />,
    title: "Kişiselleştirilmiş Öğrenme",
    description: "Bildiğiniz ve bilmediğiniz kelimeleri işaretleyerek size özel öğrenme deneyimi."
  },
  {
    icon: <ListCheck className="h-10 w-10 text-[#8B5CF6]" />,
    title: "İlerleme Takibi",
    description: "Kelime istatistiklerinizi takip edin ve öğrenme sürecinizi analiz edin."
  },
  {
    icon: <Calendar className="h-10 w-10 text-[#1EAEDB]" />,
    title: "Günlük Aktiviteler",
    description: "Düzenli öğrenme alışkanlığı kazanmak için günlük aktiviteler ve hatırlatmalar."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Kelime Öğrenmenin En Etkili Yolu
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Uygulamamızın özellikleri ile dil öğreniminizi daha eğlenceli ve verimli hale getirin.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4 p-2 rounded-lg inline-flex bg-gradient-to-br from-purple-50 to-blue-50">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {feature.description}
                </CardDescription>
                <div className="mt-4 flex items-center text-sm text-[#8B5CF6]">
                  <CheckCircle className="h-4 w-4 mr-1" /> Hemen Başla
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
