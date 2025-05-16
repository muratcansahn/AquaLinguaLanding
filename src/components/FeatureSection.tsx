
import React from 'react';
import { BookOpen, Star, ListCheck, Calendar } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-8 w-8 text-[#8B5CF6]" />,
    title: "Kelime Listeleri",
    description: "Kategorilere ayrılmış, seviyenize uygun kelime listeleri ile öğrenmenizi hızlandırın."
  },
  {
    icon: <Star className="h-8 w-8 text-[#1EAEDB]" />,
    title: "Kişiselleştirilmiş Öğrenme",
    description: "Bildiğiniz ve bilmediğiniz kelimeleri işaretleyerek size özel öğrenme deneyimi."
  },
  {
    icon: <ListCheck className="h-8 w-8 text-[#8B5CF6]" />,
    title: "İlerleme Takibi",
    description: "Kelime istatistiklerinizi takip edin ve öğrenme sürecinizi analiz edin."
  },
  {
    icon: <Calendar className="h-8 w-8 text-[#1EAEDB]" />,
    title: "Günlük Aktiviteler",
    description: "Düzenli öğrenme alışkanlığı kazanmak için günlük aktiviteler ve hatırlatmalar."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gray-50" id="features">
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
            <div key={index} className="feature-card bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
