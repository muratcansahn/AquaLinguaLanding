
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion, useReducedMotion } from "framer-motion";

// Sabit yıldız sayıları ve baş harfler
const testimonialDetails = [
  { stars: 5, initials: "AY" },
  { stars: 5, initials: "MK" },
  { stars: 4, initials: "ZD" }
];

const TestimonialSection = () => {
  const { t } = useTranslation();
  const prefersReducedMotion = useReducedMotion();
  
  // Çeviri dosyasından kullanıcı yorumlarını alıyoruz
  const testimonials = [
    {
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      content: t('testimonials.items.0.content')
    },
    {
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      content: t('testimonials.items.1.content')
    },
    {
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      content: t('testimonials.items.2.content')
    }
  ];
  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="testimonials">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute -z-10 top-40 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            {t('testimonials.mainTitle')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('testimonials.mainDescription')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden h-full">
                <CardHeader className="pb-2 pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < testimonialDetails[index].stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="absolute -top-1 -left-1 h-12 w-12 flex items-center justify-center">
                    <Quote className="h-8 w-8 text-purple-200 rotate-180" />
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10 pl-6 italic">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter className="border-t border-gray-100 pt-4">
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4 bg-gradient-to-br from-[#8B5CF6] to-[#1EAEDB] shadow-md">
                      <AvatarFallback className="text-white font-medium">
                        {testimonialDetails[index].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
