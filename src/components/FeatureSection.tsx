
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Star, ListCheck, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";

const featureIcons = [
  { icon: <BookOpen className="h-10 w-10" />, color: "from-blue-500 to-cyan-400" },
  { icon: <Star className="h-10 w-10" />, color: "from-orange-400 to-amber-300" },
  { icon: <ListCheck className="h-10 w-10" />, color: "from-green-500 to-emerald-400" },
  { icon: <Calendar className="h-10 w-10" />, color: "from-purple-500 to-violet-400" }
];

const FeatureSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  
  // Sabit özellik listesi oluşturuyoruz
  const features = [
    {
      title: t('features.items.0.title'),
      description: t('features.items.0.description')
    },
    {
      title: t('features.items.1.title'),
      description: t('features.items.1.description')
    },
    {
      title: t('features.items.2.title'),
      description: t('features.items.2.description')
    },
    {
      title: t('features.items.3.title'),
      description: t('features.items.3.description')
    }
  ];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden" id="features">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -z-10 top-20 right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -z-10 bottom-20 left-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            {t('features.mainTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('features.mainDescription')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg bg-white hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden h-full">
                <CardHeader className="pb-2">
                  <div className={`mb-4 p-3 rounded-xl bg-gradient-to-r ${featureIcons[index].color} flex justify-center items-center w-14 h-14 text-white shadow-md`}>
                    {featureIcons[index].icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 text-sm italic text-gray-500">
                    {t('common.comingSoon')}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
